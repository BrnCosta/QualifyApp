import React, { useContext, useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS } from '../utils/colors';
import AuthContext from './AuthContext';
import ModalSearch from './ModalSearch';

const Header = (props) => {

    const { signed } = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.header}>
            <ModalSearch visible={modalVisible} setVisible={setModalVisible} />
            <Image source={require('../assets/images/logo.png')} style={{ height: 44, width: 49 }} />
            <View style={styles.headerIcons}>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                >
                    <MaterialIcons name="search" size={30} color={COLORS.white} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={props.navigation.openDrawer}
                >
                    {signed ? (
                        <Image source={require('../assets/images/profile_picture.png')} style={styles.profileImage} />
                    ) : (
                        <MaterialCommunityIcons name="account-circle-outline" size={30} color={COLORS.white} />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '25%'
    },

    profileImage: {
        height: 30,
        width: 30,
    },
});