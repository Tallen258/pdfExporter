import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/App.styles';
import { STRINGS } from '../constants';

export const InfoSection: React.FC = () => {
  return (
    <View style={styles.infoSection}>
      <Text style={styles.infoTitle}>{STRINGS.HOW_TO_USE}</Text>
      <Text style={styles.infoText}>{STRINGS.HOW_TO_USE_TEXT}</Text>
    </View>
  );
};
