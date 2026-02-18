export const generatePDFHtmlContent = (
  imagesHtml: string,
  imageCount: number
): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; margin: 0; padding: 20px; background: white; }
          .header { text-align: center; border-bottom: 3px solid #2563eb; padding-bottom: 15px; margin-bottom: 20px; }
          .title { font-size: 28px; font-weight: bold; color: #1f2937; margin: 0; }
          .subtitle { font-size: 14px; color: #6b7280; margin: 5px 0 0 0; }
          .footer { border-top: 2px solid #e5e7eb; padding-top: 15px; margin-top: 30px; text-align: center; font-size: 11px; color: #9ca3af; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">Image Export</h1>
          <p class="subtitle">Generated on ${new Date().toLocaleDateString()}</p>
        </div>
        ${imagesHtml}
        <div class="footer">
          <p>© 2026 PDF Exporter App | Total Images: ${imageCount}</p>
        </div>
      </body>
    </html>
  `;
};
