for (let i = 0; i < 10; i++) {
  var div = document.createElement('div');
  div.addEventListener('click', fucntion() {
    alert('you clicked on a box' + i);
  });
  document.getElementByTagName('body')[0].appendChild(div);
}

console.log(i);  // return error-
console.log(div);
