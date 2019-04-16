const faker = require('faker')
const epures = require('epures')
const segments = require('./storySegments')

const genders = Object.keys(segments.pronouns)
const arcs = Object.keys(segments.arcs)

class Story {
  constructor (sectors) {
    sectors.forEach(sector => {
      const count = Math.ceil(Math.random() * 8)
      for (var i = 0; i < count; i++) {
        this.createCorporation(sector)
      }
    })
  }

  /**
   * [createPerson description]
   * @return {[type]} [description]
   */
  createPerson () {
    return {
      gender: genders[Math.floor(Math.random() * genders.length)],
      name: faker.fake('{{name.firstName}} {{name.lastName}}'),
      handle: faker.fake('{{internet.userName}}'),
      payport: faker.fake('{{finance.bitcoinAddress}}'),
      employer: faker.fake('{{company.companyName}}'),
      job: faker.fake('{{name.jobType}}'),
      dob: faker.date.between('01/01/2019', '01/01/2300')
    }
  }

  /**
   * [createCorporation description]
   * @param  {[type]} sector  [description]
   * @param  {[type]} faction [description]
   * @return {[type]}         [description]
   */
  createCorporation (sector, faction) {
    return {
      name: faker.fake('{{company.companyName}}'),
      sector
    }
  }

  /**
   * [assembleNames description]
   * @param  {[type]} pronouns [description]
   * @param  {[type]} name     [description]
   * @return {[type]}          [description]
   */
  assembleNames (pronouns, name) {
    return pronouns.concat([ name ]).map(name => name.charAt(0).toUpperCase() + name.slice(1))
  }

  /**
   * [getStory description]
   * @param  {[type]} heroName      [description]
   * @param  {[type]} heroGender    [description]
   * @param  {[type]} villianName   [description]
   * @param  {[type]} villianGender [description]
   * @return {[type]}               [description]
   */
  getArc (heroName, heroGender, villianName, villianGender) {
    const arc = arcs[Math.floor(Math.random() * arcs.length)]
    const heroPronouns = segments.pronouns[heroGender]
    const villianPronouns = segments.pronouns[villianGender]

    const grammarSource = Object.assign({
      heroName,
      heroTitle: this.assembleNames(heroPronouns.personal, heroName),
      heroPersonal: heroPronouns.personal,
      heroObject: heroPronouns.object,
      heroPossessive: heroPronouns.possessive,
      heroIndependent: heroPronouns.independent,
      heroReflexive: heroPronouns.reflexive,
      villianName,
      villianTitle: this.assembleNames(villianPronouns.personal, villianName),
      villianPersonal: villianPronouns.personal,
      villianObject: villianPronouns.object,
      villianPossessive: villianPronouns.possessive,
      villianIndependent: villianPronouns.independent,
      villianReflexive: villianPronouns.reflexive,
      arc: segments.arcs[arc]
    }, segments.words)

    for (const name in segments.types) {
      const moods = Object.keys(segments.types[name])
      const mood = moods[Math.floor(Math.random() * moods.length)]
      grammarSource[name] = segments.types[name][mood]
    }

    const story = epures.createGrammar(grammarSource)
    story.addModifiers(epures.modifiers.en_US)
    return story.flatten('#arc#')
  }
}

module.exports = Story
