const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
//const admin = require("firebase-admin");

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(express.json());

//user:duttaturja
//pass:AFrL7F15FpCQtE5Q
//ip:202.65.173.58

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@wncluster.fj7u52d.mongodb.net/?retryWrites=true&w=majority&appName=WNcluster`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    const db = client.db("WorkNest");
    const jobscollection = db.collection("Jobs");
    const usercollection = db.collection("Users");
    const companycollection = db.collection("Companies")
    const blogscollection = db.collection("Blogs");
    const applycollection = db.collection("Applications");

    //post jobs
    app.post("/post", async (req, res) => {
      const body = req.body;
      const result = await jobscollection.insertOne(body);
      res.send(result);
    });

    app.get("/post", async (req, res) => {
      const result = await jobscollection.find().toArray();
      res.send(result);
    });

    app.post("/user", async (req, res) => {
      const body = req.body;
      const result = await usercollection.insertOne(body);
      res.send(result);
    });

    app.get("/user", async (req, res) => { 
      const result = await usercollection.find().toArray();
      res.send(result);
    });

    app.patch("/user/:email", async (req, res) => { 
      const email = req.params.email;
      const query = {email: email}
      const body = req.body;
      const updateDoc = {
        $set:{
          name: body.updatedPhoto,
          image: body.updatedName,
        }
      }
      const result = await usercollection.updateOne(query, updateDoc);
      res.send(result);
    });

    app.post("/apply", async (req, res) => {
      const body = req.body;
      const result = await applycollection.insertOne(body);
      res.send(result);
    });

    app.get("/apply", async (req, res) => {
      const result = await applycollection.find().toArray();
      res.send(result);
    })

    app.post("/company", async(req, res) => {
      const body = req.body;
      const result = await companycollection.insertOne(body);
      res.send(result);
    })

    app.get("/apply", async(req, res) => {
      const result = await companycollection.find().toArray();
      res.send(result);
    })

    //await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    //await client.close();
  }
}
run().catch(console.dir);

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Backend Running");
});
app.listen(port, () => console.log(`Server running on port ${port}`));
