import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationProp } from '../../components/RootParamList';
import { COLORS } from '../../utils/colors';
import { styles } from '../Login/styles';
import AuthContext from '../../components/AuthContext';

const Login = () => {

  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { signed, logIn } = useContext(AuthContext);

  const params = navigation.getState().routes.find((item) => item.name == 'Login').params;

  const validateLogin = async () => {
    let nextPage = params.nextPage;
    let movie = params.movie;
    setLoading(true);
    await logIn().then(() => {
      console.log('User successfully logged in!');
      setLoading(false);
      if (nextPage != null || nextPage == '')
        navigation.navigate(nextPage, { movie });
      else
        navigation.goBack();
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../assets/images/full_logo.png')} style={styles.logo} />
        <TextInput
          style={styles.inputText}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          placeholderTextColor={COLORS.white}
        />
        <TextInput
          style={styles.inputText}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          placeholderTextColor={COLORS.white}
        />
        <TouchableOpacity
          onPress={() => { }}
          style={{ alignSelf: 'flex-end' }}
        >
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={validateLogin}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.loginBtnText}>LOGIN</Text>
          )
          }
        </TouchableOpacity>
        <View style={styles.createContainer}>
          <Text style={styles.accountText}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateAccount')}
          >
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login;