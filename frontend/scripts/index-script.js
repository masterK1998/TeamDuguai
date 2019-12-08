async function main() {

    console.log("in main page");
    let jwt = localStorage.getItem("jwt");
    console.log(jwt);

    let result  = await axios({
        method: 'GET',
        url: 'http://localhost:3000/account/status',
        headers: {
            'Authorization': 'Bearer ' + jwt,
        }
    });  
    
    
    console.log(result);
    axios.get("http://localhost:3000/user/info", {headers: { Authorization: `Bearer ${jwt}` }}).then((res) => drawProfile(res));
    axios.get("http://localhost:3000/user/contact/", {headers: { Authorization: `Bearer ${jwt}` }}).then((res) => drawContact(res));

   
    let weather = axios({
        method: 'get',
        url: 'http://api.openweathermap.org/data/2.5/weather?id=4460162&appid=511493cb76df7d7454e9eccae28062d5&units=metric',
        });
    weather.then(value => {
        console.log("weather:", value);
        $("#temp").html('temprature: '+ value['data']['main']['temp'] + "°C");
        $("#humidity").html("humidity: " + value['data']['main']['humidity']);
        //$("#weather").html("weather: " + value['data']['weather'][0]['main']);
        console.log(value.data.weather[0].icon);
        $(`#weather`).html(`<img border="0" id="weathericon" alt="" src="http://openweathermap.org/img/wn/${value.data.weather[0].icon}@2x.png" width="50" height="50"> 
        `);
    });    

}

function renderProfile(person) {
    $(`#profile`).append(`
    <div  class="card bg-light" style="max-width:15rem;">
    <div class="card-header">
        My Profile
    </div>
    <div class="card-body" id="profilecol">

    <p> Username: ${person.username} </p>
    <p> First Name: ${person.firstname} </p>
    <p> Last Name: ${person.lastname} </p>
    <p> Onyen: ${person.onyen} </p>
    <p> PID: ${person.pid} </p>

    <input class="btn btn-outline-dark btn-sm" type="button" value="edit" id="editprofilebtn"> 
    </div>
    </div>

    `);

}
    
function drawProfile(res) {
    console.log("res", res);

    let jwt = localStorage.getItem("jwt");
    let person = res.data.result;
    renderProfile(person);

    $(`#editprofilebtn`).on('click', () => {
        $(`#profilecol`).replaceWith(`
            <div class="card-body">
            <form>
                <p> Username </p>
                <input type="text" value="${person.username}">
                <p> First Name </p>
                <input type="text" value="${person.firstname}">
                <p> Last Name </p> 
                <input type="text" value="${person.lastname}">
                <p> Onyen </p>
                <input type="text" value="${person.onyen}">
                <p> PID </p>
                <input type="text" value="${person.pid}">
            </form>
            <input class="btn btn-info" type="button" value="submit" id="submitprofilebtn"> 
            </div>
        `);
        $(`#submitprofilebtn`).on('click', () => {
            //axios
            let update = 
                { 
                username: $(`form input:nth-child(2)`).val(),
                firstname: $(`form input:nth-child(4)`).val(),
                lastname: $(`form input:nth-child(6)`).val(), 
                onyen: $(`form input:nth-child(8)`).val(),
                pid: $(`form input:nth-child(10)`).val(),
                };
            console.log(update);
            axios.post("http://localhost:3000/user/info/", {data: update },{headers: { Authorization: `Bearer ${jwt}` }});
            window.location.reload();

        });
    });


}


function drawContact(res) {
    let jwt = localStorage.getItem("jwt");

    console.log("in contact", res);
    $(`#contact`).append(`
        <div class="card bg-light">
        <div class="card-header" id="contactcardheader">
            Contact
        </div>
        <div class="card-body" id="contactcard">
        </div>
        </div>
    `);

    $(`#contactcardheader`).append(`
    <button type="button" class="btn btn-outline-dark btn-sm float-right" data-toggle="modal" data-target="#exampleModal">
                            add
    </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <input class="modal-body" id="contactname">
                
            </input>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="addcontactbtn">Save changes</button>
            </div>
            </div>
        </div>
        </div>
                        
                        
                        
                        
                        `);
    
    
    $(`#addcontactbtn`).on('click', () => {
        let contact = $(`#contactname`).val();
        axios.post("http://localhost:3000/user/contact/" + contact, {data: {} },{headers: { Authorization: `Bearer ${jwt}` }});
    });

    for (let i = 0; i < res.data.result.length; i++) {
        $(`#contactcard`).append(`<p> ${res.data.result[i]} </p>`);
    }


}






$(document).ready(main());