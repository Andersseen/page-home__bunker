const arrLang = {
  'en': {


    //FOOTER wrapper
    'footer__accept': 'Acceptance of privacy',
    'footer__btn': 'Join now!',

    // FOOTER privacy
    'footer__copyrate': '©2021 Bunker Seguridad Electrónica S.L. All rights reserved',
    'footer__notice': 'Legal Notice',
    'footer__cookies': 'Cookies Policy',
    'footer__privacy': 'Privacy Policy',
  },
  'fr': {

    //FOOTER wrapper
    'footer__accept': 'Acceptation de la vie privée',
    'footer__btn': 'Adhérez maintenant!',

    // FOOTER privacy
    'footer__copyrate': '©2021 Bunker Seguridad Electrónica S.L. Tous droits réservés.',
    'footer__notice': 'Avis juridique',
    'footer__cookies': 'Politique en matière de cookies',
    'footer__privacy': 'Politique de confidentialité',
  },
  'pt': {

    //FOOTER wrapper
    'footer__accept': 'Aceitação da privacidade',
    'footer__btn': 'Junte-se agora!',

    // FOOTER privacy
    'footer__copyrate': '©2021 Bunker Seguridad Electrónica S.L. Todos os direitos reservados.',
    'footer__notice': 'Aviso legal',
    'footer__cookies': 'Política de Cookies',
    'footer__privacy': 'Política de Privacidade',
  },
  'it': {

    //FOOTER wrapper
    'footer__accept': 'Accettazione della privacy',
    'footer__btn': 'Partecipa ora!',

    // FOOTER privacy
    'footer__copyrate': '©2021 Bunker Seguridad Electrónica S.L. Tutti i diritti riservati.',
    'footer__notice': 'Avviso legale',
    'footer__cookies': 'Politica dei cookie',
    'footer__privacy': 'Politica sulla privacy',
  },
  'es': {

    //FOOTER wrapper
    'footer__accept': 'Aceptación de la privacidad',
    'footer__btn': '¡Únase ahora!',

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
    if (window.hasOwnProperty('localStorage')) {
        window.localStorage.setItem('lang', lang);
    }
    switch (lang) {
        case 'en':
          languageButtons.forEach(el => {
              el.classList.remove('selected');
          })
          btnLangEn.classList.add('selected');
          break;
        case 'fr':
          languageButtons.forEach(el => {
            el.classList.remove('selected');
        })
        btnLangFr.classList.add('selected');
          break;
        case 'pt':
          languageButtons.forEach(el => {
            el.classList.remove('selected');
        })
        btnLangPt.classList.add('selected');
          break;
        case 'it':
          languageButtons.forEach(el => {
            el.classList.remove('selected');
        })
        btnLangIt.classList.add('selected');
          break;
        case 'es':
          languageButtons.forEach(el => {
            el.classList.remove('selected');
        })
        btnLangEs.classList.add('selected');
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