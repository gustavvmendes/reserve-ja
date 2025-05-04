// screens/LoginScreen.tsx
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
 const [passwordVisible, setPasswordVisible] = useState(false);
 
   return (
     <View style={styles.container}>
       {/* Topo com 30% de altura em cor verde */}
       <View style={styles.header}>
         <Image
           source={require('../assets/images/image-login.png')}
           style={styles.logo}
           resizeMode="contain"
         />
       </View>
 
       {/* Área de login */}
       <Text style={styles.loginText}>Login</Text>
 
       <View style={styles.inputContainer}>
         <Ionicons
           name="person-outline"
           size={20}
           color="#4d4d4d"
           style={styles.icon}
         />
         <TextInput
           placeholderTextColor="#C0C0C0"
           placeholder="Usuário:"
           style={styles.input}
         />
       </View>
 
       <View style={styles.inputContainer}>
         <Ionicons
           name="lock-closed-outline"
           size={20}
           color="#4d4d4d"
           style={styles.icon}
         />
         <TextInput
           placeholderTextColor="#C0C0C0"
           placeholder="Senha:"
           secureTextEntry={!passwordVisible}
           style={styles.input}
         />
         <TouchableOpacity
           onPress={() => setPasswordVisible(prev => !prev)}
           style={styles.iconRight}
         >
           <Ionicons
             name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
             size={20}
             color="#4d4d4d"
           />
         </TouchableOpacity>
       </View>
 
       <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}>LOGIN</Text>
       </TouchableOpacity>
 
       <Text style={styles.registerText}>
          Ainda não possui uma conta?{' '}
        <Text
        style={styles.registerLink}
        onPress={() => navigation.navigate('Register')}
        >
        Registre-se
      </Text>
    </Text>

     </View>
  );
}

// (copie seu StyleSheet aqui)
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.4, // 30% da altura da tela
    backgroundColor: '#0e3b26',   // cor verde
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  loginText: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 14,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: '90%',
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#0e3b26',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 14,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    fontSize: 14,
  },
  registerLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

