const pronouns = {
  Male: {
    personal: [ 'he' ],
    object: [ 'him' ],
    possessive: [ 'his' ],
    independent: [ 'his' ],
    reflexive: [ 'himself' ]
  },
  Female: {
    personal: [ 'she' ],
    object: [ 'her' ],
    possessive: [ 'her' ],
    independent: [ 'hers' ],
    reflexive: [ 'herself' ]
  },
  Other: {
    personal: [ 'they' ],
    object: [ 'them' ],
    possessive: [ 'their' ],
    independent: [ 'theirs' ],
    reflexive: [ 'themselves' ]
  }
}

module.exports = {
  words: {
    // Verbs
    thought: [ 'assumed', 'considered', 'determined', 'expected', 'guessed', 'judged', 'realized', 'understood', 'deemed', 'envisioned', 'estimated', 'imagined', 'regarded', 'surmised', 'suspected', 'believed', 'knew', 'recognized', 'deduced', 'concluded', 'hypothesized', 'infered', 'thought' ],
    informed: [ 'informed', 'advised', 'educated', 'instructed', 'notified', 'told', 'warned', 'enlightened' ],
    entertained: [ 'entertained', 'delighted', 'pleased', 'satisfied' ],
    acted: [ 'acted', 'carried out', 'executed', 'performed' ],
    attacked: [ 'attacked', 'assailed', 'fought', 'struck' ],
    defended: [ 'defended', 'guarded', 'protected', 'preserved', 'secured' ],
    evaded: [ 'evaded', 'avoided', 'bypassed', 'circumvented', 'dodged' ],
    retreated: [ 'retreated', 'abandoned', 'backed off', 'escaped', 'left', 'pulled out of', 'withdrew' ],
    trapped: [ 'trapped', 'captured', 'cornered', 'conned', 'duped', 'fooled', 'lured' ],
    defeated: [ 'defeated', 'conquered', 'crushed', 'beaten' ],
    suffered: [ 'suffered' ],
    miscalculated: [ 'miscalculated', 'misread', 'misunderstood' ],
    surrendered: [ 'surrendered', 'abdictated', 'capitulated', 'gave up', 'submitted' ],
    complained: [ 'complained', 'whined', 'grumbled', 'protested' ],
    attracted: [ 'attracted', 'enticed', 'fascinated', 'intrigued' ],
    repelled: [ 'repelled', 'chased away', 'drove off', 'rebuffed', 'resisted' ],
    seduced: [ 'seduced', 'enticed', 'persuaded', 'captivated', 'charmed', 'tempted' ],
    hated: [ 'hated', 'abhorred', 'condemned', 'detested', 'loathed', 'shunned' ],
    ignored: [ 'ignored', 'discounted', 'neglected', 'overlook' ],
    discussed: [ 'discussed', 'conferred', 'debated', 'deliberated', 'reviewed' ],
    waited: [ 'waited', 'delayed', 'stood by', 'anticipated', 'stalled' ],
    dismissed: [ 'dismissed', 'removed', 'ousted', 'discharged', 'fired' ],
    hired: [ 'hired', 'employed', 'contracted', 'selected' ],
    bought: [ 'bought', 'purchased', 'procured', 'paid' ],
    sold: [ 'sold', 'depleted', 'traded' ],
    violated: [ 'violated', 'betrayed', 'disobeyed', 'opposed' ],
    learned: [ 'learned', 'accomplished', 'discovered', 'invented', 'identified', 'exposed', 'detected' ],
    questioned: [ 'questioned', 'challenged', 'examined', 'interrogated', 'interviewed', 'investigated' ],

    // Adverbs
    perfectly: [ 'perfectly', 'thoroughly', 'totally', 'completely', 'entirely', 'fully' ],
    decently: [ 'decently', 'accurately', 'correctly', 'honestly', 'properly', 'reasonably' ],
    poorly: [ 'poorly', 'badly', 'crudely', 'inadequately', 'insufficiently' ],
    miserably: [ 'miserably', 'terribly', 'dreadfully', 'awkwardly' ],
    intelligently: [ 'intelligently', 'prudently', 'sensibly', 'skillfully', 'wisely' ],

    curiously: [ 'curiously', 'strangely', 'surprinsingly', 'remarkably' ],
    viciously: [ 'viciously', 'brutally', 'maliciously', 'cruelly' ],
    calmly: [ 'calmly', 'coolly', 'easily', 'peacefully', 'smoothly' ],
    vigorously: [ 'vigorously', 'actively', 'boldly', 'eagerly', 'firmly', 'forcefully' ],
    humorously: [ 'humorously', 'amusingly', 'jokingly', 'absurdly' ],

    // Adjectives
    perfect: [ 'perfect', 'excellent', 'ideal', 'pure', 'superb' ],
    complete: [ 'thorough', 'total', 'utter', 'complete' ],
    decent: [ 'decent', 'good', 'correct', 'honest', 'proper', 'modest' ],
    poor: [ 'poor', 'bad', 'crude', 'inadequate', 'insufficient', 'feeble' ],
    miserable: [ 'miserable', 'terrible', 'dreadful', 'pathetic', 'tragic' ],
    barely: [ 'barely', 'hardly', 'only just' ],

    curious: [ 'curious', 'strange', 'surprinsing', 'remarkable' ],
    vicious: [ 'vicious', 'brutal', 'malicious', 'cruel' ],
    calm: [ 'calm', 'cool', 'peaceful', 'serene' ],
    vigorous: [ 'vigorous', 'active', 'bold', 'eager' ],
    humorous: [ 'humorous', 'amusing', 'absurd' ],

    // Nouns
    places: [ 'outskirts', 'slums', 'district', 'street', 'road', 'stop', 'checkpoint', 'station', 'house', 'apartment', 'office', 'school', 'hospital', 'market', 'store', 'hotel', 'factory', 'plant', 'detention', 'gallery', 'zoo', 'concert', 'restaurant', 'cafeteria', 'cafe', 'bar', 'clinic', 'fitness center' ],
  },
  types: {
    triumphs: {
      extreme: [
        '#heroName# #vigorously# #attacked# and #acted# #perfectly#.'
      ],
      greater: [
        '#heroName# had #acted# #perfectly#.'
      ],
      normal: [
        '#heroName# had #acted# #decently#.'
      ],
      lesser: [
        '#heroName# had #acted# #poorly#.'
      ],
      barely: [
        '#heroName# had #barely# #acted# and almost #surrendered#.'
      ]
    },

    failures: {
      extreme: [
        '#heroName# #vigorously# #acted# and was #perfectly# #defeated#.'
      ],
      greater: [
        '#heroName# was #perfectly# #defeated#.'
      ],
      normal: [
        '#heroName# was #vigorously# #defeated#.'
      ],
      lesser: [
        '#heroName# was #defeated#.'
      ],
      barely: [
        '#heroName# was #barely# #defeated#.'
      ]
    },

    retreats: {
      extreme: [
        '#heroName# was left with no option and #complete# #retreated#.'
      ],
      greater: [
        '#heroName# #vigorously# #retreated# the scenario.'
      ],
      normal: [
        '#heroName# #retreated#.'
      ],
      lesser: [
        '#heroName# held #heroPossessive# ground #decently#, but #retreated#.'
      ],
      barely: [
        '#heroName# conserved #heroPossessive# resources and #intelligently# #retreated#.'
      ]
    },

    gripes: {
      extreme: [
        '#heroName# #viciously# #complained# and #hated# #villianName#.'
      ],
      greater: [
        '#heroName# #viciously# #complained# about #villianName#.'
      ],
      normal: [
        '#heroName# #complained# about #villianName#.'
      ],
      lesser: [
        '#heroName# #complained#, but kept #heroPossessive# focus on #villianName#.'
      ],
      barely: [
        '#heroName# #barely# #complained# about #heroPossessive# concerns for #villianName#.'
      ]
    },

    plots: {
      extreme: [
        '#heroName# #thought# #villianName# was #poor# and #learned# about #villianName#\'s #curious# flaws.'
      ],
      greater: [
        '#heroName# #discussed# with #heroPossessive# peers about the #villianName# situation.'
      ],
      normal: [
        '#heroName# #thought# about the problem.'
      ],
      lesser: [
        '#heroName# #questioned# #villianName#.'
      ],
      barely: [
        '#heroName# #barely# #thought# anything useful about #villianName#.'
      ]
    },

    hopes: {
      extreme: [
        '#heroName# #attracted# many with #heroPossessive# dream and was #seduced# by its #perfect# outcomes.'
      ],
      greater: [
        '#heroName# was #seduced# by #heroPossessive# #perfect# vision.'
      ],
      normal: [
        '#heroName# was #seduced# by what #heroPersonal# #thought#.'
      ],
      lesser: [
        '#heroName# #thought# #heroPersonal# could find a way to beat #villianName#.'
      ],
      barely: [
        '#heroName# wasn\'t #seduced# by #heroPossessive# idea, but it was #curious# idea.'
      ]
    },

    evasions: {
      extreme: [
        '#heroName# was #informed# of #villianName#\'s intentions and #perfectly# #evaded# the outcome.'
      ],
      greater: [
        '#heroName# felt #trapped# but #decently# #evaded# the worst of it.'
      ],
      normal: [
        '#heroName# #evaded# the scenario.'
      ],
      lesser: [
        '#heroName# #poorly# #evaded# #villianName#.'
      ],
      barely: [
        '#villianName# #attacked# #heroName# and #heroObject# #barely# #evaded#.'
      ]
    },

    mistakes: {
      extreme: [
        '#heroName# #perfectly# #miscalculated# #villianName# to be more powerful than #villianPersonal# was.'
      ],
      greater: [
        '#heroName# #poorly# #thought#, #miserably# #acted#, and irreversibly #miscalculated#.'
      ],
      normal: [
        '#heroName# #humorously# #miscalculated# a #vicious# situation as #calm#.'
      ],
      lesser: [
        '#heroName# #miscalculated#, but recoverd.'
      ],
      barely: [
        '#heroName# #miscalculated# slightly, but #acted# #decently#.'
      ]
    },

    improvements: {
      extreme: [
        '#heroName# #learned# everything.'
      ],
      greater: [
        '#heroName# #learned# many things.'
      ],
      normal: [
        '#heroName# #learned# some things.'
      ],
      lesser: [
        '#heroName# #learned# little.'
      ],
      barely: [
        '#heroName# #learned# almost nothing.'
      ]
    }
  },
  pronouns
}
