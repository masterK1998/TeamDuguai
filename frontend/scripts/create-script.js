$(document).ready(function () {
    $('.main').on('click', '#create', async function(){      
<<<<<<< HEAD
        let username = $('#username').val();
        let passWord = $('#password').val();
=======
        let emailAddress = $('#Username').val();
        let password = $('#Password').val();
        let onyen = $('#Onyen').val();
        let pid = $('#PID').val();
>>>>>>> ac53b0e87e3f54411ce149a29e119b7e718c0960
        let result  = await axios({
            method: 'POST',
            url: 'http://localhost:3000/account/create',
            data: {
<<<<<<< HEAD
                    "name": username,
                    "pass": passWord,
=======
                    "name": emailAddress,
                    "password": password,
                    "onyen": onyen,
                    "pid": pid
>>>>>>> ac53b0e87e3f54411ce149a29e119b7e718c0960
            }
        });  
        window.location.replace("../login/index.html");
    });
});
    