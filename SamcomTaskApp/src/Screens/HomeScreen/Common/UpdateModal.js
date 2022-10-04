import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';
import LoginForm from '../../../Common/LoginForm';

const UpdateModal = ({visible, hideModal, item}) => {
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <LoginForm
            readOnly={true}
            name={item[0].first_name + item[0].last_name}
            job={item[0].email}
          />
        </Modal>
      </Portal>
    </Provider>
  );
};

export default UpdateModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
