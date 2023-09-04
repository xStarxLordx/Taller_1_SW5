import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';
import { useNavigation } from "@react-navigation/native"

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate("Home");
  };
  const onSignInPressed = () => {
    
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaView style={{padding:20, marginTop:40}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.tittle}>Create an account</Text>
          
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <CustomInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <CustomInput
            placeholder="Repeat Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry
          />
          <CustomButton text={'Register'} onPress={onRegisterPressed} />
          
          <CustomButton
            text={"Have an account? Sign In"}
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
  text:{
    fontSize: 30,
    fontWeight: "bold",
    color: "black"
  },
  tittle:{
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    marginVertical:30,
  },
});

export default SignUpScreen;
