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
   

    // draw profile column


    // draw feed column
    drawFeed();


    // draw contact column
}

function renderProfile(person) {
    $(`#profile`).append(`
    <div id="profilecol">

    <p> User Name: ${person.username} </p>
    <p> First Name: ${person.firstname} </p>
    <p> Last Name: ${person.lastname} </p>
    <p> Onyen: ${person.onyen} </p>
    <p> PID: ${person.pid} </p>

    </div>

    <input class="btn btn-info" type="button" value="edit" id="editprofilebtn"> 
    `);

}
    
function drawProfile(res) {
    console.log("res", res);

    let jwt = localStorage.getItem("jwt");
    let person = res.data.result;
    renderProfile(person);

    $(`#editprofilebtn`).on('click', () => {
        $(`#profilecol`).replaceWith(`
            <form>
                <input type="text" value="${person.username}">
                <input type="text" value="${person.firstname}">
                <input type="text" value="${person.lastname}">
                <input type="text" value="${person.onyen}">
                <input type="text" value="${person.pid}">
            </form>
        `);
        $(`#editprofilebtn`).replaceWith(`<input class="btn btn-info" type="button" value="submit" id="submitprofilebtn">`);
        $(`#submitprofilebtn`).on('click', () => {
            //axios
            let update = 
                { 
                username: $(`form input:nth-child(1)`).val(),
                firstname: $(`form input:nth-child(2)`).val(),
                lastname: $(`form input:nth-child(3)`).val(), 
                onyen: $(`form input:nth-child(4)`).val(),
                pid: $(`form input:nth-child(5)`).val(),
                };
            console.log(update);
            axios.post("http://localhost:3000/user/info/", {data: update },{headers: { Authorization: `Bearer ${jwt}` }});
            window.location.reload();

        });
    });


}

function drawFeed(res) {

}

function drawContact(res) {
    let jwt = localStorage.getItem("jwt");

    console.log("in contact", res);
    $(`#contact`).append(`
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            add friend
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
        $(`#contact`).append(`<p> ${res.data.result[i]} </p>`);
    }


}






$(document).ready(main());