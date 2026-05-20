
document.addEventListener('click', (clickEvent) => {
const image = document.createElement('img');
image.src = './assets/356YcK59_400x400.jpg';
image.style.position = 'absolute'
image.style.left = clickEvent.clientX + 'px';
image.style.top = clickEvent.clientY + 'px';
    console.log('coord X',clickEvent.pageX);
    console.log('coord Y',clickEvent.pageY);
    console.log('coord X',clickEvent.x);
    console.log('coord Y',clickEvent.y);
    document.body.append(image)
});
console.log(document)