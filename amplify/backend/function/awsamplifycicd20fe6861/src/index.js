/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// const AWS = require('aws-sdk');
// const { createPlace } = require('./controller');
import { API_HEADERS, SERVER_ERROR_STATUS_CODE, SUCCESS_STATUS_CODE } from './constants/constants.js';
import { createPlace, deletePlace, getPlaces, updatePlace } from './controller.js';

export const handler = async (event) => {
  const { httpMethod, body } = event;
  console.log(":::: ", body)
  console.log(`EVENT: ${JSON.stringify(event)}`);
  if (httpMethod === 'POST') {
    try {
      const res = await createPlace(body)
      console.log('insrerted ', res)
      return {
        statusCode: SUCCESS_STATUS_CODE,
        headers: API_HEADERS,
        body: JSON.stringify('element inserted in dynamoDB'),
      };
    } catch (err) {
      return {
        statusCode: SERVER_ERROR_STATUS_CODE,
        headers: API_HEADERS,
        body: JSON.stringify('Fatal crach', err),
      }
    }
  } else if (httpMethod === 'GET') {
    try {
      const data = await getPlaces();
      return {
        statusCode: SUCCESS_STATUS_CODE,
        headers: API_HEADERS,
        body: JSON.stringify({ data: data }),
      };
    } catch (err) {
      return {
        statusCode: SERVER_ERROR_STATUS_CODE,
        headers: API_HEADERS,
        body: JSON.stringify('Fatal crach', err),
      }
    }
  } else if (httpMethod === 'DELETE') {
    try {
      const { id, placeName } = JSON.parse(event.body);
      const res = await deletePlace(id, placeName)
      return {
        statusCode: SUCCESS_STATUS_CODE,
        headers: API_HEADERS,
        body: JSON.stringify({ message: 'Item deleted successfully.' }),
      };
    } catch (err) {
      console.log(err)
      return {
        statusCode: SERVER_ERROR_STATUS_CODE,
        headers: API_HEADERS,
        body: JSON.stringify({ error: 'Failed to delete item from DynamoDB.' }),
      };
    }
  }
  // else if (httpMethod === 'PUT') {
  //   try {
  //     const { id, placeName } = JSON.parse(event.body);
  //     const res = await updatePlace(id, placeName)
  //     return {
  //       statusCode: SUCCESS_STATUS_CODE,
  //       headers: API_HEADERS,
  //       body: JSON.stringify({ message: 'Item updated successfully.' }),
  //     };
  //   } catch (err) {
  //     console.log(err)
  //     return {
  //       statusCode: SERVER_ERROR_STATUS_CODE,
  //       headers: API_HEADERS,
  //       body: JSON.stringify({ error: 'Failed to delete item from DynamoDB.' }),
  //     };
  //   }
  // }
};
