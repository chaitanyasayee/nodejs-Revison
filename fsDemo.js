// import fs from 'fs';
import fs from 'fs/promises'

// // read file ->call back
// fs.readFile('./dummy.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)

// })

// //read file synchronous
// const data = fs.readFileSync('./dummy.txt','utf-8');
// console.log(data);

// //readfile()-> promise then
// fs.readFile('./dummy.txt','utf-8')
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

//readfile() -> async/wait
const readfile = async()=>{
    try {
        const data = await fs.readFile('./dummy.txt','utf-8');
        console.log(data);
        
    } catch (error) {
        console.log(error)
        
    }
}
const writeFile = async()=>{
    try {
        await fs.writeFile('./dummy.txt','how u doin!');
        console.log("File written");
        
    } catch (error) {
        console.log(error);
        
    }

}
const appendFile = async ()=>{
    try {
        await fs.appendFile('./dummy.txt','\nI m appending the file');
        console.log('Appended Succesfull');
        
    } catch (error) {
        console.log(error);
        
    }
}
writeFile();
appendFile();
readfile();