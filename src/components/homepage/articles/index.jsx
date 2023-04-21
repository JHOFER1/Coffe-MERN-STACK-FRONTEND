import React from 'react';
export const Article1 = () => {
return(
<>
<div className="containerMainArt">
    <div className="containerArt"> 
        <h1 className='welcome-test1'>Node.js</h1>
        <p className='description-test'>
            Node.js fue ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, está diseñado para crear aplicaciones network escalables que pueden atender muchas conexiones simultáneamente.
            los usuarios de Node.js no deben preocuparse por el bloqueo del proceso, ya que no existe. Casi ninguna función en Node.js realiza I/O directamente, por lo que el proceso nunca se bloquea. Por ello, es muy propicio desarrollar sistemas escalables en Node.js.
            Node.js es similar a sistemas como Event Machine de Ruby y Twisted de Python. Pero Node.js incluye un bucle de eventos como runtime de ejecución en lugar de una biblioteca.
            En Node.js, no existe como tal la llamada de inicio del evento de bucle o start-the-event-loop. Node.js simplemente entra en el bucle de eventos después de ejecutar el script de entrada y sale cuando no hay más devoluciones callbacks de llamada para realizar. 
            HTTP es un elemento de Node.js que lo hace muy adecuado para la base de una librería o un framework web.

        </p>
        <img className='imagenposter'src='https://th.bing.com/th/id/R.748f4c01524c4c1783f4953e4ce09885?rik=ap8Df2sqrIR8sQ&pid=ImgRaw&r=0' alt="IEEE Logo"/>
    </div>

    <div className="containerArt"> 
        <h1 className='welcome-test1'>React.js</h1>
        <p className='description-test'>
                React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.
                Las vistas declarativas hacen que tu código sea más predecible, por lo tanto, fácil de depurar. Crea componentes encapsulados que manejen su propio estado, y conviértelos en interfaces de usuario complejas.
                Ya que la lógica de los componentes está escrita en JavaScript y no en plantillas, puedes pasar datos de forma sencilla a través de tu aplicación y mantener el estado fuera del DOM.
                En React no dejamos fuera al resto de tus herramientas tecnológicas, así que podrás desarrollar nuevas características sin necesidad de volver a escribir el código existente.
                React puede también renderizar desde el servidor usando Node, así como potencializar aplicaciones móviles usando React Native.
        </p>
        <img class='imagenposter'src='https://betosanro.com/wp-content/uploads/2021/09/que-es-react.png' alt="IEEE Logo"/>
    </div>

    <div className="containerArt"> 
        <h1 className='welcome-test1'>Javascript</h1>
        <p className='description-test'>
        JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrado. Es la tercera capa del pastel de las tecnologías web estándar, dos de las cuales (HTML y CSS) hemos cubierto con mucho más detalle en otras partes del Área de aprendizaje.
        </p>
        <img class='imagenposter'src='https://miro.medium.com/max/828/1*YQgaKfVzK-YpxyT3NYqJAg.png' alt="IEEE Logo"/>
    </div>

    <div className="containerArt"> 
        <h1 className='welcome-test1'>PHP</h1>
        <p className='description-test'>
        PHP son las siglas en inglés de “Hypertext Pre-Processor” que al traducirlo al español pierde un poco el sentido, mejor lo analizamos y encontramos que significa “Lenguaje de Programación Interpretado”. Este lenguaje es al que le debemos la visualización de contenido dinámico en las páginas web. Todo el código PHP es invisible para el usuario, porque todas las interacciones que se desarrollan en este lenguaje son por completo transformadas para que se puedan ver imágenes, variedad de multimedia y los formatos con los que somos capaces de interactuar añadiendo o descargando información de ellos.
        </p>
        <img class='imagenposter'src='https://www.arsys.es/blog/file/uploads/2019/08/diciembre-2018-php-1.jpg' alt="IEEE Logo"/>
    </div>
    
</div>
</>
)
}
