import ChildProcess from 'child_process';
const exec = ChildProcess.execFile;

var fun =function(){
   console.log("fun() start");
   exec('src.exe', function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
    });  
}
fun();