#!/usr/bin/env node

const { generatorHandler } = require('../../dist/generatorHandler')

generatorHandler({
  async onGenerate() {
    await new Promise((r) => {
      setTimeout(r, 100)
    })
    throw new Error('Oh no')
  },
  onManifest() {
    throw new Error('Nein')
  },
})
