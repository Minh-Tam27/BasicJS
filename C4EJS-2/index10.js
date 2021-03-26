let height = prompt('Nhập vào chiều cao của bạn');
let weight = prompt('Nhập vào cân nặng của bạn');
let bmi = 1;
bmi = weight/(height**2);
if (bmi > 30){
  alert('Bạn béo phì òi');
} else if (bmi > 25) {
  alert('Bạn béo phì')
} else if (bmi > 18.5) {
  alert('Bạn bình thường')
} else if (bmi > 16) {
  alert('Bạn thiếu cân')
} else {
  alert ('Bạn thiếu cân trầm trọng')
}