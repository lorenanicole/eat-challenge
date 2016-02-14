import template from '../../templates/start-view.handlebars';

class StartView {
  constructor() {
  }

  render() {
    this.el = document.createElement('div');
    this.el.className = 'start-view view';
    this.el.innerHTML = template();

    return this;
  }

}

export default StartView;
