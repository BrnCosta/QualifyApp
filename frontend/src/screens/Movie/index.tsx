import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Image, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';

import { NavigationProp } from '../../components/RootParamList';
import { styles } from './styles';
import { COLORS } from '../../utils/colors';
import { Actor } from '../../utils/Interface/Actor';
import Header from '../../components/Header';
import AuthContext from '../../components/AuthContext';
import { base_url } from '../../utils/Data/Constants';
import { IMovie } from '../../utils/Interface/IMovie';

const Movie = (props) => {

    const navigation = useNavigation<NavigationProp>();
    const { height } = Dimensions.get('window');
    const windowHeight = height;

    const { signed } = useContext(AuthContext);

    const [movieData, setMovieData] = useState<IMovie>({
        id: 0,
        title: '',
        image: '',
        sinopse: '',
        star1: '',
        star2: '',
        star3: '',
        star4: '',
        categories: '',
        releasedyear: '',
        certificate: '',
        runtime: 10,
        imdb_rating: 0,
        numvotes: 0,
        videoid: '',
    });

    const verifyUserLogin = () => {
        if (signed)
            navigation.navigate('Rating', { movie: movieData });
        else
            navigation.navigate('Login', { movie: movieData, nextPage: 'Rating' });
    }

    const cast: Actor[] = [
        {
            Name: movieData.star1,
        },
        {
            Name: movieData.star2,
        },
        {
            Name: movieData.star3,
        },
        {
            Name: movieData.star4,
        },
    ];

    const [isFocuse, setIsFocuse] = useState(0);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setIsFocuse(isFocuse => isFocuse + 1);
        });
        return unsubscribe;

    }, [navigation])

    useEffect(useCallback(() => {
        setMovieData(navigation.getState().routes.find((item) => item.name == 'Movie').params.movie);
    }, [isFocuse]));

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Header {...props} />
            </View>
            <ScrollView style={{ flexDirection: 'column' }}>
                <View style={styles.trailerView}>
                    <YoutubePlayer
                        height={windowHeight * 0.3}
                        videoId={movieData.videoid != null ? movieData.videoid : 'null'}
                    />
                </View>

                <View style={styles.infoView}>
                    <View>
                        <Text style={styles.infoText}>{movieData?.title}</Text>
                        <Text style={styles.infoText}>{movieData.releasedyear} - {movieData?.runtime}</Text>
                    </View>
                    <Text style={styles.infoText}>{movieData.certificate}</Text>
                </View>
                <View style={styles.categoryGroup}>
                    {movieData?.categories.split(',').map((item) => (
                        <View style={styles.categoryView}>
                            <Text style={styles.categoryTitle}>{item}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.sinopseView}>
                    <Text style={styles.sinopseTitle}>Sinopse</Text>
                    <Text style={styles.sinopseText}>
                        {movieData.sinopse}
                    </Text>
                </View>

                <View style={styles.infoView}>
                    <TouchableOpacity style={styles.ratingView}
                        onPress={verifyUserLogin}>
                        <View style={styles.ratingButton}>
                            <Text style={styles.ratingTitle}>Rating</Text>
                            <MaterialIcons name="arrow-forward-ios" size={12} color={COLORS.primary} />
                        </View>
                        <Text style={styles.ratingValue}>{(movieData?.imdb_rating / 2).toFixed(1)} / 5</Text>
                        {
                            movieData?.imdb_rating == 10 ? (
                                <View style={styles.movieStars}>
                                    <MaterialIcons name='star' size={15} color={COLORS.star} />
                                    <MaterialIcons name='star' size={15} color={COLORS.star} />
                                    <MaterialIcons name='star' size={15} color={COLORS.star} />
                                    <MaterialIcons name='star' size={15} color={COLORS.star} />
                                    <MaterialIcons name='star' size={15} color={COLORS.star} />
                                </View>
                            ) :
                                movieData?.imdb_rating >= 9 ? (
                                    <View style={styles.movieStars}>
                                        <MaterialIcons name='star' size={15} color={COLORS.star} />
                                        <MaterialIcons name='star' size={15} color={COLORS.star} />
                                        <MaterialIcons name='star' size={15} color={COLORS.star} />
                                        <MaterialIcons name='star' size={15} color={COLORS.star} />
                                        <MaterialIcons name='star-half' size={15} color={COLORS.star} />
                                    </View>
                                ) :
                                    movieData?.imdb_rating >= 8 ? (
                                        <View style={styles.movieStars}>
                                            <MaterialIcons name='star' size={15} color={COLORS.star} />
                                            <MaterialIcons name='star' size={15} color={COLORS.star} />
                                            <MaterialIcons name='star' size={15} color={COLORS.star} />
                                            <MaterialIcons name='star' size={15} color={COLORS.star} />
                                            <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                        </View>
                                    ) :
                                        movieData?.imdb_rating >= 7 ? (
                                            <View style={styles.movieStars}>
                                                <MaterialIcons name='star' size={15} color={COLORS.star} />
                                                <MaterialIcons name='star' size={15} color={COLORS.star} />
                                                <MaterialIcons name='star' size={15} color={COLORS.star} />
                                                <MaterialIcons name='star-half' size={15} color={COLORS.star} />
                                                <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                            </View>
                                        ) :
                                            movieData?.imdb_rating >= 6 ? (
                                                <View style={styles.movieStars}>
                                                    <MaterialIcons name='star' size={15} color={COLORS.star} />
                                                    <MaterialIcons name='star' size={15} color={COLORS.star} />
                                                    <MaterialIcons name='star' size={15} color={COLORS.star} />
                                                    <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                    <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                </View>
                                            ) :
                                                movieData?.imdb_rating >= 5 ? (
                                                    <View style={styles.movieStars}>
                                                        <MaterialIcons name='star' size={15} color={COLORS.star} />
                                                        <MaterialIcons name='star' size={15} color={COLORS.star} />
                                                        <MaterialIcons name='star-half' size={15} color={COLORS.star} />
                                                        <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                        <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                    </View>
                                                ) :
                                                    movieData?.imdb_rating >= 4 ? (
                                                        <View style={styles.movieStars}>
                                                            <MaterialIcons name='star' size={15} color={COLORS.star} />
                                                            <MaterialIcons name='star' size={15} color={COLORS.star} />
                                                            <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                            <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                            <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                        </View>
                                                    ) :
                                                        movieData?.imdb_rating >= 3 ? (
                                                            <View style={styles.movieStars}>
                                                                <MaterialIcons name='star' size={15} color={COLORS.star} />
                                                                <MaterialIcons name='star-half' size={15} color={COLORS.star} />
                                                                <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                            </View>
                                                        ) :
                                                            movieData?.imdb_rating >= 2 ? (
                                                                <View style={styles.movieStars}>
                                                                    <MaterialIcons name='star' size={15} color={COLORS.star} />
                                                                    <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                    <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                    <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                    <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                </View>
                                                            ) :
                                                                movieData?.imdb_rating >= 1 ? (
                                                                    <View style={styles.movieStars}>
                                                                        <MaterialIcons name='star-half' size={15} color={COLORS.star} />
                                                                        <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                        <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                        <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                        <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                    </View>
                                                                ) :
                                                                    (<View style={styles.movieStars}>
                                                                        <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                        <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                        <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                        <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                        <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                                                                    </View>)
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.castView}>
                    <Text style={styles.castTitle}>Stars</Text>
                    <View style={styles.castContainer}>
                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.castName}>{cast[0].Name}</Text>
                            <Text style={styles.castName}>{cast[1].Name}</Text>
                        </View>
                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.castName}>{cast[2].Name}</Text>
                            <Text style={styles.castName}>{cast[3].Name}</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default Movie