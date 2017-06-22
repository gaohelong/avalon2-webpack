console.log('index.js:引入成功');

let vm = avalon.define({
    $id  : "main",
    name : "龙cloud",
    array: [11, 22, 33, 44, 55, 66]
});

setTimeout(() => {
    vm.array.set(0, 444);
}, 3000);

/* ajax */
let url = 'http://hl.avalon2.com/';
$.ajax({
    method: 'POST',
    url: url + '/php/test.php',
    data: {
        user: 'helong',
        pwd:  '123456'
    },
    dataType: 'jsonp',
    success: response => {
        console.log(response);
    }
});

/* fetch */
// fetch('/php/test.php', {
//     method: "POST",
//     credentials: 'include',
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//     },
//     body: "user=helong&pwd=123456"
// }).then(function(res) {
//     if (res.ok) {
//         console.log("Perfect! Your settings are saved.");
//     } else if (res.status == 401) {
//         console.log("Oops! You are not authorized.");
//     }
// }, function(e) {
//     console.log("Error submitting form!");
// });
