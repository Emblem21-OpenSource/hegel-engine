const test = require('ava')
const HegelEngine = require('./src/index')
const Story = require('./src/story')

test('A test', t => {
  const engine = new HegelEngine('12/01/2070', '11/4/2379')
  engine.randomizeFactionInfluence()

  let i = 365 * 4
  while (i--) {
    engine.tick()
  }

  engine.print()
  t.is(HegelEngine, HegelEngine)
})

test.only('Story Test', t => {
  const story = new Story([])
  console.log(story.getArc('Alice', 'Female', 'Bob', 'Male'))
})
