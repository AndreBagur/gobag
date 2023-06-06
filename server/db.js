const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/gobag');

mongoose.connection.once('open', ()=>console.log('connected to database'))

// 2. Set up any schema and models needed by the app
const entrySchema = mongoose.Schema({
  description: String,
  items: Array
});

const ScenarioEntry = mongoose.model('ScenarioEntry', entrySchema);

// 3. Export the models
module.exports = {
  getAll: () => {
    return ScenarioEntry.find({});
  },
  insertOne: (scenario) => {
    return ScenarioEntry.create(scenario);
  }
}


// 4. Import the models into any modules that need them