import React from "react";
import { View, Text, Button,StyleSheet } from "react-native";


function StacksScreen() {
  return (
    <View>
      <Text style={styles.Texto}>
          Stacks Screen
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Texto: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: '20%',
  },
});
export default StacksScreen;