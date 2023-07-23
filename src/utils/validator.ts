export const cellphoneRegex = new RegExp(
  /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/
);

export const encodeHyphenPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.length > 13) return phoneNumber.slice(0, -1);
  return phoneNumber
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
};

export const decodeHyphenPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/-/g, "");
};
