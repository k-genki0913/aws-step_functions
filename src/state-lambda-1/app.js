exports.lambdaHandler = async (event, context) => {
  return {
    count: 2,
    users: [
      {
        user_id: 1,
        user_name: 'test1',
      },
      {
        user_id: 2,
        user_name: 'test2',
      },
    ],
  };
};
