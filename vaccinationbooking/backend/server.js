const { MongoClient } = require('mongodb');
const mongoose = require ("mongoose");
const Schema =mongoose.Schema;

const client = new MongoClient("mongodb://localhost:27017");
await client.connect();

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


async function main() {
    const MongoClient = require('mongodb').MongoClient;
    const uri =
      'mongodb+srv://dbUser:<dbpassword>@cluster0.dcu5m.mongodb.net/Vaccination?retryWrites=true&w=majority';
    const client = new MongoClient(uri, { useNewUrlParser: true });
  
    // Connect to the client and query
    await client.connect();
    createAppointment(client, 5);
    client.close();
  }
  
  main().catch(console.error);
  
  router.post("/", async (req, res) => {
    let appointment = await db.collection("posts");
    let newAppointment = req.body;
    newAppointment.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });

  router.delete("/editpage/:id", async (req, res) => {
    const query = { _id: ObjectId(req.params.id) };
  
    const collection = db.collection("posts");
    let result = await collection.deleteOne(query);
  
    res.send(result).status(200);
  });

  
  async function createAppointment(client, ) {
    const cursor = client
      .db('Vaccination')
      .collection('appointment')
      .find()
      .limit(resultsLimit);
  
    const results = await cursor.toArray();
    if (results.length > 0) {
      console.log(`Found ${results.length} listing(s):`);
      results.forEach((result, i) => {
        date = new Date(result.last_review).toDateString();
  
        console.log();
        console.log(`${i + 1}. name: ${result.name}`);
        console.log(`   _id: ${result._id}`);
        console.log(`   bedrooms: ${result.bedrooms}`);
        console.log(`   bathrooms: ${result.bathrooms}`);
        console.log(
          `   most recent review date: ${new Date(
            result.last_review
          ).toDateString()}`
        );
      });
    }
  }