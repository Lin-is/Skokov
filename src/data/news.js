import allNews from './allNews.json'

export default {
  findNewsById (id) {
    return allNews.find(news => news.id === id)
  }
}
