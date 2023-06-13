
import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Dimensions,Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ListService from './Listservice';
import RecentActivity from './RecentActivity';
import { icons } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Options from './Services/Recharge/Options';
import { useState,useEffect } from 'react';
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000';

const windowHeight = Dimensions.get('window').height;
export default function BodyHome() {
 const [wallet,setwallet]=useState();
  useEffect(() => {
    async function fetch() {
      const wall = await axios.post('/create-wallet', {
        iso_currency_code: 'USD',
      });
    console.log('-------------------------------',wall);
    }
    fetch();
  }, []);
  return (
    <ScrollView style={styles.root}>

      <View style={{
        marginTop :20,
        marginLeft :50,
        height : 100,
        backgroundColor :'rgba(0, 0, 0, 0.07)',
        borderRadius: 12,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
      }}>
       
        <View style={{marginLeft :25}}>
        <Text style={{color :"rgba(255, 255, 255, 0.8)" ,fontSize :21}}> Solde du compte </Text>
          <Text  style={{
            lineHeight :30,
            marginBottom: 8,
            color :"rgba(255, 255, 255, 0.9)" ,
            fontSize :24,
            fontWeight: 'bold'
          }}>2055,23 Dhs </Text>
           
          
        </View>
        <Options/>
      </View>

      <ListService/>
      <RecentActivity/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#009dad',
  },
 

});
