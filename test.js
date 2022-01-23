var ChildProcess = require('child_process');
const exec = ChildProcess.execFile;
var path = require('path');
var exePath = path.resolve(__dirname, './src');


var fun =function(){
   console.log("fun() start");
   exec(exePath, function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
    });  
}
fun();

// var fun = function () {
//     spawn('node', ['src'], {
//         env: {
//             NODE_ENV: 'production',
//             PATH: process.env.PATH
//         }
//     })
// }