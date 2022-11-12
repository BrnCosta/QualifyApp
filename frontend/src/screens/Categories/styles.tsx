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
        paddingVertical: statusBarHeight + 5,
    },

    categoryImage: {
        paddingRight: 10,
    },

    categoryContainer: {
        paddingVertical: 10,
    },

    categoryName: {
        fontFamily: 'RobotoBold',
        fontSize: 22,
        color: COLORS.white,
        paddingVertical: 5,
    }
});