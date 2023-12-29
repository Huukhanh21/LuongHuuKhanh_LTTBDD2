import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from './Footer';
import Header from './Header';
import Newproduct from './products/Newproduct';
import Product from './products/Product';
import Banner from './products/Banner';
import Category from './products/Category';

export default function Home({ navigation }) {
  const navigateToProductDetail = (item) => {
   
    navigation.navigate('ProductDetail', { item });
  };
  return (
    <View style={styles.container}>
    {/* //  <View style={styles.header}>
    //     <Header navigation={navigation} />
    //   </View>  */}

      <ScrollView>

      {/* <View style={styles.banner}>
        <Banner/>
      </View> */}
      
      <View style={styles.banner}>
        <Category/>
      </View>

      <Text style={styles.textnewproduct}>SẢN PHẨM MỚI</Text>
      <View style={styles.newproduct}>
        <Newproduct/>
      </View>
        
        <View>
          <Text style={styles.textnewproduct}>TẤT CẢ SẢN PHẨM</Text>

          <Product navigateToProductDetail={navigateToProductDetail} />
        </View>
   
      </ScrollView>

      

      <View style={styles.footer}>
        <Footer navigation={navigation} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
   
  },

  footer: {
    justifyContent: 'flex-end',
  },
  banner:{
    marginTop:30,

  },
  header: {},
  goback:{},
  textnewproduct:{
   marginTop:20,
   fontSize:20,
   fontWeight: 'bold',
  },

  
  
});
