import * as Http from '../http';
import {URL} from '../constants';
import * as actions from '../actionCreator/home'

export default class newAPI {
  static getJsonData() {
    return Http.fetchGet(URL.URL_GET_JSON, {}, actions.getJsonData);
  }
  static getLocation() {
    return Http.apiLocation(actions.getLocation);
  }
}