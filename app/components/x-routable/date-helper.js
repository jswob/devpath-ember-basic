import Component from '@glimmer/component';

export default class XRoutableDateHelperComponent extends Component {
  get currentDate() {
    return new Date();
  }
}
