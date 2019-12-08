$(document).ready(function () {
    async function newsFeeds (){   
       
        //axios.delete('http://localhost:3000/public/dinning').then((res) => console.log(res));
        //axios.post('http://localhost:3000/public/dinning/rams', {data :{name: "rams", menu: ["Squid", "Octopus", "Scallops", "Lobster", "Crab"]}}).then((res) => console.log(res));
        //axios.post('http://localhost:3000/public/dinning/lenoir', {data :{name: "lenoir", menu: ["Filet", "Oysters", "Mussels", "Clams", "Tuna"]}}).then((res) => console.log(res));
        //axios.post('http://localhost:3000/public/dinning/shanghai', {data :{name: "shanghai dumplings", menu: ["dumpling"]}}).then((res) => console.log(res));
        //axios.post('http://localhost:3000/public/parking/morison', {data :{name: "morison deck", price: "$2"}}).then((res) => console.log(res));
        //axios.post('http://localhost:3000/public/anouncement', {data :{anouncement: "Lao Wang please pay your fine"}}).then((res) => console.log(res));
        //axios.get('http://localhost:3000/public/dinning').then((res) => drawMenu(res));
        axios.get('http://localhost:3000/public/dinning').then((res) => drawMenu(res));
        axios.get('http://localhost:3000/public/parking').then((res) => drawPark(res));
    };
    function drawMenu(res) {
        $('.col-6').append(
            `<div id="public" class="card bg-light">
                <div class="card-header">
                    Today's Dinning
                </div>
                <div class="card-body" id="dinninginfo"> </div>
            </div>`
        );
        //console.log(Object.keys(res.data.result));
        let dinnings = Object.keys(res.data.result);
     
        for(let i = 0; i < dinnings.length; i++) {
            let dinning = res.data.result[dinnings[i]];
            $('#dinninginfo').append(
        `<div class="toast" data-autohide="false">
            <div class="toast-header">
                    <strong class="mr-auto">${dinning.name}</strong>
                    <small class="text-muted">11 mins ago</small>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div class="toast-body">
                <div> ${dinning.menu} </div>
            </div>
        </div>
        `
        );
            $(`.toast`).toast('show');
        }
    }

    function drawPark(res) {
        $('.col-6').append(
            `<div id="public" class="card bg-light">
                <div class="card-header">
                    Today's parking
                </div>
                <div class="card-body" id="parkinginfo"> </div>
            </div>`
        );
        let parks = Object.keys(res.data.result);
        for(let i = 0; i < parks.length; i++) {
            let park = res.data.result[parks[i]];
            $('#parkinginfo').append(
            `<div class="toast" data-autohide="false">
            <div class="toast-header">
                    <strong class="mr-auto">${park.name}</strong>
                    <small class="text-muted">11 mins ago</small>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div class="toast-body">
                <div> ${park.name}: ${park.price} </div>
            </div>
        </div>
        `
            );
            $(`.toast`).toast('show');
        }
    }
    newsFeeds();

});