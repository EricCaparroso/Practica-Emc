import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const WelcomeScreen = ({ onLoginPress }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verifica si el nombre de usuario y la contraseña son correctos
    if (username === 'emc' && password === '1234') {
      // Llama a la función onLoginPress para indicar que el usuario ha iniciado sesión
      onLoginPress();
    } else {
      // Muestra un mensaje de error si las credenciales son incorrectas
      Alert.alert('Error de inicio de sesión', 'Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/imagen.jpg')}
        style={styles.backgroundImage}
      />
      <Text style={styles.welcomeText}>¡Bienvenido!</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de Usuario"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius:15,
    marginBottom: 10,
    padding: 10,
    
  },
  loginButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
