import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '../../components/RootParamList';
import { COLORS } from '../../utils/colors';
import { styles } from './styles';

const CreateAccount = () => {

  const navigation = useNavigation<NavigationProp>();
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../assets/images/full_logo.png')} style={styles.logo} />
        <TextInput 
          style={styles.inputText} 
          value="" 
          placeholder="First Name" 
          placeholderTextColor={COLORS.white}
        />
        <TextInput 
          style={styles.inputText} 
          value="" 
          placeholder="Last Name" 
          placeholderTextColor={COLORS.white}
        />
        <TextInput 
          style={styles.inputText} 
          value="" 
          placeholder="Email" 
          placeholderTextColor={COLORS.white}
        />
        <TextInput 
          style={styles.inputText} 
          value="" 
          placeholder="Password" 
          placeholderTextColor={COLORS.white}
        />
        <TextInput 
          style={styles.inputText} 
          value="" 
          placeholder="Confirm Password" 
          placeholderTextColor={COLORS.white}
        />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {}}
        >
          <Text style={styles.loginBtnText}>SIGNUP</Text>
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