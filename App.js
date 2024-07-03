import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MovieList from './comps/MovieList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to React Native</Text>
      <MovieList />
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
  },
  welcomeText: {
    color: "white",
    fontSize: 24,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    borderColor: "black",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 50,  // הוספנו marginTop
  },
});
