import React, { useContext, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Modal, StatusBar, StyleSheet, View, TouchableWithoutFeedback, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';

import { COLORS } from '../utils/colors';

import { Rated } from '../utils/Interface/Rated';
import AuthContext from './AuthContext';
import { User } from '../utils/Interface/User';

const ModalRate = ({ visible, setVisible, comments, setComments }) => {

    const closeModal = () => {
        setVisible(false);
    }

    const [stars, setStar] = useState([false, false, false, false, false]);
    const [review, setReview] = useState('');
    const [valueRate, setValueRate] = useState(0);

    const { user } = useContext(AuthContext);

    const setStart = (valueStar: number) => {
        let arr;
        if (valueStar == 1) {
            setValueRate(1);
            arr = [true, false, false, false, false];
        }
        else if (valueStar == 2) {
            setValueRate(2);
            arr = [true, true, false, false, false];
        }
        else if (valueStar == 3) {
            setValueRate(3);
            arr = [true, true, true, false, false];
        }
        else if (valueStar == 4) {
            setValueRate(4);
            arr = [true, true, true, true, false];
        }
        else {
            setValueRate(5);
            arr = [true, true, true, true, true];
        }

        setStar(arr);
    }

    const defineValue = (text) => {
        setReview(text);
    }

    const saveComment = () => {
        if (review == '') {
            return;
        }

        var comment: Rated = {
            Comment: review,
            Rate: valueRate,
            User: (user as User).nomecompleto
        };

        let arr = [...comments, comment];
        setComments(arr);
        setVisible(false);
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
                        <TouchableOpacity style={styles.rateButton} onPress={saveComment}>
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