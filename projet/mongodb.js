const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mh:mh2001@cluster0.bu7jtce.mongodb.net/plaid?retryWrites=true&w=majority')
.then(()=> console.log('Mongodb connected'))
.catch(()=> console.log('Unable to connect into Mongodb database'));

// Define a schema for the Person document
const bankAccountSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    balance: {
      type: String,
      required: true
    },
    iso_currency_code: {
      type: String,
      required: true
    },
    compte: {
      type: String,
      required: true
    }
  });

// Create a Mongoose model for the Person document
const bankAccount = mongoose.model('Accounts', bankAccountSchema);

  // Create a new Person document
const a = new bankAccount({
    name : "Cih bank",
    balance : "2212,25",
    iso_currency_code :"USD",
    compte : "00000011111106545"
});
  
  // Save the document to the database
  a.save()
    .then(result => {
      console.log(`Inserted document with _id: ${result._id}`);
      mongoose.connection.close();
    })
    .catch(err => {
      console.error(err);
      mongoose.connection.close();
    });

    bankAccount.find()
    .then(documents => {
      console.log(documents);
      mongoose.connection.close();
    })
    .catch(err => {
      console.error(err);
      mongoose.connection.close();
    });