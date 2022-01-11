import React from 'react'
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import Subtitle from '../shared/Subtitle'
import Title from '../shared/Title'

const FlatCard = ({ item, onPress }) => {

    const { thumbnail, title, desc } = item;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: thumbnail }} style={styles.image} />
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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10
    },
    image: {
        flex: 0.35,
        height: '100%',
    },
    contentContainer: {
        flex: 0.65,
        paddingHorizontal: 5,
    }
})

export default FlatCard;

