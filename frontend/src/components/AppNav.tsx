import React, { useContext } from 'react';
import CustomDrawer from '../components/CustomDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../utils/colors';

import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';
import AuthContext from './AuthContext';
import Movie from '../screens/Movie';
import Rating from '../screens/Rating';

const Drawer = createDrawerNavigator();

const AppNav = () => {

    const iconSize = 20;
    const { signed } = useContext(AuthContext);

    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                drawerPosition: 'right',
                headerShown: false,
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontFamily: 'RobotoBold',
                },
                drawerActiveTintColor: COLORS.white,
                drawerActiveBackgroundColor: COLORS.secondary,
                drawerInactiveTintColor: COLORS.secondary,
            }}
            initialRouteName='Home'
        >
            <Drawer.Screen name='Home' component={Home} options={{
                drawerIcon: ({ color }) => (
                    <MaterialIcons name='home-filled' size={iconSize} color={color} />
                ),
            }} />
            <Drawer.Screen name='Categories' component={Categories} options={{
                drawerIcon: ({ color }) => (
                    <MaterialIcons name='apps' size={iconSize} color={color} />
                ),
            }} />
            <Drawer.Screen name='My List' component={Home} options={{
                drawerIcon: ({ color }) => (
                    <MaterialIcons name='list' size={iconSize} color={color} />
                ),
                drawerItemStyle: {
                    display: signed ? 'flex' : 'none',
                }
            }} />
            <Drawer.Screen name='Account' component={Home} options={{
                drawerIcon: ({ color }) => (
                    <MaterialIcons name='account-box' size={iconSize} color={color} />
                ),
                drawerItemStyle: {
                    display: signed ? 'flex' : 'none',
                }
            }} />
            <Drawer.Screen
                name="Login"
                component={Login}
                options={{
                    drawerItemStyle: {
                        display: 'none',
                    }
                }}
            />
            <Drawer.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{
                    drawerItemStyle: {
                        display: 'none',
                    }
                }}
            />
            <Drawer.Screen
                name="Movie"
                component={Movie}
                options={{
                    drawerItemStyle: {
                        display: 'none',
                    }
                }}
            />
            <Drawer.Screen
                name="Rating"
                component={Rating}
                options={{
                    drawerItemStyle: {
                        display: 'none',
                    }
                }}
            />
        </Drawer.Navigator>
    )
}

export default AppNav