import * as uuid from 'uuid';
import handler from './util/handler';
import dynamoDb from './util/dynamodb';

export const main = handler(async (event) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      // The attributes of the item to be created
      userId: '123',
      gameId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now(),
    }
  };

  await dynamoDb.put(params).promise();

  return params.Item;
})
