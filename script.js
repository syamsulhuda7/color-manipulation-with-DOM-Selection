const tombol = document.getElementById('btn');
tombol.addEventListener('click', function() {
    document.body.classList.toggle('bg')
})

// Buat Tombol Baru
const tombolBaru = document.createElement('button');
const isiTombolBaru = document.createTextNode('Random Color')
tombolBaru.appendChild(isiTombolBaru);
tombolBaru.setAttribute('type', 'button');
tombol.after(tombolBaru);

tombolBaru.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';  
});

const redslider = document.querySelector('input[name=red]')
const greenslider = document.querySelector('input[name=green]')
const blueslider = document.querySelector('input[name=blue]')
redslider.addEventListener('input', function() {
    const rnew = redslider.value; 
    const gnew = greenslider.value; 
    const bnew = blueslider.value; 
    document.body.style.backgroundColor = 'rgb( '+rnew+','+gnew+','+bnew+')'
});
greenslider.addEventListener('input', function() {
    const rnew = redslider.value; 
    const gnew = greenslider.value; 
    const bnew = blueslider.value; 
    document.body.style.backgroundColor = 'rgb( '+rnew+','+gnew+','+bnew+')'
});
blueslider.addEventListener('input', function() {
    const rnew = redslider.value; 
    const gnew = greenslider.value; 
    const bnew = blueslider.value; 
    document.body.style.backgroundColor = 'rgb( '+rnew+','+gnew+','+bnew+')'
});

document.body.addEventListener('mousemove', function (event) {
    const xPos = Math.round((event.clientX/window.innerWidth)*255);
    const yPos = Math.round((event.clientY/window.innerHeight)*255);
    const zPos = Math.round((xPos/yPos)*255);
    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+','+zPos+')'
})