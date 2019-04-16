const defaultFactions = require('./defaultFactions')
const Event = require('./event')
const Story = require('./story')

class HegelEngine {
  /**
   * [constructor description]
   * @param  {[type]} sectors [description]
   * @return {[type]}            [description]
   */
  constructor (startDate, endDate, sectors) {
    this.sectors = sectors || defaultFactions
    this.startDate = new Date(startDate)
    this.endDate = new Date(endDate)
    this.currentDate = this.startDate
    this.timeline = []
    this.factionsCache = []

    this.sectors.forEach(sector => {
      this.factionsCache = this.factionsCache.concat(sector.factions)
    })

    const story = new Story(this.sectors)
  }

  /**
   * [tick description]
   * @param  {Number} days [description]
   * @return {[type]}      [description]
   */
  tick (days = 1) {
    const events = []
    this.sectors.forEach(sector => {
      // Go through all sectors

      sector.factions.forEach((faction, i) => {
        const candidates = []

        faction.relations.forEach((animosity, against) => {
          if (animosity > 0) {
            const impact = Math.random()

            if (impact < animosity) {
              // Animosity has boiled over, generate a conflict event through a sector
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

        event.from.distribution += fromPercentage
        event.ally.distribution += allyPercentage
        event.against.distribution -= percentage

        // Adjust influence accordingly
        const fromAgainstRelations = event.from.relations.get(event.against) || 0
        const fromAllyRelations = event.from.relations.get(event.ally) || 0
        const allyAgainstRelations = event.ally.relations.get(event.against) || 0
        const allyFromRelations = event.ally.relations.get(event.from) || 0
        const againstFromRelations = event.against.relations.get(event.from) || 0
        const againstAllyRelations = event.against.relations.get(event.ally) || 0

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
    this.sectors.forEach(sector => {
      const len = sector.factions.length
      let total = 0
      let min = 0
      let max = 0

      sector.factions.forEach((faction, i) => {
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

        if (faction.distribution < sector.factions[min].distribution) {
          min = i
        }

        if (faction.distribution > sector.factions[max].distribution) {
          max = i
        }
      })

      const minority = sector.factions[min]
      const majority = sector.factions[max]

      minority.relations.set(majority, majority.distribution - minority.distribution)
    })
  }

  print () {
    this.sectors.forEach(sector => {
      console.log(`\u001b[35;1m${sector.name}`)
      sector.factions.sort((a, b) => {
        return b.distribution - a.distribution
      })

      sector.factions.forEach((faction, i) => {
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

module.exports = HegelEngine
