export const imageToUrl = (image) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL;

  const fields = image.data.attributes;

  const url = `${baseUrl}${fields.url}`;
  return url;
};

export const twoDecimals = (number) => parseFloat(number).toFixed(2);
