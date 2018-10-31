import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

export const helloAsync: Handler = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event
    })
  };
};
