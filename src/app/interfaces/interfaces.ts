
export interface Source {
    id: String,
    name: String
}

export interface Article {

    source: Source[],
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: Date,
    content: string
}

export interface Resultmain {

    status: String,
    totalresults: number,
    articles: Article[]
}
