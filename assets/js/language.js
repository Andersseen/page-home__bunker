const arrLang = {
  'en': {
    'header__language': 'Choose your language!',

    // MAIN COVER
    'cover__title' : 'Perimeter protection',
    'cover__text-1': 'Bunker Seguridad Electrónica S.L. is a Spanish company, manufacturer of perimeter detection systems, specialised in photoelectric beam towers and anti-intrusion systems.',
    'cover__text-2': 'We distribute Security, Intrusion Detection, Data transmission and Video Analytics Solutions. Our close collaboration with the most prestigious brands in the international security market makes it possible for us to offer the most suitable technology for different levels of security and specific needs.',
    'btn__primary' : 'Web Site',
    'btn__secondary' : 'YouTube channel',

    //FOOTER wrapper
    'footer__accept': 'Acceptance of privacy',
    'footer__btn': 'Join now!',
    'footer__checkbox' : 'I confirm that I have read and agree to the terms and conditions and',

    // FOOTER privacy
    'footer__copyrate': '©2021 Bunker Seguridad Electrónica S.L. All rights reserved',
    'footer__notice': 'Legal Notice',
    'footer__cookies': 'Cookies Policy',
    'footer__privacy': 'Privacy Policy',
  },
  'fr': {
    'header__language': 'Choisissez votre langue !',

    // MAIN COVER
    'cover__title' : 'Protection du périmètre',
    'cover__text-1': 'A Bunker Seguridad Electrónica S.L. é uma empresa espanhola, fabricante de sistemas de detecção de perímetro, especializada em torres de feixe fotoeléctrico e sistemas anti-intrusão.',
    'cover__text-2': 'Distribuímos Soluções de Segurança, Detecção de Intrusão, Transmissão de Dados e Análise de Vídeo. A nossa estreita colaboração com as marcas mais prestigiadas no mercado internacional de segurança permite-nos oferecer a tecnologia mais adequada para diferentes níveis de segurança e necessidades específicas.',
    'btn__primary' : 'Site Web',
    'btn__secondary' : 'Chaîne YouTube',

    //FOOTER wrapper
    'footer__accept': 'Acceptation de la vie privée',
    'footer__btn': 'Adhérez maintenant!',
    'footer__checkbox' : 'Je confirme que jai lu et que jaccepte les termes et conditions et',

    // FOOTER privacy
    'footer__copyrate': '©2021 Bunker Seguridad Electrónica S.L. Tous droits réservés.',
    'footer__notice': 'Avis juridique',
    'footer__cookies': 'Politique en matière de cookies',
    'footer__privacy': 'Politique de confidentialité',
  },
  'pt': {
    'header__language': 'Escolha a sua língua!',

    // MAIN COVER
    'cover__title' : 'Protecção perimetral',
    'cover__text-1': 'Bunker Seguridad Electrónica S.L. is a Spanish company, manufacturer of perimeter detection systems, specialised in photoelectric beam towers and anti-intrusion systems.',
    'cover__text-2': 'We distribute Security, Intrusion Detection, Data transmission and Video Analytics Solutions. Our close collaboration with the most prestigious brands in the international security market makes it possible for us to offer the most suitable technology for different levels of security and specific needs.',
    'btn__primary' : 'Sítio Web',
    'btn__secondary' : 'Canal YouTube',

    //FOOTER wrapper
    'footer__accept': 'Aceitação da privacidade',
    'footer__btn': 'Junte-se agora!',
    'footer__checkbox' : 'I confirm that I have read and agree to the terms and conditions and',

    // FOOTER privacy
    'footer__copyrate': '©2021 Bunker Seguridad Electrónica S.L. Todos os direitos reservados.',
    'footer__notice': 'Aviso legal',
    'footer__cookies': 'Política de Cookies',
    'footer__privacy': 'Política de Privacidade',
  },
  'it': {
    'header__language': 'Scegliete la vostra lingua!',

    // MAIN COVER
    'cover__title' : 'Protezione perimetrale',
    'cover__text-1': 'Bunker Seguridad Electrónica S.L. is a Spanish company, manufacturer of perimeter detection systems, specialised in photoelectric beam towers and anti-intrusion systems.',
    'cover__text-2': 'We distribute Security, Intrusion Detection, Data transmission and Video Analytics Solutions. Our close collaboration with the most prestigious brands in the international security market makes it possible for us to offer the most suitable technology for different levels of security and specific needs.',
    'btn__primary' : 'Sito web',
    'btn__secondary' : 'Canale YouTube',

    //FOOTER wrapper
    'footer__accept': 'Accettazione della privacy',
    'footer__btn': 'Partecipa ora!',
    'footer__checkbox' : 'Confermo di aver letto e accettato i termini e le condizioni e',

    // FOOTER privacy
    'footer__copyrate': '©2021 Bunker Seguridad Electrónica S.L. Tutti i diritti riservati.',
    'footer__notice': 'Avviso legale',
    'footer__cookies': 'Politica dei cookie',
    'footer__privacy': 'Politica sulla privacy',
  },
  'es': {
    'header__language': '¡Elija su idioma!',

    // MAIN COVER
    'cover__title' : 'Protección perimetral',
    'cover__text-1': 'Bunker Seguridad Electrónica S.L. es una empresa española, fabricante de sistemas de detección perimetral, especializada en columnas perimetrales para barreras de infrarrojos y sistemas anti-intrusión.',
    'cover__text-2': 'Distribuimos soluciones de seguridad, detección de intrusos, transmisión de datos y video análisis. Nuestra estrecha colaboración con las marcas más prestigiosas del mercado internacional de seguridad nos permite ofrecer la tecnología más adecuada para los diferentes niveles de seguridad y necesidades específicas.',
    'btn__primary' : 'Sitio Web',
    'btn__secondary' : 'YouTube canal',

    //FOOTER wrapper
    'footer__accept': 'Aceptación de la privacidad',
    'footer__btn': '¡Únase ahora!',
    'footer__checkbox' : 'Confirmo que he leído y acepto las condiciones y',

    // FOOTER privacy
    'footer__copyrate': '©2021 Bunker Seguridad Electrónica S.L. Todos los derechos reservados',
    'footer__notice': 'Aviso legal',
    'footer__cookies': 'Política de cookies',
    'footer__privacy': 'Política de privacidad',
  }
};


