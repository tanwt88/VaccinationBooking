const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
const mongoose = require ("mongoose");
const Schema =mongoose.Schema;


async function main() {
    const MongoClient = require('mongodb').MongoClient;
    const uri =
      'mongodb+srv://dbUser:<dbpassword>@cluster0.dcu5m.mongodb.net/Vaccination?retryWrites=true&w=majority';
    const client = new MongoClient(uri, { useNewUrlParser: true });
  
    // Connect to the client and query
    await client.connect();
    createAppointment(client,);
    client.close();
  }
  
  main().catch(console.error);

const apptSchema = new Schema({
    name: String,
    nric: String,
    id : String,
    date: Date,
    timeslot: String,
    createdAt: {
        type: Date,
        default: Date.now,
      },
    
})

const venueSchema = new Schema({
    name: String,
    vaccination: String,
    postalcode : Number,
    date: Date,
    timeslot: String
})



  
  router.post("/", async (req, res) => {
    let appointment = await db.collection("posts");
    let newAppointment = req.body;
    newAppointment.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });

  router.put("/editpage/:id", async (req, res) => {
    const query = { _id: ObjectId(req.params.id) };
    const collection = db.collection("posts");
    db.collection('appointment').update(query, req.body, function (err, result) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    });
    res.send(result).status(200);
  });