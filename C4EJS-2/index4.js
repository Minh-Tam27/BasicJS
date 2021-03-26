let n = prompt('Hãy nhập số n');
let gt = 1;
for (let i=1; i<=n; i++){
  gt*=i;
}
alert('Giai thừa của ' + n + ' là ' + gt);