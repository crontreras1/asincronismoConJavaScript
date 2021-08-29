# Apuntes del curso

# C2. Introducción al asinconismo
    
   - Asincronismo: Es la acción que no ocurre al mismo tiempo.
   - Memory heap: El espacio de memoria compartido para toda nuestra aplicación.  
   - Call Stack = Pila de ejecución.

# C3. Presentación del reto: consumir APIs

    Las principales estructuras que utiliza JS para trabajar con el asinconismo son: Callback, promesas y design y away. 

# C4. Definición estructura Callback

   ¿Qué es un Callback? Es una función que al crearla le pasamos como parametro una segunda función y de esta forma al momento de hacer una pateción o un llamado asincrono, esta se ejecuta despues de este llamado. 

# C11 Callbacks Vs Promesas Vs Async/Await

   - Callbacks 
      Ventajas: Son Universales y facil de entender, es decir, corren en cualquier navedar, ya sea viejo o moderno. 
      
      Desventajas: La composición es un poco tosca. 
      Tiene un flujo poco intuitivo. 

   - Promesas
      Ventajas: Es facilmente enlasable.
      Es mas intuitivo de leer.
      Es poderoso, es el que más se usa actualmente.

      Desventajas: No maneja escepciones sino .catch, Ahí es donde se captura el error. Se puede estar propenso a errores si no se retorna el siguiente llamado. 
      Requiere un modifier para que funcione en algunos navegadores, es decir, se necesitan herramientas externas como Vavel.

   - Async/Await
      Ventajas: Se puede utilizar Try/catch.
      Son muy faciles de leer.

      Desventajas: Hay que esperar por cada llamado. 
      Se necesitan herramientas externas para que funcione en cualquier navegador como con las promesas. 