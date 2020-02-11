import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NewRequest = () => {
	return (
		<View style={styles.container}>
			<Text>New Request!</Text>
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

export default NewRequest;