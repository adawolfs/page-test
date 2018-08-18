---
layout:     blog/post
title:      "Como asi que Docker!?"
subtitle:   ""
date:       2018-08-13 12:00:00
author:     "adawolfs"
header-img: "assets/img/docker/banner-1.jpg"
catalog: true
tags:
    - containers
    - docker
---
# Bueno y qué es un contenedor ?

Si nos ponemos formales, un contenedor es un *paquete de software en unidades estandarizadas para desarrollo, envío e implementación.* Pero esto puede dejar con muchas dudas a todo aquel que no tenga experiencia en la materia, por ende utilizaré mi propia definición. *Un contenedor es un conjunto de software, librerías y dependencias necesarias para ejecutar una determinada aplicación, contenidas dentro de una instancia aislada del sistema operativo.*

Los contenedores hacen uso de la virtualización a nivel de sistema operativo, *que a diferencia de la virtualización que es efectuada por software como [VirtualBox o VMWare](https://wiki.archlinux.org/index.php/VirtualBox_(Espa%C3%B1ol)) los cuales proveen una virtualización a nivel de hardware llamada maquina virtual*, brindan una instancia del kernel con su propio CPU, memoria, red y componentes suficientes para su completa independencia.

El termino contenedor no es nuevo, de hecho muchas empresas lo han utilizado desde antes de que Docker existiera, gracias al proyecto llamado [Linux Containers (LXC)](https://wiki.archlinux.org/index.php/Linux_Containers), de hecho en las primeras versiones de Docker se hacia uso de LXC como virtualizador de kernel, antes de añadir su propia biblioteca llamada **libcontainer**.

## Y si eso es un contenedor que es Docker?

Docker es una plataforma de código abierto, para desarrollar, enviar y ejecutar aplicaciones, que hace uso de instancias aisladas del kernel llamadas contenedores. Este aislamiento permiten ejecutar varios contenedores simultáneamente dentro de un host. Los contenedores son livianos puesto que no necesitan la carga adicional de un hipervisor o motor de maquina virutal, sino que se ejecutan directamente dentro del kernel de la maquina host. Esto significa que en un host determinado pueden existir mayor cantidad de contenedores que de maquinas virtuales. Inclusive se pueden ejecutar contenedores dentro de maquinas host que en realidad son maquinas virtuales.

Ademas de ello docker proporciona herramientas y una plataforma para administrar el ciclo de vida de nuestros contenedores.

Estas cualidades han hecho que docker se vea fuertemente involucrado en el desarrollo de aplicaciones puesto que facilita la portabilidad y configuración de aplicaciones a lo largo de multiples capas de desarrollo así como su entrega final.

## Dibujitos!

En la siguiente imagen pueden observar un diagrama en el cual se denota la diferencia entre utilizar docker o un sistema de provisionamiento de maquinas virutales.


![docker-vs-vm.jpg]({{"/assets/img/docker/docker-vs-vm.jpg" | absolute_url }})


En el siguiente esquema de bloques podemos ver como esta distribuida una arquitectura de Docker.

![container-what-is-container.png]({{"/assets/img/docker/container-what-is-container.png" | absolute_url }})

- Infraestructura: Hardware donde nuestro host esta instalado
- Sistema Operativo Host: El sistema operativo que esta siendo ejecutado en la maquina Host, por lo regular Linux
- Docker: Conjunto de librerías que componen el entorno de docker, junto a al sistema utilizado para virtualización.
- Contenedores: Instancias del kernel que ejecutan un determinado software.

Docker no es al unica solución para provisionamiento de contenedores que exixte, pero es la mayormente utilizada y en la cual me concentraré en hablar en cuanto a contenedores, de hecho a partir de aquí cada vez me que refiera a contenedores me referiré a un *Docker container* a no ser que especifique lo contrario.
