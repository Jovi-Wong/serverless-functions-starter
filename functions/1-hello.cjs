// domain/.netlify/functions/1-hello

exports.handler = async (event, context) => {
  return {
    statusCode: 201,
    body: 'First lambda functions!!!',
  };
}