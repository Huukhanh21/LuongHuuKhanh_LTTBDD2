import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Category() {
  const navigation = useNavigation();

  const data = [
    { image: require('../assets/category/men.jpg'), text: 'Men Products', destination: 'MenProduct' },
    { image: require('../assets/category/women.jpg'), text: 'Women Products', destination: 'WomenProduct' },
    { image: require('../assets/category/electronic.png'), text: 'Electronics', destination: 'ElectronicsProduct' },
    { image: require('../assets/category/trangsuc.png'), text: 'Jewelry', destination: 'JeweleryProduct' },
  ];

  const handleImagePress = (destination) => {
    navigation.navigate(destination);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {data.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handleImagePress(item.destination)}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.imageText}>{item.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 80,
  },
  imageText: {
    marginTop: 5,
  },
});
