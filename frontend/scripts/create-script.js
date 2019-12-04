$(document).ready(function () {
    $('.main').on('click', '#create', async function(){      
        let username = $('#username').val();
        let passWord = $('#password').val();
        let result  = await axios({
            method: 'POST',
            url: 'http://localhost:3000/account/create',
            data: {
                    "name": username,
                    "pass": passWord,
            }
        });  
        window.location.replace("../login/index.html");
    });
});
    