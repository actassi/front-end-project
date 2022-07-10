![image](https://user-images.githubusercontent.com/90891726/170180108-19cec801-e76c-427b-a3c3-fce7f86573f4.png)

# PROYECTO QATAR 2022 
## App prode mundial e info deportiva
<br>

link: https://imaginative-kataifi-9806b9.netlify.app/
## Funcionalidades
* ### Page Home
	* Contador para comenzar el mundial.
	* Seccion Noticias (News). 	
	* Sección Fotos.
* ### Juego interactivo
* ### Login y registro

## Recursos utilizados hasta el momento

* Material UI
* Auth Firebase
* Context
* BrowserRouter

## Estructura del proyecto

* #### public: 
	Recursos imgs, videos, favicon etc.
* #### src
	* <strong>components:</strong> Componentes reutilizables en toda la app. Por ejemplo alert.js se puede reutilizar en varios otras 			vistas/componentes.
	* <strong>context:</strong> Todos los contextos que serán accesibles desde toda la app.
	* <strong>hooks:</strong> Todos los hooks que serán accesibles desde toda la app. 
	* <strong>pages:</strong> Todos los views que tendrá la app. por ejemplo la home, el login, el registro, la pagina donde estará el fixture.
		* <strong>carpeta de cada page:</strong> Carpeta que contendrá todo lo que la page utilizará para su funcionamiento y que no se reutilizaran en otro page. Por ejemplo components que solo se usaran en esta page, hooks, styled components.
	* <strong>services:</strong> Todos los servicios y conexiones a apis que se utilicen.
	* <strong>styledComponents:</strong> Todos los styled components que se reutilizaran en la app.
	* <strong>utils:</strong> Todo lo que sea reutilizable y sirva para parsear, formatear algo en la app.

## Como recuperar datos de Firebase 

#### 1. Heredar de baseService.
Crear clase que corresponda con la tabla de firebase que se quiera recuperar, por ejemplo newsService.js traera todo lo referido a la tabla news(noticias) de firebase. Heredar de la clase baseService.js para recibir todos los metodos de la misma. 

BaseService.js:

```javascript

import { query, where, collection, getDocs, doc, getDoc, addDoc, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export default class BaseService {

	constructor(collectionName) {
		this.collectionName = collectionName;
		this.collectionDoc = collection(db, collectionName)
	}

	get = (operator, filterField, value) => {

		if (operator && filterField && value !== undefined) {
			const q = query(this.collectionDoc, where(filterField, operator, value), orderBy("id"));
			return getDocs(q);
		} else {
			const q = query(this.collectionDoc, orderBy("id"));
			return getDocs(q);
		}
	}

	add = (doc) => {
		return addDoc(this.collectionDoc, doc);
	}
}
```
De esta forma todo el codigo referido a firebase está encapsulado en un solo lugar.

Ejemplo de implementación en newsService.js:
```javascript
import BaseService from "./baseService";

export default class NewsService extends BaseService {

	constructor() {
		super('news');
	}

	getAll = () => {
		return this.get();
	}

	getById = (id) => {
		return this.get("==", 'id', parseInt(id));
	}

}
```

#### 2. Como llamar al service creado.

Crear una instancia del servicio.
	
```javascript
const newsService = new NewsService()
```

Ejemplo de como llamar a getAll() :

Retorna una promise , por lo tanto se debe crear un then para el caso de que retorne los datos correctamente y/o un catch para el error.
el then retorna un array de de docs, por lo tanto luego se realiza un forEach para recorrer cada doc y poder extraer los datos de la entidad, en este caso la tabla news. Con la funcion data() se obtienen todos los datos de cada registro news. Luego se setea en otro array para poder tenerlos en un state.
  
```javascript

const newsAux = []
const [news, setNews] = useState([])
const [loading, setLoading] = useState(true)

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
```

#### 3. Buena practica, separar logica de datos de la vista.
 El código anterior se puede ejecutar en cualquier componente que se desee, pero una buena practica es encapsularlo en un custom hook para que la logica sea mucho mas limpia y reutilizable, ademas será mucho mas facil separar la logica de datos y la vista.
 
custom hook useNews : 
```javascript
import { useEffect, useState } from "react";
import NewsService from "../services/newsService";

export default function useNews() {

	const newsService = new NewsService()
	const newsAux = []
	const [news, setNews] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
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
	}, [])

	return { news, loading }
}
```

y se llamaria en cualquier componente de esta manera:
```javascript
const { news, loading } = useNews()
```

## Status Tareas

| Pages/Componentes | Nombre | Status |
| ------------- | ------------- | ------------- |
| Registro, Login, Perdi mi contraseña  | Andre | Done |
| Home Page, Detalle noticia page, footer, firebase service  | Seba  |Done  |
| DarkMode y NavBar| Seba  | Done  |
| Fixture | Andre  | In Progress  |
