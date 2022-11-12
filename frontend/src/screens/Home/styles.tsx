import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { COLORS } from '../../utils/colors';

const { width, height } = Dimensions.get('window');
const windowWidth = width, windowHeight = height;

const statusBarHeight = StatusBar.currentHeight;

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: windowWidth * 0.05,
        paddingVertical: statusBarHeight + 5,
    },

    imageBackground: {
        flex: 1,
        height: windowHeight * 0.75,
        backgroundColor: COLORS.secondary,
    },

    mainMovie: {
        height: windowHeight / 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    mainMovieTitle: {
        fontFamily: 'RobotoBoldItalic',
        color: COLORS.white,
        fontSize: 24,
        maxWidth: windowWidth * 0.5,
        textAlign: 'center'
    },

    mainMovieStars: {
        flexDirection: 'row',
        width: windowWidth * 0.4,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 25,
    },

    mainMovieButtons: {
        flexDirection: 'row',
        width: windowWidth * 0.6,
        height: 50,
        justifyContent: 'space-between'
    },

    trailerButton: {
        flexDirection: 'row',
        width: windowWidth * 0.35,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 10,
    },

    trailerText: {
        fontFamily: 'RobotoBoldItalic',
        color: COLORS.secondary,
        fontSize: 14,
    },

    infoButton: {
        flexDirection: 'row',
        width: windowWidth * 0.15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    infoText: {
        fontFamily: 'RobotoBold',
        color: COLORS.white,
        fontSize: 14,
    },

    categoryCards: {
        paddingTop: windowHeight * 0.05
    },

    category: {
        flexDirection: 'row',
        paddingVertical: 10,
    },

    categoryBar: {
        backgroundColor: COLORS.primary,
        height: 24,
        width: 5,
        marginRight: 5,
    },

    categoryTitle: {
        fontFamily: 'RobotoBold',
        color: COLORS.white,
        fontSize: 14,
    },

    categoryImage: {
        paddingRight: 10,
    }
});