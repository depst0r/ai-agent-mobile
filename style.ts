import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
  flexGrow: 1,
  backgroundColor: '#0f172a',
  alignItems: 'center',
  paddingTop: 60,
  paddingBottom: 40,
},
input: {
  borderWidth: 1,
  borderColor: '#475569',
  backgroundColor: '#1e293b',   
  color: '#f1f5f9',             
  padding: 10,
  width: '80%',
  marginBottom: 10,
  fontFamily: 'PressStart2P_400Regular',
  fontSize: 10,
},
button: {
  backgroundColor: '#1e293b',
  padding: 12,
  paddingHorizontal: 24,
  borderWidth: 2,
  borderColor: '#475569',
  fontSize: 9
},
buttonText: {
  color: '#f1f5f9',
  fontFamily: 'PressStart2P_400Regular',
  fontSize: 10,
},
  reply: {
  marginTop: 20,
  padding: 10,
  width: '80%',
  color: '#f1f5f9',
  fontSize: 10,
  fontFamily: 'PressStart2P_400Regular',
},
agentRow: {
  flexDirection: 'row',
  gap: 8,
  marginBottom: 16,
},
agentBtn: {
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderWidth: 1,
  borderColor: '#475569',
},
agentBtnActive: {
  backgroundColor: '#475569'
},
agentText: {
  fontSize: 9,
  color: '#f1f5f9',
  fontFamily: 'PressStart2P_400Regular',
},
agentTextActive: {
  color: '#fff',
  fontFamily: 'PressStart2P_400Regular',
},
})

export const markdownStyles = {
  body: {
    color: '#f1f5f9',
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 12,
  },
  code_inline: {
    backgroundColor: '#1e293b',
    color: '#4ade80',
    paddingHorizontal: 4,
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 10,
  },
  code_block: {
    backgroundColor: '#020617',
    color: '#4ade80',
    padding: 12,
    marginVertical: 8,
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 10,
  },
  fence: {
    backgroundColor: '#020617',
    color: '#4ade80',
    padding: 12,
    marginVertical: 8,
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 10,
  },
  heading1: { color: '#f1f5f9', fontFamily: 'PressStart2P_400Regular' },
  heading2: { color: '#f1f5f9', fontFamily: 'PressStart2P_400Regular' },
  heading3: { color: '#f1f5f9', fontFamily: 'PressStart2P_400Regular' },
  strong: { color: '#fff', fontFamily: 'PressStart2P_400Regular' },
  link: { color: '#38bdf8' },
  bullet_list: { color: '#f1f5f9' },
  ordered_list: { color: '#f1f5f9' },
} as const