import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';

import Header from '../../components/Header';
import { NavigationProp } from '../../components/RootParamList';
import { styles } from './styles';
import { COLORS } from '../../utils/colors';
import { Rated } from '../../utils/Interface/Rated';
import ModalRate from '../../components/ModalRate';

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
    const movieName = navigation.getState().routes.find((item) => item.name == 'Rating').params.movie;

    const comments: Rated[] = [
        {
            Rate: 3.5,
            User: 'Pedro Victor',
            Comment: 'Nice movie!',
        },
        {
            Rate: 1,
            User: 'Gabriel Morais',
            Comment: 'Woeful movie!',
        },
        {
            Rate: 4,
            User: 'Pedro Victor',
            Comment: 'Nice movie!',
        },
        {
            Rate: 1,
            User: 'Gabriel Morais',
            Comment: 'Woeful movie!',
        },
        {
            Rate: 4,
            User: 'Pedro Victor',
            Comment: 'Nice movie!',
        },
        {
            Rate: 1,
            User: 'Gabriel Morais',
            Comment: 'Woeful movie!',
        },
        {
            Rate: 4,
            User: 'Pedro Victor',
            Comment: 'Nice movie!',
        },
        {
            Rate: 1,
            User: 'Gabriel Morais',
            Comment: 'Woeful movie!',
        },
        {
            Rate: 4,
            User: 'Pedro Victor',
            Comment: 'Nice movie!',
        },
        {
            Rate: 1,
            User: 'Gabriel Morais',
            Comment: 'Woeful movie!',
        },
    ];

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
            <Text style={styles.movieTitle}>{movieName}</Text>
            <View style={styles.ratingTotal}>
                <Text style={styles.ratingTitle}>Rating</Text>
                <Text style={styles.ratingValue}>280 k</Text>
            </View>
            <View style={styles.ratingValues}>
                <View style={styles.movieStars}>
                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                    <MaterialIcons name='star-half' size={24} color={COLORS.star} />
                    <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                </View>
                <Text style={styles.ratingValue}>3.5 / 5</Text>
            </View>
            <FlatList data={comments} renderItem={renderItem} />
            <TouchableOpacity activeOpacity={0.9} style={styles.addButton} onPress={() => setModalVisible(true)}>
                <View style={styles.addView}>
                    <MaterialIcons name='add' size={24} color={COLORS.white} />
                </View>
            </TouchableOpacity>

            <ModalRate visible={modalVisible} setVisible={setModalVisible} />
        </View>
    )
}

export default Rating