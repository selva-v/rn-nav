import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
			<View style={styles.wrapper}>
				{/* <Image source={require('../../assets/apbs-logo.png')} style={styles.logo} /> */}
				<Text style={styles.logoText}>Signin here</Text>
					<View style={styles.textInputContainer}>
						<Ionicons name='ios-person' size={25} style={styles.textInputIcon} />
						<TextInput inlineImageLeft='ios-home' placeholder='Username' style={styles.textInput} />
					</View>
					<View style={styles.textInputContainer}>
						<Ionicons name='ios-key' size={25} style={styles.textInputIcon} />
						<TextInput placeholder='Password' secureTextEntry={true} style={styles.textInput} />
					</View>
					<TouchableOpacity onPress={() => navigation.navigate("Dashboard")} activeOpacity={0.8} style={styles.loginButton}>
						<Text style={styles.loginText}>Login</Text>
					</TouchableOpacity>
			</View>
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
	wrapper: {
		width: '80%',
		height: '50%',
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20,
	},
	logo: {
		marginBottom: 30,
	},
	logoText: {
		fontSize: 40,
		fontWeight: '800',
		color: '#000',
		marginBottom: 30
	},
	textInputContainer: {
		position: 'relative',
		width: '100%'
	},
	textInputIcon: {
		position: 'absolute',
		top: 10,
		left: 10,
		color: '#0967a1'
	},
	textInput: {
		fontSize: 20,
		width: '100%',
		height: 50,
		borderColor: '#0967a1',
		borderWidth: 1,
		borderRadius: 7,
		padding: 10,
		paddingLeft: 40,
		marginBottom: 30,
	},
	loginButton: {
		width: '100%',
		height: 50,
		borderRadius: 7,
		backgroundColor: '#0967a1',
		padding: 10,
		marginTop: 10
	},
	loginText: {
		fontSize: 20,
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

export default Login;

