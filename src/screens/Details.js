import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Platform,  ScrollView, ActivityIndicator, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';
import { bulaDetails } from '../actions/bulas/bulas';
import { addHistory } from '../actions/bulas/historico';
import { setLoading } from '../actions/util';


class Details extends Component {

  componentWillMount(){
    this.props.setLoading(true);
    this.props.bulaDetails();
  }

  
  componentDidMount(){
      //adicionar como ultimo item no histórico
      //carregar + informações
      //controlar o favorito ou não

      this.props.addHistory();
    
  }

  render() {

    let { title, dizeres } = this.props.bula;
    let { loading } = this.props;
   
    if(loading){

      return (
        <View>
          <ActivityIndicator />
        </View>
        )

    }else{

      return (
      <View>
        <Text> {title} </Text>
        <Text> {dizeres} </Text>
      </View>
      )
    }
  };
};

const mapStateToProps = (state) => ({
  id: state.bulas.selected,
  bula: state.bulas.selectedBula,
  loading: state.util.isLoading

})

const mapDispatchToProps = (dispatch) =>  {
  return {
    addHistory: () => dispatch(addHistory()),
    bulaDetails: ()=> dispatch(bulaDetails()),
    setLoading: (param) => dispatch(setLoading(param))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Details)
