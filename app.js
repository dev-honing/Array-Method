const arr = [1, 2, 3];

// Q4. 배열의 시작에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환하는 메서드는 무엇인가요?
// A4. arr.unshift(): 배열의 시작에 요소를 추가
arr.unshift(0);
console.log(arr) // [0, 1, 2, 3]
console.log(arr.length); // 4