FROM ubuntu:latest

#Autor
MAINTAINER Roberto Morcillo Jiménez <robermorji@gmail.com>

#Actualizar Sistema Base
RUN sudo apt-get -y update

#Descargar app
RUN sudo apt-get install -y git
RUN git clone https://github.com/robermorji/Planning-task

# Enable Extra Packages for Enterprise Linux (EPEL) for Ubuntu
RUN     sudo apt-get install -y epel-release
# Install Node.js and npm
RUN     sudo apt-get  install -y nodejs npm

# Install app dependencies
COPY package.json /src/package.json
RUN cd /src; npm install

# Bundle app source
COPY . /src

EXPOSE  8080
CMD ["node", "/src/index.js"]





