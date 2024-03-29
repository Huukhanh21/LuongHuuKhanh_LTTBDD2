import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,
     KeyboardAvoidingView, ImageBackground } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';

function Login({ navigation }) {
  return (
    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container}
>
  <View>
  <ImageBackground style={styles.background}>
        <Text style={styles.title}>ĐĂNG NHẬP</Text>
        <View style={{marginTop:40}}>
          <View style={styles.iconinput}>
            <Icon name="user" size={30} color="black" />
            <TextInput style={styles.input} placeholder="Nhập tên đăng nhập hoặc email" />
          </View>
         
          <View style={styles.iconinput}>
            <Icon name="lock" size={30} color="black" />
            <TextInput style={styles.input} placeholder="Nhập mật khẩu" />
          </View>
          <Text style={{ alignSelf: 'flex-end' }}>Quên mật khẩu?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <Text style={{ alignSelf: 'flex-end' }}>Bạn chưa có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ textAlign: 'center', color: 'red' }}> Đăng kí</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
  </View>
</KeyboardAvoidingView>

  
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconinput:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor:'black',
    borderBottomWidth:0.3,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
  
    backgroundColor: 'white',
    
    paddingHorizontal: 10,
   
  },
  button: {
    backgroundColor: '#F15B31',
    padding: 10,
    marginTop: 30,
  },
  buttonText: {
    width: 300,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  background: {
    flex: 1,

    backgroundColor: 'white',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width:420
  },
});

export default Login;
