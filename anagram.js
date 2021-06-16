const isAnagram = (str1, str2) => {
  return formatStr(str1) === formatStr(str2);
};

//Helper function
const formatStr = (str) => {
  return str.replace(/[\W]/g, "").toLowerCase().split("").sort().join("");
};

module.exports = isAnagram;
