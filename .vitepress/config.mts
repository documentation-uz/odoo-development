import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
        title: "Odoo Development",
        description: "Learn today, work tomorrow!",
        srcDir: "src/pages/",
        head: [
            ['link', {rel: 'icon', href: 'https://i.imgur.com/qo0NNF9.png'}],
        ],
        themeConfig: {
            search: {
                provider: 'local'
            },
            editLink: {
                pattern: 'https://github.com/documentation-uz/odoo-development/tree/main/src/pages/:path',
                text: 'Edit this page on GitHub',
            },
            // https://vitepress.dev/reference/default-theme-config
            nav: [
                {text: 'Home', link: '/'},
                {text: 'Tutorial', link: '/tutorial'},
                {text: 'API Reference', link: '/api-reference/index'}
            ],

            sidebar: {
                '/api-reference/': [
                    {
                        text: 'API Reference',
                        link: '/api-reference/index'
                    },
                    {
                        text: 'Configuration file',
                        link: '/api-reference/configuration-file',
                        items: [
                            {
                                text: 'addons_path',
                                link: '/api-reference/configuration-file/addons-path',
                            },
                            {
                                text: 'admin_passwd',
                                link: '/api-reference/configuration-file/admin-passwd',
                            },
                            {
                                text: 'csv_internal_sep',
                                link: '/api-reference/configuration-file/csv-internal-sep',
                            },
                            {
                                text: 'data_dir',
                                link: '/api-reference/configuration-file/data-dir',
                            }
                        ]
                    },
                    {
                        text: 'Module structure',
                        link: '/api-reference/module-structure',
                        items: [
                            {
                                text: 'models',
                                link: '/api-reference/module-structure/models',
                            },
                            {
                                text: 'views',
                                link: '/api-reference/module-structure/views',
                            },
                            {
                                text: 'security',
                                link: '/api-reference/module-structure/security',
                            },
                            {
                                text: 'data',
                                link: '/api-reference/module-structure/data',
                            },
                            {
                                text: 'controllers',
                                link: '/api-reference/module-structure/controllers',
                            },
                            {
                                text: 'wizards',
                                link: '/api-reference/module-structure/wizards',
                            },
                            {
                                text: 'report',
                                link: '/api-reference/module-structure/report',
                            },
                            {
                                text: 'static',
                                link: '/api-reference/module-structure/static',
                                items: [
                                    {
                                        text: 'description',
                                        link: '/api-reference/module-structure/static/description',
                                    },
                                    {
                                        text: 'src',
                                        link: '/api-reference/module-structure/static/src',
                                        items: [
                                            {
                                                text: 'css',
                                                link: '/api-reference/module-structure/static/src/css',
                                            },
                                            {
                                                text: 'js',
                                                link: '/api-reference/module-structure/static/src/js',
                                            },
                                            {
                                                text: 'img',
                                                link: '/api-reference/module-structure/static/src/img',
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                text: 'i18n',
                                link: '/api-reference/module-structure/i18n',
                            },
                            {
                                text: 'tests',
                                link: '/api-reference/module-structure/tests',
                            },
                            {
                                text: '__init__.py',
                                link: '/api-reference/module-structure/init',
                            },
                            {
                                text: '__manifest__.py',
                                link: '/api-reference/module-structure/manifest',
                            }
                        ]
                    },
                    {
                        text: 'Manifest',
                        link: '/api-reference/manifest',
                        items: [
                            {
                                text: 'name',
                                link: '/api-reference/manifest/name',
                            },
                            {
                                text: 'summary',
                                link: '/api-reference/manifest/summary',
                            }
                        ]
                    },
                    {
                        text: 'Model types',
                        link: '/api-reference/model-types',
                        items: [
                            {
                                text: 'Model',
                                link: '/api-reference/model-types/model',
                            },
                            {
                                text: 'AbstractModel',
                                link: '/api-reference/model-types/abstract-model',
                            },
                            {
                                text: 'TransientModel',
                                link: '/api-reference/model-types/transient-model',
                            }
                        ]
                    },
                    {
                        text: 'Model parameters',
                        link: '/api-reference/model-parameters',
                        items: [
                            {
                                text: '_name',
                                link: '/api-reference/model-parameters/name',
                            },
                            {
                                text: '_description',
                                link: '/api-reference/model-parameters/description',
                            },
                            {
                                text: '_auto',
                                link: '/api-reference/model-parameters/auto',
                            }
                        ]
                    },
                    {
                        text: 'Field types',
                        link: '/api-reference/field-types',
                        items: [
                            {
                                text: 'Char',
                                link: '/api-reference/field-types/char',
                            },
                            {
                                text: 'Text',
                                link: '/api-reference/field-types/text',
                            }
                        ]
                    },
                    {
                        text: 'Field parameters',
                        link: '/api-reference/field-parameters',
                        items: [
                            {
                                text: 'string',
                                link: '/api-reference/field-parameters/string',
                            },
                            {
                                text: 'required',
                                link: '/api-reference/field-parameters/required',
                            }
                        ]
                    },
                    {
                        text: 'API decorators',
                        link: '/api-reference/decorators',
                        items: [
                            {
                                text: '@api.model_create_multi',
                                link: '/api-reference/decorators/api-model-create-multi',
                            },
                            {
                                text: '@api.model',
                                link: '/api-reference/decorators/api-model',
                            }
                        ]
                    },
                    {
                        text: 'ORM methods',
                        link: '/api-reference/orm-methods',
                        items: [
                            {
                                text: 'search',
                                link: '/api-reference/orm-methods/search',
                            },
                            {
                                text: 'search_count',
                                link: '/api-reference/orm-methods/search-count',
                            }
                        ]
                    },
                    {
                        text: 'Environment attributes',
                        link: '/api-reference/environment-attributes',
                        items: [
                            {
                                text: 'env.user',
                                link: '/api-reference/environment-attributes/env-user',
                            },
                            {
                                text: 'env.registry',
                                link: '/api-reference/environment-attributes/env-registry',
                            }
                        ]
                    },
                    {
                        text: 'View tags',
                        link: '/api-reference/view-tags',
                        items: [
                            {
                                text: 'odoo',
                                link: '/api-reference/view-tags/odoo',
                            },
                            {
                                text: 'data',
                                link: '/api-reference/view-tags/data',
                            }
                        ]
                    },
                    {
                        text: 'Widgets',
                        link: '/api-reference/widgets',
                        items: [
                            {
                                text: 'float_time',
                                link: '/api-reference/widgets/float_time',
                            },
                            {
                                text: 'handle',
                                link: '/api-reference/widgets/handle',
                            }
                        ]
                    }
                ]
            },
            socialLinks: [
                {icon: 'youtube', link: 'https://youtube.com/documentation-uz'},
                {icon: 'x', link: 'https://twitter.com/documentation-uz'},
                {icon: 'github', link: 'https://github.com/documentation-uz/odoo'}
            ]
        },
        ignoreDeadLinks: true
    }
)
