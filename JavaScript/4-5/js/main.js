Vue.component('alert-component', {
  template: `
  <div class="alert" v-on:click="caution">
      アラート！
  </div>
  `,
  methods: {
    caution: function() {
      alert('クリックされました');
    }
  }
});
Vue.component('pocket-money', {
  template: `<h1>{{ money }}円もらいました</h1>`,
  props: ['money']
})
var app = new Vue({
  el: '#app',
  data: {

  }
});
Vue.component('hello-global', {
  template: `<h1>グローバルのコンポーネント</h1>`
})
var app = new Vue({
  el:'#app',
  data: {

  }
})
//ローカルの作り方
var app2 = new Vue({
  el: '#app2',
  components: {
      'hello-local': {
          template: `<h1>ローカルのコンポーネント</h1>`
      }
  }
});
Vue.component('count-component', {
  template: `<button v-on:click="countBtn">+1</button>`,
  methods: {
      countBtn: function() {
          this.$emit('increment')
      }
  }
});
var app = new Vue({
  el: '#app',
  components: {
    'hello-world': {
        template: '<h1>Hello World</h1>'
    }
  },
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function() {
        this.total++;
  }
}
});