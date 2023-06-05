import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import SlimButton from '../../components/SlimButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

function Menu({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <Text style={styles.title}>{route.params.id}</Text>
        <Text style={styles.text}>가격 : 10,900원</Text>
        <Text style={styles.text}>
          메뉴 설명 : 베이컨과 크림이 조화로운 크림파스타
        </Text>
        <Text style={styles.text}>주문 수량 : 1</Text>
        <Text style={styles.center}>------맛 선택------</Text>
        <BouncyCheckbox
          text="기본맛"
          fillColor="black"
          unfillColor="#fff"
          iconStyle={{borderColor: 'black'}}
          textStyle={{color: 'black'}}
          onPress={isChecked => console.log(isChecked)}
        />
        <BouncyCheckbox
          text="조금 매운맛"
          fillColor="black"
          unfillColor="#fff"
          iconStyle={{borderColor: 'black'}}
          textStyle={{color: 'black'}}
          onPress={isChecked => console.log(isChecked)}
        />
        <BouncyCheckbox
          text="매운맛"
          fillColor="black"
          unfillColor="#fff"
          iconStyle={{borderColor: 'black'}}
          textStyle={{color: 'black'}}
          onPress={isChecked => console.log(isChecked)}
        />
        <View style={styles.buttonMargin}>
          <SlimButton
            title="주문하기"
            onPress={() => navigation.navigate('SetPayment')}
          />
        </View>
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
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonMargin: {
    marginTop: 300,
  },
  center: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Menu;