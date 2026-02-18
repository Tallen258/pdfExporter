import { useState } from 'react';
import { generatePDFFromImages } from '../utils';
import { STRINGS } from '../constants';

export const usePDFGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [pdfUri, setPdfUri] = useState<string | null>(null);

  const generatePDF = async (selectedImages: string[], fileName?: string) => {
    try {
      if (selectedImages.length === 0) {
        return;
      }

      setLoading(true);
      const uri = await generatePDFFromImages(selectedImages, fileName);
      setPdfUri(uri);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
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
