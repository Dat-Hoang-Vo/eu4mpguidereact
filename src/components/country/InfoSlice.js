import { createSlice } from '@reduxjs/toolkit';

let name;
let motto;
let ally1;
let ally2;
let ally3;
let threat1;
let threat2;
let threat3;
let modifiers;
let traits;

const updateFrance = () => {
    name = 'France';
    motto = 'Legacy of Charlemagne';
    ally1 = 'Castile';
    ally2 = 'Milan';
    ally3 = 'Burgundy';
    threat1 = 'England';
    threat2 = 'Austria';
    threat3 = 'Burgundy';
    modifiers = [
        {
            name: "Morale",
            value: "20%",
            id: 1},
         {
             name: "Discipline",
             value: "5%",
             id: 2
         },
         {
            name: "Manpower",
            value: "20%",
            id: 3
         },
         {
            name: "ManpowerRec",
            value: "20%",
            id: 4
         }
    ];
    traits = [
        {
            title: "French Hegemony",
            description: "France is in an exceptional position to dominate European politics if managed correctly. Few countries can step up to France one-on-one. France also gets a myriad of events relating to to its historical dominance of Europe, including the French Revolution.",
            id: 1
        },
        {
            title: 'Victory Through Valor - "Pour le Roi!"',
            description: 'France fields an army unlike many others. Its soldiers fight with unwavering fortitude. Despite the advantages of this attribute, it can lead to mass casualties as morale fades and discipline becomes dominant.',
            id: 2
        },
        {
            title: "The Hundred Years' War",
            description: "The French begin in a deep rivalry with England and at a crossroads with Burgundy. The ineptitude of the English King presents a rare opportunity to reclaim French cores. Early diplomacy (or the lack thereof) with Burgundy will greatly affect your game.",
            id: 3
        },
        {
            title: "A Decentralized Realm",
            description: 'The French Kingdom begins the game divided amongst autonomous counts and dukes. This presents an opportunity to swarm your enemies at the cost of decentralization. The French vassal troops are hard to control and are easily wiped while seperated.',
            id: 4
        }
    ];
}

const updateMuscovy = () => {
    name = 'Muscovy';
    motto = 'The Endless March';
    ally1 = 'Sweden';
    ally2 = 'Austria';
    ally3 = 'England';
    threat1 = 'Poland';
    threat2 = 'Brandenburg';
    threat3 = 'Ottomans';
    modifiers = [
        {
            name: "Morale",
            value: "5%",
            id: 1},
         {
             name: "Discipline",
             value: "5%",
             id: 2
         },
         {
            name: "Manpower",
            value: "53%",
            id: 3
         },
         {
            name: "ForceLimit",
            value: "50%",
            id: 4
         },
         {
            name: "Fire Received",
            value: "-10%",
            id: 5
         },
         {
            name: "Art Combat",
            value: "10%",
            id: 6
         },
         {
            name: "Army Trad",
            value: "0.25",
            id: 7
         }
    ];
    traits = [
        {
            title: 'Steppe Soldiers',
            description: 'The steppes feed your war machine. Receiving 100% manpower on all steppe provinces, you stand to field large armies when properly developed.',
            id: 1
        },
        {
            title: 'All Roads Lead to Novgorod',
            description: 'Having the Novgorod trade node act as a de facto end node, you can build a strong production and trade economy without the worry of trade flowing away.',
            id: 2
        },
        {
            title: 'Forever Eastern',
            description: 'Muscovy is given the privilege of unlimited expansion into the hordes to the east. This allows for you to quickly grow unapposed.',
            id: 3
        },
        {
            title: 'Call of the Rus',
            description: 'A large amount of Russians live within the borders of Lithuania. While a great path for expansion, this will likely bring you conflict with Poland.',
            id: 4
        }
    ];
}

