import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Напиши задание...'
      style={styles.input}
      ></TextInput>
      <Pressable
      style={styles.button}
      >
        <Text style={styles.buttonText}>Отправить</Text>
      </Pressable>
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
  input: {
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 10,
  width: '80%',
  marginBottom: 10,
},
button: {
  backgroundColor: '#333',
  padding: 12,
  paddingHorizontal: 24,
},
buttonText: {
  color: '#fff',
},
});
