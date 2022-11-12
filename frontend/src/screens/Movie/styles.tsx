import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { COLORS } from '../../utils/colors';

const { width, height } = Dimensions.get('window');
const windowWidth = width, windowHeight = height;

const statusBarHeight = StatusBar.currentHeight;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        paddingTop: statusBarHeight + 5,
    },

    headerView: {
        paddingHorizontal: windowWidth * 0.05,
    },

    movieStars: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    trailerView: {
        width: '100%',
        height: windowHeight * 0.3,
        marginVertical: 10,
    },

    infoView: {
        paddingHorizontal: windowWidth * 0.05,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
    },

    infoText: {
        fontFamily: 'RobotoBold',
        fontSize: 12,
        color: COLORS.white,
    },

    categoryGroup: {
        flexDirection: 'row',
        paddingHorizontal: windowWidth * 0.05,
        paddingBottom: 5,
    },

    categoryView: {
        marginRight: 10,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 5,
    },

    categoryTitle: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: COLORS.primary,
    },

    sinopseView: {
        paddingHorizontal: windowWidth * 0.05,
        paddingVertical: 5,
    },

    sinopseTitle: {
        fontFamily: 'RobotoBold',
        fontSize: 14,
        color: COLORS.primary,
    },

    sinopseText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: COLORS.white,
    },

    whereWatchView: {
        paddingTop: 10,
    },

    whereWatchText: {
        fontFamily: 'RobotoBold',
        fontSize: 14,
        color: COLORS.primary,
    },

    whereWatchImage: {
        marginVertical: 5,
        width: 50,
        height: 30
    },

    ratingView: {
        paddingTop: 10,
    },

    ratingTitle: {
        fontFamily: 'RobotoBold',
        fontSize: 14,
        color: COLORS.primary,
    },

    ratingValue: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: COLORS.white,
    },

    ratingButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    castView: {
        paddingHorizontal: windowWidth * 0.05,
        paddingVertical: 5,
    },

    castTitle: {
        fontFamily: 'RobotoBold',
        fontSize: 14,
        color: COLORS.primary,
    },

    castContainer: {
        flexDirection: 'row',
        paddingTop: 10,
    },

    castName: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: COLORS.white,
        paddingTop: 2,
    }

});