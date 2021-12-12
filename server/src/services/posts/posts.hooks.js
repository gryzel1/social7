const { authenticate } = require('@feathersjs/authentication').hooks;

function includePost() {
  // The hook function itself is returned.
  return context => {
    const usersModel = context.app.services.users.Model;

    context.params.sequelize = {
      include: [{ model:usersModel, as: 'User', attributes: ['username', 'name', 'id']}]
    };
  };
}

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [  includePost() ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
