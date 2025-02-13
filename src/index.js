// console.log('hello');
// const refs = {
//   input: document.querySelector('.input'),
//   btn: document.querySelector('.btn'),
// };

// refs.btn.addEventListener('click', onBtnClick);

// function onBtnClick() {
//   const name = 'Sv';
//   const num = Math.random() > 0.7;
//   const date = new Date();
//   console.log(num);

//   const message = `hello, ${name} ${num}`;
//   refs.input.value = message;
// }
// !======================================================================
// const button = document.querySelector('button');

// const onClick = () => {
//   const timerId = setTimeout(() => {
//     console.log('I love you!');
//   }, 2000);
//   console.log(timerId);
// };

// button.addEventListener('click', onClick);
// ================================================================
// function createPromise(value, delay) {
//   const promise = new Promise(resolve => {
//     setTimeout(() => {
//       resolve(value);
//     }, delay);
//   });
//   return promise;
// }
// const p1 = createPromise('hello 1', 4000);
// const p2 = createPromise('hello 2', 2000);

// p1.then(data => {
//   console.log(data);
// });
// p2.then(data => {
//   console.log(data);
// });
// ====================================================

// 😍 🍌

const refs = {
  startBtn: document.querySelector('.start-btn'),
  container: document.querySelector('.container'),
  result: document.querySelector('.result'),
};

function getRandomSmile(delay) {
  const smile = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('😍');
      } else {
        reject('🍌');
      }
    }, delay);
  });
  return smile;
}

refs.startBtn.addEventListener('click', () => {
  const promises = [];
  refs.result.textContent = '';
  for (let i = 0; i < 3; i++) {
    refs.container.children[i].textContent = '';
    const s1 = getRandomSmile((i + 1) * 1000);
    s1.then(smile => {
      refs.container.children[i].textContent = smile;
    }).catch(smile => {
      refs.container.children[i].textContent = smile;
    });
    promises.push(s1);
  }
  setTimeout(() => {
    Promise.all(promises)
      .then(() => {
        refs.result.textContent = 'You won';
      })
      .catch(() => {
        refs.result.textContent = 'Try again';
      });
  }, 2500);
});
