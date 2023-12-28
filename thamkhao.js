for (let i = 0; i < number.length; i++) {
  if(number[i] > max1){
    max3 = max2;
    max2 = max1;
    max1 = number[i];
  }else if(number[i] > max2 && number[i] < max1){
    max3 = max2;
    max2 = number[i];
  }else if(number[i]>max3 && number[i] < max2){
    max3= number[i];
  }
}
