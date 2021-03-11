process.env = Object.assign(process.env, {
  VUE_APP_WELCOME: 'Welcome to  Vue.js App!!',
  VUE_APP_ENV_MODE: '開發環境!',
  VUE_APP_API_URL: 'http://localhost:9443/vuejs_demo_ws/services/'
})

module.exports = {
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/tests/**/*.spec.js'
  ],
  testURL: 'http://localhost/',
  preset: '@vue/cli-plugin-unit-jest',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: 'tests/unit_report.html'
      }
    ]
  ]
}
