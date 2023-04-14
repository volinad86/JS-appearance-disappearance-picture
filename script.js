const img = document.querySelector('img');
const button = document.querySelector('.btn');
const button2 = document.querySelector('.btn2');

button.addEventListener ("click", function(){
    img.style.display = 'block';
})
button.addEventListener ("click", function(){
    button.style.display = 'none';
})
button.addEventListener ("click", function(){
    button2.style.display = 'block';
})

button2.addEventListener ("click", function(){
    img.style.display = 'none';
})
button2.addEventListener ("click", function(){
    button.style.display = 'block';
})
button2.addEventListener ('click', function(){
    button2.style.display = 'none';
})