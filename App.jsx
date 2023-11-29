// App.js
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/header';
import WelcomeScreen from './components/welcomeScreen';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeDismiss = () => {
    setShowWelcome(false);
  };

  return (
    <View style={styles.container}>
      <Header />
      {showWelcome ? (
        <WelcomeScreen onLoginPress={handleWelcomeDismiss} />
      ) : (
        <View style={styles.mainContent}>
          <Text>app</Text>
          {/* Otro contenido de la pantalla principal */}
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 25,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
