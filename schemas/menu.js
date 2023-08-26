import {MenuIcon} from '@sanity/icons' 

export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    icon: MenuIcon,
    fields: [
        {
            name: 'menu',
            title: 'Menu',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'internationalizedArrayString',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'menu',
                maxLength: 200,
                slugify: input => input
                        .toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/[^\w\-]+/g, '-')
                        .slice(0, 200)
            },
        },
        {
            name: 'bg',
            title: 'Background Color',
            type: 'color',
            description: 'Цвет фона',
        },
    ]
}