import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Register = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text>Register</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	}
})

export default Register;