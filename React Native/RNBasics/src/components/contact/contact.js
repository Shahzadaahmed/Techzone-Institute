import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Contact = () => {

    return (
        <View>
            <Text style={styles.screenName}> Contact Us Screen! </Text>

            <TouchableOpacity
                style={styles.btn}
                // onPress={() => { navigation.navigate("home-screen") }}
            >
                <Text style={styles.btnText}>
                    Go to home
                </Text>
            </TouchableOpacity>
        </View>
    );
}

// Handeling styles here...!
const styles = StyleSheet.create({
    cover: {
        backgroundColor: "yellow",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    screenName: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        textTransform: "capitalize"
    },

    handleText: {
        color: "red",
        fontFamily: "georgia",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center"
    },

    btn: {
        backgroundColor: "red",
        borderColor: "white",
        borderWidth: 1,
        width: "70%",
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default Contact;