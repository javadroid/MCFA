import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { palette } from '../constants/Colors';

export default function CustomPageCointainer({ edgeTop , style , children   }) {
  return (

    <SafeAreaView edges={['right', 'left', 'bottom', edgeTop]} 
      style={{ ...styles.container, 
      ...style  
      }}>

      {children}

    </SafeAreaView>


  )
}
// PageCointainer.propTypes = {edges:[],style:{}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    display:"flex",
    backgroundColor: palette.main_background_color

  }
});
