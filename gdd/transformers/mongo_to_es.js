module.exports = function(doc) {
    doc.ns = "dummy.article"

    doc.startingPage = String(doc.startingPage);
    doc.endingPage = String(doc.endingPage);
    doc.vol = String(doc.vol);
    doc.issue = String(doc.issue);
    return doc;
}
