import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

/**
 * Login screen
 */
export default class Login extends React.Component {



    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Intizam</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Student ID . . ."
                        placeholderTextColor="white"
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="white"
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password? </Text>
                    <Text style={styles.Red}>
                        Please contact your school administration
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('Profile')}
                    style={styles.loginBtn}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#003f5c",
        alignItems: "center",
        justifyContent: "center",
    },
    Red: {
        fontWeight: "bold",
        color: "#F44336",
        fontSize: 13,
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#0c8676",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
    },
    inputText: {
        height: 50,
        color: "white",
    },
    forgot: {
        textAlign: "center",
        color: "white",
        fontSize: 13,
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#0c8676",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
    },
    loginText: {
        color: "white",
    },
});