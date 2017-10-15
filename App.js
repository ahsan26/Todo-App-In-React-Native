import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
import Note from "./app/components/note";
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            txt: ""
        }
    }
    addNote() {
        if (this.state.txt) {
            let notesCopy = this.state.notes;
            notesCopy.push(this.state.txt);
            this.setState({ notes: notesCopy });
            this.setState({ txt: "" });
        }
    }
    doneNote(i) {
        let notesCopy = this.state.notes;
        notesCopy.splice(i, 1);
        this.setState({ notes: notesCopy });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTxt}>- Noter -</Text>
                </View>
                <ScrollView style={styles.scrollviewSty}>
                    {
                        this.state.notes.map((item, index) => (
                            <Note index={index} d={this.doneNote.bind(this)} key={index} note={item} />
                        ))
                    }
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
                        <Text style={styles.addButtonTxt}>+</Text>
                    </TouchableOpacity>
                    <TextInput underlineColorAndroid="transparent" placeholder="> Note" onChangeText={t => this.setState({ txt: t })} defaultValue={this.state.txt} placeholderTextColor="#fff" style={styles.inputStyle} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#E91E63",
        marginTop: 23,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    headerTxt: {
        color: "#fff",
        fontSize: 20,
    },
    scrollviewSty: {
        flex: 1,
        marginBottom: 10
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center"
    },
    addButton: {
        backgroundColor: "#E91E63",
        width: 90,
        height: 90,
        borderRadius: 50,
        elevation: 8,
        marginBottom: -45,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99
    },
    addButtonTxt: {
        color: "#fff",
        fontSize: 25,
    },
    inputStyle: {
        alignSelf: "stretch",
        backgroundColor: "#252525",
        paddingTop: 45,
        padding: 20,
        color: "#fff",
        borderBottomWidth: 0,
    }
});