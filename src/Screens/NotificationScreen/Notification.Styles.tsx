import {Dimensions, StyleSheet} from 'react-native';
import {primary, secondary, tertiary, white} from '../../Stylings/Colors';
import {Bold, Medium, Regular} from '../../Stylings/Font.Family';

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: white,
  },
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
  notification_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  name_Container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  notification_category: {
    width: 10,

    height: 10,
    borderRadius: 60,
    backgroundColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: Regular,
    color: secondary,
    marginLeft: 10,
    width: Dimensions.get('screen').width / 1.6,
  },
  time: {
    fontSize: 16,
    fontFamily: Regular,
    color: tertiary,
  },
});
export default styles;
