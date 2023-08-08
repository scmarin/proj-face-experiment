import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'exer10',

  projectId: 's8ovcl9f',
  dataset: 'subjects',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  token: "sk7CX1Tv1Z9SzG6HLdJVIscZxtKy6rpFl2cntQgrq4XYX2YYeJ7edqQ2VofvrfBt9Qd08gkT8pSS4IoceE3w58bmQOvEvPbnCF4JWAI8HjiYvY4qg5jYOYew1OHLHOWMIkB5lhMKBcPPCA8DSWjNMWN0xGCBi2AOs8ZjvLjU0wru886oTIih"
})
