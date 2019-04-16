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
  arcs: {
    monsterHunt: ['#hopes# #failures# #retreats# #improvements# #triumphs#'],
    ragsToRiches: ['#triumphs# #mistakes# #failures# #plots# #gripes# #triumphs# #improvements#'],
    quest: [ '#hopes# #plots# #mistakes# #evasions# #retreats# #triumphs#' ],
    voyageAndReturn: [ '#hopes# #plots# #mistakes# #evasions# #retreats# #improvements#' ],
    comedy: [ '#failures# #retreats# #gripes# #evasions# #mistakes# #triumphs#' ],
    tragedy: [ '#hopes# #plots# #improvements# #triumphs# #retreats# #failures#' ],
    rebirth: [ '#failures# #retreats# #gripes# #evasions# #mistakes# #improvements# #triumphs#' ]
  },
  words: {
    // Verbs
    thought: [ 'assumed', 'considered', 'determined', 'expected', 'guessed', 'judged', 'realized', 'understood', 'envisioned', 'estimated', 'imagined', 'surmised', 'suspected', 'believed', 'knew', 'recognized', 'deduced', 'concluded', 'hypothesized', 'inferred', 'thought' ],
    informed: [ 'informed', 'advised', 'educated', 'instructed', 'notified', 'told', 'warned', 'enlightened' ],
    entertained: [ 'entertained', 'delighted', 'pleased', 'satisfied' ],
    acted: [ 'acted', 'executed', 'performed', 'functioned', 'operated', 'behaved', 'presented' ],
    attacked: [ 'attacked', 'assailed', 'fought', 'struck' ],
    defended: [ 'defended', 'guarded', 'protected', 'preserved', 'secured' ],
    evaded: [ 'evaded', 'avoided', 'bypassed', 'circumvented', 'dodged' ],
    retreated: [ 'retreated', 'backed off', 'escaped', 'evacuated', 'left', 'pulled out', 'withdrew' ],
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
    perfectly: [ 'perfectly', 'thoroughly', 'successfully', 'totally', 'completely', 'entirely', 'fully' ],
    decently: [ 'decently', 'accurately', 'correctly', 'honestly', 'properly', 'reasonably' ],
    poorly: [ 'poorly', 'badly', 'crudely', 'inadequately', 'insufficiently' ],
    miserably: [ 'miserably', 'terribly', 'dreadfully', 'awkwardly' ],
    intelligently: [ 'intelligently', 'prudently', 'sensibly', 'skillfully', 'wisely' ],

    curiously: [ 'curiously', 'strangely', 'surprisingly', 'remarkably' ],
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
    barely: [ 'barely', 'hardly', ],

    curious: [ 'curious', 'strange', 'surprising', 'remarkable' ],
    vicious: [ 'vicious', 'brutal', 'malicious', 'cruel' ],
    calm: [ 'calm', 'cool', 'peaceful', 'serene' ],
    vigorous: [ 'vigorous', 'active', 'bold', 'eager' ],
    humorous: [ 'humorous', 'amusing', 'absurd' ],

    // Nouns
    almost: [ 'almost', 'practically', 'essentially' ],
    continued: [ 'was left', 'continued', 'remained' ],
    option: [ 'option', 'alternative', 'opportunity', 'choice' ],
    scenario: [ 'scenario', 'situation', 'problem', 'condition', 'position' ],
    held: [ 'held', 'protected', 'defended', 'guarded' ],
    ground: [ 'ground', 'stance', 'position', 'perspective', 'turf' ],
    conserved: [ 'conserved', 'moderated', 'restricted', 'reallocated', 'kept' ],
    resources: [ 'resources', 'assets', 'goods', 'capital', 'reputation', 'property', 'reserves', 'holdings' ],
    about: [ 'about' ],
    focus: [ 'focus', 'target', 'attention', 'concentration' ],
    concerns: [ 'concerns', 'apprehension', 'anxiety', 'unease', 'worry' ],
    flaws: [ 'flaws', 'blemishes', 'defects', 'failings', 'faults', 'weaknesses' ],
    peers: [ 'peers', 'associates', 'companions', 'equals', 'friends' ],
    anything: [ 'anything' ],
    useful: [ 'useful', 'adventageous', 'favorable', 'helpful', 'convenient' ],
    many: [ 'many' ],
    dream: [ 'dream', 'fantasy', 'idea', 'vision', 'goal', 'wish', 'hope', 'aspiration', 'ambition' ],
    outcomes: [ 'outcomes', 'conclusions', 'results', 'reactions' ],
    find: [ 'find', 'discover', 'detect', 'identify', 'locate' ],
    way: [ 'way', 'path', 'trick', 'tactic' ],
    beat: [ 'beat', 'defeat', 'rout', 'breakdown', 'drive off' ],
    intentions: [ 'intentions', 'purpose', 'aims', 'goals', 'motives', 'objectives', 'plans' ],
    felt: [ 'felt' ],
    worst: [ 'worst', 'calamity', 'catastrophe' ],
    powerful: [ 'powerful', 'effective', 'capable', 'talented', 'experienced', 'adaptive', 'influential', 'persuasive' ],
    recovered: [ 'recovered', 'rebounded', 'rallied' ],
    slightly: [ 'slightly', 'somewhat', 'marginally' ],
    places: [ 'outskirts', 'slums', 'district', 'street', 'road', 'stop', 'checkpoint', 'station', 'house', 'apartment', 'office', 'school', 'hospital', 'market', 'store', 'hotel', 'factory', 'plant', 'detention', 'gallery', 'zoo', 'concert', 'restaurant', 'cafeteria', 'cafe', 'bar', 'clinic', 'fitness center' ],
  },
  types: {
    triumphs: {
      extreme: [
        '#heroTitle# #vigorously# #attacked# and #acted# #perfectly#.'
      ],
      greater: [
        '#heroTitle# had #acted# #perfectly#.'
      ],
      normal: [
        '#heroTitle# had #acted# #decently#.'
      ],
      lesser: [
        '#heroTitle# had #acted# #poorly#.'
      ],
      barely: [
        '#heroTitle# had #barely# #acted# and #almost# #surrendered#.'
      ]
    },

    failures: {
      extreme: [
        '#heroTitle# #vigorously# #acted# and was #perfectly# #defeated#.'
      ],
      greater: [
        '#heroTitle# was #perfectly# #defeated#.'
      ],
      normal: [
        '#heroTitle# was #vigorously# #defeated#.'
      ],
      lesser: [
        '#heroTitle# was #defeated#.'
      ],
      barely: [
        '#heroTitle# was #barely# #defeated#.'
      ]
    },

    retreats: {
      extreme: [
        '#heroTitle# #continued# with no #option# and #perfectly# #retreated#.'
      ],
      greater: [
        '#heroTitle# #vigorously# #retreated# from the #scenario#.'
      ],
      normal: [
        '#heroTitle# #retreated#.'
      ],
      lesser: [
        '#heroTitle# #held# #heroPossessive# #ground# #decently#, but #retreated#.'
      ],
      barely: [
        '#heroTitle# #conserved# #heroPossessive# #resources# and #intelligently# #retreated#.'
      ]
    },

    gripes: {
      extreme: [
        '#heroTitle# #viciously# #complained# and #hated# #villianName#.'
      ],
      greater: [
        '#heroTitle# #viciously# #complained# #about# #villianName#.'
      ],
      normal: [
        '#heroTitle# #complained# #about# #villianName#.'
      ],
      lesser: [
        '#heroTitle# #complained#, but #conserved# #heroPossessive# #focus# on #villianName#.'
      ],
      barely: [
        '#heroTitle# #barely# #complained# #about# #heroPossessive# #concerns# for #villianName#.'
      ]
    },

    plots: {
      extreme: [
        '#heroTitle# #thought# #villianName# was #poor# and #learned# #villianName#\'s #curious# #flaws#.'
      ],
      greater: [
        '#heroTitle# #discussed# with #heroPossessive# #peers# #about# the #villianName# #scenario#.'
      ],
      normal: [
        '#heroTitle# #thought# #about# the #problem#.'
      ],
      lesser: [
        '#heroTitle# #questioned# #villianName#.'
      ],
      barely: [
        '#heroTitle# #barely# #thought# #anything# #useful# #about# #villianName#.'
      ]
    },

    hopes: {
      extreme: [
        '#heroTitle# #attracted# #many# with #heroPossessive# #dream# and was #seduced# by its #perfect# #outcomes#.'
      ],
      greater: [
        '#heroTitle# was #seduced# by #heroPossessive# #perfect# #dream#.'
      ],
      normal: [
        '#heroTitle# was #seduced# by what #heroPersonal# #thought#.'
      ],
      lesser: [
        '#heroTitle# #thought# #heroPersonal# could #find# a #way# to #beat# #villianName#.'
      ],
      barely: [
        '#heroTitle# wasn\'t #seduced# by #heroPossessive# #dream#, but it was #curious#.'
      ]
    },

    evasions: {
      extreme: [
        '#heroTitle# was #informed# of #villianName#\'s #intentions# and #perfectly# #evaded# the #outcomes3.'
      ],
      greater: [
        '#heroTitle# #felt# #trapped# but #decently# #evaded# the #worst# of the #scenario#.'
      ],
      normal: [
        '#heroTitle# #evaded# the #scenario#.'
      ],
      lesser: [
        '#heroTitle# #poorly# #evaded# #villianName#.'
      ],
      barely: [
        '#villianName# #attacked# #heroName# and #heroPersonal# #barely# #evaded#.'
      ]
    },

    mistakes: {
      extreme: [
        '#heroTitle# #perfectly# #miscalculated# #villianName# to be more #powerful# than #villianPersonal# was.'
      ],
      greater: [
        '#heroTitle# #poorly# #thought#, #miserably# #acted#, and #miscalculated# #villianPossessive# #intentions#.'
      ],
      normal: [
        '#heroTitle# #humorously# #miscalculated# a #vicious# #scenario# as #calm#.'
      ],
      lesser: [
        '#heroTitle# #miscalculated#, but #recovered#.'
      ],
      barely: [
        '#heroTitle# #miscalculated# #slightly#, but #acted# #decently#.'
      ]
    },

    improvements: {
      extreme: [
        '#heroTitle# #learned# everything.'
      ],
      greater: [
        '#heroTitle# #learned# many things.'
      ],
      normal: [
        '#heroTitle# #learned# some things.'
      ],
      lesser: [
        '#heroTitle# #learned# little.'
      ],
      barely: [
        '#heroTitle# #learned# almost nothing.'
      ]
    }
  },
  pronouns
}
