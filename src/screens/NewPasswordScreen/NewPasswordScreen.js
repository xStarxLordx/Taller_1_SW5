import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');


  const onSubmitPressed = () => {
    console.warn('Submited');
  };
  const onSignInPressed = () => {
    console.warn('SignInp');
  };
  return (
    <SafeAreaView style={{padding: 20, marginTop: 40}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.tittle}>Reset your password</Text>

          <CustomInput 
          placeholder="Code" 
          value={code} 
          setValue={setCode} 
          />
          <CustomInput
            placeholder="New password"
            value={newPassword}
            setValue={setNewPassword}
            secureTextEntry
          />
          <CustomInput
            placeholder="Repeat new password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry
          />
          <CustomButton text={'Submit'} onPress={onSubmitPressed} />

          <CustomButton
            text={'Back to Sign In'}
            onPress={onSignInPressed}
            type="3rd"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    width: '75%',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color:"black"
  },
  tittle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    margin: 10,
    marginVertical: 20,
  },
});

export default NewPasswordScreen;
