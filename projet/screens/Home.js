import * as React from 'react';

import HeaderHome from '../compenents/HeaderHome';

import BodyHome from '../compenents/BodyHome';
import { View,ScrollView } from 'react-native';


export default function Parametres({ navigation }) {
    return (
        <ScrollView>
         <HeaderHome/> 
         <BodyHome/>
        </ScrollView>
       
    );
}

