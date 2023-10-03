import {StyleSheet} from 'react-native';
import {light_grey, primary, white} from '../../Stylings/Colors';
import {Bold, Medium, SemiBold} from '../../Stylings/Font.Family';

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Detail_Message_Text: {
    fontSize: 25,
    marginHorizontal: 50,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: SemiBold,
    color: primary,
  },
  Bottom_Container: {
    position: 'absolute',
    bottom: 10,
  },
});
export default styles;
