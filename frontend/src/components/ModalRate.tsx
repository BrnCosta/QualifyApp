import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Modal, StatusBar, StyleSheet, View, TouchableWithoutFeedback, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';

import { COLORS } from '../utils/colors';
import { BlurView } from 'expo-blur';

const ModalRate = ({ visible, setVisible }) => {

    const closeModal = () => {
        setVisible(false);
    }

    const [stars, setStar] = useState([true, true, true, false, false]);
    const [review, setReview] = useState('');

    const setStart = (valueStar: Number) => {
        let arr;
        if (valueStar == 1)
            arr = [true, false, false, false, false];
        else if (valueStar == 2)
            arr = [true, true, false, false, false];
        else if (valueStar == 3)
            arr = [true, true, true, false, false];
        else if (valueStar == 4)
            arr = [true, true, true, true, false];
        else
            arr = [true, true, true, true, true];

        setStar(arr);
    }

    const defineValue = (text) => {
        setReview(text);
    }

    return (
        <View style={styles.container}>
            <Modal
                visible={visible}
                transparent={true}
                animationType='slide'
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.headerModal}>
                        <View style={styles.movieStars}>
                            <TouchableWithoutFeedback onPress={() => setStart(1)}>
                                {stars[0] ?
                                    (<MaterialIcons name='star' size={30} color={COLORS.star} />)
                                    : (<MaterialIcons name='star-outline' size={30} color={COLORS.star} />)
                                }
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => setStart(2)}>
                                {stars[1] ?
                                    (<MaterialIcons name='star' size={30} color={COLORS.star} />)
                                    : (<MaterialIcons name='star-outline' size={30} color={COLORS.star} />)
                                }
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => setStart(3)}>
                                {stars[2] ?
                                    (<MaterialIcons name='star' size={30} color={COLORS.star} />)
                                    : (<MaterialIcons name='star-outline' size={30} color={COLORS.star} />)
                                }
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => setStart(4)}>
                                {stars[3] ?
                                    (<MaterialIcons name='star' size={30} color={COLORS.star} />)
                                    : (<MaterialIcons name='star-outline' size={30} color={COLORS.star} />)
                                }
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => setStart(5)}>
                                {stars[4] ?
                                    (<MaterialIcons name='star' size={30} color={COLORS.star} />)
                                    : (<MaterialIcons name='star-outline' size={30} color={COLORS.star} />)
                                }
                            </TouchableWithoutFeedback>
                        </View>
                        <TouchableWithoutFeedback onPress={closeModal}>
                            <MaterialIcons name='close' size={30} color={COLORS.secondary} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <TextInput
                            style={styles.rateInput}
                            placeholder='Type your review...'
                            placeholderTextColor='black'
                            multiline
                            onChangeText={text => defineValue(text)}
                            value={review}
                            maxLength={250}
                        />
                        <TouchableOpacity style={styles.rateButton}>
                            <Text style={styles.rateText}>Rate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalRate

const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: statusBarHeight + 5,
    },

    modalContainer: {
        height: Dimensions.get('window').height * 0.5,
        width: Dimensions.get('window').width * 0.95,
        alignSelf: 'center',
        marginTop: '20%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    movieStars: {
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -3,
    },

    headerModal: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    rateButton: {
        height: 50,
        width: 100,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        alignSelf: 'flex-end'
    },

    rateInput: {
        height: '70%',
        marginVertical: 10,
        textAlignVertical: 'top',
        fontSize: 20,
    },

    rateText: {
        color: COLORS.white,
        fontFamily: 'RobotoBoldItalic',
        fontSize: 16
    }
});