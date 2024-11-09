import express from 'express';
import cors from 'cors'
import { MongoClient } from 'mongodb';


const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
await client.connect();
console.log("Database Connected");
const db = client.db('SDHub');


app.post('/signup', async (req, res) => {
    console.log(req.body);
    const collection = db.collection('users');
    const inserted = await collection.insertOne(req.body);
    console.log(inserted);
    res.status(201).json(inserted);
})

app.get('/students', async (req, res) => {

    const collection = db.collection('users');
    const students = await collection.find({}).toArray();
    console.log(students);
    res.status(201).json(students);
})


app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})