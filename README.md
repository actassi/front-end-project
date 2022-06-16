![image](https://user-images.githubusercontent.com/90891726/170180108-19cec801-e76c-427b-a3c3-fce7f86573f4.png)

# PROYECTO QATAR 2022 
## App prode mundial e info deportiva
<br>

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

* #### public
* #### src
	* <strong>components:</strong> Componentes reutilizables en toda la app. Por ejemplo alert.js se puede reutilizar en varios otras 			vistas/componentes.
	* <strong>context:</strong> Todos los contextos que serán accesibles desde toda la app.
	* <strong>hooks:</strong> Todos los hooks que serán accesibles desde toda la app. 
	* <strong>pages:</strong> Todos los views que tendrá la app. por ejemplo la home, el login, el registro, la pagina donde estará el fixture.
		* <strong>carpeta de cada page:</strong> Carpeta que contendrá todo lo que la page utilizará para su funcionamiento y que no se reutilizaran en otro page. Por ejemplo components que solo se usaran en esta page, hooks, styled components.
	* <strong>services:</strong> Todos los servicios y conexiones a apis que se utilicen.
	* <strong>styled-components:</strong> Todos los styled components que se reutilizaran en la app.
	* <strong>utils:</strong> Todo lo que sea reutilizable y sirva para parsear, formatear algo en la app.