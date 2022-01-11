import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FlatCard from './FlatCard'
import ViewMore from './ViewMore'
import newsApi from '../../api/newsApi'
import { useNavigation } from '@react-navigation/native'

const Verticalcard = ({ item, onPress }) => {

    const navigation = useNavigation();
    const handleViewMore = async (category) => {
        const result = await newsApi.getByCategory(category);
        navigation.navigate('NewsList', result)
    }

    if (item.type === 'viewMore') {
        return <ViewMore onPress={() => handleViewMore(item.category)} />
    }

    return <FlatCard item={item} onPress={onPress} />
}


const styles = StyleSheet.create({})

export default Verticalcard;
