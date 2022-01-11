import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const buttons = [
    {
        id: 1,
        name: "videocam",
        title: "Create",
        customColor: "#A3B600",
    },
    {
        id: 2,
        name: "add-circle",
        title: "Join",
    },
    {
        id: 3,
        name: "calendar",
        title: "Schedule",
    },
    {
        id: 4,
        name: "laptop",
        title: "Share Screen",
    },
]

function Menu() {
    return (
        <View style={styles.container}>
            { buttons.map((item, index) =>
                <View key={index} style={styles.buttonContainer}>
                    <TouchableOpacity style={{...styles.button, backgroundColor: item.customColor ? item.customColor : "#00921E"}}>
                        <Ionicons name={item.name} size={23} color="#efefef" />
                    </TouchableOpacity>
                    <Text style={styles.menuText}>{item.title}</Text>
                </View>
            ) }
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        paddingBottom: 10,
        borderBottomColor: "#1F1F1F",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    buttonContainer: {
        alignItems: "center",
        flex: 1
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: "red",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    menuText: {
        color: "#858585",
        fontSize: 12,
        paddingTop: 10, 
        fontWeight: "600"
    }
})
