import React from 'react';
import {SafeAreaView, View, TextInput, StyleSheet } from 'react-native';
export default function Input({value, onChangeText,placeholder,maxLength,secureTextEntry,inputMode}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      maxLength={maxLength}
      inputMode={inputMode}
      style={styles.input}
        />
     </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 250,
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
});
