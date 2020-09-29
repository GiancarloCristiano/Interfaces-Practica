TPE2 - comentarios.

1. Mostrar tablero vacío
HECHO. El tablero está contenido en el fondo también para darle un efecto 3D.

2. Mostrar dos grupos de fichas.
HECHO. Las fichas se van dibujando alrededor del tablero.

3. Las piezas de cada jugador se dibujan con una imagen.
HECHO. Para poder mejorar la UX, la imagen es transparente y el usuario tiene 10 opciones de color para poder elegir. El color elegido se dibuja debajo de la plantilla de la imagen por lo que con un sólo png basta. Además cuenta con un controlador para que los jugadores no puedan tener el mismo color o nombre.

4. Cada jugador va seleccionando sus fichas y las ubica en una de las columnas del tablero.
HECHO. Hay que colocarlas desde que comienzan los agujeros del tablero.

5. Se debe implementar la lógica del juego, teniendo en cuenta los turnos de jugador.
HECHO. Se cambia el turno recién cuando una ficha es insertada en el fichero (tablero).

6. El juego termina cuando un jugador consigue ubicar cuatro fichas en línea.
HECHO. Por lo que probé está todo ok.

EXTRAS PARA PROMO:
.Las fichas deben elegirse con click de mouse, y el usuario debe poder arrastrar la ficha y soltarla donde quiere.
HECHO. También se resalta la ficha seleccionada.

. Algún feature adicional extra, por ejemplo: poder reiniciar el juego, poder establecer la dimensión del tablero, colocar un timer que limite el tiempo de juego, etc.
Luego de investigar y debido a la forma en la que está pensada crear el tablero, no se implementará el cambio de dimensión ya que el juego original consta de 6 filas y 7 columnas, en el caso de cambiar esto tal vez también debería considerarse la cantidad de fichas a alinear por lo que no sería el "4 en línea".
Como feature adicional (además de los seter de nombre y color), se implementó un reinicio limpio del juego y la opción de poder activar unos sonidos mediante select y botón. Los mismos se reproducen al empezar y finalizar el juego y al insertar una ficha en el tablero.
