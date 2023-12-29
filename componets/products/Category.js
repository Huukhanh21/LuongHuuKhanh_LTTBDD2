import React from 'react';
import { StatusBar, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function Category() {
  const categories = [
    { image: require('../../assets/components/Home/Category/phone.png'), text: 'Điện thoại' },
    { image: require('../../assets/components/Home/Category/table.png'), text: 'Máy tính bảng' },
    { image: require('../../assets/components/Home/Category/laptop.png'), text: 'Laptop' },
    { image: require('../../assets/components/Home/Category/tainghe2.png'), text: 'Tai nghe' },
    { image: require('../../assets/components/Home/Category/watch.png'), text: 'Đồng hồ' },
    { image: require('../../assets/components/Home/Category/pcjpg.jpg'), text: 'PC' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.textcategory}>Danh mục</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.CategoryContainer}>
        {categories.map((category, index) => (
          <View style={styles.column} key={index}>
            <Image source={category.image} style={styles.CategoryImage} resizeMode="contain" />
            <Text style={styles.categoryText}>{category.text}</Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  CategoryContainer: {
    flexDirection: 'row',
  },
  column: {
    marginRight: 30, // Add spacing between columns if needed
  },
  CategoryImage: {
    width: 60,
    height: 80,
    marginBottom: 10, // Add spacing between rows if needed
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 12,
  },
  textcategory: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
