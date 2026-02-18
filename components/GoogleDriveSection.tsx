import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import * as Sharing from 'expo-sharing';
import * as WebBrowser from 'expo-web-browser';
import { styles } from '../styles/App.styles';
import { STRINGS } from '../constants';

interface GoogleDriveSectionProps {
  pdfUri: string | null;
  loading: boolean;
  onLoadingChange: (loading: boolean) => void;
}

export const GoogleDriveSection: React.FC<GoogleDriveSectionProps> = ({
  pdfUri,
  loading,
  onLoadingChange,
}) => {
  const openInDrive = async () => {
    try {
      if (!pdfUri) {
        Alert.alert(STRINGS.ALERT_INFO_GENERATE, STRINGS.ALERT_INFO_GENERATE_MSG);
        return;
      }

      onLoadingChange(true);

      await Sharing.shareAsync(pdfUri, {
        mimeType: 'application/pdf',
        dialogTitle: 'Save to Google Drive',
      });

      setTimeout(() => {
        WebBrowser.openBrowserAsync('https://drive.google.com');
      }, 500);
    } catch (error) {
      Alert.alert(`Failed: ${error}`);
    } finally {
      onLoadingChange(false);
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{STRINGS.SECTION_4_TITLE}</Text>
      <Text style={styles.description}>{STRINGS.SECTION_4_DESC}</Text>
      <TouchableOpacity
        style={[styles.button, pdfUri ? styles.driveButton : styles.disabledButton]}
        onPress={openInDrive}
        disabled={!pdfUri || loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>{STRINGS.BUTTON_VIEW_IN_DRIVE}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
