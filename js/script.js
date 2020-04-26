class Vyrobok {
  constructor(nazov, pocet) {
    this.nazov = nazov;
    this.pocet = pocet;
  }
}

const schody = new Vyrobok("schody", 5);
const altanok = new Vyrobok("altanok", 1);
const studna = new Vyrobok("studna", 3);
const obklad = new Vyrobok("obklad", 5);

const vyrobky = [schody, altanok, studna, obklad];

$(function(){
  for (const vyrobok of vyrobky) {
    console.log(vyrobok.nazov);
    for(let i = 0; i < vyrobok.pocet; i++) {
      console.log(`${vyrobok.nazov}${i}_400px.jpg`);
    }
    const elem = $(`<div class="${vyrobok.nazov} carousel-wrapper">`);
    const carousel = $(`<div id="carousel_${vyrobok.nazov}" class="carousel slide" data-ride="carousel">`);
    const indicator = $(`<ol class="carousel-indicators">`);
    for(let i = 1; i <= vyrobok.pocet; i++) {
      const li = $(`<li data-target="#carousel_${vyrobok.nazov}" data-slide-to="${i-1}">`);
      if (i === 1) {
        li.addClass('active');
      }
      indicator.append(li);
    }
    carousel.append(indicator);
    const inner = $(`<div class="carousel-inner">`);
    for(let i = 1; i <= vyrobok.pocet; i++) {
      const item_wrapper = $(`<div class="item">`);
      if (i === 1) {
        item_wrapper.addClass('active');
      }
      item_wrapper.append($(`<img src="img/${vyrobok.nazov}${i}_400px.jpg" alt="${vyrobok.nazov}${i}" style="width:100%;">`));
      inner.append(item_wrapper);
    }
    carousel.append(inner);
    const prev = $(`<a class="left carousel-control" href="#carousel_${vyrobok.nazov}" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>`);
    carousel.append(prev);
    const next = $(`<a class="right carousel-control" href="#carousel_${vyrobok.nazov}" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>`);
    carousel.append(next);

    elem.append(carousel);

    $('#carousel-gallery').append(elem);
  }
})
