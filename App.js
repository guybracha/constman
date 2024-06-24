import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyInput from './comps/MyInput';

export default function App() {
  return (
    <View style={styles.container}>
      <MyInput/>
      <Text style={{color:"red",fontSize:24}}>Welcome to React Native</Text>
      <View>
        <Text>This is a new Line!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: "green",
  },
});
