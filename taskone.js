function convertFahrToCelsius(cel) {
    if (typeof cel === "number" || typeof cel === "string") {
      return ((cel - 32) / 1.8).toFixed(4);
    } else {
      const content = JSON.stringify(cel);
      return `${content} is not a valid number but a/an ${
        Array.isArray(cel) ? "array" : typeof cel
      }`;
    }
  }
  
  console.log(convertFahrToCelsius(0));
  console.log(convertFahrToCelsius("0"));
  console.log(convertFahrToCelsius([1, 2, 3]));
  console.log(convertFahrToCelsius({ temp: 0 }));
