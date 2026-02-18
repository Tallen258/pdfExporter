import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import * as Sharing from 'expo-sharing';
import { styles } from '../styles/App.styles';
import { STRINGS } from '../constants';

interface SharePDFSectionProps {
  pdfUri: string | null;
}

export const SharePDFSection: React.FC<SharePDFSectionProps> = ({ pdfUri }) => {
  const sharePDF = async () => {
    try {
      if (!pdfUri) {
        Alert.alert(STRINGS.ALERT_INFO_GENERATE, STRINGS.ALERT_INFO_GENERATE_MSG);
        return;
      }

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(pdfUri, {
          mimeType: 'application/pdf',
          dialogTitle: 'Share PDF',
        });
      } else {
        Alert.alert(STRINGS.ALERT_ERROR_SHARE, STRINGS.ALERT_ERROR_SHARE_MSG);
      }
    } catch (error: any) {
      if (error.message && error.message.includes('User canceled')) {
        return;
      }
      Alert.alert(STRINGS.ALERT_ERROR_SHARE, `Failed to share PDF: ${error}`);
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{STRINGS.SECTION_3_TITLE}</Text>
      <Text style={styles.description}>{STRINGS.SECTION_3_DESC}</Text>
      <TouchableOpacity
        style={[styles.button, pdfUri ? styles.shareButton : styles.disabledButton]}
        onPress={sharePDF}
        disabled={!pdfUri}
      >
        <Text style={styles.buttonText}>{STRINGS.BUTTON_SHARE_PDF}</Text>
      </TouchableOpacity>
    </View>
  );
};
