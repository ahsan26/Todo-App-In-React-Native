import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
export default class Note extends Component {
    render() {
        return (
            <View style={styles.note}>
                <Text style={styles.noteTxt}>{this.props.note}</Text>
                <Text style={styles.noteTxt}>{new Date().toLocaleDateString()}</Text>
                <TouchableOpacity style={styles.noteDelete} onPress={_ => this.props.d(this.props.index)}>
                    <Text style={styles.noteDeleteTxt}>D</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    note: {
        padding: 20,
        position: "relative",
        paddingRight: 100,
    },
    noteTxt: {
        borderLeftWidth: 10,
        borderLeftColor: "#E91E63",
        paddingLeft: 20,
    },
    noteDelete: {
        position: "absolute",
        right: 10,
        top: 10,
        bottom: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2980b9",

    },
    noteDeleteTxt: {
        color: "#fff",

    }
});