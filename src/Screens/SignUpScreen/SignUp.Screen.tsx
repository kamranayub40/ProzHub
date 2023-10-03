import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {primary, secondary, white} from '../../Stylings/Colors';
import Text_Input from '../../Components/TextInput/TextInput';
import Primary_Button from '../../Components/PrimaryButton/PrimaryButton.Components';
import styles from './SignUp.Styles';
import LoaderModel from '../../Components/DialogBox/LoaderBox.Component';
import MessageBox from '../../Components/DialogBox/MessageBox.Component';

const Signup_Screen = (props: any) => {
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [whatopen, setwhatopen] = React.useState('');

  const [loading, setLoading] = React.useState(false);
  const [FristName, setFristName] = React.useState('');
  const [FristNameError, setFristNameError] = React.useState(false);
  const [FristNameFocus, setFristNameFocus] = React.useState(false);
  const [LastName, setLastName] = React.useState('');
  const [LastNameError, setLastNameError] = React.useState(false);
  const [LastNameFocus, setLastNameFocus] = React.useState(false);
  const [PhoneNumber, setPhoneNumber] = React.useState('');
  const [PhoneNumberError, setPhoneNumberError] = React.useState(false);
  const [PhoneNumberFocus, setPhoneNumberFocus] = React.useState(false);
  const [email, setemail] = React.useState('');
  const [emailError, setEmailerror] = React.useState(false);
  const [EmailFocus, setEmailFocus] = React.useState(false);
  const [password, setpassword] = React.useState('');
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

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
      <ScrollView>
        <View style={styles.Logo_Container}>
          <Text style={styles.Logo_Text}>Create Account</Text>
        </View>

        <View style={styles.Input_Container}>
          <Text_Input
            placeholder={'Name'}
            onChangeText={text => {
              setPhoneNumber(text);
            }}
            error={PhoneNumberError}
            IsFocus={PhoneNumberFocus}
            onFocus={() => {
              setPhoneNumberFocus(true);
            }}
            onBlur={event => {
              setPhoneNumberFocus(false);
            }}
          />
          <Text_Input
            placeholder={'Phone Number'}
            onChangeText={text => {
              setPhoneNumber(text);
            }}
            error={PhoneNumberError}
            IsFocus={PhoneNumberFocus}
            onFocus={() => {
              setPhoneNumberFocus(true);
            }}
            onBlur={event => {
              setPhoneNumberFocus(false);
            }}
          />

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
        </View>

        <View style={{alignSelf: 'center', marginTop: 30}}>
          <Primary_Button
            Button_Title={'Sign Up'}
            backgroundColor={primary}
            Text_color={white}
          />
        </View>

        <View
          style={[
            styles.Resend_Code_Container,
            {alignSelf: 'center', marginTop: 10},
          ]}>
          <Text style={styles.Auth_text}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login_Screen')}>
            <Text style={styles.Resend_text}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Signup_Screen;
