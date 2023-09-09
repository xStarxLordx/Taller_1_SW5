import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
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
  //const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [textItem, setTextItem] = useState('');
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState('');
  const date = new Date();

  const n = date.toDateString();

  const time1 = date.toLocaleTimeString();

  console.log('Date: ' + n);

  console.log('Time: ' + time);
  const onSavePressed = () => {
    console.log(
      (time.getHours() +(time.getMinutes() / 60) )-
        (date.getHours() + (date.getMinutes() / 60))
    );
    setTotal(
      (time.getHours() +(time.getMinutes() / 60) )-
        (date.getHours() + (date.getMinutes() / 60))
    );
    setTextItem(total.toString());
    setItems(prevState => [...prevState,{id: Date.now().toString(), Turno: textItem}]);
    console.warn('Registro exitoso');
    //console.log(items);
  };

  const onHomePressed = () => {
    navigation.navigate('Home');
  };

  const renderItem = ({item}) =>{

    return(
      <ScrollView>
        <Text style={{color:"black"}}> {item.Turno} </Text>
        </ScrollView>
    )
  }


  return (
    <SafeAreaView style={{padding: 20, marginTop: 40}}>
      
        <Text style={styles.tittle}>Registro de Horas:</Text>
        <View style={styles.root}>
            <Text style={[styles.tittle, {marginBottom:20}]}>Hora de inicio:</Text>

            <Text style={styles.text} >{n}</Text>
            <Text style={styles.text}>{time1}</Text>
            <Text style={[styles.tittle, {marginBottom:20}]}>Hora de final:</Text>

          <DatePicker
            title={'Fin de turno'}
            modal
            open={open}
            date={time}
            onConfirm={time => {
              setOpen(false);
              setTime(time);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <CustomButton text="Registrar" onPress={() => setOpen(true)} />
          {/* <DatePicker
            title={'Inicio de turno'}
            modal
            open={open}
            date={date}
            
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
 */}
          {/* <CustomInput
            name="user"
            placeholder="Username"
            value = {user}
            control={control}
            rules={{required: ''}}
            onChangeText={setUser}
          /> */}

          <CustomButton text={'Guardar'} onPress={onSavePressed} />
          
          <FlatList
            data= {items}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
          />

          <CustomButton
            text={'Back to Home'}
            onPress={onHomePressed}
            type="3rd"
          />
        </View>
        
   
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
    alignSelf: 'center',
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
