import { error } from 'console';
import {EventEmitter} from 'events'


const myEmitter = new EventEmitter();

function greetHandler (name){
    console.log("Hello World "+name);
}

function goodbyeHandler(name) {
    console.log("Good Bye "+name);
    
}
//REgister event listeners
myEmitter.on('greet',greetHandler);
myEmitter.on('goodbye',goodbyeHandler);

//Event emit
myEmitter.emit('greet','Alex');
myEmitter.emit('goodbye','Maximus');

//Error Handling
myEmitter.on('error',(err)=>{
    console.log('An error occured',err);
})

//SImulating error
myEmitter.emit('error',new Error('Something went haywire'));
