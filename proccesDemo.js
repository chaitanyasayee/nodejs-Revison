//arv
// // console.log(process);

// // console.log(process.argv);

// //node proccesDemo.js import

// // console.log(process.argv);
// // node proccesDemo.js import -s
// /*[
//   '/home/chaitanyasp/.nvm/versions/node/v20.16.0/bin/node',
//   '/home/chaitanyasp/Desktop/Learnings/Node-Js-Crash-Course/proccesDemo.js',
//   'import',
//   '-s'
// ] */
// console.log(process.argv[3])
// /*chaitanyasp@L-14376:~/Desktop/Learnings/Node-Js-Crash-Course$ node proccesDemo.js import -s
// -s
// chaitanyasp@L-14376:~/Desktop/Learnings/Node-Js-Crash-Course$ */

// //process.env
// console.log(process.env)
// console.log(process.env.LOGNAME);

// //PID -> id of node js process
// console.log(process.pid)

//Current working directory cwd()
console.log(process.cwd());

//title
console.log(process.title)

//memoryUsage()
console.log(process.memoryUsage());

//uptime()
console.log(process.uptime());

// //exit() ->exit the procces we can send a code a here like 0 means suucess
// process.exit(0);
// console.log('After exit');
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
  });
  
  // exit()
  process.exit(0);