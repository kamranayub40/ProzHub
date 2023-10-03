import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import styles from './Splash.Styles';
import Main_Logo from '../../../assets/SvgIcons/Main.Logo';
import {white} from '../../Stylings/Colors';

const Splash_Screen = (props: any) => {
  const [userID, setUserID] = React.useState();
  const [hideSplash, setHideSplash] = React.useState(true);

  React.useEffect(async () => {
    setTimeout(async () => {
      props.navigation.replace('OnBoarding_Screen');
    }, 3000);

    //   props.navigation.navigate("HomeTab")
  }, [hideSplash]);
  return (
    <View style={styles.Main_Container}>
      <StatusBar backgroundColor={white} barStyle={'dark-content'} />
      <Image
        source={require('../../Theme/Assests/Logo.jpg')}
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain',
          borderRadius: 100,
        }}
      />
      <Text style={styles.Detail_Message_Text}>PROZHUB</Text>
    </View>
  );
};
export default Splash_Screen;
