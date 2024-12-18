import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import imageCienAnos from "./images/cien-anos-de-soledad.jpg";
import imagePride from "./images/PrideandPrejudice.jpg"
import imageLolita from "./images/Lolita.jpg";
import imageSegundoSexo from "./images/elsegundosexo.png";
import imageAlguienCamina from "./images/alguiencamina.jpeg";
import imageLosNombres from "./images/losnombresde.jpg";
import imagePlantaNaranja from "./images/planta naranja.jpg";
import imageMiNombre from "./images/mi-nombre-es-emilia-del-valle.jpg";
import imageFearless from "./images/fearless.jpg";
import imageULugar from "./images/unlugarsoleado.jpeg";

const firebaseConfig = {
  apiKey: "AIzaSyALn-f61ifag-QsNhK9TWIAClsUPNzh6gM",
  authDomain: "reactjs-karenmartinez.firebaseapp.com",
  projectId: "reactjs-karenmartinez",
  storageBucket: "reactjs-karenmartinez.appspot.com",
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
    image: imageCienAnos,
    synopsis: "Cien años de soledad, de Gabriel García Márquez, relata la historia de los Buendía en Macondo, un pueblo mágico donde generaciones enfrentan amores, tragedias y soledad. Marcados por un destino cíclico, los Buendía viven eventos extraordinarios hasta su inevitable desaparición, cumpliendo la profecía que anuncia su final desde el inicio.",
    reviews: 4.8,
    isBestSeller: true,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 14.500,
    category: "classic",
    image: imagePride,
    synopsis: "Pride and Prejudice, de Jane Austen, narra la historia de Elizabeth Bennet, una joven inteligente y audaz, que enfrenta malentendidos y prejuicios sociales mientras encuentra el amor verdadero con el enigmático Sr. Darcy. La novela explora el orgullo, los juicios equivocados y las normas de la sociedad inglesa del siglo XIX.",
    reviews: 4.8,
    isBestSeller: true,
  },
  {
    title: "Lolita",
    author: "Vladimir Nabokov",
    price: 16.000,
    category: "classic",
    image: imageLolita,
    synopsis: "Lolita, de Vladimir Nabokov, es la controversial historia de Humbert Humbert, un hombre obsesionado con Dolores Haze, una adolescente a la que llama 'Lolita'. Narrada desde su perspectiva, la novela explora temas de deseo, manipulación y moralidad, envueltos en un lenguaje poético y una compleja reflexión sobre el amor y el abuso.",
    reviews: 4.7,
    isBestSeller: true,
  },
  {
    title: "El segundo sexo",
    author: "Simone de Beauvoir",
    price: 18.000,
    category: "philosophy",
    image: imageSegundoSexo,
    synopsis: "El segundo sexo, de Simone de Beauvoir, analiza la opresión histórica de las mujeres, explorando cómo la sociedad las define como 'el otro'. Este ensayo fundamental combina filosofía, historia y experiencias personales, desafiando las normas patriarcales y sentando las bases del feminismo moderno al reivindicar la autonomía y libertad femenina.",
    reviews: 4.9,
    isBestSeller: true,
  },
  {
    title: "Alguien camina sobre tu tumba",
    author: "Mariana Enriquez",
    price: 12.500,
    category: "non-fiction",
    image: imageAlguienCamina,
    synopsis: "Alguien camina sobre tu tumba, de Mariana Enriquez, es una fascinante colección de crónicas sobre cementerios del mundo. La autora explora su belleza, misterio e historias macabras, combinando su estilo único con reflexiones sobre la muerte, el arte funerario y el vínculo cultural con lo sobrenatural y lo desconocido.",
    reviews: 4.6,
    isBestSeller: false,
  },
  {
    title: "Los nombres de Feliza",
    author: "Margarita García Robayo",
    price: 13.000,
    category: "fiction",
    image: imageLosNombres,
    reviews: 4.5,
    isBestSeller: false,
  },
  {
    title: "Mi planta de naranja lima",
    author: "José Mauro de Vasconcelos",
    price: 11.000,
    category: "fiction",
    image: imagePlantaNaranja,
    synopsis: "Mi planta de naranja lima, de José Mauro de Vasconcelos, relata la tierna y conmovedora historia de Zezé, un niño brasileño que encuentra consuelo y amistad en su planta de naranja lima. La novela aborda con sensibilidad temas como la pobreza, el dolor y la esperanza en medio de la adversidad.",
    reviews: 4.8,
    isBestSeller: true,
  },
  {
    title: "Mi nombre es Emilia del Valle",
    author: "Isabel Allende",
    price: 14.000,
    category: "fiction",
    image: imageMiNombre,
    synopsis: "Mi nombre es Emilia del Valle es una novela introspectiva que sigue a Emilia, una mujer en busca de sentido en su vida cotidiana. Con una narrativa poética, explora temas de soledad, memoria y la construcción de identidad en un mundo marcado por la incertidumbre.",
    reviews: 4.6,
    isBestSeller: false,
  },
  {
    title: "Fearless",
    author: "Eric Blehm",
    price: 15.500,
    category: "biography",
    image: imageFearless,
    synopsis: "Fearless, de Eric Blehm, cuenta la inspiradora historia de Adam Brown, un Navy SEAL cuya vida estuvo marcada por la superación personal, el sacrificio y el coraje. Desde su lucha contra la adicción hasta convertirse en un héroe, la biografía refleja el poder del amor, la fe y la determinación.",
    reviews: 4.9,
    isBestSeller: true,
  },
  {
    title: "Un lugar soleado para gente sombría",
    author: "Mariana Enriquez",
    price: 14.500,
    category: "fiction",
    image: imageULugar,
    synopsis: "Un lugar soleado para gente sombría, de Mariana Enriquez, combina realismo y elementos oscuros para explorar historias de personajes marginales atrapados entre el miedo y el deseo. Con su estilo visceral, Enriquez ofrece una reflexión inquietante sobre la naturaleza humana, los vínculos rotos y los lugares donde habita la oscuridad.",
    reviews: 4.8,
    isBestSeller: true,
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
