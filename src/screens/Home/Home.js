import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';
import {useForm, Controller} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';

const Home = () => {
  const {
    control,
    formState: {errors},
  } = useForm();
  const [date, setDate] = useState(new Date());
  const [time, setTime ] = useState(new  Date());
  const onSendPressed = () => {
    console.warn('Sent');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView style={{padding: 20, marginTop: 40}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.tittle}>Registro de Horas</Text>

          <DatePicker
            locale="es"
            mode="datetime"
            date={date}
            onDateChange={() => setDate(new Date())}
          />
          {/* <DatePicker
            locale="es"
            mode="time"
            date={time}
            onDateChange={() => setTime(new Date())}
          /> */}

          <CustomInput
            name="startTime"
            placeholder="Start time"
            control={control}
            rules={{required: ''}}
          />

          <CustomButton text={'Send'} onPress={onSendPressed} />

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
    color: 'black',
  },
  tittle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    marginVertical: 20,
  },
});

export default Home;
