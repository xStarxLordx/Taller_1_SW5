import {View, Text, StyleSheet, ScrollView, SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import Persona from '../../clases/Persona';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const navigation = useNavigation();
  const pwd = watch("password");
  const eml = watch("email");
  const onRegisterPressed = () => {
    console.log(eml);
    console.log(pwd);
    const minero = new Persona(eml, pwd);
    console.log(`${minero.getEmail()}`)
    navigation.navigate('SignIn');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={{padding: 20, marginTop: 40}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.tittle}>Create an account</Text>

          <CustomInput
            name="username"
            placeholder="Username"
            control={control}
            rules={{
              required: 'Username is required',
              minLength: {
                value: 5,
                message: 'The username must have at least 5 characters',
              },
              maxLength: {
                value: 15,
                message: 'The username can have up to 24 characteres',
              },
            }}
          />
          <CustomInput
            name="email"
            placeholder="Email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
            }}
          />
          <CustomInput
            name="password"
            placeholder="Password"
            secureTextEntry
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be minimum 8 characters long',
              },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*:();+=!?]).{8,}$/,
                message:
                  'The password must have special caracter (@#$%^&*:();+=!?), a number, an uppercase letter and an lowercase letter',
              },
            }}
          />
          
          <CustomInput
            name="repeatPassword"
            placeholder="Repeat Password"
            secureTextEntry
            control={control}
            rules={{
              required: 'Password is required',
              validate: value => value === pwd || 'Password do not match',
            }}
          />
          <CustomButton
            text={'Register'}
            onPress={handleSubmit(onRegisterPressed)}
          />

          <CustomButton
            text={'Have an account? Sign In'}
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
    color: 'black',
  },
  tittle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 30,
  },
});

export default SignUpScreen;