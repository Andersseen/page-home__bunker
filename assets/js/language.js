const arrLang = {
  'en': {

    // MAIN COVER
    'cover__title' : 'Manufacturer of perimeter intrusion detection systems',
    'cover__subtitle' : 'Perimeter security solutions',
    'cover__text': 'BUNKER Seguridad is a Spanish company, manufacturer of perimeter intrusion detection systems, focused on perimeter detection and security systems. It was founded in 2002: we have worked together with other leading manufacturers and distributors in the outdoor security market worldwide, in order to design and develop a range of products that complement and provide added value to this type of outdoor perimeter security systems',
    'btn__primary' : 'Link a Web',
    'btn__secondary' : 'Link a YouTube',

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

    // MAIN COVER
    'cover__title' : 'Fabricant de systèmes de détection des intrusions dans le périmètre',
    'cover__subtitle' : 'Solutions de sécurité du périmètre',
    'cover__text': '',
    'btn__primary' : '',
    'btn__secondary' : '',

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

    // MAIN COVER
    'cover__title' : 'Fabricante de sistemas de detecção de intrusão perimetral',
    'cover__subtitle' : '',
    'cover__text': '',
    'btn__primary' : '',
    'btn__secondary' : '',

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

    // MAIN COVER
    'cover__title' : 'Produttore di sistemi di rilevamento delle intrusioni perimetrali',
    'cover__subtitle' : '',
    'cover__text': '',
    'btn__primary' : '',
    'btn__secondary' : '',

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

    // MAIN COVER
    'cover__title' : 'Fabricante de sistemas de detección de intrusión perimetral',
    'cover__subtitle' : '',
    'cover__text': '',
    'btn__primary' : '',
    'btn__secondary' : '',

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

  let buttonLink = document.querySelector('.btn__primary');

    if (window.hasOwnProperty('localStorage')) {
        window.localStorage.setItem('lang', lang);
    }
    switch (lang) {
        case 'en':
          languageButtons.forEach(el => {
              el.classList.remove('selected');
          })
          btnLangEn.classList.add('selected');

          buttonLink.href = 'http://www.bunkerseguridad.es/en/';

          break;
        case 'fr':
          languageButtons.forEach(el => {
            el.classList.remove('selected');
        })
        btnLangFr.classList.add('selected');

        buttonLink.href = 'http://www.bunkerseguridad.es/fr/';

          break;
        case 'pt':
          languageButtons.forEach(el => {
            el.classList.remove('selected');
        })
        btnLangPt.classList.add('selected');

        buttonLink.href = 'http://www.bunkerseguridad.es/PT/';

          break;
        case 'it':
          languageButtons.forEach(el => {
            el.classList.remove('selected');
        })
        btnLangIt.classList.add('selected');

        buttonLink.href = 'http://www.bunkerseguridad.es/it/';

          break;
        case 'es':
          languageButtons.forEach(el => {
            el.classList.remove('selected');
        })
        btnLangEs.classList.add('selected');

        buttonLink.href = 'http://www.bunkerseguridad.es/ES/';

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
