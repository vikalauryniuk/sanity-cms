import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {colorInput} from '@sanity/color-input'
import {documentInternationalization} from '@sanity/document-internationalization'


export default defineConfig({
  name: 'default',
  title: 'vicy-cms',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [
    deskTool(), 
    visionTool(),
    unsplashImageAsset(),
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'ru', title: 'Russian'}
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string'],
      buttonLocations: ['field', 'unstable__fieldAction', 'document'], 
      buttonAddAll: false
    }),
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'ru', title: 'Russian'}
      ],
      defaultLanguage: 'en',
      schemaTypes: ['service'],
    }),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
