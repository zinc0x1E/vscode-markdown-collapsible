function activate(context) {
  return {
    extendMarkdownIt(md) {
      return md.use(require("markdown-it-collapsible"));
    },
  };
}
exports.activate = activate;