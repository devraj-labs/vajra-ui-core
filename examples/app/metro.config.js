const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

// Root of the local vajra-ui-core package
const pkgRoot = path.resolve(__dirname, '..', '..');

/**
 * Metro needs to watch the local package source so that changes to
 * vajra-ui-core are reflected without a full re-install. We also add the
 * package root to extraNodeModules so that any React / React-Native
 * imports inside the local package resolve to the app's own copies and
 * do not load a second instance.
 */
const config = {
  // Watch the workspace root as well as the app directory
  watchFolders: [pkgRoot],

  resolver: {
    // Ensure a single copy of react and react-native is used
    extraNodeModules: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
