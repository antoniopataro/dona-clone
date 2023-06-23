const getTime = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    return "morning";
  } else if (hours < 18) {
    return "afternoon";
  } else {
    return "evening";
  }
};

export default getTime;
