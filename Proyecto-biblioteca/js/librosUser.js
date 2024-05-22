let libros = JSON.parse(localStorage.getItem('libros')) || [
    { isbn: 1, titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', ejemplares: 1, genero: 'Fantasía', precio: 19.99, foto: '' },
    { isbn: 2, titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', ejemplares: 1, genero: 'Ficción', precio: 12.99, foto: '' },
    { isbn: 3, titulo: '1984', autor: 'George Orwell', ejemplares: 1, genero: 'Ciencia Ficción', precio: 15.99, foto: '' },
    { isbn: 4, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', ejemplares: 1, genero: 'Clásico', precio: 11.99, foto: '' },
    { isbn: 5, titulo: 'Matar a un ruiseñor', autor: 'Harper Lee', ejemplares: 1, genero: 'Ficción', precio: 14.99, foto: '' },
    { isbn: 6, titulo: 'El señor de los anillos: La comunidad del anillo', autor: 'J.R.R. Tolkien', ejemplares: 1, genero: 'Fantasía', precio: 18.99, foto: '' },
    { isbn: 7, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes Saavedra', ejemplares: 1, genero: 'Clásico', precio: 13.99, foto: '' },
    { isbn: 8, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', ejemplares: 1, genero: 'Realismo Mágico', precio: 17.99, foto: '' },
    { isbn: 9, titulo: 'Crónica de una muerte anunciada', autor: 'Gabriel García Márquez', ejemplares: 1, genero: 'Ficción', precio: 11.99, foto: '' },
    { isbn: 10, titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', ejemplares: 1, genero: 'Ciencia Ficción', precio: 14.99, foto: '' },
    { isbn: 11, titulo: 'El código Da Vinci', autor: 'Dan Brown', ejemplares: 1, genero: 'Suspense', precio: 12.99, foto: '' },
    { isbn: 12, titulo: 'El alquimista', autor: 'Paulo Coelho', ejemplares: 1, genero: 'Autoayuda', precio: 9.99, foto: '' },
    { isbn: 13, titulo: 'El nombre del viento', autor: 'Patrick Rothfuss', ejemplares: 1, genero: 'Fantasía', precio: 16.99, foto: '' },
    { isbn: 14, titulo: 'El retrato de Dorian Gray', autor: 'Oscar Wilde', ejemplares: 1, genero: 'Clásico', precio: 10.99, foto: '' },
    { isbn: 15, titulo: 'El laberinto de los espíritus', autor: 'Carlos Ruiz Zafón', ejemplares: 1, genero: 'Misterio', precio: 13.99, foto: '' },
    { isbn: 16, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', ejemplares: 1, genero: 'Misterio', precio: 14.99, foto: '' },
    { isbn: 17, titulo: 'It', autor: 'Stephen King', ejemplares: 1, genero: 'Terror', precio: 16.99, foto: '' },
    { isbn: 18, titulo: 'Anna Karenina', autor: 'Lev Tolstói', ejemplares: 1, genero: 'Clásico', precio: 11.99, foto: '' },
    { isbn: 19, titulo: 'Moby Dick', autor: 'Herman Melville', ejemplares: 1, genero: 'Aventura', precio: 13.99, foto: '' },
    { isbn: 20, titulo: 'El guardián entre el centeno', autor: 'J.D. Salinger', ejemplares: 1, genero: 'Ficción', precio: 12.99, foto: '' },
    { isbn: 21, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', ejemplares: 1, genero: 'Romance', precio: 10.99, foto: '' },
    { isbn: 22, titulo: 'La catedral del mar', autor: 'Ildefonso Falcones', ejemplares: 1, genero: 'Histórico', precio: 15.99, foto: '' },
    { isbn: 23, titulo: 'La insoportable levedad del ser', autor: 'Milan Kundera', ejemplares: 1, genero: 'Filosófico', precio: 12.99, foto: '' },
    { isbn: 24, titulo: 'Las aventuras de Tom Sawyer', autor: 'Mark Twain', ejemplares: 1, genero: 'Aventura', precio: 11.99, foto: '' },
    { isbn: 25, titulo: 'El perfume', autor: 'Patrick Süskind', ejemplares: 1, genero: 'Suspense', precio: 14.99, foto: '' },
    { isbn: 26, titulo: 'Rebelión en la granja', autor: 'George Orwell', ejemplares: 1, genero: 'Sátira', precio: 11.99, foto: '' },
    { isbn: 27, titulo: 'El cazador de autógrafos', autor: 'Carlos Reyes', ejemplares: 1, genero: 'Romance', precio: 9.99, foto: '' },
    { isbn: 28, titulo: 'El cuento de la criada', autor: 'Margaret Atwood', ejemplares: 1, genero: 'Distopía', precio: 15.99, foto: '' },
    { isbn: 29, titulo: 'Crimen y castigo', autor: 'Fyodor Dostoevsky', ejemplares: 1, genero: 'Drama', precio: 13.99, foto: '' },
    { isbn: 30, titulo: 'La naranja mecánica', autor: 'Anthony Burgess', ejemplares: 1, genero: 'Ciencia Ficción', precio: 14.99, foto: '' },
    { isbn: 31, titulo: 'El amor en los tiempos del cólera', autor: 'Gabriel García Márquez', ejemplares: 1, genero: 'Romance', precio: 12.99, foto: '' },
    { isbn: 32, titulo: 'La hoguera de las vanidades', autor: 'Tom Wolfe', ejemplares: 1, genero: 'Sátira', precio: 11.99, foto: '' },
    { isbn: 33, titulo: 'El ruido y la furia', autor: 'William Faulkner', ejemplares: 1, genero: 'Drama', precio: 13.99, foto: '' },
    { isbn: 34, titulo: 'El guardian invisible', autor: 'Dolores Redondo', ejemplares: 1, genero: 'Misterio', precio: 14.99, foto: '' },
    { isbn: 35, titulo: 'La chica del tren', autor: 'Paula Hawkins', ejemplares: 1, genero: 'Suspense', precio: 15.99, foto: '' },
    { isbn: 36, titulo: 'El código del dinero', autor: 'Raimon Samsó', ejemplares: 1, genero: 'Finanzas', precio: 12.99, foto: '' },
    { isbn: 37, titulo: 'El club de la lucha', autor: 'Chuck Palahniuk', ejemplares: 1, genero: 'Ficción', precio: 13.99, foto: '' },
    { isbn: 38, titulo: 'Los pilares de la tierra', autor: 'Ken Follett', ejemplares: 1, genero: 'Histórico', precio: 16.99, foto: '' },
    { isbn: 39, titulo: 'El poder del ahora', autor: 'Eckhart Tolle', ejemplares: 1, genero: 'Autoayuda', precio: 10.99, foto: '' },
    { isbn: 40, titulo: 'El silencio de la ciudad blanca', autor: 'Eva García Sáenz de Urturi', ejemplares: 1, genero: 'Thriller', precio: 14.99, foto: '' },
    { isbn: 41, titulo: 'Un mundo feliz', autor: 'Aldous Huxley', ejemplares: 1, genero: 'Ciencia Ficción', precio: 13.99, foto: '' },
    { isbn: 42, titulo: 'El cuaderno de Maya', autor: 'Isabel Allende', ejemplares: 1, genero: 'Romance', precio: 11.99, foto: '' }
];

let librosAlquilados = [];


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
            </div>
            <div class="card-footer">
                <button class="btn btn-primary" onclick="mostrarOpciones(${libro.isbn})">Detalles</button>
                <div id="opciones-${libro.isbn}" style="display: none;">
                <button onclick="alquilar(${libro.isbn})" class="btn btn-primary rounded-pill me-2 mb-2 mt-2">Alquilar</button>
                <button onclick="devolver(${libro.isbn})" class="btn btn-primary rounded-pill me-2 mb-2">Devolver</button>
                    </div>
                </div>
            </div>
        </div>
        `;

        listaLibrosContainer.appendChild(card);
    });
}

function mostrarOpciones(isbn) {
    const opciones = document.getElementById(`opciones-${isbn}`);
    opciones.style.display = opciones.style.display === 'none' ? 'block' : 'none';
}

function alquilar(isbn) {
    const libro = libros.find(libro => libro.isbn === isbn);
    if (!libro) return;

    if (libro.ejemplares > 0) {
        librosAlquilados.push(libro);
        alert('Has alquilado el libro exitosamente.');
        libro.ejemplares--;
        mostrarListaLibros();
    } else {
        alert('Libro no disponible. Ya ha sido alquilado por otro usuario.');
    }
}

function devolver(isbn) {
    const libroIndex = librosAlquilados.findIndex(libro => libro.isbn === isbn);

    if (libroIndex !== -1) {
        const libroDevuelto = librosAlquilados[libroIndex];
        librosAlquilados.splice(libroIndex, 1);
        libroDevuelto.ejemplares++;
        mostrarListaLibros();
        alert(`Has devuelto el libro: ${libroDevuelto.titulo}`);
    } else {
        alert(`No tienes el libro con ISBN ${isbn} en tu propiedad.`);
    }
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


initPaginator();
mostrarListaLibros();

function DonarLibro() {
    const isbn = document.getElementById('isbn').value;
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ejemplares = document.getElementById('ejemplares').value;
    const genero = document.getElementById('genero').value;
    const foto = document.getElementById('foto').value;
    const precio = document.getElementById('precio').value;

    if (isbn && titulo && autor && ejemplares && genero && precio && foto) {
        console.log('Libro añadido:', { isbn, titulo, autor, ejemplares, genero, precio, foto });
        libros.push({
            isbn: parseInt(isbn),
            titulo: titulo,
            autor: autor,
            ejemplares: parseInt(ejemplares),
            genero: genero,
            precio: parseInt(precio),
            foto: foto
        });
        localStorage.setItem('libros', JSON.stringify(libros));
        Swal.fire({
            icon: 'success',
            title: 'Libro añadido con exito',
            text: 'El libro ha sido añadido con éxito, ahora puedes verlo en la lista.'
        }).then(() => {
            window.location.href = 'listaLibrosUser.html';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: 'Por favor, rellena todos los campos.'
        });

    }

    mostrarListaLibros();
    initPaginator();
}