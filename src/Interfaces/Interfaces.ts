export interface Ipokemon {
    abilities: [{
        ability: {
            name: string
            url: string
        },
        is_hidden: boolean,
        slot: number
    }]
    base_experience: number
    cries: {
        latest: string
        legacy: string
    }
    forms: [
        name: string,
        url: string
    ]
    game_indices: [
        game_index: number,
        version: {
            name: string,
            url: string
        }
    ]
    height: number
    held_items: [
        item: {
            name: string,
            url: string
        },
        version_details: [
            rarity: number,
            version: {
                name: string,
                url: string
            }
        ]
    ]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: [{
        move: {
            name: string,
            url: string
        },
        version_group_details: [
            level_learned_at: number,
            move_learned_method: {
                name: string,
                url: string
            },
            version_group: {
                name: string,
                url: string
            }
        ]
    }]
    name: string
    order: number
    past_abilities: []
    past_types: [
        generation: {
            name: string,
            url: string
        },
        types: [
            slot: number,
            type: {
                name: string,
                url: string
            }
        ]
    ]
    species: {
        name: string,
        url: string
    }
    sprites: {
        back_default: string,
        back_female: string,
        back_shiny: string,
        back_shiny_female: string,
        front_default: string,
        front_female: string,
        front_shiny: string,
        front_shiny_female: string,
        other: {
            dream_world: {
                front_default: string,
                front_female: string
            },
            home: {
                front_default: string,
                front_female: string,
                front_shiny: string,
                front_shiny_female: string
            },
            "official-artwork": {
                front_default: string,
                front_shiny: string
            },
            showdown: {
                back_default: string,
                back_female: string,
                back_shiny: string,
                back_shiny_female: string,
                front_default: string,
                front_female: string,
                front_shiny: string,
                front_shiny_female: string
            }
        },
        versions: {
            "generation-i": {
                "red-blue": {
                    back_default: string,
                    back_gray: string,
                    back_transparent: string,
                    front_default: string,
                    front_gray: string,
                    front_transparent: string
                },
                yellow: {
                    back_default: string,
                    back_gray: string,
                    back_transparent: string,
                    front_default: string,
                    front_gray: string,
                    front_transparent: string
                }
            },
            "generation-ii": {
                crystal: {
                    back_default: string,
                    back_shiny: string,
                    back_shiny_transparent: string,
                    back_transparent: string,
                    front_default: string,
                    front_shiny: string,
                    front_shiny_transparent: string,
                    front_transparent: string
                },
                gold: {
                    back_default: string,
                    back_shiny: string,
                    front_default: string,
                    front_shiny: string,
                    front_transparent: string
                },
                silver: {
                    back_default: string,
                    back_shiny: string,
                    front_default: string,
                    front_shiny: string,
                    front_transparent: string
                }
            },
            "generation-iii": {
                emerald: {
                    front_default: string,
                    front_shiny: string,
                },
                "firered-leafgreen": {
                    back_default: string,
                    back_shiny: string,
                    front_default: string,
                    front_shiny: string
                },
                "ruby-sapphire": {
                    back_default: string,
                    back_shiny: string,
                    front_default: string,
                    front_shiny: string
                }
            },
            "generation-iv": {
                "diamond-pearl": {
                    back_default: string,
                    back_female: string,
                    back_shiny: string,
                    back_shiny_female: string,
                    front_default: string,
                    front_female: string,
                    front_shiny: string,
                    front_shiny_female: string
                },
                "heartgold-soulsilver": {
                    back_default: string,
                    back_female: string,
                    back_shiny: string,
                    back_shiny_female: string,
                    front_default: string,
                    front_female: string,
                    front_shiny: string,
                    front_shiny_female: string
                },
                platinum: {
                    back_default: string,
                    back_female: string,
                    back_shiny: string,
                    back_shiny_female: string,
                    front_default: string,
                    front_female: string,
                    front_shiny: string,
                    front_shiny_female: string
                }
            },
            "generation-v": {
                "black-white": {
                    animated: {
                        back_default: string,
                        back_female: string,
                        back_shiny: string,
                        back_shiny_female: string,
                        front_default: string,
                        front_female: string,
                        front_shiny: string,
                        front_shiny_female: string
                    },
                    back_default: string,
                    back_female: string,
                    back_shiny: string,
                    back_shiny_female: string,
                    front_default: string,
                    front_female: string,
                    front_shiny: string,
                    front_shiny_female: string
                }
            },
            "generation-vi": {
                "omegaruby-alphasapphire": {
                    front_default: string,
                    front_female: string,
                    front_shiny: string,
                    front_shiny_female: string
                },
                "x-y": {
                    front_default: string,
                    front_female: string,
                    front_shiny: string,
                    front_shiny_female: string
                }
            },
            "generation-vii": {
                icons: {
                    front_default: string,
                    front_female: string
                },
                "ultra-sun-ultra-moon": {
                    front_default: string,
                    front_female: string,
                    front_shiny: string,
                    front_shiny_female: string
                }
            },
            "generation-viii": {
                icons: {
                    front_default: string,
                    front_female: string
                }
            }
        }
    }
    stats: [
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    ]
    types: [{
        slot: number,
        type: {
            name: string,
            url: string
        }
    }]
    weight: number
}


