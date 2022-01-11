import React from 'react'
import { Text, View } from 'react-native'

const Subtitle = ({ children, numberOfLines = 2, size = 15 }) => {
    return (
        <View>
            <Text numberOfLines={numberOfLines} style={{ fontSize: size }}>
                {children}
            </Text>
        </View>
    )
}


export default Subtitle;