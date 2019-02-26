function updateHighlights() {
  var codeBlocks = document.querySelectorAll("pre > code");
  for (let block of codeBlocks) {
    hljs.highlightBlock(block);
  }
}

window.addEventListener("load", () => {
  hljs.initHighlightingOnLoad();
  updateHighlights();

  document.body.addEventListener("ia-writer-change", updateHighlights);
});
