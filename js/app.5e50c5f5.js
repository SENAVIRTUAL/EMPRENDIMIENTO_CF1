(function(e){function a(a){for(var i,r,s=a[0],l=a[1],c=a[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(a);while(m.length)m.shift()();return t.push.apply(t,c||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],i=!0,r=1;r<o.length;r++){var l=o[r];0!==n[l]&&(i=!1)}i&&(t.splice(a--,1),e=s(s.s=o[0]))}return e}var i={},n={app:0},t=[];function r(e){return s.p+"js/"+({actividad:"actividad",intro:"intro",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"14bf75ed",intro:"177ed85e",sintesis:"8ff43f9d",tema1:"ad3e47ba",tema2:"b3e32de0",tema3:"db2ac576"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o=n[e];if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(a,i){o=n[e]=[a,i]}));a.push(o[2]=i);var t,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(e);var c=new Error;t=function(a){l.onerror=l.onload=null,clearTimeout(u);var o=n[e];if(0!==o){if(o){var i=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+t+")",c.name="ChunkLoadError",c.type=i,c.request=t,o[1](c)}n[e]=void 0}};var u=setTimeout((function(){t({type:"timeout",target:l})}),12e4);l.onerror=l.onload=t,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(o,i,function(a){return e[a]}.bind(null,i));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var d=c;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},t=[],r={name:"App"},s=r,l=o("2877"),c=Object(l["a"])(s,n,t,!1,null,null,null),u=c.exports,d=o("2f62"),m=o("8c4f"),f=(o("d3b7"),o("3ca3"),o("ddb0"),[{path:"/",name:"inicio"},{path:"/glosario",name:"glosario"},{path:"/complementario",name:"complementario"},{path:"/referencias",name:"referencias"},{path:"/creditos",name:"creditos"},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/sintesis",name:"sintesis",component:function(){return o.e("sintesis").then(o.bind(null,"15a3"))}}]),p=o("1588"),h=o.n(p),b=(o("5350"),o("a3a0"),{global:{componenteFormativo:"Componente Formativo con un nombre extremadamente largo y extenso",descripcionCurso:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.",imagenBannerPrincipal:o("ae0a"),fondoBannerPrincipal:o("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Componentes",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Encabezados",hash:"encabezados"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Párrafos",hash:"parrafos"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Botones",hash:"botones"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Listas",hash:"listas"},{icono:"far fa-file-alt",numero:"1.5",titulo:"Tablas",hash:"tablas"},{icono:"far fa-file-alt",numero:"1.6",titulo:"Imagen",hash:"imagen"},{icono:"far fa-file-alt",numero:"1.7",titulo:"Imagen Infográfica",hash:"imagen_infografica"},{icono:"far fa-file-alt",numero:"1.8",titulo:"Video",hash:"video"},{icono:"far fa-file-alt",numero:"1.9",titulo:"Bloques de texto destacado",hash:"texto_destacado"},{icono:"far fa-file-alt",numero:"1.10",titulo:"Sliders",hash:"sliders"},{icono:"far fa-file-alt",numero:"1.11",titulo:"Acordiones",hash:"acordiones"},{icono:"far fa-file-alt",numero:"1.12",titulo:"Pestañas o Tabs",hash:"tabs"},{icono:"far fa-file-alt",numero:"1.13",titulo:"Líneas de tiempo",hash:"lineas_tiempo"},{icono:"far fa-file-alt",numero:"1.14",titulo:"Pasos",hash:"pasos"},{icono:"far fa-file-alt",numero:"1.15",titulo:"Llamados a la acción",hash:"llamados_accion"},{icono:"far fa-file-alt",numero:"1.16",titulo:"Tarjetas",hash:"tarjetas"},{icono:"far fa-file-alt",numero:"1.17",titulo:"Tarjetas con número",hash:"tarjeta_numero"},{icono:"far fa-file-alt",numero:"1.18",titulo:"Modal",hash:"modal"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Producción Audiovisual",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Infografía Animada",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Video Motion",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Motion + Presentador",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Animación 2D",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Video interactivo",hash:"t_2_5"},{icono:"far fa-file-alt",numero:"2.6",titulo:"Infografías",hash:"t_2_6"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Fundamentación Textil",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Clasificación y conceptualización de las fibras naturales, químicas (artificiales y sintéticas).",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Identificación fibras por combustión",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Clasificación de los hilos",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Clasificación de tejidos",hash:"t_3_4"},{icono:"far fa-file-alt",numero:"3.5",titulo:"Caracterización de los tejidos",hash:"t_3_5"},{icono:"far fa-file-alt",numero:"3.6",titulo:"Procesos textiles",hash:"t_3_6"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Sintesis",nombreRuta:"sintesis"},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Zlackman, C. (2012). 100 años de moda. Sistema de Bibliotecas SENA:",link:"https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000060086&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L"},{referencia:"Castellanos, O., Fumeque A., y Ramirez D. (2011). Análisis de tendencias: de la información hacia la innovación. Universidad Nacional de Colombia. Sistema de Bibliotecas SENA:",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000007947"},{referencia:"<em>Harpersbazaar</em>. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx."},{referencia:"Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549"},{referencia:"Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA."},{referencia:"Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA:",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000023241"},{referencia:"Áciedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000051551"},{referencia:"Szkutnicka, B., Cuenca, C., Koyama, A. (2010). El dibujo técnico de moda paso a paso. Sistema de Bibliotecas SENA.",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000057728"}],glosario:[{termino:"MoodBoard",significado:"su traducción literal es mapa de inspiración y aunque su uso está muy asociado al ámbito de la decoración de interiores o la moda, <br/>realmente se utiliza en entornos creativos muy diversos, desde el diseño de productos o servicios al audiovisual o el diseño gráfico."},{termino:"<em>Suftware</em>",significado:"término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático."},{termino:"Pirognóstico",significado:"ensayo sin componentes reactivos, quiere decir, reconocimiento de los componentes, mediante la aplicación adecuada del fuego."},{termino:"<em>Áectores</em>",significado:"en software de diseño, son líneas que se crean y permiten, expandir, modificar, al tamaño que sea sin pixelarse porque se unen por coordenadas matemáticas del programa y no se generan por números fijos."},{termino:"Moda",significado:"hábito repetitivo que identifica a una persona, una especie de presión social, que debe consumir, utilizar o hacer."},{termino:"Diseña",significado:"actividad creativa orientada a soluciones idóneas a ciertas problemáticas."},{termino:"DIseño",significado:"actividad creativa orientada a soluciones idóneas a ciertas problemáticas."},{termino:"Tipología",significado:"estudio de los tipos o modelos que se usan para clasificar en diversas ciencias o disciplinas."},{termino:"Bidimensional",significado:"que se representa según su altura y su anchura y no su profundidad."},{termino:"Interés Inferior del menor",significado:"término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático."},{termino:"Interseccionalidad",significado:"término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático."},{termino:"Interés superior del menor",significado:"término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático."}],complementario:[{texto:"BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”",tipo:"Video",link:"https://www.google.com/"},{texto:"Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49",tipo:"Página web",descarga:"/downloads/prueba.pdf"},{texto:"Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.",tipo:"Artículo científico",link:"https://www.google.com/"},{texto:"Economía de Rosquilla. (s.f.).",tipo:"Página web",descarga:["/downloads/prueba.pdf","/downloads/prueba.pdf"]},{texto:"2 minutos para entender el desarrollo sostenible – Spanish",tipo:"Video",link:["https://www.google.com/","https://www.google.com/"]}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:["Nombre 1","Nombre 2"],cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nombre",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nombre",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nombre",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});i["a"].use(d["a"]);var g=new d["a"].Store;i["a"].use(m["a"]);var v=new m["a"];i["a"].use(h.a,v,f,g),i["a"].prototype.$config=b;var y=o("9224");i["a"].prototype.$package=y,i["a"].config.productionTip=!1,new i["a"]({router:v,store:g,render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"senavirtual-boilerplate","version":"1.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"sena-cf-plugin":"^0.1.12","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a3a0:function(e,a,o){},ae0a:function(e,a,o){e.exports=o.p+"img/banner-princiapal.eb54df05.svg"},e6b0:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.2beabdce.png"}});
//# sourceMappingURL=app.5e50c5f5.js.map