import React, { Component } from "react";
import { ColorPropType, StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import {
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Alert,
} from "react-native";

export default class LTime extends Component {
    static navigationOptions = {
        title: 'Leaving Time',
    };

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ["Sun", "Mon", "Tue", "Wed", "Thu"],
            tableData: [
                ["week 1", "12:30", "h:M", "h:M", "h:M", "h:M"],
                ["week 2", "12:30", "h:M", "h:M", "h:M", "h:M"],
                ["week 3", "12:30", "h:M", "h:M", "h:M", "h:M"],
                ["week 4", "12:30", "h:M", "h:M", "h:M", "h:M"],
                ["week 5", "12:30", "h:M", "h:M", "h:M", "h:M"],
            ],
        };
    }

    render() {
        const state = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Leaving Time</Text>
                <Table borderStyle={{ borderWidth: 2, borderColor: "#ffff" }}>
                    <Row
                        data={state.tableHead}
                        style={styles.head}
                        textStyle={styles.textRow}
                    />
                    <Rows data={state.tableData} textStyle={styles.textData} />
                </Table>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#003f5c",
        padding: 16,
        paddingTop: 200,
    },

    head: {
        height: 40,
        backgroundColor: "#00f98e",
    },

    textRow: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 6,
    },
    textData: {
        color: "white",
        fontSize: 20,
        margin: 6,
    },
    logo: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        color: "white",
        marginBottom: 50,
    },
});
