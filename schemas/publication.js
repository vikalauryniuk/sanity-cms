import {FcReading} from 'react-icons/fc'
const textEditorStyles = [
    { title: 'Paragraph', value: 'normal' },
    { title: 'Heading 1', value: 'h1' },
    { title: 'Heading 2', value: 'h2' },
    { title: 'Heading 3', value: 'h3' },
    { title: 'Bullet', value: 'bullet' },
    { title: 'Numbered', value: 'number' },
    { title: 'Quote', value: 'blockquote' },
];
export default {
    name: 'publication',
    title: 'Publication',
    type: 'document',
    icon: FcReading,
    fields: [
        {
            name: 'publication',
            title: 'Publication',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'description',
            title: 'description',
            type: 'object',
            fields: [
                {
                    title: 'English',
                    name: 'en',
                    type: 'array',
                    of: [
                        { 
                            type: 'block', 
                            styles: textEditorStyles 
                        }, 
                        
                    ],
                },
                {
                    title: 'Russian',
                    name: 'ru',
                    type: 'array',
                    of: [
                        { 
                            type: 'block', 
                            styles: textEditorStyles 
                        }, 
                        
                    ],
                },
            ],
            validation: Rule => Rule.required(),
        },
        {
            name: 'author',
            title: 'Author',
            type: 'internationalizedArrayString',
            validation: Rule => Rule.required(),
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
            validation: Rule => Rule.required(),
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        
        {
            name: 'button',
            title: 'Button',
            type: 'internationalizedArrayString',
            validation: Rule => Rule.required(),
        }
    ]
}