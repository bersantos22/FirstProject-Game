const monsterList = [
    ['Beholder', './images/beholder-removebg-preview.png', 360, [
            ['Fire Laser', 'fire', 95, 0.95],
            ['Tentacle', 'normal', 100, 0.95],
            ['Body Slam', 'physical', 75, 0.5],
            ['Eye Rays', 'arcane', 100, 0.9 ]
        ]],
    ['Lich', './images/lich2.0-removebg-preview.png', 375, [
            ['Freezing Ray', 'ice', 80, 0.95],
            ['Dagger', 'normal', 80, 0.95],
            ['Ice Storm', 'ice', 95, 0.95],
            ['Death Grip', 'necrotic', 100, 0.95]
                  ]],
    ['Gelatinous Cube', './images/Gelatinouscube-removebg-preview.png', 364, [
            ['Paralyze', 'poison', 90, 0.95],
            ['Acid Attack', 'poison', 90, 0.95],
            ['Crushing Blow', 'physical', 85, 0.95],
            ['Engulf', 'normal', 100, 0.95]
                  ]],
    ['Ancient Red Dragon', './images/redDragon.png', 600, [
            ['Fire Ball', 'fire', 120, 0.9],
            ['Bite and Claw', 'physical', 120, 0.95],
            ['Tail', 'dragon', 80, 0.7],
            ['Fire Breath', 'fire', 170, 0.9 ]
              ]],
    ['Orc Paladin', './images/paladin.png', 410, [
            ['Holy Attack', 'holy', 100, 0.9],
            ['Divine Smite', 'holy', 120, 0.95],
            ['Whirlwind Attack', 'physical', 80, 0.8],
            ['Charge', 'normal', 100, 0.8 ]
                  ]],
    ['Human Mage', './images/mago.png', 305, [
            ['Thunder', 'electric', 120, 0.85],
            ['Magic missile', 'arcane', 80, 0.95],
            ['Detect Magic', 'arcane', 1, 0.4],
            ['Fire Ball', 'fire', 120, 0.95 ]
                 ]],
    ['Little Kobold', './images/Kobold.png', 150, [
            ['Spear', 'physical', 70, 0.85],
            ['Draconic Roar', 'arcane', 01, 0.95],
            ['Bite', 'normal', 70, 0.95],
            ['Try to Run Away', 'normal', 01, 0.1 ]
                         ]],
    ['Hydra', './images/Hydra-removebg-preview.png', 380, [
            ['Multiple Bites', 'physical', 110, 0.85],
            ['Headbutt', 'normal', 80, 0.95],
            ['Poison Bite', 'poison', 70, 0.85],
            ['Earthquake', 'ground', 120, 0.95 ]
                         ]],
    ['Mind Flayer', './images/Mind.png', 415, [
            ['Tentacles', 'normal', 80, 0.95],
            ['Extract Brain', 'arcane', 120, 0.85],
            ['Mind Blast', 'arcane', 90, 0.95],
            ['Electric Bolt', 'electric', 75, 0.95 ]
                                         ]]
            ];
              // 0 immunity
              // 1 weakness
              // 2 resistance
              const typeMatch = {
                'Beholder': [
                    ['ground'],
                    [ 'physical', 'ice', 'electric'],
                    ['fire', 'arcane',]
                ],
                  'Lich': [
                      ['ice'],
                      ['holy', 'arcane'],
                      ['fire', 'poison']
                  ],
                  'Gelatinous Cube': [
                      ['poison','physical'],
                      ['fire','electric'],
                      ['normal','ground']
                  ],
                  'Ancient Red Dragon': [
                    ['fire', 'ground'],
                    ['ice', 'electric'],
                    ['poison']
                ],
                'Orc Paladin': [
                    ['holy','necrotic'],
                    ['arcane', 'poison'],
                    [ 'physical']
                ],
                'Human Mage': [
                    ['arcane',],
                    ['physical', 'necrotic', 'ground'],
                    [ 'fire']
                ],
                'Little Kobold': [
                    ['ground'],
                    ['holy', 'poison', 'electric','arcane','physical', 'necrotic'],
                    [ 'dragon']
                ],
                'Hydra': [
                    ['poison',],
                    ['physical','ice'],
                    ['eletric','dragon']
                ],
                'Mind Flayer': [
                    ['',],
                    ['normal','holy','poison'],
                    ['arcane','electric']
                ]

              }
/* 
              if (typeof module !== 'undefined') {
                module.exports = monsterList;
              }
              if (typeof module !== 'undefined') {
                module.exports = typeMatch;
              } */
              