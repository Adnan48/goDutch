import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import Button from './Button';
import {connect} from 'react-redux';

class Details extends PureComponent {
  render() {
    const {name, mobile, upi, profession} = this.props.userData;
    return (
      <View>
        <View>
          <ItemDetails property="Name" value={name} />
          <ItemDetails property="Mobile Number" value={mobile} />
          <ItemDetails property="UPI Id" value={upi} />
          <ItemDetails property="Profession" value={profession} />
        </View>
        <Button
          title="Continue"
          style={{margin: 10, alignSelf: 'center'}}
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

function mapStateToProps(reduxStore) {
  return {
    userData: reduxStore.uiReducer.userData,
  };
}

export default connect(mapStateToProps, null)(Details);

class ItemDetails extends PureComponent {
  render() {
    const {property, value} = this.props;
    return (
      <View>
        <Text style={{fontSize: 19, margin: 15}}>{property}</Text>
        <View style={{width: '90%', color: '#5A67F2', height: 3}} />
        <Text style={{fontSize: 19, margin: 15, color: '#5A67F2'}}>
          {value}
        </Text>
      </View>
    );
  }
}
