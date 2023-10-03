import {Dimensions, StyleSheet} from 'react-native';
import {primary, secondary, tertiary, white} from '../../Stylings/Colors';
import {Bold, Medium} from '../../Stylings/Font.Family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    marginBottom: 10,
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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 12,
    fontSize: 18,
    fontFamily: Medium,
    color: secondary,
  },
  buttonContainer: {
    marginTop: 20,
    padding: 16,
  },
  button: {
    backgroundColor: primary,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: white,
    fontSize: 16,
    fontFamily: Medium,
  },
  deactivate_title: {
    fontSize: 16,
    fontFamily: Medium,
    color: secondary,
    textAlign: 'center',
  },
  deactivate_title1: {
    fontSize: 14,
    fontFamily: Medium,
    color: tertiary,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonOk_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  Ok_Button: {
    width: Dimensions.get('screen').width / 3.5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
  },
  ok_Title: {
    fontSize: 16,
    fontFamily: Medium,
    color: white,
  },
});
export default styles;
