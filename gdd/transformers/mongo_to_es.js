module.exports = function(doc) {
    if (doc.ns === "articles.articles"){
        doc.ns = "dummy.article"
    }
    doc.startingPage = String(doc.startingPage);
    doc.endingPage = String(doc.endingPage);
    doc.vol = String(doc.vol);
    doc.issue = String(doc.issue);
    return doc;
}
