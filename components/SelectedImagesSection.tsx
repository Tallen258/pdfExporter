import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles/App.styles';
import { STRINGS } from '../constants';

interface SelectedImagesSectionProps {
  images: string[];
  onRemoveImage: (index: number) => void;
}

export const SelectedImagesSection: React.FC<SelectedImagesSectionProps> = ({
  images,
  onRemoveImage,
}) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Selected Images</Text>
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <View style={styles.imageItem}>
            <Image source={{ uri: item }} style={styles.thumbnail} />
            <View style={styles.imageInfo}>
              <Text style={styles.imageText}>
                {STRINGS.IMAGE_LABEL} {index + 1}
              </Text>
              <TouchableOpacity
                onPress={() => onRemoveImage(index)}
                style={styles.removeButton}
              >
                <Text style={styles.removeButtonText}>{STRINGS.BUTTON_REMOVE}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};
