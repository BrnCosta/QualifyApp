import React, { useEffect, useState } from 'react'
import { TextInput, Text, Modal, View, StyleSheet, StatusBar, FlatList, ListRenderItem, Image, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { COLORS } from '../utils/colors';
import { Movies } from '../utils/Data/Movies';
import { Movie } from '../utils/Interface/IMovie';

const MovieItem = ({ title, image }) => {
    return (
        <TouchableOpacity style={styles.movieContainer}>
            <Image
                source={{ uri: image }}
                style={styles.movieImage}
            />
            <Text style={styles.movieTitle}>{title}</Text>
        </TouchableOpacity>
    )
};

const ModalSearch = ({ visible, setVisible }) => {

    const [textSearch, setTextSearch] = useState('');
    const [dataSearch, setDataSearch] = useState(Movies);

    const renderItem: ListRenderItem<Movie> = ({ item }) => <MovieItem title={item.Title} image={item.Image} />;

    useEffect(() => {
        setDataSearch(Movies);
    }, [Movies])

    const searchMovies = (text) => {
        setTextSearch(text);

        if (text == '') {
            setDataSearch(Movies);
            return;
        }

        var filter = Movies.filter((item) =>
            (item.Title).toLowerCase().indexOf(text.toLowerCase()) > -1);
        setDataSearch(filter);
    }

    const closeModal = () => {
        setTextSearch('');
        setVisible(false);
        setDataSearch(Movies);
    }

    return (

        <Modal
            visible={visible}
            transparent={true}
            animationType='slide'
            statusBarTranslucent
            onRequestClose={closeModal}
        >
            <BlurView intensity={100} tint='dark' style={styles.modalContainer}>
                <View style={styles.searchContainer}>
                    <MaterialIcons name="search" size={30} color={COLORS.white} />
                    <TextInput
                        placeholderTextColor={COLORS.white}
                        style={styles.searchText} value={textSearch}
                        placeholder='Search...'
                        onChangeText={(text) => searchMovies(text)}
                        autoFocus
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList data={dataSearch} renderItem={renderItem} style={{ paddingTop: 20 }} />
                </View>
            </BlurView>
        </Modal>
    )
}

export default ModalSearch;

const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        paddingTop: statusBarHeight + 5,
    },

    searchContainer: {
        paddingVertical: 5,
        paddingHorizontal: '5%',
        flexDirection: 'row',

        borderBottomWidth: 1,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        borderColor: COLORS.white
    },

    searchText: {
        color: COLORS.white,
        fontFamily: 'Roboto',
        fontSize: 20,
        flexGrow: 2,
        paddingLeft: 10,
    },

    movieContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#26201F',
        marginVertical: 1,
    },

    movieImage: {
        height: 75,
        width: 150,
    },

    movieTitle: {
        paddingLeft: 10,
        color: COLORS.white,
        fontFamily: 'Roboto',
        fontSize: 16,
        flexShrink: 1,
    }
});