// gameConfig.js
export const GAME_CONFIG = {
  freeLetters: 5,
  turnMax: 3,

  difficultyLevels: {
    easy: 4,
    medium: 7,
    hard: 10
  },

  categories: ['Fruit', 'Animal'],
  
  api: {
    dictionaryEndpoint: 'https://api.dictionaryapi.dev/api/v2/entries/en'
  }
};