export const decode = (image) => {
  const base64String = btoa(String.fromCharCode.apply(null, image.buffer.data));
  return `data:${image.encoding};base64,${base64String}`;
};
