import React from 'react';
import {SafeAreaView, View, StyleSheet, Pressable } from 'react-native';
export default function Botoncito({onPress}) {
  return (
    <SafeAreaView>
      <View >
      <Pressable style={styles.boton}
      onPress={onPress}

        />
     </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    boton: {
        padding: 20,
        width: 100,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
      },
});
