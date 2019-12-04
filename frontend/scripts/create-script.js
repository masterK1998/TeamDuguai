$(document).ready(function () {
    // at the same time, pass it to user
    $('.main').on('click', '#create', async function(){      
        let username = $('#username').val();
        let passWord = $('#password').val();
        /*
        let account = await axios({
            method: 'POST',
            url: 'http://localhost:3000/account/create',
            data: {
                    "name": username,
                    "pass": passWord,
            }
        });  
        */
        let user = await axios({
            method: 'POST',
            url: 'http://localhost:3000/user/',
            "data": {
                "Pierce Brown": {},
                "Brandon Sanderson": {},
                "Michael J. Sullivan": {}
            }
        });  
        window.location.replace("../login/index.html");
    });
});
    