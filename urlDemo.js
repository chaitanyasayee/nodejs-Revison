import url, { fileURLToPath, format, parse } from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';
//URL Object
const urlObj =new URL(urlString);
console.log(urlObj);

//format()-> takes the object and turns back into string 
console.log(parse(format(urlObj)));

//import.meta.url -> file url
console.log(import.meta.url);
//fileUrlToUrl
console.log(fileURLToPath(import.meta.url));

console.log(urlObj.search);
const params = new URLSearchParams(urlObj.search)
console.log(params.get('q'));
params.append('limit','5');
console.log(params)
params.delete('limit');
console.log(params);