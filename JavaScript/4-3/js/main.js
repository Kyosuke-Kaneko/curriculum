var app = new Vue({
  el: "#app",
  data: {
    // v-if,v-else
    score: 0,
    // v-if
    show: true,
     //newItemを空の状態で用意する。
     newItem: '',
     items: ['item1', 'item2', 'item3'],
    //  v-for
     users: [
      {id: 1, name: 'taro', age: 21},
      {id: 2, name: 'jiro', age: 22},
      {id: 3, name: 'saburo', age: 23},
  ]
    },
     methods: {
      addItem: function() {
          //data内のデータにはthisでアクセスできます
          this.items.push(this.newItem);
      },
      
  }
});