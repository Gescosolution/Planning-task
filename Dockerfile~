FROM ubuntu:latest

#Autor
MAINTAINER Roberto Morcillo Jiménez <robermorji@gmail.com>

#Actualizar Sistema Base
RUN sudo apt-get -y update

#Descargar app
RUN sudo apt-get install -y git
RUN git clone git@github.com:Gescosolution/Planning-task.git



#Instalar app
RUN make install

