 Source({name:"localmongo", namespace: "articles.articles_pubmed"}).transform({filename: "transformers/mongo_to_es.js", namespace:"dummy./^articles_pubmed$/"}).save({name: "es"})
