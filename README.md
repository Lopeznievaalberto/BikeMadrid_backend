# BikeMadrid_backend ecommerce

Ecommerce sobre la venta de bicicletas, esta API se conecta con la base de datos de AtlasDB, donde reside la información del servidor, 
que sigue el protocolo MVC(Modelo,Vista,Controlador), representados en las carpetas Models, Views y Controllers, respectivamente.

###Acerca de los endpoints

(localhost:5700/bikes/getAllBikes) -sirve para obtener un listado de todas las bicicleta
(localhost:5700/bikes/newBike) -sirve para crear una nueva bicicleta
(localhost:5700/bikes/updateBike) - sirve para hacer cambios en los campos de una bicicleta ya existente
(localhost:5700/bikes/deleteBike) -sirve para borrar una bicicleta

(localhost:5700/users/getAllUsers) -sirve para obtener un listado de todos los usuarios
(localhost:5700/users/newUser) -sirve para crear un nuevo usuario
(localhost:5700/users/updateUser) -sirve para hacer cambios en los campos de un usuario ya existente
(localhost:5700/users/deleteUser) -sirve para borrar un usuario.


*Este backend cuenta con mas funcionalidades desarrolladas del CRUD, relacionadas con los campos que se referirían al estado de la venta/alquiler de la 
bicicleta, el campo del estado de uso para la venta, y funciones relacionadas con el rol del usuario. Al no contar aún con estructuras que necesiten de dichas
funcionalidades, no han sido descritas aquí.

Alberto López Nieva

