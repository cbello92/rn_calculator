import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import CalculatorScreen from './src/screens/CalculatorScreen';
import stylesAppTheme from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={stylesAppTheme.backgroundApp}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App;