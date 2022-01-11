import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import useNews from '../../hooks/useNews';
import Screen from '../shared/Screen';
import SearchBar from '../SearchBar';
import FeaturedNews from '../FeaturedNews';
import BreakingNews from '../BreakingNews';
import PoliticalNews from '../PoliticalNews';
import TechNews from '../TechNews';
import EntertainmentNews from '../EntertainmentNews';
import ActivityIndicator from '../shared/ActivityIndicator';

const Home = () => {
    const [isSearchFocused, setSearchFocused] = useState(false);
    const [
        featuredNews,
        politicalNews,
        entertainmentNews,
        techNews,
        breakingNews,
        loading
    ] = useNews();

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen isSearchFocused={isSearchFocused} >
                <SearchBar setSearchFocused={setSearchFocused} />
                <FeaturedNews item={featuredNews} />
                <BreakingNews data={breakingNews} />
                <PoliticalNews data={politicalNews} />
                <TechNews data={techNews} />
                <EntertainmentNews data={entertainmentNews} />
            </Screen>
        </>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default Home;