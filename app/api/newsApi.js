import apiClient from './client';

const getAll = async () => {
    try {
        const response = await apiClient.get('/news')
        if (response.data.success) {
            return response.data.news;
        }
    }
    catch (error) {
        return [];
        console.log('Error getting all news', error.message);
    }
}

const getSingle = async (id) => {
    try {
        const response = await apiClient.get(`/news/single/${id}`);
        if (response.data.success) {
            return response.data.news;
        }
    } catch (error) {
        console.log('error while getting single news', error.message);
    }
};

const getByCategory = async (categroy, qty) => {
    const endpoint = qty ? `/news/${category}/${qty}` : `/news/${category}`

    try {
        const response = await apiClient.get(endpoint)
        if (response.data.success) {
            return response.data.news;
        }
    }
    catch (error) {
        return [];
        console.log('Error getting category wise news', error.message);
    }
}

const searchPost = async query => {
    if (!query) return {};
    try {
        const response = await apiClient.post(`/news/search/${query}`);
        return response.data;
    } catch (error) {
        console.log('Error while searching news', error);
    }
};

export default {
    getAll,
    getByCategory,
    getSingle,
    searchPost
}