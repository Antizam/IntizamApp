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
        title: 'At School',
    };

    confirmArrival = () => {
        Alert.alert("Your arrival confirmation has been sent to the school");
    };

    confirmPickup = () => {
        Alert.alert("You have successfully confirmed a pick up");
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>At School</Text>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.confirmArrival}
                >
                    <Text style={styles.btnText}>Confirm arriving</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.confirmPickup}
                >
                    <Text style={styles.btnText}>Confirm pick up</Text>
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
