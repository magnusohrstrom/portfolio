var button = document.getElementById('burger');

button.addEventListener('click', openNav);



function openNav(){
  var nav = document.getElementById('overlay');
  nav.classList.toggle('active');
}

function toggleActiveImg(){

  this.classList.toggle('active');
};

var images = document.getElementsByClassName('figure-img');
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click',toggleActiveImg);
}



function toggleActive(e) {
  e.preventDefault();
  var elem = document.getElementsByClassName('half-site');
  var kids = this.parentNode.parentNode.children;
  var removeKids;

  for (var i = 0; i < elem.length; i++) {
    if(elem[i] === this.parentNode.parentNode){
      this.parentNode.parentNode.classList.toggle('active');
      for (var j = 0; j < kids.length; j++) {
        kids[j].classList.toggle('active');
      }

    }
    else{
      elem[i].classList.remove('active');
      removeKids = elem[i].children;
      for (var j = 0; j < removeKids.length; j++) {
        removeKids[j].classList.remove('active');
      }
  }
}
}

var halfsiteH1 = document.getElementsByClassName('half-site-h1');
for (var i = 0; i < halfsiteH1.length; i++) {
  halfsiteH1[i].addEventListener('click',
    toggleActive);
}
