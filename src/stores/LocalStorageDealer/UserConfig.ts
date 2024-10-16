import { defineStore } from 'pinia'
import { initialUserSetup } from './InitialUserSetup'

interface kanas {
    letter: string
    translation: string
    seenTimes: number
    lastChoice: string
    nextDate: number
}

interface kanjis {
    letter: string
    hiragana: string
    romaji: string
    translation: string
    seenTimes: number
    lastChoice: string
    nextDate: number
}
export type InitialSetup = {
    hiragana: kanas[]
    katakana: kanas[]
    n5: kanjis[]
}
export const localStorageConfig = defineStore('localStorageConfig', {
    state: () => ({
        hiragana: [],
        katakana: [],
        n5: []
    } as InitialSetup),

    actions: {
        setNextDay(alphabet: string, kana: kanas, type: string, time: number) {
            const nextDate = new Date().getTime() + (time * 24 * 60 * 60 * 1000)
            switch (alphabet) {
                case 'hiragana':
                    // eslint-disable-next-line no-case-declarations
                    const hira = this.hiragana
                    hira.map((h: kanas) => {
                        if (h.letter === kana.letter) {
                            h.lastChoice = type
                            h.nextDate = nextDate
                        }
                        return h
                    })
                    localStorage.setItem('hiragana', JSON.stringify(hira))
                    break;
                case 'katakana':
                    // eslint-disable-next-line no-case-declarations
                    const kt = this.katakana
                    kt.map((h: kanas) => {
                        if (h.letter === kana.letter) {
                            h.lastChoice = type
                            h.nextDate = nextDate
                        }
                        return h
                    })
                    localStorage.setItem('katakana', JSON.stringify(kt))
                    break;
                case 'n5':
                    // eslint-disable-next-line no-case-declarations
                    const n5 = this.n5
                    n5.map((h: kanjis) => {
                        if (h.letter == kana.letter) {
                            h.lastChoice = type
                            h.nextDate = nextDate
                        }
                        return h
                    })
                    localStorage.setItem('n5', JSON.stringify(n5))
                    break;
            }
        }
    },

    getters: {
        getLocalStorageConfig: (state) => {
            const hiragana = localStorage.getItem('hiragana')
            const katakana = localStorage.getItem('katakana')
            const n5 = localStorage.getItem('n5')

            if (hiragana === null || katakana === null || n5 === null) {
                const initialSetup = initialUserSetup()
                initialSetup.getLetters
                initialSetup.setLocalStorageConfig(initialSetup.$state)
            } else {
                state.hiragana = JSON.parse(hiragana)
                state.katakana = JSON.parse(katakana)
                state.n5 = JSON.parse(n5)
            }
        },

        getHiraganaToPratice: (state) => {
            const currentDate = new Date()
            return state.hiragana.filter((kana: kanas) => kana.nextDate < currentDate.getTime())
        },
        getKatakanaToPratice: (state) => {
            const currentDate = new Date()
            return state.katakana.filter((kana: kanas) => kana.nextDate < currentDate.getTime())
        },
        getN5ToPratice: (state) => {
            const currentDate = new Date()
            return state.n5.filter((kana: kanjis) => kana.nextDate < currentDate.getTime())
        }
    }
})

