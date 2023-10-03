import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import styles from './Setting.Styles';
import Right_Icon from '../../../assets/SvgIcons/Right.Icon';
import Header from '../../Components/Header/Header';
import {primary} from '../../Stylings/Colors';
import MessageBox from '../../Components/DialogBox/MessageBox.Component';
import Dialog_Box from '../../Components/DialogBox/DialogBox.Component';
import LoaderModel from '../../Components/DialogBox/LoaderBox.Component';

const Settings_Screen = (props: any) => {
  const [userId, setUserId] = React.useState('');
  const [role, setRole] = React.useState('');

  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [whatopen, setwhatopen] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const [dialogVisibledeactivate, setdialogVisibledeactivate] =
    React.useState(false);
  const [UserName, setUserName] = React.useState('');

  const user = {
    name: 'John Doe',
    profileImage: require('../../Theme/Assests/Profile1.png'), // Replace with your user's profile image
  };

  return (
    <View style={styles.container}>
      <LoaderModel isVisible={loading} color={primary} />
      <MessageBox
        visible={dialogVisible}
        icon={whatopen == 'done' ? 'Success' : 'Error'}
        onPress={() => {
          whatopen === 'done'
            ? props.navigation.navigate('Login_Screen') &&
              setdialogVisible(false)
            : setdialogVisible(false);
        }}
        Message={message}
        buttonTitle={whatopen == 'done' ? 'Continue' : 'Try Again'}
      />

      <Header
        Header_Title={'Profile'}
        onPress={() => props.navigation.navigate('Tab_Navigation')}
      />
      <View style={styles.profileContainer}>
        <Image source={user.profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>Kamran Ayoub</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Personal info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings_Screen;
