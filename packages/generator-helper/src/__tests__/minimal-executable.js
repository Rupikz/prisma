#!/usr/bin/env node

const { generatorHandler } = require('../../dist/generatorHandler')

generatorHandler({
  async onGenerate() {
    console.log('Logging in onGenerate should be fine')
    await new Promise((r) => {
      setTimeout(r, 100)
    })
  },
  onManifest() {
    console.log('Logging in onManifest should be fine')
    return {
      defaultOutput: 'default-output',
      denylists: { models: ['SomeForbiddenModel'] },
      prettyName: 'This is a pretty pretty name',
      requiresEngines: ['introspection-engine', 'query-engine'],
      requiresGenerators: ['prisma-client-js'],
    }
  },
})
