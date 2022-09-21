export default {
    name: 'homepageMisc',
    title: 'Homepage Miscellaneous',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'visionMission',
            title: 'Vission Mission Content',
            type: 'object',
            fields: [
                {
                    name: "vision",
                    title: 'Vision',
                    type: 'object',
                    fields: [
                        {
                            name: "img",
                            title: "Vision Image",
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: 'body',
                            title: 'Vision Body',
                            type: 'blockContent',
                        },
                    ]
                },
                {
                    name: "mission",
                    title: 'Mission',
                    type: 'object',
                    fields: [
                        {
                            name: "img",
                            title: "Mission Image",
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: 'body',
                            title: 'Mission Body',
                            type: 'blockContent',
                        },
                    ]
                },
                {
                    name: "e_networking",
                    title: 'E-Networking',
                    type: 'object',
                    fields: [
                        {
                            name: "img",
                            title: "E-Networking Image",
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: 'body',
                            title: 'E-Networking Body',
                            type: 'blockContent',
                        },
                    ]
                },
                {
                    name: "incubation_center",
                    title: 'Incubation Center',
                    type: 'object',
                    fields: [
                        {
                            name: "img",
                            title: "Incubation Center Image",
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: 'body',
                            title: 'Incubation Center Body',
                            type: 'blockContent',
                        },
                    ]
                },
                {
                    name: "nec",
                    title: 'NEC',
                    type: 'object',
                    fields: [
                        {
                            name: "img",
                            title: "NEC Image",
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: 'body',
                            title: 'NEC Body',
                            type: 'blockContent',
                        },
                    ]
                },
            ],
        },

        {
            name: 'aboutUs',
            title: 'About Us',
            type: 'object',
            fields: [
                {
                    name: "images",
                    title: 'About Us Images',
                    type: 'object',
                    fields: [
                        {
                            name: "img1",
                            title: "Image 1",
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: "img2",
                            title: "Image 2",
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: "img3",
                            title: "Image 3",
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                    ]
                },
                {
                    name: 'body',
                    title: 'About Us Content',
                    type: 'blockContent',
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}
