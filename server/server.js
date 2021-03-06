const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config()
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zl6vn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.get('/', (req, res) => {
    res.send('Server is Running')
})


async function run() {
    try {
        await client.connect();
        const database = client.db("eBites");
        const foods_collection = database.collection("foods");
        const cart_collection = database.collection("cart");
        //load all data
        app.get('/foods', async (req, res) => {
            const size = parseInt(req.query.size);
            const page = req.query.page;
            const cursor = foods_collection.find({});
            const count = await cursor.count();
            let foods;
            if (size && page) {
                foods = await cursor
                    .skip(size * page)
                    .limit(size)
                    .toArray();
            } else {
                foods = await cursor.toArray();
            }

            res.json({ count, foods })
        })

        // load single data
        app.get('/foods/:id', async (req, res) => {
            const id = req.params.id;
            const quiry = { _id: ObjectId(id) };
            const food = await foods_collection.findOne(quiry);
            res.json(food);
        })


        //load cart data according to uid Get Api
        app.get('/cart/:uid', async (req, res) => {
            const uid = req.params.uid;
            console.log(uid)
        })



    } finally {
        //await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log('Server is Running on port', port)
})