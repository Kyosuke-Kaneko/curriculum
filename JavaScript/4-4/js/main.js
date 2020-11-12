var vm = new Vue({
  el: '#app',
  data: {
    lastName: '',
    firstName: '',
    counter: 0,
    unrelated: 0,
    item1: '',
    item2: ''
  },
  computed: {
   fullName: function () {
      return this.lastName + ' ' + this.firstName
    },
    data: function() {
      console.log("computed");
      return Math.random();
    },
    lessThanThree: function() {
      return this.counter > 3 ? '3以上' : '3以下'
    },
    total: function() {
      return Number(this.item1) + Number(this.item2);
  }
  },
  methods: {
    getData: function() {
        console.log("method");
        return Math.random();
    },
    counterBtn: function() {
      this.counter++;
    },
    lessThanThreeMethod: function() {
      return this.counter > 3 ? '3以上' : '3以下';
    },
    unrelatedBtn: function() {
      this.unrelated++;
    }
}
})