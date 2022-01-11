import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

function Header() {
    return (
        <View style={styles.container}>
            <Ionicons name="notifications" size={30} color="#efefef" />
            <Text style={styles.heading}>Meet & Chat</Text>
            <Ionicons name="send" size={30} color="#efefef" />

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20
    },
    heading: {
        color: "#efefef",
        fontSize: 20,
        fontWeight: "700"
    },

})