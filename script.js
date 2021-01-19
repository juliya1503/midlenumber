var num1 = +prompt('Введите первое число'), 
    num2 = +prompt('Введите второе число'), 
    num3 = +prompt('Введите третье число'); 
if (num1 > num2 && num1 < num3 || num1 < num2 && num1 > num3) {
    alert('Среднее число: ' + num1);
}
else if (num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3){
    alert('Среднее число: ' + num2)
}else{
    alert('Среднее число: ' + num3)
}