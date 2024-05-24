let libros = JSON.parse(localStorage.getItem('libros')) || [
    { isbn: 1, titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', ejemplares: 1, genero: 'Fantasía', precio: 19.99, foto: 'imagenes/harry.jpg' },
    { isbn: 2, titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', ejemplares: 1, genero: 'Ficción', precio: 12.99, foto: 'imagenes/gatsby.jpeg' },
    { isbn: 3, titulo: '1984', autor: 'George Orwell', ejemplares: 1, genero: 'Ciencia Ficción', precio: 15.99, foto: 'imagenes/1984.webp' },
    { isbn: 4, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', ejemplares: 1, genero: 'Clásico', precio: 11.99, foto: 'https://www.planetadelibros.com/usuaris/libros/fotos/381/original/portada_orgullo-y-prejuicio_jane-austen_202307201110.jpg' },
    { isbn: 5, titulo: 'Matar a un ruiseñor', autor: 'Harper Lee', ejemplares: 1, genero: 'Ficción', precio: 14.99, foto: 'imagenes/ruiseñor.jpg' },
    { isbn: 6, titulo: 'El señor de los anillos: La comunidad del anillo', autor: 'J.R.R. Tolkien', ejemplares: 1, genero: 'Fantasía', precio: 18.99, foto: 'imagenes/anillos.webp' },
    { isbn: 7, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes Saavedra', ejemplares: 1, genero: 'Clásico', precio: 13.99, foto: 'imagenes/quijote.png' },
    { isbn: 8, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', ejemplares: 1, genero: 'Realismo Mágico', precio: 17.99, foto: 'imagenes/100anios.jpg' },
    { isbn: 9, titulo: 'Crónica de una muerte anunciada', autor: 'Gabriel García Márquez', ejemplares: 1, genero: 'Ficción', precio: 11.99, foto: 'https://ih1.redbubble.net/image.3234795175.3829/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg' },
    { isbn: 10, titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', ejemplares: 1, genero: 'Ciencia Ficción', precio: 14.99, foto: 'https://images-eu.ssl-images-amazon.com/images/I/71e4kjCsuAL._AC_UL600_SR600,600_.jpg' },
    { isbn: 11, titulo: 'El código Da Vinci', autor: 'Dan Brown', ejemplares: 1, genero: 'Suspense', precio: 12.99, foto: 'https://m.media-amazon.com/images/I/71PR0C4XNjL._AC_UF894,1000_QL80_.jpg' },
    { isbn: 12, titulo: 'El alquimista', autor: 'Paulo Coelho', ejemplares: 1, genero: 'Autoayuda', precio: 9.99, foto: 'https://m.media-amazon.com/images/I/81MOnJT4YiL._AC_UF894,1000_QL80_.jpg' },
    { isbn: 13, titulo: 'El nombre del viento', autor: 'Patrick Rothfuss', ejemplares: 1, genero: 'Fantasía', precio: 16.99, foto: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202402/02/00106520549764____57__640x640.jpg' },
    { isbn: 14, titulo: 'El retrato de Dorian Gray', autor: 'Oscar Wilde', ejemplares: 1, genero: 'Clásico', precio: 10.99, foto: 'https://m.media-amazon.com/images/I/71PXvRZf7qL._AC_UF1000,1000_QL80_.jpg' },
    { isbn: 15, titulo: 'El laberinto de los espíritus', autor: 'Carlos Ruiz Zafón', ejemplares: 1, genero: 'Misterio', precio: 13.99, foto: 'https://www.latenda.es/es/imagenes_grandes/9788408/978840819525.JPG' },
    { isbn: 16, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', ejemplares: 1, genero: 'Misterio', precio: 14.99, foto: 'https://www.planetadelibros.com/usuaris/libros/thumbs/6d094940-dcb4-4e3d-9f98-e5c49a87417e/d_295_510/portada_la-sombra-del-viento-20-aniversario_carlos-ruiz-zafon_202103111500.webp' },
    { isbn: 17, titulo: 'It', autor: 'Stephen King', ejemplares: 1, genero: 'Terror', precio: 16.99, foto: 'https://m.media-amazon.com/images/I/613UazqBGHL._AC_UF1000,1000_QL80_.jpg' },
    { isbn: 18, titulo: 'Anna Karenina', autor: 'Lev Tolstói', ejemplares: 1, genero: 'Clásico', precio: 11.99, foto: 'https://imagessl2.casadellibro.com/a/l/s5/02/9788467032802.webp' },
    { isbn: 19, titulo: 'Moby Dick', autor: 'Herman Melville', ejemplares: 1, genero: 'Aventura', precio: 13.99, foto: 'https://assets-global.website-files.com/6034d7d1f3e0f52c50b2adee/625454132a4288889ad4b1d8_6034d7d1f3e0f57d87b2b2a9_Moby-dick-herman-melville-editorial-alma.jpeg' },
    { isbn: 20, titulo: 'El guardián entre el centeno', autor: 'J.D. Salinger', ejemplares: 1, genero: 'Ficción', precio: 12.99, foto: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201803/16/00106520536340____4__640x640.jpg' },
    { isbn: 21, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', ejemplares: 1, genero: 'Romance', precio: 10.99, foto: 'https://m.media-amazon.com/images/I/81URAEPShlL._AC_UF894,1000_QL80_.jpg' },
    { isbn: 22, titulo: 'La catedral del mar', autor: 'Ildefonso Falcones', ejemplares: 1, genero: 'Histórico', precio: 15.99, foto: 'https://m.media-amazon.com/images/I/71Xx0YtmE-L._AC_UF1000,1000_QL80_.jpg' },
    { isbn: 23, titulo: 'La insoportable levedad del ser', autor: 'Milan Kundera', ejemplares: 1, genero: 'Filosófico', precio: 12.99, foto: 'https://m.media-amazon.com/images/I/91RFkeHoGbL._AC_UF894,1000_QL80_.jpg' },
    { isbn: 24, titulo: 'Las aventuras de Tom Sawyer', autor: 'Mark Twain', ejemplares: 1, genero: 'Aventura', precio: 11.99, foto: 'https://assets-global.website-files.com/6034d7d1f3e0f52c50b2adee/625453e86f695c792a66a2c8_6228dd26e6645dc1735a3eb7_9788418395871.jpeg' },
    { isbn: 25, titulo: 'El perfume', autor: 'Patrick Süskind', ejemplares: 1, genero: 'Suspense', precio: 14.99, foto: 'https://libreriacarrera.com/12233-large_default/el-perfume-historia-de-un-asesino-patrick-sueskind-rba-editores-narrativa-actual-2-o-seix-barral-editorial.jpg' },
    { isbn: 26, titulo: 'Rebelión en la granja', autor: 'George Orwell', ejemplares: 1, genero: 'Sátira', precio: 11.99, foto: 'https://m.media-amazon.com/images/I/71PO5p80ViL._AC_UF894,1000_QL80_.jpg' },
    { isbn: 27, titulo: 'El cazador de autógrafos', autor: 'Carlos Reyes', ejemplares: 1, genero: 'Romance', precio: 9.99, foto: 'https://imagessl7.casadellibro.com/a/l/s5/67/9788478888467.webp' },
    { isbn: 28, titulo: 'El cuento de la criada', autor: 'Margaret Atwood', ejemplares: 1, genero: 'Distopía', precio: 15.99, foto: 'https://m.media-amazon.com/images/I/71+vNgYG26L._AC_UF894,1000_QL80_.jpg' },
    { isbn: 29, titulo: 'Crimen y castigo', autor: 'Fyodor Dostoevsky', ejemplares: 1, genero: 'Drama', precio: 13.99, foto: 'https://m.media-amazon.com/images/I/412FCrSu+1L._AC_UF894,1000_QL80_.jpg' },
    { isbn: 30, titulo: 'La naranja mecánica', autor: 'Anthony Burgess', ejemplares: 1, genero: 'Ciencia Ficción', precio: 14.99, foto: 'https://www.planetadelibros.com/usuaris/libros/fotos/326/original/portada_la-naranja-mecanica_anthony-burgess_202306090959.jpg' },
    { isbn: 31, titulo: 'El amor en los tiempos del cólera', autor: 'Gabriel García Márquez', ejemplares: 1, genero: 'Romance', precio: 12.99, foto: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/El_amor_en_los_tiempos_del_c%C3%B3lera.png' },
    { isbn: 32, titulo: 'La hoguera de las vanidades', autor: 'Tom Wolfe', ejemplares: 1, genero: 'Sátira', precio: 11.99, foto: 'https://www.anagrama-ed.es/uploads/media/portadas/0001/20/c1cf26137ba21f0ba2ccb6ea5ba0f3a3ffaa2e32.jpeg' },
    { isbn: 33, titulo: 'El ruido y la furia', autor: 'William Faulkner', ejemplares: 1, genero: 'Drama', precio: 13.99, foto: 'https://m.media-amazon.com/images/I/81OmdnFA6YL._AC_UF1000,1000_QL80_.jpg' },
    { isbn: 34, titulo: 'El guardian invisible', autor: 'Dolores Redondo', ejemplares: 1, genero: 'Misterio', precio: 14.99, foto: 'https://www.doloresredondo.com/wp-content/uploads/Dolores-Redondo-El-guardian-invisible-slide.jpg' },
    { isbn: 35, titulo: 'La chica del tren', autor: 'Paula Hawkins', ejemplares: 1, genero: 'Suspense', precio: 15.99, foto: 'https://m.media-amazon.com/images/I/71dmQQlcDlL._AC_UF894,1000_QL80_.jpg' },
    { isbn: 36, titulo: 'El código del dinero', autor: 'Raimon Samsó', ejemplares: 1, genero: 'Finanzas', precio: 12.99, foto: 'https://m.media-amazon.com/images/I/81c8iT62jaL._AC_UF1000,1000_QL80_.jpg' },
    { isbn: 37, titulo: 'El club de la lucha', autor: 'Chuck Palahniuk', ejemplares: 1, genero: 'Ficción', precio: 13.99, foto: 'https://m.media-amazon.com/images/I/71goPQRSrfL._AC_UF1000,1000_QL80_.jpg' },
    { isbn: 38, titulo: 'Los pilares de la tierra', autor: 'Ken Follett', ejemplares: 1, genero: 'Histórico', precio: 16.99, foto: 'https://m.media-amazon.com/images/I/91FU2wSBo5L._AC_UF1000,1000_QL80_.jpg' },
    { isbn: 39, titulo: 'El poder del ahora', autor: 'Eckhart Tolle', ejemplares: 1, genero: 'Autoayuda', precio: 10.99, foto: 'https://images-eu.ssl-images-amazon.com/images/I/81BrD7hHOxL._AC_UL600_SR600,600_.jpg' },
    { isbn: 40, titulo: 'El silencio de la ciudad blanca', autor: 'Eva García Sáenz de Urturi', ejemplares: 1, genero: 'Thriller', precio: 14.99, foto: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202112/01/00106523571047____7__640x640.jpg' },
    { isbn: 41, titulo: 'Un mundo feliz', autor: 'Aldous Huxley', ejemplares: 1, genero: 'Ciencia Ficción', precio: 13.99, foto: 'https://m.media-amazon.com/images/I/61ZxSt+TxOL._AC_UF894,1000_QL80_.jpg' },
    { isbn: 42, titulo: 'El cuaderno de Maya', autor: 'Isabel Allende', ejemplares: 1, genero: 'Romance', precio: 11.99, foto: 'https://m.media-amazon.com/images/I/51HTXUU-UEL._AC_UF894,1000_QL80_.jpg' }
];


const librosPorPagina = 8;
let paginaActual = 1;

function mostrarListaLibros() {
    const listaLibrosContainer = document.getElementById('listaLibros');
    listaLibrosContainer.innerHTML = '';

    const startIndex = (paginaActual - 1) * librosPorPagina;
    const endIndex = startIndex + librosPorPagina;

    const librosPagina = libros.slice(startIndex, endIndex);

    librosPagina.forEach(libro => {
        const card = document.createElement('div');
        card.classList.add('col-md-3', 'my-3');

        card.innerHTML = `
<div class="card">
    <div class="card-body">
        <h5 class="card-title">${libro.titulo}</h5>
        <p class="card-text">Autor: ${libro.autor}</p>
        <p class="card-text">Género: ${libro.genero}</p>
        <p class="card-text">Número de Libros: ${libro.ejemplares}</p>
        <img class="card-img card-img-top" src="${libro.foto}" alt="Imagen del libro" style="width: 40mm; height: 40mm; object-fit: cover;">
    </div>
    <div class="card-footer">
        <button class="btn btn-primary" onclick="mostrarOpciones(${libro.isbn})">Detalles</button>
        <div id="opciones-${libro.isbn}" style="display: none;">
            <button onclick="Borrar(${libro.isbn})" class="btn btn-primary rounded-pill me-2 mb-2 mt-2">Borrar</button>
        </div>
    </div>
</div>
`;
        listaLibrosContainer.appendChild(card);
    });
}



function Borrar(isbn) {
    libros = libros.filter(libro => libro.isbn !== isbn);
    localStorage.setItem('libros', JSON.stringify(libros));
    mostrarListaLibros();
    initPaginator();
}

function mostrarOpciones(isbn) {
    const opciones = document.getElementById(`opciones-${isbn}`);
    opciones.style.display = opciones.style.display === 'none' ? 'block' : 'none';
}

function initPaginator() {
    const totalPaginas = Math.ceil(libros.length / librosPorPagina);
    const paginator = document.getElementById('paginator');
    paginator.innerHTML = '';

    for (let i = 1; i <= totalPaginas; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        const a = document.createElement('a');
        a.classList.add('page-link');
        a.href = '#';
        a.textContent = i;
        a.onclick = () => {
            paginaActual = i;
            mostrarListaLibros();
            highlightCurrentPage();
        };
        li.appendChild(a);
        paginator.appendChild(li);
    }

    highlightCurrentPage();
}

function highlightCurrentPage() {
    const currentPage = document.querySelector('.pagination .active');
    if (currentPage) {
        currentPage.classList.remove('active');
    }
    document.querySelector(`.pagination li:nth-child(${paginaActual})`).classList.add('active');
}

function addBook() {
    const isbn = document.getElementById('isbn').value;
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ejemplares = document.getElementById('ejemplares').value;
    const genero = document.getElementById('genero').value;
    const precio = document.getElementById('precio').value;
    const foto = document.getElementById('foto').value;

    if (isbn && titulo && autor && ejemplares && genero && precio && foto) {
        console.log('Libro añadido:', { isbn, titulo, autor, ejemplares, genero, precio, foto });
        libros.push({
            isbn: parseInt(isbn),
            titulo: titulo,
            autor: autor,
            ejemplares: parseInt(ejemplares),
            genero: genero,
            precio: parseFloat(precio),
            foto: foto
        });
        localStorage.setItem('libros', JSON.stringify(libros));
        Swal.fire({
            icon: 'success',
            title: 'Libro añadido con exito',
            text: 'El libro ha sido añadido con éxito, ahora puedes verlo en la lista.'
        }).then(() => {
            window.location.href = 'listaLibrosAdmin.html';
        });
    } else {
        document.getElementById('addBookMessage').textContent = 'Por favor, rellena todos los campos';
    }

    mostrarListaLibros();
    initPaginator();
}