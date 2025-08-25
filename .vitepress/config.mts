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
    "text": "Configuration file",
    "link": "/api-reference/configuration-file/index",
    "items": [
        { "text": "addons_path", "link": "/api-reference/configuration-file/addons-path" },
        { "text": "admin_passwd", "link": "/api-reference/configuration-file/admin-passwd" },
        { "text": "csv_internal_sep", "link": "/api-reference/configuration-file/csv-internal-sep" },
        { "text": "data_dir", "link": "/api-reference/configuration-file/data-dir" },
        { "text": "db_host", "link": "/api-reference/configuration-file/db-host" },
        { "text": "db_maxconn", "link": "/api-reference/configuration-file/db-maxconn" },
        { "text": "db_maxconn_gevent", "link": "/api-reference/configuration-file/db-maxconn-gevent" },
        { "text": "db_name", "link": "/api-reference/configuration-file/db-name" },
        { "text": "db_password", "link": "/api-reference/configuration-file/db-password" },
        { "text": "db_port", "link": "/api-reference/configuration-file/db-port" },
        { "text": "db_replica_host", "link": "/api-reference/configuration-file/db-replica-host" },
        { "text": "db_replica_port", "link": "/api-reference/configuration-file/db-replica-port" },
        { "text": "db_sslmode", "link": "/api-reference/configuration-file/db-sslmode" },
        { "text": "db_template", "link": "/api-reference/configuration-file/db-template" },
        { "text": "db_user", "link": "/api-reference/configuration-file/db-user" },
        { "text": "dbfilter", "link": "/api-reference/configuration-file/dbfilter" },
        { "text": "email_from", "link": "/api-reference/configuration-file/email-from" },
        { "text": "from_filter", "link": "/api-reference/configuration-file/from-filter" },
        { "text": "geoip_city_db", "link": "/api-reference/configuration-file/geoip-city-db" },
        { "text": "geoip_country_db", "link": "/api-reference/configuration-file/geoip-country-db" },
        { "text": "gevent_port", "link": "/api-reference/configuration-file/gevent-port" },
        { "text": "http_enable", "link": "/api-reference/configuration-file/http-enable" },
        { "text": "http_interface", "link": "/api-reference/configuration-file/http-interface" },
        { "text": "http_port", "link": "/api-reference/configuration-file/http-port" },
        { "text": "import_partial", "link": "/api-reference/configuration-file/import-partial" },
        { "text": "limit_memory_hard", "link": "/api-reference/configuration-file/limit-memory-hard" },
        { "text": "limit_memory_hard_gevent", "link": "/api-reference/configuration-file/limit-memory-hard-gevent" },
        { "text": "limit_memory_soft", "link": "/api-reference/configuration-file/limit-memory-soft" },
        { "text": "limit_memory_soft_gevent", "link": "/api-reference/configuration-file/limit-memory-soft-gevent" },
        { "text": "limit_request", "link": "/api-reference/configuration-file/limit-request" },
        { "text": "limit_time_cpu", "link": "/api-reference/configuration-file/limit-time-cpu" },
        { "text": "limit_time_real", "link": "/api-reference/configuration-file/limit-time-real" },
        { "text": "limit_time_real_cron", "link": "/api-reference/configuration-file/limit-time-real-cron" },
        { "text": "limit_time_worker_cron", "link": "/api-reference/configuration-file/limit-time-worker-cron" },
        { "text": "list_db", "link": "/api-reference/configuration-file/list-db" },
        { "text": "log_db", "link": "/api-reference/configuration-file/log-db" },
        { "text": "log_db_level", "link": "/api-reference/configuration-file/log-db-level" },
        { "text": "log_handler", "link": "/api-reference/configuration-file/log-handler" },
        { "text": "log_level", "link": "/api-reference/configuration-file/log-level" },
        { "text": "logfile", "link": "/api-reference/configuration-file/logfile" },
        { "text": "max_cron_threads", "link": "/api-reference/configuration-file/max-cron-threads" },
        { "text": "osv_memory_count_limit", "link": "/api-reference/configuration-file/osv-memory-count-limit" },
        { "text": "pg_path", "link": "/api-reference/configuration-file/pg-path" },
        { "text": "pidfile", "link": "/api-reference/configuration-file/pidfile" },
        { "text": "pre_upgrade_scripts", "link": "/api-reference/configuration-file/pre-upgrade-scripts" },
        { "text": "proxy_mode", "link": "/api-reference/configuration-file/proxy-mode" },
        { "text": "reportgz", "link": "/api-reference/configuration-file/reportgz" },
        { "text": "screencasts", "link": "/api-reference/configuration-file/screencasts" },
        { "text": "screenshots", "link": "/api-reference/configuration-file/screenshots" },
        { "text": "server_wide_modules", "link": "/api-reference/configuration-file/server-wide-modules" },
        { "text": "smtp_password", "link": "/api-reference/configuration-file/smtp-password" },
        { "text": "smtp_port", "link": "/api-reference/configuration-file/smtp-port" },
        { "text": "smtp_server", "link": "/api-reference/configuration-file/smtp-server" },
        { "text": "smtp_ssl", "link": "/api-reference/configuration-file/smtp-ssl" },
        { "text": "smtp_ssl_certificate_filename", "link": "/api-reference/configuration-file/smtp-ssl-certificate-filename" },
        { "text": "smtp_ssl_private_key_filename", "link": "/api-reference/configuration-file/smtp-ssl-private-key-filename" },
        { "text": "smtp_user", "link": "/api-reference/configuration-file/smtp-user" },
        { "text": "syslog", "link": "/api-reference/configuration-file/syslog" },
        { "text": "test_enable", "link": "/api-reference/configuration-file/test-enable" },
        { "text": "test_file", "link": "/api-reference/configuration-file/test-file" },
        { "text": "test_tags", "link": "/api-reference/configuration-file/test-tags" },
        { "text": "transient_age_limit", "link": "/api-reference/configuration-file/transient-age-limit" },
        { "text": "translate_modules", "link": "/api-reference/configuration-file/translate-modules" },
        { "text": "unaccent", "link": "/api-reference/configuration-file/unaccent" },
        { "text": "upgrade_path", "link": "/api-reference/configuration-file/upgrade-path" },
        { "text": "websocket_keep_alive_timeout", "link": "/api-reference/configuration-file/websocket-keep-alive-timeout" },
        { "text": "websocket_rate_limit_burst", "link": "/api-reference/configuration-file/websocket-rate-limit-burst" },
        { "text": "websocket_rate_limit_delay", "link": "/api-reference/configuration-file/websocket-rate-limit-delay" },
        { "text": "without_demo", "link": "/api-reference/configuration-file/without-demo" },
        { "text": "workers", "link": "/api-reference/configuration-file/workers" },
        { "text": "x_sendfile", "link": "/api-reference/configuration-file/x-sendfile" }
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
                            },
                            {
                                text: 'version',
                                link: '/api-reference/manifest/version',
                            },
                            {
                                text: 'category',
                                link: '/api-reference/manifest/category',
                            },
                            {
                                text: 'sequence',
                                link: '/api-reference/manifest/sequence',
                            },
                            {
                                text: 'description',
                                link: '/api-reference/manifest/description',
                            },
                            {
                                text: 'author',
                                link: '/api-reference/manifest/author',
                            },
                            {
                                text: 'website',
                                link: '/api-reference/manifest/website',
                            },
                            {
                                text: 'license',
                                link: '/api-reference/manifest/license',
                            },
                            {
                                text: 'application',
                                link: '/api-reference/manifest/application',
                            },
                            {
                                text: 'installable',
                                link: '/api-reference/manifest/installable',
                            },
                            {
                                text: 'auto_install',
                                link: '/api-reference/manifest/auto-install',
                            },
                            {
                                text: 'depends',
                                link: '/api-reference/manifest/depends',
                            },
                            {
                                text: 'data',
                                link: '/api-reference/manifest/data',
                            },
                            {
                                text: 'demo',
                                link: '/api-reference/manifest/demo',
                            },
                            {
                                text: 'qweb',
                                link: '/api-reference/manifest/qweb',
                            },
                            {
                                text: 'images',
                                link: '/api-reference/manifest/images',
                            },
                            {
                                text: 'external_dependencies',
                                link: '/api-reference/manifest/external-dependencies',
                            },
                            {
                                text: 'maintainers',
                                link: '/api-reference/manifest/maintainers',
                            },
                            {
                                text: 'contributors',
                                link: '/api-reference/manifest/contributors',
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
                            },
                            {
                                text: '_rec_name',
                                link: '/api-reference/model-parameters/rec-name',
                            },
                            {
                                text: '_order',
                                link: '/api-reference/model-parameters/order',
                            },
                            {
                                text: '_inherit',
                                link: '/api-reference/model-parameters/inherit',
                            },
                            {
                                text: '_inherits',
                                link: '/api-reference/model-parameters/inherits',
                            },
                            {
                                text: '_table',
                                link: '/api-reference/model-parameters/table',
                            },
                            {
                                text: '_table_query',
                                link: '/api-reference/model-parameters/table-query',
                            },
                            {
                                text: '_parent_name',
                                link: '/api-reference/model-parameters/parent-name',
                            },
                            {
                                text: '_parent_store',
                                link: '/api-reference/model-parameters/parent-store',
                            },
                            {
                                text: '_parent_order',
                                link: '/api-reference/model-parameters/parent-order',
                            },
                            {
                                text: '_fold_name',
                                link: '/api-reference/model-parameters/fold-name',
                            },
                            {
                                text: '_log_access',
                                link: '/api-reference/model-parameters/log-access',
                            },
                            {
                                text: '_abstract',
                                link: '/api-reference/model-parameters/abstract',
                            },
                            {
                                text: '_transient',
                                link: '/api-reference/model-parameters/transient',
                            },
                            {
                                text: '_check_company_auto',
                                link: '/api-reference/model-parameters/check-company-auto',
                            },
                            {
                                text: '_sequence',
                                link: '/api-reference/model-parameters/sequence',
                            },
                            {
                                text: '_sql_constraints',
                                link: '/api-reference/model-parameters/sql-constraints',
                            },
                            {
                                text: '_constraints',
                                link: '/api-reference/model-parameters/constraints',
                            },
                            {
                                text: '_default_order',
                                link: '/api-reference/model-parameters/default-order',
                            },
                            {
                                text: '_register',
                                link: '/api-reference/model-parameters/register',
                            },
                            {
                                text: '_custom',
                                link: '/api-reference/model-parameters/custom',
                            }
                        ]
                    },
                    {
                        text: 'Field types',
                        link: '/api-reference/field-types',
                        items: [
                            // Basic
                            {
                                text: 'Char',
                                link: '/api-reference/field-types/char',
                            },
                            {
                                text: 'Text',
                                link: '/api-reference/field-types/text',
                            },
                            {
                                text: 'Integer',
                                link: '/api-reference/field-types/integer',
                            },
                            {
                                text: 'Float',
                                link: '/api-reference/field-types/float',
                            },
                            {
                                text: 'Boolean',
                                link: '/api-reference/field-types/boolean',
                            },

                            // Date & Time
                            {
                                text: 'Date',
                                link: '/api-reference/field-types/date',
                            },
                            {
                                text: 'Datetime',
                                link: '/api-reference/field-types/datetime',
                            },
                            {
                                text: 'Time',
                                link: '/api-reference/field-types/time',
                            },

                            // Binary / HTML
                            {
                                text: 'Binary',
                                link: '/api-reference/field-types/binary',
                            },
                            {
                                text: 'Html',
                                link: '/api-reference/field-types/html',
                            },

                            // Relations
                            {
                                text: 'Many2one',
                                link: '/api-reference/field-types/many2one',
                            },
                            {
                                text: 'One2many',
                                link: '/api-reference/field-types/one2many',
                            },
                            {
                                text: 'Many2many',
                                link: '/api-reference/field-types/many2many',
                            },

                            // Special
                            {
                                text: 'Selection',
                                link: '/api-reference/field-types/selection',
                            },
                            {
                                text: 'Monetary',
                                link: '/api-reference/field-types/monetary',
                            },
                            {
                                text: 'Reference',
                                link: '/api-reference/field-types/reference',
                            },
                            {
                                text: 'Serialized',
                                link: '/api-reference/field-types/serialized',
                            },
                            {
                                text: 'Json',
                                link: '/api-reference/field-types/json',
                            },
                            {
                                text: 'Properties',
                                link: '/api-reference/field-types/properties',
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
                            },
                            {
                                text: 'readonly',
                                link: '/api-reference/field-parameters/readonly',
                            },
                            {
                                text: 'index',
                                link: '/api-reference/field-parameters/index',
                            },
                            {
                                text: 'copy',
                                link: '/api-reference/field-parameters/copy',
                            },
                            {
                                text: 'default',
                                link: '/api-reference/field-parameters/default',
                            },
                            {
                                text: 'help',
                                link: '/api-reference/field-parameters/help',
                            },
                            {
                                text: 'groups',
                                link: '/api-reference/field-parameters/groups',
                            },
                            {
                                text: 'states',
                                link: '/api-reference/field-parameters/states',
                            },
                            {
                                text: 'domain',
                                link: '/api-reference/field-parameters/domain',
                            },
                            {
                                text: 'context',
                                link: '/api-reference/field-parameters/context',
                            },
                            {
                                text: 'ondelete',
                                link: '/api-reference/field-parameters/ondelete',
                            },
                            {
                                text: 'relation',
                                link: '/api-reference/field-parameters/relation',
                            },
                            {
                                text: 'inverse_name',
                                link: '/api-reference/field-parameters/inverse-name',
                            },
                            {
                                text: 'comodel_name',
                                link: '/api-reference/field-parameters/comodel-name',
                            },
                            {
                                text: 'related',
                                link: '/api-reference/field-parameters/related',
                            },
                            {
                                text: 'store',
                                link: '/api-reference/field-parameters/store',
                            },
                            {
                                text: 'compute',
                                link: '/api-reference/field-parameters/compute',
                            },
                            {
                                text: 'search',
                                link: '/api-reference/field-parameters/search',
                            },
                            {
                                text: 'depends',
                                link: '/api-reference/field-parameters/depends',
                            },
                            {
                                text: 'tracking',
                                link: '/api-reference/field-parameters/tracking',
                            },
                            {
                                text: 'translate',
                                link: '/api-reference/field-parameters/translate',
                            },
                            {
                                text: 'sanitize',
                                link: '/api-reference/field-parameters/sanitize',
                            },
                            {
                                text: 'sanitize_overridable',
                                link: '/api-reference/field-parameters/sanitize-overridable',
                            },
                            {
                                text: 'selection',
                                link: '/api-reference/field-parameters/selection',
                            },
                            {
                                text: 'size',
                                link: '/api-reference/field-parameters/size',
                            },
                            {
                                text: 'digits',
                                link: '/api-reference/field-parameters/digits',
                            },
                            {
                                text: 'currency_field',
                                link: '/api-reference/field-parameters/currency-field',
                            },
                            {
                                text: 'company_dependent',
                                link: '/api-reference/field-parameters/company-dependent',
                            },
                            {
                                text: 'precompute',
                                link: '/api-reference/field-parameters/precompute',
                            }
                        ]
                    },
                    {
                        text: 'API decorators',
                        link: '/api-reference/decorators',
                        items: [
                            {
                                text: '@api.model',
                                link: '/api-reference/decorators/api-model',
                            },
                            {
                                text: '@api.model_create_multi',
                                link: '/api-reference/decorators/api-model-create-multi',
                            },
                            {
                                text: '@api.depends',
                                link: '/api-reference/decorators/api-depends',
                            },
                            {
                                text: '@api.constrains',
                                link: '/api-reference/decorators/api-constrains',
                            },
                            {
                                text: '@api.onchange',
                                link: '/api-reference/decorators/api-onchange',
                            },
                            {
                                text: '@api.returns',
                                link: '/api-reference/decorators/api-returns',
                            },
                            {
                                text: '@api.autovacuum',
                                link: '/api-reference/decorators/api-autovacuum',
                            }
                        ]
                    },
                    {
                        text: 'ORM methods',
                        link: '/api-reference/orm-methods',
                        items: [
                            // CRUD
                            {
                                text: 'create',
                                link: '/api-reference/orm-methods/create',
                            },
                            {
                                text: 'write',
                                link: '/api-reference/orm-methods/write',
                            },
                            {
                                text: 'unlink',
                                link: '/api-reference/orm-methods/unlink',
                            },
                            {
                                text: 'copy',
                                link: '/api-reference/orm-methods/copy',
                            },

                            // Search
                            {
                                text: 'search',
                                link: '/api-reference/orm-methods/search',
                            },
                            {
                                text: 'search_count',
                                link: '/api-reference/orm-methods/search-count',
                            },
                            {
                                text: 'browse',
                                link: '/api-reference/orm-methods/browse',
                            },
                            {
                                text: 'exists',
                                link: '/api-reference/orm-methods/exists',
                            },

                            // Read
                            {
                                text: 'read',
                                link: '/api-reference/orm-methods/read',
                            },
                            {
                                text: 'read_group',
                                link: '/api-reference/orm-methods/read-group',
                            },
                            {
                                text: 'name_get',
                                link: '/api-reference/orm-methods/name-get',
                            },
                            {
                                text: 'name_create',
                                link: '/api-reference/orm-methods/name-create',
                            },
                            {
                                text: 'name_search',
                                link: '/api-reference/orm-methods/name-search',
                            },

                            // Default / Prefetch
                            {
                                text: 'default_get',
                                link: '/api-reference/orm-methods/default-get',
                            },
                            {
                                text: 'ref',
                                link: '/api-reference/orm-methods/ref',
                            },
                            {
                                text: 'load',
                                link: '/api-reference/orm-methods/load',
                            },
                            {
                                text: 'export_data',
                                link: '/api-reference/orm-methods/export-data',
                            },
                            {
                                text: 'import_data',
                                link: '/api-reference/orm-methods/import-data',
                            },

                            // Misc
                            {
                                text: 'invalidate_cache',
                                link: '/api-reference/orm-methods/invalidate-cache',
                            },
                            {
                                text: 'flush',
                                link: '/api-reference/orm-methods/flush',
                            },
                            {
                                text: 'mapped',
                                link: '/api-reference/orm-methods/mapped',
                            },
                            {
                                text: 'filtered',
                                link: '/api-reference/orm-methods/filtered',
                            },
                            {
                                text: 'sorted',
                                link: '/api-reference/orm-methods/sorted',
                            },
                            {
                                text: 'with_context',
                                link: '/api-reference/orm-methods/with-context',
                            },
                            {
                                text: 'with_env',
                                link: '/api-reference/orm-methods/with-env',
                            },
                            {
                                text: 'sudo',
                                link: '/api-reference/orm-methods/sudo',
                            },
                            {
                                text: 'ensure_one',
                                link: '/api-reference/orm-methods/ensure-one',
                            }
                        ]
                    },
                    {
                        text: 'Environment attributes',
                        link: '/api-reference/environment-attributes',
                        items: [
                            {
                                text: 'env',
                                link: '/api-reference/environment-attributes/env',
                            },
                            {
                                text: 'env.cr',
                                link: '/api-reference/environment-attributes/env-cr',
                            },
                            {
                                text: 'env.uid',
                                link: '/api-reference/environment-attributes/env-uid',
                            },
                            {
                                text: 'env.user',
                                link: '/api-reference/environment-attributes/env-user',
                            },
                            {
                                text: 'env.company',
                                link: '/api-reference/environment-attributes/env-company',
                            },
                            {
                                text: 'env.companies',
                                link: '/api-reference/environment-attributes/env-companies',
                            },
                            {
                                text: 'env.context',
                                link: '/api-reference/environment-attributes/env-context',
                            },
                            {
                                text: 'env.registry',
                                link: '/api-reference/environment-attributes/env-registry',
                            },
                            {
                                text: 'env.norecompute',
                                link: '/api-reference/environment-attributes/env-norecompute',
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
                            },
                            {
                                text: 'record',
                                link: '/api-reference/view-tags/record',
                            },
                            {
                                text: 'field',
                                link: '/api-reference/view-tags/field',
                            },
                            {
                                text: 'form',
                                link: '/api-reference/view-tags/form',
                            },
                            {
                                text: 'tree',
                                link: '/api-reference/view-tags/tree',
                            },
                            {
                                text: 'kanban',
                                link: '/api-reference/view-tags/kanban',
                            },
                            {
                                text: 'search',
                                link: '/api-reference/view-tags/search',
                            },
                            {
                                text: 'calendar',
                                link: '/api-reference/view-tags/calendar',
                            },
                            {
                                text: 'pivot',
                                link: '/api-reference/view-tags/pivot',
                            },
                            {
                                text: 'graph',
                                link: '/api-reference/view-tags/graph',
                            },
                            {
                                text: 'gantt',
                                link: '/api-reference/view-tags/gantt',
                            },
                            {
                                text: 'activity',
                                link: '/api-reference/view-tags/activity',
                            },
                            {
                                text: 'qweb',
                                link: '/api-reference/view-tags/qweb',
                            },
                            {
                                text: 'xpath',
                                link: '/api-reference/view-tags/xpath',
                            },
                            {
                                text: 'menuitem',
                                link: '/api-reference/view-tags/menuitem',
                            },
                            {
                                text: 'act_window',
                                link: '/api-reference/view-tags/act-window',
                            },
                            {
                                text: 'act_window_close',
                                link: '/api-reference/view-tags/act-window-close',
                            },
                            {
                                text: 'report',
                                link: '/api-reference/view-tags/report',
                            },
                            {
                                text: 'template',
                                link: '/api-reference/view-tags/template',
                            }
                        ]
                    },
                    {
                        text: 'Tag attributes',
                        link: '/api-reference/tag-attributes',
                        items: [
                            // Universal
                            {
                                text: 'id',
                                link: '/api-reference/tag-attributes/id',
                            },
                            {
                                text: 'name',
                                link: '/api-reference/tag-attributes/name',
                            },
                            {
                                text: 'model',
                                link: '/api-reference/tag-attributes/model',
                            },
                            {
                                text: 'string',
                                link: '/api-reference/tag-attributes/string',
                            },
                            {
                                text: 'type',
                                link: '/api-reference/tag-attributes/type',
                            },
                            {
                                text: 'context',
                                link: '/api-reference/tag-attributes/context',
                            },
                            {
                                text: 'domain',
                                link: '/api-reference/tag-attributes/domain',
                            },
                            {
                                text: 'groups',
                                link: '/api-reference/tag-attributes/groups',
                            },
                            {
                                text: 'invisible',
                                link: '/api-reference/tag-attributes/invisible',
                            },
                            {
                                text: 'required',
                                link: '/api-reference/tag-attributes/required',
                            },
                            {
                                text: 'readonly',
                                link: '/api-reference/tag-attributes/readonly',
                            },
                            {
                                text: 'widget',
                                link: '/api-reference/tag-attributes/widget',
                            },

                            // Tree / Form specific
                            {
                                text: 'editable',
                                link: '/api-reference/tag-attributes/editable',
                            },
                            {
                                text: 'create',
                                link: '/api-reference/tag-attributes/create',
                            },
                            {
                                text: 'delete',
                                link: '/api-reference/tag-attributes/delete',
                            },
                            {
                                text: 'options',
                                link: '/api-reference/tag-attributes/options',
                            },
                            {
                                text: 'placeholder',
                                link: '/api-reference/tag-attributes/placeholder',
                            },
                            {
                                text: 'nolabel',
                                link: '/api-reference/tag-attributes/nolabel',
                            },
                            {
                                text: 'cols',
                                link: '/api-reference/tag-attributes/cols',
                            },
                            {
                                text: 'rows',
                                link: '/api-reference/tag-attributes/rows',
                            },

                            // Kanban specific
                            {
                                text: 'default_group_by',
                                link: '/api-reference/tag-attributes/default-group-by',
                            },
                            {
                                text: 'priority',
                                link: '/api-reference/tag-attributes/priority',
                            },

                            // Action / Menu
                            {
                                text: 'target',
                                link: '/api-reference/tag-attributes/target',
                            },
                            {
                                text: 'view_mode',
                                link: '/api-reference/tag-attributes/view-mode',
                            },
                            {
                                text: 'view_id',
                                link: '/api-reference/tag-attributes/view-id',
                            },
                            {
                                text: 'ref',
                                link: '/api-reference/tag-attributes/ref',
                            }
                        ]
                    },
                    {
                        text: 'Widgets',
                        link: '/api-reference/widgets',
                        items: [
                            {
                                text: 'float_time',
                                link: '/api-reference/widgets/float-time',
                            },
                            {
                                text: 'handle',
                                link: '/api-reference/widgets/handle',
                            },
                            {
                                text: 'statusbar',
                                link: '/api-reference/widgets/statusbar',
                            },
                            {
                                text: 'many2many_tags',
                                link: '/api-reference/widgets/many2many-tags',
                            },
                            {
                                text: 'many2one_avatar',
                                link: '/api-reference/widgets/many2one-avatar',
                            },
                            {
                                text: 'many2one_avatar_user',
                                link: '/api-reference/widgets/many2one-avatar-user',
                            },
                            {
                                text: 'binary',
                                link: '/api-reference/widgets/binary',
                            },
                            {
                                text: 'image',
                                link: '/api-reference/widgets/image',
                            },
                            {
                                text: 'url',
                                link: '/api-reference/widgets/url',
                            },
                            {
                                text: 'phone',
                                link: '/api-reference/widgets/phone',
                            },
                            {
                                text: 'email',
                                link: '/api-reference/widgets/email',
                            },
                            {
                                text: 'monetary',
                                link: '/api-reference/widgets/monetary',
                            },
                            {
                                text: 'percentpie',
                                link: '/api-reference/widgets/percentpie',
                            },
                            {
                                text: 'progressbar',
                                link: '/api-reference/widgets/progressbar',
                            },
                            {
                                text: 'priority',
                                link: '/api-reference/widgets/priority',
                            },
                            {
                                text: 'signature',
                                link: '/api-reference/widgets/signature',
                            },
                            {
                                text: 'boolean_toggle',
                                link: '/api-reference/widgets/boolean-toggle',
                            },
                            {
                                text: 'radio',
                                link: '/api-reference/widgets/radio',
                            },
                            {
                                text: 'selection',
                                link: '/api-reference/widgets/selection',
                            },
                            {
                                text: 'html',
                                link: '/api-reference/widgets/html',
                            },
                            {
                                text: 'ace',
                                link: '/api-reference/widgets/ace',
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
