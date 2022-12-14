import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import axios from 'axios';
import Img1 from "../../assets/cartoon_3.jpg";

let dumyData = [
    {
        id: 1,
        userName: "ahmed",
    },

    {
        id: 2,
        userName: "mehran",
    },

    {
        id: 3,
        userName: "kashan",
    },

    {
        id: 4,
        userName: "shahzaib",
    },

    {
        id: 5,
        userName: "mehran",
    },

    {
        id: 6,
        userName: "uzair",
    },

    {
        id: 7,
        userName: "asif",
    },
];

const Layout = () => {

    const [apiData, setApiData] = useState([]);

    // const apiCall = async () => {
    //     try {
    //         let apiUrl = "https://jsonplaceholder.typicode.com/photos";
    //         let response = await axios.get(apiUrl);
    //         // console.log(response);
    //         if (response) setApiData(response.data);
    //     }

    //     catch (error) {
    //         console.log('Error found while integrating api: ', error);
    //     };
    // };

    useEffect(() => {
        apiCall();
    }, []);

    useEffect(() => {
        console.log("Data: ", apiData)
    }, [apiData]);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.box1}>
                    <View style={styles.innerBox1}>
                        <Text> 1 </Text>
                    </View>

                    <View style={styles.innerBox2}>
                        <Text> 2 </Text>
                    </View>

                    <View style={styles.innerBox3}>
                        <Text> 3 </Text>
                    </View>
                </View>

                <View style={styles.box2}>
                    <Image
                        source={Img1}
                        style={styles.imgTag}
                    />
                </View>

                <View style={styles.box3}>
                    <ScrollView>
                        {
                            apiData.length > 0 ?
                                apiData.map((item, index) => {
                                    return (
                                        <View style={styles.itemBox} key={index}>
                                            <Image
                                                resizeMode='stretch'
                                                source={{ uri: item.url }}
                                                style={{
                                                    height: 50,
                                                    width: 50
                                                }}
                                            />
                                            <Text style={styles.itemText}>
                                                {item.title}
                                            </Text>
                                        </View>
                                    );
                                })
                                : <ActivityIndicator color={'red'} size="large" />
                        }
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "yellow",
        // height: '100%'
        flex: 1
    },

    box1: {
        backgroundColor: "blue",
        flex: 1,
        display: "flex",
        flexDirection: "row",
        padding: 10
    },

    box2: {
        // backgroundColor: "orange",
        flex: 1
    },

    box3: {
        backgroundColor: "white",
        flex: 1
    },

    innerBox1: {
        backgroundColor: "gold",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    innerBox2: {
        backgroundColor: "silver",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    },

    innerBox3: {
        backgroundColor: "green",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    imgTag: {
        height: '100%',
        width: "100%"
    },

    itemBox: {
        backgroundColor: "lightgreen",
        margin: 10
    },

    itemText: {
        color: "blue",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    }
});

export default Layout;