FROM node:20-slim
WORKDIR /app

# Copia package.json e yarn.lock primeiro
COPY package.json yarn.lock ./

# Instala dependências
RUN yarn install --frozen-lockfile

# Copia todo o projeto
COPY . ./

# Expõe a porta que o servidor usa
EXPOSE 3001

# Comando para rodar o servidor Express
CMD ["node", "server.js"]
