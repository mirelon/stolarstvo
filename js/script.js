class Vyrobok {
  constructor(nazov, pocet, popis, categories) {
    this.nazov = nazov;
    this.pocet = pocet;
    this.popis = popis;
    this.categories = categories;
  }
}

const schody = new Vyrobok("schody", 5, "Interiérové schody z lepeného bukového dreva", ["interier"]);
const altanok = new Vyrobok("altanok", 1, "Záhradný altánok zo smrekového dreva", ["zahradny"]);
const studna = new Vyrobok("studna", 3, "Studňa zo smrekového dreva, presne podľa požiadaviek zákazníka", ["zahradny"]);
const obklad = new Vyrobok("obklad", 6, "Obklady z jaseňového dreva", ["interier"]);
const kvetinac = new Vyrobok("kvetinac", 3, "Kvetináč", ["interier", "zahradny"]);

const vyrobky = [schody, altanok, studna, obklad, kvetinac];

function renderVyrobky() {
  for (const vyrobok of vyrobky) {
    console.log(vyrobok.nazov);
    for(let i = 0; i < vyrobok.pocet; i++) {
      console.log(`${vyrobok.nazov}${i}_400px.jpg`);
    }
    const carousel_wrapper = $(`<div class="carousel-wrapper ${vyrobok.nazov} ${vyrobok.categories.join(" ")}">`);
    const carousel = $(`<div id="carousel_${vyrobok.nazov}" class="carousel slide" data-ride="carousel">`);
    const popis = $(`<div class="popis show_on_hover">${vyrobok.popis}</div>`);
    carousel.append(popis);
    const indicator = $(`<ol class="carousel-indicators show_on_hover">`);
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
    const prev = $(`<a class="left carousel-control show_on_hover" href="#carousel_${vyrobok.nazov}" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>`);
    carousel.append(prev);
    const next = $(`<a class="right carousel-control show_on_hover" href="#carousel_${vyrobok.nazov}" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>`);
    carousel.append(next);

    carousel_wrapper.append(carousel);

    $('#carousel-gallery').append(carousel_wrapper);
  }
}

function bindClicks() {
  $('.category').click(function() {
    $('#categories').hide();
    $(`.${$(this).attr('data-category')}`).show();
  })
  $('#vsetko').click(function() {
    $('#categories').hide();
    $('.carousel-wrapper').show();
  })
  $('h1').click(function() {
    $('#categories').show();
    $('.carousel-wrapper').hide();
  })
}

$(function(){
  renderVyrobky();
  bindClicks();
})
