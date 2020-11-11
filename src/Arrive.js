import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Alert,
} from "react-native";

export default class Arrive extends React.Component {
    static navigationOptions = {
        title: 'Arrive',
    };

    confirmArrival = () => {
        Alert.alert("Your arrival confirmation has been sent to the School !");
    };

    confirmPickup = () => {
        Alert.alert("You successfully confirmed pickup");
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Confirm Arriving at School</Text>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.confirmArrival}
                >
                    <Text style={styles.btnText}>Confirm Arriving</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.confirmPickup}
                >
                    <Text style={styles.btnText}>Confirm pickup</Text>
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
        fontSize: 30,
        color: "white",
        marginBottom: 30,
    },
    btn: {
        width: "80%",
        backgroundColor: "#0c8676",
        borderRadius: 19,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 110,
        marginBottom: 29,
        borderWidth: 1,
        borderColor: "#fff",
    },
    btnText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
    },
});
