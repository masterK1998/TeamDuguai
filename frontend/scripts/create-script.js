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
>>>>>>> 7bf74f67f8f6dc700c7b0789dce2d70c76a8949b
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
>>>>>>> 7bf74f67f8f6dc700c7b0789dce2d70c76a8949b
            }
        });  
        window.location.replace("../login/index.html");
    });
});