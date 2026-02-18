import * as FileSystem from 'expo-file-system/legacy';

export const convertImagesToBase64 = async (imageUris: string[]): Promise<string[]> => {
  const imagePromises = imageUris.map(async (uri) => {
    try {
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: 'base64',
      });
      return `data:image/jpeg;base64,${base64}`;
    } catch (err) {
      console.error('Error reading image:', err);
      throw err;
    }
  });

  return Promise.all(imagePromises);
};

export const generateImagesHtml = (imageBase64Array: string[]): string => {
  let imagesHtml = '';
  imageBase64Array.forEach((image, index) => {
    imagesHtml += `<div style="page-break-inside: avoid; text-align: center; margin: 0 0 5px 0;"><img src="${image}" style="max-width: 100%; height: auto; display: block;" /><p style="color: #6b7280; font-size: 12px; margin: 3px 0 0 0;">Image ${index + 1}</p></div>`;
  });
  return imagesHtml;
};
