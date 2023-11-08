const arr = [1, 2, 3];

// Q3. 배열에서 첫 번째 요소를 제거하고 그 요소를 반환하는 메서드는 무엇인가요?
// A3. arr.shift(): 배열의 첫 번째 요소를 제거
const firstElement = arr.shift();
console.log(arr); // [2, 3]
console.log(firstElement); // 1