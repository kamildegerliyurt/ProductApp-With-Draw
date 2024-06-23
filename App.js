import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RootNavigation from './src/navigations/RootNavigation';

export default function App() {
  return (
   <RootNavigation />
  );
}

const styles = StyleSheet.create({});