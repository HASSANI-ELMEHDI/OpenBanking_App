


import * as React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


import {
    View,
    Text,
    TouchableOpacity
} from "react-native"

const TAGLINE = {
    fontSize: 12,
    fontFamily: 'Gilroy-Regular',
  };

  const H2 = {
    fontSize: 22,
    fontFamily: 'Gilroy-SemiBold',
  };
const  HeaderHome = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
           <TouchableOpacity
                style ={{marginRight : 10}}
                activeOpacity={0.9}
                onPress={() => console.log("profile")} >
                    <Icon name="user" color={'rgba(255, 255, 255, 0.9)'} size={25} />
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <Text style={[TAGLINE, {color: 'rgba(255, 255, 255, 0.9)'}]}>Bonjour,</Text>
                <Text style={[H2, {color: 'rgba(255, 255, 255, 0.9)' }]}>HASSANI Elmehdi</Text>
            </View>
            <TouchableOpacity
                style ={{marginRight : 10}}
                activeOpacity={0.9}
                onPress={() => console.log("notif")} >
                    <Icon name="bell" color={'rgba(255, 255, 255, 0.9)'} size={25} />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => console.log("aide")} >
                    <Icon name="help-circle" color={'rgba(255, 255, 255, 0.9)'} size={25} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#009dad',
        padding: 20,
        paddingBottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
export default HeaderHome;