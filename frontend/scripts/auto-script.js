async function main() {

    let jwt = localStorage.getItem("jwt");

    res = await axios.get("http://localhost:3000/user/contact/", {headers: { Authorization: `Bearer ${jwt}` }});
    $("#autocomplete").on("keyup",_.debounce(async function(e) {
    //res=await axios.get("http://localhost:3000/user/contact/", {headers: { Authorization: `Bearer ${jwt}` }});
    console.log(res.data.result);
    $("#autocomplete").autocomplete({
        source: res.data.result,
    });
    },300));

   
    $("#transferto").on("keyup",_.debounce(async function(e) {
    //res=await axios.get("http://localhost:3000/user/contact/", {headers: { Authorization: `Bearer ${jwt}` }});
    console.log(res.data.result);
    $("#transferto").autocomplete({
        source: res.data.result,
    });
    },300));
}
$(document).ready(main());