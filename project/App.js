import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');

  useEffect(() => {
    if (counter > 10) alert("10'dan fazla seçim yaptınız");
  }, [counter]);

  const login = () => {
    Alert.alert('BAŞARDıN', `NAME:${userName} PASSWORD: ${userPass}`);
  };

  return (
    <View>
      <Text style={{fontSize: 80}}>Count:{counter}</Text>
      <Button
        style={styles.button}
        title="Up!"
        onPress={() => setCounter(counter + 1)}
      />
      <View style={styles.button} />
      <Button
        style={styles.button} //button style prop almaz.
        title="Zeroing"
        onPress={() => {
          setCounter(0);
        }}></Button>
      <TextInput
        style={styles.input}
        placeholder="adınızı girin"
        onChangeText={(userText) => {
          setUserName(userText);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="şifrenizi girin"
        onChangeText={(userPass) => {
          setUserPass(userPass);
        }}
        secureTextEntry={true}
      />
      <Text style={styles.text}>isminiz:{userName} </Text>
      <TouchableOpacity onPress={login} style={styles.touch}>
        <Text
          style={{
            margin: 10,
            fontSize: 20,
            alignSelf: 'center',
            fontWeight: 'bold',
          }}>
          Giriş Yap
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  input: {
    backgroundColor: '#eceff1',
    margin: 10,
    fontSize: 20,
  },
  text: {
    backgroundColor: '#fbe9e7',
    margin: 10,
    padding: 10,
    fontSize: 25,
  },
  touch: {
    backgroundColor: '#e6ee9c',
    margin: 10,
  },
});
