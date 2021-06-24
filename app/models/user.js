import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('number') age;

  @hasMany('comment') comments;

  get commentsNumber() {
    return this.comments.length;
  }
}
