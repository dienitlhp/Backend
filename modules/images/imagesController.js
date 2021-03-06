const fs = require('fs');

var fetchImageCollection = () => {
  //doc du lieu tu file imageData
  var imageInfoCollection = [];
  try{
    var contents = fs.readFileSync('imageData.json','utf-8');
    imageInfoCollection = JSON.parse(contents);
  } catch(e) {
    console.log(e);
  }
  return imageInfoCollection;
}

var saveImageCollection = (data) =>{
  fs.writeFileSync('imageData.json', JSON.stringify(data));
}

module.exports = {
  fetchImageCollection : fetchImageCollection,
  saveImageCollection : saveImageCollection
}
