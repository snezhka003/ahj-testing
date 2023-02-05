import Valid from './Valid';

export default class Input {
  constructor(idInput, idButton) {
    this.input = document.getElementById(`${idInput}`);
    this.button = document.getElementById(`${idButton}`);
    this.cards = Array.from(document.querySelectorAll('.card'));
  }

  listenerInp() {
    this.input.addEventListener('input', () => {
      this.inpHandler();
      this.input.className = 'input-valid';
    });
  }

  inpHandler() {
    const { value } = this.input;
    if (!value.value) {
      this.cards.forEach((item) => {
        item.classList.remove('active');
      });
    }
    const ident = this.identify(value);
    if (ident) {
      this.changeClass(ident);
    }
  }

  identify(code) {
    this.name = 'identify';
    if (code.startsWith('37') || code.startsWith('34')) {
      return 'amex';
    } if (code.startsWith('31') || code.startsWith('35')) {
      return 'jsb';
    } if (code.startsWith('22')) {
      return 'mir';
    } if (code.startsWith('4')) {
      return 'visa';
    } if (code.startsWith('50')
      || code.startsWith('56') || code.startsWith('57') || code.startsWith('58') || code.startsWith('63') || code.startsWith('67')) {
      return 'maestro';
    } if (code.startsWith('51') || code.startsWith('52') || code.startsWith('53') || code.startsWith('54') || code.startsWith('55')) {
      return 'master';
    } if (code.startsWith('60')) {
      return 'discover';
    } if (code.startsWith('30') || code.startsWith('36') || code.startsWith('38')) {
      return 'dinersclub';
    }
    return false;
  }

  changeClass(nameClass) {
    this.cards.forEach((item) => {
      if (item.classList.contains(`${nameClass}`)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  listenerBtn() {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      this.btnHandler();
    });
  }

  btnHandler() {
    const { value } = this.input;
    const valid = new Valid(value);
    const check = valid.start();

    if (check) {
      this.input.classList.remove('invalid');
      this.input.classList.add('valid');
    } else {
      this.input.classList.remove('valid');
      this.input.classList.add('invalid');
    }
  }

  start() {
    this.listenerInp();
    this.listenerBtn();
  }
}
