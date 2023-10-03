import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Home.Styles';
import {primary, tertiary, white} from '../../Stylings/Colors';
import Notification_Icon from '../../../assets/SvgIcons/Notification.Icon';
import Search_Icon from '../../../assets/SvgIcons/Search.Icon';
import Filter_Icon from '../../../assets/SvgIcons/Filter.Icon';
import Dots_Icon from '../../../assets/SvgIcons/Dots.Icon';
import Bluetooth_Icon from '../../../assets/SvgIcons/Bluetooth.Icon';
import Left_Arrow_Icon from '../../../assets/SvgIcons/Left.Arrow.Icon';
import Crown_Icon from '../../../assets/SvgIcons/Crown.Icon';
import Primary_Button from '../../Components/PrimaryButton/PrimaryButton.Components';
import Setting_Icon from '../../../assets/SvgIcons/Settings.Icon';
import LoaderModel from '../../Components/DialogBox/LoaderBox.Component';
import MessageBox from '../../Components/DialogBox/MessageBox.Component';
import QuestionnaireDialog from '../../Components/DialogBox/DialogBox.Component';

const Home_Screen = (props: any) => {
  const [tags, setTags] = React.useState([]);
  const [selectbtn, setSelectbtn] = React.useState('Paired Devices');
  const [UserName, setUserName] = React.useState('');
  const [userId, setUserId] = React.useState('');
  const [role, setRole] = React.useState('');

  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [whatopen, setwhatopen] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const data = [
    {
      name: 'Clean House',
      count: 3,
      img: require('../../Theme/Assests/ONB1.jpg'),
    },
    {
      name: 'Gardening',
      count: 2,
      img: require('../../Theme/Assests/ONB2.jpg'),
    },
    {
      name: 'Painting & Decorate',
      count: 3,
      img: require('../../Theme/Assests/ONB3.jpg'),
    },
    {
      name: 'Painting & Decorate',
      count: 3,
      img: require('../../Theme/Assests/ONB3.jpg'),
    },
  ];
  const data1 = [
    {
      name: 'Home & Garden',
      count: 3,
      img: require('../../Theme/Assests/ONB1.jpg'),
    },
    {
      name: 'Health',
      count: 2,
      img: require('../../Theme/Assests/h.jpg'),
    },
    {
      name: 'Wedding & Events',
      count: 3,
      img: require('../../Theme/Assests/S.jpg'),
    },
    {
      name: 'Painting & Decorate',
      count: 3,
      img: require('../../Theme/Assests/ONB3.jpg'),
    },
  ];
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  const questions = [
    {
      question: 'What type of cleaning service are you interested in?',
      options: [
        'Regular cleaning (weekly or bi-weekly)',
        'Deep cleaning (spring cleaning or move-in/move-out)',
        'One-time cleaning (special occasion or event)',
      ],
    },
    {
      question: 'How many bedrooms does your house have?',
      options: ['1 bedroom', '2 bedroom', '3 bedroom', '4 bedroom'],
    },
    {
      question: ' How many bathrooms does your house have?',
      options: [
        '1 bathroom',
        '2 bathroom',
        '3 bathroom',
        '4 bathrooms or more',
      ],
    },
    {
      question: 'Do you have pets in your home?',
      options: [' Yes, I have pets', ` No, I don't have pets`],
    },
    {
      question: 'How often would you like your windows to be cleaned?',
      options: [
        'Every visit',
        'Monthly',
        'Quarterly',
        'Annually',
        `I don't need window cleaning`,
      ],
    },
    // Add more questions as needed
  ];
  const handleSearchPress = () => {
    // Show the questionnaire dialog
    setShowQuestionnaire(true);
  };

  const handleQuestionnaireClose = () => {
    // Hide the questionnaire dialog
    setShowQuestionnaire(false);
  };
  return (
    <View style={styles.Main_Container}>
      <StatusBar backgroundColor={primary} barStyle={'light-content'} />
      <LoaderModel isVisible={loading} color={primary} />
      <QuestionnaireDialog
        visible={showQuestionnaire}
        questions={questions}
        onClose={handleQuestionnaireClose}
      />
      <MessageBox
        visible={dialogVisible}
        icon={whatopen == 'done' ? 'Success' : 'Error'}
        onPress={() => {
          setdialogVisible(false);
        }}
        Message={message}
        buttonTitle={whatopen == 'done' ? 'Continue' : 'Try Again'}
      />
      <ScrollView contentContainerStyle={{paddingBottom: 150}}>
        <View style={styles.Header_Container}>
          <View style={styles.Header_Containt_Container}>
            <View style={styles.profile_container}>
              <View>
                <Image source={require('../../Theme/Assests/Profile.png')} />
              </View>
              <View style={{marginLeft: 10}}>
                <View style={styles.profile_container}>
                  <Text style={styles.Hello_Text}>Kamran Ayoub</Text>
                  <Text style={styles.Title_Text}>{UserName}</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={{marginLeft: 20}}>
                <Notification_Icon />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.perfectTitle}>Find the perfect</Text>
            <Text style={[styles.perfectTitle, {marginTop: 0}]}>
              professional for you
            </Text>
          </View>
          <View style={styles.input_Container}>
            <View style={styles.input_Box_contaner}>
              <TextInput
                placeholder="Service looking for"
                placeholderTextColor={tertiary}
                style={styles.input}
              />
            </View>
            <TextInput
              placeholder="Zip code"
              placeholderTextColor={tertiary}
              style={[
                styles.input,
                {
                  width: Dimensions.get('screen').width / 4,
                  borderLeftWidth: 0.8,
                  borderLeftColor: '#D9D6D6',
                  paddingHorizontal: 10,
                  height: 50,
                },
              ]}
            />
            <TouchableOpacity
              style={styles.filter_container}
              onPress={handleSearchPress}>
              <Search_Icon />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <ImageBackground
                  source={item.img}
                  style={[styles.Count_container]}
                  imageStyle={{borderRadius: 5}}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'rgba(0,0,0,0.4)',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <Text style={[styles.Count_Name_Text]}>{item.name}</Text>
                  </View>
                </ImageBackground>
              );
            }}
          />
        </View>
        <Text style={styles.doscover}>Discover</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <FlatList
            data={data1}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <ImageBackground
                  source={item.img}
                  style={[styles.Count_container]}
                  imageStyle={{borderRadius: 5}}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'rgba(0,0,0,0.4)',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <Text style={[styles.Count_Name_Text]}>{item.name}</Text>
                  </View>
                </ImageBackground>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Home_Screen;
