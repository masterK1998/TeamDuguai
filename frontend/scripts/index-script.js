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
   

}
    






$(document).ready(main());