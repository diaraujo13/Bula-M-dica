import React, { Component } from 'react';
import { Platform, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';

import { getBulas } from '../actions/bulas';
import { RkCard } from 'react-native-ui-kitten';


class BulaList extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.loadBulas();
  }
  render() {
    return (
        <View>
            <FlatList 
            onEndReache={()=>this.props.loadBulas()}
              data={this.props.bulas}

              renderItem={ ({item, index}) => {
                return (<RkCard style={{margin: 5}} key={index} rkType='shadowed'>
                    <View rkCardHeader>
                      <Text>{item.title}</Text>
                    </View>
                </RkCard>
                )
              }}
              />
        </View>
    )
  }
};


// "Redux States" -> Component props
const mapStateToProps = (state) => ({
    bulas: state.bulas.bulas
})

const mapDispatchToProps = dispatch => ({
  loadBulas: () => dispatch(getBulas())
});

export default connect(mapStateToProps, mapDispatchToProps)(BulaList)
