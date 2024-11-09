# Usa una imagen de Node.js como base para instalar dependencias y construir el proyecto
FROM node:18 AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu proyecto a la imagen
COPY . .

# Instala las dependencias de Astro
RUN npm install

# Compila la aplicación para producción
RUN npm run build

# Usa una imagen de Nginx para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos compilados al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia el servidor de Nginx
CMD ["nginx", "-g", "daemon off;"]
