/*
 * @Author: 安风 jiadongyao@cai-inc.com
 * @Date: 2023-02-28 15:37:36
 * @LastEditors: 安风 jiadongyao@cai-inc.com
 * @LastEditTime: 2023-02-28 15:38:54
 * @FilePath: /auto-test-jest-learn/jest中的钩子函数/Counter.js
 * @Description: 
 */

class Counter {
  constructor() {
    this.number = 0;
  }

  add() {
    this.number += 1;
  }

  minus() {
    this.number -= 1;
  }
}

export default Counter;