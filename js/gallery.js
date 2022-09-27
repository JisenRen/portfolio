let pictures = ['Blue hills', 'Sunset', 'Water lilies', 'Winter'];
let current = 0;
function setImage(id) {
    let picture = document.getElementById('picture');
    picture.innerHTML = `<img src="/img/${pictures[id]}.jpg" alt="${pictures[id]}">`;
    for (let i=0; i<4; i++) {
        let thumb = document.getElementById('pic'+i);
        if (i===current) {
            thumb.style.opacity = '80%';
            thumb.style.borderWidth = '3px';
        } else {
            thumb.style.opacity = '40%';
            thumb.style.borderWidth = '1px';
        }
    }
}
function previous() {
    if (current>0) current--;
    setImage(current);
}
function next() {
    if (current<3) current++;
    setImage(current);
}
