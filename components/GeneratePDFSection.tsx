import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { styles } from '../styles/App.styles';
import { STRINGS } from '../constants';

interface GeneratePDFSectionProps {
  selectedImagesCount: number;
  loading: boolean;
  pdfGenerated: boolean;
  onGeneratePDF: (fileName?: string) => void;
}

export const GeneratePDFSection: React.FC<GeneratePDFSectionProps> = ({
  selectedImagesCount,
  loading,
  pdfGenerated,
  onGeneratePDF,
}) => {
  const [pdfName, setPdfName] = useState('');
  const isDisabled = selectedImagesCount === 0 || loading;

  const handleGeneratePDF = () => {
    onGeneratePDF(pdfName || undefined);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{STRINGS.SECTION_2_TITLE}</Text>
      <Text style={styles.description}>{STRINGS.SECTION_2_DESC}</Text>
      
      <TextInput
        style={styles.textInput}
        placeholder="Enter PDF name (optional)"
        placeholderTextColor="#999"
        value={pdfName}
        onChangeText={setPdfName}
        editable={!loading}
      />
      
      <TouchableOpacity
        style={[
          styles.button,
          selectedImagesCount > 0 ? styles.generateButton : styles.disabledButton,
        ]}
        onPress={handleGeneratePDF}
        disabled={isDisabled}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>{STRINGS.BUTTON_GENERATE_PDF}</Text>
        )}
      </TouchableOpacity>
      {pdfGenerated && <Text style={styles.statusText}>✓ {STRINGS.PDF_GENERATED}</Text>}
    </View>
  );
};
