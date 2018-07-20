import MaskInput from 'mask-input';


export default class UIController {
  constructor() {
    this.cardInput = document.getElementById('card');
  }
}

this.initCardInput();
this.initNameInput();


}

const maskInput = new MaskInput(tis.cardInput, {
  mask: '0000-0000-0000-0000',
  alwaysShowMask: true,
  maskChar: '_',
  onChange: () => {
    const result = /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(this.nameInput.value);
    let color;

    is (result) {
      color = 'green';
    } else {
      color = 'red';
    }
    this.nameInput.style
  }
});