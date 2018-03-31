import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Start from './screens/StartPage';
import AboutPage from './screens/AboutPage';
import SQLite from 'react-native-sqlite-storage';
import {Provider} from 'react-redux';
import store from './store';

const MainStore = store();

// Registro das telas para receberem um identificador
Navigation.registerComponent('start', () => Start, MainStore, Provider);
Navigation.registerComponent('about', () => AboutPage, MainStore, Provider);


// Inicialização 
Navigation.startSingleScreenApp({
  screen: {
    screen: 'start',
    title: 'Início'
  },
});
