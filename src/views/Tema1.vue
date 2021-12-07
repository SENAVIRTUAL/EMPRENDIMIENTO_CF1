<template lang="pug">
.curso-main-container.pb-3
  BannerInterno 
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Metadatos
    .row.mt-5
      .col-4.d-none.d-lg-block
        figure
          img(src='@/assets/template/tema-1-1.png', alt='Texto que describa la imagen').floating
      .col-12.col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p Hoy por hoy,  se evidencia la existencia del big data, de cloud computing, de networking y otros términos que hacen parte del manejo automatizado de la información, es así, que el término “metadatos”, se vuelve imprescindible en la actualidad. Puede tener varias definiciones, pero en concreto se relaciona con el manejo de grandes cantidades de información que crecen de manera exponencial, caracterizándose por describir la estructura, clasificación, parámetros, condiciones, etc. de los datos o recursos para facilitar su identificación, preservación y/o interoperabilidad.
    .row.mt-4
      .col-12.col-lg-10.col-xl-11
        p A los documentos físicos o electrónicos se le establecen metadatos mínimos obligatorios para la preservación de su vida útil, permitiendo reconocer las actividades y procesos realizados utilizando diferentes mecanismos.
        p.mt-3 En la gestión de documentos se debe hacer una adecuada aplicación de los metadatos, el cual se realiza de la siguiente forma:
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-1-2.svg', alt='Texto que describa la imagen').floating.px-3.px-xl-0
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2.position-relative.border-gris-4.rounded-15
        .row
          .col-3.col-xl-2
            figure.mt-5.mt-md-4.px-lg-2(style='margin-left:-56%;')
              img(src='@/assets/template/tema-1-3.svg', alt='Texto que describa la imagen')
          .col-9.col-xl-10.py-5
            p Garantizar el entendimiento de la estructura tecnológica con sus agentes y procesos que intervienen.
    .row.mt-2
      .col-10.col-lg-8.offset-1.offset-lg-2.position-relative.border-gris-4.rounded-15
        .row
          .col-3.col-xl-2
            figure.mt-5.mt-md-4.px-lg-2(style='margin-left:-56%;')
              img(src='@/assets/template/tema-1-3.svg', alt='Texto que describa la imagen')
          .col-9.col-xl-10.py-5
            p Velar para que características como autenticidad, fiabilidad e integridad de los documentos se mantenga preservada.
    .row.mt-2
      .col-10.col-lg-8.offset-1.offset-lg-2.position-relative.border-gris-4.rounded-15
        .row
          .col-3.col-xl-2
            figure.mt-5.mt-md-4.px-lg-2(style='margin-left:-56%;')
              img(src='@/assets/template/tema-1-3.svg', alt='Texto que describa la imagen')
          .col-9.col-xl-10.py-5
            p Generar procesos de importación con la información exacta de los documentos para garantizar interoperabilidad.
    .row.mt-2
      .col-10.col-lg-8.offset-1.offset-lg-2.position-relative.border-gris-4.rounded-15
        .row
          .col-3.col-xl-2
            figure.mt-5.mt-md-4.px-lg-2(style='margin-left:-56%;')
              img(src='@/assets/template/tema-1-3.svg', alt='Texto que describa la imagen')
          .col-9.col-xl-10.py-5
            p Permitir la trazabilidad o referencia entre los documentos físicos y los nuevos documentos electrónicos en el sistemas de gestión de documentos.
    .row.mt-2
      .col-10.col-lg-8.offset-1.offset-lg-2.position-relative.border-gris-4.rounded-15
        .row
          .col-3.col-xl-2
            figure.mt-5.mt-md-4.px-lg-2(style='margin-left:-56%;')
              img(src='@/assets/template/tema-1-3.svg', alt='Texto que describa la imagen')
          .col-9.col-xl-10.py-5
            p Asegurar condiciones para que la migración de información sea permitida sin importar que los sistemas sean diferentes.
    .row.mt-4
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-1-4.svg', alt='Texto que describa la imagen').floating.px-3.px-xl-0
      .col-12.col-lg-10.col-xl-11
        p Los metadatos deben estar sumergidos tanto en el documento como en los sistemas de información que gestionan los documentos electrónicos, ya que esta información garantiza la autenticidad, fiabilidad, integridad, y disponibilidad del documento (Archivo General de la Nación de Colombia, 2021).
        p.mt-3 Cada entidad debe realizar e implementar un modelo de metadatos encargado por un equipo multidisciplinario el cual está conformado por diferentes profesionales.
    .row.mt-5
      .col-12.col-lg-8
        p Existen varias iniciativas para crear e implementar esquemas de metadatos para la gestión de documentos, entre las cuales las más importantes son (Archivo General de la Nación de Colombia, 2012):
        ul.lista-ul.mt-3
          li 
            i.fas.fa-angle-right
            | Familia de normas ISO 23081. Information and documentation. Records management processes. Metadata for records.
          li 
            i.fas.fa-angle-right
            | Australian Recordkeeping Metadata Schema (RKMS). 
          li 
            i.fas.fa-angle-right
            | Australian Government Recordkeeping Metadata Standard (AGRkMS).
          li 
            i.fas.fa-angle-right
            | Esquema de metadatos para la gestión del documento electrónico (e- EMGDE) desarrollado por la Dirección General de Modernización Administrativa del Ministerio de Hacienda y Administraciones Públicas de España.
        p.mt-4 Según la norma del estándar Dublin Core y METS, estos serían los metadatos mínimos obligatorios siguiendo la estructura que deben contener los expedientes que los conforman para su identificación, autenticación y contextualización, ver tabla 1:
      .col-4.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-1-5.svg', alt='Texto que describa la imagen').floating
    .row.mt-5
      .col-10.offset-1  
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          p.text-small Metadatos mínimos
        .tabla-a.color-acento-botones.mb-5 
          table
            caption.mt-3 Referencia Nota. ICFES (2018).
            thead
              tr
                th(style="width:10%;") No.
                th Nombre
                th Estructura XML / Etiqueta
                th(colspan="2") Obligatoriedad
                th(style="width:30%;") Descripción
            tbody.text-center
              tr
                td 1
                td Título
                td &#60;Title&#62;
                td 0
                td Elemento obligatorio
                td Normalmente el título es el nombre por el que se conoce formalmente el recurso (expediente).
              tr
                td 2
                td Autor
                td &#60;Creator&#62;
                td 0
                td Elemento obligatorio
                td Autor personal o entidad responsable del contenido del recurso (expediente).
              tr
                td 3
                td Fecha
                td &#60;Date&#62;
                td 0
                td Elemento obligatorio
                td Fecha clave del recurso (creación de expediente).
              tr
                td 4
                td Materia
                td &#60;Subject&#62;
                td Opt
                td Elemento optativo
                td Descriptores o palabras claves que definen el tema del que trata el recurso (expediente).
              tr
                td 5
                td Editor
                td &#60;Publisher&#62;
                td Opt
                td Elemento obligatorio
                td Editor del recurso.
              tr
                td 6
                td Tipo de recurso
                td &#60;Type&#62;
                td Opt
                td Elemento optativo
                td Naturaleza del contenido (artículo, tesis, ponencia, etc.).
              tr
                td 7
                td Descripción
                td &#60;Description&#62;
                td Opt
                td Elemento optativo
                td Resumen del curso
              tr
                td 8
                td Colaborador
                td &#60;Contributor&#62;
                td Opt
                td Elemento optativo
                td Personas o entidades colaboradoras en el contenido del recurso.
              tr
                td 9
                td Formato
                td &#60;Format&#62;
                td 0
                td Elemento obligatorio
                td Formato del recurso (tamaño, duración, software, hardware necesario para su reproducción, etc.).
              tr
                td 10
                td Fuente
                td &#60;Source&#62;
                td Opt
                td Elemento optativo
                td Recurso relacionado del cual se deriva el recurso que se describe.
              tr
                td 11
                td Derechos
                td &#60;Rights&#62;
                td Opt
                td Elemento optativo
                td Derechos de autor que afectan al recurso (copyright, IPR, etc.).
              tr
                td 12
                td Identificador
                td &#60;Identifier&#62;
                td Opt
                td Elemento optativo
                td Referencia unívoca de identificador del recurso (ISBN, URL, DOI, etc.).
              tr
                td 13
                td Idioma
                td &#60;Language&#62;
                td Opt
                td Elemento optativo
                td Idioma en el que está expresado el recurso.
              tr
                td 14
                td Relación
                td &#60;Relation&#62;
                td 0
                td Elemento obligatorio
                td Otro recurso relacionado con el que se describe (referencia cruzada).
              tr
                td 15
                td Cobertura
                td &#60;Coverage&#62;
                td Opt
                td Elemento optativo
                td Periodo de tiempo o lugar geográfico sobre los que trata el recurso.
    .h4.mt-5 Tipología de los metadatos 
    p.mt-5 Existen diferentes tipos de metadatos y cada uno tiene su diferente formato y formas de describirlos. Según la información que proporcionen se pueden clasificar en (Ecured, 2021): 
    .row.justify-content-center(data-aos="fade-down").mt-5.text-white
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-1-6.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h4.small-text.mt-sm-3.mt-md-0 DESCRIPTIVOS
                p.mt-3.small-text Describen e identifican recursos de información permitiendo a los usuarios la búsqueda y recuperación de información.

      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-1-7.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 ESTRUCTURALES 
                p.mt-3.small-text Facilitan la navegación y presentación de los recursos proporcionando información sobre la estructura interna de los documentos.
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-1-8.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 ADMINISTRATIVOS 
                p.mt-3.small-text Facilitan la gestión de conjunto de recursos incluyendo la gestión de derechos y control de acceso y uso.
    .row.mt-5
      .col-12.col-lg-8
        .h4 Autenticidad de los metadatos
        p.mt-4 El fin de acreditar la autenticidad de un documento sin perder su esencia, sin alteraciones o corrupciones con el paso del tiempo, es hablar de autenticidad documental. Es por ello, que este es uno de los componentes que conforman la confianza del documento respecto al (MINTIC, 2021):
        LineaTiempoD.color-secundario.mt-5
          p.text-small(numero="1" titulo="CONTEXTO") Tiene que ver con la actividad y con la entidad, por cuanto la actividad “per-se” sin un contexto administrativo identificable quedaría incompleta. 
          
          p.text-small(numero="2" titulo="ESTRUCTURA") Tiene que ver con la forma documental fija o la presentación del contenido, que en gran medida está dada por el software y hardware.

          p.text-small(numero="3" titulo="CONTENIDO") Es la materia del documento. Tiene que ver con el entorno en el cual ha sido creado el documento de acuerdo con el marco jurídico, administrativo, procedimental y documental de la entidad, para lo cual se tendrán en cuenta los metadatos que permitan demostrar su procedencia
          
      .col-4.d-none.d-lg-flex.align-self-center
        figure
          img(src="@/assets/template/tema-1-9.png", alt="Texto que describa la imagen").floating
    p.mt-5 A continuación, se mencionan 5 pasos, que permitirán conocer la manera de identificar un documento electrónico:
    .row.mt-5
      .col-sm-6.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-1-10.svg')})`}")
            .tarjeta-flip__contenido.p-4
              p.py-4 El Sistema de información y hardware necesario para su representación.
      .col-sm-6.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-1-11.svg')})`}")
            .tarjeta-flip__contenido.p-4
              p.py-4 El Sistema de información y hardware necesario para su representación.
      .col-sm-6.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-1-12.svg')})`}")
            .tarjeta-flip__contenido.p-4
              p  El conocimiento de la persona que lo ha hecho, enviado, verificado y firmado, al igual, exista evidencia de la persona a quien se le distribuya el documento.
      .col-sm-6.mb-4.offset-lg-2.offset-xl-0
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-1-13.svg')})`}")
            .tarjeta-flip__contenido.p-4
              p El documento debe haber sido creado o enviado en el mismo momento en que se afirma.
      .col-sm-6.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-1-14.svg')})`}")
            .tarjeta-flip__contenido.p-4
              p.py-4 El documento debe haber sido creado o enviado en el mismo momento en que se afirma.
    .h4.mt-5 Diseño de un esquema de metadatos
    .row.mt-5
      .col-5.d-none.d-lg-flex
        figure
          img(src="@/assets/template/tema-1-19.svg", alt="Texto que describa la imagen").floating
      .col-12.col-lg-7.align-self-center
        .cajon.color-acento-contenido.p-4.mb-4
          p Un esquema de metadatos tiene como objetivo mostrar de forma clara las relaciones entre los componentes del conjunto de metadatos teniendo en cuenta las reglas para el uso y gestión especialmente que tengan relación con la semántica, la sintaxis y la obligación de los valores; estos esquemas facilitan la interoperabilidad asegurando el mantenimiento y buen manejo de los documentos a largo plazo.
          p.mt-3 Según la guía de metadatos (Archivo general de la nación, 2021), para iniciar con este diseño se debe tener en cuenta lo siguiente:
    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Actividad 1" :icono="require('@/assets/template/tema-1-20.svg')")
        .row
          .col-12.col-lg-7
            .h3 Definición del alcance del esquema de metadatos
            .h4.mt-3 Se debe definir el alcance que esto tendría dentro de la institución de la siguiente manera:
            ul.lista-ul.mt-3 
              li 
                i.fas.fa-angle-right
                | Determinar los tipos de información a los cuales se va a incorporar los metadatos
              li 
                i.fas.fa-angle-right
                | Establecer los sistemas de gestión y las aplicaciones específicas de la gestión de documentos.
              li 
                i.fas.fa-angle-right
                | Agregar al esquema de metadatos iniciativas de interoperabilidad e integración que se esté realizando en la entidad.
              li 
                i.fas.fa-angle-right
                | Establecer los riesgos que se mitigarán con la implementación del esquema de metadatos en la gestión de documentos.
          .col-5.d-none.d-lg-flex.align-self-center
            figure
              img(src="@/assets/template/tema-1-27.png", alt="Texto que describa la imagen").floating
      .py-4.py-md-5(titulo="Actividad 2" :icono="require('@/assets/template/tema-1-21.svg')")
        .row
          .col-12.col-lg-7
            .h3 Definir la metodología a seguir
            .h4.mt-3 Hay varias iniciativas para crear e implementar  en la gestión de documentos respecto al esquema de metadatos las cuales serían las siguientes: 
            ul.lista-ul.mt-3 
              li 
                i.fas.fa-angle-right
                | Familia de normas ISO 23081.
              li 
                i.fas.fa-angle-right
                | Australian Recordkeeping Metadata Schema (RKMS).
              li 
                i.fas.fa-angle-right
                | Australian Government Recordkeeping Metadata Standard (AGRkMS).
              li 
                i.fas.fa-angle-right
                | Esquema de metadatos para la gestión del documento electrónico (e- EMGDE).
              li 
                i.fas.fa-angle-right
                | Desarrollado por la Dirección General de Modernización Administrativa del Ministerio de Hacienda y Administraciones Públicas de España.

          .col-5.d-none.d-lg-flex.align-self-center
            figure
              img(src="@/assets/template/tema-1-35.png", alt="Texto que describa la imagen").floating
      .py-4.py-md-5(titulo="Actividad 3" :icono="require('@/assets/template/tema-1-22.svg')")
        .row
          .col-12.col-lg-7
            .h3 Determinar los elementos del esquema de metadatos
            .h4.mt-3 Cada institución debe determinar los elementos mínimos que deben usarse para poder dar solución a sus propias necesidades encontrando los siguiente:
            ul.lista-ul.mt-3 
              li 
                i.fas.fa-angle-right
                | Definir las entidades que se van a implementar, es decir el modelo que se diseñe debe ser acorde a lo que la institución requiere.
              li 
                i.fas.fa-angle-right
                | Determinar los niveles de agrupación que conforman las entidades.
              li 
                i.fas.fa-angle-right
                | Esclarecer cada una de las entidades y agrupaciones que brinde el contexto de los documentos.
              li 
                i.fas.fa-angle-right
                | Determinar los vínculos entre entidades y agrupaciones.
              li 
                i.fas.fa-angle-right
                | Definir qué acciones deben realizarse sobre los documentos y elementos de las actividades.
          .col-5.d-none.d-lg-flex.align-self-center
            figure
              img(src="@/assets/template/tema-1-36.png", alt="Texto que describa la imagen").floating
      .py-4.py-md-5(titulo="Actividad 4" :icono="require('@/assets/template/tema-1-23.svg')")
        .row
          .col-12.col-lg-7
            .h3 Establecer las relaciones entre los metadatos
            p Se debe establecer una estructura lógica que se construya conociendo el valor semántico de cada elemento. Identificando los grupos que forman una secuencia lógica asegurando el significado de dichos elementos.
          .col-5.d-none.d-lg-flex.align-self-center
            figure
              img(src="@/assets/template/tema-1-37.png", alt="Texto que describa la imagen").floating
      .py-4.py-md-5(titulo="Actividad 5" :icono="require('@/assets/template/tema-1-24.svg')")
        .row
          .col-12.col-lg-7
            .h3 Definir la codificación del esquema de metadatos 
            .h4.mt-3 La codificación se debe establecer de la siguiente manera: 
            ul.lista-ul.mt-3 
              li 
                i.fas.fa-angle-right
                | Determinar las listas predefinidas, clasificaciones y demás esquemas que tenga la institución.
              li 
                i.fas.fa-angle-right
                | Identificar los vocabularios controlados que se integren en el esquema de metadatos.
              li 
                i.fas.fa-angle-right
                | Establecer los elementos de metadatos que requieren esquemas de codificación.
              li 
                i.fas.fa-angle-right
                | Establecer los protocolos y reglas sintácticas de codificación.
          .col-5.d-none.d-lg-flex.align-self-center
            figure
              img(src="@/assets/template/tema-1-38.png", alt="Texto que describa la imagen").floating
      .py-4.py-md-5(titulo="Actividad 6" :icono="require('@/assets/template/tema-1-25.svg')")
        .row
          .col-12.col-lg-7
            .h3 Definición de reglas
            .h4.mt-3 Se deben definir las reglas para la conformación del esquema de metadatos, se deben documentar de forma exhaustiva:
            ul.lista-ul.mt-3 
              li 
                i.fas.fa-angle-right
                | Sintaxis: la agrupación Individuo deberá tener una sintaxis definida, por ejemplo, Apellidos/Nombres.
              li 
                i.fas.fa-angle-right
                | Elementos automáticos: la fecha de producción de un documento, deberá ser proporcionada automáticamente por el sistema.
              li 
                i.fas.fa-angle-right
                | Elementos obligatorios: un elemento como autor deberá ser obligatorio, mientras que un elemento como fecha de migración podría ser opcional.
              li 
                i.fas.fa-angle-right
                | Incidencia: un elemento que puede ser reincidente es la fecha.
              li 
                i.fas.fa-angle-right
                | Herencia: el elemento tiempo de retención de una agrupación Documento Simple, lo hereda de una agrupación Serie.
              li 
                i.fas.fa-angle-right
                | Interdependencia: debe documentar en qué casos, elementos dependen de otros, a su vez indicar que valor deben contener para que el elemento dependiente se pueda usar.
          .col-5.d-none.d-lg-flex.align-self-center
            figure
              img(src="@/assets/template/tema-1-39.png", alt="Texto que describa la imagen").floating
      .py-4.py-md-5(titulo="Actividad 7" :icono="require('@/assets/template/tema-1-26.svg')")
        .row
          .col-12.col-lg-7
            .h3 Esquema legible por máquina
            p El esquema de metadatos debe ser legible por máquinas para favorecer la interoperabilidad y la usabilidad de los documentos, a través de estas máquinas se puede automatizar la extracción y el intercambio de documentos en diversos sistemas de información.
          .col-5.d-none.d-lg-flex.align-self-center
            figure
              img(src="@/assets/template/tema-1-40.png", alt="Texto que describa la imagen").floating
    .h4.mt-5 Utilización de los metadatos
    .row.mt-5
      .col-4.d-none.d-lg-block
        figure
          img(src='@/assets/template/tema-1-28.png', alt='Texto que describa la imagen').floating
      .col-12.col-lg-8
        p Los metadatos permiten a una persona localizar y comprender los datos, incluida la información necesaria para determinar qué conjuntos de datos existen en una ubicación geográfica específica, la información necesaria para determinar si un conjunto de datos es adecuado para un propósito específico y la información necesaria para recuperar y obtener un conjunto identificado de datos y la información necesaria para procesarlos y utilizarlos. (Gob.pe)
        p.mt-3 Las razones para la implementación de metadatos o la utilidad de estos, responden a los siguientes aspectos (UNE-ISO 23081-1):
    .row.mt-5
      .col-12.col-md-8.offset-md-2
        LineaTiempoC.color-acento-contenido(text-small).text-center.bg-gris-claro.p-4.rounded-15
          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-1-29.svg', alt='Texto que describa la imagen')
              p.mt-3 Proteger los documentos, asegurar su accesibilidad y disponibilidad a lo largo del tiempo.

          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-1-30.svg', alt='Texto que describa la imagen')
              p.mt-3 Facilitar la migración eficiente y exitosa de documentos electrónicos de un entorno o plataforma informáticos a otro, o cualquier otra posible estrategia de conservación.

          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-1-31.svg', alt='Texto que describa la imagen')
              p.mt-3 Facilitar la identificación del entorno tecnológico en que los documentos digitales fueron creados o se incorporaron al sistema y la gestión del entorno tecnológico en el que se han mantenido, de modo que puedan ser reproducidos como documentos auténticos cuando se necesiten.
          
          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-1-32.svg', alt='Texto que describa la imagen')
              p.mt-3 Proporcionar vínculos lógicos entre los documentos y su contexto de creación, manteniéndolos de forma estructurada, fiable e inteligible.

          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-1-33.svg', alt='Texto que describa la imagen')
              p.mt-3 Servir de base para una recuperación eficiente.
          
          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-1-34.svg', alt='Texto que describa la imagen')
              p.mt-3 Respaldar también las estrategias de interoperabilidad, permitiendo que se incorporen oficialmente al sistema documentos creados en diversos entornos administrativos y técnicos y que se mantengan durante tanto tiempo como sea necesario.
          
          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-1-35.svg', alt='Texto que describa la imagen')
              p.mt-3 Respaldar la gestión del acceso, privacidad y derechos de propiedad intelectual de cada documento.

          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-1-36.svg', alt='Texto que describa la imagen')
              p.mt-3 Contribuir a garantizar la autenticidad, fiabilidad e integridad de los documentos.

          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-1-37.svg', alt='Texto que describa la imagen')
              p.mt-3 Facilitar la comprensión de los documentos.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
@media (min-width: 992px)
  .col-sm-6.mb-4
    width: 33% !important
@media (min-width: 1200px)
  .col-sm-6.mb-4
    width: 19.667% !important
</style>
