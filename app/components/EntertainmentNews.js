import React from 'react'
import { StyleSheet } from 'react-native'
import VerticalList from './lists/VerticalList'

const EntertainmentNews = ({ data }) => {
    return <VerticalList title="Entertainment News" data={data} />
}

export default EntertainmentNews;
