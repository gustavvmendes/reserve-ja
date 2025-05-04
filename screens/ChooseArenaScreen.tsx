import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'ChooseArena'>;

const arenas = [
  {
    id: 1,
    name: 'Quadra 1',
    sports: 'Vôlei, Futevôlei e Beach Tennis',
    address: 'Rua Teobaldo Schmitz, 376,\nBairro São Cristóvão, 85670-000',
    image: require('../assets/images/Arena-1.png'),
  },
  {
    id: 2,
    name: 'Quadra 2',
    sports: 'Vôlei, Futevôlei e Beach Tennis',
    address: 'Rua Teobaldo Schmitz, 376,\nBairro São Cristóvão, 85670-000',
    image: require('../assets/images/Arena-2.png'),
  },
  {
    id: 3,
    name: 'Quadra 3',
    sports: 'Vôlei, Futevôlei e Beach Tennis',
    address: 'Avenida das torres, Dois Vizinhos - PR',
    image: require('../assets/images/Arena-3.png'),
  },
];

export default function ChooseArenaScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header com botão Minhas Reservas */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>ReserveJá</Text>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => navigation.navigate('EditReservation')}
          >
            <Text style={styles.headerButtonText}>Minhas Reservas</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content}>
          <Image source={require('../assets/images/logo-reserveja.png')} style={styles.logo} />
          <Text style={styles.title}>Escolha sua quadra!</Text>

          {arenas.map((arena) => (
            <TouchableOpacity
              key={arena.id}
              style={styles.card}
              //ajustar arquivo de choosetime para conseguir receber o id quando for fazer o back
              //navigation.navigate('ChooseTime', {arenaId: arena.id})
              onPress={() => navigation.navigate('ChooseTime')}
            >
              <Image source={arena.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{arena.name}</Text>
                <Text style={styles.cardSubtitle}>{arena.sports}</Text>
                <Text style={styles.cardAddress}>{arena.address}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0a3f1c',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#0a3f1c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  headerButtonText: {
    color: '#0a3f1c',
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  logo: {
    width: 160,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#0a3f1c',
    borderRadius: 16,
    padding: 20,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 4,
  },
  cardAddress: {
    color: '#fff',
    fontSize: 13,
  },
});
