import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Wasiu Portfolio',

  projectId: '4e8pclxh',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
