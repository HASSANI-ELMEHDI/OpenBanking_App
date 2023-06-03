import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet,Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Formik } from 'formik';
import * as Yup from 'yup';

const { height } = Dimensions.get('window');


const Recharge = ({ visible }) => {
  const [step, setStep] = useState(1);

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
      nom: Yup.string().min(3, 'Veillez entrer un nom valide').required('* Obligatoire'),
      prenom: Yup.string().min(3, 'Veillez entrer un prénom valide').required('* Obligatoire'),
      email : Yup.string().email('Veillez entrer un email valide').required('* Obligatoire'),
      balance : Yup.number().required('* Obligatoire').positive('Veillez entrer un montant positive').min(10, 'Veillez entrer un montant supérieure'),
    });
    return (
      <View >
      
      <Text style={{
        lineHeight: 30,
        marginBottom: 8,
        color: "rgba(0, 0, 0, 0.8)",
        fontSize: 20,
        margin: 20,
        fontWeight: 'bold'
      }}>Etape 1 : Saisie d'informations</Text>
    
      <Formik
        initialValues={{ nom: '' ,prenom :'',email:''}}
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
          <Text style={{marginBottom :5,color:'rgba(0,0,0,0.35)',fontWeight :'bold'}}>Nom</Text>
          <View style={{ position: 'relative', flex: 1 }}>
            
              <TextInput
                style={{...styles.textinput,borderColor : (touched.nom && !errors.nom) ?'#009dad' :'white'}}
                onChangeText={handleChange('nom')}
                onBlur={handleBlur('nom')}
                value={values.nom}
                autoFocus={true}
              
              />
              {touched.nom && !errors.nom && (
                <Icon
                  name="check-circle"
                  size={20}
                  color="#009dad"
                  style={{ position: 'absolute', right: 10, top: 10 }}
                />
              )}
              
          </View>
            {touched.nom && errors.nom && (
              <Text style={{ color: '#e74c3c' }}>{errors.nom}</Text>
            )}
         {/* ------------------------------------------------------------------------- */}

         <Text style={{marginBottom :3, marginTop :10,color:'rgba(0,0,0,0.35)',fontWeight :'bold'}}>Pénom</Text>
          <View style={{ position: 'relative', flex: 1 }}>
            
              <TextInput
                style={{...styles.textinput,borderColor : (touched.prenom && !errors.prenom) ?'#009dad' :'white'}}
                onChangeText={handleChange('prenom')}
                onBlur={handleBlur('prenom')}
                value={values.prenom}
              />
              {touched.prenom && !errors.prenom && (
                <Icon
                  name="check-circle"
                  size={20}
                  color="#009dad"
                  style={{ position: 'absolute', right: 10, top: 10 }}
                />
              )}
              
          </View>
            {touched.prenom && errors.prenom && (
              <Text style={{ color: '#e74c3c' }}>{errors.prenom}</Text>
            )}

            {/* ------------------------------------------------------------------------- */}
          <Text style={{marginBottom :3,marginTop :10,color:'rgba(0,0,0,0.35)',fontWeight :'bold'}}>Email</Text>
          <View style={{ position: 'relative', flex: 1 }}>
            
              <TextInput
                style={{...styles.textinput,borderColor : (touched.email && !errors.email) ?'#009dad' :'white'}}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && !errors.email && (
                <Icon
                  name="check-circle"
                  size={20}
                  color="#009dad"
                  style={{ position: 'absolute', right: 10, top: 10 }}
                />
              )}
              
          </View>
            {touched.email && errors.email && (
              <Text style={{ color: '#e74c3c' }}>{errors.email}</Text>
            )}
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
      
     
        <View style={styles.container}>
          {formStep}
        </View>
 
      
    
    </View>
  );
};

const styles = StyleSheet.create({
  
  bottomcontainer :{
    
  },
  container: {
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
    marginTop : '95%',
  
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
   
    
  }
  
});

export default Recharge;