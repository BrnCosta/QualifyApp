import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { COLORS } from '../../utils/colors';

const {width, height} = Dimensions.get('window');
const windowWidth = width, windowHeight = height;

const statusBarHeight = StatusBar.currentHeight;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        paddingHorizontal: windowWidth * 0.05,
        paddingVertical: statusBarHeight + 5,

        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 180,
        height: 80,
        marginBottom: 30,
    },

    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputText: {
        backgroundColor: COLORS.secondary,
        width: windowWidth * 0.8,
        height: 50,
        padding: 10,
        marginTop: 15,
        
        fontFamily: 'Roboto',
        fontSize: 16,

        borderWidth: 1,
        borderColor: COLORS.white,
        borderRadius: 5,
    },

    forgotPassword: {
        color: COLORS.white,
        fontFamily: 'Roboto',
        fontSize: 14,
        paddingTop: 5,
    },

    loginBtn: {
        backgroundColor: COLORS.primary,
        width: windowWidth * 0.8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 5,
        marginTop: 40,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    loginBtnText: {
        fontFamily: 'RobotoBold',
        fontSize: 16,
        color: COLORS.white,
        textShadowColor: COLORS.secondary,
        textShadowOffset: {width: 1, height: 1},
    },

    createContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },

    accountText: {
        fontFamily: 'Roboto',
        color: COLORS.white,
        fontSize: 14,
    },

    signupText: {
        fontFamily: 'RobotoBold',
        color: COLORS.primary,
        fontSize: 14,
    },
});