const os = require('os');
const { DynamicPool } = require('node-worker-threads-pool');

const Pool = new DynamicPool(os.cpus().length, { shareEnv: true });

const someFunction = async (params) =>
  await Pool.exec({
    task: async function() {
      const { params } = this.workerData;
      console.log('params', params);
      return params;
    },
    workerData: {
      params,
    },
  });

module.exports = {
  someFunction,
};
