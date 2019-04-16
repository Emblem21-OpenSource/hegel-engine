class Faction {
  /**
   * [constructor description]
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  constructor (name) {
    this.name = name
    this.distribution = 0
    this.actors = []
    this.relations = new Map()
    this.sector = undefined
  }

  /**
   * [getName description]
   * @param  {[type]} faction [description]
   * @return {[type]}         [description]
   */
  getName () {
    if (this.sector.leftToRight) {
      return `${this.sector.name} ${this.name}`
    } else {
      return `${this.name} ${this.sector.name}`
    }
  }
}

module.exports = Faction
