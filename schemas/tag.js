import {FcKey} from 'react-icons/fc'
export default {
    name: 'tag',
    title: 'Tag',
    type: 'document',
    icon: FcKey,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'The name of the tag',
            validation: Rule => Rule.required(),
        },
    ],
}