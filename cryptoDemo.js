import crypto, { createHash } from 'crypto';


// //Createhash()
// const hash =createHash('sha256');
// hash.update('pasword123');
// console.log(hash.digest('hex'));

// //randomBytes()
// crypto.randomBytes(32,(err,buff)=>{
//     if(err) throw err;
//     console.log(buff.toString('hex'));
// })

//Ceipher and deceipher

const algorithm ='aes-256-cbc';
const key =crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm,key,iv);
let encripted = cipher.update('Hello this is API key for gpt-4.o','utf-8','hex');
encripted += cipher.final('hex');
console.log(encripted);


const decipher = crypto.createDecipheriv(algorithm,key,iv);
let decripted = decipher.update(encripted,'hex','utf-8');
decripted += decipher.final('utf-8');
console.log(decripted);