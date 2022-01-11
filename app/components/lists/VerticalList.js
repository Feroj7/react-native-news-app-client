import React from 'react'
import { StyleSheet, View } from 'react-native'
import Title from '../shared/Title'
import VerticalCard from '../cards/VerticalCard'
import { useNavigation } from '@react-navigation/native'

const VerticalList = ({ title, data }) => {

    const navigation = useNavigation();

    return (
        <View>
            {title && <Title>{title}</Title>}
            <View style={styles.container}>
                {data.map(item => (<VerticalCard onPress={() => navigation.navigate('NewsDetail', { item })} item={item} key={item.id} />))}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    }
})

export default VerticalList;
