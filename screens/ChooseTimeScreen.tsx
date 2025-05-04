import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'ChooseTime'>;

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const times = ['17:30', '18:30', '19:30', '20:30', '21:30', '22:30'];

export default function ChooseTimeScreen({ navigation }: Props) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require('../assets/images/logo-reserveja.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Quadra 3</Text>

        {/* Description */}
        <Text style={styles.description}>
          Quadra de areia ideal para esportes como futevôlei, vôlei de praia e beach tennis.  
          Piso nivelado, areia tratada, rede ajustável e boa iluminação para jogos noturnos.  
          Ambiente arejado e bem cuidado.
        </Text>

        {/* Rules */}
        <Text style={styles.subTitle}>Regras</Text>
        <Text style={styles.rule}>• De 2 a 8 jogadores.</Text>

        {/* Choose time */}
        <Text style={styles.subTitle}>Escolha um horário</Text>
        {times.map((time) => {
          const isSelected = time === selectedTime;
          return (
            <TouchableOpacity
              key={time}
              style={[styles.timeButton, isSelected && styles.timeButtonSelected]}
              onPress={() => setSelectedTime(isSelected ? null : time)}
              activeOpacity={0.7}
            >
              <Text style={styles.timeText}>{time}</Text>
              {isSelected && (
                <Ionicons
                  name="close-circle"
                  size={24}
                  color="#fff"
                  style={styles.closeIcon}
                />
              )}
            </TouchableOpacity>
          );
        })}

         {/* Rent button */}
         <TouchableOpacity
          style={styles.rentButton}
          onPress={() => {
            // navegar para confirmação, passando selectedTime
            // ----- quando fazer o back deve adaptar o arquivo de confirmReservation para receber o time
            //navigation.navigate('ConfirmReservation', { time: selectedTime });
            navigation.navigate('ConfirmReservation');
          }}
          disabled={!selectedTime}
        >
          <Text style={styles.rentText}>Alugar!</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const BUTTON_WIDTH = SCREEN_WIDTH - 32;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#042209',
  },
  header: {
    width: '100%',
    backgroundColor: '#0e3b26',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  back: {
    marginRight: 12,
  },
  logo: {
    flex: 1,
    height: 50,
  },
  container: {
    padding: 16,
    backgroundColor: '#042209',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
    marginVertical: 16,
  },
  description: {
    color: '#fff',
    fontStyle: 'italic',
    textAlign: 'justify',
    lineHeight: 20,
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  subTitle: {
    alignSelf: 'flex-start',
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  rule: {
    alignSelf: 'flex-start',
    color: '#fff',
    fontSize: 16,
    marginBottom: 16,
    paddingLeft: 8,
  },
  timeButton: {
    width: BUTTON_WIDTH,
    backgroundColor: '#C4C4C4',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  timeButtonSelected: {
    backgroundColor: '#0e3b26',
  },
  timeText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  closeIcon: {
    marginLeft: 8,
  },
  rentButton: {
    width: BUTTON_WIDTH,
    backgroundColor: '#0e3b26',
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 40,
  },
  rentText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});