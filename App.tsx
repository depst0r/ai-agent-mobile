import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { styles } from './style';


export default function App() {

  const [message, setMessage] = useState('')
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(false)

  const send = async () => {
    setLoading(true)
    setReply('')
    try {
      const res = await fetch('https://text.pollinations.ai/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'openai',
        messages: [
          { role: 'system', content: 'Ты дизайнер...' },
          { role: 'user', content: message }
        ]
      })
    })

    const data = await res.json()
    setReply(data.choices[0].message.content)

    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
      setMessage('')
    }

  }

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
      disabled={loading}
      onPress={send}
      >
        <Text style={styles.buttonText}>Отправить</Text>
      </Pressable>
    </View>
  );
}