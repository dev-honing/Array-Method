const arr = [1, 2, 3];

// Q6. 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경하는 메서드는 무엇인가요?

// A6. arr.splice(): 배열의 요소를 삭제, 교체, 추가가 가능
arr.splice(1, 1, 4, 5); // 배열의 인덱스 1을 삭제하고, 4와 5를 추가하기
console.log(arr);

// 추가학습
const fruits = ['사과', '바나나', '오렌지', '키위'];

// 인덱스부터 1에서 2개의 요소를 삭제하고, '체리'와 '수박'을 추가해보기'
const fruitsSpliced = fruits.splice(1, 2, '체리', '수박');
console.log(fruitsSpliced); // ['바나나', '오렌지']
console.log(fruits); ['사과', '체리', '수박', '키위'];