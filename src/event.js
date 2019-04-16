class Event {
  /**
   * [constructor description]
   * @param  {[type]} date        [description]
   * @param  {[type]} event       [description]
   * @param  {[type]} description [description]
   * @param  {[type]} types       [description]
   * @param  {[type]} transaction [description]
   * @return {[type]}             [description]
   */
  constructor (date, from, ally, against, impact, animosity) {
    this.date = `${date.getMonth()} + 1 / ${date.getDate()} / ${date.getFullYear()}`
    this.from = from
    this.ally = ally
    this.against = against
    this.impact = impact
    this.animosity = animosity
  }

  process () {

  }
}

module.exports = Event
