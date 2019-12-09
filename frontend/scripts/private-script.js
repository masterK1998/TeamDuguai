$(document).ready(function () {
    async function newsFeeds() {   
        jwt = localStorage.getItem("jwt");
        $('.col-6').append(
            `<div id = private></div>`
        )
        //axios.delete('http://localhost:3000/private/trans', {headers: { Authorization: `Bearer ${jwt}` }}).then((res) => console.log(res));
        //axios.post('http://localhost:3000/private/trans/1', {data :{id: 1, from: "larry", to: "kevin", amount: 10000, comment: "duguai", likes: ["test", "test2"]}}, {headers: { Authorization: `Bearer ${jwt}` }}).then((res) => console.log(res));
        let result  = await axios({
            method: 'GET',
            url: 'http://localhost:3000/account/status',
            headers: {
                'Authorization': 'Bearer ' + jwt,
            }
        });  
        user = result.data.user.name;

        axios.get('http://localhost:3000/private/trans', {headers: { Authorization: `Bearer ${jwt}` }}).then((res) => drawMenu(res));
    };
    function drawMenu(res) {
        //console.log(Object.keys(res.data.result));

        let trans = Object.keys(res.data.result);
        $('#private').append(
            `<div id = trans></div>`
        )
        for(let i = 0; i < trans.length; i++) {
            let rec = res.data.result[trans[i]];
            let likeid = "like" + rec.id;
            let lkid = "lk" + rec.id;
            $('#trans').append(
                `<div id = ${rec.id} class = "record">
                    <div>${rec.from} to ${rec.to}</div>
                    <div>${rec.comment}</div>
                    <div id = ${lkid}>likes: ${rec.likes.length}</div>
                </div>`
            )
            if(!rec.likes.includes(user)){
                $('#' +  rec.id).append(`<button id = ${likeid}>like</button>`)
            }
            else{
                $('#' +  rec.id).append(`<button id = ${likeid}>unlike</button>`)
            }
            if(user == rec.from || user == rec.to) {
                let acceptid = "accept" + rec.id
                if(rec.accepted || user == rec.from) {
                    $('#trans').append(
                        `<div>
                            ${rec.amount}
                        </div>`
                    )
                }
                else {
                    $('#trans').append(
                        `<div>
                            ${rec.amount}
                            <button id = ${acceptid} type = "button">accept</button>
                        </div>`
                    )
                }
                
                $('#' + acceptid).on('click', () => {
                    axios.get('http://localhost:3000/user/amount', {headers: { Authorization: `Bearer ${jwt}` }}).then((res) => {
                        let sum = 0;
                        sum += res.data.result + rec.amount;
                        console.log(sum);
                        axios.post('http://localhost:3000/user/amount', {data: sum}, {headers: { Authorization: `Bearer ${jwt}` }})
                        axios.post('http://localhost:3000/private/trans/' + rec.id + '/accepted', {data: true}, {headers: { Authorization: `Bearer ${jwt}` }})
                        $('#' + acceptid).remove()
                    })
                })
                $('#' + likeid).on('click', () => {
                    if($('#' + likeid).html() == 'like') {
                        axios.get('http://localhost:3000/private/trans/' + rec.id + '/likes', {headers: { Authorization: `Bearer ${jwt}` }}).then((res) => {
                            let likepeople = res.data.result;
                            likepeople.push(user)
                            axios.post('http://localhost:3000/private/trans/' + rec.id + '/likes', {data: likepeople}, {headers: { Authorization: `Bearer ${jwt}` }})
                            $('#' + lkid).html("likes: " + likepeople.length)
                        })
                        $('#' + likeid).html("unlike")
                    }
                    else {
                        axios.get('http://localhost:3000/private/trans/' + rec.id + '/likes', {headers: { Authorization: `Bearer ${jwt}` }}).then((res) => {
                            let likepeople = res.data.result;
                            let reduced = []
                            for(let i = 0; i < likepeople.length; i++) {
                                if(likepeople[i] != user) reduced.push(likepeople[i])
                            }
                            axios.post('http://localhost:3000/private/trans/' + rec.id + '/likes', {data: reduced}, {headers: { Authorization: `Bearer ${jwt}` }})
                            $('#' + lkid).html("likes: " + reduced.length)
                        })
                        $('#' + likeid).html("like")
                    }
                })
            }

            

            //<div>${rec.likes.length}</div>
            // if(rec.likes.includes("larry")) $('#' + rec.id).append(`<button class = "like" type = "button">Unlike</button>`);
            // else {
            //     $('#' + rec.id).append(`<button class = "like" type = "button">Like</button>`);
            //     $('.like').on('click', function(){
            //         let jwt = localStorage.getItem("jwt");
            //         let newLike  = rec.likes
            //         newLike.push("larry")
            //         //console.log(newLike)
            //         let $tweet = $(this).closest(".record");
            //         console.log($tweet.attr('id'))
            //         $(this).html('Unlike')
            //         axios.put('http://localhost:3000/private/trans', {data :{id: 1, from: "larry", to: "kevin", amount: 10000, comment: "duguai", likes: newLike}}, {headers: { Authorization: `Bearer ${jwt}` }})
            //     })
            // }
        }
    }
    newsFeeds()
})

