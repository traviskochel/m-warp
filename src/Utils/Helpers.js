// just here to initialize the directory, and perhaps use as template
module.exports = {
  randomFloat: function(min, max){
    return Math.random() * (max - min) + min;
  },
  randomInteger: function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  hexToRGBA: function(hex,opacity){
    var hex = hex.replace('#','');
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);

    var result = 'rgba('+r+', '+g+', '+b+', '+opacity+')';
    return result;
  }
}

