import { Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p'
import Markdown from '@ronradtke/react-native-markdown-display'
import { styles } from './style'
import { markdownStyles } from './style';
import { AGENTS } from './lib/agents'

export default function App() {

  const [message, setMessage] = useState('')
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(false)
  const [agent, setAgent] = useState('designer')
  const [fontsLoaded] = useFonts({ PressStart2P_400Regular })


  if (!fontsLoaded) {
    return  <View><Text>Загрузка...</Text></View>
  }

  const send = async () => {
    setLoading(true)
    setReply('')
    const selected = AGENTS.find(a => a.id === agent )
    try {
      const res = await fetch('https://text.pollinations.ai/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'openai',
        messages: [
          { role: 'system', content: selected ? selected.prompt : '' },
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.agentRow}>
    {AGENTS.map(a => (
      <Pressable
        key={a.id}
        onPress={() => setAgent(a.id)}
        style={[styles.agentBtn, agent === a.id && styles.agentBtnActive]}
        >
          <Text style={[styles.agentText, agent === a.id && styles.agentTextActive]}>{a.name}</Text>
        </Pressable>
    ))}
      </View>

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
        <Text style={styles.buttonText}>{loading ? 'Думает...' : 'Отправить'}</Text>
      </Pressable>
        {reply && (
          <View style={styles.reply}>
            <Markdown style={markdownStyles}>{reply}</Markdown>
        </View>
        )}
    </ScrollView>
  );
}