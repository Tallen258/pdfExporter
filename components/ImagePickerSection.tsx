import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../styles/App.styles';
import { STRINGS } from '../constants';

interface ImagePickerSectionProps {
  selectedImagesCount: number;
  onImagesSelected: (uris: string[]) => void;
}

export const ImagePickerSection: React.FC<ImagePickerSectionProps> = ({
  selectedImagesCount,
  onImagesSelected,
}) => {
  const pickImages = async () => {
    try {
      const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!granted) {
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.8,
      });

      if (!result.canceled) {
        const imageUris = result.assets.map((asset) => asset.uri);
        onImagesSelected(imageUris);
      }
    } catch (error) {
      console.error('Failed to pick images:', error);
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{STRINGS.SECTION_1_TITLE}</Text>
      <Text style={styles.description}>{STRINGS.SECTION_1_DESC}</Text>
      <TouchableOpacity
        style={[styles.button, styles.generateButton]}
        onPress={pickImages}
      >
        <Text style={styles.buttonText}>{STRINGS.BUTTON_ADD_IMAGES}</Text>
      </TouchableOpacity>
      {selectedImagesCount > 0 && (
        <Text style={styles.statusText}>✓ {selectedImagesCount} {STRINGS.IMAGES_SELECTED}</Text>
      )}
    </View>
  );
};
