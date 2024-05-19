exports.lambdaHandler = async (event, context) => {
  return { count: event.result.count };
};
