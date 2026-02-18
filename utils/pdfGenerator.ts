import * as Print from 'expo-print';
import { convertImagesToBase64, generateImagesHtml } from './imageConverter';
import { generatePDFHtmlContent } from './htmlTemplate';

export const generatePDFFromImages = async (imageUris: string[]): Promise<string> => {
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

    return uri;
  } catch (error) {
    console.error('PDF generation error:', error);
    throw error;
  }
};