const updateEngland = () => {
    name = 'England';
    motto = 'Naval Royalty';
    ally1 = 'Brunswick';
    ally2 = 'Burgundy';
    ally3 = 'Muscovy';
    threat1 = 'Portugal';
    threat2 = 'Burgundy';
    threat3 = 'Norway';
    modifiers = [
        {
            name: "Morale",
            value: "10%",
            id: 1},
         {
             name: "Dicipline",
             value: "5%",
             id: 2
         },
         {
            name: "Shock Received",
            value: "-10%",
            id: 3
         },
         {
            name: "Goods Produced",
            value: "10%",
            id: 4
         },
         {
            name: "Cultured Advisor Cost",
            value: "-20%",
            id: 5
         }
    ];
    traits = [
        {
            title: 'An Island with an Ireland',
            description: 'Most countries lack the naval capabilities to contest you at sea. This grants the English high levels of protection and allows them to focus on developing their country.',
            id: 1
        },
        {
            title: 'New Aged Vikings',
            description: 'The war with the Nordics is not over. The Norwegian and Danish fleet pose a great threat to the English. Starting as a stronger nation, a swift strike to conquer Scandinavia is a viable path for expansion. ',
            id: 2
        },
        {
            title: 'The Contested Channel',
            description: 'Although England typically dominates the English Channel, a strong country in the lowlands can greatly reduce their control. A hostile Burgundy or the Netherlands can reduce your hold on the English channel to nearly half.',
            id: 3
        },
        {
            title: 'No Known Nobility',
            description: 'England is one of the few monarchies to not have a nobility estate. This greatly reduces military capabilities in terms of manpower and military point generation.',
            id: 4
        }
    ];
}

const updateCastile = () => {
    name = 'Castile';
    motto = 'The Gold Crown';
    ally1 = 'France';
    ally2 = 'Portugal';
    ally3 = 'Papal States';
    threat1 = 'France';
    threat2 = 'Morocco';
    threat3 = 'Tunis';
    modifiers = [
        {
            name: "Morale",
            value: "15%",
            id: 1},
         {
             name: "Dicipline",
             value: "5%",
             id: 2
         },
         {
            name: "Artillery Fire",
            value: "+1",
            id: 3
         }
    ];
    traits = [
        {
            title: 'Golden Guns',
            description: 'The Spanish were known for their gold. Not only is there a gold mine near Madrid, but Spain can also obtain gold by way of New World mines. There should be no shortages of gold.',
            id: 1
        },
        {
            title: 'The Royal Armada',
            description: 'Iberia is able to muster a formiddable navy. With the right ideas and strategy, it may be able to rival the British fleet.',
            id: 2
        },
        {
            title: 'The Unbreakable Tercio',
            description: 'During the Age of Reformation, Spain boasts one of the toughest armies in Europe. With 30% less shock damage cavalry charges are a thing of the past.',
            id: 3
        },
        {
            title: 'The Heathen Threat',
            description: 'Iberia is just off the cuff of many crusades. The redisual Islamic presence in the region can cause instability and early game difficulties.',
            id: 4
        }
    ];
}

const updateOttomans = () => {
    name = 'Ottomans';
    motto = 'Ashes of the Phoenix';
    ally1 = 'Tunis';
    ally2 = 'Timurids';
    ally3 = 'Morocco';
    threat1 = 'Mamluks';
    threat2 = 'Hungary';
    threat3 = 'Muscovy';
    modifiers = [
        {
            name: "Dicipline",
            value: "5%",
            id: 1},
         {
             name: "Land Forcelimit",
             value: "33%",
             id: 2
         },
         {
            name: "Manpower Recovery",
            value: "10%",
            id: 3
         }
    ];
    traits = [
        {
            title: 'Janissaries',
            description: 'The Ottomans maintained one of the first expertly trained standing armies in the world. The Janissaries take 10% less damage and drill at double speed, but cost double to reinforce.',
            id: 1
        },
        {
            title: 'Second Rome',
            description: 'By conquering the last strongholds of the Byzantine Empire, the Ottomans assume control of one of the most important cities in the world: Constantinople. This city can bring lucrative trade wealth to the Empire.',
            id: 2
        },
        {
            title: 'A New-Old World Order',
            description: 'The Ottoman Empire is in a formiddable position to restate the importance of Middle Eastern politics onto Europe. If played correctly, Europe will soon fear the Ottoman presence on the continent.',
            id: 3
        },
        {
            title: 'The Sand Fued',
            description: 'The Ottomans begin in a deadly fued over control of the Middle East with the Mamluks. Only one successor to the Caliphate will remain once the dust settles.',
            id: 4
        }
    ];
}

