import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system/legacy';
import { convertImagesToBase64, generateImagesHtml } from './imageConverter';
import { generatePDFHtmlContent } from './htmlTemplate';

export const generatePDFFromImages = async (imageUris: string[], fileName?: string): Promise<string> => {
  try {
    if (imageUris.length === 0) {
      throw new Error('Please select at least one image first');
    }

    const imageBase64Array = await convertImagesToBase64(imageUris);
    const imagesHtml = generateImagesHtml(imageBase64Array);
    const htmlContent = generatePDFHtmlContent(imagesHtml, imageUris.length);

    const { uri } = await Print.printToFileAsync({
      html: htmlContent,
      base64: false,
    });

    // If a custom filename is provided, copy the PDF to a new location with that name
    if (fileName) {
      const customFileName = fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`;
      const documents = FileSystem.documentDirectory;
      const newUri = `${documents}${customFileName}`;
      
      // Copy the generated PDF to the new location with custom name
      await FileSystem.copyAsync({
        from: uri,
        to: newUri,
      });
      
      return newUri;
    }

    return uri;
  } catch (error) {
    console.error('PDF generation error:', error);
    throw error;
  }
};
