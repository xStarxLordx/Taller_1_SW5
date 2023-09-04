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

const Home = () => {
  const [username, setUsername] = useState("");
 

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
            <Text style={styles.tittle}>Home</Text>
          
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
    fontWeight: "bold",
    color: "black"
  },
  tittle:{
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    margin:10,
    marginVertical:20
  },
});

export default Home;
