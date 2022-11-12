import { useNavigation } from '@react-navigation/native';
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

const Movie = (props) => {

    const navigation = useNavigation<NavigationProp>();
    const movieName = navigation.getState().routes.find((item) => item.name == 'Movie').params.movie;
    const { height } = Dimensions.get('window');
    const windowHeight = height;

    const { signed } = useContext(AuthContext);

    const verifyUserLogin = () => {
        if (signed)
            navigation.navigate('Rating', { movie: movieName });
        else
            navigation.navigate('Login', { movie: movieName, nextPage: 'Rating' });
    }

    const cast: Actor[] = [
        {
            Name: 'Chris Hemsworth'
        },
        {
            Name: 'Christian Bale'
        },
        {
            Name: 'Natalie Portman'
        },
        {
            Name: 'Tessa Thompson'
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Header {...props} />
            </View>
            <ScrollView style={{ flexDirection: 'column' }}>
                <View style={styles.trailerView}>
                    <YoutubePlayer
                        height={windowHeight * 0.3}
                        videoId={'Go8nTmfrQd8'}
                    />
                </View>

                <View style={styles.infoView}>
                    <Text style={styles.infoText}>2022 - 1 h 58 min</Text>
                    <Text style={styles.infoText}>14</Text>
                </View>
                <View style={styles.categoryGroup}>
                    <View style={styles.categoryView}>
                        <Text style={styles.categoryTitle}>Action</Text>
                    </View>
                    <View style={styles.categoryView}>
                        <Text style={styles.categoryTitle}>Adventure</Text>
                    </View>
                    <View style={styles.categoryView}>
                        <Text style={styles.categoryTitle}>Comedy</Text>
                    </View>
                </View>

                <View style={styles.sinopseView}>
                    <Text style={styles.sinopseTitle}>Sinopse</Text>
                    <Text style={styles.sinopseText}>
                        “Thor: Amor e Trovão”, da Marvel Studios, encontra o Deus do Trovão numa jornada diferente
                        de tudo o que já enfrentou – a procura pela paz interior. Mas a reforma de Thor é interrompida
                        por um assassino galáctico conhecido como Gorr, o Carniceiro dos Deuses, que procura a
                        extinção dos deuses. Para combater a ameaça, Thor pede a ajuda da Rei Valkiria, de Korg
                        e da ex-namorada Jane Foster, que – para surpresa de Thor – empunha inexplicavelmente
                        o seu martelo mágico, Mjolnir, e se intitula a Poderosa Thor. Juntos, eles embarcam
                        numa angustiante aventura cósmica para descobrir o mistério da vingança do Carniceiro
                        dos Deuses e detê-lo antes que seja tarde demais.
                    </Text>
                </View>

                <View style={styles.infoView}>
                    <View style={styles.whereWatchView}>
                        <Text style={styles.whereWatchText}>Available on</Text>
                        <Image
                            source={require('../../assets/images/disney.png')}
                            style={styles.whereWatchImage}
                            resizeMode='contain'
                        />
                    </View>

                    <TouchableOpacity style={styles.ratingView}
                        onPress={verifyUserLogin}>
                        <View style={styles.ratingButton}>
                            <Text style={styles.ratingTitle}>Rating</Text>
                            <MaterialIcons name="arrow-forward-ios" size={12} color={COLORS.primary} />
                        </View>
                        <Text style={styles.ratingValue}>3.5 / 5</Text>
                        <View style={styles.movieStars}>
                            <MaterialIcons name='star' size={15} color={COLORS.star} />
                            <MaterialIcons name='star' size={15} color={COLORS.star} />
                            <MaterialIcons name='star' size={15} color={COLORS.star} />
                            <MaterialIcons name='star-half' size={15} color={COLORS.star} />
                            <MaterialIcons name='star-outline' size={15} color={COLORS.star} />
                        </View>
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