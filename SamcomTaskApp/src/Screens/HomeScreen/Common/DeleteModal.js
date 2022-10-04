import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Modal, Portal, Button, Provider} from 'react-native-paper';

const DeleteModal = ({visible, hideModal, onPressButton}) => {
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 25, fontWeight: '700', color: 'black'}}>
              Are you sure?{' '}
            </Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 16, fontWeight: '200', color: 'black'}}>
              do you want to delete this user?
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Button color="#de530d" onPress={onPressButton}>
              Delete
            </Button>
            <Button color="#de530d" onPress={onPressButton}>
              Cancel
            </Button>
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
