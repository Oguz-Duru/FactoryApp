import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import axios from 'axios';

export default Home = () => {
    const apiKey = 'yrAw1qEtWT3UwVpNPVNKYtVdZgjtBSaD';
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f1b6f4b7d073401aa07c3dcaaf935b22';

    const [articles, setArticles] = useState(['']);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                const fetchedArticles = response.data.articles;
                setArticles(fetchedArticles)
            } catch (error) {
                console.error('Hata:', error);
            }
        };
        fetchData();
    },);
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    {articles.map((article, index) => (
                        <View key={index} style={styles.box}>
                            <View style={styles.imageBox}>
                                {article.urlToImage && <Image style={styles.image} source={{ uri: article.urlToImage }} />}
                            </View>
                            <View style={styles.textBox}>
                                <Text style={styles.text}>{article.title}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    box: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        height: 150,
        width: '95%',
        marginTop: 20,
        margin: 'auto',
        borderRadius: 20,
        padding: 20
    },
    imageBox: {
        width: '30%',
    },
    textBox: {
        width: '60%',
    },
    text: {
        fontWeight: '500',
        fontSize: 18
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 20,

    }

});
