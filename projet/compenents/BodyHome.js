
import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Dimensions,Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ListService from './Listservice';
import RecentActivity from './RecentActivity';
import { icons } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowHeight = Dimensions.get('window').height;
export default function BodyHome() {
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
        <View style={{padding :20}}>
        <TouchableOpacity style={{
          width :50,
          height :50,
          borderRadius :24,
          backgroundColor :'#ffc700',
          justifyContent : 'center',
          alignItems : 'center'
        }}>
         <Icon name="plus" size={20} color="#FFFF" />
      </TouchableOpacity>
      </View>
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
