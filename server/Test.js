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

const client=new PlaidApi(configuration);
// Get institution ID for account
client.getAccounts('ACCESS_TOKEN', (err, response) => {
  if (err) {
    console.log(err);
    return;
  }

  const institutionID = response.accounts[0].institution_id;

  // Get institution information
  client.getInstitutionById(institutionID, ['logo'], (err, response) => {
    if (err) {
      console.log(err);
      return;
    }

    const logoURL = response.institution.logo;

    // Do something with the logo URL, such as displaying the bank icon on your website
    console.log(logoURL);
  });
});