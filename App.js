import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Prime from './src/Telas/Prime';
import Banner from './src/Telas/Banner';
import Texto from './src/Components/Texto';
import Contador from './src/Components/Contador';
import CardNews from './src/Components/CardNews';


export default function App() {
  return (
    <ScrollView>
      <Prime />
      <Banner />
      <Texto />
      <CardNews />
      <Contador />
      <StatusBar style="auto" />
    </ScrollView>
  );
}     