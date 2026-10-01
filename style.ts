import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
  flexGrow: 1,
  backgroundColor: '#0f172a',
  alignItems: 'center',
  paddingTop: 40,
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
},
button: {
  backgroundColor: '#1e293b',
  padding: 12,
  paddingHorizontal: 24,
  borderWidth: 2,
  borderColor: '#475569',
},
buttonText: {
  color: '#f1f5f9',
},
  reply: {
  marginTop: 20,
  padding: 10,
  width: '80%',
  color: '#f1f5f9',
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
  fontSize: 14,
  color: '#f1f5f9',
},
agentTextActive: {
  color: '#fff'
},
})