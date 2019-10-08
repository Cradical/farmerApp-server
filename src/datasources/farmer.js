import { DataSource } from 'apollo-datasource'

export default class FarmerAPI extends DataSource {
  constructor({ store }) {
    super()
    this.store = store
  }

  initialize(config) {
    this.context = config.context
  }
}
