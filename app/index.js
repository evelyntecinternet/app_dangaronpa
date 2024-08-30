import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Link } from 'expo-router';
export default function Index() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#F2F2F2'
        }}
      >

        <Image
          style={{ width: '100%', height: 400 }}
          source={require('../assets/images/moonokuma.png')} />

        <Link href="/products" style={styles.button} asChild>
          <TouchableOpacity >

            <Text style={styles.buttonText}>
              Executar
            </Text>

          </TouchableOpacity>
        </Link>
        <Link href="/about" style={styles.button} asChild>
          <TouchableOpacity >

            <Text style={styles.buttonText}>
              Icons
            </Text>

          </TouchableOpacity>
        </Link>
        <Link href="/flex" style={styles.button} asChild>
          <TouchableOpacity >

            <Text style={styles.buttonText}>
              Zero
            </Text>

          </TouchableOpacity>
        </Link>

      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({

  button: {
    // position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginTop: 23,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

{/* flex é importante*/ }