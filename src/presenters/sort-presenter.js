import {sortCallbackMap, sortTitleMap, sortDisabilityMap} from '../maps';
import {findKey} from '../utils';
import Presenter from './presenter';

/**
 * @extends {Presenter<SortView>}
 */
export default class SortPresenter extends Presenter {
  constructor() {
    super(...arguments);

    const options = Object.entries(sortTitleMap).map(([value, title]) => ({value, title}));

    this.view.setOptions(options);
    this.view.setDisability(Object.values(sortDisabilityMap));
    this.updateViewValue();
    this.view.addEventListener('change', this.handleViewSort.bind(this));
  }

  updateViewValue() {
    const sort = this.pointsModel.getSort();
    const sortType = findKey(sortCallbackMap, sort);

    this.view.setValue(sortType);
  }

  handleViewSort() {
    const sortType = this.view.getValue();

    this.navigate('/');
    this.pointsModel.setSort(sortCallbackMap[sortType]);
  }
}
