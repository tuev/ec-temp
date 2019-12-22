/**
 * Container organism Generator
 */

/* eslint strict: ["off"] */

'use strict'

const { componentExists } = require('../utils/componentExists')

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with this name already exists'
            : true
        }

        return 'The name is required'
      },
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'styled',
      default: false,
      message: 'Do you want to add styled-compent definition?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const path = '../src/containers/organisms/'
    const actions = [
      {
        type: 'add',
        path: path + '{{properCase name}}/index.tsx',
        templateFile: './organism/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path + '{{properCase name}}/{{properCase name}}.tsx',
        templateFile: './organism/organism.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path + '{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: './organism/stories.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path + '{{properCase name}}/{{properCase name}}.mdx',
        templateFile: './organism/stories.mdx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          path + '{{properCase name}}/__test__/{{properCase name}}.spec.tsx',
        templateFile: './organism/test.tsx.hbs',
        abortOnFail: true,
      },
    ]

    // If the user wants Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: path + '{{properCase name}}/Loadable.tsx',
        templateFile: './organism/loadable.tsx.hbs',
        abortOnFail: true,
      })
    }
    if (data.styled) {
      actions.push({
        type: 'add',
        path: path + '{{properCase name}}/{{properCase name}}.styled.tsx',
        templateFile: './organism/styled.tsx.hbs',
        abortOnFail: true,
      })
    }

    actions.push({
      type: 'prettify',
      path: '/containers/',
    })
    return actions
  },
}
