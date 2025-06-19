onmessage = function () {
  const numberData = [];

  for (let number = 0; number < 1_000_000; number++) {
    numberData.push(Math.sqrt(number * Math.random() * Math.random()));
  }

  this.postMessage(numberData);
};
