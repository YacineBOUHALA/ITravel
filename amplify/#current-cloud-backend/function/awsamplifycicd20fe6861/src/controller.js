/* eslint-disable no-console */
/* eslint-disable object-shorthand */
/* eslint-disable import/extensions */

import AWS from 'aws-sdk';
import { Place } from './model/model.js';

const dynamodb = new AWS.DynamoDB.DocumentClient();

export const createPlace = async (body) => {
  try {
    const requestBody = JSON.parse(body);
    console.log('requestBody - -> ', requestBody);
    const params = {
      TableName: 'travelPlacess-dev',
      Item: new Place(requestBody),
    };

    const res = await dynamodb.put(params).promise();
    return res;
  } catch (error) {
    // console.log("------- ", error)
    return error;
  }
}

export const updatePlace = async (body) => {
  try {
    const requestBody = JSON.parse(body);
    console.log('requestBody - -> ', requestBody);
    const params = {
      TableName: 'travelPlacess-dev',
      Item: new Place(requestBody),
    };

    const res = await dynamodb.update(params).promise();
    return res;
  } catch (error) {
    // console.log("------- ", error)
    return error;
  }
}

export const getPlaces = async () => {
  try {
    const params = {
      TableName: 'travelPlacess-dev',
    };
    const result = await dynamodb.scan(params).promise();
    return result?.Items;
  } catch (error) {
    return error
  }
}

export const deletePlace = async (id, placeName) => {
  try {
    const params = {
      TableName: 'travelPlacess-dev',
      Key: {
        id: id,
        placeName: placeName,
      },
    };

    const res = await dynamodb.delete(params).promise();

    return res
  } catch (error) {
    console.error('Error deleting item from DynamoDB:', error);
    return error;
  }
}
