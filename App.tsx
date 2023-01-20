import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React, { useState, createContext, } from 'react';

import DayScroller from './compontents/DayScroller';
import SymptomScroller from './compontents/SymptomScroller';

export const selectionContext: React.Context<any> = createContext([null, null]);

export default function App() {

  console.log('Mounting app ');
  
  const selectionState = useState(null);
  const selectedDay = selectionState[0]; // The 'value'

  // NOTE: Use a flatlist for horizontal scrolling - only renders each component when necessary
  return (
    <View style={styles.container}>
      <StatusBar />
      {selectedDay
        ? <View style={styles.sideText}>
          <SymptomScroller index='1'/>
          <SymptomScroller index='2'/>
          <SymptomScroller index='3'/>
        </View>
        : null
      }
      <View style={styles.mainText}>
        <selectionContext.Provider value={selectionState}>
          <DayScroller />
        </selectionContext.Provider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  sideText: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});

export const images = {
  coconuts: [
    require('./assets/coconut_opacity.png'),
    require('./assets/coffee.png'),
    require('./assets/coffee.png'),
    require('./assets/coconut.png'),
    require('./assets/coconut.png'),
    require('./assets/coconut.png'),
    require('./assets/coconut.png')
  ]
}