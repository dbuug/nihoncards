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
    kanji: string
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
        setNextDay: (alphabet: string, kana: kanas | kanjis, choice: string) => {
            switch (alphabet) {
                case 'hiragana':
                    console.log('case hiragana')
                    console.log(kana)
                    console.log(choice)
                    break;
                case 'katakana':
                    console.log('case katakana')
                    console.log(kana)
                    console.log(choice)
                    break;
                case 'kanji':
                    console.log('case knaji')
                    console.log(kana)
                    console.log(choice)
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

