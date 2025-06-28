function dailyTemperatures(temperatures) {
    const result = Array(temperatures.length).fill(0);
    const stack = [];
  
    for (let i = 0; i < temperatures.length; i++) {
      while (
        stack.length > 0 &&
        temperatures[i] > temperatures[stack[stack.length - 1]]
      ) {
        const prevIndex = stack.pop();
        result[prevIndex] = i - prevIndex;
      }
  
      stack.push(i);
    }
  
    return result;
  }
  


temperatures = [30,60,90];

console.log(dailyTemperatures(temperatures))