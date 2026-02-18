import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/App.styles';
import { STRINGS } from '../constants';

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{STRINGS.TITLE}</Text>
      <Text style={styles.subtitle}>{STRINGS.SUBTITLE}</Text>
    </View>
  );
};
