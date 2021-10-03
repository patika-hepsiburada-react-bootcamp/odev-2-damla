import axios from "axios";

/**
 * Will fetch the data according to userId parameter.
 * @returns {Promise} Promise object represents user info and posts belong to user.
 */

const getRandomWord = async () => {
    try {
        // extracted data from the incoming object
        let { data: words } = await axios('https://random-word-api.herokuapp.com/word?number=10&swear=0');

        const wordList = [...words];
        const wordIndex = Math.floor(Math.random() * wordList.length);

        return wordList[wordIndex];

    } catch (error) {
        // returning error message 
        return error.message;
    }
}
export default getRandomWord;