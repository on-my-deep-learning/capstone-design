import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import SlimButton from '../../components/SlimButton';

function Menu({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <Text style={styles.title}>{route.params.id}</Text>
        <Text>가격 :</Text>
        <Text>설명 :</Text>
        <SlimButton
          title="주문하기"
          onPress={() => navigation.navigate('SetPayment')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonView: {
    width: '95%',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Menu;
