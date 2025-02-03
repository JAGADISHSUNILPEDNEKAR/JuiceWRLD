const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (event) => {
    let xC = event.pageX;
    let yC = event.pageY;

    let spanEl = document.createElement('span');
    spanEl.style.left = xC + 'px';
    spanEl.style.top = yC + 'px';
    spanEl.style.position = 'absolute';
    spanEl.style.pointerEvents = 'none';

    const randomNum = Math.random() * 100;
    spanEl.style.width = randomNum + 'px';
    spanEl.style.height = randomNum + 'px';

    spanEl.style.background = 'url("https://cdn2.iconfinder.com/data/icons/free-1/128/Love__heart_like-512.png")';
    spanEl.style.backgroundSize = 'cover';

    bodyEl.appendChild(spanEl);

    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
