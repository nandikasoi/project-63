import React, { Component } from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native';
import { Header } from 'react-native.elements';


export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
       text: '',
    };
  }
}

  
<TextInput
style={styles.inputBox}
onChangeText={text => {
  this.setState{{
    text: text,
    isSearchedPressed: false,
    word  : "Loading...",
    lexicalCategory :"",
    examples : [],
    defination : ""  
  }}:
}}
  value={this.state.text}
  />

