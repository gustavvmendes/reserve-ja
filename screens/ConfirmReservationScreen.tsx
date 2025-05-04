import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'ConfirmReservation'>;

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function ConfirmReservationScreen({ navigation }: Props) {

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

      {/* Screen title */}
      <Text style={styles.screenTitle}>Confirmar reserva</Text>

      {/* Court title */}
      <Text style={styles.courtTitle}>Quadra 3</Text>

      {/* Date card */}
      <View style={styles.card}>
        <Text style={styles.cardHeader}>DATA</Text>
        <Text style={styles.cardContent}>29 de agosto  /  19:00Hrs</Text>
      </View>

      {/* Arena info card */}
      <View style={styles.card}>
        <View style={styles.arenaRow}>
          <Image
            source={require('../assets/images/Arena-3.png')}
            style={styles.arenaImage}
            resizeMode="cover"
          />
          <View style={styles.arenaText}>
            <Text style={styles.arenaTitle}>Quadra 3</Text>
            <Text style={styles.arenaSubtitle}>
              Vôlei, Futevôlei e Beach Tennis
            </Text>
            <Text style={styles.arenaSubtitle}>
              Avenida das torres, Dois Vizinhos - PR
            </Text>
          </View>
        </View>
      </View>

      {/* Payment methods card */}
      <View style={styles.card}>
        <View style={styles.paymentRow}>
          {/* PIX section */}
          <View style={styles.paymentColumn}>
            <Text style={styles.paymentHeader}>PIX</Text>
            <Image
              source={require('../assets/images/qrcode-pix.png')}
              style={styles.qr}
              resizeMode="contain"
            />
          </View>

          {/* Cartão section */}
          <View style={styles.paymentColumn}>
            <Text style={styles.paymentHeader}>CARTÃO</Text>
            <TouchableOpacity style={[styles.payButton, styles.debit]}>
              <Text style={styles.payButtonText}>DÉBITO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.payButton, styles.credit]}>
              <Text style={styles.payButtonText}>CRÉDITO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const CARD_WIDTH = SCREEN_WIDTH - 32;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
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
  logo: {
    width: 160,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 16,
  },
  screenTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 12,
    color: '#0e3b26',
  },
  courtTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0e3b26',
    marginBottom: 12,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#0e3b26',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardContent: {
    color: '#fff',
    fontSize: 16,
  },
  arenaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arenaImage: {
    width: 100,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  arenaText: {
    flex: 1,
  },
  arenaTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  arenaSubtitle: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentColumn: {
    flex: 1,
    alignItems: 'center',
  },
  paymentHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  qr: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  payButton: {
    width: '80%',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 6,
    backgroundColor: '#fff',
  },
  debit: {
    backgroundColor: '#fff',
  },
  credit: {
    backgroundColor: '#fff',
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0e3b26',
  },
});
