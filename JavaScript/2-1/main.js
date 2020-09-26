document.body.textContent = 'hello';
//windowオブジェクトの中身をconsole.logで確認してみます。
console.log(window);
//①location.hrefでURLを取得して、変数urlに代入。
let url = window.location.href;
//ブラウザを更新すると、URLが表示されます。
console.log(url);
//せっかくなので、「Hello World」と表示させてみます。
window.alert('Hello World');