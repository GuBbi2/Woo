
$(function () {
  $('#full_page').fullpage({
    anchors: ['home', 'about', 'projects', 'contact'],
    navigation: true,
    navigationPosition: 'right',
    slidesNavigation: true,
    responsiveWidth: 2000,
  })
  
  $(window).scroll(function() {
    // 만약에 스크롤이 200px 이상했다면
    // gotop이 보이기
    if ($(window).scrollTop() >= 400) {
      // $('.gotop').show()
      $('.gotop').fadeIn(500)
      $('body').addClass('on')
    } 
    else if($(window).scrollTop() >= 150){
      changeSydney()
      changeSun(60,`153,34,255`,`255,34,153`,`Sydney`)
    }
    else {
      // $('.gotop').hide()
      $('.gotop').fadeOut(500)
      $('body').removeClass('on')
      changeToronto()
      changeSun(60,`252,199,56`,`139,15,157`,`Toronto`)
    }
    // 아니면
    // gotop 숨기기
    
  })

  $('.gotop').click(function (e) {
    e.preventDefault()
    // 이벤트 차단, 막기
    $('html, body').stop().animate({
      scrollTop: 0
    }, 50)
  })

  $('.hamburger').click(function(){
    $('.mobile-nav').toggle()
  })
})




document.querySelector('#wrapper').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});

const paths = [
  'M406 180.54H3.93682V167.996H9.34994V160.548H13.2868V144.867H18.6999V99.3942L23.6209 98.2181V97.0421H37.3998V98.2181L42.8129 99.3942V153.099H45.7655V160.548H47.7339V147.219H55.6075V115.467H63.9733V109.978H66.9259V115.467H68.8943V114.29H74.7995V115.467H78.7363V141.731H85.1337V134.675H86.1179V131.539H87.5942V134.675H90.5468V133.499H93.0073V134.675H95.4678V153.099H98.4204V166.036H100.881V132.323H111.707V116.251H124.502V117.427L127.454 118.603H130.407V130.363H132.375V161.332H135.82V146.435H140.741V140.555H157.965V167.212H159.933V156.627H162.886C219.478 113.114 267.704 156.627 267.704 156.627H270.656V162.508L274.101 161.332V138.203H286.403V155.451H288.864V134.283H293.785V133.499H299.198L302.643 131.147L306.087 133.499H307.072V134.283H310.024V159.371H311.501V156.235H313.961V124.091H319.374V122.523L320.851 121.739H324.787L325.772 122.523V124.091H331.185V140.555H333.645V154.275H337.09L340.043 75.4816H337.09L335.122 72.7376H333.645V70.3855H332.661V65.6814H336.106V64.5054H339.058L340.043 36.6728H339.058V34.7127H340.043L342.503 1L343.979 34.7127H344.964V36.6728H343.979L344.964 64.5054H347.424V65.6814H351.853V70.3855H350.869V72.7376H348.9L347.424 75.4816H343.979L347.424 155.451H349.885V161.332H353.329V124.091L361.695 121.739L370.061 124.091V125.659H374.982V161.332H378.919L399.095 168.388V182.5H405M132.375 164.468V172.308H136.312V164.468H132.375Z',
  'M406 185.632L16.9803 176.743L19.4772 145.287H24.9704L27.9667 140.5H35.9568V154.86L41.9494 158.963L53.4353 154.86C53.756 148.045 52.7359 144.994 49.4402 140.5C62.9432 137.616 69.9468 139.085 80.9014 150.074C94.8992 122.594 103.11 114.568 118.355 112.463C112.876 126.809 111.263 132.751 110.365 140.5C118.765 130.67 123.702 128.201 132.837 128.191C130.149 134.62 129.194 138.346 128.842 145.287C139.408 139.628 145.027 138.321 154.311 140.5C147.935 147.051 145.904 151.135 144.323 158.963H162.8V104.941H182.276V121.353H192.264V140.5H197.757V145.287H201.253V149.39H205.248V83.0588H208.744V43.3971H226.721V125.456H229.218V173.324H233.213V152.809H240.205L239.206 26.3015H240.704V15.3603H241.703V10.5735H254.687V16.7279H256.185V26.3015H258.682V102.89H260.679V96.0515H266.672V102.89H272.165V39.9779L293.639 60.4926V163.75H297.634V26.3015L302.628 29.7206V41.3456L312.615 48.1838L313.614 135.029H319.107V152.809H324.101V90.5809H326.099V52.9706L345.575 90.5809V165.801H349.07V171.272H355.562V154.86H362.554V27.6691H360.057H359.058V17.4118H361.055V8.52206H363.552V1H365.051V8.52206H367.048V17.4118H369.046V27.6691H365.051V154.86H368.047V137.765H378.035V143.919H383.028V150.074H389.021V176.059H393.515V183.581L399.508 185.632H405.001L406 187'
]

const config = {
  duration: 1000
}

const colors = [
  '#FAED27',
  '#FF8C0A'
];

let s = Snap("#svg-container").attr({
  viewBox: '0 0 410 150',
  width: 540,
  height: 200
});

let p = s.path(paths[0]).attr({
  'fill': '#000',
  'strokeWidth': 2,
  'stroke': colors[0]
});

function changeToronto(a, b, c, loc) {
  changeSun(a, b, c, loc);
  p.animate({
    d: paths[(paths, 0)],
    stroke: colors[(colors, 0)]
  }, config.duration, mina.easeinout);
}
function changeSydney(a, b, c, loc) {
  changeSun(a, b, c, loc);
  p.animate({
    d: paths[(paths, 1)],
    stroke: colors[(colors, 1)]
  }, config.duration, mina.easeinout);
}

function makeGradientLines(length, top, bottom, i, loc) {
  let numOfstripes = length,
    gradientTop = top.split(','),
    gradientBottom = bottom.split(','),
    stripeContainer = document.getElementsByClassName('stripes-wrapper')[0],
    stripe = document.getElementsByClassName('stripe'),
    rgbVal = gradientTop,
    newRgbVal = [],
    location = loc;

  let difference = [Number(Math.round((gradientTop[0] - gradientBottom[0]) / numOfstripes * i * -1)),
  Number(Math.round((gradientTop[1] - gradientBottom[1]) / numOfstripes * i * -1)),
  Number(Math.round((gradientTop[2] - gradientBottom[2]) / numOfstripes * i * -1))];

  newRgbVal = [Number(rgbVal[0]) + difference[0], Number(rgbVal[1]) + difference[1], Number(rgbVal[2]) + difference[2]];

  stripe[i].style.backgroundColor = `rgb(${newRgbVal})`;
  stripe[i].setAttribute("location", location);

  if (numOfstripes == i - 1) {
    document.querySelectorAll('.stripe').forEach(function (a) {
      if (a.getAttribute('location') != location) {
        a.remove()
      }
    })
  }
}
function changeSun(length, topColor, botColor, loc) {
  let i = 0;
  let drawLines = setInterval(() => {
    makeGradientLines(length, topColor, botColor, i);
    i++;
    if (i == length) {
      clearInterval(drawLines);
      i = 0;
    }
  }, 50);
}

changeToronto(60, '252,199,56', '255,34,153', 'Toronto')