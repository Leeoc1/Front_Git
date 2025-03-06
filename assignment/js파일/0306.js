// console.log("=======동기방식=======");
// console.log("1. 라면 장보기");
// console.log("2. 물 끓이기");
// console.log("3. 면과 스프넣기");
// console.log("4. 라면 완성");

// console.log("=======비동기방식=======");
// setTimeout(() => {
//   console.log("A. 라면 장보기");
// }, 1000);
// setTimeout(() => {
//   console.log("B. 물 끓이기");
// }, 2000);
// setTimeout(() => {
//   console.log("C. 면과 스프넣기");
// }, 3000);
// setTimeout(() => {
//   console.log("D. 라면 완성");
// }, 4000);

// const 라면_장보기 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("1. 라면 장보기");
//     resolve("라면 장보기 완료");
//   }, 1000);
// });
// 라면_장보기
//   .then((result) => {
//     console.log(result);
//     console.log("물 끓이기");
//     console.log("면과 스프넣기");
//     console.log("맛있게 먹기");
//   })
//   .catch((result) => {
//     console.log(result);
//     console.log("라면 만들기 중단");
//   });

// const 커피_장보기 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("커피 장보기");
//     reject("커피 품절");
//   }, 1000);
// });
// 커피_장보기
//   .then((result) => {
//     console.log("커피 물 끓이기");
//     console.log("커피 넣고 젓기");
//     console.log("커피 마시기");
//   })
//   .catch((result) => {
//     console.log(result);
//     console.log("커피 만들기 중단");
//   });

// const 파스타_장보기 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("no result");
//   }, 1000);
// });

// setTimeout(() => {
//   console.log("라면_장보기: ", 라면_장보기);
//   console.log("커피_장보기: ", 커피_장보기);
//   console.log("파스타_장보기: ", 파스타_장보기);
// }, 1000);

//
const 라면_장보기 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. 라면 장보기");
      resolve("라면 장보기 완료");
    }, 1000);
  });
const 커피_장보기 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("커피 장보기");
      reject("커피 품절");
    }, 1000);
  });
const 약속배려함수 = async () => {
  try {
    const result = await 라면_장보기();
    console.log("물 끓이기");
    console.log("면과 스프넣기");
    console.log("맛있게 먹기");
  } catch (result) {
    console.log(result);
    console.log("라면 만들기 중단");
    return;
  }
  try {
    const result = await 커피_장보기();
    console.log("커피 물 끓이기");
    console.log("커피 넣고 젓기");
    console.log("커피 마시기");
  } catch (result) {
    console.log(result);
    console.log("커피 만들기 중단");
  }
};
약속배려함수();
