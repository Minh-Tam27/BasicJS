let num = prompt('Hãy nhập vào 1 số trong khoảng từ 0 đến 9');
if (num < 0 || num > 9 || num == null || num == undefined || num.toString()){
  alert('Nhập lại!');
} else {
  if (num >= 5){
    alert(num + ' thuộc nửa trên của 9');
  }
  else {
    alert(num + ' thuộc nửa dưới của 9');
  }
}