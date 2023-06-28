var styles = {
    //styles
    'bold' : ['\033[1m', '\033[22m'],
    'italic' : ['\033[3m', '\033[23m'],
    'underline' : ['\033[4m', '\033[24m'],
    'inverse' : ['\033[7m', '\033[27m'],
    //grayscale
    // TODO: 1. Redefine correct colors as original project.
    // TODO: 2. Replace usage of direct colors (white/gray/...) by message type (info/error/emphased/...) in the entire project.
    // TODO: 3. Select the correct color palette for dark or light background.
    'white' : ['\033[34m', '\033[39m'], // replace white by blue
    'gray' : ['\033[37m', '\033[39m'], // replace gray by white
    'black' : ['\033[30m', '\033[39m'],
    //colors
    'blue' : ['\033[34m', '\033[39m'],
    'cyan' : ['\033[36m', '\033[39m'],
    'green' : ['\033[32m', '\033[39m'],
    'magenta' : ['\033[35m', '\033[39m'],
    'red' : ['\033[31m', '\033[39m'],
    'yellow' : ['\033[33m', '\033[39m']
  };

module.exports = function(str, style) {
  return styles[style][0] + str + styles[style][1];
};
