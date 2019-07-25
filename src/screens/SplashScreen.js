import React from 'react';
import { View, Text } from 'react-native';

import i18n from '../i18n';
import { loadSettings } from '../storage/settingsStorage';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Simulating Preload data from an external API
    await this.performTimeConsumingTask();
    // Preload data using AsyncStorage
    const settings = await loadSettings();
    
    if (settings !== null) {
      i18n.locale = settings.locale;
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
          Blitz Reading
        </Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default SplashScreen;