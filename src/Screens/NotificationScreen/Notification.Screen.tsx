import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import Right_Icon from '../../../assets/SvgIcons/Right.Icon';
import Setting_Icon from '../../../assets/SvgIcons/Settings.Icon';
import styles from './Notification.Styles';
import Header from '../../Components/Header/Header';

const Notification_Screen = (props: any) => {
  const Notifications = [
    {
      name: 'New tag addded in your name',
      time: '5:00',
    },
    {
      name: 'your tag has been added',
      time: '5:00',
    },
    {
      name: 'Your tag has been found ',
      time: '5:00',
    },
    {
      name: 'ip:95.64.454.34 has been found ',
      time: '5:00',
    },
    {
      name: 'New tag addded in your name',
      time: '5:00',
    },
    {
      name: 'your tag has been added',
      time: '5:00',
    },
    {
      name: 'Your tag has been found ',
      time: '5:00',
    },
    {
      name: 'ip:95.64.454.34 has been found ',
      time: '5:00',
    },
    {
      name: 'New tag addded in your name',
      time: '5:00',
    },
    {
      name: 'your tag has been added',
      time: '5:00',
    },
    {
      name: 'Your tag has been found ',
      time: '5:00',
    },
    {
      name: 'ip:95.64.454.34 has been found ',
      time: '5:00',
    },
  ];
  return (
    <View style={styles.Main_Container}>
      <Header
        Header_Title={'Notification'}
        onPress={() => props.navigation.navigate('Tab_Navigation')}
      />
      <ScrollView>
        <View style={{marginTop: 30}}>
          <FlatList
            data={Notifications}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.notification_container}>
                  <View style={styles.name_Container}>
                    <View style={styles.notification_category}></View>
                    <Text style={styles.title}>{item.name}</Text>
                  </View>
                  <Text style={styles.time}>{item.time}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Notification_Screen;
