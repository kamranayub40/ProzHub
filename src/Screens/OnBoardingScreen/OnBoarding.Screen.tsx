import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper';
import OnboardingCard from '../../Components/OnBoardingCard/OnBoardingCard.Component';
import styles from './OnBoarding.Screen.Style';

const OnBoarding_Screen = props => {
  const [index, setIndex] = React.useState(0);
  console.log(index);
  const swiper = useRef(null);
  return (
    <Swiper
      style={styles.wrapper}
      ref={swiper}
      index={index}
      activeDotColor={'#77E6B6'}
      showsButtons={false}
      onIndexChanged={index => setIndex(index)}
      dotColor="#F8F9D3"
      paginationStyle={styles.pagistio}
      activeDot={
        <View
          style={{
            width: 30,
            backgroundColor: '#FFFFFF',
            height: 5,
            marginLeft: 8,
            borderRadius: 30,
          }}
        />
      }
      dot={
        <View
          style={{
            width: 30,
            backgroundColor: '#B8BDBD',
            height: 5,
            marginLeft: 8,
            borderRadius: 30,
          }}
        />
      }>
      <OnboardingCard
        SkipPress={() => props.navigation.replace('Login_Screen')}
        backgroundImage={require('../../Theme/Assests/ONB1.jpg')}
        CardTitle={'House Cleaning'}
        onPress={() =>
          index == 5
            ? props.navigation.replace('Login_Screen')
            : swiper.current.scrollBy(1)
        }
        Description={'Make your house Neat and clean'}
      />
      <OnboardingCard
        SkipPress={() => props.navigation.replace('Login_Screen')}
        backgroundImage={require('../../Theme/Assests/ONB2.jpg')}
        CardTitle={'Gardening'}
        onPress={() =>
          index == 5
            ? props.navigation.replace('Login_Screen')
            : swiper.current.scrollBy(1)
        }
        Description={'Clean your Garden '}
      />
      <OnboardingCard
        SkipPress={() => props.navigation.replace('Login_Screen')}
        backgroundImage={require('../../Theme/Assests/ONB3.jpg')}
        onPress={() =>
          index == 2
            ? props.navigation.replace('Login_Screen')
            : swiper.current.scrollBy(1)
        }
        CardTitle={'Painting & Decorating   '}
        Description={'With Golricius View of Painting'}
      />
    </Swiper>
  );

  // };
};
export default OnBoarding_Screen;
