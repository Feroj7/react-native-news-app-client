import React from 'react'
import { StyleSheet, View } from 'react-native'
import VerticalList from './lists/VerticalList'

const PoliticalNews = ({ data }) => {
    return <VerticalList title="Political News" data={data} />
}


const styles = StyleSheet.create({

})

export default PoliticalNews;