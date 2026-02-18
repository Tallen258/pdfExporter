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
    imagesHtml += `
      <div style="page-break-inside: avoid; text-align: center; margin-bottom: 30px;">
        <img src="${image}" style="max-width: 100%; height: auto; border: 1px solid #e5e7eb; border-radius: 8px;" />
        <p style="color: #6b7280; font-size: 12px; margin-top: 8px;">Image ${index + 1}</p>
      </div>
    `;
  });
  return imagesHtml;
};
