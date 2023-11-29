import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
export default function App() {
  return (
    <View style={styles.container}>
     <Header  /> 
      <Text>app</Text>
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
    flexDirection: 'column', 
    justifyContent: 'flex-start',marginTop: 25,
  },
});
