
import Icon from 'react-native-vector-icons/FontAwesome';
import BIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import {
    View,
    StyleSheet,
    Button,
    Modal,
    Image,
    Text,
    TouchableOpacity,
    Animated,
  } from 'react-native';
  

import React, { useState, useEffect } from 'react';
//import {  icons } from "./../constants"
import axios from 'axios';

const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
export default function  Options (){
    const [visible, setVisible] = React.useState(false);
    
    return (
        <View>
            <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              {/* ----- A changer ------ */}
              <BIcon name="close" size={30} color="rgba(0, 157, 173, 0.3)"/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}> 
        {/* ----- A changer ------ */}
             <BIcon name="plus-circle-outline" size={80} color="rgba(0, 157, 173, 0.12)" />
        </View>
        <Text style={{margin: 5, fontStyle: "normal", color: "#333", fontSize: "1.05rem", fontFamily: "Arial, sans-serif"}}>
           Vous pouvez alimenter votre compte dans l'agence Cash Plus la plus proche, par carte bancaire 
           ou à partir d'un transfert de l'un de vos comptes externes.
        </Text>
        <View style={styles.bottomcontainer}>
            <TouchableOpacity  style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>TROUVER UNE AGENCE </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottomcontainer}>
            <TouchableOpacity  style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>UTLISER UNE CARTE BANCAIRE</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottomcontainer}>
            <TouchableOpacity  style={{...styles.appButtonContainer,marginBottom : 20}}>
              <Text style={styles.appButtonText}>UTLISER UN COMPTE LIÉ</Text>
            </TouchableOpacity>
        </View>
      </ModalPoup>
      <View style={{padding :20}}>
        <TouchableOpacity 
        onPress={() => setVisible(true)} 
         style={{
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
    )
}

const styles = StyleSheet.create({
    modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '90%',
      backgroundColor: 'white',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 20,
      elevation: 20,
    },
    header: {
      width: '100%',
      //height: 40,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    appButtonContainer: {
        backgroundColor: "#009dad",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginRight :20,
        marginLeft :20,
        marginTop : '5%',
      },
      appButtonText: {
        fontSize: 15,
        color: 'rgba(255,255,255,0.8)',
        alignSelf: "center",
        fontWeight :'700',
      },
  });