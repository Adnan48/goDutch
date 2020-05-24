import React, {PureComponent} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class EditDetailsView extends PureComponent {
  render() {
    const {property, value, onChangeText, containerStyle, keyboardType, placeholder, maxLength} = this.props;
    return (
      <View style={{ width: '100%', ...containerStyle}}>
        <Text style={style.textStyle}>{property}</Text>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={style.textBox}
          maxLength={maxLength}
          keyboardType={keyboardType || 'default'}
          textAlign="center"
        />
      </View>
    );
  }
}

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
    paddingLeft:15,
  },
});
