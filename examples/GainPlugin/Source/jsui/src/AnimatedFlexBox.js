import React, { Component } from 'react';
import {
  View,
  Text,
} from 'juce-blueprint';


class AnimatedFlexBoxExample extends Component {
  render() {
    return (
      <View {...styles.container}>
        <View {...styles.cell}><Text {...styles.text}>Look at me, cell #1!</Text></View>
        <View {...styles.cell}><Text {...styles.text}>Look at me, cell #2!</Text></View>
        <View {...styles.cell}><Text {...styles.text}>Look at me, cell #3!</Text></View>
        <View {...styles.cell}><Text {...styles.text}>Look at me, cell #4!</Text></View>
        <View {...styles.cell}><Text {...styles.text}>Look at me, cell #5!</Text></View>
        <View {...styles.cell}><Text {...styles.text}>Look at me, cell #6!</Text></View>
        <View {...styles.cell}><Text {...styles.text}>Look at me, cell #7!</Text></View>
        <View {...styles.cell}><Text {...styles.text}>Look at me, cell #8!</Text></View>
      </View>
    );
  }
}

const styles = {
  container: {
    'width': '100%',
    'height': '100%',
    'background-color': 'ff17191f',
    'justify-content': 'flex-start',
    'align-content': 'flex-start',
    'flex-wrap': 'wrap',
    'layoutAnimated': {
      'duration': 200.0,
      'frameRate': 45,
      'easing': View.EasingFunctions.quadraticInOut,
    },
  },
  cell: {
    'flex': 0.0,
    'width': 100.0,
    'height': 100.0,
    'justify-content': 'space-around',
    'align-items': 'center',
    'background-color': 'ff87898f',
    'margin': 6.0,
    'padding': 6.0,
  },
  text: {
    'font-size': 16.0,
    'line-spacing': 1.6,
    'justification': Text.JustificationFlags.centred,
  },
};

export default AnimatedFlexBoxExample;
