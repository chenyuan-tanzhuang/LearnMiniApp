Page({
  data: {
    name: 'cya',
    age: 18,
    counter: 0,
    lists: [
      {id: '001', name: 'xh', age: 18},
      {id: '002', name: 'hy', age: 19},
      {id: '003', name: 'gb', age: 20}
    ]
  },
  handleBtnClick() {
    this.setData({
      counter: this.data.counter + 1
    })
  }
})
