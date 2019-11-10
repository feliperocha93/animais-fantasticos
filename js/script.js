import Accordion from './modules/accordion';
import DropdownMenu from './modules/dropdown-menu';
import Funcionamento from './modules/funcionamento';
import MenuMobile from './modules/menu-mobile';
import Modal from './modules/modal';
import ScrollAnimacao from './modules/scroll-animacao';
import ScrollSuave from './modules/scroll-suave';
import TabNav from './modules/tabnav';
import initTooltip from './modules/tooltip.js';

import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const clickEvents = ['click', 'touchstart'];

const accordion = new Accordion('[data-anime="accordion"] dt', 'ativo', clickEvents);
accordion.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]', clickEvents);
dropdownMenu.init();

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]', clickEvents, 'active');
menuMobile.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]', clickEvents, 'ativo');
modal.init();

const scrollAnimacao = new ScrollAnimacao('[data-anime="scroll"]', 'scroll', 'ativo');
scrollAnimacao.init();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]', clickEvents);
scrollSuave.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section', clickEvents, 'ativo');
tabnav.init();

initTooltip();
initFetchAnimais();
initFetchBitcoin();
