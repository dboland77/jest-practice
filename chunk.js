const chunkArray = (arr,len) => {
  // Initialise chunked array
  const chunkedArray = [];

  //Loop through each array
  arr.forEach(val => {
    //Get last element
    const last = chunkedArray[chunkedArray.length -1];

    //Check if last and if last length is equal to the chunk len
    if(!last || last.length === len){
      chunkedArray.push([val]);
    }else {
      last.push(val);
    }
  })
  return chunkedArray;
}

module.exports = chunkArray;