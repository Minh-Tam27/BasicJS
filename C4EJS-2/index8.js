let num = prompt('Hãy nhập vào 1 số: ');
if (num.toString() || num == null || num == undefined){
  alert('Nhập lại')
} else {
  if (num%2 == 0){
    alert(num + ' là số chẵn');
  }
  else {
    alert(num + ' là số lẻ');
  }
}