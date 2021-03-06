import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection} from './common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const {titleStyle} = styles;
    console.log(this.props);
    return (
      <TouchableWithoutFeedback>
        <View>
          <CardSection>
            <Text style={titleStyle}>{this.props.library.title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default connect(null, actions)(ListItem);
