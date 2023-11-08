const arr = [];

// Q1. 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환하는 메서드는 무엇인가요?
  // Q1-1. 배열의 끝에 하나 이상의 요소를 추가하는 메서드? //* arr.push()
  // Q1-2. 배열의 새 길이를 반환하는 메서드? //* arr.length
  
  // A1-1. arr.push(): 배열 끝에 요소를 추가하는 메서드
  // A1-1-1. 숫자 추가
  arr.push(0); 
  console.log(arr); // [0]

  // A1-1-2. 문자열 추가
  arr.push("문자열"); 
  console.log(arr); // [0, '문자열']

  // A1-2. arr.length: 배열의 길이를 반환하는 메서드
  console.log(arr.length); // 2