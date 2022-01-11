import React from 'react'
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import Subtitle from '../shared/Subtitle'
import Title from '../shared/Subtitle'

const BlockCard = ({ style, imageStyle, item, onPress }) => {

    const { thumbnail, title, desc } = item;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
                <Image source={{ uri: thumbnail }} style={[styles.image, imageStyle]} />
                <View style={styles.contentContainer}>
                    <Title>
                        {title}
                    </Title>
                    <Subtitle numberOfLines={2}>
                        {desc}
                    </Subtitle>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 200
    },
    contentContainer: {
        padding: 5
    }

})

export default BlockCard;

