//Import required packages
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

//Intialize the Express app
const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true }));

//Define a simple route
app.get('/',(req,res) =>{
    res.send('Welcome to our API');
});

app.get('/getNames', (req, res) => {
    res.send({name1 :"steven", name2 : "Ashi"});
    
});

//Define your API routes here
//Example: app.get('/api/users', getUsers);

//Start the server on the specified port

const PORT = 3000;
app.listen(PORT,() => {
    console.log("Server running on port"+ PORT);
});