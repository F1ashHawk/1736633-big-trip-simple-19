import Adapter from './adapter';

export default class OfferGroupAdapter extends Adapter {
  /**
   * @param {Partial<OfferGroup>} data
   */
  constructor(data = {}) {
    super();

    this.id = data.type;
    this.items = data.offers;
  }

  /**
   * @override
   * @return {Partial<OfferGroup>}
   */
  toJSON() {
    return {
      'type': this.id,
      'offers': this.items
    };
  }
}
