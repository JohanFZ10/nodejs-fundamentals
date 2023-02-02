************************************************ FUNDAMENTOS DE NODEJS *****************************************************
Concepto: Entorno de ejecución para JavaScript, que permite ejecutar codigo JavaScript fuera de los navegadores Web, ya sea
dentro de un procesador, servidor o para crear App de escritorio, IoT, API etc.

Caracteristicas:
1. Se basa en el Motor V8 de google, por lo cual lo hace muy robusto en terminos de rendimiento y cantidad de solicitudes que 
puede atender por segundo. Este motor le permite a NodeJS convertir JS a codigo maquina, en vez de interpretarlo
2. Implmenta una arquitectura basada en Eventos asincronos, donde las funciones se ejecutan solo en caso de evento como: 
    - Deteccion de error - Modificacion en un archivo - respuesta de una base de datos etc
3. Es multiplataforma, lo cual lo hace escalable y robusto.
4. Es de tipo monolitico, es decir, por cada nucleo del procesador, se puede ejecutar un subproceso
5. centrado en modulos y orientado a eventos

Arquitectura de NodeJS
Event Loop: Es un bucle o subproceso que se esta ejecutando todo el tiempo en algun nucleo del procesador. Su mision es ejecutar eventos
de manera asincrona de forma rapida. Si estos eventos presentan algun tipo de bloqueo, o son procesos complejos que demandan mucho tiempo
para el procesador, el Event Loop decidira si los pasa a la cola de eventos (Event Queue) o a la cola de subprocesos (Thread Pool)
Event Queue: En esencia, es una cola de eventos que contiene todos los eventos provenientes de nuestro subproceso principal y que son 
ocasionados por: funciones, request, promesas etc.
Thread Pool: Es una cola de subprocesos, que almacena eventos que demandan mas tiempo o que son mas complejos de ejecutar como: 
Operaciones con DB - Operaciones con archivos - Operaciones de tiempo - Operaciones mas lentas. 
Cada uno de los subprocesos o eventos guardados en el Thread pool, seran ejecutados en un hilo diferentes del procesador, donde este tiene
la libertad de ejecutarlos cuando <<quiera>>.

NodeJS visto como un monohilo:
Node en esencia ejecuta monohilos (un unico subproceso), esto lo hace robusto ya que no consume demasiados recursos del procesador,
sin embargo, tambien es una desventaja, si no se hace un adecuado tratamiento de errores, el hilo principal de node se puede romper,
ocasionando que todo falle. Por lo anterior es importante hacer uso de elementos como el Try catch, para caputar errores y tratarlos
evitando que se rompa el hilo principal.

¿Cómo se ejecuta un monohilo?
1- Se abre un nuevo proceso de node en el procesador.
2- Se interpreta todo el archivo .js
3- Se convierte a codigo maquina
4- Se prepara todo lo necesario para ejecutarlo
5- Se ejecuta
6- Se cierra o termina el proceso

¿Que son las variables de entorno?
Son variables que no pertenecen de manera directa a un hilo o subproceso de node, es decr, que no han sido declaradas dentro del
programa, sino que mas bien pertenecen al sistema y son externas al programa de node. Para acceder a ellas se utiliza:
    - process.env.NAME_VARIABLE : Como buena practica, se recomienda que las variables de entorno siempre esten en mayuscula
    - process.env.NAME_VARIABLE || valor_pordefecto: Como buena practica, se recomienda declarar estas variables de entorno, 
    indicando su valor por defecto
    - Para ejecutar y probar un hilo que depende de variables de entorno hacerlo de esta manera:
        $env:NAME_VARIABLE1="Valor_deseado" $env:NAME_VARIABLE2="valor_deseado" node script.js

