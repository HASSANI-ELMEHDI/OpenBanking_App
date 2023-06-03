
import Icon from 'react-native-vector-icons/FontAwesome';
import BIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from 'react';
import {  icons } from "../constants"
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

export default function  Linkedaccounts (){
    const [myaccounts, setBankAccounts] = useState([]);
    
    useEffect(() => {
        async function fetch() {
          const response = await axios.get('/accounts');
          console.log(response.data);
          setBankAccounts(response.data);

          
        }
        fetch();
      }, []);
    const item  = e => {
        return (
            <View  style={styles.card} key={ e._id}>
                       
                 <BIcon name="bank" size={30} color="#009dad" />
              
              <View style={styles.cardbody}>
                <Text style={styles.cardname}>{e.name}</Text>
                <Text style={styles.carddate}>{e.compte}</Text>
              </View> 
              <View>
                <Text style={styles.cardmoney}>{e.balance}</Text>
                <Text style={styles.cardmoney}>{e.iso_currency_code}</Text>
              </View>
            </View>
        )
    };

    return (
        <View style ={styles.container}>
            <Text style={styles.titre}>Mes comptes </Text>
            <View>
                {myaccounts.map(e=> item(e))}
            </View>
        </View>
    )


}

const styles=StyleSheet.create({
    titre :{
        color : 'gray',
        fontWeight : '500',
        textAlign : 'center'
    },
    card : 
    {
        flexDirection : 'row',
        alignItems : 'center',
        paddingVertical :10,
        borderBottomWidth : 1,
        borderBottomColor :"#E9E9E9"
    },
    cardbody :{
        flex : 1,
        paddingVertical :10,
        paddingHorizontal : 20,

    },
    cardname :{
       fontSize : 15,
       fontWeight : '500',
       color : 'rgba(0, 0, 0, 0.9)'
    },
    carddate :{
     color :'gray',
     marginTop : 6,
    },
    cardmoney :{
        fontSize : 15,
        fontWeight : '700'
    },
    list :{

    },
    container :{
        backgroundColor :"#fff",
        paddingVertical :10,
        paddingHorizontal : 20,
        borderTopStartRadius :20,
        borderTopEndRadius :20
    },
})