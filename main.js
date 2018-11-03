// Задание №1;
function func1(a, b) {
   return a < b;    
};

console.log(func1(3,4));


// Задание №2;
function func2 (string) {
    return 'Вы ввели: ' + string;
};

console.log(func2('Hello, World!'));


// Задание №3;
function func3(params) {
    if (params === null || undefined){ 
      console.log('Верно!')
    } else {
      console.log('Не верно!')
    };
};


// Задание №4;
function func4(object) {
    object.checked = true;
};



// Задание №5;
function func5(nam) {
    if (nam > 0) {
      for(var a = 0; a <= nam; a++) 
        console.log(a);
    };
    
      for(var a = nam; a <= nam; a--) {
          console.log(a);
      }; 
};
// console.log(func5(5)); 




