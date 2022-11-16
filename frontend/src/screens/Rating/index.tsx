import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';

import Header from '../../components/Header';
import { NavigationProp } from '../../components/RootParamList';
import { styles } from './styles';
import { COLORS } from '../../utils/colors';
import { Rated } from '../../utils/Interface/Rated';
import ModalRate from '../../components/ModalRate';
import { IMovie } from '../../utils/Interface/IMovie';
import AuthContext from '../../components/AuthContext';

const RatedItem = ({ rated }) => (
    <View>
        <View>
            <Text>{rated}</Text>
            <Text></Text>
        </View>
        <Text></Text>
    </View>
);

const Rating = (props) => {

    const navigation = useNavigation<NavigationProp>();
    const movie: IMovie = navigation.getState().routes.find((item) => item.name == 'Rating').params.movie;

    const [comments, setComments] = useState<Rated[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

    const renderItem: ListRenderItem<Rated> = ({ item }) => (
        <View style={styles.rateContainer}>
            <View style={styles.rateTitle}>
                <MaterialIcons name='star' size={18} color={COLORS.star} />
                <Text style={styles.rateValue}>{item.Rate.toString()}</Text>
            </View>
            <Text style={styles.rateComment}>{item.Comment}</Text>
            <Text style={styles.rateUser}>{item.User}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header {...props} />
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <View style={styles.ratingTotal}>
                <Text style={styles.ratingTitle}>Rating</Text>
                <Text style={styles.ratingValue}>{movie.numvotes} votes</Text>
            </View>
            <View style={styles.ratingValues}>
                {
                    movie?.imdb_rating == 10 ? (
                        <View style={styles.movieStars}>
                            <MaterialIcons name='star' size={24} color={COLORS.star} />
                            <MaterialIcons name='star' size={24} color={COLORS.star} />
                            <MaterialIcons name='star' size={24} color={COLORS.star} />
                            <MaterialIcons name='star' size={24} color={COLORS.star} />
                            <MaterialIcons name='star' size={24} color={COLORS.star} />
                        </View>
                    ) :
                        movie?.imdb_rating >= 9 ? (
                            <View style={styles.movieStars}>
                                <MaterialIcons name='star' size={24} color={COLORS.star} />
                                <MaterialIcons name='star' size={24} color={COLORS.star} />
                                <MaterialIcons name='star' size={24} color={COLORS.star} />
                                <MaterialIcons name='star' size={24} color={COLORS.star} />
                                <MaterialIcons name='star-half' size={24} color={COLORS.star} />
                            </View>
                        ) :
                            movie?.imdb_rating >= 8 ? (
                                <View style={styles.movieStars}>
                                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                                    <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                </View>
                            ) :
                                movie?.imdb_rating >= 7 ? (
                                    <View style={styles.movieStars}>
                                        <MaterialIcons name='star' size={24} color={COLORS.star} />
                                        <MaterialIcons name='star' size={24} color={COLORS.star} />
                                        <MaterialIcons name='star' size={24} color={COLORS.star} />
                                        <MaterialIcons name='star-half' size={24} color={COLORS.star} />
                                        <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                    </View>
                                ) :
                                    movie?.imdb_rating >= 6 ? (
                                        <View style={styles.movieStars}>
                                            <MaterialIcons name='star' size={24} color={COLORS.star} />
                                            <MaterialIcons name='star' size={24} color={COLORS.star} />
                                            <MaterialIcons name='star' size={24} color={COLORS.star} />
                                            <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                            <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                        </View>
                                    ) :
                                        movie?.imdb_rating >= 5 ? (
                                            <View style={styles.movieStars}>
                                                <MaterialIcons name='star' size={24} color={COLORS.star} />
                                                <MaterialIcons name='star' size={24} color={COLORS.star} />
                                                <MaterialIcons name='star-half' size={24} color={COLORS.star} />
                                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                            </View>
                                        ) :
                                            movie?.imdb_rating >= 4 ? (
                                                <View style={styles.movieStars}>
                                                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                                                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                                                    <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                    <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                    <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                </View>
                                            ) :
                                                movie?.imdb_rating >= 3 ? (
                                                    <View style={styles.movieStars}>
                                                        <MaterialIcons name='star' size={24} color={COLORS.star} />
                                                        <MaterialIcons name='star-half' size={24} color={COLORS.star} />
                                                        <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                        <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                        <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                    </View>
                                                ) :
                                                    movie?.imdb_rating >= 2 ? (
                                                        <View style={styles.movieStars}>
                                                            <MaterialIcons name='star' size={24} color={COLORS.star} />
                                                            <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                            <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                            <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                            <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                        </View>
                                                    ) :
                                                        movie?.imdb_rating >= 1 ? (
                                                            <View style={styles.movieStars}>
                                                                <MaterialIcons name='star-half' size={24} color={COLORS.star} />
                                                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                            </View>
                                                        ) :
                                                            (<View style={styles.movieStars}>
                                                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                                            </View>)
                }
                <Text style={styles.ratingValue}>{movie.imdb_rating / 2} / 5</Text>
            </View>
            <FlatList data={comments} renderItem={renderItem} />
            <TouchableOpacity activeOpacity={0.9} style={styles.addButton} onPress={() => setModalVisible(true)}>
                <View style={styles.addView}>
                    <MaterialIcons name='add' size={24} color={COLORS.white} />
                </View>
            </TouchableOpacity>

            <ModalRate visible={modalVisible} setVisible={setModalVisible}
                comments={comments} setComments={setComments} />
        </View>
    )
}

export default Rating