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
import { useNavigation } from "@react-navigation/native"

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn('Sign in');
    //validate
    navigation.navigate("Home");
  };
  const onForgotPasswordPressed = () => {
    
    navigation.navigate("ForgotPassword");
  };
  const onSignUpPressed = () => {
    
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.text}>App Mina</Text>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 0.35}]}
            resizeMode="contain"
          />
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
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "black"
  },
});

export default SignInScreen;
