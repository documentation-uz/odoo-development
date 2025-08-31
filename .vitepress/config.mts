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
            nav: [
                {text: 'Home', link: '/'},
                {text: 'Tutorials', link: '/tutorials'},
                {text: 'API Reference', link: '/api-reference/index'}
            ],
            sidebar: {
                '/api-reference/': [
                    {
                        text: 'API Reference',
                        link: '/api-reference/index'
                    },
                    {
                        text: "Configuration file",
                        link: "/api-reference/configuration-file/index",
                        items: [
                            {text: "addons_path", link: "/api-reference/configuration-file/addons-path"},
                            {text: "admin_passwd", link: "/api-reference/configuration-file/admin-passwd"},
                            {text: "csv_internal_sep", link: "/api-reference/configuration-file/csv-internal-sep"},
                            {text: "data_dir", link: "/api-reference/configuration-file/data-dir"},
                            {text: "db_host", link: "/api-reference/configuration-file/db-host"},
                            {text: "db_maxconn", link: "/api-reference/configuration-file/db-maxconn"},
                            {text: "db_maxconn_gevent", link: "/api-reference/configuration-file/db-maxconn-gevent"},
                            {text: "db_name", link: "/api-reference/configuration-file/db-name"},
                            {text: "db_password", link: "/api-reference/configuration-file/db-password"},
                            {text: "db_port", link: "/api-reference/configuration-file/db-port"},
                            {text: "db_replica_host", link: "/api-reference/configuration-file/db-replica-host"},
                            {text: "db_replica_port", link: "/api-reference/configuration-file/db-replica-port"},
                            {text: "db_sslmode", link: "/api-reference/configuration-file/db-sslmode"},
                            {text: "db_template", link: "/api-reference/configuration-file/db-template"},
                            {text: "db_user", link: "/api-reference/configuration-file/db-user"},
                            {text: "dbfilter", link: "/api-reference/configuration-file/dbfilter"},
                            {text: "email_from", link: "/api-reference/configuration-file/email-from"},
                            {text: "from_filter", link: "/api-reference/configuration-file/from-filter"},
                            {text: "geoip_city_db", link: "/api-reference/configuration-file/geoip-city-db"},
                            {text: "geoip_country_db", link: "/api-reference/configuration-file/geoip-country-db"},
                            {text: "gevent_port", link: "/api-reference/configuration-file/gevent-port"},
                            {text: "http_enable", link: "/api-reference/configuration-file/http-enable"},
                            {text: "http_interface", link: "/api-reference/configuration-file/http-interface"},
                            {text: "http_port", link: "/api-reference/configuration-file/http-port"},
                            {text: "import_partial", link: "/api-reference/configuration-file/import-partial"},
                            {text: "limit_memory_hard", link: "/api-reference/configuration-file/limit-memory-hard"},
                            {
                                text: "limit_memory_hard_gevent",
                                link: "/api-reference/configuration-file/limit-memory-hard-gevent"
                            },
                            {text: "limit_memory_soft", link: "/api-reference/configuration-file/limit-memory-soft"},
                            {
                                text: "limit_memory_soft_gevent",
                                link: "/api-reference/configuration-file/limit-memory-soft-gevent"
                            },
                            {text: "limit_request", link: "/api-reference/configuration-file/limit-request"},
                            {text: "limit_time_cpu", link: "/api-reference/configuration-file/limit-time-cpu"},
                            {text: "limit_time_real", link: "/api-reference/configuration-file/limit-time-real"},
                            {
                                text: "limit_time_real_cron",
                                link: "/api-reference/configuration-file/limit-time-real-cron"
                            },
                            {
                                text: "limit_time_worker_cron",
                                link: "/api-reference/configuration-file/limit-time-worker-cron"
                            },
                            {text: "list_db", link: "/api-reference/configuration-file/list-db"},
                            {text: "log_db", link: "/api-reference/configuration-file/log-db"},
                            {text: "log_db_level", link: "/api-reference/configuration-file/log-db-level"},
                            {text: "log_handler", link: "/api-reference/configuration-file/log-handler"},
                            {text: "log_level", link: "/api-reference/configuration-file/log-level"},
                            {text: "logfile", link: "/api-reference/configuration-file/logfile"},
                            {text: "max_cron_threads", link: "/api-reference/configuration-file/max-cron-threads"},
                            {
                                text: "osv_memory_count_limit",
                                link: "/api-reference/configuration-file/osv-memory-count-limit"
                            },
                            {text: "pg_path", link: "/api-reference/configuration-file/pg-path"},
                            {text: "pidfile", link: "/api-reference/configuration-file/pidfile"},
                            {
                                text: "pre_upgrade_scripts",
                                link: "/api-reference/configuration-file/pre-upgrade-scripts"
                            },
                            {text: "proxy_mode", link: "/api-reference/configuration-file/proxy-mode"},
                            {text: "reportgz", link: "/api-reference/configuration-file/reportgz"},
                            {text: "screencasts", link: "/api-reference/configuration-file/screencasts"},
                            {text: "screenshots", link: "/api-reference/configuration-file/screenshots"},
                            {
                                text: "server_wide_modules",
                                link: "/api-reference/configuration-file/server-wide-modules"
                            },
                            {text: "smtp_password", link: "/api-reference/configuration-file/smtp-password"},
                            {text: "smtp_port", link: "/api-reference/configuration-file/smtp-port"},
                            {text: "smtp_server", link: "/api-reference/configuration-file/smtp-server"},
                            {text: "smtp_ssl", link: "/api-reference/configuration-file/smtp-ssl"},
                            {
                                text: "smtp_ssl_certificate_filename",
                                link: "/api-reference/configuration-file/smtp-ssl-certificate-filename"
                            },
                            {
                                text: "smtp_ssl_private_key_filename",
                                link: "/api-reference/configuration-file/smtp-ssl-private-key-filename"
                            },
                            {text: "smtp_user", link: "/api-reference/configuration-file/smtp-user"},
                            {text: "syslog", link: "/api-reference/configuration-file/syslog"},
                            {text: "test_enable", link: "/api-reference/configuration-file/test-enable"},
                            {text: "test_file", link: "/api-reference/configuration-file/test-file"},
                            {text: "test_tags", link: "/api-reference/configuration-file/test-tags"},
                            {
                                text: "transient_age_limit",
                                link: "/api-reference/configuration-file/transient-age-limit"
                            },
                            {text: "translate_modules", link: "/api-reference/configuration-file/translate-modules"},
                            {text: "unaccent", link: "/api-reference/configuration-file/unaccent"},
                            {text: "upgrade_path", link: "/api-reference/configuration-file/upgrade-path"},
                            {
                                text: "websocket_keep_alive_timeout",
                                link: "/api-reference/configuration-file/websocket-keep-alive-timeout"
                            },
                            {
                                text: "websocket_rate_limit_burst",
                                link: "/api-reference/configuration-file/websocket-rate-limit-burst"
                            },
                            {
                                text: "websocket_rate_limit_delay",
                                link: "/api-reference/configuration-file/websocket-rate-limit-delay"
                            },
                            {text: "without_demo", link: "/api-reference/configuration-file/without-demo"},
                            {text: "workers", link: "/api-reference/configuration-file/workers"},
                            {text: "x_sendfile", link: "/api-reference/configuration-file/x-sendfile"}
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
                                text: "auto_install",
                                link: "/api-reference/manifest/auto-install"
                            },
                            {
                                text: "assets",
                                link: "/api-reference/manifest/assets"
                            },
                            {
                                text: "author",
                                link: "/api-reference/manifest/author"
                            },
                            {
                                text: "application",
                                link: "/api-reference/manifest/application"
                            },
                            {
                                text: "bootstrap",
                                link: "/api-reference/manifest/bootstrap"
                            },
                            {
                                text: "contributors",
                                link: "/api-reference/manifest/contributors"
                            },
                            {
                                text: "category",
                                link: "/api-reference/manifest/category"
                            },
                            {
                                text: "configurator_snippets",
                                link: "/api-reference/manifest/configurator-snippets"
                            },
                            {
                                text: "countries",
                                link: "/api-reference/manifest/countries"
                            },
                            {
                                text: "depends",
                                link: "/api-reference/manifest/depends"
                            },
                            {
                                text: "data",
                                link: "/api-reference/manifest/data"
                            },
                            {
                                text: "demo",
                                link: "/api-reference/manifest/demo"
                            },
                            {
                                text: "description",
                                link: "/api-reference/manifest/description"
                            },
                            {
                                text: "external_dependencies",
                                link: "/api-reference/manifest/external-dependencies"
                            },
                            {
                                text: "icon",
                                link: "/api-reference/manifest/icon"
                            },
                            {
                                text: "images",
                                link: "/api-reference/manifest/images"
                            },
                            {
                                text: "installable",
                                link: "/api-reference/manifest/installable"
                            },
                            {
                                text: "license",
                                link: "/api-reference/manifest/license"
                            },
                            {
                                text: "maintainer",
                                link: "/api-reference/manifest/maintainer"
                            },
                            {
                                text: "name",
                                link: "/api-reference/manifest/name"
                            },
                            {
                                text: "new_page_templates",
                                link: "/api-reference/manifest/new-page-templates"
                            },
                            {
                                text: "pre_init",
                                link: "/api-reference/manifest/pre-init"
                            },
                            {
                                text: "post_init",
                                link: "/api-reference/manifest/post-init"
                            },
                            {
                                text: "post_init_hook",
                                link: "/api-reference/manifest/post-init-hook"
                            },
                            {
                                text: "pre_init_hook",
                                link: "/api-reference/manifest/pre-init-hook"
                            },
                            {
                                text: "summary",
                                link: "/api-reference/manifest/summary"
                            },
                            {
                                text: "sequence",
                                link: "/api-reference/manifest/sequence"
                            },
                            {
                                text: "url",
                                link: "/api-reference/manifest/url"
                            },
                            {
                                text: "uninstall_hook",
                                link: "/api-reference/manifest/uninstall-hook"
                            },
                            {
                                text: "version",
                                link: "/api-reference/manifest/version"
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
                                text: "_abstract",
                                link: "/api-reference/model-parameters/abstract"
                            },
                            {
                                text: "_active_name",
                                link: "/api-reference/model-parameters/active-name"
                            },
                            {
                                text: "_auto",
                                link: "/api-reference/model-parameters/auto"
                            },
                            {
                                text: "_allow_sudo_commands",
                                link: "/api-reference/model-parameters/allow-sudo-commands"
                            },
                            {
                                text: "_check_company_auto",
                                link: "/api-reference/model-parameters/check-company-auto"
                            },
                            {
                                text: "_cr",
                                link: "/api-reference/model-parameters/cr"
                            },
                            {
                                text: "_context",
                                link: "/api-reference/model-parameters/context"
                            },
                            {
                                text: "_custom",
                                link: "/api-reference/model-parameters/custom"
                            },
                            {
                                text: "_description",
                                link: "/api-reference/model-parameters/description"
                            },
                            {
                                text: "_depends",
                                link: "/api-reference/model-parameters/depends"
                            },
                            {
                                text: "_field_definitions",
                                link: "/api-reference/model-parameters/field-definitions"
                            },
                            {
                                text: "_fold_name",
                                link: "/api-reference/model-parameters/fold-name"
                            },
                            {
                                text: "_fields",
                                link: "/api-reference/model-parameters/fields"
                            },
                            {
                                text: "_inherit",
                                link: "/api-reference/model-parameters/inherit"
                            },
                            {
                                text: "_inherit_module",
                                link: "/api-reference/model-parameters/inherit-module"
                            },
                            {
                                text: "_inherit_children",
                                link: "/api-reference/model-parameters/inherit-children"
                            },
                            {
                                text: "_inherits_children",
                                link: "/api-reference/model-parameters/inherits-children"
                            },
                            {
                                text: "_inherits",
                                link: "/api-reference/model-parameters/inherits"
                            },
                            {
                                text: "_ids",
                                link: "/api-reference/model-parameters/ids"
                            },
                            {
                                text: "_log_access",
                                link: "/api-reference/model-parameters/log-access"
                            },
                            {
                                text: "_module",
                                link: "/api-reference/model-parameters/module"
                            },
                            {
                                text: "_name",
                                link: "/api-reference/model-parameters/name"
                            },
                            {
                                text: "_order",
                                link: "/api-reference/model-parameters/order"
                            },
                            {
                                text: "_original_module",
                                link: "/api-reference/model-parameters/original-module"
                            },
                            {
                                text: "_parent_name",
                                link: "/api-reference/model-parameters/parent-name"
                            },
                            {
                                text: "_parent_store",
                                link: "/api-reference/model-parameters/parent-store"
                            },
                            {
                                text: "_prefetch_ids",
                                link: "/api-reference/model-parameters/prefetch-ids"
                            },
                            {
                                text: "_rec_name",
                                link: "/api-reference/model-parameters/rec-name"
                            },
                            {
                                text: "_rec_names_search",
                                link: "/api-reference/model-parameters/rec-names-search"
                            },
                            {
                                text: "_register",
                                link: "/api-reference/model-parameters/register"
                            },
                            {
                                text: "_sql_constraints",
                                link: "/api-reference/model-parameters/sql-constraints"
                            },
                            {
                                text: "_table_query",
                                link: "/api-reference/model-parameters/table-query"
                            },
                            {
                                text: "_table",
                                link: "/api-reference/model-parameters/table"
                            },
                            {
                                text: "_transient",
                                link: "/api-reference/model-parameters/transient"
                            },
                            {
                                text: "_transient_max_count",
                                link: "/api-reference/model-parameters/transient-max-count"
                            },
                            {
                                text: "_transient_max_hours",
                                link: "/api-reference/model-parameters/transient-max-hours"
                            },
                            {
                                text: "_translate",
                                link: "/api-reference/model-parameters/translate"
                            },
                            {
                                text: "_uid",
                                link: "/api-reference/model-parameters/uid"
                            }
                        ]
                    },
                    {
                        text: 'Field types',
                        link: '/api-reference/field-types',
                        items: [
                            {
                                text: "Boolean",
                                link: "/api-reference/field-types/boolean"
                            },
                            {
                                text: "Binary",
                                link: "/api-reference/field-types/binary"
                            },
                            {
                                text: "Char",
                                link: "/api-reference/field-types/char"
                            },
                            {
                                text: "Date",
                                link: "/api-reference/field-types/date"
                            },
                            {
                                text: "Datetime",
                                link: "/api-reference/field-types/datetime"
                            },
                            {
                                text: "Float",
                                link: "/api-reference/field-types/float"
                            },
                            {
                                text: "Html",
                                link: "/api-reference/field-types/html"
                            },
                            {
                                text: "Integer",
                                link: "/api-reference/field-types/integer"
                            },
                            {
                                text: "Image",
                                link: "/api-reference/field-types/image"
                            },
                            {
                                text: "Json",
                                link: "/api-reference/field-types/json"
                            },
                            {
                                text: "Many2one",
                                link: "/api-reference/field-types/many2one"
                            },
                            {
                                text: "Many2many",
                                link: "/api-reference/field-types/many2many"
                            },
                            {
                                text: "Monetary",
                                link: "/api-reference/field-types/monetary"
                            },
                            {
                                text: "Many2oneReference",
                                link: "/api-reference/field-types/many2one-reference"
                            },
                            {
                                text: "One2many",
                                link: "/api-reference/field-types/one2many"
                            },
                            {
                                text: "Properties",
                                link: "/api-reference/field-types/properties"
                            },
                            {
                                text: "PropertiesDefinition",
                                link: "/api-reference/field-types/properties-definition"
                            },
                            {
                                text: "Reference",
                                link: "/api-reference/field-types/reference"
                            },
                            {
                                text: "Selection",
                                link: "/api-reference/field-types/selection"
                            },
                            {
                                text: "Text",
                                link: "/api-reference/field-types/text"
                            }
                        ]
                    },
                    {
                        text: 'Field parameters',
                        link: '/api-reference/field-parameters',
                        items: [
                            {
                                text: "aggregator",
                                link: "/api-reference/field-parameters/aggregator"
                            },
                            {
                                text: "attachment",
                                link: "/api-reference/field-parameters/attachment"
                            },
                            {
                                text: "auto_join",
                                link: "/api-reference/field-parameters/auto-join"
                            },
                            {
                                text: "change_default",
                                link: "/api-reference/field-parameters/change-default"
                            },
                            {
                                text: "check_company",
                                link: "/api-reference/field-parameters/check-company"
                            },
                            {
                                text: "column1",
                                link: "/api-reference/field-parameters/column1"
                            },
                            {
                                text: "column2",
                                link: "/api-reference/field-parameters/column2"
                            },
                            {
                                text: "comodel_name",
                                link: "/api-reference/field-parameters/comodel-name"
                            },
                            {
                                text: "company_dependent",
                                link: "/api-reference/field-parameters/company-dependent"
                            },
                            {
                                text: "compute",
                                link: "/api-reference/field-parameters/compute"
                            },
                            {
                                text: "compute_sudo",
                                link: "/api-reference/field-parameters/compute-sudo"
                            },
                            {
                                text: "config_parameter",
                                link: "/api-reference/field-parameters/config-parameter"
                            },
                            {
                                text: "context",
                                link: "/api-reference/field-parameters/context"
                            },
                            {
                                text: "copy",
                                link: "/api-reference/field-parameters/copy"
                            },
                            {
                                text: "currency_field",
                                link: "/api-reference/field-parameters/currency-field"
                            },
                            {
                                text: "default",
                                link: "/api-reference/field-parameters/default"
                            },
                            {
                                text: "default_export_compatible",
                                link: "/api-reference/field-parameters/default-export-compatible"
                            },
                            {
                                text: "default_model",
                                link: "/api-reference/field-parameters/default-model"
                            },
                            {
                                text: "definition",
                                link: "/api-reference/field-parameters/definition"
                            },
                            {
                                text: "delegate",
                                link: "/api-reference/field-parameters/delegate"
                            },
                            {
                                text: "depends",
                                link: "/api-reference/field-parameters/depends"
                            },
                            {
                                text: "depends_context",
                                link: "/api-reference/field-parameters/depends-context"
                            },
                            {
                                text: "digits",
                                link: "/api-reference/field-parameters/digits"
                            },
                            {
                                text: "domain",
                                link: "/api-reference/field-parameters/domain"
                            },
                            {
                                text: "export_string_translation",
                                link: "/api-reference/field-parameters/export-string-translation"
                            },
                            {
                                text: "exportable",
                                link: "/api-reference/field-parameters/exportable"
                            },
                            {
                                text: "group",
                                link: "/api-reference/field-parameters/group"
                            },
                            {
                                text: "group_expand",
                                link: "/api-reference/field-parameters/group-expand"
                            },
                            {
                                text: "groups",
                                link: "/api-reference/field-parameters/groups"
                            },
                            {
                                text: "help",
                                link: "/api-reference/field-parameters/help"
                            },
                            {
                                text: "implied_group",
                                link: "/api-reference/field-parameters/implied-group"
                            },
                            {
                                text: "index",
                                link: "/api-reference/field-parameters/index"
                            },
                            {
                                text: "inherited",
                                link: "/api-reference/field-parameters/inherited"
                            },
                            {
                                text: "invalid_parameter",
                                link: "/api-reference/field-parameters/invalid-parameter"
                            },
                            {
                                text: "inverse",
                                link: "/api-reference/field-parameters/inverse"
                            },
                            {
                                text: "inverse_name",
                                link: "/api-reference/field-parameters/inverse-name"
                            },
                            {
                                text: "max_height",
                                link: "/api-reference/field-parameters/max-height"
                            },
                            {
                                text: "max_width",
                                link: "/api-reference/field-parameters/max-width"
                            },
                            {
                                text: "model_field",
                                link: "/api-reference/field-parameters/model-field"
                            },
                            {
                                text: "name",
                                link: "/api-reference/field-parameters/name"
                            },
                            {
                                text: "ondelete",
                                link: "/api-reference/field-parameters/ondelete"
                            },
                            {
                                text: "precompute",
                                link: "/api-reference/field-parameters/precompute"
                            },
                            {
                                text: "prefetch",
                                link: "/api-reference/field-parameters/prefetch"
                            },
                            {
                                text: "readonly",
                                link: "/api-reference/field-parameters/readonly"
                            },
                            {
                                text: "recursive",
                                link: "/api-reference/field-parameters/recursive"
                            },
                            {
                                text: "related",
                                link: "/api-reference/field-parameters/related"
                            },
                            {
                                text: "related_sudo",
                                link: "/api-reference/field-parameters/related-sudo"
                            },
                            {
                                text: "relation",
                                link: "/api-reference/field-parameters/relation"
                            },
                            {
                                text: "render_engine",
                                link: "/api-reference/field-parameters/render-engine"
                            },
                            {
                                text: "render_options",
                                link: "/api-reference/field-parameters/render-options"
                            },
                            {
                                text: "required",
                                link: "/api-reference/field-parameters/required"
                            },
                            {
                                text: "required_if_provider",
                                link: "/api-reference/field-parameters/required-if-provider"
                            },
                            {
                                text: "sanitize",
                                link: "/api-reference/field-parameters/sanitize"
                            },
                            {
                                text: "sanitize_attributes",
                                link: "/api-reference/field-parameters/sanitize-attributes"
                            },
                            {
                                text: "sanitize_form",
                                link: "/api-reference/field-parameters/sanitize-form"
                            },
                            {
                                text: "sanitize_output_method",
                                link: "/api-reference/field-parameters/sanitize-output-method"
                            },
                            {
                                text: "sanitize_overridable",
                                link: "/api-reference/field-parameters/sanitize-overridable"
                            },
                            {
                                text: "sanitize_style",
                                link: "/api-reference/field-parameters/sanitize-style"
                            },
                            {
                                text: "sanitize_tags",
                                link: "/api-reference/field-parameters/sanitize-tags"
                            },
                            {
                                text: "search",
                                link: "/api-reference/field-parameters/search"
                            },
                            {
                                text: "selection",
                                link: "/api-reference/field-parameters/selection"
                            },
                            {
                                text: "selection_add",
                                link: "/api-reference/field-parameters/selection-add"
                            },
                            {
                                text: "size",
                                link: "/api-reference/field-parameters/size"
                            },
                            {
                                text: "sparse",
                                link: "/api-reference/field-parameters/sparse"
                            },
                            {
                                text: "store",
                                link: "/api-reference/field-parameters/store"
                            },
                            {
                                text: "string",
                                link: "/api-reference/field-parameters/string"
                            },
                            {
                                text: "strip_classes",
                                link: "/api-reference/field-parameters/strip-classes"
                            },
                            {
                                text: "strip_style",
                                link: "/api-reference/field-parameters/strip-style"
                            },
                            {
                                text: "tracking",
                                link: "/api-reference/field-parameters/tracking"
                            },
                            {
                                text: "translate",
                                link: "/api-reference/field-parameters/translate"
                            },
                            {
                                text: "trim",
                                link: "/api-reference/field-parameters/trim"
                            },
                            {
                                text: "validate",
                                link: "/api-reference/field-parameters/validate"
                            }
                        ]
                    },
                    {
                        text: 'API decorators',
                        link: '/api-reference/decorators',
                        items: [
                            {
                                text: "@api.autovacuum",
                                link: "/api-reference/decorators/api-autovacuum"
                            },
                            {
                                text: "@api.constrains",
                                link: "/api-reference/decorators/api-constrains"
                            },
                            {
                                text: "@api.depends",
                                link: "/api-reference/decorators/api-depends"
                            },
                            {
                                text: "@api.depends_context",
                                link: "/api-reference/decorators/api-depends-context"
                            },
                            {
                                text: "@api.model",
                                link: "/api-reference/decorators/api-model"
                            },
                            {
                                text: "@api.model_create_multi",
                                link: "/api-reference/decorators/api-model-create-multi"
                            },
                            {
                                text: "@api.onchange",
                                link: "/api-reference/decorators/api-onchange"
                            },
                            {
                                text: "@api.ondelete",
                                link: "/api-reference/decorators/api-ondelete"
                            },
                            {
                                text: "@api.returns",
                                link: "/api-reference/decorators/api-returns"
                            },
                            {
                                text: "@api.readonly",
                                link: "/api-reference/decorators/api-readonly"
                            }
                        ]
                    },
                    {
                        text: 'ORM methods',
                        link: '/api-reference/orm-methods',
                        items: [
                            {
                                text: "action_archive",
                                link: "/api-reference/orm-methods/action-archive"
                            },
                            {
                                text: "action_unarchive",
                                link: "/api-reference/orm-methods/action-unarchive"
                            },
                            {
                                text: "browse",
                                link: "/api-reference/orm-methods/browse"
                            },
                            {
                                text: "check_access",
                                link: "/api-reference/orm-methods/check-access"
                            },
                            {
                                text: "check_access_rights",
                                link: "/api-reference/orm-methods/check-access-rights"
                            },
                            {
                                text: "check_access_rule",
                                link: "/api-reference/orm-methods/check-access-rule"
                            },
                            {
                                text: "check_field_access_rights",
                                link: "/api-reference/orm-methods/check-field-access-rights"
                            },
                            {
                                text: "concat",
                                link: "/api-reference/orm-methods/concat"
                            },
                            {
                                text: "copy",
                                link: "/api-reference/orm-methods/copy"
                            },
                            {
                                text: "copy_data",
                                link: "/api-reference/orm-methods/copy-data"
                            },
                            {
                                text: "copy_translations",
                                link: "/api-reference/orm-methods/copy-translations"
                            },
                            {
                                text: "create",
                                link: "/api-reference/orm-methods/create"
                            },
                            {
                                text: "default_get",
                                link: "/api-reference/orm-methods/default-get"
                            },
                            {
                                text: "ensure_one",
                                link: "/api-reference/orm-methods/ensure-one"
                            },
                            {
                                text: "exists",
                                link: "/api-reference/orm-methods/exists"
                            },
                            {
                                text: "export_data",
                                link: "/api-reference/orm-methods/export-data"
                            },
                            {
                                text: "fetch",
                                link: "/api-reference/orm-methods/fetch"
                            },
                            {
                                text: "fields_get",
                                link: "/api-reference/orm-methods/fields-get"
                            },
                            {
                                text: "filtered",
                                link: "/api-reference/orm-methods/filtered"
                            },
                            {
                                text: "filtered_domain",
                                link: "/api-reference/orm-methods/filtered-domain"
                            },
                            {
                                text: "flush_model",
                                link: "/api-reference/orm-methods/flush-model"
                            },
                            {
                                text: "flush_recordset",
                                link: "/api-reference/orm-methods/flush-recordset"
                            },
                            {
                                text: "get_base_url",
                                link: "/api-reference/orm-methods/get-base-url"
                            },
                            {
                                text: "get_external_id",
                                link: "/api-reference/orm-methods/get-external-id"
                            },
                            {
                                text: "get_field_translations",
                                link: "/api-reference/orm-methods/get-field-translations"
                            },
                            {
                                text: "get_metadata",
                                link: "/api-reference/orm-methods/get-metadata"
                            },
                            {
                                text: "get_property_definition",
                                link: "/api-reference/orm-methods/get-property-definition"
                            },
                            {
                                text: "grouped",
                                link: "/api-reference/orm-methods/grouped"
                            },
                            {
                                text: "has_access",
                                link: "/api-reference/orm-methods/has-access"
                            },
                            {
                                text: "ids",
                                link: "/api-reference/orm-methods/ids"
                            },
                            {
                                text: "init",
                                link: "/api-reference/orm-methods/init"
                            },
                            {
                                text: "invalidate_model",
                                link: "/api-reference/orm-methods/invalidate-model"
                            },
                            {
                                text: "invalidate_recordset",
                                link: "/api-reference/orm-methods/invalidate-recordset"
                            },
                            {
                                text: "load",
                                link: "/api-reference/orm-methods/load"
                            },
                            {
                                text: "mapped",
                                link: "/api-reference/orm-methods/mapped"
                            },
                            {
                                text: "modified",
                                link: "/api-reference/orm-methods/modified"
                            },
                            {
                                text: "name_create",
                                link: "/api-reference/orm-methods/name-create"
                            },
                            {
                                text: "name_search",
                                link: "/api-reference/orm-methods/name-search"
                            },
                            {
                                text: "new",
                                link: "/api-reference/orm-methods/new"
                            },
                            {
                                text: "onchange",
                                link: "/api-reference/orm-methods/onchange"
                            },
                            {
                                text: "read",
                                link: "/api-reference/orm-methods/read"
                            },
                            {
                                text: "read_group",
                                link: "/api-reference/orm-methods/read-group"
                            },
                            {
                                text: "search",
                                link: "/api-reference/orm-methods/search"
                            },
                            {
                                text: "search_count",
                                link: "/api-reference/orm-methods/search-count"
                            },
                            {
                                text: "search_fetch",
                                link: "/api-reference/orm-methods/search-fetch"
                            },
                            {
                                text: "search_read",
                                link: "/api-reference/orm-methods/search-read"
                            },
                            {
                                text: "sorted",
                                link: "/api-reference/orm-methods/sorted"
                            },
                            {
                                text: "sudo",
                                link: "/api-reference/orm-methods/sudo"
                            },
                            {
                                text: "toggle_active",
                                link: "/api-reference/orm-methods/toggle-active"
                            },
                            {
                                text: "union",
                                link: "/api-reference/orm-methods/union"
                            },
                            {
                                text: "unlink",
                                link: "/api-reference/orm-methods/unlink"
                            },
                            {
                                text: "update",
                                link: "/api-reference/orm-methods/update"
                            },
                            {
                                text: "update_field_translations",
                                link: "/api-reference/orm-methods/update-field-translations"
                            },
                            {
                                text: "with_company",
                                link: "/api-reference/orm-methods/with-company"
                            },
                            {
                                text: "with_context",
                                link: "/api-reference/orm-methods/with-context"
                            },
                            {
                                text: "with_env",
                                link: "/api-reference/orm-methods/with-env"
                            },
                            {
                                text: "with_prefetch",
                                link: "/api-reference/orm-methods/with-prefetch"
                            },
                            {
                                text: "with_user",
                                link: "/api-reference/orm-methods/with-user"
                            },
                            {
                                text: "write",
                                link: "/api-reference/orm-methods/write"
                            }
                        ]
                    },
                    {
                        text: 'Environment attributes',
                        link: '/api-reference/environment-attributes',
                        items: [
                            {
                                text: "add_to_compute",
                                link: "/api-reference/environment-attributes/env-add-to-compute"
                            },
                            {
                                text: "cache",
                                link: "/api-reference/environment-attributes/env-cache"
                            },
                            {
                                text: "cache_key",
                                link: "/api-reference/environment-attributes/env-cache-key"
                            },
                            {
                                text: "clear",
                                link: "/api-reference/environment-attributes/env-clear"
                            },
                            {
                                text: "companies",
                                link: "/api-reference/environment-attributes/env-companies"
                            },
                            {
                                text: "company",
                                link: "/api-reference/environment-attributes/env-company"
                            },
                            {
                                text: "company_id",
                                link: "/api-reference/environment-attributes/env-company-id"
                            },
                            {
                                text: "context",
                                link: "/api-reference/environment-attributes/env-context"
                            },
                            {
                                text: "cr",
                                link: "/api-reference/environment-attributes/env-cr"
                            },
                            {
                                text: "execute_query",
                                link: "/api-reference/environment-attributes/env-execute-query"
                            },
                            {
                                text: "execute_query_dict",
                                link: "/api-reference/environment-attributes/env-execute-query-dict"
                            },
                            {
                                text: "fields_to_compute",
                                link: "/api-reference/environment-attributes/env-fields-to-compute"
                            },
                            {
                                text: "filters",
                                link: "/api-reference/environment-attributes/env-filters"
                            },
                            {
                                text: "flush_all",
                                link: "/api-reference/environment-attributes/env-flush-all"
                            },
                            {
                                text: "flush_query",
                                link: "/api-reference/environment-attributes/env-flush-query"
                            },
                            {
                                text: "from_string",
                                link: "/api-reference/environment-attributes/env-from-string"
                            },
                            {
                                text: "get",
                                link: "/api-reference/environment-attributes/env-get"
                            },
                            {
                                text: "invalidate_all",
                                link: "/api-reference/environment-attributes/env-invalidate-all"
                            },
                            {
                                text: "is_admin",
                                link: "/api-reference/environment-attributes/env-is-admin"
                            },
                            {
                                text: "is_protected",
                                link: "/api-reference/environment-attributes/env-is-protected"
                            },
                            {
                                text: "is_superuser",
                                link: "/api-reference/environment-attributes/env-is-superuser"
                            },
                            {
                                text: "is_system",
                                link: "/api-reference/environment-attributes/env-is-system"
                            },
                            {
                                text: "js",
                                link: "/api-reference/environment-attributes/env-js"
                            },
                            {
                                text: "lang",
                                link: "/api-reference/environment-attributes/env-lang"
                            },
                            {
                                text: "protected",
                                link: "/api-reference/environment-attributes/env-protected"
                            },
                            {
                                text: "protecting",
                                link: "/api-reference/environment-attributes/env-protecting"
                            },
                            {
                                text: "records_to_compute",
                                link: "/api-reference/environment-attributes/env-records-to-compute"
                            },
                            {
                                text: "ref",
                                link: "/api-reference/environment-attributes/env-ref"
                            },
                            {
                                text: "registry",
                                link: "/api-reference/environment-attributes/env-registry"
                            },
                            {
                                text: "remove_to_compute",
                                link: "/api-reference/environment-attributes/env-remove-to-compute"
                            },
                            {
                                text: "reset",
                                link: "/api-reference/environment-attributes/env-reset"
                            },
                            {
                                text: "su",
                                link: "/api-reference/environment-attributes/env-su"
                            },
                            {
                                text: "transaction",
                                link: "/api-reference/environment-attributes/env-transaction"
                            },
                            {
                                text: "uid",
                                link: "/api-reference/environment-attributes/env-uid"
                            },
                            {
                                text: "uid_origin",
                                link: "/api-reference/environment-attributes/env-uid-origin"
                            },
                            {
                                text: "user",
                                link: "/api-reference/environment-attributes/env-user"
                            },
                            {
                                text: "values",
                                link: "/api-reference/environment-attributes/env-values"
                            }
                        ]
                    },
                    {
                        text: 'View tags',
                        link: '/api-reference/view-tags',
                        items: [
                            {
                                text: "activity",
                                link: "/api-reference/view-tags/activity"
                            },
                            {
                                text: "attribute",
                                link: "/api-reference/view-tags/attribute"
                            },
                            {
                                text: "block",
                                link: "/api-reference/view-tags/block"
                            },
                            {
                                text: "body",
                                link: "/api-reference/view-tags/body"
                            },
                            {
                                text: "button",
                                link: "/api-reference/view-tags/button"
                            },
                            {
                                text: "calendar",
                                link: "/api-reference/view-tags/calendar"
                            },
                            {
                                text: "chatter",
                                link: "/api-reference/view-tags/chatter"
                            },
                            {
                                text: "control",
                                link: "/api-reference/view-tags/control"
                            },
                            {
                                text: "create",
                                link: "/api-reference/view-tags/create"
                            },
                            {
                                text: "data",
                                link: "/api-reference/view-tags/data"
                            },
                            {
                                text: "field",
                                link: "/api-reference/view-tags/field"
                            },
                            {
                                text: "filter",
                                link: "/api-reference/view-tags/filter"
                            },
                            {
                                text: "footer",
                                link: "/api-reference/view-tags/footer"
                            },
                            {
                                text: "form",
                                link: "/api-reference/view-tags/form"
                            },
                            {
                                text: "function",
                                link: "/api-reference/view-tags/function"
                            },
                            {
                                text: "graph",
                                link: "/api-reference/view-tags/graph"
                            },
                            {
                                text: "group",
                                link: "/api-reference/view-tags/group"
                            },
                            {
                                text: "groupby",
                                link: "/api-reference/view-tags/groupby"
                            },
                            {
                                text: "head",
                                link: "/api-reference/view-tags/head"
                            },
                            {
                                text: "header",
                                link: "/api-reference/view-tags/header"
                            },
                            {
                                text: "hierarchy",
                                link: "/api-reference/view-tags/hierarchy"
                            },
                            {
                                text: "img",
                                link: "/api-reference/view-tags/img"
                            },
                            {
                                text: "kanban",
                                link: "/api-reference/view-tags/kanban"
                            },
                            {
                                text: "label",
                                link: "/api-reference/view-tags/label"
                            },
                            {
                                text: "link",
                                link: "/api-reference/view-tags/link"
                            },
                            {
                                text: "list",
                                link: "/api-reference/view-tags/list"
                            },
                            {
                                text: "menuitem",
                                link: "/api-reference/view-tags/menuitem"
                            },
                            {
                                text: "notebook",
                                link: "/api-reference/view-tags/notebook"
                            },
                            {
                                text: "odoo",
                                link: "/api-reference/view-tags/odoo"
                            },
                            {
                                text: "owl-component",
                                link: "/api-reference/view-tags/owl-component"
                            },
                            {
                                text: "page",
                                link: "/api-reference/view-tags/page"
                            },
                            {
                                text: "pivot",
                                link: "/api-reference/view-tags/pivot"
                            },
                            {
                                text: "progressbar",
                                link: "/api-reference/view-tags/progressbar"
                            },
                            {
                                text: "record",
                                link: "/api-reference/view-tags/record"
                            },
                            {
                                text: "root",
                                link: "/api-reference/view-tags/root"
                            },
                            {
                                text: "search",
                                link: "/api-reference/view-tags/search"
                            },
                            {
                                text: "searchpanel",
                                link: "/api-reference/view-tags/searchpanel"
                            },
                            {
                                text: "separator",
                                link: "/api-reference/view-tags/separator"
                            },
                            {
                                text: "sheet",
                                link: "/api-reference/view-tags/sheet"
                            },
                            {
                                text: "template",
                                link: "/api-reference/view-tags/template"
                            },
                            {
                                text: "templates",
                                link: "/api-reference/view-tags/templates"
                            },
                            {
                                text: "time",
                                link: "/api-reference/view-tags/time"
                            },
                            {
                                text: "value",
                                link: "/api-reference/view-tags/value"
                            },
                            {
                                text: "widget",
                                link: "/api-reference/view-tags/widget"
                            },
                            {
                                text: "xpath",
                                link: "/api-reference/view-tags/xpath"
                            }
                        ]
                    },
                    {
                        text: 'Widgets',
                        link: '/api-reference/widgets',
                        items: [
                            {
                                text: "CopyClipboardButton",
                                link: "/api-reference/widgets/copyclipboardbutton"
                            },
                            {
                                text: "CopyClipboardChar",
                                link: "/api-reference/widgets/copyclipboardchar"
                            },
                            {
                                text: "CopyClipboardURL",
                                link: "/api-reference/widgets/copyclipboardurl"
                            },
                            {
                                text: "DynamicModelFieldSelectorChar",
                                link: "/api-reference/widgets/dynamicmodelfieldselectorchar"
                            },
                            {
                                text: "activity_exception",
                                link: "/api-reference/widgets/activity-exception"
                            },
                            {
                                text: "attachment_image",
                                link: "/api-reference/widgets/attachment-image"
                            },
                            {
                                text: "badge",
                                link: "/api-reference/widgets/badge"
                            },
                            {
                                text: "binary",
                                link: "/api-reference/widgets/binary"
                            },
                            {
                                text: "boolean",
                                link: "/api-reference/widgets/boolean"
                            },
                            {
                                text: "boolean_favorite",
                                link: "/api-reference/widgets/boolean-favorite"
                            },
                            {
                                text: "boolean_icon",
                                link: "/api-reference/widgets/boolean-icon"
                            },
                            {
                                text: "boolean_toggle",
                                link: "/api-reference/widgets/boolean-toggle"
                            },
                            {
                                text: "char",
                                link: "/api-reference/widgets/char"
                            },
                            {
                                text: "char_emojis",
                                link: "/api-reference/widgets/char-emojis"
                            },
                            {
                                text: "code",
                                link: "/api-reference/widgets/code"
                            },
                            {
                                text: "color",
                                link: "/api-reference/widgets/color"
                            },
                            {
                                text: "color_picker",
                                link: "/api-reference/widgets/color-picker"
                            },
                            {
                                text: "contact",
                                link: "/api-reference/widgets/contact"
                            },
                            {
                                text: "dashboard_graph",
                                link: "/api-reference/widgets/dashboard-graph"
                            },
                            {
                                text: "date",
                                link: "/api-reference/widgets/date"
                            },
                            {
                                text: "daterange",
                                link: "/api-reference/widgets/daterange"
                            },
                            {
                                text: "datetime",
                                link: "/api-reference/widgets/datetime"
                            },
                            {
                                text: "domain",
                                link: "/api-reference/widgets/domain"
                            },
                            {
                                text: "email",
                                link: "/api-reference/widgets/email"
                            },
                            {
                                text: "filterable_selection",
                                link: "/api-reference/widgets/filterable-selection"
                            },
                            {
                                text: "float",
                                link: "/api-reference/widgets/float"
                            },
                            {
                                text: "float_time",
                                link: "/api-reference/widgets/float-time"
                            },
                            {
                                text: "handle",
                                link: "/api-reference/widgets/handle"
                            },
                            {
                                text: "html",
                                link: "/api-reference/widgets/html"
                            },
                            {
                                text: "html_composer_message",
                                link: "/api-reference/widgets/html-composer-message"
                            },
                            {
                                text: "html_mail",
                                link: "/api-reference/widgets/html-mail"
                            },
                            {
                                text: "iframe",
                                link: "/api-reference/widgets/iframe"
                            },
                            {
                                text: "iframe_wrapper",
                                link: "/api-reference/widgets/iframe-wrapper"
                            },
                            {
                                text: "image",
                                link: "/api-reference/widgets/image"
                            },
                            {
                                text: "image_url",
                                link: "/api-reference/widgets/image-url"
                            },
                            {
                                text: "integer",
                                link: "/api-reference/widgets/integer"
                            },
                            {
                                text: "kanban_activity",
                                link: "/api-reference/widgets/kanban-activity"
                            },
                            {
                                text: "kanban_color_picker",
                                link: "/api-reference/widgets/kanban-color-picker"
                            },
                            {
                                text: "label_selection",
                                link: "/api-reference/widgets/label-selection"
                            },
                            {
                                text: "list_activity",
                                link: "/api-reference/widgets/list-activity"
                            },

                            {
                                text: "mail_attachments",
                                link: "/api-reference/widgets/mail-attachments"
                            },
                            {
                                text: "mail_composer_attachment_list",
                                link: "/api-reference/widgets/mail-composer-attachment-list"
                            },
                            {
                                text: "mail_composer_attachment_selector",
                                link: "/api-reference/widgets/mail-composer-attachment-selector"
                            },
                            {
                                text: "mail_composer_chatgpt",
                                link: "/api-reference/widgets/mail-composer-chatgpt"
                            },
                            {
                                text: "mail_composer_template_selector",
                                link: "/api-reference/widgets/mail-composer-template-selector"
                            },
                            {
                                text: "many2many",
                                link: "/api-reference/widgets/many2many"
                            },
                            {
                                text: "many2many_avatar_user",
                                link: "/api-reference/widgets/many2many-avatar-user"
                            },
                            {
                                text: "many2many_binary",
                                link: "/api-reference/widgets/many2many-binary"
                            },
                            {
                                text: "many2many_checkboxes",
                                link: "/api-reference/widgets/many2many-checkboxes"
                            },
                            {
                                text: "many2many_tags",
                                link: "/api-reference/widgets/many2many-tags"
                            },
                            {
                                text: "many2many_tags_avatar",
                                link: "/api-reference/widgets/many2many-tags-avatar"
                            },
                            {
                                text: "many2many_tags_email",
                                link: "/api-reference/widgets/many2many-tags-email"
                            },
                            {
                                text: "many2one",
                                link: "/api-reference/widgets/many2one"
                            },
                            {
                                text: "many2one_avatar",
                                link: "/api-reference/widgets/many2one-avatar"
                            },
                            {
                                text: "many2one_avatar_user",
                                link: "/api-reference/widgets/many2one-avatar-user"
                            },
                            {
                                text: "many2one_barcode",
                                link: "/api-reference/widgets/many2one-barcode"
                            },
                            {
                                text: "many2one_reference_integer",
                                link: "/api-reference/widgets/many2one-reference-integer"
                            },
                            {
                                text: "monetary",
                                link: "/api-reference/widgets/monetary"
                            },
                            {
                                text: "one2many",
                                link: "/api-reference/widgets/one2many"
                            },
                            {
                                text: "pdf_viewer",
                                link: "/api-reference/widgets/pdf-viewer"
                            },
                            {
                                text: "percentpie",
                                link: "/api-reference/widgets/percentpie"
                            },
                            {
                                text: "percentage",
                                link: "/api-reference/widgets/percentage"
                            },
                            {
                                text: "phone",
                                link: "/api-reference/widgets/phone"
                            },
                            {
                                text: "portal_wizard_user_one2many",
                                link: "/api-reference/widgets/portal-wizard-user-one2many"
                            },
                            {
                                text: "profiling_qweb_view",
                                link: "/api-reference/widgets/profiling-qweb-view"
                            },
                            {
                                text: "progressbar",
                                link: "/api-reference/widgets/progressbar"
                            },
                            {
                                text: "properties",
                                link: "/api-reference/widgets/properties"
                            },
                            {
                                text: "radio",
                                link: "/api-reference/widgets/radio"
                            },
                            {
                                text: "reference",
                                link: "/api-reference/widgets/reference"
                            },
                            {
                                text: "remaining_days",
                                link: "/api-reference/widgets/remaining-days"
                            },
                            {
                                text: "selection",
                                link: "/api-reference/widgets/selection"
                            },
                            {
                                text: "selection_badge",
                                link: "/api-reference/widgets/selection-badge"
                            },
                            {
                                text: "state_selection",
                                link: "/api-reference/widgets/state-selection"
                            },
                            {
                                text: "statinfo",
                                link: "/api-reference/widgets/statinfo"
                            },
                            {
                                text: "statusbar",
                                link: "/api-reference/widgets/statusbar"
                            },
                            {
                                text: "statusbar_duration",
                                link: "/api-reference/widgets/statusbar-duration"
                            },
                            {
                                text: "text",
                                link: "/api-reference/widgets/text"
                            },
                            {
                                text: "text_emojis",
                                link: "/api-reference/widgets/text-emojis"
                            },
                            {
                                text: "timezone_mismatch",
                                link: "/api-reference/widgets/timezone-mismatch"
                            },
                            {
                                text: "todo_done_checkmark",
                                link: "/api-reference/widgets/todo-done-checkmark"
                            },
                            {
                                text: "tour_start_widget",
                                link: "/api-reference/widgets/tour-start-widget"
                            },
                            {
                                text: "upgrade_boolean",
                                link: "/api-reference/widgets/upgrade-boolean"
                            },
                            {
                                text: "url",
                                link: "/api-reference/widgets/url"
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
