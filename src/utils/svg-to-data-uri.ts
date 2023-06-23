const escapeRegExp = (str: string) => {
  return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
};

const replaceAll = (str: string, find: string, replace: string) => {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
};

const svgToDataUri = (svg: string) => {
  let encoded = svg;

  encoded = svg.replace(/\s+/g, " ");
  encoded = replaceAll(encoded, "%", "%25");
  encoded = replaceAll(encoded, "> <", "><"); // normalise spaces elements
  encoded = replaceAll(encoded, "; }", ";}"); // normalise spaces css
  encoded = replaceAll(encoded, "<", "%3c");
  encoded = replaceAll(encoded, ">", "%3e");
  encoded = replaceAll(encoded, '"', "'"); // normalise quotes ... possible issues with quotes in <text>
  encoded = replaceAll(encoded, "#", "%23"); // needed for ie and firefox
  encoded = replaceAll(encoded, "{", "%7b");
  encoded = replaceAll(encoded, "}", "%7d");
  encoded = replaceAll(encoded, "|", "%7c");
  encoded = replaceAll(encoded, "^", "%5e");
  encoded = replaceAll(encoded, "`", "%60");
  encoded = replaceAll(encoded, "@", "%40");

  return "data:image/svg+xml;charset=UTF-8," + encoded.trim();
};

export default svgToDataUri;
