import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen = ({ navigation }: Props) => {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>

    {/* Header */}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
              <Ionicons name="arrow-back" size={36} color="#0e3b26" />
            </TouchableOpacity>
          </View>

      {/* Logo */}
      <Image
        source={require('../assets/images/logo-reserveja.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Registre-se</Text>

      <TextInput style={styles.input} placeholderTextColor="#C0C0C0" placeholder="Primeiro Nome" />
      <TextInput style={styles.input} placeholderTextColor="#C0C0C0" placeholder="Sobrenome" />
      <TextInput style={styles.input} placeholderTextColor="#C0C0C0" placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholderTextColor="#C0C0C0" placeholder="Crie sua senha" secureTextEntry />
      <TextInput style={styles.input} placeholderTextColor="#C0C0C0" placeholder="Confirme sua senha" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REGISTRE-SE</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Já possui uma conta?{' '}
        <Text style={styles.loginLink} 
        onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 24,
    backgroundColor: '#D9D9D9',
    flexGrow: 1,
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 24,
    color: '#00471B',
  },
  header: {
    width: '100%',
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  back: {
    position: 'absolute',
    left: 16,
    top: 12,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#00471B',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  loginText: {
    marginTop: 24,
    fontSize: 14,
    color: '#000',
  },
  loginLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
