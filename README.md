# reqResTesting Repository

## 📋 Descripción

Este proyecto tiene como objetivo ejecutar pruebas de carga a la API pública https://reqres.in/api/register utilizando K6, JavaScript y Jenkins.

## ⚙️ Requisitos

- **K6**: Asegúrate de tener K6 instalado en tu máquina. Puedes verificarlo con el comando:
  ```sh
  k6 --version
  ```

- **NodeJs**: Necesitarás NodeJs para poder utilizar javascript
  ```sh
  node -v
  ```
  
## 📂 Estructura del Proyecto
  La estructura del proyecto es la siguiente:

  ```text
    .
    ├── src
    │   ├── resources
    │   └── tests
    ├── .gitignore
    ├── Jenkinsfile
    └── README.md
  ```

- **src/resources**: Data necesaria para ejecutar los tests.
- **src/tests**: Código fuente de los scripts de pruebas.
- **Jenkinsfile**: Archivo de configuración para Jenkins.

## 🚀 Instalación
1. Clona el repositorio:
  ```sh
  git clone https://github.com/Ticketedsole6/k6Reqres.git
  ```

## 🛠️ Jenkins
Este proyecto incluye un archivo Jenkinsfile que define el proceso de CI/CD. Asegúrate de configurar Jenkins para que apunte a tu repositorio y ejecute el pipeline definido en este archivo.

### Configuración del pipeline en Jenkins
[![config-pipe-k6.jpg](https://i.postimg.cc/TPfNmW0Y/config-pipe-k6.jpg)](https://postimg.cc/QFYqZCvR)

## 🔍 Ejecución de Pruebas
Para ejecutar las pruebas localmente, usa npm:

  ```sh
  npm run test
  ```

## Resultados de la Ejecución del Pipeline en Jenkins

### **Etapas ejecutadas del pipeline:**
[![stages.jpg](https://i.postimg.cc/C53mKZd0/stages.jpg)](https://postimg.cc/bSRQCwQV)

### **Console Report**
[![console-log-report.jpg](https://i.postimg.cc/WpxvZXkN/console-log-report.jpg)](https://postimg.cc/23dMRdGM)

## Informe de Prueba de Carga Realizada

### Condiciones del Test

**Escenario de Carga:**

- API: https://reqres.in/api/register (POST)
- Executor: "ramping-arrival-rate"
- Start Rate: 1 solicitud por segundo
- Time Unit: 1 segundo
- Pre-allocated VUs: 50
- VUs Máximas: 500
- Duración: 2 minutos
- Objetivo: incremetar las peticiones por segundo durante 2 minutos desde 1 rps hasta llegar a las 1000 rps

### Resultado de la prueba
[![console-log-report.jpg](https://i.postimg.cc/WpxvZXkN/console-log-report.jpg)](https://postimg.cc/23dMRdGM)

### Interpretación de Resultados

- **Checks y Respuesta del Servicio**: Se alcanzó un 99.99% de éxito en los checks, lo cual indica una alta confiabilidad en la API. Sin embargo, hubo una respuesta inesperada entre las 33,659 solicitudes, que merece una revisión para identificar la causa y evitar posibles problemas futuros.

- **Iteraciones Descartadas**: Se observaron 25,299 iteraciones descartadas, una cifra significativa que puede ser indicativa de sobrecarga o problemas en la gestión de solicitudes concurrentes. Esto requiere una investigación adicional para mejorar la eficiencia.

- **Duración de Solicitud HTTP**: El tiempo promedio de respuesta de las solicitudes HTTP fue de 693.83 ms, con un tiempo máximo de 23.04 s, lo cual puede ser un indicador de puntos de estrangulamiento bajo alta carga. Aunque los percentiles (90 y 95) muestran tiempos razonables, los valores máximos deben ser optimizados.

- **Usuarios Virtuales**: La prueba se realizó con un máximo de 500 usuarios virtuales y un promedio de 120 VUs activos. Este nivel de concurrencia es una buena representación de condiciones de carga alta.

- **Tiempos de Espera y Conexión**: Los tiempos de espera (648.55 ms en promedio) y de conexión (6.88 ms en promedio) indican que la mayoría del tiempo se gasta esperando la respuesta del servidor. Esto podría ser optimizado mediante mejoras en la infraestructura del servidor o en la eficiencia del procesamiento de solicitudes.

### Conclusiones y Recomendaciones

- **Estabilidad y Fiabilidad**: La API ha mostrado un rendimiento generalmente estable con una alta tasa de éxito en los checks, pero la única solicitud fallida debe ser evaluada y rectificada.

- **Optimización de Rendimiento**: Los tiempos máximos de respuesta y las iteraciones descartadas sugieren que hay margen para optimizar el rendimiento del servidor y mejorar la capacidad de manejo de carga.

- **Revisión de Infraestructura**: Se recomienda revisar la infraestructura del servidor para identificar y mitigar posibles cuellos de botella, especialmente aquellos que causan tiempos de respuesta elevados.

- **Monitoreo Continuo**: Continuar con el monitoreo y las pruebas periódicas para asegurar que la API mantenga su rendimiento bajo diferentes cargas y mejorar la escalabilidad según sea necesario.

**En resumen, la API ha demostrado ser robusta bajo condiciones de carga significativa, pero hay áreas clave que pueden beneficiarse de una optimización adicional para asegurar una operación mucho más eficiente y confiable.**

## 📧 Owner
Este repositorio fue creado por Juan Felipe Gómez