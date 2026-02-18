import { useState } from 'react';
import { Alert } from 'react-native';
import { generatePDFFromImages } from '../utils';
import { STRINGS } from '../constants';

export const usePDFGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [pdfUri, setPdfUri] = useState<string | null>(null);

  const generatePDF = async (selectedImages: string[]) => {
    try {
      if (selectedImages.length === 0) {
        Alert.alert(STRINGS.ALERT_INFO_SELECT, STRINGS.ALERT_INFO_SELECT_MSG);
        return;
      }

      setLoading(true);
      const uri = await generatePDFFromImages(selectedImages);
      setPdfUri(uri);
      Alert.alert(
        STRINGS.ALERT_SUCCESS_PDF,
        `${STRINGS.IMAGES_GENERATED} ${selectedImages.length} image(s)!`
      );
    } catch (error) {
      Alert.alert(STRINGS.ALERT_ERROR_IMAGES, `Failed to generate PDF: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    pdfUri,
    generatePDF,
    setLoading,
    setPdfUri,
  };
};
