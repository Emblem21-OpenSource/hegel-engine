/**
 * [shuffleArray description]
 * @param  {[type]} array [description]
 * @return {[type]}       [description]
 */
function shuffleArray (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

class HegelEngine {
  /**
   * [constructor description]
   * @param  {[type]} categories [description]
   * @return {[type]}            [description]
   */
  constructor (startDate, endDate, categories) {
    this.categories = categories || defaultCategories
    this.startDate = new Date(startDate)
    this.endDate = new Date(endDate)
    this.currentDate = this.startDate
    this.timeline = []
    this.factionsCache = []

    this.categories.forEach(category => {
      this.factionsCache = this.factionsCache.concat(category.factions)
    })
  }

  /**
   * [tick description]
   * @param  {Number} days [description]
   * @return {[type]}      [description]
   */
  tick (days = 1) {
    const events = []
    this.categories.forEach(category => {
      // Go through all categories

      category.factions.forEach((faction, i) => {
        const candidates = []

        faction.relations.forEach((animosity, against) => {
          if (animosity > 0) {
            const impact = Math.random()

            if (impact < animosity) {
              // Animosity has boiled over, generate a conflict event through a category
              for (var i = 0, len = this.factionsCache.length; i < len; i++) {
                const domain = this.factionsCache[i]

                if (domain === faction) {
                  continue
                } else {
                  // Check if the faction relations
                  const relations = domain.relations.get(faction)
                  if (relations === undefined) {
                    // The domain has no relations with the attacking faction
                    candidates.push(domain)
                  } else if (relations < impact) {
                    // Impact doesn't threaten relations
                    candidates.push(domain)
                  }
                }
              }

              var ally = candidates[Math.floor(Math.random() * candidates.length)]
              events.push(new Event(this.currentDate, faction, ally, against, impact, animosity))
            }
          }
        })
      })
    })

    // Execute all events
    events.forEach(event => {
      const defenses = Math.ceil((event.animosity - event.impact) * 10)
      const attacks = Math.ceil(event.impact * 10)
      const drain = attacks - defenses

      if (drain > 0) {
        const percentage = drain / 100
        const spoils = Math.random()
        const fromPercentage = percentage * spoils
        const allyPercentage = percentage * (1 - spoils)

        const fromAgainstRelations = event.from.relations.get(event.against) || 0
        const fromAllyRelations = event.from.relations.get(event.ally) || 0
        const allyAgainstRelations = event.ally.relations.get(event.against) || 0
        const allyFromRelations = event.ally.relations.get(event.from) || 0
        const againstFromRelations = event.against.relations.get(event.from) || 0
        const againstAllyRelations = event.against.relations.get(event.ally) || 0

        event.from.distribution += fromPercentage
        event.ally.distribution += allyPercentage
        event.against.distribution -= percentage

        event.from.relations.set(event.against, fromAgainstRelations - fromPercentage)
        event.ally.relations.set(event.against, allyAgainstRelations - allyPercentage)
        event.from.relations.set(event.ally, fromAllyRelations - percentage)
        event.ally.relations.set(event.from, allyFromRelations - percentage)
        event.against.relations.set(event.from, againstFromRelations + percentage)
        event.against.relations.set(event.ally, againstAllyRelations + percentage)
      }

      this.timeline.push(event)
    })

    // Move forward a day
    this.currentDate = new Date(this.currentDate.getTime() + (days * 86400000))
  }

  /**
   * [randomizeFactionInfluence description]
   * @return {[type]} [description]
   */
  randomizeFactionInfluence () {
    this.categories.forEach(category => {
      const len = category.factions.length
      let total = 0
      let min = 0
      let max = 0

      category.factions.forEach((faction, i) => {
        if (i === 0) {
          // At beginning
          faction.distribution = Math.random() * (0.6 - 0.05) + 0.05
          total = faction.distribution
        } else if (i === len - 1) {
          // At end
          faction.distribution = (1 - total)
        } else {
          // In between
          faction.distribution = (1 - total) * Math.random()
          total += faction.distribution
        }

        if (faction.distribution < category.factions[min].distribution) {
          min = i
        }

        if (faction.distribution > category.factions[max].distribution) {
          max = i
        }
      })

      const minority = category.factions[min]
      const majority = category.factions[max]

      minority.relations.set(majority, majority.distribution - minority.distribution)
    })
  }

  print () {
    this.categories.forEach(category => {
      console.log(`\u001b[35;1m${category.name}`)
      category.factions.sort((a, b) => {
        return b.distribution - a.distribution
      })

      category.factions.forEach((faction, i) => {
        const value = (faction.distribution * 100).toFixed(2)
        console.log(`  \u001b[36;1m${faction.name}: ${value}% UBI allocations`)

        if (faction.relations.size > 0) {
          console.log(`   \u001b[37;1mRelations:`)

          let relations = [...faction.relations.entries()].sort((a, b) => {
            return a[1] - b[1]
          })

          relations.splice(3, relations.length - 6)

          relations.forEach(element => {
            const key = element[0]
            const value = element[1]
            const skeptical = (value * 100).toFixed(2)
            if (skeptical < 0) {
              console.log(`    \u001b[32;1m${key.getName()}: \u001b[37;1m${skeptical * -1}% \u001b[37;0mapproving`)
            } else {
              console.log(`    \u001b[31;1m${key.getName()}: \u001b[37;1m${skeptical}% \u001b[37;0mskeptical`)
            }
          })
        }
      })
    })
  }
}

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

class Category {
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
      faction.category = this
    })
  }
}

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
    this.category = undefined
  }

  /**
   * [getName description]
   * @param  {[type]} faction [description]
   * @return {[type]}         [description]
   */
  getName () {
    if (this.category.leftToRight) {
      return `${this.category.name} ${this.name}`
    } else {
      return `${this.name} ${this.category.name}`
    }
  }
}

