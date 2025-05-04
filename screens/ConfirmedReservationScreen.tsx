import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'ConfirmedReservation'>;

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function ConfirmedReservationScreen({ navigation }: Props) {

    return (
        <LinearGradient
          colors={['#0e3b26', '#042209']}
          style={styles.gradient}
        >
          <SafeAreaView style={styles.safe}>
            {/* Logo no topo */}
            <Image
              source={require('../assets/images/logo-reserveja.png')}
              style={styles.logo}
              resizeMode="contain"
            />
    
            {/* Selo de confirmado */}
            <Image
              source={require('../assets/images/confirmed-logo.png')}
              style={styles.stamp}
              resizeMode="contain"
            />
    
            {/* Texto de confirmação */}
            <Text style={styles.confirmationText}>
              Sua reserva foi confirmada com sucesso!
            </Text>
    
            {/* Botão de continuar */}
            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => navigation.navigate('ChooseArena')} // ajuste para sua rota
            >
              <Text style={styles.continueText}>Continuar</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </LinearGradient>
      );
    }
    
    const BUTTON_WIDTH = SCREEN_WIDTH * 0.8;
    
    const styles = StyleSheet.create({
      gradient: {
        flex: 1,
      },
      safe: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 24,
      },
      logo: {
        width: 160,
        height: 150,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginVertical: 16,
      },
      headerTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 32,
      },
      stamp: {
        width: BUTTON_WIDTH * 0.7,
        height: BUTTON_WIDTH * 0.7,
        marginBottom: 24,
      },
      confirmationText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 48,
        paddingHorizontal: 20,
      },
      continueButton: {
        width: BUTTON_WIDTH,
        backgroundColor: '#e5e5e5',
        borderRadius: 16,
        paddingVertical: 14,
        alignItems: 'center',
      },
      continueText: {
        color: '#0e3b26',
        fontSize: 18,
        fontWeight: '700',
      },
    });