import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: any;
    Login: any;
    CreateAccount: any;
    Movie: any;
    Rating: any;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;