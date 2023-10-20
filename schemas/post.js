import {FcFinePrint} from 'react-icons/fc'
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
    name: 'post',
    title: 'Post',
    type: 'document',
    icon: FcFinePrint,
    fields: [
        {
            name: 'seoImage',
            title: 'SEO Image',
            type: 'image',
            description: 'Изображение для соц. сетей',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                }
            ],
            validation: Rule => Rule.required(),
        },
        {
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'object',
            validation: Rule => Rule.required(),
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
            ]
            
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: Rule => Rule.required(),
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
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
            validation: Rule => Rule.required(),
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'date',
            validation: Rule => Rule.required(),
        },
        {
            name: 'readingTime',
            title: 'Reading time',
            type: 'internationalizedArrayString',
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'seoTitle',
                maxLength: 200, 
                slugify: input => input
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w\-]+/g, '-')
                .slice(0, 200)
              },
            validation: Rule => Rule.required()
        },
        {
            name: 'button',
            title: 'Button',
            type: 'internationalizedArrayString',
            validation: Rule => Rule.required(),
        },
        {
            name: 'backButton',
            title: 'Back Button',
            type: 'internationalizedArrayString',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Body content', 
            name: 'body',
            type: 'object',
            validation: Rule => Rule.required(),
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
                        { 
                            type: 'image',
                            fields: [
                                {
                                    name: 'alt',
                                    title: 'Alternative text',
                                    type: 'string',
                                },
                            ],
                            options: {
                                hotspot: true
                            }
                        
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
                        { 
                            type: 'image',
                            fields: [
                                {
                                    name: 'alt',
                                    title: 'Alternative text',
                                    type: 'string',
                                    options: {
                                        isHighlighted: true,
                                    },
                                },
                            ],
                            options: {
                                hotspot: true
                            }
                        
                        },
                    ],
                },
            ]
        },
    ],
}
