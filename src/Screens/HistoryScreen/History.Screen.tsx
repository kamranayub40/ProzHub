import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './Hostory.Styles';
import Header from '../../Components/Header/Header';

const History_Screen = (props: any) => {
  const historyData = [
    {
      id: '1',
      title: 'Gardening for one part',
      img: require('../../Theme/Assests/ONB1.jpg'),
      date: '2023-09-15',
      status: 'Accepted',
    },
    {
      id: '2',
      title: 'Painting for rooms',
      date: '2023-09-14',
      status: 'Pending',
      img: require('../../Theme/Assests/ONB1.jpg'),
    },
    {
      id: '3',
      img: require('../../Theme/Assests/ONB1.jpg'),
      title: 'Decorating full wedding',
      date: '2023-09-13',
      status: 'Completed',
    },
    {
      id: '3',
      img: require('../../Theme/Assests/ONB1.jpg'),
      title: 'Event for Birthday',
      date: '2023-09-13',
      status: 'Completed',
    },
    // Add more history items with statuses as needed
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.historyItem}
      onPress={() => handleHistoryItemPress(item)}>
      <View style={styles.historyItemContent}>
        <Image source={item.img} style={styles.historyItemImage} />
        <View style={styles.historyItemDetails}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>Date: {item.date}</Text>
          <Text style={getStatusStyle(item.status)}>{item.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const getStatusStyle = status => {
    let statusStyle = {};

    switch (status) {
      case 'Pending':
        statusStyle = {color: 'orange'};
        break;
      case 'Accepted':
        statusStyle = {color: 'green'};
        break;
      case 'Completed':
        statusStyle = {color: 'blue'};
        break;
      default:
        statusStyle = {color: 'gray'};
        break;
    }

    return {...styles.status, ...statusStyle};
  };

  return (
    <View style={styles.Main_Container}>
      <Header
        Header_Title={'History'}
        onPress={() => props.navigation.navigate('Tab_Navigation')}
      />
      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default History_Screen;
