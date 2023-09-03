import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logoMina.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn('Sign in');
  };
  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
  };
  const onSignUpPressed = () => {
    console.warn('Sign Up');
  };
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.text}>Create an account</Text>
          
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <CustomButton text={'Sign In'} onPress={onSignInPressed} />
          <CustomButton
            text={'Forgot Password'}
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
  text:{
    fontSize: 30,
    fontWeight: "bold"
  },
  tittle:{
    fontSize: 40,
    fontWeight: "bold",
    color: "#051C60",
    margin:10,
  },
});

export default SignUpScreen;
