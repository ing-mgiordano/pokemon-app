## Pokémon App ## 

## Descripción ##
Pokémon App es una aplicación web desarrollada con Next.js, Tailwind CSS y NextAuth para autenticación, que permite a los usuarios explorar, buscar y ver estadísticas de Pokémon, con la funcionalidad de modo oscuro. La aplicación está desplegada en Netlify y utiliza la API de PokeAPI.

## Enlaces Importantes ##
Despliegue: pokemon-app-asafedifgital.netlify.app
Repositorio GitHub: github.com/ing-mgiordano/pokemon-app
Documentación de la API de Pokémon: PokeAPI


## Pasos de Instalación ##
Clonar el repositorio:

git clone https://github.com/ing-mgiordano/pokemon-app.git
cd pokemon-app
Configurar variables de entorno: Crea un archivo .env en la raíz del proyecto con los siguientes valores:

GITHUB_ID='tu_github_id'
GITHUB_SECRET='tu_github_secret'
NEXTAUTH_URL='http://localhost:3000'

Instalar dependencias:
npm install

Iniciar el servidor:
npm run dev
La aplicación estará disponible en http://localhost:3000.

## Uso ##
Autenticación: Inicia sesión con GitHub para acceder al contenido completo de la aplicación, incluyendo el Dashboard y las estadísticas.
Buscar Pokémon: Utiliza la barra de búsqueda para encontrar Pokémon específicos. La búsqueda se puede limpiar para mostrar nuevamente la lista completa.
Dashboard: Visualiza el total de Pokémon y su distribución por tipo en gráficos.
Modo Oscuro: Cambia entre modo claro y oscuro usando el botón de tema en el encabezado.

## Despliegue en Netlify ##
Configuración de Netlify
Conecta tu repositorio en Netlify.
Configura las variables de entorno en el panel de Netlify:
GITHUB_ID
GITHUB_SECRET
NEXTAUTH_URL=https://pokemon-app-asafedifgital.netlify.app

Despliega la aplicación. Netlify detectará automáticamente la configuración y usará npm run build como comando de construcción y npm run dev como comando de desarrollo local.

## Configuración Inicial del Proyecto ##
El proyecto fue creado con las siguientes configuraciones de Next.js:

TypeScript: No
ESLint: Sí
Tailwind CSS: Sí
Directorio src: Sí
App Router: Sí
Alias de Importación: @/*

## Testing ##
Para garantizar la fiabilidad del proyecto, se realizaron tests unitarios y E2E.

Configuración de Pruebas
Instala las dependencias de testing:

npm install @testing-library/react @testing-library/jest-dom jest cypress --save-dev

Ejecuta las pruebas unitarias:
npx cypress open   # Para modo interactivo
npx cypress run    # Ejecución automática

Ejecuta las pruebas E2E
npm test

## Decisiones de Diseño ##
Autenticación con NextAuth: Se eligió GitHub para la autenticación, dado que NextAuth ofrece integración fácil con este proveedor. Esto garantiza la seguridad y la facilidad de uso.
Estrategia de Testing: Jest y React Testing Library se utilizaron para pruebas unitarias, mientras que Cypress se implementó para E2E, dado que permite realizar pruebas completas del flujo de usuario.
Gráficos en Dashboard: Se utilizó react-chartjs-2 para mostrar gráficos de distribución por tipo de Pokémon, lo que facilita la visualización y mejora la experiencia del usuario.
Modo Oscuro: Añadido mediante Tailwind y contexto global para mejorar la accesibilidad y usabilidad de la aplicación.

## Contribuir ##
Haz un fork de este repositorio.
Crea una nueva rama (feature/mi-feature).
Haz commit de tus cambios (git commit -m 'Agrega nueva característica').
Haz push a la rama (git push origin feature/mi-feature).
Abre un Pull Request.
