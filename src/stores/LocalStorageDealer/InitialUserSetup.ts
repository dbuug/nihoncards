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
    traducao: string
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

