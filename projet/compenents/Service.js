import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const Service= () => {
  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center'
    }
  };

  const progressStepsStyle = {
    activeStepIconBorderColor: 'lightblue',
    activeLabelColor: 'black',
    activeStepNumColor: 'black',
    activeStepIconColor: 'lightblue',
    completedStepIconColor: 'lightgreen',
    completedProgressBarColor: 'lightgreen',
    completedCheckColor: 'green',
  };

  const buttonTextStyle = {
    color: '#686868',
    fontWeight: 'bold'
  };

  const [currentStep, setCurrentStep] = useState(0);

  const onNextStep = () => {
   if(currentStep!==0)
    setCurrentStep(currentStep + 1);
    console.log('called next step');
  };

  const onPrevStep = () => {
    setCurrentStep(currentStep - 1);
    console.log('called previous step');
  };

  const onSubmitSteps = () => {
    console.log('called on submit step.');
  };

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <ProgressSteps {...progressStepsStyle} activeStep={currentStep}>
        <ProgressStep
          label="First"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 1!</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Second"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 2!</Text>
          </View>
        </ProgressStep>
   
        <ProgressStep
          label="Fourth"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 3!</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Fifth"
          onPrevious={onPrevStep}
          onSubmit={onSubmitSteps}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 4!</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default Service;