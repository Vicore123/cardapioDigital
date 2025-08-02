import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 80 }]}>
        {[...Array(20)].map((_, i) => (
          <Text key={i} style={styles.text}>
            Open up App.js to start working on your app!
          </Text>
        ))}

        
      </ScrollView>

      <View style={styles.nav}>
        <Text>Rodapé fixo</Text>
        <Button title="Go to Table" onPress={() => navigation.navigate('Table')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    marginVertical: 10,
  },
  nav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    padding: 10,
    backgroundColor: '#b3ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
