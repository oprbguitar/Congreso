import type { PartyId } from "./parties";

export type Chamber = "senate" | "deputies";

export type Representative = {
  id: string;
  chamber: Chamber;
  name: string;
  party: string;
  partyId: PartyId;
  district: string;
  position: number;
  gender: "female" | "male";
};

export const REPRESENTATIVES: Representative[] = [
  {
    "id": "senate-1",
    "chamber": "senate",
    "name": "Jaime Ricardo Delgado Zegarra",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Distrito único nacional",
    "position": 5,
    "gender": "male"
  },
  {
    "id": "senate-2",
    "chamber": "senate",
    "name": "Pablo Alfonso López-Chau Nava",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Distrito único nacional",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-3",
    "chamber": "senate",
    "name": "Ruth Luque Ibarra",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Distrito único nacional",
    "position": 8,
    "gender": "female"
  },
  {
    "id": "senate-4",
    "chamber": "senate",
    "name": "Mirtha Esther Vásquez Chuquilín",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Distrito único nacional",
    "position": 4,
    "gender": "female"
  },
  {
    "id": "senate-5",
    "chamber": "senate",
    "name": "Alejandro Aurelio Aguinaga Recuenco",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lambayeque",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-6",
    "chamber": "senate",
    "name": "José Berley Arista Arbildo",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Amazonas",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-7",
    "chamber": "senate",
    "name": "César Augusto Astudillo Salcedo",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Distrito único nacional",
    "position": 5,
    "gender": "male"
  },
  {
    "id": "senate-8",
    "chamber": "senate",
    "name": "Martha Gladys Chávez Cossío",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Distrito único nacional",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "senate-9",
    "chamber": "senate",
    "name": "Nilza Merly Chacón Trujillo",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Áncash",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "senate-10",
    "chamber": "senate",
    "name": "Juan Carlos del Águila Cárdenas",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Loreto",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-11",
    "chamber": "senate",
    "name": "Víctor Seferino Flores Ruíz",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "La Libertad",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-12",
    "chamber": "senate",
    "name": "Héctor José Ventura Ángel",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Tumbes",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-13",
    "chamber": "senate",
    "name": "David Julio Jiménez Heredia",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Junín",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-14",
    "chamber": "senate",
    "name": "Carmen Patricia Juárez Gallegos",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Distrito único nacional",
    "position": 4,
    "gender": "female"
  },
  {
    "id": "senate-15",
    "chamber": "senate",
    "name": "Elard Galo Melgar Valdez",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lima Provincias",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-16",
    "chamber": "senate",
    "name": "Carlos Fernando Mesía Ramírez",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Distrito único nacional",
    "position": 9,
    "gender": "male"
  },
  {
    "id": "senate-17",
    "chamber": "senate",
    "name": "Marco Enrique Miyashiro Arashiro",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lima",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-18",
    "chamber": "senate",
    "name": "Martha Lupe Moyano Delgado",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Distrito único nacional",
    "position": 6,
    "gender": "female"
  },
  {
    "id": "senate-19",
    "chamber": "senate",
    "name": "Víctor Manuel Noriega Reátegui",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "San Martín",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-20",
    "chamber": "senate",
    "name": "Fernando Miguel Rospigliosi Capurro",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Distrito único nacional",
    "position": 3,
    "gender": "male"
  },
  {
    "id": "senate-21",
    "chamber": "senate",
    "name": "Jacques Salomón Rodrich Ackerman",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Callao",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-22",
    "chamber": "senate",
    "name": "Karla Melisa Schaefer Cuculiza",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Piura",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "senate-23",
    "chamber": "senate",
    "name": "Segundo Leocadio Tapia Bernal",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Cajamarca",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-24",
    "chamber": "senate",
    "name": "Miguel Ángel Torres Morales",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Distrito único nacional",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-25",
    "chamber": "senate",
    "name": "Jorge Velásquez Portocarrero",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Ucayali",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-26",
    "chamber": "senate",
    "name": "Rafael Gustavo Yamashiro Oré",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Ica",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-27",
    "chamber": "senate",
    "name": "Saúl Andrés Armacanqui Morales",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Distrito único nacional",
    "position": 3,
    "gender": "male"
  },
  {
    "id": "senate-28",
    "chamber": "senate",
    "name": "José Mercedes Castillo Terrones",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Distrito único nacional",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-29",
    "chamber": "senate",
    "name": "Julio Moisés Chipana Chipana",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Puno",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-30",
    "chamber": "senate",
    "name": "Víctor Raúl Cutipa Ccama",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Moquegua",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-31",
    "chamber": "senate",
    "name": "Hugo Isaac Ccahuana Aymachoque",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Madre de Dios",
    "position": 2,
    "gender": "male"
  },
  {
    "id": "senate-32",
    "chamber": "senate",
    "name": "Serafín Andrés Luján",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Huánuco",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-33",
    "chamber": "senate",
    "name": "Íber Antenor Maraví Olarte",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Distrito único nacional",
    "position": 13,
    "gender": "male"
  },
  {
    "id": "senate-34",
    "chamber": "senate",
    "name": "Edyson Humberto Morales Ramírez",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Ayacucho",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-35",
    "chamber": "senate",
    "name": "Percy Herbert Osorio Palpan",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Pasco",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-36",
    "chamber": "senate",
    "name": "Bernardo Jaime Quito Sarmiento",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Distrito único nacional",
    "position": 7,
    "gender": "male"
  },
  {
    "id": "senate-37",
    "chamber": "senate",
    "name": "Andrés Avelino Ramos Huillcas",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Apurímac",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-38",
    "chamber": "senate",
    "name": "Silvana Emperatriz Robles Araujo",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Distrito único nacional",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "senate-39",
    "chamber": "senate",
    "name": "Wilfredo Verano Saravia",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Cusco",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-40",
    "chamber": "senate",
    "name": "Joaquín Yauri Tunque",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Huancavelica",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-41",
    "chamber": "senate",
    "name": "Roger Miguel Astucuri Laura",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Distrito único nacional",
    "position": 5,
    "gender": "male"
  },
  {
    "id": "senate-42",
    "chamber": "senate",
    "name": "Daniel Hugo Barragán Coloma",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Distrito único nacional",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-43",
    "chamber": "senate",
    "name": "Agripina María del Pilar Flores Córdova",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Distrito único nacional",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "senate-44",
    "chamber": "senate",
    "name": "Walter Francisco Gagó Rodríguez",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Distrito único nacional",
    "position": 3,
    "gender": "male"
  },
  {
    "id": "senate-45",
    "chamber": "senate",
    "name": "Juana Guisella Ticona Cohaila",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Tacna",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "senate-46",
    "chamber": "senate",
    "name": "Nora Bonifaz Carmona",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Lima",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "senate-47",
    "chamber": "senate",
    "name": "Carlos David Caballero León",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Distrito único nacional",
    "position": 3,
    "gender": "male"
  },
  {
    "id": "senate-48",
    "chamber": "senate",
    "name": "Flavio Felipe Figallo Rivadeneyra",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Distrito único nacional",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-49",
    "chamber": "senate",
    "name": "Juver Nilson Flores Suárez",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Arequipa",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-50",
    "chamber": "senate",
    "name": "Jorge Octavio Gavidia Rodríguez",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Distrito único nacional",
    "position": 9,
    "gender": "male"
  },
  {
    "id": "senate-51",
    "chamber": "senate",
    "name": "Patricia Milagros Iturregui Byrne",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Distrito único nacional",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "senate-52",
    "chamber": "senate",
    "name": "Susana Flor de María Matute Charún",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Distrito único nacional",
    "position": 6,
    "gender": "female"
  },
  {
    "id": "senate-53",
    "chamber": "senate",
    "name": "María Lourdes Pía Alcorta Suero",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Distrito único nacional",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "senate-54",
    "chamber": "senate",
    "name": "Katherine Milagros Ampuero Meza",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Distrito único nacional",
    "position": 4,
    "gender": "female"
  },
  {
    "id": "senate-55",
    "chamber": "senate",
    "name": "Francisco José Calisto Giampetri",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Lima",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-56",
    "chamber": "senate",
    "name": "María de los Milagros Jackeline Jáuregui Martínez de Aguayo",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Lima",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "senate-57",
    "chamber": "senate",
    "name": "Rafael Bernardo López-Aliaga Carzola",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Distrito único nacional",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "senate-58",
    "chamber": "senate",
    "name": "Estanislao Edgar Mancha Pineda",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Distrito único nacional",
    "position": 9,
    "gender": "male"
  },
  {
    "id": "senate-59",
    "chamber": "senate",
    "name": "Alejandro Muñante Barrios",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Distrito único nacional",
    "position": 3,
    "gender": "male"
  },
  {
    "id": "senate-60",
    "chamber": "senate",
    "name": "Miguel Ángel Velázquez García",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Residentes en el Extranjero",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-1",
    "chamber": "deputies",
    "name": "Mary Bibiana Armenta Valencia",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Arequipa",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-2",
    "chamber": "deputies",
    "name": "Freshman Bruitrón Martínez",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Ayacucho",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-3",
    "chamber": "deputies",
    "name": "Harvey Julio Colchado Huamani",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Lima",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-4",
    "chamber": "deputies",
    "name": "César Augusto Holguín Loaiza",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Cusco",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-5",
    "chamber": "deputies",
    "name": "Indira Isabel Huilca Flores",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Lima",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-6",
    "chamber": "deputies",
    "name": "Bernardino Jair Manrique Olivera",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Lima",
    "position": 27,
    "gender": "male"
  },
  {
    "id": "deputies-7",
    "chamber": "deputies",
    "name": "Ángel Renato Meneses Crispín",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Lima",
    "position": 5,
    "gender": "male"
  },
  {
    "id": "deputies-8",
    "chamber": "deputies",
    "name": "César Augusto Muedas Balbiese",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Junín",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-9",
    "chamber": "deputies",
    "name": "José Miguel Marcelo Salazar",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Áncash",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-10",
    "chamber": "deputies",
    "name": "Helard Bladimir Sonco Villanueva",
    "party": "Ahora Nación",
    "partyId": "ahora-nacion",
    "district": "Puno",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-11",
    "chamber": "deputies",
    "name": "Jaime Américo Abensur Pinasco",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Ucayali",
    "position": 2,
    "gender": "male"
  },
  {
    "id": "deputies-12",
    "chamber": "deputies",
    "name": "Luis Arturo Alegría García",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "San Martín",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-13",
    "chamber": "deputies",
    "name": "Gladys Griselda Andrade Salguero de Álvarez",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lima Provincias",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-14",
    "chamber": "deputies",
    "name": "Rosangella Andrea Barbarán Reyes",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lima",
    "position": 3,
    "gender": "female"
  },
  {
    "id": "deputies-15",
    "chamber": "deputies",
    "name": "Karina Juliza Beteta Rubín",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Huánuco",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-16",
    "chamber": "deputies",
    "name": "Ángel Bruno Bobadilla Galindo",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Callao",
    "position": 2,
    "gender": "male"
  },
  {
    "id": "deputies-17",
    "chamber": "deputies",
    "name": "César Manuel Revilla Villanueva",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Piura",
    "position": 3,
    "gender": "male"
  },
  {
    "id": "deputies-18",
    "chamber": "deputies",
    "name": "Eduardo Enrique Castillo Rivas",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Piura",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-19",
    "chamber": "deputies",
    "name": "Javier Alejandro Castro Cruz",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lambayeque",
    "position": 5,
    "gender": "male"
  },
  {
    "id": "deputies-20",
    "chamber": "deputies",
    "name": "Royser Castro Grandez",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Amazonas",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-21",
    "chamber": "deputies",
    "name": "Rafael Aldo Celiz Castillo",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Tumbes",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-22",
    "chamber": "deputies",
    "name": "Cecilia Isabel Chacón de Vettori",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lima",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-23",
    "chamber": "deputies",
    "name": "Carlos Alberto Domínguez Herrera",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Áncash",
    "position": 4,
    "gender": "male"
  },
  {
    "id": "deputies-24",
    "chamber": "deputies",
    "name": "Pierangeli Daniela Dodero Jovich",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lima",
    "position": 5,
    "gender": "female"
  },
  {
    "id": "deputies-25",
    "chamber": "deputies",
    "name": "Diethell Columbus Murata",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lima",
    "position": 2,
    "gender": "male"
  },
  {
    "id": "deputies-26",
    "chamber": "deputies",
    "name": "Pier Paolo Figari Mendoza",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lima",
    "position": 4,
    "gender": "male"
  },
  {
    "id": "deputies-27",
    "chamber": "deputies",
    "name": "Francisco Javier Gatica Vega",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "San Martín",
    "position": 3,
    "gender": "male"
  },
  {
    "id": "deputies-28",
    "chamber": "deputies",
    "name": "Luzmila María del Carmen Gamarra Pita",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Áncash",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-29",
    "chamber": "deputies",
    "name": "Mery Eliana Infantes Castañeda",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Amazonas",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-30",
    "chamber": "deputies",
    "name": "Leticia Maruja Leyva Baylón",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "La Libertad",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-31",
    "chamber": "deputies",
    "name": "Flor de Jesús Meza Rivera",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lima",
    "position": 7,
    "gender": "female"
  },
  {
    "id": "deputies-32",
    "chamber": "deputies",
    "name": "Liz Huli Mendoza Bernedo",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Residentes en el Extranjero",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-33",
    "chamber": "deputies",
    "name": "Jessica Lizbeth Navas Sánchez",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Ucayali",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-34",
    "chamber": "deputies",
    "name": "Auristela Ana Obando Morgan",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Callao",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-35",
    "chamber": "deputies",
    "name": "Marco Antonio Pacheco Quispe",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lima",
    "position": 6,
    "gender": "male"
  },
  {
    "id": "deputies-36",
    "chamber": "deputies",
    "name": "José Marvin Palma Mendoza",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lambayeque",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-37",
    "chamber": "deputies",
    "name": "Carmela Paucara Paxi",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Piura",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-38",
    "chamber": "deputies",
    "name": "Ana Bertha Patiño Urco",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Junín",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-39",
    "chamber": "deputies",
    "name": "Nary Benvinda Pinasco Montenegro",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Loreto",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-40",
    "chamber": "deputies",
    "name": "Geanmarco Antonio Quezada Castro",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "La Libertad",
    "position": 5,
    "gender": "male"
  },
  {
    "id": "deputies-41",
    "chamber": "deputies",
    "name": "María Candelaria Ramos Rosales",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Tumbes",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-42",
    "chamber": "deputies",
    "name": "César Manuel Vidaurre Floridas",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Loreto",
    "position": 3,
    "gender": "male"
  },
  {
    "id": "deputies-43",
    "chamber": "deputies",
    "name": "Alexander Salas Rivera",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Lima Provincias",
    "position": 2,
    "gender": "male"
  },
  {
    "id": "deputies-44",
    "chamber": "deputies",
    "name": "María Luisa Silupú Inga",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Piura",
    "position": 6,
    "gender": "female"
  },
  {
    "id": "deputies-45",
    "chamber": "deputies",
    "name": "Segundo Senovio Ticlla Rafael",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Cajamarca",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-46",
    "chamber": "deputies",
    "name": "Gilmer Trujillo Zegarra",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "La Libertad",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-47",
    "chamber": "deputies",
    "name": "Jhonn Brayam Valqui Ordoñez",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Pasco",
    "position": 2,
    "gender": "male"
  },
  {
    "id": "deputies-48",
    "chamber": "deputies",
    "name": "Kim Tami Muñoz Yurivilca",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Pasco",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-49",
    "chamber": "deputies",
    "name": "Ana Luisa Yufra Lugo",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Loreto",
    "position": 4,
    "gender": "female"
  },
  {
    "id": "deputies-50",
    "chamber": "deputies",
    "name": "Carlos Alberto Zegarra Sánchez",
    "party": "Fuerza Popular",
    "partyId": "fuerza-popular",
    "district": "Ica",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-51",
    "chamber": "deputies",
    "name": "Marlon Alberto Aguirre Ramos",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Junín",
    "position": 2,
    "gender": "male"
  },
  {
    "id": "deputies-52",
    "chamber": "deputies",
    "name": "Yuli Liliana Ambrosio Domínguez",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Huánuco",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-53",
    "chamber": "deputies",
    "name": "Giannina Iris Avendaño Vilca",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Lima",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-54",
    "chamber": "deputies",
    "name": "Graciela Chipana Condori",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Moquegua",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-55",
    "chamber": "deputies",
    "name": "Remigio Condori Flores",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Puno",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-56",
    "chamber": "deputies",
    "name": "Oswar Elbis Cahuaza Mitivire",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Ucayali",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-57",
    "chamber": "deputies",
    "name": "Héctor Guillén Valencia",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Huancavelica",
    "position": 2,
    "gender": "male"
  },
  {
    "id": "deputies-58",
    "chamber": "deputies",
    "name": "Jessica Sadith Pérez Quispe",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Puno",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-59",
    "chamber": "deputies",
    "name": "Jessica Roxana Guevara Ramírez",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Cajamarca",
    "position": 4,
    "gender": "female"
  },
  {
    "id": "deputies-60",
    "chamber": "deputies",
    "name": "Gabriel Robertino Gonzáles Delgado",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Cajamarca",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-61",
    "chamber": "deputies",
    "name": "James Arturo Holguín Aguirre",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Madre de Dios",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-62",
    "chamber": "deputies",
    "name": "Azucena Isla Rojas",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Loreto",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-63",
    "chamber": "deputies",
    "name": "Luis Ángel Jibaja Ramos",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Cajamarca",
    "position": 5,
    "gender": "male"
  },
  {
    "id": "deputies-64",
    "chamber": "deputies",
    "name": "Analí Márquez Huanca",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Cusco",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-65",
    "chamber": "deputies",
    "name": "Alejandro José Manay Pillaca",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Ayacucho",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-66",
    "chamber": "deputies",
    "name": "Julián Luís Pérez Mallqui",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Cusco",
    "position": 2,
    "gender": "male"
  },
  {
    "id": "deputies-67",
    "chamber": "deputies",
    "name": "Luz Mérida Soto Ferrari",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Apurímac",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-68",
    "chamber": "deputies",
    "name": "Catherin Norma Palomino Casavilca",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Huancavelica",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-69",
    "chamber": "deputies",
    "name": "Amalia Emilia Palomino Pacheco",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Arequipa",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-70",
    "chamber": "deputies",
    "name": "Yenifer Noelia Paredes Navarro",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Cajamarca",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-71",
    "chamber": "deputies",
    "name": "Jesús Pérez Alccahuaman",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Apurímac",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-72",
    "chamber": "deputies",
    "name": "Jacqueline Viviana Tapullima Insapillo",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "San Martín",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-73",
    "chamber": "deputies",
    "name": "Lourdes Marlene Natividad Rivera",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Áncash",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-74",
    "chamber": "deputies",
    "name": "César Hugo Tito Rojas",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Puno",
    "position": 3,
    "gender": "male"
  },
  {
    "id": "deputies-75",
    "chamber": "deputies",
    "name": "Marco Antonio Flores Valdizán",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Huánuco",
    "position": 3,
    "gender": "male"
  },
  {
    "id": "deputies-76",
    "chamber": "deputies",
    "name": "Ernesto Alonzo Zunini Yerrén",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Lambayeque",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-77",
    "chamber": "deputies",
    "name": "Marino Teófilo Lavado Valdivia",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "La Libertad",
    "position": 2,
    "gender": "male"
  },
  {
    "id": "deputies-78",
    "chamber": "deputies",
    "name": "Olver Peña Córdova",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "San Martín",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-79",
    "chamber": "deputies",
    "name": "Pilar Sulca Castillo",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Ayacucho",
    "position": 4,
    "gender": "female"
  },
  {
    "id": "deputies-80",
    "chamber": "deputies",
    "name": "Haydee Celinda Poma Huamani",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Madre de Dios",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-81",
    "chamber": "deputies",
    "name": "Svieta Valia Fernández González",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Tacna",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-82",
    "chamber": "deputies",
    "name": "Juan Amilcar Villanueva Calderón",
    "party": "Juntos por el Perú",
    "partyId": "juntos-por-el-peru",
    "district": "Cajamarca",
    "position": 3,
    "gender": "male"
  },
  {
    "id": "deputies-83",
    "chamber": "deputies",
    "name": "Henry Antonio Albañil Carmona",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Piura",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-84",
    "chamber": "deputies",
    "name": "Edgar Adrián Alvaron de la Cruz",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Áncash",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-85",
    "chamber": "deputies",
    "name": "Dinա Irene Hancco Hancco",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Puno",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-86",
    "chamber": "deputies",
    "name": "Arturo César Eusebio Padilla",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Lima Provincias",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-87",
    "chamber": "deputies",
    "name": "Raúl Jesús Camargo Porta",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Lima",
    "position": 5,
    "gender": "male"
  },
  {
    "id": "deputies-88",
    "chamber": "deputies",
    "name": "Julio César Cabrera Nieto",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Tacna",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-89",
    "chamber": "deputies",
    "name": "Andrea Dayna Medina Stein",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Lima",
    "position": 4,
    "gender": "female"
  },
  {
    "id": "deputies-90",
    "chamber": "deputies",
    "name": "Heber López Letona",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Cusco",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-91",
    "chamber": "deputies",
    "name": "Luis Aurelio Masco Cáceres",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Arequipa",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-92",
    "chamber": "deputies",
    "name": "Máximo Peralta Jorpa",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Junín",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-93",
    "chamber": "deputies",
    "name": "Víctor Eduardo Piñan Mamani",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Lima",
    "position": 3,
    "gender": "male"
  },
  {
    "id": "deputies-94",
    "chamber": "deputies",
    "name": "Jenny Cristina Samanez Gonzáles Vigil",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Lima",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-95",
    "chamber": "deputies",
    "name": "José Ricardo Yataco Torrealva",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "Ica",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-96",
    "chamber": "deputies",
    "name": "Demetrio Flavio Vallqui Calderón",
    "party": "Partido Cívico OBRAS",
    "partyId": "obras",
    "district": "La Libertad",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-97",
    "chamber": "deputies",
    "name": "Rossana Herminia Alayza Maccera",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Lima",
    "position": 8,
    "gender": "female"
  },
  {
    "id": "deputies-98",
    "chamber": "deputies",
    "name": "Jessica Benítez Barrionuevo",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Lima",
    "position": 6,
    "gender": "female"
  },
  {
    "id": "deputies-99",
    "chamber": "deputies",
    "name": "Segundo Juan Castrejón Fernández",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Lambayeque",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-100",
    "chamber": "deputies",
    "name": "Carmen Georgina Duarte Patiño de Pezet",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Junín",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-101",
    "chamber": "deputies",
    "name": "Edwin Espinoza Huillca",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Cusco",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-102",
    "chamber": "deputies",
    "name": "Hilda Judit Fernández de la Torre",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Lima",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-103",
    "chamber": "deputies",
    "name": "Nery Rodolfo Fernández Nina",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Moquegua",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-104",
    "chamber": "deputies",
    "name": "Fernando Alberto García Huby",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Callao",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-105",
    "chamber": "deputies",
    "name": "Édgar Demver González Polar",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Arequipa",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-106",
    "chamber": "deputies",
    "name": "Gloria Charito Hirache Pizarro",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Arequipa",
    "position": 2,
    "gender": "female"
  },
  {
    "id": "deputies-107",
    "chamber": "deputies",
    "name": "Miguel Félix Huamán Cornejo",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Piura",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-108",
    "chamber": "deputies",
    "name": "Nora María Llaque Linares",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "La Libertad",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-109",
    "chamber": "deputies",
    "name": "Nathaly Milagros Molina Soto",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Lima",
    "position": 22,
    "gender": "female"
  },
  {
    "id": "deputies-110",
    "chamber": "deputies",
    "name": "Lila Marianela Prado Vallejos",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Ica",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-111",
    "chamber": "deputies",
    "name": "Luis Eliseo Quispe Candia",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Lima",
    "position": 5,
    "gender": "male"
  },
  {
    "id": "deputies-112",
    "chamber": "deputies",
    "name": "Oscar de Jesús Reto Otero",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Lima",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-113",
    "chamber": "deputies",
    "name": "Milagros Karina Santana Vera",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Lima Provincias",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-114",
    "chamber": "deputies",
    "name": "Romina Alejandra Uribe Sáenz",
    "party": "Partido del Buen Gobierno",
    "partyId": "buen-gobierno",
    "district": "Lima",
    "position": 18,
    "gender": "female"
  },
  {
    "id": "deputies-115",
    "chamber": "deputies",
    "name": "Christian Aranda Vázquez",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Arequipa",
    "position": 5,
    "gender": "male"
  },
  {
    "id": "deputies-116",
    "chamber": "deputies",
    "name": "José Isidro Baella Malca",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Lima",
    "position": 2,
    "gender": "male"
  },
  {
    "id": "deputies-117",
    "chamber": "deputies",
    "name": "Aldo Antonio Bravo Quispe",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Lima",
    "position": 20,
    "gender": "male"
  },
  {
    "id": "deputies-118",
    "chamber": "deputies",
    "name": "Javier José Luis Cipriani Thorne",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Lima",
    "position": 10,
    "gender": "male"
  },
  {
    "id": "deputies-119",
    "chamber": "deputies",
    "name": "María Jessica Córdova Lobatón",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Lambayeque",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-120",
    "chamber": "deputies",
    "name": "Leo Miguel de Paz Lancho",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Lima",
    "position": 24,
    "gender": "male"
  },
  {
    "id": "deputies-121",
    "chamber": "deputies",
    "name": "Diego Alonso Fernández Bazán Calderón",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "La Libertad",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-122",
    "chamber": "deputies",
    "name": "Frank Krklec Torres",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Lima",
    "position": 14,
    "gender": "male"
  },
  {
    "id": "deputies-123",
    "chamber": "deputies",
    "name": "Paola Isabel Martínez Paitan",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Lima",
    "position": 19,
    "gender": "female"
  },
  {
    "id": "deputies-124",
    "chamber": "deputies",
    "name": "Roxana María Rocha Gallegos",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Lima",
    "position": 3,
    "gender": "female"
  },
  {
    "id": "deputies-125",
    "chamber": "deputies",
    "name": "Gustavo Alexander Segura Figueroa",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Lima",
    "position": 4,
    "gender": "male"
  },
  {
    "id": "deputies-126",
    "chamber": "deputies",
    "name": "Carlos Alberto Yalta Sotelo",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Callao",
    "position": 2,
    "gender": "male"
  },
  {
    "id": "deputies-127",
    "chamber": "deputies",
    "name": "Norma Martina Yarrow Lumbreras",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Lima",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-128",
    "chamber": "deputies",
    "name": "Mady Verónica Yonz Núñez",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Ica",
    "position": 1,
    "gender": "female"
  },
  {
    "id": "deputies-129",
    "chamber": "deputies",
    "name": "Felix See Hung Chang Apuy",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Piura",
    "position": 1,
    "gender": "male"
  },
  {
    "id": "deputies-130",
    "chamber": "deputies",
    "name": "Jorge Arturo Zeballos Aponte",
    "party": "Renovación Popular",
    "partyId": "renovacion-popular",
    "district": "Residentes en el Extranjero",
    "position": 1,
    "gender": "male"
  }
];
