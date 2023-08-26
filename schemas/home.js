import { HomeIcon } from '@sanity/icons'

export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    icon: HomeIcon,
    fields: [
        {
            name: 'seoImage',
            title: 'SEO Image',
            type: 'image',
            description: 'Изображение для соц. сетей',
            options: {
                hotspot: true,
            },
            //validation: Rule => Rule.required(),
        },
        {
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            description: 'Title для соц. сетей',
            //validation: Rule => Rule.required(),
        },
        {
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'string',
            description: 'Description для соц. сетей',
            //validation: Rule => Rule.required(),
        },
        //Content
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
            name: 'bg',
            title: 'Background Color',
            type: 'color',
            description: 'Цвет фона',
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
                    //validation: Rule => Rule.required(),
                }
            ],
        },
        {
            name: 'callToAction',
            title: 'Call to Action',
            type: 'internationalizedArrayString',
            description: 'Кнопка',
            //validation: Rule => Rule.required(),
        }
    ],
}