import { Text } from '@insync/generic';
import { Test } from '@insync/models';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

const testData: Test = {
  field: '1',
  anotherField: '2',
}

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{`${testData.field}, ${testData.anotherField}`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;