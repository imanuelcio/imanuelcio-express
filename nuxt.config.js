import routes from "./plugins/routes";

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "server",

    ssr: true,

    dev: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head() {
        const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
        return {
            titleTemplate: `%s | ${process.env.NAME}`,
            htmlAttrs: {
                ...i18nHead.htmlAttrs,
            },
            meta: [
                { charset: "utf-8" },
                {
                    hid: "viewport",
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                },
                { hid: "author", name: "author", content: process.env.NAME },
                {
                    hid: "google-site-verification",
                    name: "google-site-verification",
                    content: process.env.GOOGLE_SITE_VERIFICATION,
                },
                { hid: "robots", name: "robots", content: "index, follow" },
                {
                    hid: "format-detection",
                    name: "format-detection",
                    content: "telephone=no",
                },
                ...i18nHead.meta,
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "preconnect", href: "https://api.fontshare.com" },
                ...i18nHead.link,
            ],
        };
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/sass/main"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "@/plugins/seo",
        "@/plugins/axios",
        "@/plugins/utils",
        "@/plugins/regex",
        "@/plugins/modal",
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        {
            path: "@/components",
            pathPrefix: false,
        },
    ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["nuxt-purgecss", "vue-notion/nuxt"],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "@nuxtjs/i18n",
        "@nuxtjs/axios",
        "@nuxtjs/dotenv",
        "nuxt-vue-select",
        "@nuxtjs/sitemap",
        "@nuxtjs/html-minifier",
    ],

    // Serve properties: https://go.nuxtjs.dev/config-server
    // server: {
    //     host: process.env.HOST,
    //     port: process.env.PORT,
    // },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true,
        html: {
            minify: {
                preserveLineBreaks: false,
                collapseWhitespace: true,
            },
        },
    },

    // Multi language: https://i18n.nuxtjs.org/
    i18n: {
        locales: [
            {
                iso: "id-ID",
                code: "id-id",
                file: "id-id.js",
                name: "Bahasa Indonesia",
            },
            {
                iso: "en-US",
                code: "en-us",
                file: "en-us.js",
                name: "English",
            },
        ],
        langDir: "lang/",
        defaultLocale: "id-id",
        detectBrowserLanguage: false,
    },

    // Whitelist css: https://purgecss.com/
    purgeCSS: {
        whitelistPatterns: [/^nuxt-/, /^notion-/, /^v/],
        safelist: [
            `table`,
            `thead`,
            `tbody`,
            `tr`,
            `td`,
            `th`,
            `is-bordered`,
            `is-striped`,
            `figure`,
            `blockquote`,
        ],
    },

    // Initialize sitemap: https://sitemap.nuxtjs.org/
    sitemap: {
        hostname: process.env.HOST_NAME,
        cacheTime: 1000 * 60 * 10,
        routes() {
            return routes();
        },
    },

    serverMiddleware: ["~/api/server.js"],
};
