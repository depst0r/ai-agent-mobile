import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { styles } from './style';


export default function App() {

  const [message, setMessage] = useState('')


  return (
    <View style={styles.container}>
      <TextInput
      value={message}
      onChangeText={setMessage}
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

