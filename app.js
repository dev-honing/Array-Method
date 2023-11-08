const arr = [1, 2, 3];

// Q5. 배열의 일부를 얕은 복사본으로 추출하고 새로운 배열 객체로 반환하는 메서드는 무엇인가요?
// A5. arr.slice(): 배열의 일부(인덱스 번호 혹은 번호와 번호 사이)를 복사본으로 추출
const arrSliced = arr.slice(0, 1);
console.log(arr); // [1, 2, 3] 원본 배열을 손상시키지 않고 추출한다.
console.log(arrSliced); // [1] 요소가 아닌 배열 객체로 반환한다.