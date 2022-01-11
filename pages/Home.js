import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Search from '../components/Search'
import Menu from '../components/Menu'
import Contacts from '../components/Contacts'

function Home() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%' }}>
                <Header />
                <Search />
                <Menu />
                <Contacts />
                {/* Header */}
                {/* Search */}
                {/* Menu */}
                {/* Contacts */}
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        padding: 15
    }
})