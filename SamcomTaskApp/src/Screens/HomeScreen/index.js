import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, FlatList, SafeAreaView, Image} from 'react-native';

import Toast from 'react-native-simple-toast';
import Loader from '../../Common/Loader';
import {Card, Avatar, Button, Divider} from 'react-native-paper';

import {GlobalContext} from '../../Provider/GlobalContextProvider';
import UpdateModal from './Common/UpdateModal';
import DeleteModal from './Common/DeleteModal';

const HomeScreen = ({}) => {
  const {state, userActions, dispatch} = useContext(GlobalContext);

  const [loading, setLoading] = useState(false);
  const [updateItemId, setUpdateItemId] = useState(null);

  const [updateModalVisible, setUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const showModal = () => setUpdateModal(true);
  const hideModal = () => setUpdateModal(false);

  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await userActions.GetUsers();
      if (response.data.length > 0) {
        dispatch({type: 'GET_USER_LIST', userList: response.data});
      }
    } catch (err) {
      Toast.show(err.toString(), Toast.LONG);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const updateUser = item => {
    setUpdateItemId(item.id);
    showModal();
  };

  const renderItmes = ({item, index}) => (
    <View style={{flex: 1, marginVertical: 10}}>
      <Card style={{borderWidth: 0.5}}>
        <Card.Title
          title={item.first_name + item.last_name}
          titleNumberOfLines={1}
          subtitle={item.email}
          left={props => (
            <Avatar.Image {...props} source={{uri: item.avatar}} />
          )}></Card.Title>
        <Divider style={{borderWidth: 0.1}} />
        <Card.Actions style={{justifyContent: 'space-between'}}>
          <Button color="#de530d" onPress={() => updateUser(item)}>
            Update
          </Button>
          <Button
            color="#de530d"
            onPress={() => {
              setShowDeleteModal(true);
            }}>
            Delete
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );

  return loading ? (
    <Loader />
  ) : (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          data={state.userList}
          renderItem={(item, index) => renderItmes(item, index)}
        />
      </View>
      {state.userList && updateModalVisible ? (
        <UpdateModal
          visible={updateModalVisible}
          hideModal={hideModal}
          item={state?.userList.filter(item => item.id === updateItemId)}
        />
      ) : null}
      {state.userList && showDeleteModal ? (
        <DeleteModal
          visible={showDeleteModal}
          hideModal={() => setShowDeleteModal(false)}
          onPressButton={() => {
            setShowDeleteModal(false);
            Toast.show('Deleted user Successfully!', Toast.LONG);
          }}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
});
