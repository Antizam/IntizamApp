import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

/**
 * Profile screen
 */
export default class Profile extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Intizam</Text>

                <TouchableOpacity
                    onPress={() => navigate('Arrive')}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>At School</Text>
                </TouchableOpacity>
            
                <TouchableOpacity
                    onPress={() => navigate('LTime')}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Leaving Schedule</Text>
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
    },
    logo: {
        marginTop: 100,
        fontWeight: "bold",
        fontSize: 65,
        color: "#0c8676",
    },

    btn: {
        width: "80%",
        backgroundColor: "#0c8676",
        borderRadius: 22,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 110,
        marginBottom: 20,
    },
    btnText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
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
    forgot: {
        textAlign: "center",
        color: "white",
        fontSize: 13,
    },
});
