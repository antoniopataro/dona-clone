const getUserOS = () => {
  if (navigator.userAgent.indexOf("Mac") != -1) return "Mac";
  if (navigator.userAgent.indexOf("Windows") != -1) return "Windows";
  if (navigator.userAgent.indexOf("Linux") != -1) return "Linux";
  return "Other";
};

export default getUserOS;
