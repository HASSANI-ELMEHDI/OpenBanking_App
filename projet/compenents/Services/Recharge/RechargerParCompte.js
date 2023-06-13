import React, { useState ,useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet,Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Formik } from 'formik';
import * as Yup from 'yup';
import SelectAccount from './SelectAccount';

const { height } = Dimensions.get('window');


const RechargerParCompte = ({ visible }) => {
  const [step, setStep] = useState(1);

  const [borderColor, setBorderColor] = useState('white');
  const [compteIsSelected, setIsSelected] = useState(false);
  const [compteSelected, setSelected] = useState({});

  useEffect(() => {
    if (compteIsSelected == true) {
      setBorderColor('#009dad');
    }
  }, [compteIsSelected]);
   /// for the new feature ----------
    const [modalVisible, setModalVisible] = useState(false);
  
    const handleTouchablePress = () => {
      setModalVisible(true);
    };
  
    const handleModalClose = () => {
      setModalVisible(false);
    };
    
  const navigation = useNavigation();

 

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  

  const handleEmailInputChange = (text) => {
    setEmail(text);
  };

  const handlePasswordInputChange = (text) => {
    setPassword(text);
  };
  
  const renderStepOne = () => {
    const validationSchema = Yup.object().shape({
      motif: Yup.string().min(3, 'Motif non valide ').required('* Obligatoire'),
  
      balance : Yup.number().required('* Obligatoire').positive('Veillez entrer un montant positive').min(10, 'Veillez entrer un montant supérieure'),
    });
    return (
      <View >
      {/*----------------------------------- Add compte modal ----------------------------------*/ }
      
      <Modal visible={modalVisible} onRequestClose={handleModalClose}>
        <View style={{ flex: 1 ,backgroundColor : 'white' , marginTop : 20} }>
        <View style={{marginTop : 55,marginLeft : 10,marginRight : 10}}>
        <SelectAccount setSelected={setSelected} handleModalClose={handleModalClose} setIsSelected={setIsSelected}/> 
        </View>
        
              <TouchableOpacity
                style={{ position: 'absolute', top: 10, left: 10 }}
                onPress={handleModalClose}
              >
                 <BIcon name="arrow-left" color={'rgba(0, 0, 0, 0.9)'} size={25} />
              </TouchableOpacity>
            
            <Text  style={{
                 position: 'absolute', top: 10, left : 50,
                lineHeight :30,
                marginBottom: 8,
                color :"rgba(0, 0, 0, 0.9)" ,
                fontSize :24,
                fontWeight :'600'
              }}>Mes comptes </Text>
              
            </View>
      </Modal>
      {/*---------------------------------------------------------------------*/ }
      <Text style={{
        lineHeight: 30,
        marginBottom: 8,
        color: "rgba(0, 0, 0, 0.8)",
        fontSize: 20,
        margin: 20,
        fontWeight: 'bold'
      }}>Etape 1 : Saisie d'informations</Text>
    
      <Formik
        initialValues={{ motif: ''}}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          handleNextStep();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched  }) => (
      <View style={{}}>
        <View style={{marginLeft:15,marginRight:15,}}>
       
         {/* ------------------------------------------------------------------------- */}
         
<View style={{ position: 'relative', flex: 1 }}>
  <TouchableOpacity
    onPress={() => {
      handleTouchablePress();
      
    }}
    style={{
      ...styles.textinput,
      borderColor: borderColor,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      height : 50
    }}
  >
    
    {
              compteIsSelected==false ? (
                <>
                <Icon
                name="university"
                size={20}
                color="#009dad"
                style={{ width: 30, height: 30, marginRight: 10 }} 
                 />
                 <Text style={{ textAlign: 'center',fontWeight :'bold',color: "rgba(0, 0, 0, 0.7)" }}>Veillez sélectionner un compte</Text>
                </>)
               :  (
                <>
                <Icon
                name="check-circle"
                size={30}
                color="#009dad"
                style={{ width: 30, height: 30, marginTop: 10 }} 
                 />
                 <View style={styles.card}>
              <View style={styles.cardbody}>
                <Text style={styles.cardname}>{compteSelected.name}</Text>
                <Text style={styles.carddate}>{compteSelected.compte}</Text>
              </View>
              <View>
                <Text style={styles.cardmoney}>{compteSelected.balance}</Text>
                <Text style={styles.cardmoney}>{compteSelected.iso_currency_code}</Text>
              </View>
            </View>
              </>)
      }
    
  </TouchableOpacity>
</View>
         {/* ------------------------------------------------------------------------- */}
         <Text style={{marginBottom :3,marginTop :10,color:'rgba(0,0,0,0.35)',fontWeight :'bold'}}>Montant</Text>
          <View style={{ position: 'relative', flex: 1 }}>
            
              <TextInput
                style={{...styles.textinput,borderColor : (touched.balance && !errors.balance) ?'#009dad' :'white'}}
                onChangeText={handleChange('balance')}
                onBlur={handleBlur('balance')}
                value={values.balance}
              />
              {touched.balance && !errors.balance && (
                <Icon
                  name="check-circle"
                  size={20}
                  color="#009dad"
                  style={{ position: 'absolute', right: 10, top: 10 }}
                />
              )}
              
          </View>
            {touched.balance && errors.balance && (
              <Text style={{ color: '#e74c3c' }}>{errors.balance}</Text>
            )}
           {/* ------------------------------------------------------------------------- */} 
            
          <Text style={{marginBottom :5,color:'rgba(0,0,0,0.35)',fontWeight :'bold'}}>Motif</Text>
          <View style={{ position: 'relative', flex: 1 }}>
            
              <TextInput
                style={{...styles.textinput,borderColor : (touched.motif && !errors.motif) ?'#009dad' :'white'}}
                onChangeText={handleChange('motif')}
                onBlur={handleBlur('motif')}
                value={values.motif}
                autoFocus={true}
              
              />
              {touched.motif && !errors.motif && (
                <Icon
                  name="check-circle"
                  size={20}
                  color="#009dad"
                  style={{ position: 'absolute', right: 10, top: 10 }}
                />
              )}
              
          </View>
            {touched.motif && errors.motif && (
              <Text style={{ color: '#e74c3c' }}>{errors.motif}</Text>
            )}
      {/* ------------------------------------------------------------------------- */}
        </View>
        <View style={styles.bottomcontainer}>
            <TouchableOpacity onPress={handleSubmit} style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>CONTINUER</Text>
            </TouchableOpacity>
        </View>
    </View>
      )}
    </Formik>
  </View>
    );
  };

  const renderStepTwo = () => {
    return (
      <View>
        <Text>Step 2</Text>
        <TextInput onChangeText={handleEmailInputChange} placeholder="Email" />
        <TouchableOpacity onPress={handlePreviousStep}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextStep}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderStepThree = () => {
    return (
      <View>
        <Text>Step 3</Text>
        <TextInput onChangeText={handlePasswordInputChange} placeholder="Password" />
        <TouchableOpacity onPress={handlePreviousStep}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  let formStep;

  switch (step) {
    case 1:
      formStep = renderStepOne();
      break;
    case 2:
      formStep = renderStepTwo();
      break;
    case 3:
      formStep = renderStepThree();
      break;
    default:
      formStep = renderStepOne();
  }

  return (
    <View style={{height}}>
      
     
        <View style={styles.acontainer}>
          {formStep}
        </View>
 
      
    
    </View>
  );
};

const styles = StyleSheet.create({
  
  bottomcontainer :{
    
  },
  acontainer: {
    marginTop : 80,
    margin :7,
    borderTopStartRadius :15,
    borderTopEndRadius :15,
    backgroundColor : 'white',
  height
  },
  appButtonContainer: {
    backgroundColor: "#009dad",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight :20,
    marginLeft :20,
     marginTop :'95%' 
  },
  appButtonText: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.8)',
    alignSelf: "center",
    fontWeight :'700',
  },
  textinput :{
    height: 45, borderWidth: 1, paddingHorizontal: 10 ,
    borderRadius : 24,
    backgroundColor :'#f5f7f9',
   
    
  },
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
  
});

export default RechargerParCompte;