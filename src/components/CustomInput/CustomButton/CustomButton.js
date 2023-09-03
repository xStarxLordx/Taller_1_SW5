import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type="1rst"}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}> {text} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '40%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
  },
  container_1rst: {
    backgroundColor: '#555555',
  },
  container_3rd: {
    width: "100%"
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_3rd: {
    color: "grey"
  },
});
export default CustomButton;
