import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Login.Styles';
import {primary, white} from '../../Stylings/Colors';
import Text_Input from '../../Components/TextInput/TextInput';
import Primary_Button from '../../Components/PrimaryButton/PrimaryButton.Components';
import Google_icon from '../../../assets/SvgIcons/Google.Icon';
import LoaderModel from '../../Components/DialogBox/LoaderBox.Component';
import MessageBox from '../../Components/DialogBox/MessageBox.Component';

const Login_Screen = (props: any) => {
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [whatopen, setwhatopen] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const [email, setemail] = React.useState('');
  const [emailError, setEmailerror] = React.useState(false);
  const [EmailFocus, setEmailFocus] = React.useState(false);

  const [number, setNumber] = React.useState('');
  const [numberError, setnumberError] = React.useState(false);
  const [numberFocus, setnumberFocus] = React.useState(false);
  const [password, setpassword] = React.useState('');
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const [verificationId, setVerificationId] = useState('');
  const [code, setCode] = useState('');
  React.useEffect(() => {
    if (email !== '') {
      setEmailerror(false);
    }
  }, [email]);
  React.useEffect(() => {
    if (password !== '') {
      setPasswordError(false);
    }
  }, [password]);
  const Sign_in_press = async () => {};

  return (
    <View style={styles.Main_Container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={white} />
      <LoaderModel isVisible={loading} color={primary} />
      <MessageBox
        visible={dialogVisible}
        icon={whatopen == 'done' ? 'Success' : 'Error'}
        onPress={() => {
          whatopen == 'done'
            ? props.navigation.navigate('Login_Screen') &&
              setdialogVisible(false)
            : setdialogVisible(false);
        }}
        Message={message}
        buttonTitle={whatopen == 'done' ? 'Continue' : 'Try Again'}
      />
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={styles.Logo_Container}>
          <Text style={styles.Logo_Text}>Login</Text>
        </View>
        <View style={styles.Input_Container}>
          <Text_Input
            placeholder={'Email Address'}
            onChangeText={text => {
              setemail(text);
            }}
            error={emailError}
            IsFocus={EmailFocus}
            onFocus={() => {
              setEmailFocus(true);
            }}
            onBlur={event => {
              setEmailFocus(false);
            }}
          />
          <Text_Input
            placeholder={'Password'}
            onChangeText={text => {
              setpassword(text);
            }}
            error={passwordError}
            IsFocus={passwordFocus}
            onFocus={() => {
              setPasswordFocus(true);
            }}
            onBlur={event => {
              setPasswordFocus(false);
            }}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.forgotpassword_container}>
            <Text style={styles.forgotpassword_text}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignSelf: 'center'}}>
          <Primary_Button
            Button_Title={'Sign in'}
            backgroundColor={primary}
            onPress={Sign_in_press}
            onPress={() => props.navigation.navigate('Tab_Navigation')}
            Text_color={white}
          />
        </View>

        <View
          style={[
            styles.Resend_Code_Container,
            {alignSelf: 'center', marginTop: 10},
          ]}>
          <Text style={styles.Auth_text}>Don’t have an account?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Signup_Screen')}>
            <Text style={styles.Resend_text}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Login_Screen;
