# Usar imagen oficial Node.js slim para mejor compatibilidad y menor peso
FROM node:18-slim

# Crear directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar archivos de definición de dependencias
COPY package*.json ./

# Actualizar npm a la última versión estable y luego instalar dependencias
RUN npm install -g npm@latest
RUN npm install

# Copiar todo el código fuente al contenedor
COPY . .

# Definir variable de entorno para el puerto en el que corre la app
ENV PORT=8080

# Exponer el puerto para el servicio
EXPOSE 8080

# Comando para iniciar la aplicación
CMD [ "node", "index.js" ]
