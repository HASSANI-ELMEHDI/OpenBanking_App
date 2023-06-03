const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');

const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': '64735eb449ce6200184af73b',
            'PLAID-SECRET': '003ab45a350e748baefcd175c39b41',
        },
    },
});


uri='mongodb+srv://mh:mh2001@cluster0.bu7jtce.mongodb.net/plaid?retryWrites=true&w=majority';
mongoose.connect(uri)
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
 
const plaidClient = new PlaidApi(configuration);
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api", async (request, response) => {
   // Call the paymentInitiationRecipientCreate function
const request1 = {
    name: 'John Doe',
    bacs: {
      account: '26207729',
      sort_code: '560029',
    },
  };
  try {

    /// Creation du bénificiere ----------------------------------
    const response1 = await plaidClient.paymentInitiationRecipientCreate(request1);
    const recipientID = response1.data.recipient_id;
    console.log('Recipient created with ID:', recipientID);

    /// get infos d'un bénificiere ----------------------------------
    const request2 = {
        recipient_id: recipientID,
      };
    const response2 = await plaidClient.paymentInitiationRecipientGet(request2);
    const name = response2.data.name;
  const iban = response2.data.iban;
  const address = response2.data.address;
  console.log('Recipient get with name :', name);
  /// get list des  bénificieres ----------------------------------

  /// create payement to benificiere ----------------------------------
  const request3 = {
    recipient_id: recipientID,
    reference: 'TestPayment',
    amount: {
      currency: 'GBP',
      value: 100.0,
    },
  };

  const response3 = await plaidClient.paymentInitiationPaymentCreate(request3);
  const paymentID = response3.data.payment_id;
  console.log('Payement effectué with id:', paymentID);
/// get informations du payemnt   ----------------------------------
const request4 = {
    payment_id: paymentID,
  };
  try {
    const response4 = await plaidClient.paymentInitiationPaymentGet(request4);
    console.log('Payement effectué with id:', response4.data);
    
  } catch (error) {
    // handle error
  }
  } catch (error) {
    console.error('Error creating recipient:', error);
  }



});

app.post('/create_link_token', async function (request, response) {

     
    const plaidRequest = {
        user: {
            client_user_id: 'user',
        },
        client_name: 'Plaid Test App',
        products: ['auth'],
        language: 'fr',
        redirect_uri: 'http://localhost:5173/',
        country_codes: ['FR'],
    };
    try {
        const createTokenResponse = await plaidClient.linkTokenCreate(plaidRequest);
        response.json(createTokenResponse.data);
    } catch (error) {
        response.status(500).send("failure");
        // handle error
    }


});

app.post("/auth", async function(request, response) {
   try {
       const access_token = request.body.access_token;
       const plaidRequest = {
           access_token: access_token,
       };
       const plaidResponse = await plaidClient.authGet(plaidRequest);
       response.json(plaidResponse.data);
   } catch (e) {
       response.status(500).send("failed");
   }
});


app.post('/exchange_public_token', async function (
    request,
    response,
    next,
) {
    const publicToken = request.body.public_token;
    try {
        const plaidResponse = await plaidClient.itemPublicTokenExchange({
            public_token: publicToken,
        });
        // These values should be saved to a persistent database and
        // associated with the currently signed-in user
        const accessToken = plaidResponse.data.access_token;
        response.json({ accessToken });
    } catch (error) {
        response.status(500).send("failed");
    }
});

app.get("/accounts", async (request, response) => {

  bankAccount.find({})
  .then(docs => {
    const resultArray = docs.map(doc => doc.toObject());
    console.log(resultArray);
    response.json(resultArray);
  })
  .catch(err => {
    console.log(err);
  });


});

app.post("/insert", async function(request, response) {


  
  try {
    const a = new bankAccount({
      name : request.body.name,
      balance : request.body.balance,
      iso_currency_code :request.body.iso_currency_code,
      compte : request.body.compte
  });
    // Save the document to the database
    a.save()
      .then(result => {
        console.log(`Inserted document with _id: ${result._id}`);
      
      })
      .catch(err => {
        console.error(err);
      
      });
  
  } catch (e) {
      response.status(500).send("failed");
  }
});

app.listen(8000, () => {
   console.log("server has started");
});