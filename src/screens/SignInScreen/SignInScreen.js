import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logoMina.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import Persona from '../../clases/Persona';


const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const persona = new Persona('usuario@example.com', 'contraseña123');
  console.log(`Email: ${persona.getEmail()}`);
  console.log(`Contraseña: ${persona.getPassword()}`);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  
  const onSignInPressed = data => {
    //validate
    console.log();
    
    navigation.navigate('Home')
  };
  /* const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  }; */
  const onForgotPasswordPressed = () => {
    Persona.call(consultarDatos("username", "password"))
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.text}>App Mina</Text>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.35}]}
          resizeMode="contain"
        />
        <CustomInput
           name="username"
           placeholder="Username"
           control={control}
           rules={{required: 'Username is required'}}
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
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*:();+=!?]).{8,}$/,
              message: 'The password must have special caracter (@#$%^&*:();+=!?), a number, an uppercase letter and an lowercase letter',
          },
          }}
        />

        <CustomButton
          text={'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
        />
        {/* <CustomButton
          text={'Forgot Password'}
          onPress={onForgotPasswordPressed}
          type="3rd"
        /> */}
        <CustomButton
          text={'persona'}
          onPress={onForgotPasswordPressed}
          type="3rd"
        />
        <CustomButton
          text={"Don't have an account? Sign Up!"}
          onPress={onSignUpPressed}
          type="3rd"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },

  logo: {
    width: '75%',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  TextInput: {
    backgroundColor: '#666666',
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: 'white',
  },
});

export default SignInScreen;
