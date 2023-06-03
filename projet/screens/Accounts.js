import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';
import {usePlaidLink} from 'react-plaid-link';
import Linkedaccounts from '../compenents/Linkedaccounts';


axios.defaults.baseURL = 'http://localhost:8000';


function PlaidAuth({publicToken,metadataf}) {
  const [account, setAccount] = useState();

  useEffect(() => {
    async function fetchData() {
      let accessToken = await axios.post('/exchange_public_token', {
        public_token: publicToken,
      });
      console.log('accessToken', accessToken.data);
      const auth = await axios.post('/auth', {
        access_token: accessToken.data.accessToken,
      });
      setAccount(auth.data.accounts[0]);
      console.log('auth data ', auth.data);

      const balance=auth.data.accounts[0].balances.available;
      const name=metadataf;
      const curr=auth.data.accounts[0].balances.iso_currency_code;
      const compte=auth.data.numbers.ach[0].account;
      const ins = await axios.post('/insert', {
        name :name  ,
        balance : balance,
        iso_currency_code :curr,
        compte : compte
    });
     
    }
    fetchData();
  }, []);

  return (
    <View>
    <Accounts/>
    </View>
  )
   
  ;
}


const Accounts = () => {
  const [linkToken, setLinkToken] = useState();
  const [publicToken, setPublicToken] = useState();
  const [metadatai, setmetadata] = useState("Inconnu");
  const [accountsData, setAccountsData] = useState([]);

  useEffect(() => {
    async function fetchLinkToken() {
      const response = await axios.post('/create_link_token');
      setLinkToken(response.data.link_token)
    }

    async function fetchAccountsData() {
      const response = await axios.get('/accounts');
      setAccountsData(response.data);
    }

    fetchLinkToken();
    fetchAccountsData();

    const intervalId = setInterval(fetchAccountsData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const config = {
    token: linkToken,
    onSuccess: async (public_token, metadata) => {
      setPublicToken(public_token);
      setmetadata(metadata.institution.name);
      console.log('success', public_token, metadata);

      const response = await axios.post('/exchange_public_token', { public_token });
      setAccountsData(response.data.accounts);
    },
  };

  const {open, ready} = usePlaidLink(config);

  return publicToken ? (
    <PlaidAuth publicToken={publicToken} metadataf={metadatai} accountsData={accountsData} />
  ) : (
    <View>
      <Linkedaccounts accountsData={accountsData} />
      <Button  
        title="Connect a bank account"
        onPress={() => open()}
        disabled={!ready}
      />
    </View>
  );
};

export default Accounts;




