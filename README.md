# Obteniendo más entrevistas

## Lista de elementos necesarios para crear tu curriculum

- Usar un diseño predefinido de algún sitio web.
- Que todo esté en una y sólo una página.
- Incluir palabras de la descripción del trabajo al que se está aplicando al inicio del CV.
- Incluir el nombre de la compañía a la que se está aplicando.
- ¿El primer item de tu CV refleja qué está buscando la compañía?
- Describir tu experiencia demuestra valor (resaltar el puesto, no el nombre de la compañía en la que se trabajó).
- Tener un enlace a algún sitio online (portafolio, GitHub, etc).
- No decir "Yo" en el CV.
- No usar palabras de moda describiendo qué tan bueno soy.
- Usar palabras de acción, es decir no sólo decir qué lenguajes sé, sino también indicar tareas como "Testing, mantenimiento y soporte de servidores de producción" que concluyan en el resultado final.
- Menciona todo en términos de impacto, no sólo describir las responsabilidades.
- Conocimiento y habilidades técnicas deben incluir qué busca la compañía, sólo mostrar años si causa impresión/impacto.
- Sólo incluir secciones/items que causan impresión: Experiencia, proyectos, educación, habilidades técnicas, etc.
- Evitar la mala gramática y errores ortográficos.

Enlaces para elementos útiles:
- [Plantilla para CV](https://www.resumemaker.online/es)
- [Herramienta para verificar mi CV](https://www.jobscan.co/)
- [Más plantillas](https://www.cakeresume.com/Engineering-resume-samples)
- [Otra plantilla](https://thisresumedoesnotexist.com/)
- [Guía de StackOverflow para hacer mi CV](https://stackoverflow.blog/2020/11/25/how-to-write-an-effective-developer-resume-advice-from-a-hiring-manager/)


### Demostrar experiencia

- GitHub.
- Website.
- 1 o 2 proyectos grandes.
- Blog.


# Big O

Nos permite validar el tiempo de ejecución usando la cantidad de elementos y la cantidad de operaciones. A continuación una gráfica mostrando qué tan buena es una complejidad Big O.

![Gráfica Big O](https://i.ibb.co/CMHHnKC/image.png)

También una tabla con toda la información de la complejidad de las operaciones para cada estructura de dato:

![Tabla estructuras de datos](https://i.ibb.co/C6t3zn4/image.png)

Y por último la complejidad de algunos algoritmos que ordenan los datos de los arreglos:

![Tabla algoritmos arreglos](https://i.ibb.co/4J72hRj/image.png)

## Reglas Big O

### 1. Peor caso
Siempre nos concentramos en el peor caso con $O$ ya que $\Omega$ sólo representa el mejor de los casos y $\Theta$ el caso promedio. Esto lo hacemos ya que al tener el cálculo del peor caso podremos validar el valor máximo de tiempo de ejecución de nuestro código para tener una buena escalabilidad.

### 2. Eliminar constantes
Siempre hacer nuestros cálculos con base a $n$ si nuestro Big O no es $O(1)$, es decir olvidarnos de las constantes.

### 3. Diferentes términos para valores de entrada
Si hay una entrada $n$ y una entrada $m$ en nuestro código, es importante hacer nuestros cálculos de Big O usando variables distintas. Así sean 1 ciclo `for` para cada arreglo el Big O final será $O(n + m)$, no $O(n)$ y para 1 ciclo dentro de otro el Big O final será $O(n * m)$ y no $O(n^2)$.

### 4. Eliminar no dominantes
Siempre dejar el Big O dominante, descartar los otros, recordar que nos interesa el Big O mayor, por lo que si tenemos un $O(n^2 + 3n)$ el Big O final será $O(n^2)$.

Con todas estas recomendaciones y tips podemos decir que para mejorar nuestro código debemos usar estructuras de datos y algoritmos, entendiendo que las estructuras de datos son alternativas para guardar nuestra información y los algoritmos son formas de usar nuestras estructuras de código para escribir nuestro código.


## Ejemplos de Big O

### $O(1)$ 
Bloques de código sin ciclos.
```
const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
	console.log(boxes[0]);
	console.log(boxes[1]);
}

logFirstTwoBoxes(boxes);
```

### $O(log_n)$
Usualmente algoritmos de búsqueda tienen $log_n$ si estos están ordenados (Binary search) (no aplica para Hash Maps).
```
// Level 0: 2^0 = 1;
// Level 1: 2^1 = 2;
// Level 2: 2^2 = 4;
// Level 3: 2^3 = 8;
// # of nodes = 2^h - 1
// log nodes = height (log 100 = 2 => 10^2 = 100)
```

### $O(n)$
Bloques de código con ciclos de un nivel.
```
const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const large = new Array(100000).fill("nemo");

function findNemo(array) {
	for(let i = 0; i < array.length; i++) {
		if(array[i] === "nemo") {
			console.log("Found NEMO!");
		}
	}
}

findNemo(large);
```

### $O(n * log_n)$
Suelen ser algoritmos con operaciones de ordenamiento.

### $O(n^2)$
Cada elemento en una colección necesita ser comparado con cada uno de los restantes, por ende se necesitan 2 ciclos.
```
const boxes = ["a", "b", "c", "d", "e"];

function logAllPairsOfArray(array) {
	for(let i = 0; i < array.length; i++) {
		for(let j = 0; j < array.length; j++) {
			console.log(i, j);
		}
	}
}

logAllPairsOfArray(boxes);
```

### $O(2^n)$
Algoritmos recursivos que resuelven un problema de tamaño $n$.

### $O(n!)$
Se agrega un ciclo para cada elemento en $n$.
```
function breakMyBrowser(n) {
	for(let i = 0; i < n; i++) {
		breakMyBrowser(n - 1);
	}
}

breakMyBrowser(7);
```


## Pilares de la programación

### 1. Legible
El código se entiende bien, es código limpio, claro, conciso y no tenemos código repetido, si es así debemos refactorizar para que quede en funciones y así optimizar el código.

### 2. Escalable
- **Velocidad:** Qué tan rápido es nuestro tiempo de ejecución, cuántas operaciones se deben ejecutar.
- **Memoria:** Las computadoras tienen memoria limitada, por lo que debemos tener cuidado con nuestro código con **space complexity**. Es importante tener presente que si queremos usar menos memoria tendremos que sacrificar la velocidad o **time complexity** y si queremos mejorar nuestro tiempo de ejecución requeriremos usar más memoria.


## Space complexity

Cuando un programa se ejecuta, tiene 2 formas de recordar las cosas, el heap (montón) y stack (pila). El montón es donde usualmente guardamos variables con los valores que les asignamos y la pila donde solemos seguir los llamados de nuestras funciones.

Las cosas que incrementan nuestro **space complexity** son:
- Variables.
- Estructuras de datos.
- Llamados de funciones.
- Asignaciones.

Y a continuación un ejemplo de código donde el space complexity de nuestro código es $O(1)$ ya que la única asignación que se realiza es en el `for` para la variable $i$ y el `i++` no se tiene en cuenta ya que a pesar de alterar la variable sigue siendo el mismo espacio en memoria asignado desde un principio:
```
function booooo(n) {
	for(let i = 0; i < n.length; i++) {
		console.log("boooooo!");
	}
}

booooo([1, 2, 3, 4, 5]);
```

Y para el ejemplo 2 un space complexity de $O(n)$ por la asignación de variable en cada iteración para la variable `hiArray` ya que estamos requiriendo más espacios en memoria para cada elemento $i$ que iteramos:
```
function arrayOfHiNTimes(n) {
	let hiArray = [];

	for(let i = 0; i < n; i++) {
		hiArray[i] = "hi";
	}

	return hiArray;
}

arrayOfHiNTimes(6);
```


# ¿Cómo resolver problemas de código?

## ¿Qué buscan las compañías?

- **Habilidades analíticas:** Cómo puedes pensar en un problema y analizar cosas para solucionar. Cuando estoy en una entrevista técnica es importante decir lo que estoy pensando, eso les interesa.
- **Habilidades de programación:** Qué tan bueno es mi código, si es limpio, organizado, legible.
- **Habilidades técnicas:** Conocimiento técnico, si sé los fundamentos, si entiendo los pros y contras de las diferentes soluciones o si sólo memorizo cosas.
- **Habilidades de comunicación:** Si mi personalidad hace juego con la personalidad de la compañía, si soy bueno para liderar, trabajar en equipo, etc.


## ¿Qué necesitamos para las entrevistas técnicas?

### Estructuras de datos
- Arrays (arreglos).
- Stacks (pilas).
- Queues (colas).
- Linked Lists (listas enlazadas).
- Trees (árboles).
- Tries.
- Graphs (grafos).
- Hash Tables (tablas hash).

### Algoritmos
- Sorting (ordenamiento).
- Dynamic Programming (programación dinámica).
- BFS + DFS (Searching) (algoritmos de búsqueda en grafos).
- Recursion.


## Paso a paso para responder

- **1.** Cuando el entrevistador dice la pregunta, escribir los puntos claves al inicio (por ejemplo arreglo ordenado). Estar seguro que tengo todos los detalles. Mostrar qué tan organizado soy.
- **2.** Asegurarme de hacer un doble chequeo: Cuáles son las entradas, cuáles son las salidas.
- **3.** ¿Cuál es el que más se quiere optimizar en el problema? Tiempo, espacio y memoria, etc. ¿Cuál es el objetivo principal?
- **4.** No preocuparme porque hago muchas preguntas.
- **5.** Empezar con la fuerza bruta. Lo primero que se me venta a la mente. Eso demuestra que estoy dispuesto a pensar bien y críticamente (no necesito escribir el código, sólo mencionarlo).
- **6.** Decirles por qué mi intento no es el mejor (por ejemplo es $O(n^2)$ o superior, no legible, etc).
- **7.** Ir sobre mi enfoque, comentar cosas y ver cómo puedo romper las cosas. Cualquier repetición, cuellos de botella como $O(n^2)$, o trabajo innecesario. ¿Usé toda la información que el entrevistador me dió? Cuellos de botella son parte del código con el mayor Big O. Enforcarme en ello. A veces esto también ocurre con el trabajo repetido.
- **8.** Antes de empezar a escribir código, ir a través de mi código y escribir los pasos que voy a seguir.
- **9.** Modularizar mi código desde el principio. Dividir mi código en pequeñas lindas piezas y sólo comentarlo si lo necesito.
- **10.** Ahora empezar a escribir el código. Tener en mente que cuanto más me prepare y entienda lo que debo solucionar, mejor me irá en el tablero. Así que nunca empezar a solucionar el problema en el tablero sin estar seguro de cómo deben funcionar las cosas. Eso es una receta para un desastre. Tener en mente: Muchas entrevistas preguntan cosas que no responderé completamente a tiempo. Así que debo pensar: ¿Qué puedo mostrar en función de indicar qué puedo hacer y por qué soy mejor que otros programadores? Dividir en funciones (si no puedo recordar un método, sólo inventar una función y al menos estará ahí). Escribir algo y comenzar con el resto.
- **11.** Pensar en la validación de errores y cómo puedo romper mi código. Nunca asumir sobre la entrada. Asumir que las personas están tratando de romper mi código y que ese Darth Vades está usando mi función. ¿Cómo lo aseguraré? Siempre chequear falsas entradas que yo no quiero. Aquí hay un truco: Comentar en código, las validaciones que yo quiero hacer... escribir la función, decirle al entrevistador que yo escribiría pruebas ahora para hacer mi función fallar (pero no necesitaré actualmente escribir las pruebas).
- **12.** No usar nombres confusos para las variables (ejemplo i o j). Escribir código que se pueda leer bien.
- **13.** Probar mi código: Validar no envío de parámetros, 0, undefined, null, arreglos masivos, código asíncrono, etc... Preguntar al entrevistador si puedo hacer suposiciones sobre el código. ¿Puedo hacer la respuesta retornar un error? Cavar agujeros en mi solución. ¿Estoy repitiéndome?
- **14.** Finalmente decirle al entrevistador dónde mejoraría mi código, ¿Funciona? ¿Hay diferentes enfoques? ¿Es legible? ¿Qué Googlearía para mejorar? ¿Cómo puede mejorar el rendimiento? Posiblemente: Preguntar al entrevistador cuál fue la solución más interesante que ha visto para ese problema.
- **15.** Si el entrevistar está feliz con la solución, la entrevista suele finalizar aquí. También es común que el entrevistador me pregunte más cosas, por ejemplo cómo manejaría el problema si toda la entrada es demasiado grande para caber en memoria, o si la entrada llega como un flujo. Esta es una pregunta de seguimiento común en Google, donde se preocupan mucho por la escala. La respuesta suele ser un enfoque de divide y vencerás: realiza un procesamiento distribuido de los datos y solo lee ciertos resquicios de la entrada del disco en la memoria, escribe la salida de nuevo en el disco y combínalos más tarde.


## Lista para buen código

- Funciona.
- Buen uso de las estructuras de datos.
- Reusar código, no repetir.
- Modular - el código es legible, testeable y mantenible.
- Menos de $O(n^2)$. Queremos evitar ciclos anidados si podemos. 2 ciclos separados son mejores que tenerlos unidos.
- Baja complejidad espacial - Recursión puede causar "stack overflow", copia de grandes arreglos podría superar la memoria de la máquina.


## Heurísticas para resolver la pregunta
- Hash Tables suelen ser la respuesta para mejorar nuestra complejidad de tiempo.
- Si es un arreglo ordenado, usar árboles binarios para conseguir $O(log_n)$. Dividir y conquistar - Dividir la información en pequeñas partes y repetir el proceso con pequeñas partes de información. Búsqueda binaria es un gran ejemplo de esto.
- Intentar ordenar el valor de entrada.
- Hash Tables e información precomputada (por ejemplo ordenada) son unos de los mejores caminos para optimizar el código.
- Hacer una comparación tiempo vs espacio. A veces guardar cierta data extra en nuestra memoria puede mejorar el tiempo (tiempo de ejecución).
- Si el entrevistador me está dando algún aviso/consejo/tip hacerle caso y seguirlo.
- Compensaciones espacio tiempo: Hash Tables suelen solucionar esto la mayoría de las veces. Usas más espacio pero puedes conseguir una mejora en el tiempo. En programación, a veces puedes usar un poco más de espacio para ser más veloces en tiempo.


# Estructuras de datos

## Arrays

| Estructura de dato | Lookup | Push | Insertar| Eliminar|
|--|--|--|--|--|
| Arreglo | $O(1)$ | $O(1)$ | $O(n)$ | $O(n)$ |

```
const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes de almacenamiento
// Recordar que una variable ("a" por ejemplo) requiere 32 bits de almacenamiento, es decir 4 bytes

// Acceso
strings[2]; // O(1)

// Push (insertar al final)
strings.push("e"); // O(1)

// Pop (eliminar el último)
strings.pop(); // O(1)

// Unshift (insertar al inicio)
strings.unshift("x"); // O(n)

// Splice (insertar elemento en arreglo en posición específica)
strings.splice(2, 0, "alien"); // O(n/2) => O(n)
```

### Arreglos estáticos vs arreglos dinámicos
- **Arreglos estáticos:** Tiene un tamaño fijo, necesitas especificar el número de elementos que deseas que tenga el arreglo.
- **Arreglos dinámicos:** Nos permiten copiar y rehacer un arreglo en una nueva ubicación de memoria si necesitamos más espacio, esto quiere decir que el tamaño es flexible.

**Ejemplo:**
```
// Arreglos estáticos (C++)
int a[20];
int b[5] = {1, 2, 3, 4, 5}

// Arreglos dinámicos (JavaScript)
let a = [];
a.push(5);
```

Aunque a grandes rasgos los arreglos dinámicos parecen mejores debemos tener en cuenta que si necesitamos tener un control estricto de la memoria será más fácil controlar la complejidad espacial con arreglos estáticos.

**Nota:** Siempre en las entrevistas técnicas ver los `strings` como `arreglos`.

#### Ventajas
- Rápidas búsquedas.
- Rápidas inserciones y eliminaciones en el último elemento.
- Si está ordenado es bueno porque tiene todo ubicado cercanamente en memoria, lo que lo hace rápido.

#### Desventajas
- Inserciones lentas para posiciones diferentes a la última ya que se debe reescribir los índices de los demás elementos para poder acceder a ellos.
- Eliminaciones lentas por la misma razón que las inserciones.
- Si se usan arreglos estáticos tienes un tamaño fijo.


## Hash tables

| Estructura de dato | Lookup | Buscar | Insertar | Eliminar|
|--|--|--|--|--|
| Hash table | $O(1)$ | $O(1)$ | $O(1)$ | $O(1)$ |

Las tablas Hash o más conocidas como Hash tables están en casi todos los lenguajes de programación modernos, en Python son los diccionarios, en JavaScript objetos, etc.

Las funciones Hash reciben un string y la función genera un patrón aleatorio.

```
let user = {
	age: 54,
	name: "Kylie",
	magic: true,
	scream: function {
	console.log("ahhhhhhh!");
};

user.age; // O(1)
user.spell = "abra kadabra"; // O(1)
user.scream(); // O(1)

// Collision => O(n/k) => O(n)

// Map permite guardar cualquier tipo de dato como una llave del map, además mantienen el orden de inserción
const a = new Map();

// Set sólo guarda las llaves, no los valores
const b = new Set();
```

#### Ventajas (buena resolución de colisión necesaria)
- Búsquedas rápidas.
- Inserciones rápidas.
- Llaves flexibles.

#### Desventajas
- No tiene orden.
- Si quiero recorrer todas las llaves es lento.


## Linked Lists

| Estructura de dato | Prepend (agregar al inicio) | Append | Lookup | Insert | Delete |
|--|--|--|--|--|--|
| Linked List | $O(1)$ | $O(1)$ | $O(n)$ | $O(n)$ | $O(n)$ |

Las Listas Enlazadas o Linked Lists son elementos que están relacionados/relacionados con otros, generando una conexión 1 a 1 para cada elementos de nuestra estructura de datos. Estos datos pueden estar ordenados o desordenados.

Las Listas Enlazadas pueden tener una gran ventaja si las comparamos con los arreglos, y es que si agregamos un elemento al inicio de un arreglo va a ser necesario reposicionar los demás elementos para poder tener el orden de índices correcto, mientras que con las Listas Enlazadas no, ya que no cuentan con índices y son los elementos los que están relacionados directamente.

La ventana de las Listas Enlazadas sobre Tablas Hash es que de cierta forma hay un orden, mientras que en Hash Tables sólo hay elementos ubicados en espacios de memoria sin relación alguna.

La gran diferencia entre Listas Enlazadas y Listas Doblemente Enlazadas es que las sencillas permiten hacer una rápida inserción cuando se hace al inicio o al final ya que estas operaciones son $O(1)$, y con las dobles es que al tener una relación bidireccional podemos hacer recorridos en ambos sentidos, y esto nos permite poner al reverso la lista sin problema.

```
const basket = ["apples", "grapes", "pears"];

// Linked List: apples --> grapes --> pears
// Ejemplo de ubicación en memoria
// apples
// 8947 --> grapes
//          8742 --> pears
//                   372 --> null

const obj1 = {a: true};
const obj2 = obj1;
obj1.a = "booya";
delete obj1;
// console.log("1", obj1);
console.log("2", obj2); // No se borra
```

#### Ventajas
- Rápidas inserciones (si tenemos referencias directas como inicio y final).
- Rápidas eliminaciones (si tenemos referencias directas como inicio y final).
- Puede ser ordenado.
- Tamaño flexible.

#### Desventajas
- Búsqueda lenta.
- Requiere de más memoria.


## Stacks

| Estructura de dato | Lookup | Pop | Push | Peek |
|--|--|--|--|--|
| Stack | $O(n)$ | $O(1)$ | $O(1)$ | $O(1)$ |

Las pilas o stacks es un tipo de estructura de data que son como platos, tenemos una pieza de información y luego ponemos otra encima, y así sucesivamente, y al tener toda esta información apilada sólo puedes ir extrayéndola desde la última a la primera, así es LIFO (Last In First Out). Son muy útiles cuando por ejemplo necesitas visualizar el último elemento agregado a la pila, otro ejemplo es el historial de tu navegador, y para regresar usas una pila y vas eliminando el primero cada vez que das atrás.


## Queues

| Estructura de dato | Lookup | Enqueue | Dequeue | Peek |
|--|--|--|--|--|
| Queue | $O(n)$ | $O(1)$ | $O(1)$ | $O(1)$ |

Las colas o pilas son como una fila, y la primera persona en llegar entra, ese es su funcionamiento, así es FIFO (First In First Out). Otro ejemplo es Uber cuando una persona solicita un servicio de transporte y luego otra, le va a dar prioridad con la primera y una vez asigna el transporte para esta seguirá con la segunda y así sucesivamente. No es recomendable usar arreglos para crear colas, ya que al eliminar el primer elemento requerimos de actualizar los índices de todos los demás elementos.

#### Ventajas
- Rápidas operaciones.
- Acceso rápido al primer/último elemento.
- Ordenado.

#### Desventajas
- Búsqueda lenta.


## Trees

Los árboles son nodos que pueden tener n cantidad de hijos, tienen un nodo raíz y cada uno de los hijos desciende de este nodo, la relación entre padre e hijo es unidireccional y hay nodos hojas que son aquellos que no tienen hijos. Un ejemplo de implementación de árboles es el HTML siendo la etiqueta `html` la raíz de todo.

### Binary Tree

Cada nodo puede tener sólo 0, 1 o 2 nodos, y cada hijo sólo puede tener un padre.

Un árbol binario perfecto es parejo, es decir que todos los nodos hoja están llenos y no hay ningún nodo que tenga un sólo hijo, es decir que pueden tener 0 o 2 hijos, además el último nivel del árbol está lleno de nodos hoja. Cada nivel tiene la doble cantidad de nodos que el nivel anterior.

Un árbol binario completo es aquel donde todos los nodos tienen 0 o 2 hijos, pero no necesariamente es parejo.

| Estructura de dato | Lookup | Insert | Delete |
|--|--|--|--|--|
| Binary Search Tree | $O(log_n)$ | $O(log_n)$ | $O(log_n)$ |