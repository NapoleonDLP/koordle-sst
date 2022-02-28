import handler from './util/handler';
// import dynamoDb from './util/dynamodb';
import randomWord from 'random-word-by-length';

export const main = handler(async (event) => {
  const newWord = await randomWord(5);

  console.log("New word from main randomWord: ", newWord);

  return newWord;
});
