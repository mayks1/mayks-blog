export default async () => {
  const { $content } = require("@nuxt/content");
  // const files = await $content({ deep: true }).only(["path"]).fetch();

  // return files.map((file) => (file.path === "/index" ? "/" : file.path));

  const articles = await $content("articles").only(["path"]).fetch();
  const categories = await $content("categories").only(["path"]).fetch();

  // Map and concatenate the routes and return the array.
  return []
    .concat(...articles.map((a) => a.path))
    .concat(...categories.map((c) => "/articles" + c.path));
};
