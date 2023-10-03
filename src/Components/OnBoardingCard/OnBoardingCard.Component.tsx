import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './OnboardingCard.Styles';
import Left_Arrow_Icon from '../../../assets/SvgIcons/Left.Arrow.Icon';
const OnboardingCard = ({
  backgroundImage,
  SkipPress,
  CardTitle,
  Description,
  onPress,
}) => {
  return (
    <ImageBackground style={styles.slide1} source={backgroundImage}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.6)'}}>
        <View style={{position: 'absolute', bottom: 200, marginHorizontal: 20}}>
          <View>
            <Text style={styles.text}>{CardTitle}</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.dex}>{Description}</Text>
          </View>
        </View>

        <View style={styles.dontaccount}>
          <TouchableOpacity onPress={SkipPress}>
            <Text style={styles.createOne}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leftbutton} onPress={onPress}>
            <Left_Arrow_Icon />
            {/* <Image source={require('../../components/assets/arrow-icon.png')} /> */}
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default OnboardingCard;
