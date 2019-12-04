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
    axios.post("http://localhost:3000/user/contact/feng", {data: {} },{headers: { Authorization: `Bearer ${jwt}` }});
    axios.get("http://localhost:3000/user/info", {headers: { Authorization: `Bearer ${jwt}` }}).then((res) => drawProfile(res));
    axios.get("http://localhost:3000/user/contact/", {headers: { Authorization: `Bearer ${jwt}` }}).then((res) => drawContact(res));
   

    // draw profile column


    // draw feed column
    drawFeed();


    // draw contact column
}

    
function drawProfile(res) {
    console.log(res);
    $(`#profile`).append(`

    <p> User Name: </p>
    <p> First Name: ${res.data.result.firstname} </p>
    <p> Last Name: ${res.data.result.lastname} </p>
    <p> Onyen: </p>
    <p> PID: </p>
    <p> Year: </p>
    <input class="btn btn-info" type="button" value="edit"> 



    `);

}

function drawFeed(res) {

}

function drawContact(res) {

    console.log("in contact", res);
    $(`#contact`).append(`<input class="btn btn-info" type="button" value="add friend">`);
    for (let i = 0; i < res.data.result.length; i++) {
        $(`#contact`).append(`<p> ${res.data.result[i]} </p>`);
    }


}






$(document).ready(main());