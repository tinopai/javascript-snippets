/*

  You can easily check for 4 and 3 (total) letter domains on afraid.org's registry
  Im thinking of adding an Interval but it doesnt seem to return the value
  
  Basically it checks for 4 and 5 letter domains (because of dots), then looks if it is public by "scraping"
  the <td>s of the website, if no domain was found after looping thru every <tr>, then it clicks the Next Page href

  Working as of 16/07/2020

*/
(() => {
    let domainBuilder = [];
    document.querySelectorAll(`tr`).forEach(e => {
        let xs = e.querySelectorAll("td");
        let xa = xs[0].querySelector("a");
        if(xa != null && xs[1] != null) {
            let isPublic = (xs[1].innerText == "public") ? true : false;
            if((xa.innerText.length == 5 || xa.innerText.length == 4) && xa.innerText.includes(".") && isPublic) {
                domainBuilder.push(xa.innerText);
            }
        }
    });
    if(domainBuilder.length == 0) {
        let selectorNextWebsite = document.querySelector(`body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > center:nth-child(2) > center:nth-child(1) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(104) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(6) > a:nth-child(1) > font:nth-child(1)`);
        selectorNextWebsite.click();
    } else {
        return domainBuilder;
    }
})();
