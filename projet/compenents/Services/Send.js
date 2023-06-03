import React, { useEffect,useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';
const MyComponent = () => {
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [sortCode, setSortCode] = useState('');


  useEffect(() => {
    async function fetchData() {
      const response = await axios.post('/api', {
       
      });
      console.log('-------------------------Payement --------------------------');
      console.log(response.data);
    
    }
    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput value={name} onChangeText={setName} placeholder="Name" />
      <TextInput value={account} onChangeText={setAccount} placeholder="Account Number" />
      <TextInput value={sortCode} onChangeText={setSortCode} placeholder="Sort Code" />
      <Button title="Create Recipient" onPress={handleSubmit} />
    </View>
  );
};

export default MyComponent;