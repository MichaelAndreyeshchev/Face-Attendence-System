import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"

const userContacts = [
    {
        type: "starred",
        name: "Starred Users"
    },
    {
        type: "contact",
        name: "Bill Bowler",
        photo: require("../assets/bill.png")
    },
    {
        type: "contact",
        name: "Jill Janice",
        photo: require("../assets/jill.png")
    },
    {
        type: "contact",
        name: "Joe Jaguar",
        photo: require("../assets/joe.png")
    },
]

function Contacts() {
    return (
        <View style={styles.container}>
            {/* Contact Container */}
            {
                userContacts.map((contact, index) => 
                    <View key={index} style={styles.iconRow}>
                        {/* Image */}
                        {contact.type == "starred" ? ( 
                            <View style={styles.starIcon}>
                            <AntDesign name="star" size={30} color="#efefef" />
                            </View>
                            )
                            :
                            (
                                <Image source={contact.photo} style={styles.image} />
                            )
                        }
                        

                        {/* Text */}
                        <Text style={styles.iconText}>{contact.name}</Text>
                    </View>
            )}
            
            
        </View>
    )
}

export default Contacts

const styles = StyleSheet.create({
    container: {

    },
    iconRow: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center"
    },
    starIcon: {
        backgroundColor: "#333333",
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    iconText: {
        color: "white",
        paddingLeft: 15,
        fontSize: 18
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20
    }
})