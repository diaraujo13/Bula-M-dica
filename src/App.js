import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Start from './screens/StartPage';
import BulaList from './screens/BulaList';
import SQLite from 'react-native-sqlite-storage';
import {Provider} from 'react-redux';
import store from './store';
import Historico from './screens/Historico';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MainStore = store();

// Registro das telas para receberem um identificador
Navigation.registerComponent('start', () => Start, MainStore, Provider);
Navigation.registerComponent('BulaList', () => BulaList, MainStore, Provider);
Navigation.registerComponent('Historico', () => Historico, MainStore, Provider);


// Inicialização 
// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'start',
//     title: 'Início'
//   },

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One', // tab label as appears under the icon in iOS (optional)
      screen: 'start', // unique ID registered with Navigation.registerScreen
      icon: <Icon name='heart' color='#3783ba'/>, // local image asset for the tab icon unselected state (optional on iOS)
      selectedIcon: <Icon name='heart' color='#e1e8ed'/>, 
    },

    {
      label: "Histórico", // tab label as appears under the icon in iOS (optional)
      screen: 'Historico', // unique ID registered with Navigation.registerScreen
      icon: <Icon name='heart' color='#3783ba'/>, // local image asset for the tab icon unselected state (optional on iOS)
      selectedIcon: <Icon name='heart' color='#e1e8ed'/>, 
    }
  ]});