import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Home_Screen from '../HomeScreen/Home.Screen';
import Home_Dark_Icon from '../../../assets/SvgIcons/Home.Dark.Icon';
import Home_Color_Icon from '../../../assets/SvgIcons/Home.Color.Icon';
import Scanner_Icon from '../../../assets/SvgIcons/Scanner.Icon';
import User_Icon from '../../../assets/SvgIcons/User.Icon';
import History_Icon from '../../../assets/SvgIcons/History.Icon';
import {primary} from '../../Stylings/Colors';
import Plus_Icon from '../../../assets/SvgIcons/Plus.Icon';
import {Regular} from '../../Stylings/Font.Family';
const Tab = createBottomTabNavigator();
const Tab_Navigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      initialRouteName="Home_Screen">
      <Tab.Screen
        name="Home_Screen"
        component={Home_Screen}
        options={{headerShown: false}}
      />

      {/* Add more tab screens here */}
    </Tab.Navigator>
  );
};

const CustomTabBar = ({state, descriptors, navigation}) => {
  const [selettab, setSealectTab] = React.useState('Home');
  const route = useRoute();
  useEffect(() => {
    setSealectTab(route.name === 'Tab_Navigation' ? 'Home' : 'Home');
  }, [selettab]);
  return (
    <View style={styles.Cuttom_Tab_Container}>
      <TouchableOpacity
        style={styles.Btn_Custom_Tab}
        onPress={() => navigation.navigate('Home') & setSealectTab('Home')}>
        {selettab === 'Home' ? <Home_Color_Icon /> : <Home_Dark_Icon />}
        {selettab === 'Home' ? (
          <Text style={styles.activeText}>Home</Text>
        ) : (
          <Text style={styles.InactiveText}>Home</Text>
        )}
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          borderRadius: 60,
          backgroundColor: primary,
          top: -35,
          // backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.navigate('Tags_Screen') & setSealectTab('plus')
        }>
        {selettab === 'plus' ? <Plus_Icon /> : <Plus_Icon />}
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.Btn_Custom_Tab}
        onPress={() =>
          navigation.navigate('History_Screen') & setSealectTab('History')
        }>
        {selettab === 'History' ? <History_Icon /> : <History_Icon />}
        {selettab === 'History' ? (
          <Text style={styles.activeText}>History</Text>
        ) : (
          <Text style={styles.InactiveText}>History</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Btn_Custom_Tab}
        onPress={() =>
          navigation.navigate('Settings_Screen') & setSealectTab('Upgrade')
        }>
        {selettab === 'Upgrade' ? <User_Icon /> : <User_Icon />}
        {selettab === 'Upgrade' ? (
          <Text style={styles.activeText}>Profile</Text>
        ) : (
          <Text style={styles.InactiveText}>Profile</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

// Your Home, Search, Singin component definitions

export default Tab_Navigation;
const styles = StyleSheet.create({
  Cuttom_Tab_Container: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    alignSelf: 'center',
    elevation: 2,
    borderTopWidth: 1,

    borderTopColor: '#0000001A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowOffset: {
      width: 9,

      height: 9,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
  },
  Btn_Custom_Tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeText: {
    color: '#0091FF',
    fontFamily: Regular,
    fontSize: 13,
  },
  InactiveText: {
    color: '#AAAAAA',
    // marginTop: 5,
    fontFamily: Regular,
    fontSize: 13,
  },
});
