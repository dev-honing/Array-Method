const arr = [1, 2, 3];

// Q2. 배열에서 마지막 요소를 제거하고 그 요소를 반환하는 메서드는 무엇인가요?

// A2. arr.pop(): 마지막 요소를 제거
const lastElement = arr.pop();
console.log(arr); // [1, 2]
console.log(lastElement); // 3