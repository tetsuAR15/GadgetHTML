/*---------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', (event) => {
    const titlebar = document.querySelector('.Ymove');

    const keyframes = {
        opacity: [0, 1],
        transform: ['translateY(50px)', 'translateY(0)'],
    };
    const options = {
        duration: 2000,
        easing: 'ease',
    };
    titlebar.animate(keyframes, options);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const gridItems = document.querySelectorAll('.grid-container .image_text');
    const keyframes = {
        opacity: [0, 1],
        transform: ['translateX(-50px)', 'translateX(0)']
    };

    gridItems.forEach((item, index) => {
        const options = {
            duration: 1000,
            easing: 'ease',
            delay: index * 300
        };
        const animation = item.animate(keyframes, options);
        animation.onfinish = () => {
            item.style.opacity = 1;
        };
    });
});


document.querySelectorAll('.grid-item').forEach(image => {
    image.addEventListener('mouseover', () => {
      image.style.transform = 'scale(0.9)';
    });
  
    image.addEventListener('mouseout', () => {
      image.style.transform = 'scale(1)';
    });
  });
  

/*----新田製作所---------------------------------------------------------------------------------------------------*/
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu')
  // if (btn.innerHTML === 'メニュー') {
  //   btn.innerHTML = '閉じる';
  // } else {
  //   btn.innerHTML = 'メニュー';
  // }
  // ↑ これと同じ意味の三項演算子での書き方 ↓
  btn.innerHTML = btn.innerHTML === ''
    ? '閉じる'
    : 'メニュー'
});
/*&#9786;*/