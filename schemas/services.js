import {FcServices} from 'react-icons/fc'

export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    icon: FcServices,
    fields: [
      {
        name: 'services',
        title: 'Services',
        type: 'string',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'internationalizedArrayString',
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'internationalizedArrayString',
        validation: Rule => Rule.required(),
      },
      {
        name: 'allServices',
        title: 'All Services',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'service' }] }],
        validation: Rule => Rule.required(),
      },
    ],
  }