import React, {PureComponent} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import EditDetailView from './EditDetailView';
import Button from './Button';
import {updateUserData} from '../actions/uiAction';

class SetUp extends PureComponent {
  render() {
    const {name, upi } = this.props.userData;
    return (
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', overflow: 'hidden'}}>
          <Image
            source={require('../asserts/goDutch.png')}
            style={{height: 80, width: 80, marginVertical: 40}}
          />

          <View style={{width: '100%', marginBottom: 30}}>
            <Text style={style.textStyle}>current profession</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Button
                title="Student"
                style={{
                  width: '45%',
                  height: 40,
                  backgroundColor: '#FFFFFF',
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#5A67F2',
                }}
                textStyle={{color: '#5A67F2'}}
                onPress={() =>
                  this.props.dispatch(updateUserData({profession: 'Student'}))
                }
              />
              <Button
                title="Professional"
                style={{
                  width: '45%',
                  height: 40,
                  backgroundColor: '#FFFFFF',
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#5A67F2',
                }}
                textStyle={{color: '#5A67F2'}}
                onPress={() =>
                  this.props.dispatch(
                    updateUserData({profession: 'Professional'}),
                  )
                }
              />
            </View>
          </View>
          <EditDetailView
            property="Full Name*"
            value={name}
            placeholder="Full Name"
            onChangeText={(text) =>
              this.props.dispatch(updateUserData({name: text}))
            }
            style={{marginVertical: 20}}
          />
          <EditDetailView
            property="UPI ID*"
            value={upi}
            placeholder="UPI ID"
            onChangeText={(text) =>
              this.props.dispatch(updateUserData({upi: text}))
            }
            style={{marginVertical: 20}}
          />
          <Button
            title="Continue"
            style={{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(reduxStore) {
  return {
    userData: reduxStore.uiReducer.userData,
  };
}

export default connect(mapStateToProps, null)(SetUp);

const style = StyleSheet.create({
  textBox: {
    width: '90%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#F1F1F1',
    borderRadius: 5,
    alignSelf: 'center',
  },
  textStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 18,
    padding: 5,
    paddingLeft: 15,
  },
});
