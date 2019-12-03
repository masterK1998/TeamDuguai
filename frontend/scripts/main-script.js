// $(document).ready(function () {
//     $('#root').on('click', '#save', async function(){  // post data  
//         let data = $('#data').val();
//         let result  = await axios({
//             method: 'POST',
//             url: 'http://localhost:3000/public/*',
//             data: {
//                     "data": data,
//             }
//           });
//           console.log(result);
//     });


//     $('#root').on('click', '#save', async function(){ // get data     
//         let data = $('#data').val();
//         let result  = await axios({
//             method: 'GET',
//             url: 'http://localhost:3000/public/*',
//           });
//           console.log(result);
//     });

//     $('#root').on('click', '#save', async function(){ // get data     
//         let data = $('#data').val();
//         let id = helper();
//         let result  = await axios({
//             method: 'PUT',
//             url: 'http://localhost:3000/public/' + id,
//             data: {
//                 "data": data,
//             }
//           });
//           console.log(result);
//     });

//     $('#root').on('click', '#save', async function(){ // get data     
//         let data = $('#data').val();
//         let result  = await axios({
//             method: 'DELETE',
//             url: 'http://localhost:3000/public/' + id,
//           });
//           console.log(result);
//     });
    
// });