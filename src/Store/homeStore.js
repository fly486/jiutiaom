/**
 * @author: AnBo
 * @Date: 17/12/27 下午5:24
 */
//@flow
import {action,observable ,computed} from 'mobx';


export default class HomeStore {

  @observable is = false
  constructor(rootStore){
    this.rootStore = rootStore
  };

  set = () => {
    this.is = true
  }
}

