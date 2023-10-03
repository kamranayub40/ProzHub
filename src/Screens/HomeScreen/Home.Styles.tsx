import {Dimensions, StyleSheet} from 'react-native';
import {primary, secondary, tertiary, white} from '../../Stylings/Colors';
import {Bold, Medium, Regular} from '../../Stylings/Font.Family';

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: white,
  },
  Header_Container: {
    height: 220,
    backgroundColor: primary,
    width: '100%',
    // borderBottomStartRadius: 10,
    // borderBottomEndRadius: 10,
  },
  Header_Containt_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  profile_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Hello_Text: {
    color: white,
    fontSize: 17,
    fontFamily: Medium,
  },
  Title_Text: {
    marginLeft: 7,
    color: white,
    fontSize: 15,
    fontFamily: Medium,
  },

  input_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 10,
    marginHorizontal: 20,
    height: 50,
    backgroundColor: white,
    borderRadius: 10,
    marginTop: 10,
  },
  input_Box_contaner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: Dimensions.get('screen').width / 2.9,
    fontSize: 14,
    fontFamily: Medium,
    color: secondary,
    marginLeft: 10,
  },
  filter_container: {
    borderLeftWidth: 0.8,
    borderLeftColor: '#D9D6D6',
    height: 50,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    // right: 0,
  },
  Count_container: {
    height: 180,
    marginHorizontal: 5,
    borderRadius: 5,
    width: Dimensions.get('screen').width / 1.6,
    marginBottom: 20,
  },
  Count_Text: {
    fontSize: 25,
    fontFamily: Bold,
    color: primary,
  },
  Count_Name_Text: {
    fontSize: 18,
    fontFamily: Medium,
    color: white,
    position: 'absolute',
    bottom: 10,
  },

  name_Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doscover: {
    fontSize: 20,
    fontFamily: Medium,
    color: '#000',
    marginHorizontal: 10,
  },
  perfectTitle: {
    fontSize: 18,
    fontFamily: Medium,
    color: white,
    marginHorizontal: 30,
    marginTop: 40,
  },
});
export default styles;
