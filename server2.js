import { createServer } from "http";
const PORT = 8000;
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "John Hunter" },
  { id: 3, name: "John Luther" },
  { id: 4, name: "John Snow" },
];

// logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
// JSON middleware
const jsonmiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};
//Route handler for /api/users
const getUserHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

//Route handler for Get /api/users/id
const getUserById = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found" }));
  }
  res.end();
};

//Route handler for post request /api/users
const createUserHandler = (req,res)=>{
    let body ='';
    req.on('data',(chunck)=>{
        body+=chunck.toString();

    });
    req.on('end',()=>{
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode =201;
        res.write(JSON.stringify(newUser))
        res.end();
    })
}

//Not found Handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route Not Found" }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonmiddleware(req,res,()=>{
        if(req.url ==='/api/users' && req.method === 'GET'){
            getUserHandler(req,res);
        }
        else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
            getUserById(req,res);
        }
        else if(req.url ==='/api/users' && req.method === 'POST'){
            createUserHandler(req,res);

        }
        else{
            notFoundHandler(req,res);
        }
    })
  });
});
server.listen(PORT, () =>
  console.log(`Server is Sucessfullt running at ${PORT}`)
);
