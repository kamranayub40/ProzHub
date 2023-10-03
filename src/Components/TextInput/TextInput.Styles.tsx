import {Dimensions, StyleSheet} from 'react-native';
import {Medium} from '../../Stylings/Font.Family';
import {secondary} from '../../Stylings/Colors';

const styles = StyleSheet.create({
  textInput: {
    width: Dimensions.get('screen').width / 1.1,
    fontSize: 16,
    height: 60,
    marginBottom: 20,
    fontFamily: Medium,
    borderWidth: 1,
    paddingHorizontal: 10,
    color: secondary,
  },
});
export default styles;
