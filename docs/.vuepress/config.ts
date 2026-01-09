import { defaultTheme, defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { searchPlugin } from "@vuepress/plugin-search";
import { getDirname, path } from "@vuepress/utils";
import { glob } from "glob";

let newsFiles = glob
  .sync("docs/news/**/*.md")
  .map((f) => f.replace("docs", "").replace("index.md", ""));

import { description } from "../../package.json";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  lang: "en-US",
  // Global title in HTML <head>.
  // If page has title (in frontmatter) or h1 then: <page title/h1> | <global title>
  // e.g <title>Vuepress-DecapCMS-Netlify | VueDN</title>
  title: "Azdora - Age of ruins",
  // Global description in in HTML <head>.
  // If page has description (in frontmatter) then: <global description is replaced by <page description>
  // <meta name="description" content="...">
  description: description,
  head: [
    [
      "script",
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
      },
    ],
  ],

  // theme and its config
  theme: defaultTheme({
    logo: "AzdoraIconTransparent.png",
    notFound: ["There's nothing here."],
    navbar: [
      {
        text: "News",
        // notice the trailing / (for the automatic next and prev links based on the sidebar)
        link: "/news/",
      },
      {
        text: "Discord",
        link: "https://discord.gg/p5TRpgR9f3",
      },
    ],
    sidebar: {
      "/news": [
        {
          text: "news",
          children: newsFiles,
        },
      ],
    },
  }),

  // Replace footer
  alias: {
    "@theme/HomeFooter.vue": path.resolve(
      __dirname,
      "./components/MyHomeFooter.vue"
    ),
  },

  // plugin
  plugins: [
    registerComponentsPlugin({
      // options
      // Absolute path to the components directory
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    searchPlugin({
      // options
      // Default shortcut is key '/'
    }),
  ],
});
