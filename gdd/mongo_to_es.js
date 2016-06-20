 Source({name:"localmongo", namespace: "articles.articles"}).transform({filename: "transformers/mongo_to_es.js", namespace:"dummy./^articles$/"}).save({name: "es"})
