import { FcRules } from "react-icons/fc";
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
    name: 'policy',
    title: 'Policy',
    type: 'document',
    icon: FcRules,
    fields: [
        {
            name: 'policy',
            title: 'Policy',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
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

    ]
}