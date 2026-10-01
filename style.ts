import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
  reply: {
  marginTop: 20,
  padding: 10,
  width: '80%',
  color: '#333',
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
  borderColor: '#ccc',
},
agentBtnActive: {
  backgroundColor: '#333'
},
agentText: {
  fontSize: 14,
},
agentTextActive: {
  color: '#ccc'
},
})