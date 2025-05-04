import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'EditReservation'>;

type Reservation = {
  id: number;
  name: string;
  date: string;
  time: string;
  image: any;
  status: 'pending' | 'played';
};

const reservations: Reservation[] = [
  {
    id: 1,
    name: 'Quadra 1',
    date: '01 de julho',
    time: '16:00',
    image: require('../assets/images/Arena-3.png'),
    status: 'pending',
  },
  {
    id: 2,
    name: 'Quadra 2',
    date: '01 de junho',
    time: '16:00',
    image: require('../assets/images/Arena-2.png'),
    status: 'pending',
  },
  {
    id: 3,
    name: 'Quadra 3',
    date: '01 de abril',
    time: '16:00',
    image: require('../assets/images/Arena-3.png'),
    status: 'played',
  },
];

export default function ReservationScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>

    {/* Header */}
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="arrow-back" size={36} color="#0e3b26" />
        </TouchableOpacity>
      </View>

      <Image
        source={require('../assets/images/logo-reserveja.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Minhas reservas</Text>

      {reservations.map((res) => (
        <View key={res.id} style={styles.card}>
          <Image source={res.image} style={styles.image} />

          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>{res.name}</Text>
            <Text style={styles.dateText}>{res.date}</Text>
            <Text style={styles.timeText}>{res.time}</Text>
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              res.status === 'played'
                ? styles.playedButton
                : styles.cancelButton,
            ]}
            onPress={() => {
              // aqui você dispara a ação de cancelar ou marcar como jogado
            }}
          >
            <Text style={styles.buttonText}>
              {res.status === 'played' ? 'Jogado!' : 'Cancelar'}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 160,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 16,
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
  card: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 4,
  },
  timeText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 2,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    minWidth: 100,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#e74c3c',
  },
  playedButton: {
    backgroundColor: '#27ae60',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
