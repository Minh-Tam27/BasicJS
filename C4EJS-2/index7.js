let n = prompt('Hãy nhập số n');
let num = prompt('Hãy nhập vào 1 số trong khoảng từ 0 đến ' + n);
if (num < 0 || num > n || num == null || num == undefined || num.toString()){
  alert('Nhập lại!');
} else {
  if (num >= Math.floor(n/2)){
    alert(num + ' thuộc nửa trên của ' + n);
  }
  else {
    alert(num + ' thuộc nửa dưới của ' + n);
  }
}