const updateAustria = () => {
    name = 'Austria';
    motto = 'An Imperial Court';
    ally1 = 'Poland';
    ally2 = 'Brandenburg';
    ally3 = 'Papal States';
    threat1 = 'France';
    threat2 = 'Burgundy';
    threat3 = 'Ottomans';
    modifiers = [
        {
            name: "Morale",
            value: "10%",
            id: 1},
         {
             name: "Discipline",
             value: "3%",
             id: 2
         },
         {
            name: "Reinforce Speed",
            value: "30%",
            id: 3
         }
    ];
    traits = [
        {
            title: 'Imperial Troops',
            description: 'Aided by the realms of the Empire, Austria can maintain a sizeable army. Austrian reserves are equally as imposing. Make sure to keep an eye on how many princes reign in the HRE as this directly affects the manpower and forcelimit benefit.',
            id: 1
        },
        {
            title: 'Three Crowns',
            description: 'Austria has unique event chains allowing it to claim the crowns of both Bohemia and Hungary. If played correctly, Austria can create a new empire all for itself.',
            id: 2
        },
        {
            title: 'Defend the Emperor!',
            description: 'Located in the Alps, Austria has immense geographical defenses similar to Switzerland. However, this rocky terrain is harder to develop than other terrain. This can be alleviated by the farmland present in Bohemia and Hungary.',
            id: 3
        },
        {
            title: 'Enemies on All Fronts',
            description: 'Austria is surrounded by rivaling powers. To the West, France seeks to honor the legacy of Charlemagne. To the East, Russia and Poland struggle over dominance, and the Ottomans may try to add a new imperial city to their realm. To the South, the question of imperial loyalty may become a problem. To the North, Brandenburg may seek to remodel the HRE in its image.',
            id: 4
        }
    ];
}

const updatePoland = () => {
    name = 'Poland';
    motto = 'Armored Birds';
    ally1 = 'Austria';
    ally2 = 'Brandenburg';
    ally3 = 'Sweden';
    threat1 = 'Austria';
    threat2 = 'Muscovy';
    threat3 = 'Ottomans';
    modifiers = [
        {
            name: "Morale",
            value: "15%",
            id: 1},
         {
             name: "Discipline",
             value: "5%",
             id: 2
         },
         {
            name: "Infantry Combat",
            value: "10%",
            id: 3
         },
         {
            name: "Cavalry Combat",
            value: "33%",
            id: 4
         },
         {
            name: "Manpower",
            value: "25%",
            id: 5
         }
    ];
    traits = [
        {
            title: 'Poland Trait 1',
            description: 'Poland Description 1',
            id: 1
        },
        {
            title: 'Poland Trait 2',
            description: 'Poland Description 2',
            id: 2
        },
        {
            title: 'Poland Trait 3',
            description: 'Poland Description 3',
            id: 3
        },
        {
            title: 'Poland Trait 4',
            description: 'Poland Description 4',
            id: 4
        }
    ];
}

const updateBurgundy = () => {
    name = 'Burgundy';
    motto = "Lothar's Court";
    ally1 = 'France';
    ally2 = 'Austria';
    ally3 = 'England';
    threat1 = 'France';
    threat2 = 'Austria';
    threat3 = 'England';
    modifiers = [
        {
            name: "Morale",
            value: "10%",
            id: 1},
         {
             name: "Discipline",
             value: "5%",
             id: 2
         },
         {
            name: "Manpower",
            value: "25%",
            id: 3
         },
         {
            name: "Goods Produced",
            value: "15%",
            id: 4
         }
    ];
    traits = [
        {
            title: 'Burgundy Trait 1',
            description: 'Burgundy Description 1',
            id: 1
        },
        {
            title: 'Burgundy Trait 2',
            description: 'Burgundy Description 2',
            id: 2
        },
        {
            title: 'Burgundy Trait 3',
            description: 'Burgundy Description 3',
            id: 3
        },
        {
            title: 'Burgundy Trait 4',
            description: 'Burgundy Description 4',
            id: 4
        }
    ];
}

