import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Toast from 'react-native-simple-toast';

import {LoginText} from '../../Utilities/en';
import Loader from '../../Common/Loader';
import {GlobalContext} from '../../Provider/GlobalContextProvider';
import LoginForm from '../../Common/LoginForm';

const LoginScreen = ({}) => {
  const {userActions, dispatch} = useContext(GlobalContext);

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [loading, setLoading] = useState(false);

  const onlyCharacters = () => {
    let regx = /^[A-Za-z]+$/;

    return regx.test(name) && regx.test(job);
  };

  const onLogin = async () => {
    setLoading(true);
    let formData = {};
    let isValid = onlyCharacters();
    if (isValid) {
      try {
        formData['name'] = name;
        formData['job'] = job;
        const response = await userActions.Login(formData);
        if (response.id) {
          dispatch({type: 'LOGIN', token: response.id, user: response.json});
          Toast.show(LoginText.loginMessage, Toast.LONG);
        }
      } catch (error) {
        Toast.show(error.toString(), Toast.LONG);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
      Toast.show(LoginText.errorMessage, Toast.LONG);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : ''}
        style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.subConatiner}>
            <Text style={styles.mainText}>{LoginText.holla}</Text>
          </View>
          <LoginForm
            job={job}
            setJob={val => setJob(val)}
            name={name}
            setName={val => setName(val)}
            onLogin={onLogin}
            disableButton={name.length === 0 || job.length === 0}
          />
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.2,
                height: 100,
                width: 100,
                borderRadius: 50,
                backgroundColor: '#de530d',
                alignSelf: 'flex-end',
                marginTop: 50,
                position: 'absolute',
                bottom: -50,
                left: -30,
              }}
            />
            <View
              style={{
                height: 200,
                width: 200,
                borderRadius: 100,
                backgroundColor: '#de530d',
                alignSelf: 'flex-end',
                marginTop: 50,
                position: 'absolute',
                bottom: -70,
                right: -90,
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subConatiner: {
    flex: 0.7,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 30,
    color: '#de530d',
    fontStyle: 'italic',
    fontWeight: '700',
    marginTop: 20,
  },
});
