SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "torup/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.18"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "torup": {
      "main": "torup.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {},
  packages: {}
});