const defaultCategories = [
  new Category('Genders', false, [
    new Faction('Male'),
    new Faction('Female'),
    new Faction('Other')
  ]),
  new Category('Religions', false, [
    new Faction('Native'),
    new Faction('Foreign'),
    new Faction('Dominant'),
    new Faction('Fringe')
  ]),
  new Category('Cultures', false, [
    new Faction('Native'),
    new Faction('Foreign'),
    new Faction('Dominant'),
    new Faction('Fringe')
  ]),
  new Category('Class', false, [
    new Faction('Upper'),
    new Faction('Middle'),
    new Faction('Lower')
  ]),
  new Category('Political', true, [
    new Faction('Radical Conservatives'),
    new Faction('Hardcore Conservatives'),
    new Faction('Minor Conservatives'),
    new Faction('Casual Conservatives'),
    new Faction('Conservative Independents'),
    new Faction('Liberal Independents'),
    new Faction('Casual Liberals'),
    new Faction('Minor Liberals'),
    new Faction('Hardcore Liberals'),
    new Faction('Radical Conservatives')
  ]),
  new Category('Ethnic', true, [
    new Faction('Natives'),
    new Faction('Foreigners'),
    new Faction('Dominant'),
    new Faction('Fringe')
  ]),
  new Category('Regions', false, [
    new Faction('Urban'),
    new Faction('Rural')
  ]),
  new Category('Prouction', false, [
    new Faction('Machinery'),
    new Faction('Circuitry'),
    new Faction('Mineral'),
    new Faction('Robotics'),
    new Faction('Medical'),
    new Faction('Plastics'),
    new Faction('Metallurgy'),
    new Faction('Chemical'),
    new Faction('Agriculture'),
    new Faction('Wood'),
    new Faction('Rubber'),
    new Faction('Illicit Drugs'),
    new Faction('Infrastructure'),
    new Faction('Software'),
    new Faction('Data'),
    new Faction('Crypto')
  ]),
  new Category('Commercial', true, [
    new Faction('Imports'),
    new Faction('Exports')
  ]),
  new Category('Legal', true, [
    new Faction('Judges'),
    new Faction('Lawyers'),
    new Faction('Enforcers'),
    new Faction('Criminals')
  ]),
  new Category('Oligarch', true, [
    new Faction('Insiders'),
    new Faction('Outsiders')
  ]),
  new Category('Military', true, [
    new Faction('Leadership'),
    new Faction('Soldiers')
  ]),
  new Category('Civil', true, [
    new Faction('Leadership'),
    new Faction('Committees'),
    new Faction('Special Interests'),
    new Faction('Citizens')
  ]),
  new Category('Financial', true, [
    new Faction('Creditors'),
    new Faction('Debtors')
  ]),
  new Category('Information', true, [
    new Faction('Producers'),
    new Faction('Distributers'),
    new Faction('Consumers')
  ]),
  new Category('Mafia', true, [
    new Faction('Bosses'),
    new Faction('Goons'),
    new Faction('Victims')
  ]),
  new Category('Cartel', true, [
    new Faction('Insiders'),
    new Faction('Outsiders'),
    new Faction('Vassals')
  ]),
  new Category('Aged', false, [
    new Faction('Elderly'),
    new Faction('Middle'),
    new Faction('Youth')
  ]),
  new Category('Labor', false, [
    new Faction('Organized'),
    new Faction('Unorganized'),
    new Faction('Unemployed')
  ])
]

module.exports = HegelEngine
