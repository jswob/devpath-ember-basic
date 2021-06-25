import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from '@ember/array';

export default class XRoutableArrayComponent extends Component {
  @tracked
  names = ['Tom', 'Ned', 'Red'];

  @action
  popLastItem() {
    this.names.pop();

    this.names = this.names;
  }

  @action
  addNewItem() {
    this.names.push('###########');

    this.names = this.names;
  }
}
