$(document).ready(function () {
    $('.main').on('click', '#create', async function(){      
        let emailAddress = $('#Username').val();
        let password = $('#Password').val();
        let onyen = $('#Onyen').val();
        let pid = $('#PID').val();
        let result  = await axios({
            method: 'POST',
            url: 'http://localhost:3000/account/create',
            data: {
                    "name": emailAddress,
                    "password": password,
                    "onyen": onyen,
                    "pid": pid
            }
        });  
        window.location.replace("../login/index.html");
    });
});