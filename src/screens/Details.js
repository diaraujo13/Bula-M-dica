import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Platform,  ScrollView, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';
import { addHistory, bulaDetails } from '../actions/bulas';


class Details extends Component {

  componentDidMount(){
      //adicionar como ultimo item no histórico
      //carregar + informações
      //controlar o favorito ou não

      this.props.addHistory();
      this.props.bulaDetails();
  }

  render() {

    let { title, dizeres } = this.props.bula;

    return (
      <View>
        <Text> {title} </Text>
        <Text> {dizeres} </Text>
      </View>
    )
  };
};

const mapStateToProps = (state) => ({
  id: state.bulas.selected,
  bula: state.bulas.selectedBula,

})

const mapDispatchToProps = (dispatch) =>  {
  return {
    addHistory: () => dispatch(addHistory()),
    bulaDetails: ()=> dispatch(bulaDetails())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Details)
