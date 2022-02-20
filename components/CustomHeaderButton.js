import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import Colors from '../constant/Colors'

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Platform.OS === 'android' ? 'white' : Colors.primaryColor} />
    )
}

export default CustomHeaderButton
