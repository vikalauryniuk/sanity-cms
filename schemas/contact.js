import {EnvelopeIcon} from '@sanity/icons'

export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    icon: EnvelopeIcon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'internationalizedArrayString',
            description: 'Заголовок',
            //validation: Rule => Rule.required(),
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'internationalizedArrayString',
            description: 'Подзаголовок',
            //validation: Rule => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'internationalizedArrayString',
            description: 'Описание',
            //validation: Rule => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Изображение',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                    description: 'Alt',
                }
            ],
        }
    ]
}