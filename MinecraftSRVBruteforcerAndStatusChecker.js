/*

Originally made for mc.emeraldcraft.com.ar & Discord.js but adapted to an universal function
to work with arguments and return a decent object

Requires: request-promise (https://www.npmjs.com/package/request-promise), didnt use the promise so you can remove it if you want

*/

const dns = require('dns');
const req = require('request-promise');

function bruteforceSRV(hostname) {
    dns.resolveSrv(`_minecraft._tcp.${hostname}`, function(err, records) {
        if(err) return `returned error, server might be down? or deleted the SRV record`;
        dns.resolve4(records[0].name, function(err, records4) {
            if(err) return `returned error, server might be down? or deleted the A record`;
            const options = {
                url: `https://check-host.net/check-tcp?host=${records4}:${records[0].port}`,
                headers: {
                    'Accept': 'application/json'
                }
            };

            req(options).then(function(body) {
                const json = JSON.parse(body);
                let i = 0, nodestoarray = Object.keys(json.nodes).map(function(key) {return [Number(key), json.nodes[key]];}),serverStatus = "Server is offline";
                nodestoarray.forEach(function(node) {
                    if(node[1][5] == "OK") serverStatus = `Server is online`;
                });
                return {success: true, error: null, resolved: { srv: { name: records[0].name, port: records[0].port, full: `${records[0].name}:${records[0].port}` }, a: { ip: records4, port: records[0].port, full: `${records4}:${records[0].port}` }, status: serverStatus }};
            }).catch(function(err) {
                return {success: false, error: err};
            });
        });
    });
}
