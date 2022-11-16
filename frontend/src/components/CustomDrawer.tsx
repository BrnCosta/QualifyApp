import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { COLORS } from '../utils/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from './RootParamList';
import AuthContext from './AuthContext';
import { User } from '../utils/Interface/User';

const CustomDrawer = (props) => {

  const navigation = useNavigation<NavigationProp>();
  const { user, signed, logOut } = useContext(AuthContext);

  const accountLogout = () => {
    logOut();
    navigation.navigate('Home');
  }

  const [loggedUser, setLoggedUser] = useState<User>(user as User);

  useEffect(() => {
    setLoggedUser(user as User);
  }, [user])

  return (
    <View style={{ flex: 1 }}>
      {signed ? (
        <View style={{ flex: 1 }}>
          <DrawerContentScrollView
            {...props}
            contentContainerStyle={{ backgroundColor: COLORS.secondary }}
          >
            <View style={styles.profileContainer}>
              <Image source={require('../assets/images/profile_picture.png')} style={styles.profileImage} />
              <View>
                <Text style={styles.profileText}>{loggedUser?.nomecompleto}</Text>
                <Text style={styles.profileEmail}>{loggedUser?.email}</Text>
              </View>
            </View>
            <View style={styles.itemlistContainer}>
              <DrawerItemList {...props} />
            </View>
          </DrawerContentScrollView>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={accountLogout}>
              <View style={styles.logoutBtn}>
                <MaterialIcons name='logout' size={20} color={COLORS.secondary} />
                <Text style={styles.logoutText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <DrawerContentScrollView
            {...props}
            contentContainerStyle={{ backgroundColor: COLORS.secondary }}
          >
            <View style={styles.profileOffline}>
              <MaterialIcons name='account-circle' size={100} color={COLORS.white} />
            </View>
            <View style={styles.itemlistContainer}>
              <DrawerItemList {...props} />
            </View>
          </DrawerContentScrollView>
          <View style={styles.bottomContainerOffline}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.loginBtn}>
                <MaterialIcons name='login' size={20} color={COLORS.white} />
                <Text style={styles.loginText}>Sign Up or Log In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}

export default CustomDrawer;

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
  },

  profileOffline: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 40
  },

  profileText: {
    fontFamily: 'RobotoBold',
    color: COLORS.white,
    fontSize: 24,
  },

  profileEmail: {
    fontFamily: 'Roboto',
    color: COLORS.white,
    fontSize: 10,
  },

  itemlistContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 10,
  },

  bottomContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.secondary,
  },

  bottomContainerOffline: {
    padding: 20,
  },

  logoutBtn: {
    flexDirection: 'row',
    alignContent: 'center',
  },

  logoutText: {
    fontFamily: 'RobotoBold',
    color: COLORS.secondary,
    paddingLeft: 5,
  },

  loginBtn: {
    width: '100%',
    height: 50,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },

  loginText: {
    fontFamily: 'RobotoBold',
    color: COLORS.white,
    paddingLeft: 5,
  }
});