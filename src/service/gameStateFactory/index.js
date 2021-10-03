import getRandomWord from '../getRandomWords/'
import GAME_STARTED from '../../constants/gameStates'

const newGame = async () => {
    const gameWord = await getRandomWord();
    return {
        word: gameWord,
        characters: gameWord.split('').map(character => ({
            value: character,
            guessed: false,
        })),
        guesses: 5,
        gameState: GAME_STARTED,
        pastGuesses: [],
    };
}
export default newGame;