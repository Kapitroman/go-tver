const initYM = () => {
  const map = document.querySelector('#map');

  if(!map) {
    return;
  }

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.746547, 37.628047],
      zoom: 16,
      controls: []
    },
    {
      suppressMapOpenBlock: true
    });

    var myPlacemark = new ymaps.Placemark([55.746547, 37.628047], {
      hintContent: 'Viewpoint Hotel',
      balloonContent: 'Viewpoint Hotel. <br> Садовническая набережная, 7'
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/Yandex_Maps_icon.svg',
      iconImageSize: [30, 30],
      iconImageOffset: [-15, -30]
    });

    myMap.geoObjects.add(myPlacemark)
  });
}

export {initYM};
