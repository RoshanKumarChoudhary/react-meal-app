import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DefaultText = (props) => {
    return (
        <Text style={styles.textStyle}>{props.children}</Text>
    )
}

export default DefaultText

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'open-sans'
    }
})
