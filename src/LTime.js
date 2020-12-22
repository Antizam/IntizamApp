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
            tableHead: ["W/D","Sun", "Mon", "Tue", "Wed", "Thu"],
            tableData: [
                ["W1", "1:30", "1:30", "1:30", "1:30","1:30" ],
                ["W2", "1:30", "1:30", "1:30", "1:30","1:30" ],
                ["W3", "1:30", "1:30", "1:30", "1:30","1:30" ],
                ["W4", "1:30", "1:30", "1:30", "1:30","1:30" ],
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
                <TouchableOpacity>
                    <Text style={styles.Red}>
                        The Time format in P.M.
                    </Text>
                </TouchableOpacity>
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
    Red: {
        fontWeight: "bold",
        color: "#F44336",
        fontSize: 13,
    },
    textRow: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 5,
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
