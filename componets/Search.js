import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
       
        <TextInput style={styles.input} placeholder="  Bạn đang tìm gì ?" />
        <Icon name="search" size={20} color="black" style={styles.searchIcon} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 10,
    height:60,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,  
    paddingHorizontal: 10,
    backgroundColor: '#EEEEEE',
  },
  searchIcon: {
    marginRight: 10,
    backgroundColor: '#EEEEEE',
  },
  input: {
    flex: 1,
    height: 45,
    backgroundColor: '#EEEEEE',
    borderRadius: 5, 
  },
});
