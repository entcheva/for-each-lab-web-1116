var iterativeLog = array => {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
};

var iterate = callback => {
  arr = [1, 2, 3, 4, 5, 6];
  arr.forEach(callback);
  return arr;
};

var doToArray = (array, callback) => {
  array.forEach(callback);
};
