# BLackJack
Este es el tipico juego conocido de blackjack, con unas cartas y fichas hechas exclusivamente para este proograma. Ademas de contener un sistema funcional de creacion de 
perfiles y economia para cada jugador.

## Creacion de perfiles

Lo primero con lo que nos encontramos es la siguiente pantalla:

![image](https://user-images.githubusercontent.com/98189066/184795312-e1b238bc-d332-4375-9d86-a8047a709122.png)

Como podemos ver, se puede crear y eliminar pefiles si se desa, cuando añadimos un nuevo perfil nos pide cierta informacion:

![image](https://user-images.githubusercontent.com/98189066/184795396-fbe6bc89-a172-4947-b407-a8c85d8d378f.png)

El unico campo obligatorio sera el nickname, pues es con el que se identificara el perfil, si no se agrega imagen se añadira una por defecto. Si no se ha creado ningun 
perfil, se encontraran dos perfiles creados por defecto llamados Alberto y Alberta.

## Apuestas

Una vez selecionamos un perfil, entraremos al juego. Lo primero que debemos hacer para empezar a jugar es hacer click en una de las isguientes fichas:

![image](https://user-images.githubusercontent.com/98189066/184795662-562fb212-40c2-4f09-8e9b-55b0c3966654.png)

Cada una representa una parte de la cantidad de dinero del usuario. Por ejemplo, si el usuario tiene 1 millon y hace click en la ficha roja, se agregara un total de
♠10,000.00 a la apuesta.

![image](https://user-images.githubusercontent.com/98189066/184795918-de2b1927-3c50-4373-8cc8-f38dceeb40bf.png)

Podemos cancelar la apuesta presionando en el boton de cancelar, pero una vez demos click en confirmar apuesta no abra forma de volver y se ocultaran las fichas para
apostar.

Se le facilita la cantidad de dinero disponible en la parte superior izquierda de la pantalla.

## Juego
Recien empezamos, tendremos dos cartas en la mesa, estas son las que empezaremos jugando. Nuestro objetivo es simple, evitar que el valor de nuestras cartas sea menor o igual a 21, pero mayor al valor de las cartas del dealer.

![image](https://user-images.githubusercontent.com/98189066/184796233-01a8ac6a-ebea-4070-848d-1a722a00c690.png)

Los valores de las cartas son lo siguientes:
- A: 1, 11
- 2: 2
- 3: 3
- 4: 4
- 5: 5
- 6: 6
- 7: 7
- 8: 8
- 9: 9
- 10: 10
- J: 10
- Q: 10
- K: 10

Una vez se sienta comodo con su mano, debe dar al boton de terminar. Esto finalizara su turno e iniciara el de la mesa.

Si al final del turno, el dealer tiene un puntaje mayor a su mano y menor a 21, el dealer abrá ganado.

Si gana, se le dara el doble del dinero apostado. Si pierde, este dinero ira a la mesa.

## Diseño

Esta aplicacion se hizo usando los siguientes diagramas. Estos fueron creados utilizando astah.

![image](https://user-images.githubusercontent.com/98189066/184796733-cc2e935e-77a6-4e55-8c8a-4dfe4ddc3990.png)

![image](https://user-images.githubusercontent.com/98189066/184796741-72f28a47-2bf3-410b-a5a0-ce20af4d13c9.png)
