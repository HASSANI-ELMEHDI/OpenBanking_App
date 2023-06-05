import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    Modal,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import Send from "./Services/Send";
import { COLORS, SIZES, FONTS, icons } from "../constants"
import Recharge from "./Services/Recharge";



const featuresData = [
    {
        id: 1,
        icon: icons.send,
        color: COLORS.purple,
        backgroundColor: COLORS.lightpurple,
        description: "Envoi d'argent",
        modalId: 'send',
    },
    {
        id: 2,
        icon: icons.phone,
        color: COLORS.yellow,
        backgroundColor: COLORS.lightyellow,
        description: "Recharge télephonique",
        modalId: 'phone',
    },
    {
        id: 3,
        icon: icons.wallet,
        color: COLORS.primary,
        backgroundColor: COLORS.lightGreen,
        description: "Recharger wallet",
        modalId: 'wallet',
        },
        {
        id: 4,
        icon: icons.map,
        color: COLORS.red,
        backgroundColor: COLORS.lightRed,
        description: "Localiser agences",
        to :'Send'
        },
        {
        id: 5,
        icon: icons.bill,
        color: COLORS.yellow,
        backgroundColor: COLORS.lightyellow,
        description: "Paiment factures",
        modalId: 'phone',
        },
        {
        id: 6,
        icon: icons.boutique,
        color: COLORS.primary,
        backgroundColor: COLORS.lightGreen,
        description: "Boutique cash plus",
        modalId: 'phone',
        },
        {
        id: 7,
        icon: icons.qr,
        color: COLORS.red,
        backgroundColor: COLORS.lightRed,
        description: "Paiment par QR",
        modalId: 'phone',
        },
        {
        id: 8,
        icon: icons.more,
        color: COLORS.purple,
        backgroundColor: COLORS.lightpurple,
        description: "More",
        modalId: 'phone',
        },
];

export default function renderFeatures() {

    const [modalVisible, setModalVisible] = useState(false);
    const [activeModal, setActiveModal] = useState(null);

    const handlePress = (modalId) => {
        setActiveModal(modalId);
        setModalVisible(true);
    };

    const handleClose = () => {
        setActiveModal(null);
        setModalVisible(false);
    };

    const [features, setFeatures] = React.useState(featuresData);
    const Header = () => (
        <View style={{ marginBottom: 20 }}>
            <Text style={ { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 ,color :'rgba(255, 255, 255, 0.8)'}}>Services</Text>
        </View>
    )

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginBottom: 20, width: 60, alignItems: 'center' }}
            onPress={() => handlePress(item.modalId)}
        >
            <View
                style={{
                    height: 50,
                    width: 50,
                    marginBottom: 5,
                    borderRadius: 20,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={item.icon}
                    resizeMode="contain"
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: item.color
                    }}
                />
            </View>
            <Text style={{ textAlign: 'center', flexWrap: 'wrap', color : "rgba(255, 255, 255, 0.8)" }}>{item.description}</Text>
        </TouchableOpacity>
    )

    //-------------------------------------------------------------------------------------------
    let modalContent;
  switch (activeModal) {
    case 'wallet':
        modalContent = (
            <View style={{ flex: 1 ,backgroundColor : '#009dad'}}>
              <Recharge />
              
              <TouchableOpacity
                style={{ position: 'absolute', top: 10, left: 10 }}
                onPress={handleClose}
              >
                 <Icon name="arrow-left" color={'rgba(255, 255, 255, 0.9)'} size={25} />
              </TouchableOpacity>
            
            <Text  style={{
                 position: 'absolute', top: 10, left : 50,
                lineHeight :30,
                marginBottom: 8,
                color :"rgba(255, 255, 255, 0.9)" ,
                fontSize :24,
              }}>Recharge compte par carte bancaire </Text>
            </View>
          )
      break;
    case 'send':
     
      break;
    case 3:
     
      break;
    default:
     
  }
      
    return (
        <View style={{ margin: 12 ,backgroundColor : "rgba(0, 0, 0, 0.07)",padding : 20,borderRadius: 10}}>
            <FlatList
                ListHeaderComponent={Header}
                data={features}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
            />
            <Modal
                visible={modalVisible}
                onRequestClose={handleClose}
            >
                {modalContent}
            </Modal>
        </View>
    )
}