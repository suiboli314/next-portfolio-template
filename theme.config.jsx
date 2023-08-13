const YEAR = new Date().getFullYear();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  footer: (
    <p>
      Made by Chen and ❤️ <time>YEAR</time>
    </p>
  ),
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: "Read More →",
  postFooter: null,
  darkMode: true,
  navs: [
    {
      url: "https://github.com/shuding/nextra",
      name: "Nextra",
    },
  ],
};
