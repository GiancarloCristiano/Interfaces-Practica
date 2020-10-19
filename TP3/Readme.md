TPE3 - comentarios.

A modo de prólogo, puedo decir que fue desafiante elegir una película con más de 25 años de vida ya que resultaba
dificultosa la obtención de algunos recursos (teniendo que generar algunas imágenes o textos desde mi conocimiento)
pero para la época tenía efectos muy bien realizados. Catalogada como el mejor film de videojuegos hasta la fecha.
El sitio fue probando en Chrome, Firefox, Opera, Brave y Edge Chromium funcionando correcamente y tiene varias queries
para adaptarse a desktop 1280px, 1366, HD, FHD y UHD. (Está pensado para verlo en ventana maximizada o pantalla completa).

HOME:
1. Debe tener una sección hero con fondos parallax animados constantemente. ideas:
nubes de fondo, estrellas en movimiento, 3 layers que se mueven según la posición
del mouse, etc.
---Inspirado en el sitio de Firewatch, el sitio consta de un efecto landscape, con 9 capas de imágenes.
Fue largo el camino hasta encontrar una imagen que cumpliera con lo necesario, luego de una larga investigación,
se encontró el templo donde comienza y termina la película. A este se lo trabajó detalladamente en Photoshop para
darle un efecto de anochecer, seccionar la imagen y ocultar detalles como gente, cielo, árboles y reflectores.
Este parallax comienza con un fondo de nubes, otro para generar el horizonte, una capa con una neblina negra y el
resto con partes del templ, más el logo del dragón y tipografía.
Este Hero tiene variedad de efectos, comenzando con el movimiento horizontal de las nubes y neblina simulando al viento.
Sumado al efecto vertical que al ser scroll cambia la velocidad a la que se desplazan.
Otro efecto general de color para simular el efecto de relámpagos y uno menos de respiración para el texto.
Además tiene un indicador para que el usuario deslice, inspirado en el Kunai y mensaje que grita Scorpion al atrapar al enemigo.
"Get over here" significaría "Ven aquí", encajaba perfectamente.

2. Debe animar la entrada de los componentes en pantalla.
---Las animaciones varían entre entradas desde abajo, arriba y laterales, entre otras.

3. Debe mover algunos componentes visuales a medida que scrollea.
---Sólo se aplicó en el home debido a que las otras 2 páginas entran perfectamente sin hacer scroll. Presenta variedad de
animaciones como en el punto 2.

4. Un countdown con el lanzamiento de la película, avant premiere o similar.
---Además de presentarse de manera bien legible, los segundos tienen una animación adicional.

5. Una grilla (cards) con los personajes de la película. Debe agregar efectos 3d en el hover
de los cards.
---Aprovechando el formato carta, se resolvió que al posicionarse sobre las cartas, estas giren verticalmente y muestren
información de cada personaje. Como si de una tarjeta real se tratara. Esto optimiza la interfaz sin sacrificar información.

6. Un carrusel de imágenes de la película, escenas destacadas.
---Luego de rever el film e investigar, se seleccionaron 6 escenas importantes. Esta sección tiene efectos de color que cambian
en el hover y un efecto 3d que sigue el puntero del mouse también en el hover.

CALENDARIO DE EVENTOS:
7. Serán 4 eventos de charlas y anuncios, mostrados en un acordeón, animado.
---Este posee animaciones de entrada y también en hover y al hacer click.

8. Dentro de cada evento, deberá mostrar fotos de los expositores, con efectos 3d en el evento hover.
---De manera similar a las cards, contiene información al pararse sobre la imagen, sólo que en lugar de girar verticalmente, lo 
hace de manera horizontal (esto se debe a que la imagen es más ancha que larga, opuestamente a lo que sucede en las cards).

FORMULARIO DE COMENTARIOS Y SALUDOS:
9. Debe agregar animaciones en los input y en los botones una vez clickeados.
---Los input tienen un efecto que corta al ser seleccionado y al ser rellenado. El botón tiene una animación de fill
al hacer click y cambio de texto.

10. Debe animar la entrada de los componentes en la pantalla .
---Tiene animaciones de entrada lateral en los input y hacia abajo en el boton. 

Consideraciones generales:
11. Menú hamburguesa con 5 links extras (además de las 3 páginas solicitadas) de poca
importancia.
---Se adjuntó al navbar y tiene un efecto adicional. Estos tienen 5 logos svg y dirigen a redes sociales existentes.

12. Todas las páginas deben cargar en 3 segundos (forzado) y mostrar previamente un loader.
---Se utilizó un loader que une perfectamente representatividad y un estandarización, haciendo un spinner alrededor del logo del dragón.


Aclaraciones
- Todas las páginas deben mantener una consistencia gráfica.
---Se utilizó un diseño algo sombrío, con una paleta de negros, blanco y rojo intermedio. Además de dos tipografías relacionadas
con el film y el juego y varios detalles que pertenecen al mundo MK, como la vibración en el hover del navbar (estilo UMK3),
scrollbar, el kunai en el hero y un trailer moderno.


- Los formularios no deben enviar nada, solo simularlo.
---Si bien no envía, tiene el efecto al hacer click y luego recarga el sitio. Como si realmente se hubiera enviado.