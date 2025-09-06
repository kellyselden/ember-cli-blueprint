'use strict';

module.exports = {
  locals() {
    return {
      fileMap: {
        '^_package.json$': 'package.json',
      },
    };
  },
};
