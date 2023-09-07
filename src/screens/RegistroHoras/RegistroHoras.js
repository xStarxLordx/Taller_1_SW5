import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';

const RegistroHoras = () => {
  const {
    control,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [time, setTime ] = useState(new  Date());
  const [user, setUser] = useState("");
  const onSendPressed = () => {
    console.warn('Guardado');
    navigation.navigate('Home')
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView style={{padding: 20, marginTop: 40}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.tittle}>Registro de Horas</Text>
          <Text style={styles.text}> Fecha y hora de inicio: </Text>
          <DatePicker
            locale="es"
            mode="datetime"
            date={date}
            onDateChange={() => setDate(new Date())}
          />
          <DatePicker
            locale="es"
            mode="time"
            date={time}
            onDateChange={() => setTime(new Date())}
          /> 

          {/* <CustomInput
            name="user"
            placeholder="Username"
            value = {user}
            control={control}
            rules={{required: ''}}
            onChangeText={setUser}
          /> */}

          <CustomButton text={'Guardar'} onPress={onSendPressed} />

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

export default RegistroHoras;
