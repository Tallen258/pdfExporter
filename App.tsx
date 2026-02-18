import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import { useState } from 'react';
import { styles } from './styles/App.styles';
import {
  Header,
  ImagePickerSection,
  SelectedImagesSection,
  GeneratePDFSection,
  SharePDFSection,
  GoogleDriveSection,
} from './components';
import { usePDFGenerator } from './hooks';

export default function App() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const { loading, pdfUri, generatePDF, setLoading } = usePDFGenerator();

  const handleImagesSelected = (newImages: string[]) => {
    setSelectedImages([...selectedImages, ...newImages]);
  };

  const handleRemoveImage = (index: number) => {
    const updated = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updated);
  };

  const handleGeneratePDF = (fileName?: string) => {
    generatePDF(selectedImages, fileName);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <Header />

      <View style={styles.content}>
        <ImagePickerSection
          selectedImagesCount={selectedImages.length}
          onImagesSelected={handleImagesSelected}
        />

        <SelectedImagesSection
          images={selectedImages}
          onRemoveImage={handleRemoveImage}
        />

        <GeneratePDFSection
          selectedImagesCount={selectedImages.length}
          loading={loading}
          pdfGenerated={!!pdfUri}
          onGeneratePDF={handleGeneratePDF}
        />

        <SharePDFSection pdfUri={pdfUri} />

        <GoogleDriveSection
          pdfUri={pdfUri}
          loading={loading}
          onLoadingChange={setLoading}
        />
      </View>
    </ScrollView>
  );
}
