$(document).ready(function () {
    async function newsFeeds (){   
        $('.col-6').append(
            `<div id = public></div>`
        )
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
        //console.log(Object.keys(res.data.result));
        let dinnings = Object.keys(res.data.result);
        $('#public').append(
            `<div id = food>Today's dinning</div>`
        )
        for(let i = 0; i < dinnings.length; i++) {
            let dinning = res.data.result[dinnings[i]];
            $('#food').append(
                `<div id = ${dinning.name}>
                    <div>${dinning.name}</div>
                    <div>${dinning.menu}</div>
                </div>`
            )
        }
    }

    function drawPark(res) {
        //console.log(Object.keys(res.data.result));
        let parks = Object.keys(res.data.result);
        $('#public').append(
            `<div id = park>Today's parking</div>`
        )
        for(let i = 0; i < parks.length; i++) {
            let park = res.data.result[parks[i]];
            $('#park').append(
                `<div id = ${park.name}>
                    <div>${park.name}: ${park.price}</div>
                </div>`
            )
        }
    }
    newsFeeds()
})