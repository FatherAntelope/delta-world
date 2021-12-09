const LOGGER_MESSAGES = {
  SERVER: {
    ON: 'The server is started on http://{}:{}',
    OFF: 'The server is turned off'
  },
  GET_USER_LIST: {
    REQUEST: '[UserController.getUsers] Request from the user. search={}',
    RESPONSE: {
      SUCCESS: '[UserController.getUsers] | SUCCESS | Response to the user. data={}',
      ERROR: '[UserController.getUsers] | ERROR | Response to the user. status={} message={}'
    },
    FETCH: {
      SUCCESS: '[UserController.getUsers] | SUCCESS | Response from DymMyAPI. status={}',
      ERROR: '[UserController.getUsers] | ERROR | Response from DymMyAPI. status={} message={}'
    }
  }
};

export default LOGGER_MESSAGES;
