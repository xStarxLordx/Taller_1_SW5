import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';
import {useForm, Controller} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import {useNavigation} from '@react-navigation/native';


const Home = () => {
  const {
    control,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation();
  const onSavePressed = () => {
    navigation.navigate("RegistroHoras")
    
  };
  const onSeePressed = () => {
    
    console.warn('Consultar');
  };
  const onNewsPressed = () => {
    navigation.navigate("Novedades")
    console.warn('Novedades');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView style={{padding: 20, marginTop: 40}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.tittle}>Home</Text>

          <CustomButton text={'Registro Horas'} onPress={onSavePressed} />
          <CustomButton text={'Consulta Horas'} onPress={onSeePressed} />
          <CustomButton text={'Novedades'} onPress={onNewsPressed} />
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: "flex-start"
  },
  tittle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    marginBottom: 50,
  },
});

export default Home;
