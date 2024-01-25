import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CommonActions } from '@react-navigation/native';
import Header from '../Header';
import Footer from '../Footer';

export default function Succes({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header navigation={navigation} />
      </View>
      <View style={styles.content}>
        <Text style={styles.orderText}>
              Đặt hàng thành công
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.editButton}>
          <Icon name="arrow-right" size={20} color="white" />
          <Text style={styles.editButtonText}>Quay lại trang chủ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    justifyContent: 'flex-end',
  },
  header: {
    marginTop: 20,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F15B31',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  editButtonText: {
    color: '#fff',
    marginLeft: 10,
  },
});
