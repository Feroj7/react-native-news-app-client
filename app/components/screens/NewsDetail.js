import React, { useState, useEffect } from 'react'
import { ScrollView, Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import newsApi from '../../api/newsApi';
import HorizontalList from '../lists/HorizontalList';
import Close from '../shared/Close';
import { useNavigation } from '@react-navigation/native';
import ActivityIndicator from '../shared/ActivityIndicator';


const { width, height } = Dimensions.get('window');

const NewsDetail = ({ route }) => {

    const navigation = useNavigation();

    const [news, setNews] = useState({});
    const [relatedNews, setRelatedNews] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id: postId, category: postCategory } = route.params.item;
    console.log(route.params.item);

    const fetchPost = async id => {
        setLoading(true);
        const result = await newsApi.getSingle(id);
        setNews(result);
        setLoading(false)
    };

    const fetchRelatePosts = async (postCategory) => {
        const result = await newsApi.getByCategory(postCategory, 6);
        setRelatedNews(result);
    }

    useEffect(() => {
        fetchPost(postId);
        fetchRelatePosts(postCategory);
    }, []);

    const { title, content, thumbnail } = news;

    return (
        <>
            <ActivityIndicator visible={loading} />
            <ScrollView style={styles.container}>
                <Image style={styles.image} source={{ uri: thumbnail }} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.content}>{content}</Text>
                </View>
                <View style={styles.relatedPostContainer}>
                    <HorizontalList title='Related Posts' />
                </View>
            </ScrollView>
            <Close onPress={() => navigation.popToTop()} />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: width,
        height: height / 3
    },
    contentContainer: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    content: {
        fontSize: 16,
        color: '#4e4d4d'
    },
    relatedPostContainer: {
        padding: 10,
    },
})

export default NewsDetail;
