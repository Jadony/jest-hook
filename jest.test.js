import Counter from './Counter';

// const count = new Counter();
// 使用下方两种测试方法会互相影响，先加一后减一，结果永远是0
// test('测试加法', () => {
//   count.add();
//   expect(count.number).toBe(1);
// })

// test('测试减法', () => {
//   count.minus();
//   expect(count.number).toBe(-1);
// })


let count = null;
// 类似于生命周期
// 会在测试用例执行前运行
// beforeAll(() => {
//   console.log('beforeAll')
// });

// // // 会在每个测试用例执行前执行一次，这样就会解决上面互相影响的问题
// beforeEach(() => {
//   console.log('beforeEach')
//   count = new Counter();
// });

// // // 会在每个测试用例执行后执行一次
// afterEach(() => {
//   console.log('afterEach')
// });

// // // 会在所有测试用例结束后运行
// afterAll(() => {
//   console.log('afterAll');
// });

// test('测试加法', () => {
//   console.log('add')
//   count.add();
//   expect(count.number).toBe(1);
// })

// test('测试减法', () => {
//   console.log('minus')
//   count.minus();
//   expect(count.number).toBe(-1);
// })


// describe 方法，可以将测试用例进行分组，更加好维护同类型功能的测试用例
describe('count 测试', () => {
  beforeAll(() => {
    console.log('beforeAll')
  });
  beforeEach(() => {
    console.log('beforeEach')
    count = new Counter();
  });
  afterEach(() => {
    console.log('afterEach')
  });
  afterAll(() => {
    console.log('afterAll');
  });
  
  // 将 add 类型进行分组
  describe('测试 add 类型用例', () => {
    // 在 describe 方法中，钩子函数会按照层级嵌套进行执行，先执行外部，再执行内部，不同的 describe 互不干扰
    beforeEach(() => {
      console.log('beforeEach add');
    });

    // 如果想只执行单个测试用例，可以使用 only 方法
    test('测试加法', () => {
      console.log('add')
      count.add();
      expect(count.number).toBe(1);
    })
  })

  // 将 minus 类型进行分组
  describe('测试 minus 类型用例', () => {
    test('测试减法', () => {
      console.log('minus')
      count.minus();
      expect(count.number).toBe(-1);
    })
  })
})