const languageButtons = document.querySelectorAll('.header__item');

const btnLangEn = document.getElementById('lang__en');
const btnLangFr = document.getElementById('lang__fr');
const btnLangPt = document.getElementById('lang__pt');
const btnLangIt = document.getElementById('lang__it');
const btnLangEs = document.getElementById('lang__es');

btnLangEn.addEventListener('click', setLang.bind(null, 'en'));
btnLangFr.addEventListener('click', setLang.bind(null, 'fr'));
btnLangPt.addEventListener('click', setLang.bind(null, 'pt'));
btnLangIt.addEventListener('click', setLang.bind(null, 'it'));
btnLangEs.addEventListener('click', setLang.bind(null, 'es'));


function setLang(lang) {

  let buttonsLinks = document.querySelectorAll('.btn__primary');

    if (window.hasOwnProperty('localStorage')) {
        window.localStorage.setItem('lang', lang);
    }
    switch (lang) {
        case 'en':
          languageButtons.forEach(el => {
              el.classList.remove('selected');
          })
          btnLangEn.classList.add('selected');

          buttonsLinks.forEach(el =>{
            el.href = 'http://www.bunkerseguridad.es/en/';
          })
          
          break;
        case 'fr':
          languageButtons.forEach(el => {
            el.classList.remove('selected');
        })
        btnLangFr.classList.add('selected');

        buttonsLinks.forEach(el =>{
          el.href = 'http://www.bunkerseguridad.es/fr/';
        })

          break;
        case 'pt':
          languageButtons.forEach(el => {
            el.classList.remove('selected');
        })
        btnLangPt.classList.add('selected');

        buttonsLinks.forEach(el =>{
          el.href = 'http://www.bunkerseguridad.es/PT/';
        })

          break;
        case 'it':
          languageButtons.forEach(el => {
            el.classList.remove('selected');
        })
        btnLangIt.classList.add('selected');

        buttonsLinks.forEach(el =>{
          el.href = 'http://www.bunkerseguridad.es/it/';
        })
          break;
        case 'es':
          languageButtons.forEach(el => {
            el.classList.remove('selected');
        })
        btnLangEs.classList.add('selected');

        buttonsLinks.forEach(el =>{
          el.href = 'http://www.bunkerseguridad.es/ES/';
        })

          break;
        default:
          alert(('error'))
      }

      let links = document.querySelectorAll('.lang');
    links.forEach(el => {
        el.innerText = arrLang[lang][el.getAttribute('key')];
    })

}

var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
setLang(lang);
