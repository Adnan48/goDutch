import React, {PureComponent} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import EditDetailView from './EditDetailView';
import Button from './Button';
import {updateUserData} from '../actions/uiAction';

class LoginModal extends PureComponent {
  render() {
    const {mobile} = this.props;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: '#F8F8F8',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image source={require('../asserts/goDutch.png')} />
          <Text
            style={{
              color: '#000000',
              fontWeight: 'bold',
              fontSize: 40,
              padding: 10,
            }}>
            goDutch
          </Text>
        </View>
        <EditDetailView
          property="Mobile Number*"
          value={mobile}
          keyboardType="numeric"
          placeholder="Mobile Number"
          maxLength={10}
          onChangeText={(text) =>
            this.props.dispatch(updateUserData({mobile: text}))
          }
        />
        <Button
          title="Continue"
          style={{marginTop: 20}}
          onPress={() => this.props.navigation.navigate('SetUp')}
        />
      </View>
    );
  }
}

function mapStateToProps(reduxStore) {
  return {
    mobile: reduxStore.uiReducer.userData.mobile,
  };
}

export default connect(mapStateToProps, null)(LoginModal);
