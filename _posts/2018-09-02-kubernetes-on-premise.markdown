---
layout:     blog/post
title:      "Kubernetes on Premise"
subtitle:   ""
date:       2018-09-02 12:00:00
author:     "adawolfs"
header-img: "assets/img/k8s/banner-1.jpg"
shadow-header: "0.5"
catalog: true
tags:
    - containers
    - kubernetes
---

# Descripción

A continuación detallare lo necesario para tener un entorno de kubernetes listo para poder trabajar sobre el, para ello haré uso de las siguientes tecnologias, las cuales seran necesarias para este tutorial

- [Git](https://git-scm.com/book/es/v1/Empezando-Instalando-Git)
- [Vagrant](https://www.vagrantup.com/docs/index.html)
- VirtualBox
- CentOS

# Git
Es un software para el control de versiones de código, ampliamente utilizado por empresas y desarrolladores para mantener su código fuente.

# Vagrant
Es una herramienta open source para crear y mantener software entornos de desarrollo virtuales portables. El cual nos permite provisionar intancias sobre virtualizadores como lo es VirtualBox, Docker, VMWare adicionando una capa de configuración por scripting.

# VirtualBox
Es un software para la virtualización a nivel de hardware el cual permite iniciar instancias de maquinas virtuales dentro de un host, de manera que se puedan alojar varios sistemas operativos dentro de una misma maquina en instancias completamente separadas.

# CentOS
Es una distribución libre del sistema operativo Red Hat Enterprise Linux, el cual opera de manera muy similar debido a ser un fork directo del código original de Red Hat. Es altamente preferido en instalación de servidores por su robustez, estabilidad y facilidad de uso.

He creado un repositorio con el código necesario para iniciar la maquina utilizando vagrant

# Clonar codigo desde git
{% highlight default %}
$ git clone https://github.com/adawolfs/kubernetes.vagrant.git
{% endhighlight %}

# Iniciar maquina utilizando vagrant
{% highlight default %}
$ cd kubernetes.vagrant
$ vagrant up
$ vagrant ssh
{% endhighlight %}

# Desabilitar Swap
Para poder instalar kubernetes correctamente es necesario deshabilitar el swap para ello utilizare los siguientes comandos, con los cuales deshabilitare el swap y me asegurare de que no vuelva a habilitarse despues de reiniciar la maquina.
{% highlight default %}
[vagrant@localhost]$ sudo swapoff -a 
[vagrant@localhost]$ sudo sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab
{% endhighlight %}

# Instalar Docker
El primer componente necesario para poder instalar kubernetes es docker, para ello utilizaré los siguentes comandos los cuales actualizaran los paquetes que ya hay instalados a su ultima version disponible, instalará docker y habilitara su servicio.
{% highlight default %}
[vagrant@localhost]$ sudo su
[root@localhost]# yum upgrade -y
[root@localhost]# yum install -y docker
[root@localhost]# systemctl enable docker
[root@localhost]# systemctl start docker
{% endhighlight %}

# Habilitar network bridge
Para poder tener acceso a la red de kuberetes es necesario habilitar esta funcionalidad, con los siguientes comandos
{% highlight default %}
[root@localhost]# cat <<EOF >  /etc/sysctl.d/k8s.conf 
    net.bridge.bridge-nf-call-ip6tables = 1 
    net.bridge.bridge-nf-call-iptables = 1 
  EOF
# sysctl --system
{% endhighlight %}

# Agregar Repositorio de Kubernetes
Lo primero que debe de hacerse es agregar el repositorio de kubernetes al sistema
{% highlight default %}
[root@localhost]# cat <<EOF > /etc/yum.repos.d/kubernetes.repo
    [kubernetes]
    name=Kubernetes
    baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64
    enabled=1
    gpgcheck=1
    repo_gpgcheck=1
    gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
  EOF
{% endhighlight %}

# Deshabilitar enforcement
{% highlight default %}
[root@localhost]# setenforce 0
[root@localhost]# sed -i --follow-symlinks 's/SELINUX=enforcing/SELINUX=permissive/g' /etc/sysconfig/selinux
{% endhighlight %}

# Instalar packetes de kubernetes
{% highlight default %}
[root@localhost]#  yum install -y kubelet kubeadm kubectl
[root@localhost]#  systemctl enable kubelet
[root@localhost]#  systemctl start kubelet
{% endhighlight %}

# Instalar y configurar kubernetes con kubeadm
{% highlight default %}

[root@localhost]#  kubeadm init --apiserver-advertise-address=0.0.0.0 --pod-network-cidr=10.244.0.0/16

[root@localhost]#  kubectl --kubeconfig=/etc/kubernetes/admin.conf apply -f https://raw.githubusercontent.com/coreos/flannel/v0.9.1/Documentation/kube-flannel.yml

{% endhighlight %}

# Copiar kubeconfig para el usuario por default
{% highlight default %}
[root@localhost]# install -o 1000 -d /home/$(id -nu 1000)/.kube
[root@localhost]# install -o 1000 /etc/kubernetes/admin.conf /home/$(id -nu 1000)/.kube/config
{% endhighlight %}

Con estos pasos kubernetes estará finalmente instalado en una maquina virtual y listo para ser utilizado.