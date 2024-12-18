import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyALn-f61ifag-QsNhK9TWIAClsUPNzh6gM",
  authDomain: "reactjs-karenmartinez.firebaseapp.com",
  projectId: "reactjs-karenmartinez",
  storageBucket: "reactjs-karenmartinez.firebasestorage.app",
  messagingSenderId: "512284073292",
  appId: "1:512284073292:web:782821f9b1f64aced683e9",
  measurementId: "G-2NJFKC98Y6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const books = [
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    price: 20.000,
    category: "fiction",
    image: "",
    synopsis: "Cien años de soledad, de Gabriel García Márquez, relata la historia de los Buendía en Macondo, un pueblo mágico donde generaciones enfrentan amores, tragedias y soledad. Marcados por un destino cíclico, los Buendía viven eventos extraordinarios hasta su inevitable desaparición, cumpliendo la profecía que anuncia su final desde el inicio.",
    reviews: 4.8,
    isBestSeller: true,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 14.500,
    category: "classic",
    image: "",
    synopsis: "Pride and Prejudice, de Jane Austen, narra la historia de Elizabeth Bennet, una joven inteligente y audaz, que enfrenta malentendidos y prejuicios sociales mientras encuentra el amor verdadero con el enigmático Sr. Darcy. La novela explora el orgullo, los juicios equivocados y las normas de la sociedad inglesa del siglo XIX.",
    reviews: 4.8,
    isBestSeller: true
  },
  {
    title: "Lolita",
    author: "Vladimir Nabokov",
    price: 16.000,
    category: "classic",
    image: "",
    synopsis: "Lolita, de Vladimir Nabokov, es la controversial historia de Humbert Humbert, un hombre obsesionado con Dolores Haze, una adolescente a la que llama 'Lolita'. Narrada desde su perspectiva, la novela explora temas de deseo, manipulación y moralidad, envueltos en un lenguaje poético y una compleja reflexión sobre el amor y el abuso.",
    reviews: 4.7,
    isBestSeller: true
  },
  {
    title: "El segundo sexo",
    author: "Simone de Beauvoir",
    price: 18.000,
    category: "philosophy",
    image: "",
    synopsis: "El segundo sexo, de Simone de Beauvoir, analiza la opresión histórica de las mujeres, explorando cómo la sociedad las define como 'el otro'. Este ensayo fundamental combina filosofía, historia y experiencias personales, desafiando las normas patriarcales y sentando las bases del feminismo moderno al reivindicar la autonomía y libertad femenina.",
    reviews: 4.9,
    isBestSeller: true
  },
  {
    title: "Alguien camina sobre tu tumba",
    author: "Mariana Enriquez",
    price: 12.500,
    category: "non-fiction",
    image: "",
    synopsis: "Alguien camina sobre tu tumba, de Mariana Enriquez, es una fascinante colección de crónicas sobre cementerios del mundo. La autora explora su belleza, misterio e historias macabras, combinando su estilo único con reflexiones sobre la muerte, el arte funerario y el vínculo cultural con lo sobrenatural y lo desconocido.",
    reviews: 4.6,
    isBestSeller: false
  },
  {
    title: "Los nombres de Feliza",
    author: "Margarita García Robayo",
    price: 13.000,
    category: "fiction",
    image: "",
    synopsis: "Los nombres de Feliza, de Margarita García Robayo, narra la historia de Feliza, una mujer que cuestiona su identidad mientras enfrenta las expectativas sociales y familiares. A través de una prosa íntima y reflexiva, explora los dilemas del autodescubrimiento, el amor y la complejidad de las relaciones humanas.",
    reviews: 4.5,
    isBestSeller: false
  },
  {
    title: "Mi planta de naranja lima",
    author: "José Mauro de Vasconcelos",
    price: 11.000,
    category: "fiction",
    image: "",
    synopsis: "Mi planta de naranja lima, de José Mauro de Vasconcelos, relata la tierna y conmovedora historia de Zezé, un niño brasileño que encuentra consuelo y amistad en su planta de naranja lima. La novela aborda con sensibilidad temas como la pobreza, el dolor y la esperanza en medio de la adversidad.",
    reviews: 4.8,
    isBestSeller: true
  },
  {
    title: "Mi nombre es Emilia del Valle",
    author: "Carolina Sanín",
    price: 14.000,
    category: "fiction",
    image: "",
    synopsis: "Mi nombre es Emilia del Valle, de Carolina Sanín, es una novela introspectiva que sigue a Emilia, una mujer en busca de sentido en su vida cotidiana. Con una narrativa poética, explora temas de soledad, memoria y la construcción de identidad en un mundo marcado por la incertidumbre.",
    reviews: 4.6,
    isBestSeller: false
  },
  {
    title: "Fearless",
    author: "Eric Blehm",
    price: 15.500,
    category: "biography",
    image: "",
    synopsis: "Fearless, de Eric Blehm, cuenta la inspiradora historia de Adam Brown, un Navy SEAL cuya vida estuvo marcada por la superación personal, el sacrificio y el coraje. Desde su lucha contra la adicción hasta convertirse en un héroe, la biografía refleja el poder del amor, la fe y la determinación.",
    reviews: 4.9,
    isBestSeller: true
  },
  {
    title: "Un lugar soleado para gente sombría",
    author: "Mariana Enriquez",
    price: 14.500,
    category: "fiction",
    image: "",
    synopsis: "Un lugar soleado para gente sombría, de Mariana Enriquez, combina realismo y elementos oscuros para explorar historias de personajes marginales atrapados entre el miedo y el deseo. Con su estilo visceral, Enriquez ofrece una reflexión inquietante sobre la naturaleza humana, los vínculos rotos y los lugares donde habita la oscuridad.",
    reviews: 4.8,
    isBestSeller: true
  },
  {
    title: "El celo",
    author: "Nuria Barrios",
    price: 12.000,
    category: "fiction",
    image: "",
    synopsis: "El celo, de Nuria Barrios, es una poderosa novela que explora los celos, la culpa y la obsesión en una relación amorosa. A través de una prosa íntima y descarnada, Barrios retrata las emociones más intensas y destructivas que surgen cuando el amor se transforma en inseguridad y desconfianza.",
    reviews: 4.5,
    isBestSeller: false
  },
  {
    title: "La llamada",
    author: "Pablo Ramos",
    price: 13.200,
    category: "fiction",
    image: "",
    synopsis: "La llamada, de Pablo Ramos, narra un tenso y emotivo diálogo entre un padre y su hijo, en el que emergen las heridas familiares, la culpa y el amor. Con una narrativa íntima, la novela aborda las complejidades de las relaciones humanas y la lucha por la redención personal.",
    reviews: 4.6,
    isBestSeller: false
  },
  {
    title: "Cómo causar un incendio y por qué",
    author: "Jessie Ann Foley",
    price: 14.000,
    category: "fiction",
    image: "",
    synopsis: "Cómo causar un incendio y por qué, de Jessie Ann Foley, sigue a un adolescente rebelde que enfrenta el duelo y la ira tras una tragedia familiar. A través de su búsqueda de identidad, la novela aborda temas como la pérdida, el crecimiento y la fuerza de las emociones desbordadas.",
    reviews: 4.7,
    isBestSeller: true
  },
  {
    title: "En agosto nos vemos",
    author: "Gabriel García Márquez",
    price: 15.000,
    category: "fiction",
    image: "",
    synopsis: "En agosto nos vemos, de Gabriel García Márquez, narra la historia de Ana Magdalena, quien cada año visita la tumba de su madre en una isla caribeña. Allí, vive encuentros inesperados que entrelazan amor, memoria y deseo, explorando con la prosa mágica de Márquez la fragilidad de las emociones humanas.",
    reviews: 4.8,
    isBestSeller: true
  },
  {
    "title": "Los guardianes de la memoria",
    "author": "Clara Ford",
    "price": 15.000,
    "category": "fiction",
    "image": "",
    "synopsis": "Los guardianes de la memoria narra la historia de un grupo que preserva recuerdos olvidados en un mundo donde la memoria colectiva se desvanece. Mezcla de ciencia ficción y realismo, explora el poder de los recuerdos y la identidad.",
    "reviews": 4.7,
    "isBestSeller": false
  },
  {
    "title": "El último eclipse",
    "author": "Julian Harper",
    "price": 16.500,
    "category": "fiction",
    "image": "",
    "synopsis": "El último eclipse es una novela postapocalíptica donde una familia lucha por sobrevivir tras un desastre global. Con giros sorprendentes, aborda el sacrificio y la esperanza en tiempos oscuros.",
    "reviews": 4.8,
    "isBestSeller": true
  },
  {
    "title": "Hijas de lo salvaje",
    "author": "Leona Grace",
    "price": 14.000,
    "category": "fiction",
    "image": "",
    "synopsis": "Hijas de lo salvaje cuenta la historia de una comunidad aislada donde las mujeres descubren secretos ancestrales que redefinirán su futuro. Una novela sobre el poder femenino y la conexión con la naturaleza.",
    "reviews": 4.6,
    "isBestSeller": true
  },
  {
    "title": "Las sombras que enterramos",
    "author": "Oliver Banks",
    "price": 13.800,
    "category": "fiction",
    "image": "",
    "synopsis": "Las sombras que enterramos sigue a un periodista que investiga un caso de desaparición en un pequeño pueblo, desentrañando oscuros secretos que lo cambiarán para siempre. Un thriller psicológico lleno de misterio.",
    "reviews": 4.5,
    "isBestSeller": false
  },
  {
    "title": "Las cartas olvidadas",
    "author": "Amelia Rowe",
    "price": 14.500,
    "category": "fiction",
    "image": "",
    "synopsis": "Las cartas olvidadas narra la historia de una joven que encuentra correspondencia antigua en su nuevo hogar, desentrañando una historia de amor y traición que cruza generaciones.",
    "reviews": 4.9,
    "isBestSeller": true
  },
  {
    "title": "Al borde del mundo",
    "author": "Maxine Clarke",
    "price": 15.200,
    "category": "fiction",
    "image": "",
    "synopsis": "Al borde del mundo sigue a un explorador que descubre una civilización oculta en un rincón olvidado del planeta. Una novela que mezcla aventura, descubrimiento y dilemas morales.",
    "reviews": 4.6,
    "isBestSeller": true
  },
  {
    "title": "La verdad entre líneas",
    "author": "Sofia Mendoza",
    "price": 14.300,
    "category": "fiction",
    "image": "",
    "synopsis": "La verdad entre líneas narra la historia de un escritor que, tras recibir cartas anónimas, descubre secretos sobre su pasado que lo llevan a cuestionar su realidad.",
    "reviews": 4.7,
    "isBestSeller": true
  },
  {
    "title": "El pacto de los espejos",
    "author": "Ricardo Larios",
    "price": 13.900,
    "category": "fiction",
    "image": "",
    "synopsis": "El pacto de los espejos es un thriller sobrenatural que sigue a un detective mientras investiga un caso donde los reflejos parecen cobrar vida, revelando verdades ocultas.",
    "reviews": 4.6,
    "isBestSeller": false
  },
  {
    "title": "La casa del bosque",
    "author": "Elena Fernández",
    "price": 14.800,
    "category": "fiction",
    "image": "",
    "synopsis": "La casa del bosque narra la historia de una familia que se muda a una casa antigua donde los secretos del pasado comienzan a desentrañarse, transformando sus vidas para siempre.",
    "reviews": 4.8,
    "isBestSeller": true
  },
  {
    "title": "La isla de las sombras",
    "author": "Lucas García",
    "price": 14.600,
    "category": "fiction",
    "image": "",
    "synopsis": "La isla de las sombras sigue a un grupo de arqueólogos que descubre un misterioso asentamiento, enfrentándose a los secretos oscuros que yacen enterrados en sus ruinas.",
    "reviews": 4.5,
    "isBestSeller": false
  },
  {
    "title": "Bajo el mismo cielo",
    "author": "Clara Rodríguez",
    "price": 13.500,
    "category": "romance",
    "image": "",
    "synopsis": "Bajo el mismo cielo cuenta la historia de dos desconocidos que se cruzan en un aeropuerto durante una tormenta. Lo que comienza como un encuentro casual se transforma en un romance inolvidable.",
    "reviews": 4.6,
    "isBestSeller": true
  },
  {
    "title": "Amor a la deriva",
    "author": "Lucas Alvarado",
    "price": 14.200,
    "category": "romance",
    "image": "",
    "synopsis": "Amor a la deriva sigue a dos náufragos que deben apoyarse mutuamente para sobrevivir en una isla desierta, mientras descubren un amor tan salvaje como inesperado.",
    "reviews": 4.7,
    "isBestSeller": false
  },
  {
    "title": "Cartas desde París",
    "author": "Isabella Ruiz",
    "price": 15.000,
    "category": "romance",
    "image": "",
    "synopsis": "Cartas desde París narra la relación epistolar entre una joven escritora y un misterioso desconocido que le envía cartas desde la ciudad del amor, llevando sus vidas a un giro inesperado.",
    "reviews": 4.8,
    "isBestSeller": true
  },
  {
    "title": "El jardín de los secretos",
    "author": "María López",
    "price": 14.500,
    "category": "romance",
    "image": "",
    "synopsis": "El jardín de los secretos cuenta la historia de una restauradora de arte que, al trabajar en una mansión abandonada, encuentra pistas sobre un romance perdido y termina viviendo su propia historia de amor.",
    "reviews": 4.7,
    "isBestSeller": false
  },
  {
    "title": "Hasta el último suspiro",
    "author": "Daniela Ferrer",
    "price": 13.800,
    "category": "romance",
    "image": "",
    "synopsis": "Hasta el último suspiro relata el amor de dos almas gemelas que, tras años de separación, vuelven a encontrarse y deben decidir si su pasión es suficiente para superar los retos del destino.",
    "reviews": 4.9,
    "isBestSeller": true
  }
];

const addBooksToFirestore = async () => {
  const booksCollection = collection(db, "books"); 
  for (let book of books) {
    try {
      await addDoc(booksCollection, book); 
      console.log(`Added: ${book.title}`);
    } catch (error) {
      console.error(`Error adding ${book.title}: `, error);
    }
  }
};

addBooksToFirestore();