Herramientas para desarrollo y produccion de Apps con NodeJS
1- Nodemon: Es un inspector de codigo (Demonio en Linux) utilizado en la etapa de desarrollo, que vigila 
los procesos que se estan ejecutando en tiempo real (procesos en caliente), buscando optimizar los 
procesos de desarrollo. Cuando Nodemon detecta cambios en los archivos JS de cierto proceso, este genera 
un reinicio automatico de dichos procesos, logrando reducir tiempos de testing.
Nota: Es un gestor que nos ayuda a detectar los cambios, compilarlo y ejecutarlos. 
2- pm2: Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi 
aplicación 24/7. Permite:
    - Monitorear tu codigo: En caso de detectar que algun hilo de node se rompe por algun error, este
    informa al equipo desarrollador:
    - Permite observar en tiempo real paràmetros de rendimiento de nuesta App. Ej: %CPU, %RAM, #Reinicios
    - Permite realizar seguimiento de una App en produccion.

    Comandos de PM2:
    --Start pm2
    - pm2 start ruta-archivo.js
    --Stop pm2
    - pm2 stop ruta-archivo.js || ID_PROCESO
    -- Ver el estado de los procesos (%CPU - %RAM - #Reinicios)
    - pm2 status
    -- Monitoreo en tiempo real
    - pm2 monitor
    -- Observar logs de la App en tiempo real
    - pm2 log


3- flag --watch: Funciona de manera similar que nodemon en Desarrollo. Esta feacture viene integrada en 
las versiones 18.0.0 de nodeJS

¿Que son los callback?
Un callback es una funcion que se pasa como argumento a otra funcion de orden superior, para ser llamada en
otro momento. La funcion que recibe como parametro otra funcion, es llamada funcion de orden superior. Esta 
contiene la logica correspondiente para ejecutar adecuadamente la funcion callback.

¿Que es una funcion Recursiva?
Es aquella que se llama asi misma dentro del cuerpo que la define. Para controlar que tantas veces 
deseo llamarla, se utilizan las estructuras de control.
    Ejemplo:
        funcion miFuncion(name,veces){
            if(veces>0){
                console.log(miFuncion(name,--veces);
            }
        }

¿Que son las promesas?
Una promesa es una función que recibe dos parametros (resolve, reject). Son una manera mas elegante y
legible de trabajar con callbacks. Permite leer codigo asincrono de manera sincrona. Facilita el llamado
de funciones callback en cascada, permite tratar los errores de una manera mas eficiente, evitando que
el hilo principal de node se rompa. En otras palabras, una promesa, es una funcion de callback que contiene
3 estados: resuelta, pendiente o rechazada. Una promesa puede ser resuelta de manera inmediata o 
eventualmente en un futuro. Una promesa puede ser rechazada de manera inmediata o eventualmente en un 
futuro. Estas suelen utilizarse para gestionar operaciones tales como: consulta de APIs, comunicacion con 
bases de datos, operaciones con servidores etc, operaciones que eventualmente seran resueltas.

¿Como funciona la sintaxis Async/Await?
Esta sintaxis, permite declarar de manera explicita que una función es asincrona. De esta manera, el hilo 
principal creara un subproceso para ejecutar la funcion asincrona esperando hasta que obtenga una respuesta.
Esta sintaxis se utiliza para crear codigo mas legible y permite que las funciones asincronas se ejecuten
como si fueran sincronas.

¿Que son los Globales de NodeJS?
Son un conjunto de funcionalidades integradas en el CORE de NodeJS, que podemos utilizar por defecto, sin 
necesidad de importarlas o importar paquetes externos. Para conocer a profundidad todas estas funcionalidades
consutar la documentacion: https://nodejs.org/docs/latest-v17.x/api/globals.html

¿Que es FileSystem?
FS es un modulo integrado en NodeJS que permite manipular de manera eficiente archivos del sistema, permitiendo
leerlos, crearlos, modificarlos o incluso eliminarlos. FS es la alternativa mas interesante para trabajor
o realizar operaciones con archivos. Este modulo opera de manera asincrona.

¿Como tratar los errores en NodeJS?
Cuando estamos implementando funciones en NodeJS que no son promesas y que posiblemente pueden fallar, lo 
mejor es utilizar la sintaxis Try/Catch para ejecutarlas, de esta manera, podemos evitar que se rompa
el hilo principal de node y asu vez capturar el error.

¿Que son los child process?
Un proceso es la ejecución de algo(programa, commando, etc) que terminara en un tiempo finito. Cuando se
ejecuta un programa estos corren sobre la terminal y cuando necesitan crear un nuevo proceso crean una 
nueva terminal(Parent shell). En node, existen dos maneras de manipular subprocesos gracias al modulo
child_process, el metodo exec y el metodo spawn. El primero nos permite ejecutar cualquier comando de terminal
recibiendo 2 parametros: comando, funcion de callback (error,stdout). El objeto stdout contiene la respuesta
del comando ejecutado desde node. El metodo spawn, permite manipular procesos de manera diferente, ya que
se puede tener un control mas preciso de los procesos hijo ejecutados.