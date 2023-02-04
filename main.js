/* FINAL PROGRAMACIÓN 1.
ALUMNAS: Ana Laura Almirón y Brisa Marca*/

'use strict';

/*Catálogo de productos*/
let productos = [{
        id: 1,
        nombre: 'Mouse Logitech M90',
        descripcion: 'Sencillo de configurar y usar: La instalación es rápida y fácil, basta con conectar el cable a un puerto USB. Sin necesidad de instalar software. Como tiene cable, puedes conectarlo a un puerto USB y usarlo inmediatamente. Comodidad total, diseño para uso ambidiestro. Se sentirá cómodo, incluso tras períodos de uso prolongado. Seguimiento óptico de alta definición: disfrutará de un control preciso y uniforme del cursor, y de una selección de texto fácil, gracias al seguimiento óptico de alta definición de 1000dpi. El seguimiento óptico preciso nunca falla, ofrece un desplazamiento fluido, con o sin alfombrilla. Fabricado por Logitech: este mouse se ha creado con la calidad y el diseño que hemos aplicado a más de mil millones de ratones, más que ningún otro fabricante.',
        precio: 1000,
        categoría: 'Periféricos PC',
        imagen1: 'assets/imgs/mouse-logitech',
        imagen2: 'assets/imgs/mouse-logitech-2',
        imagen3: 'assets/imgs/mouse-logitech-3',
        imagen4: 'assets/imgs/mouse-logitech-4',
    },
    {
        id: 2,
        nombre: 'Mouse Optico Logitech M100',
        descripcion: 'Basta con lo básico: La instalación es rápida y fácil. Puede conectar el cable a un puerto USB y usarlo inmediatamente. Ya sea diestro o zurdo, se sentirá cómodo durante horas con este diseño de tamaño estándar para uso ambidiestro. El seguimiento óptico preciso nunca falla, ofrece un desplazamiento fluido, con o sin mousePad. Además, es sencillo de configurar y usar, la instalación es rápida y fácil: basta con conectar el cable a un puerto USB, sin necesidad de instalar software. Como tiene cable, puede conectarlo a un puerto USB y usarlo inmediatamente. Está diseñado para uso ambidiestro, comodidad para ambas manos. Se sentirá cómodo, incluso tras periodos de uso prolongado. Consta de un seguimiento óptico de alta definición: disfrutará de un control preciso y uniforme del cursor, y de una selección de texto fácil, gracias al seguimiento óptico de alta definición (1000 dpi).',
        precio: 4387,
        categoría: 'Periféricos PC',
        imagen1: 'assets/imgs/Logitech-M100',
        imagen2: 'assets/imgs/Logitech-M100-2',
        imagen3: 'assets/imgs/Logitech-M100-3',
        imagen4: 'assets/imgs/Logitech-M100-4',
    },
    {
        id: 3,
        nombre: 'Teclado PC Logitech K120',
        descripcion: 'Vuelve a disfrutar tecleando durante horas… Pasa largas horas delante de tu ordenador sin apenas darte cuenta con el nuevo teclado K120 de Logitech, un teclado USB, de diseño estándar y teclado numérico. Gracias a su teclado liso y delgado, con teclas planas y barra espaciadora curvada, escribirás cómodamente y sin hacer ruido durante horas y horas, ya que permite que las manos permanezcan en una posición descansada y natural mientras escribes. Cuenta con patas ajustables, si prefieres una posición más ergonómica solo tienes que extender sus patas ajustables y robustas, que inclinaran el teclado en 8º. Además, este teclado es resistente a salpicaduras, por si en algún momento se te derrama algún liquido sobre él, mientras que las teclas son también altamente resistentes al desgaste y permiten hasta 10 millones de pulsaciones.',
        precio: 4199,
        categoría: 'Periféricos PC',
        imagen1: 'assets/imgs/LogitechK120',
        imagen2: 'assets/imgs/LogitechK120-2',
        imagen3: 'assets/imgs/LogitechK120',
        imagen4: 'assets/imgs/LogitechK120-2',
    },
    {
        id: 4,
        nombre: 'Apple iPhone 12 Mini',
        descripcion: 'El iPhone 12 mini incluye grandes funcionalidades en un diseño compacto de 5.4 pulgadas. Tiene una espectacular pantalla Super Retina XDR. Un frente de Ceramic Shield, cuatro veces más resistente a las caídas. Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video HDR en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic. Además, es compatible con los nuevos accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida. Un verdadero gigante. Cuenta con una pantalla Super Retina XDR de 5.4 pulgadas de Ceramic Shield, más resistente que cualquier vidrio de smartphone; el Chip A14 Bionic, el más rápido en un smartphone; sistema avanzado de dos cámaras de 12 MP (ultra gran angular y gran angular), modo Noche, Deep Fusion, HDR Inteligente 3 y grabación de video 4K HDR en Dolby Vision.',
        precio: 291999,
        categoría: 'Celulares',
        imagen1: 'assets/imgs/iphone-12',
        imagen2: 'assets/imgs/iphone-12-2',
        imagen3: 'assets/imgs/iphone-12-3',
        imagen4: 'assets/imgs/iphone-12-4',
    },
    {
        id: 5,
        nombre: 'Apple iPhone 13',
        descripcion: 'Tu nuevo superpoder. Una pantalla superbrillante en un diseño resistente. Una nueva funcionalidad para grabar videos dignos de Hollywood de una forma superfácil. Un chip ultrarrápido. Y un gran salto en duración de batería que vas a notar todos los días. Una pantalla OLED más brillante que ahorra energía y se ve increíble incluso a pleno sol. Y un diseño duradero resistente al agua y al polvo.  El iPhone 13 cuenta con una pantalla OLED de 6.1 pulgadas sin marco con una resolución de 2532 x 1170 píxeles a 460 ppi que te permite visualizar tus contenidos de forma más nítida y clara. El diseño de aluminio con parte posterior de vidrio y frente de Ceramic Shield lo hace único y proporciona mayor grado de resistencia para evitar la rotura de la pantalla en caso de alguna caída. Con el chip A15 Bionic el equipo es mucho más rápido, entregando más rendimiento y mejor eficiencia en el consumo, haciendo que todo vaya más fluido sin consumir de más la batería.',
        precio: 470000,
        categoría: 'Celulares',
        imagen1: 'assets/imgs/iphone-13',
        imagen2: 'assets/imgs/iphone-13-2',
        imagen3: 'assets/imgs/iphone-13-3',
        imagen4: 'assets/imgs/iphone-13-4',
    },
    {
        id: 6,
        nombre: 'Samsung Galaxy A13',
        descripcion: 'El Samsung A13 es el celular ideal si estás buscando una buena resolución, una excelente cámara y, por supuesto, mucha memoria para una navegación más veloz. ¡Descubrí sus propiedades y funciones! Imágenes de calidad para disfrutar con amigos: disfrutá sacando increíbles fotografías con la cámara Quad del Samsung A13, con una resolución de 50 mpx y Flash LED, además de su zoom digital 10x. Definición Full HD+: el Galaxy A13 tiene una pantalla de 6,6 pulgadas y una definición FHD+, perfecta para descargar los juegos más divertidos y ver el mejor contenido por streaming y on demand. Aprovechá todo el espacio disponible para tus apps: Una de las características del Samsung A13 es su memoria interna de 128 GB, de las que quedan disponibles 105 GB para tu uso personal. También podés elegir la opción de 64 GB para aquellos que le dan menos uso.',
        precio: 72999,
        categoría: 'Celulares',
        imagen1: 'assets/imgs/samsungA13',
        imagen2: 'assets/imgs/samsungA13-2',
        imagen3: 'assets/imgs/samsungA13-3',
        imagen4: 'assets/imgs/samsungA13-4',
    },
    {
        id: 7,
        nombre: 'Notebook Dell Inspiron',
        descripcion: 'Creada para el presente, diseñada para el futuro. La notebook Dell Inspiron brinda a los usuarios sostenibilidad, rendimiento y comodidad. Construida con un diseño de bisagra de elevación y un panel táctil ampliado, disfrutará de una posición de escritura más natural y cómoda. Esta notebook cuenta con una Procesador AMD Ryzen 5 3450U Quad-Core, memoria RAM de 8 GB DDR4 y memoria de almacenamiento SSD M.2 NVMe de 256 GB. Con una pantalla LED de 15.6" con resolución HD (1366 x 768p) y gráficos AMD Radeon para imágenes nítidas y claras. Manténgase en contacto con compañeros de trabajo o clientes usando la cámara web, los parlantes y el micrófono integrado. Disponible con Windows 11 Home o Windows 11 Pro: obtenga la mejor combinación de características de Windows que ya conoce y las nuevas mejoras que le encantarán.',
        precio: 227039,
        categoría: 'Notebooks',
        imagen1: 'assets/imgs/dell-inspiron',
        imagen2: 'assets/imgs/dell-inspiron-2',
        imagen3: 'assets/imgs/dell-inspiron-3',
        imagen4: 'assets/imgs/dell-inspiron-4',
    },
    {
        id: 8,
        nombre: 'Notebook Gamer Lenovo Legion',
        descripcion: 'La destreza que muestras, los enemigos que superas, los compañeros de equipo a los que inspiras, las cosas asombrosas que haces posible cuando juegas conducen directamente a las cosas increíbles que haces en la vida. Lenovo Legion lo celebra y sirve de conducto épico para unir ambos mundos: el inconteniblemente elegante y el indomablemente salvaje. Con núcleos verdaderamente revolucionarios en rendimiento y eficiencia, los procesadores Intel Core de 12va generación son ideales para streaming, edición, juegos y grabaciones. Un máximo nivel de potencia cuando más lo necesitas. Disfruta de un máximo nivel de rendimiento con lo último en GPU para laptops NVIDIA GeForce RTX 30 Series, especialmente pensadas para gamers y creadores con un nivel de potencia gráfica incomparable. La GPU incorpora un diseño delgado y liviano para gráficos sumamente realistas, con trazado de rayos, funciones y características de avanzada, y la potencia de IA.',
        precio: 419999,
        categoría: 'Notebooks',
        imagen1: 'assets/imgs/lenovo-legion',
        imagen2: 'assets/imgs/lenovo-legion-2',
        imagen3: 'assets/imgs/lenovo-legion-3',
        imagen4: 'assets/imgs/lenovo-legion-4',
    },
    {
        id: 9,
        nombre: 'Notebook Gamer Dell G15',
        descripcion: 'El diseño térmico inspirado en Alienware ofrece una refrigeración óptima gracias a dos entradas de aire, palas de ventilador ultrafinas, conductos de cobre y cuatro rejillas de ventilación situadas estratégicamente. Por tanto, tu sistema se mantendrá frío en el fragor de la acción. Además, con procesadores hasta Intel i5 de 12 núcleos o i7 de 14 núcleos de 12.ª generación, así como perfiles de rendimiento optimizado, puedes disfrutar de una potencia y una coherencia de alto nivel durante cualquier experiencia de juego. Imágenes de gran nitidez: Sumérgete por completo en todas las experiencias gracias al renderizado fluido, que ofrecen las tarjetas gráficas independientes hasta NVIDIA GeForce RTX 3060, y los colores intensos del panel de visualización Full HD de hasta 165 Hz con 300 nits u, opcionalmente, la pantalla QHD a 240 Hz con 3 lados finos del marco.',
        precio: 339999,
        categoría: 'Notebooks',
        imagen1: 'assets/imgs/dell-g15',
        imagen2: 'assets/imgs/dell-g15-2',
        imagen3: 'assets/imgs/dell-g15-3',
        imagen4: 'assets/imgs/dell-g15-4',
    },

]



let contenedorProductos = document.getElementById('products');
console.log(contenedorProductos);

const cargarProductos = function () {

}