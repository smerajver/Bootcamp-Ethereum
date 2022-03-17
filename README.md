# Bootcamp-Ethereum

## ¿Como ejecutar la aplicación en un ambiente de desarrollo?

1) Descargar el repositorio de Github ejecutando el siguiente comando en la consola: 
   - `git clone https://github.com/smerajver/Bootcamp-Etherium.git`

2) Instalar las dependencias globales de Expo y Truffle con los siguientes comandos: 
   - `npm install -g truffle`
   - `npm install --global expo-cli`

3) Luego debemos movernos, tanto al directorio del cliente *(Bootcamp-Etherium\Bootcamp Etherium - Client)* como del servidor *(Bootcamp-Etherium\Bootcamp Etherium - Api)*, y ejecutar el siguiente comando para instalar los paquetes necesarios:
   - `npm install`

4) Nos dirigimos al siguiente directorio *(Bootcamp-Etherium\Bootcamp Etherium - Api)* y dentro del archivo `database.js` debemos configurar el método **"createConnection"** con los parámetros correctos para la conexión con el cliente de base de datos

5) Nos dirigimos al archivo `.env` dentro del directorio *(Bootcamp-Etherium\Bootcamp Etherium - Client)* y configuramos la variable **"IP_DEV"** con nuestra dirección IPv4

6) Descargamos e instalamos la blockchain de pruebas [Ganache](https://trufflesuite.com/ganache/index.html) desde el sitio oficial. Ejecutamos la aplicación y simplemente cliqueamos en **"Quickstart"**

7) Desde el directorio *(Bootcamp-Etherium\Bootcamp Etherium - Api)* ejecutaremos el siguiente comando para realizar una migración de nuestros contratos inteligentes a nuesta blockchain de pruebas: 
   - `truffle migrate --reset`

8) Desde la consola nos dirigimos al siguiente directorio *(Bootcamp-Etherium\Bootcamp Etherium - Api)* y ejecutamos el comando para correr la aplicación. En simultaneo, abriremos otra consola y ubicados en *(Bootcamp-Etherium\Bootcamp Etherium - Client)* ejecutaremos el mismo comando: 
   - `npm start`
    
9) Desde la consola podremos observar que se correrán las herramientas de desarrollo, que nos brinda Expo, en un puerto local. Cliqueamos en la dirección y desde aquí podremos visualizar la aplicación, ya sea desde un simulador o desde nuestro dispositivo móvil con la aplicación **Expo Go**, disponible para Andorid y iOS
