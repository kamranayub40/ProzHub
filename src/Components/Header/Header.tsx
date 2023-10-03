import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import {primary, white} from '../../Stylings/Colors';
import {Bold} from '../../Stylings/Font.Family';
import Right_Icon from '../../../assets/SvgIcons/Right.Icon';
const Header = ({onPress, Header_Title}) => {
  return (
    <View style={styles.Main_Header}>
      <TouchableOpacity onPress={onPress}>
        <Right_Icon />
      </TouchableOpacity>
      <Text style={styles.tags_Title}>{Header_Title}</Text>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  Main_Header: {
    height: 100,
    backgroundColor: primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    justifyContent: 'space-between',
  },
  tags_Title: {
    fontSize: 20,
    fontFamily: Bold,
    color: white,
    position: 'absolute',
    left: 0,
    right: 0,
    alignSelf: 'center',
    textAlign: 'center',
    zIndex: -1000,
  },
});
