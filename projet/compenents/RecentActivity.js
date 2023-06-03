
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from "react-native";

import {  icons } from "../constants"


const activites = [
    {
        id : 1,
        status : "up",
        name : "Virement au Hassani Elmehdi",
        money : "2212,25 DHs",
        Date : "Hier , 21:21 "
    },
    {
        id : 2,
        status : "up",
        name : "Virement au Hassani Elmehdi",
        money : "2212,25 DHs",
        Date : "Hier , 21:21 "
    },
    {
        id : 3,
        status : "up",
        name : "Virement au Hassani Elmehdi",
        money : "2212,25 DHs",
        Date : "Hier , 21:21 "
    },
    {
        id : 4,
        status : "down",
        name : "Virement au Hassani Elmehdi",
        money : "2212,25 DHs",
        Date : "Hier , 21:21 "
    },
    {
        id : 5,
        status : "up",
        name : "Virement au Hassani Elmehdi",
        money : "2212,25 DHs",
        Date : "Hier , 21:21 "
    },
    
]

export default function RecentActivity (){
    const [activitys, setactivitys] = React.useState(activites);

    const item  = e => {
        return (
            <View  style={styles.card} key={ e.id}>
                       
               {
                e.status=='down' ?  <Icon name="arrow-down" size={15} color="rgba(0, 255, 0, 0.5)" /> :  <Icon name="arrow-up" size={15} color="rgba(255, 0, 0, 0.5)" />
               }
              
              <View style={styles.cardbody}>
                <Text style={styles.cardname}>{e.name}</Text>
                <Text style={styles.carddate}>{e.Date}</Text>
              </View> 
              <View>
                <Text style={styles.cardmoney}>{e.money}</Text>
              </View>
            </View>
        )
    };

    return (
        <View style ={styles.container}>
            <Text style={styles.titre}>Activités récents </Text>
            <View>
                {activitys.map(e=> item(e))}
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