export interface Ispecies {
    id: number
    name: string
    order: number
    gender_rate: number
    capture_rate: number
    base_happiness: number
    is_baby: boolean
    is_legendary: boolean
    is_mythical: boolean
    hatch_counter: number
    has_gender_differences: boolean
    forms_switchable: boolean
    growth_rate: {
        name: string,
        url: string
    }
    pokedex_numbers: [
        entry_number: number,
        pokedex: {
            name: string,
            url: string
        }
    ]
    egg_groups: [
        name: string,
        url: string
    ]
    color: {
        name: string,
        url: string
    }
    shape: {
        name: string,
        url: string
    }
    evolves_from_species: {
        name: string,
        url: string
    }
    evolution_chain: {
        url: string
    }
    habitat: string
    generation: {
        name: string,
        url: string
    }
    names: [
        name: string,
        language: {
            name: string,
            url: string
        }
    ]
    flavor_text_entries: [
        flavor_text: string,
        language: {
            name: string,
            url: string
        },
        version: {
            name: string,
            url: string
        }
    ]
    form_descriptions: [
        description: string,
        language: {
            name: string,
            url: string
        }
    ]
    genera: [
        genus: string,
        language: {
            name: string,
            url: string
        }
    ]
    varieties: [
        is_default: boolean,
        pokemon: {
            name: string,
            url: string
        }
    ]
}

export interface Ievolutionchain {
    id: number
    baby_trigger_item: string
    chain: {
        is_baby: boolean
        species: {
            name: string,
            url: string
        }
        evolution_details: string,
        evolves_to: [{
            is_baby: boolean,
            species: {
                name: string,
                url: string
            },
            evolution_details: [
                item: string,
                trigger: {
                    name: string,
                    url: string
                },
                gender: string,
                held_item: string,
                known_move: string,
                known_move_type: string,
                location: string,
                min_level: number,
                min_happiness: string,
                min_beauty: string,
                min_affection: string,
                needs_overworld_rain: boolean,
                party_species: string,
                party_type: string,
                relative_physical_stats: string,
                time_of_day: string,
                trade_species: string,
                turn_upside_down: boolean
            ],
            evolves_to: [{
                is_baby: boolean,
                species : {
                    name: string,
                    url: string
                }
            }]
        }]
    }
}

export interface Ilocationarea {

    location_area: {
        name: string,
        url: string
    },
    version_details: [
        encounter_details: [
            chance: number,
            condition_values: [],
            max_level: number,
            method: {
                name: string,
                url: string
            },
            min_level: number
        ],
        max_chance: number,
        version: {
            name: string,
            url: string
        }

    ]

}