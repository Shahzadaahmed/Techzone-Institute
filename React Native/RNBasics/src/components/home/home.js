import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import IconFromFontA from "react-native-vector-icons/FontAwesome"

const Home = ({ navigation }) => {
    // console.log(navigation);

    // const btnHandler = () => {
    //     navigation.navigate("about-screen", { screenData: "about" });
    // };

    return (
        // <View>
        //     <Text style={styles.screenName}> Home! </Text>

        //     <TouchableOpacity
        //         style={styles.btn}
        //         // onPress={btnHandler}
        //     >
        //         <Text style={styles.btnText}>
        //             G to about
        //         </Text>
        //     </TouchableOpacity>
        // </View>

        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('Working!')}>
                <IconFromFontA
                    name="google-plus"
                    size={25}
                    color="blue"
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <IconFromFontA
                    name="facebook"
                    size={25}
                    color="blue"
                />
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
        textAlign: "center"
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
    },

    container: {
        // backgroundColor: "yellow",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5
    }
});

export default Home;