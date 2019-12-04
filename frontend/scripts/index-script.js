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
    axios.post("http://localhost:3000/user/fav/", {data: {} },{headers: { Authorization: `Bearer ${jwt}` }});
   

    // draw profile column
    drawProfile();


    // draw feed column
    drawFeed();


    // draw contact column
    drawContact();
}

    
function drawProfile() {
    $()

}

function drawFeed() {

}

function drawContact() {

}






$(document).ready(main());