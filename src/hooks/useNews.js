import { useEffect, useState } from "react";
import NewsService from "../services/newsService";

export default function useNews(id) {

	const newsService = new NewsService()
	const newsAux = []
	const [news, setNews] = useState([])
	const [newsItemDetail, setNewsItemDetail] = useState({})
	const [loading, setLoading] = useState(true)


	useEffect(() => {
		if (!id) {
			newsService.getAll().then(response => {

				response.forEach((doc) => {
					const item = {
						...doc.data()
					}
					newsAux.push(item)
				})
				setNews(newsAux)
				setLoading(false)
			})
		}
	}, [])

	useEffect(() => {
		if (id) {
			newsService.getById(id).then(response => {

				const item = {
					...response.docs[0].data()
				}
				setNewsItemDetail(item)
				setLoading(false)
			})
		}

	}, [id])

	return { newsItemDetail, news, loading }
}