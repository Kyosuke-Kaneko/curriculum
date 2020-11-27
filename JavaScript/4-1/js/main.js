var app = new Vue({
  el: '#app',
  data: {
      list: [],
      addText: '',
      keyword: '',
      searchedList: []
  },
  //watchでlistの変更を監視
  watch: {
      list: {
          handler: function() {
              //localStorageにデータを保存
              localStorage.setItem("list", JSON.stringify(this.list));
          },
          deep: true
      }
  },
  //マウントされた時にlocalStorageからデータを取得
  mounted: function() {
      this.list = JSON.parse(localStorage.getItem("list")) || [];
  },
  methods: {
      addToDo: function() {
          if (this.addText !== '') {
              this.list.push({
                  text: this.addText,
                  isChecked: false,
                  isSearched: true
              });
          }
          this.addText = '';
      },
      deleteBtn: function() {
          this.list = this.list.filter(function(todo) {
              return !todo.isChecked;
          });
      },
      searchKeyword: function() {
        var keyword = this.keyword;
        this.list.forEach(function(item) {
          if (item.text.indexOf(keyword) !== -1) {
            item.isSearched = true;
          } else {
            item.isSearched = false;
          }
        });
      }
  },
  computed: {
    leftTask: function() {
      var items = this.list.filter(function(todo){
        return !todo.isChecked;
      });
      return items.length;
    }
  }
})
