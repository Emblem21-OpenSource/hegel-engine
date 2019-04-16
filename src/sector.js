const { shuffleArray } = require('./utils')

class Sector {
  /**
   * [constructor description]
   * @param  {[type]} name  [description]
   * @param  {[type]} factions [description]
   * @return {[type]}       [description]
   */
  constructor (name, leftToRight, factions) {
    this.name = name
    this.leftToRight = leftToRight
    this.factions = shuffleArray(factions || [])
    this.factions.forEach(faction => {
      faction.sector = this
    })
  }
}

module.exports = Sector
