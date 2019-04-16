const Sector = require('./sector')
const Faction = require('./faction')

module.exports = [
  new Sector('Genders', false, [
    new Faction('Male'),
    new Faction('Female'),
    new Faction('Other')
  ]),
  new Sector('Religions', false, [
    new Faction('Native'),
    new Faction('Foreign'),
    new Faction('Dominant'),
    new Faction('Fringe')
  ]),
  new Sector('Cultures', false, [
    new Faction('Native'),
    new Faction('Foreign'),
    new Faction('Dominant'),
    new Faction('Fringe')
  ]),
  new Sector('Class', false, [
    new Faction('Upper'),
    new Faction('Middle'),
    new Faction('Lower')
  ]),
  new Sector('Political', true, [
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
  new Sector('Ethnic', true, [
    new Faction('Natives'),
    new Faction('Foreigners'),
    new Faction('Dominant'),
    new Faction('Fringe')
  ]),
  new Sector('Regions', false, [
    new Faction('Urban'),
    new Faction('Rural')
  ]),
  new Sector('Prouction', false, [
    new Faction('Machinery'),
    new Faction('Circuitry'),
    new Faction('Mineral'),
    new Faction('Robotics'),
    new Faction('Medical'),
    new Faction('Plastics'),
    new Faction('Metallurgy'),
    new Faction('Chemical'),
    new Faction('Agriculture'),
    new Faction('Alcohol'),
    new Faction('Wood'),
    new Faction('Rubber'),
    new Faction('Illicit Drugs'),
    new Faction('Infrastructure'),
    new Faction('Software'),
    new Faction('Data'),
    new Faction('Crypto')
  ]),
  new Sector('Commercial', true, [
    new Faction('Imports'),
    new Faction('Exports')
  ]),
  new Sector('Legal', true, [
    new Faction('Judges'),
    new Faction('Lawyers'),
    new Faction('Enforcers'),
    new Faction('Criminals')
  ]),
  new Sector('Oligarch', true, [
    new Faction('Insiders'),
    new Faction('Outsiders')
  ]),
  new Sector('Military', true, [
    new Faction('Leadership'),
    new Faction('Soldiers')
  ]),
  new Sector('Civil', true, [
    new Faction('Leadership'),
    new Faction('Committees'),
    new Faction('Special Interests'),
    new Faction('Citizens')
  ]),
  new Sector('Financial', true, [
    new Faction('Creditors'),
    new Faction('Debtors')
  ]),
  new Sector('Information', true, [
    new Faction('Producers'),
    new Faction('Distributers'),
    new Faction('Consumers')
  ]),
  new Sector('Entertainment', true, [
    new Faction('Celebrities'),
    new Faction('Personalities'),
    new Faction('Influencers'),
    new Faction('Distributors'),
    new Faction('Consumers')
  ]),
  new Sector('Mafia', true, [
    new Faction('Bosses'),
    new Faction('Goons'),
    new Faction('Victims')
  ]),
  new Sector('Cartel', true, [
    new Faction('Insiders'),
    new Faction('Outsiders'),
    new Faction('Vassals')
  ]),
  new Sector('Aged', false, [
    new Faction('Elderly'),
    new Faction('Middle'),
    new Faction('Youth')
  ]),
  new Sector('Labor', false, [
    new Faction('Organized'),
    new Faction('Unorganized'),
    new Faction('Unemployed')
  ])
]
