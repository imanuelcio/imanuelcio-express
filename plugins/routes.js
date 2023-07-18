export default async () => {
    // Import notion dependencies
    const notion = require("vue-notion");

    // import table article
    const articles = await notion.getPageTable(process.env.NOTION_ARTICLE_ID);

    // Bundle maping of each route
    var routes = [];

    // Loop each article item and push to routes
    articles.filter((item) => item.active)
        .map((item) => {
            routes.push(`/article/${item.slug}`)
        })

    // Return all data
    return routes
}
