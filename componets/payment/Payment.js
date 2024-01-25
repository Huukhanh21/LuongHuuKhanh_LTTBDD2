import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const Payment = ({ route, navigation }) => {
  const { cartItems } = route.params;

  const Paymentt = async () => {
    try {
      await AsyncStorage.removeItem('cart');
      console.log('Cart has been cleared');
    } catch (error) {
      console.error('Error clearing cart:', error);
    }

    navigation.navigate('Succes');
  };

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2); 
  };

  const calculateTotalPriceWithAdditionalAmount = () => {
    const totalWithoutAdditionalAmount = parseFloat(calculateTotalPrice());
    const additionalAmount = 2;
    const totalWithAdditionalAmount = totalWithoutAdditionalAmount + additionalAmount;
    return totalWithAdditionalAmount.toFixed(2);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Thanh toán</Text>

        <View style={styles.infor}>
          <Text style={{ fontWeight: 'bold', marginTop: 0, padding: 5 }}>
            Thông tin khách hàng
          </Text>
          <Text style={{ marginTop: 0, padding: 5 }}>
          Lương Hữu Khánh (+84) 362603308
          </Text>
          <Text style={{ marginTop: 0, padding: 5 }}>
            Số 153, Đường Đường 339, Phường Phước Long B, Thành Phố Thủ Đức, TP. Hồ Chí Minh
          </Text>
        </View>

        <View style={styles.product}>
          {cartItems.map((item) => (
            <View key={item.id} style={styles.productItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.category}>{item.category}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.totalPrice}>${calculateTotalPrice()}</Text>
                <Text  style={styles.quantity}>x{item.quantity}</Text>
              </View>
            </View>
          </View>
          ))}
          <View style={styles.ship}>
            <Text style={{ fontWeight: 'bold', marginTop: 0, padding: 5 }}>Phương thức vận chuyển</Text>
            <Text style={{ fontWeight: '', marginTop: 0, padding: 5 }}>Nhanh</Text>
            <Text style={{ fontWeight: '', marginTop: 0, padding: 5 }}>Phí vận chuyển: 2$</Text>
            <Text style={{ fontWeight: '', marginTop: 0, padding: 3 }}>Vui lòng thanh toán khi nhận hàng</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Tổng thanh toán:</Text>
        <Text style={styles.totalPrice}>${calculateTotalPriceWithAdditionalAmount()}</Text>
      </View>
      <TouchableOpacity style={styles.paymentButton} onPress={Paymentt}>
        <Text style={styles.paymentButtonText}>Xác nhận đặt hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingTop: 30,
  },
  paymentButton: {
    backgroundColor: '#F15B31',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infor: {
    backgroundColor: 'white',
   
  },
  product: {
    backgroundColor: 'white',
  
    marginTop: 10,
  },
  productItem: {
    flexDirection: 'row',
    borderColor: 'gray',
    padding: 8,
    marginBottom: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'center',
    marginRight: 8,
  },
  productDetails: {
    flex: 1,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#F15B31',
  },
  quantity: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    borderRightWidth: 0.6,
    borderLeftWidth: 0.6,
    borderColor: '#EEEEEE',
    width: 50,
    height: 20,
    marginLeft:100,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    color: '#F15B31',
    fontWeight: 'bold',
  },
  ship:{
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
  },
});

export default Payment;