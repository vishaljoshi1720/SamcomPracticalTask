import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import {LoginText} from '../Utilities/en';

const LoginForm = ({
  name,
  setName,
  onLogin,
  job,
  setJob,
  readOnly = false,
  disableButton,
}) => {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.welcomeText}>
        {readOnly ? LoginText.updateUser : LoginText.welcome}
      </Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textinputContainer}
          placeholder={LoginText.name}
          value={name}
          onChangeText={setName}
          editable={readOnly ? false : true}
          selectTextOnFocus={readOnly ? false : true}
        />
      </View>
      <View style={[styles.formContainer, {marginTop: 10}]}>
        <TextInput
          style={styles.textinputContainer}
          placeholder={LoginText.job}
          value={job}
          onChangeText={setJob}
          editable={readOnly ? false : true}
          selectTextOnFocus={readOnly ? false : true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onLogin}
          style={[
            styles.buttonStyle,
            {opacity: disableButton ? 0.5 : readOnly ? 0.5 : 1},
          ]}
          disabled={disableButton ? true : readOnly ? true : false}>
          <Text style={styles.buttonFontColor}>
            {readOnly ? LoginText.update : LoginText.login}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  loginContainer: {
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  welcomeText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  formContainer: {
    marginTop: 20,
  },
  textinputContainer: {
    backgroundColor: '#E8E9EB',
    color: 'black',
    borderRadius: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    marginTop: 25,
  },
  buttonStyle: {
    backgroundColor: '#de530d',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonFontColor: {
    color: 'white',
    fontWeight: '500',
  },
});
