$(document).ready(function () {
    $('.main').on('click', '#signIn', async function(){      
        let emailAddress = $('#loginUser').val();
        let password = $('#loginPass').val();
        let match = false;
        let result  = await axios({
            method: 'GET',
            url: 'http://localhost:3000/account/login',
            withCredentials: true,
        });
        
        for(let i  = 0; i < result.data.length; i++) {
            if(result.data[i].name == emailAddress) {
                match = true;
                if(result.data[i].password == password) console.log("success!");
                else console.log("wrong password");
            }
        }
        if(!match) console.log("user not found");
    });
});