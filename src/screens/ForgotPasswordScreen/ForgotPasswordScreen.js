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

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [email, setEmail] = useState("");

  const onSendPressed = () => {
    console.warn('Sent');
  };
  const onSignInPressed = () => {
    console.warn('SignInp');
  };
  return (
    <SafeAreaView style={{padding:20, marginTop:40}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.tittle}>Reset your password</Text>
          
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          
          <CustomButton text={'Send'} onPress={onSendPressed} />
          
          <CustomButton
            text={"Back to Sign In"}
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
    fontWeight: "bold"
  },
  tittle:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    margin:10,
    marginVertical:20
  },
});

export default ForgotPasswordScreen;
