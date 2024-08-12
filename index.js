const inputSerach = document.getElementById('input'); 
const displayArea = document.getElementById('display');

document.getElementById('button').addEventListener('click', function(){
   
const  inputValue = inputSerach.value;
    // console.log(inputValue +   ' hii ');
 displayArea.textContent = 'Hello  ' +  inputValue;


  displayArea.style.backgroundColor = "red";

 
});
