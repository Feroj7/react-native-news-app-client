import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import SmallCard from '../cards/SmallCard'
import Title from '../shared/Title'
import { useNavigation } from '@react-navigation/native'

const HorizontalList = ({ title, data }) => {

    const navigation = useNavigation();

    return (
        <>
            <Title size={20}>
                {title}
            </Title>
            <View style={styles.listItem}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <SmallCard onPress={() => navigation.push('NewsDetail', { item })} item={item} />}
                ></FlatList>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    listItem: {
        marginVertical: 15,
    }
})

export default HorizontalList;