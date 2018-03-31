import React, { Component } from 'react';
import { Platform, ScrollView, TouchableOpacity, Dimensions, StyleSheet, Text, View, FlatList } from 'react-native';
import startTab from '../nav/tabs';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import SQLite from 'react-native-sqlite-storage';
import { getBulas, setCat } from '../actions/bulas';


import {
  RkButton, RkStyleSheet,
  RkText, RkCard
} from 'react-native-ui-kitten';


const categoriesArray = "abcdefghijklmnopqrstuvwxyz".split("");

class Start extends Component {

   items = null;
   height = +Dimensions.get('window').height;
   
   constructor(){
     super();
    }
    
    componentWillMount(){
      let width = +Dimensions.get('window').width;

      this.items = categoriesArray.map( (route, index) => {
        return (
          <RkButton
            rkType='square shadow'
            style={{ width: (width/3)-20, margin: 5, height: 80, backgroundColor: 'rgba(0,0,0,0.1)'}}
            key={index}
            onPress={() => {
                this.props.setCat(route);
                this.props.navigator.push({ screen: 'about', }); 
            }}>
  
            <RkText style={{fontWeight: 'bold', color: '#444444'}} rkType='xxlarge'>{route.toUpperCase()}</RkText>
  
          </RkButton>
        )
      });
    }

    componentDidMount() {
    }



    render() {
      return (

        <View style={{ backgroundColor: '#F5FCFF', flex: 1, padding: 10}}>
      
      <RkCard rkType='shadowed'>
        <View rkCardHeader>
          <Text>HISTÓRICO</Text>
        </View>
        <View rkCardContent>
          <Text>Sem itens adicionados ao guia rápido</Text>
        </View>
    </RkCard>
      
      <RkCard rkType='shadowed'>
        <View rkCardHeader>
          <Text>Δ GUIA RÁPIDO</Text>
        </View>
        <View rkCardContent>
          <Text>Sem itens adicionados ao guia rápido</Text>
        </View>
    </RkCard>

        <ScrollView  contentContainerStyle={styles.container} >

          {this.items}
        </ScrollView>
        </View>
      );
    }
  }

  /** listen state */
  const mapStateToProps = (state) => ({
    places: state.places.places,
    bulas: state.bulas.bulas 
  })
  
  /** dispatch actions */
  const mapDispatchToProps = dispatch => ({
    loadBulas: (page, cat) => dispatch(getBulas(page, cat)),
    setCat: (cat) => dispatch(setCat(cat)),
  });
  

  const styles = StyleSheet.create({
    container: { flex: 2, backgroundColor: '#F5FCFF', flexDirection: 'row', flexWrap: 'wrap' },
    rootContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    icon: {
      marginBottom: 16
    },
    welcome: { fontSize: 20, textAlign: 'center', margin: 10, },
    instructions: { textAlign: 'center', color: '#333333', marginBottom: 5, },
  });


  
  export default connect(mapStateToProps, mapDispatchToProps)(Start)
  
  