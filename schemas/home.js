import { FcHome } from 'react-icons/fc'
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
    name: 'home',
    title: 'Home',
    type: 'document',
    icon: FcHome,
    fields: [
        {
            name: 'home',
            title: 'Home',
            type: 'string',
        },
        //Content
        {
            name: 'title',
            title: 'Title',
            type: 'internationalizedArrayString',
            description: 'Заголовок',
            validation: Rule => Rule.required(),
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
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
            name: 'bgImage',
            title: 'Background Image',
            type: 'image',
            description: 'Изображение фона',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                    description: 'Important for SEO and accessiblity.',
                }
            ],
            validation: Rule => Rule.required(),
        },
        {
            name: 'callToAction',
            title: 'Call to Action',
            type: 'internationalizedArrayString',
            description: 'Кнопка',
            validation: Rule => Rule.required(),
        }
    ],
}