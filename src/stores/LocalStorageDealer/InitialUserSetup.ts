import { defineStore } from 'pinia'
import alphabet from '@/alphabet/jp_letters.json'
import n5 from '@/alphabet/n5_kanjis.json'

interface lettersJson {
    letterGroup: string
    letter: string
    translation: string
}

interface kanjis {
    kanji: string
    hiragana: string
    romaji: string
    translation: string
}

interface kanas {
    letter: string
    hiragana?: string
    romaji?: string
    translation: string
    seenTimes: number
    lastChoice: number
    nextDate: number
}

export type InitialSetup = {
    hiragana: lettersJson[]
    katakana: lettersJson[]
    n5kanjis: kanjis[]
}
export const initialUserSetup = defineStore('initialUserSetup', {
    state: () => ({
        hiragana: [],
        katakana: [],
        n5kanjis: []
    } as InitialSetup),

    actions: {
        setLocalStorageConfig: (state: InitialSetup) => {
            const currentDate = new Date()
            const hiragana: kanas[] = state.hiragana.map((character: lettersJson) => {
                return {
                    letter: character.letter,
                    translation: character.translation,
                    seenTimes: 0,
                    lastChoice: 0,
                    nextDate: currentDate.getTime()
                }
            })
            const katakana: kanas[] = state.katakana.map((character: lettersJson) => {
                return {
                    letter: character.letter,
                    translation: character.translation,
                    seenTimes: 0,
                    lastChoice: 0,
                    nextDate: currentDate.getTime()
                }
            })
            const n5: kanas[] = state.n5kanjis.map((character: kanjis) => {
                return {
                    letter: character.kanji,
                    hiragana: character.hiragana,
                    romaji: character.romaji,
                    translation: character.translation,
                    seenTimes: 0,
                    lastChoice: 0,
                    nextDate: currentDate.getTime()
                }
            })
            localStorage.setItem('hiragana', JSON.stringify(hiragana))
            localStorage.setItem('katakana', JSON.stringify(katakana))
            localStorage.setItem('n5', JSON.stringify(n5))
            console.log('New kanas readed in localstorage')
        }
    },

    getters: {
        getLetters: (state) => {
            alphabet.forEach((letter) => {
                if (letter.letterGroup === 'hiragana') state.hiragana.push(letter)
                else state.katakana.push(letter)
            })
            state.n5kanjis = n5
        }
    }
})

