TPE1 - comentarios.

1. Al menos lápiz y goma:
Hechos, más el balde para cambiar el color de fondo. También tiene selector de color y grosor.

2. Poder iniciar con un lienzo en blanco o partir de una imagen cargada desde disco mediante diálogo:
Hechos. El cuadro generado muestra por defecto sólo archivos de tipo imagen. Sino se carga una imagen, no avanza y tira un mensaje de error. Una vez que se carga una imagen, aparece un botón para poder reestablecerla.

3. Aplicar al menos 4 filtros por pixeles a la imagen actual, por ejemplo: negativo, brillo, binarización y sepia.
Hechos 6: Grises, Binario, Sepia, Negativo y Brillo (gradual, más oscuridad). Además quedó comentado en el código un filtro de brillo mal implementado que genera una mancha de canal rojo sobre el lienzo, lo denominé Sangrado.

4. Aplicar al menos 2 de los siguientes filtros a la imagen: Saturación, Suavizado, Detección de Bordes, Blur.
Hechos 5: Saturación (gradual), desaturación, suavizado, blur y nitidez.
Saturación se realizó de manera sencilla luego de un estudio de cómo trabaja el método convencional que convierte RGB a HSL y viceversa. Cuanto mayor es la distancia de un canal sobre el/los otro/s, mayor saturación tiene de ese color. Por lo que mi método aplica un aumento de intensidad en los canales predominantes. Se compararon los resultados con la misma imagen trabajada en un programa de edición confiable como lo es Photoshop, y el método propuesto da un resultado similar a aplicar un 40% de saturación.
Suavizado y Blur (desenfoque). Ambos trabajan de manera muy similar. Suavizado compara vecinos en una matriz de 3 x 3 dividiendo luego por 9 y desenfoque lo realiza en una de 5 x 5 dividiendo por 25.
Nitidez funciona también en una matriz de 3 x 3 con valores diferentes al de suavizado.
Además se dejó comentado el método sobel (detección de bordes). Sé que hay que generar dos matrices y también convertir primero la imagen a escala de grises pero de cualquier manera, no me genera el efecto deseado.


5. Permitir guardar en disco la imagen, o descartar la imagen y comenzar con un lienzo vacío.
Hechos. La descarga la realiza sin cuadro de diálogo, de manera más agil con un nombre predeterminado y en formato png.

En líneas generales, se cumplió con el enunciado lo máximo posible, incluso agregando algunas funcionalidades más, todo encapsulado en una interfaz clara, moderna y minimalista, ayudándome con Bootstrap para agilizar los tiempos.
