$(document).ready(function () {
    $('.main').on('click', '#login', async function(){      
        let username = $('#username').val();
        let passWord = $('#password').val();
        try{
            let result  = await axios({
                method: 'POST',
                url: 'http://localhost:3000/account/login',
                data: {
                        "name": username,
                        "pass": passWord,
                }
            });
            console.log(result.data.jwt);
            
            localStorage.setItem("jwt", result.data.jwt);
            window.location.replace("../index.html");
        }
        catch{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'wrong username or password',
              })
        }
    });
});