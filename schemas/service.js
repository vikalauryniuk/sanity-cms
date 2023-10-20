import {FcSettings} from 'react-icons/fc'
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
    name: 'service',
    title: 'Service',
    type: 'document',
    icon: FcSettings,
    fields: [
        {
            name: 'service',
            title: 'Service',
            type: 'string',
        }, 
        {
            name: 'seoImage',
            title: 'SEO Image',
            type: 'image',
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
            name: 'title',
            title: 'Title',
            type: 'internationalizedArrayString',
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
            name: 'image',
            title: 'Image',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ],
            options: {
                hotspot: true,
            },
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
                // eslint-disable-next-line no-useless-escape
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
        {
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        },
    ]
}