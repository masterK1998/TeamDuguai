$(document).ready(function () {
    $('.main').on('click', '#create', async function(){      
        let emailAddress = $('#Username').val();
        let passWord = $('#Password').val();
        let result  = await axios({
            method: 'POST',
            url: 'http://localhost:3000/account/create',
            data: {
                    "name": emailAddress,
                    "pass": passWord,
            }
        });  
        window.location.replace("../login/index.html");
        //hahahaah
    });
});