const updateMamluks = () => {
    name = 'Mamluks';
    motto = "Slave's No More";
    ally1 = 'Qara Qoyunlu';
    ally2 = 'Tunis';
    ally3 = 'Morocco';
    threat1 = 'Qara Qoyunlu';
    threat2 = 'Tunis';
    threat3 = 'Ottomans';
    modifiers = [
        {
            name: "Discipline",
            value: "5%",
            id: 1},
         {
             name: "Cavalry Combat",
             value: "10%",
             id: 2
         },
         {
            name: "Manpower Recovery",
            value: "15%",
            id: 3
         }
    ];
    traits = [
        {
            title: 'Mamluks Trait 1',
            description: 'Mamluks Description 1',
            id: 1
        },
        {
            title: 'Mamluks Trait 2',
            description: 'Mamluks Description 2',
            id: 2
        },
        {
            title: 'Mamluks Trait 3',
            description: 'Mamluks Description 3',
            id: 3
        },
        {
            title: 'Mamluks Trait 4',
            description: 'Mamluks Description 4',
            id: 4
        }
    ];
}

export const InfoSlice = createSlice({
    name: 'quickInfo',
    initialState: {
        value: {
            Country: "France",
            Motto: "Legacy of Charlemagne",
            Ally1: 'Castile',
            Ally2: 'Milan',
            Ally3: 'Burgundy',
            Threat1: 'England',
            Threat2: 'Austria',
            Threat3: 'Burgundy',
            Modifiers: [
                {
                    name: "Morale",
                    value: "20%",
                    id: 1},
                 {
                     name: "Discipline",
                     value: "5%",
                     id: 2
                 },
                 {
                    name: "Manpower",
                    value: "20%",
                    id: 3
                 },
                 {
                    name: "ManpowerRec",
                    value: "20%",
                    id: 4
                 }
            ],
            Traits: [
                {
                    title: "French Hegemony",
                    description: "France is in an exceptional position to dominate European politics if managed correctly. Few countries can step up to France one-on-one. France also gets a myriad of events relating to to its historical dominance of Europe, including the French Revolution.",
                    id: 1
                },
                {
                    title: 'Victory Through Valor - "Pour le Roi!"',
                    description: 'France fields an army unlike many others. Its soldiers fight with unwavering fortitude. Despite the advantages of this attribute, it can lead to mass casualties as morale fades and discipline becomes dominant.',
                    id: 2
                },
                {
                    title: "The Hundred Years' War",
                    description: "The French begin in a deep rivalry with England and at a crossroads with Burgundy. The ineptitude of the English King presents a rare opportunity to reclaim French cores. Early diplomacy (or the lack thereof) with Burgundy will greatly affect your game.",
                    id: 3
                },
                {
                    title: "A Decentralized Realm",
                    description: 'The French Kingdom begins the game divided amongst autonomous counts and dukes. This presents an opportunity to swarm your enemies at the cost of decentralization. The French vassal troops are hard to control and are easily wiped while seperated.',
                    id: 4
                }
            ]
        }
    },
    reducers: {
        update: (state, _new) => {
            let new_country = _new.payload
            if (new_country === "France") updateFrance();
            else if (new_country === "Muscovy") updateMuscovy();
            else if (new_country === "England") updateEngland();
            else if (new_country === "Castile") updateCastile();
            else if (new_country === "Ottomans") updateOttomans();
            else if (new_country === "Austria") updateAustria();
            else if (new_country === "Poland") updatePoland();
            else if (new_country === "Burgundy") updateBurgundy();
            else if (new_country === "Mamluks") updateMamluks();

            state.value.Country = name;
            state.value.Motto = motto;
            state.value.Ally1 = ally1;
            state.value.Ally2 = ally2;
            state.value.Ally3 = ally3;
            state.value.Threat1 = threat1;
            state.value.Threat2 = threat2;
            state.value.Threat3 = threat3;
            state.value.Modifiers = modifiers;
            state.value.Traits = traits;
        }
    }
})

export const { update } = InfoSlice.actions

export default InfoSlice.reducer