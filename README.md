
Dashboard de administración

Este proyecto es un dashboard de administración que utiliza una API falsa para mostrar información. La API falsa se puede levantar con el comando npm run server.

Instalación

Para instalar el proyecto, ejecuta los siguientes comandos:

git clone https://github.com/https://github.com/EstefaMH/Dashboard.git/

npm install

Levantamiento de la API falsa


Para levantar la API falsa, ejecuta el siguiente comando:

npm run server
La API falsa se levantará en el puerto 3000.

API falsa

La API falsa proporciona los siguientes endpoints:

GET /admin: Devuelve la lista de administradores.
POST /admin: Almacena un nuevo administrador, body.req = {userName ,password ,email }



Documentación

Para el correcto funcionamiento del dashboard actualmente se debe realizar la siguiente ruta : 

1. Registro :  /register.html 

    Cree su usuario, ya que se va a loguear mediante las credenciales almacenadas en el localStorage

2. Login : Ingrese sus credenciales 
3. Dashboard : 
   - En el navbar de la interfaz se encuentran la funcion para cerrar Sesion 
   - En el menu se encuentra la interfaz para añadir los costos /costs.html 

