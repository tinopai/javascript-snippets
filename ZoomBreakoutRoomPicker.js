function pickUsers(users, max) {
    // Declare useful variables
    var i = 0, x = 0, b = 0, userObjectHelper = [], pickedUsers = [];
    // Shuffle array values so it's not the same everytime you run the function
    users.sort(() => Math.random() - 0.5);
    // Where the magic happens
    users.forEach(function(user) {
        // Check if iterable is more than the max users set
        if(i >= max) {
            // Reset variables and add users to main variable (picked user list)
            pickedUsers[b] = userObjectHelper, userObjectHelper = [ "" ];
            i = 0, x = 0, b++;
        }
        // Increment variables and set user to userObjectHelper
        userObjectHelper[x] = user;
        x++, i++;
    });
    // Return the function
    return pickedUsers;
}


/*

I haven't coded any error-catching for this function, you must code it yourself, for example if(max > userlist.length) return users;

You can run this using
const userlist = [ "Kayson Penn","Kaja Leon","Samuel Gonzalez","Leroy Baxter","Jacques Gould","Cally Murphy","Ellice Chambers","Eboni Harwood","Alexia Campos","Amanpreet Bassett","Kaiser Wu","Anita Rutledge","Maisie York","Md Cochran","Ella-Grace Bryant","Jade Chavez","Mahek Mckenna","Patryk Zavala","Mackenzie Walker","Elara Duffy","Vera Coffey","Adil Ochoa","Misbah Mohamed","Mohamad Gregory","Chanice Lopez","Eloise Coates","Anne Thornton","Samad Small","Georga Blackwell","Hamish Fellows" ];
console.log(pickUsers(userlist, 3));

*/
