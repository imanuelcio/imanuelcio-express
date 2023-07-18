export default (_, inject) => {
    const method = {
        meta({ title, desc, image, url }, rest) {
            const meta = []

            if (title)
                meta.push(
                    {
                        hid: "og:title",
                        name: "og:title",
                        content: `${title} | ${process.env.NAME}`,
                    },
                    {
                        hid: "twitter:title",
                        name: "twitter:title",
                        content: `${title} | ${process.env.NAME}`,
                    }
                )

            if (desc)
                meta.push(
                    {
                        hid: "description",
                        name: "description",
                        content: desc,
                    },
                    {
                        hid: "og:description",
                        name: "og:description",
                        content: desc,
                    },
                    {
                        hid: "twitter:description",
                        name: "twitter:description",
                        content: desc,
                    }
                )

            if (image)
                meta.push(
                    {
                        hid: "og:image",
                        name: "og:image",
                        content: image,
                    },
                    {
                        hid: "twitter:image",
                        name: "twitter:image",
                        content: image,
                    }
                )

            if (url)
                meta.push(
                    {
                        hid: "og:url",
                        name: "og:url",
                        content: url,
                    },
                    {
                        hid: "twitter:url",
                        name: "twitter:url",
                        content: url,
                    }
                )

            if (typeof rest === "object")
                rest.forEach((item) => {
                    const { hid, name, content, ...rest } = item
                    meta.push({ hid, name, content, ...rest })
                })

            // default meta tags
            meta.push(
                { hid: "og:type", name: "og:type", content: "website" },
                { hid: "og:site_name", name: "og:site_name", content: process.env.NAME },
                { hid: "twitter:card", name: "twitter:card", content: "summary" },
                { hid: "twitter:site", name: "twitter:site", content: process.env.NAME },
                { hid: "twitter:creator", name: "twitter:creator", content: process.env.NAME },
            )

            if (meta.length === 0)
                return []
            else
                return meta
        }
    };

    inject("seo", method)
}
