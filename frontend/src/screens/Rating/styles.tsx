import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { COLORS } from '../../utils/colors';

const { width, height } = Dimensions.get('window');
const windowWidth = width, windowHeight = height;

const statusBarHeight = StatusBar.currentHeight;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary,

        paddingHorizontal: windowWidth * 0.05,
        paddingTop: statusBarHeight + 5,
    },

    movieTitle: {
        paddingTop: 10,
        fontFamily: 'RobotoBold',
        fontSize: 24,
        color: COLORS.primary,
    },

    ratingTitle: {
        fontFamily: 'RobotoBold',
        fontSize: 16,
        color: COLORS.white,
        paddingRight: 10,
    },

    ratingValue: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: COLORS.white,
    },

    ratingTotal: {
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    ratingValues: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    movieStars: {
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -3,
    },

    rateContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 5,
        elevation: 3,
        marginVertical: 10,
        padding: 10,
    },

    rateTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rateValue: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: COLORS.secondary,
        marginLeft: 5,
    },

    rateComment: {
        fontFamily: 'Roboto',
        fontSize: 18,
    },

    rateUser: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: COLORS.secondary,
        alignSelf: 'flex-end',
    },

    addButton: {
        position: 'absolute',
        left: windowWidth * 0.8,
        top: windowHeight * 0.95,
    },

    addView: {
        height: 50,
        width: 50,
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
    }

});