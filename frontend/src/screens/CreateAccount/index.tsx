import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import AuthContext from '../../components/AuthContext';
import { NavigationProp } from '../../components/RootParamList';
import { COLORS } from '../../utils/colors';
import { User } from '../../utils/Interface/User';
import { styles } from './styles';

const CreateAccount = () => {

  const navigation = useNavigation<NavigationProp>();
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const [error, setError] = useState('');

  const { createAccount } = useContext(AuthContext);

  const createUser = async () => {
    if (password != confirm) {
      setError("Passwords do NOT match");
      return;
    }

    if (firstName == '' || lastName == '' || email == '' || password == '') {
      setError('All fields are required');
      return;
    }

    var user: User = {
      id: 0,
      nomecompleto: firstName + " " + lastName,
      email,
      isadm: false,
    }

    setLoading(true);
    await createAccount(user, password)
      .then((response) => {
        console.log(response);
        setLoading(false);
        setFirstName('');
        setLastName('');
        setPassword('')
        setConfirm('');
        navigation.navigate('Login');
      })

  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../assets/images/full_logo.png')} style={styles.logo} />
        <TextInput
          style={styles.inputText}
          value={firstName}
          placeholder="First Name"
          placeholderTextColor={COLORS.white}
          onChangeText={text => setFirstName(text)}
        />
        <TextInput
          style={styles.inputText}
          value={lastName}
          placeholder="Last Name"
          placeholderTextColor={COLORS.white}
          onChangeText={text => setLastName(text)}
        />
        <TextInput
          style={styles.inputText}
          value={email}
          placeholder="Email"
          placeholderTextColor={COLORS.white}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.inputText}
          value={password}
          placeholder="Password"
          placeholderTextColor={COLORS.white}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.inputText}
          value={confirm}
          placeholder="Confirm Password"
          placeholderTextColor={COLORS.white}
          onChangeText={text => setConfirm(text)}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={() => { }}
          style={{ alignSelf: 'flex-end' }}
        >
          <Text style={styles.forgotPassword}>{error}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={createUser}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.loginBtnText}>SIGNUP</Text>
          )
          }
        </TouchableOpacity>
        <View style={styles.createContainer}>
          <Text style={styles.accountText}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.signupText}>Login now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CreateAccount;