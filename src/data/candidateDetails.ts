export type CandidateDetailSectionKey =
  | "education"
  | "trajectory"
  | "contracts"
  | "properties"
  | "debts"
  | "sanctions"
  | "experience";

export type CandidateDetailSection = {
  label: string;
  countLabel: string;
  source: string;
  items: string[];
  emptyText: string;
};

export type CandidateDetail = {
  personId: string;
  candidateId: number;
  rtcName: string;
  sourceUrl: string;
  source: string;
  updatedAtSource: string;
  dni: string;
  age: string;
  region: string;
  postulates: string;
  sections: Record<CandidateDetailSectionKey, CandidateDetailSection>;
};

export const DETAIL_SECTION_ORDER: CandidateDetailSectionKey[] = [
  "education",
  "trajectory",
  "contracts",
  "properties",
  "debts",
  "sanctions",
  "experience",
];

export const CANDIDATE_DETAILS: Record<string, CandidateDetail> = {
  "senate-1": {
    "personId": "senate-1",
    "candidateId": 6066,
    "rtcName": "Jaime Ricardo Delgado Zegarra",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6066",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07755878",
    "age": "69 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "4 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Bachiller - BACHILLER EN DERECHO",
          "UNIVERSIDAD NACIONAL DE SAN AGUSTÍN DE AREQUIPA",
          "Año: 1982",
          "Segunda Especialidad - TITULO DE SEGUNDA ESPECIALIDAD EN DERECHO PUBLICO Y BUEN GOBIERNO",
          "PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ",
          "Año: 2015",
          "Maestría - MAGISTER EN POLITICAS Y PLANIFICACION EN SALUD",
          "UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
          "Año: 2021",
          "Título - ABOGADO",
          "UNIVERSIDAD NACIONAL DE SAN AGUSTÍN DE AREQUIPA",
          "Año: 1983"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "1 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES GENERALES 2011",
          "CONGRESISTA DE LA REPÚBLICA",
          "GANA PERU",
          "LIMA + RESIDENTES EN EL EXTRANJERO",
          "Elegido",
          "Historial de Afiliación",
          "No registra afiliaciones partidarias."
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "8 contrato",
        "source": "Fuente: REINFO (Registro Integral de Formalización Minera)",
        "items": [
          "(8)",
          "RUC: 10077558786",
          "8 contratos",
          "S/ 67,000",
          "UNIVERSIDAD NACIONAL DEL ALTIPLANO",
          "0206120401 RESOLUCION RECTORAL N° 746-2025-R-UNA/DOCENTE VISITANTE/JAIME R. DELGADO ZEGARRA",
          "Monto: S/ 3,000",
          "Código: 2@36421575",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10077558786",
          "UNIVERSIDAD NACIONAL DEL ALTIPLANO",
          "OFICIO 1039-2024-DG-EPG-UNA-PUNO/DOCENTE INVITADO/DELGADO ZEGARRA JAIME RICARDO",
          "Monto: S/ 4,000",
          "Código: 2@32430535",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10077558786",
          "SUPERINTENDENCIA DE TRANSPORTE TERRESTRE DE PERSONAS, CARGA Y MERCANCIAS",
          "SERVICIO DE ABOGADO PARA APOYO LEGAL A LA GERENCIA DE PREVENCIÓN",
          "Monto: S/ 7,000",
          "Código: 2@17896935",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10077558786",
          "SUPERINTENDENCIA DE TRANSPORTE TERRESTRE DE PERSONAS, CARGA Y MERCANCIAS",
          "SERVICIO ESPECIALIZADO EN MATERIA LEGAL PARA EL APOYO EN CAPACITACIONES",
          "Monto: S/ 7,000",
          "Código: 2@17370760",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10077558786",
          "SEGURO SOCIAL DE SALUD",
          "CONTRATACION DE UNA PERSONA NATURAL PARA EL SERVICIO ESPECIALIZADO DE MONITOREO Y EVALUACION DE ESTRATEGIAS PARA LA IMPLANTACION E IMPLEMENTACION DE LA DIRECTIVA PARA LA PROMOCION Y FOMENTO DE LA ALIMENTACION SALUDABLE EN LAS INSTITUCIONES DEL SEGUROSOCIAL DE SALUD - ESSALUD. DEPENDENCIA: GCPS-GERENCIA DE POLITICAS Y NORMAS DE ATENCION INTEGRAL DE SALUD. SOLPED: 10984465 SEGUN LOS TERMINOS DE REFERENCIA.",
          "Monto: S/ 15,000",
          "Código: 2@11855561",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10077558786",
          "SEGURO SOCIAL DE SALUD",
          "CONTRATACIÓN DE SERVICIO DE CONSULTORIA PARA LA ELABORACIÓN DE UN ESTUDIO ESPECIALIZADO QUE DETERMINE LA NECESIDAD DE FOMENTAR Y PROMOVER EL CONSUMO SALUDABLE DE ALIMENTOS Y BEBIDAS EN LAS DEPENDENCIAS DE ESSALUD. SOLPEDIDO : 10964867 DEPENDENCIA: GCO / SEGÚN TERMINOS DE REFERENCIA.",
          "Monto: S/ 14,000",
          "Código: 2@11267444",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10077558786",
          "DEFENSORIA DEL PUEBLO",
          "CONTRATAR LOS SERVICIOS DE UN CONSULTOR PARA QUE PRESTE SERVICIOS EN LA ADJUNTIA PARA EL MEDIO AMBIENTE, SERVICIOS PUBLICOS Y PUEBLOS INDIGENAS, DURANTE EL PERIODO DE 45 DIAS CALENDARIOS - PRODUCTO",
          "Monto: S/ 10,000",
          "Código: 2@8962968",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10077558786",
          "DEFENSORIA DEL PUEBLO",
          "CONTRATAR LOS SERVICIOS DE UN CONSULTOR PARA QUE PRESTE SERVICIOS EN LA ADJUNTIA DEL MEDIO AMBIENTE, SERVICIOS PÚBLICOS Y PUEBLOS INDÍGENAS, DURANTE EL PERIODO DE 60 DIAS CALENDARIOS - PRODUCTO Nº 2",
          "Monto: S/ 7,000",
          "Código: 2@9118970",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10077558786",
          "Derechos Mineros",
          "(0)",
          "No registra derechos mineros en REINFO."
        ],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "1 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(0)",
          "No registra bienes inmuebles.",
          "Bienes muebles (Vehículos)",
          "(1)",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: C8W203",
          "Valor: S/ 10,000",
          "Camioneta — Soy copropietario",
          "Titularidad (Acciones y Participaciones)",
          "(0)",
          "No registra acciones ni participaciones."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "4 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "4 trabajos con 10 años de experiencia aproximadamente",
          "Asesor",
          "Congreso de la República",
          "2024 – 2025",
          "LIMA",
          "Asesor",
          "Defensoría del Pueblo",
          "2021",
          "LIMA",
          "Asesor",
          "Congreso de la República",
          "2020",
          "LIMA",
          "Congresista",
          "Congreso de la República",
          "2011 – 2016",
          "LIMA"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-2": {
    "personId": "senate-2",
    "candidateId": 2,
    "rtcName": "Pablo Alfonso Lopez Chau Nava",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "25331980",
    "age": "75 años",
    "region": "",
    "postulates": "PRESIDENTE DE LA REPÚBLICA",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "4 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Título - ECONOMISTA",
          "UNIVERSIDAD NACIONAL DEL CALLAO",
          "Año: 1981",
          "Bachiller - BACHILLER EN CIENCIAS ECONOMICAS",
          "UNIVERSIDAD NACIONAL DEL CALLAO",
          "Año: 1976",
          "Doctorado - GRADO DE DOCTOR EN ECONOMÍA",
          "UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO",
          "Año: 2005",
          "Maestría - GRADO DE MAESTRO EN ECONOMÍA",
          "UNIVERSIDAD AUTONOMA DE MEXICO",
          "Año: 1985"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "1 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES GENERALES 1995",
          "CONGRESISTA DE LA REPÚBLICA",
          "APERTURA PARA EL DESARROLLO NACIONAL-PS",
          "NACION",
          "No elegido",
          "Historial de Afiliación",
          "AHORA NACION - AN",
          "NACIONAL",
          "05/2023 – Vigente",
          "AFILIADO VÁLIDO",
          "UNION POR EL PERU",
          "NACIONAL",
          "03/2010 – 10/2010"
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "2 contrato",
        "source": "Fuente: REINFO (Registro Integral de Formalización Minera)",
        "items": [
          "(2)",
          "RUC: 10253319807",
          "2 contratos",
          "S/ 10,560",
          "MINISTERIO DE DEFENSA",
          "SERVICIO DE DOCENCIA EN MAESTRIAS - CAEN",
          "Monto: S/ 6,960",
          "Código: 2@12348428",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10253319807",
          "UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
          "CONTRATACION DE UN DOCENTE PARA EL DICTADO DEL CURSO DE SEMINARIO DE TESIS III EN EL DOCTORADO DE UPG-FCE-UNMSM",
          "Monto: S/ 3,600",
          "Código: 1@227816",
          "SERVICIO",
          "Estado: Contratado",
          "Fin: 2008-01-24T05:00:00.000+0000",
          "RUC: 10253319807",
          "Derechos Mineros",
          "(0)",
          "No registra derechos mineros en REINFO."
        ],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "2 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(2)",
          "REGISTRO DE PREDIOS",
          "CALLE ENRIQUE PALACIOS NUM 966 MIRAFLORES - LIMA - LIMA",
          "Recientemente se actualizó la dirección conforme a la información que figura en SUNARP. Dirección correcta: Calle Enrique Palacios 960 Miraflores. El inmueble es un departamento. El valor de autovalúo no se consigna por no contarse con documento que acredite dicho valor al momento de la declaración. Me comprometo a presentarlo en caso de solicitud.",
          "REGISTRO DE PREDIOS",
          "CALLE ENRIQUE PALACIOS NUM 960 MIRAFLORES - LIMA - LIMA",
          "Recientemente se actualizó la dirección conforme a la información que figura en SUNARP. Dirección correcta: Calle Enrique Palacios 966 Miraflores. El inmueble es una cochera. El valor de autovalúo no se consigna por no contarse con documento que acredite dicho valor al momento de la declaración. Me comprometo a presentarlo en caso de solicitud.",
          "Bienes muebles (Vehículos)",
          "(0)",
          "No registra bienes muebles.",
          "Titularidad (Acciones y Participaciones)",
          "(0)",
          "No registra acciones ni participaciones."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "3 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "3 trabajos con 36 años de experiencia aproximadamente",
          "Rector",
          "Universidad Nacional de Ingeniería",
          "2021 – 2025",
          "LIMA",
          "Director de la Escuela de Ingeniería Económica",
          "Universidad Nacional de Ingeniería",
          "2017 – 2019",
          "LIMA",
          "Profesor Principal",
          "Universidad Nacional de Ingeniería",
          "1990 – 2025",
          "LIMA"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-3": {
    "personId": "senate-3",
    "candidateId": 6069,
    "rtcName": "Ruth Luque Ibarra",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6069",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "40204874",
    "age": "46 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "2 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Bachiller - BACHILLER EN DERECHO Y CIENCIAS POLITICAS",
          "UNIVERSIDAD NACIONAL DE SAN ANTONIO ABAD DEL CUSCO",
          "Año: 2001",
          "Título - ABOGADA",
          "UNIVERSIDAD NACIONAL DE SAN ANTONIO ABAD DEL CUSCO",
          "Año: 2003"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "2 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES GENERALES 2016",
          "CONGRESISTA DE LA REPÚBLICA",
          "EL FRENTE AMPLIO POR JUSTICIA, VIDA Y LIBERTAD",
          "CUSCO",
          "No elegido",
          "ELECCIONES GENERALES 2021",
          "CONGRESISTA DE LA REPÚBLICA",
          "JUNTOS POR EL PERU",
          "CUSCO",
          "Elegido",
          "Historial de Afiliación",
          "No registra afiliaciones partidarias."
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "4 contrato",
        "source": "Fuente: REINFO (Registro Integral de Formalización Minera)",
        "items": [
          "(4)",
          "RUC: 10402048749",
          "4 contratos",
          "S/ 58,000",
          "MINISTERIO DE JUSTICIA Y DERECHOS HUMANOS",
          "Contratar un servicio en materia legal a fin de revisar los expedientes administrativos que con",
          "Monto: S/ 14,000",
          "Código: 2@14027249",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10402048749",
          "MINISTERIO DE JUSTICIA Y DERECHOS HUMANOS",
          "PS N° 81 - SERVICIO DE ASISTENCIA TECNICA LEGAL - CNCV",
          "Monto: S/ 14,000",
          "Código: 2@13773727",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10402048749",
          "PROGRAMA PARA EL MEJORAMIENTO Y AMPLIACION DE LOS SERVICIOS DEL CENTRO DE EMPLEO FORTALECE PERU",
          "PAGO DEL SERVICIO DE CONSULTORIA PARA LA SISTEMATIZACION DE ACTIVIDADES EXTRAMURALES REALIZADAS EN EL PERIODO 2018 2019 EN EL AMBITO DE LAS REGIONES DE AREQUIPA ICA LAMBAYEQUE LA LIBERTAD PIURA SAN MARTIN Y EN LIMA METROPOLITANA",
          "Monto: S/ 10,000",
          "Código: 2@13721864",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10402048749",
          "PROGRAMA PARA EL MEJORAMIENTO Y AMPLIACION DE LOS SERVICIOS DEL CENTRO DE EMPLEO FORTALECE PERU",
          "SERVICIO DE CONSULTORIA PARA LA SISTEMATIZACION DE ACTIVIDADES EXTRAMURALES REALIZADAS EN EL PERIODO 2018 2019 EN EL AMBITO DE LAS REGIONES DE AREQUIPA ICA LAMBAYEQUE LA LIBERTAD PIURA SAN MARTIN Y EN LIMA METROPOLITANA SEGUN OFICIO N 1672 2019.",
          "Monto: S/ 20,000",
          "Código: 2@13151756",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10402048749",
          "Derechos Mineros",
          "(0)",
          "No registra derechos mineros en REINFO."
        ],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "3 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(3)",
          "REGISTRO DE PREDIOS",
          "URB VELASCO ASTETE CUSCO - CUSCO - CUSCO",
          "Anticipo de herencia. El valor de autovalúo no se consigna por no contar con el documento físico al momento de la declaración.",
          "REGISTRO DE PREDIOS",
          "AVENIDA MANUEL CIPRIANO DULANTO NUM 1213-D19 DEPOSIT N° 19 - SOTANO 2 URB COLMENARES PUEBLO LIBRE - LIMA - LIMA",
          "Autovalúo: S/ 7,000",
          "Cancelado",
          "REGISTRO DE PREDIOS",
          "AVENIDA MANUEL CIPRIANO DULANTO NUM 1213-1001 DPTO N° 1001 - DECIMO PISO URB COLMENARES PUEBLO LIBRE - LIMA - LIMA",
          "Autovalúo: S/ 394,000",
          "Crédito hipotecario adquirido 2020.",
          "Bienes muebles (Vehículos)",
          "(0)",
          "No registra bienes muebles.",
          "Titularidad (Acciones y Participaciones)",
          "(0)",
          "No registra acciones ni participaciones."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "3 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "3 trabajos con 13 años de experiencia aproximadamente",
          "Congresista",
          "Congreso de la República",
          "2021 – 2025",
          "LIMA",
          "Asesora",
          "Congreso de la República",
          "2016 – 2021",
          "LIMA",
          "Abogada - Directora Ejecutiva",
          "Derechos Humanos sin Fronteras",
          "2013 – 2016",
          "CUSCO"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-4": {
    "personId": "senate-4",
    "candidateId": 6065,
    "rtcName": "Mirtha Esther Vasquez Chuquilin",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6065",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "26705695",
    "age": "51 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "3 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Título - ABOGADO",
          "UNIVERSIDAD NACIONAL DE CAJAMARCA",
          "Año: 1999",
          "Bachiller - BACHILLER EN DERECHO",
          "UNIVERSIDAD NACIONAL DE CAJAMARCA",
          "Año: 1998",
          "Maestría - MAGISTER EN GERENCIA SOCIAL",
          "PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ",
          "Año: 2013"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "1 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES CONGRESALES EXTRAORDINARIAS 2020",
          "CONGRESISTA DE LA REPÚBLICA",
          "EL FRENTE AMPLIO POR JUSTICIA, VIDA Y LIBERTAD",
          "CAJAMARCA",
          "Elegido",
          "Historial de Afiliación",
          "No registra afiliaciones partidarias."
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "5 contrato",
        "source": "Fuente: REINFO (Registro Integral de Formalización Minera)",
        "items": [
          "(5)",
          "RUC: 10267056957",
          "5 contratos",
          "S/ 25,920",
          "UNIVERSIDAD NACIONAL SAN CRISTOBAL DE HUAMANGA",
          "SERVICIO DE DOCENCIA SOLICITADO POR LA ESCUELA DE POSGRADO ASIGNATURA DE-606",
          "Monto: S/ 5,760",
          "Código: 2@38040316",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10267056957",
          "UNIVERSIDAD NACIONAL SAN CRISTOBAL DE HUAMANGA",
          "SERVICIO DE DOCENCIA SOLICITADO POR LA ESCUELA DE POSGRADO ASIGNATURA DE-602",
          "Monto: S/ 5,760",
          "Código: 2@37569238",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10267056957",
          "UNIVERSIDAD NACIONAL DE CAJAMARCA",
          "POR LA CONTRATACIÓN DE UN DOCENTE PARA DICTAR EL CURSO DE JUSTICIA PENAL Y JUSTICIA COMUNAL, EN EL PROGRAMA DE MAESTRÍA, MENCIÓN: DERECHO PENAL Y CRIMINOLOGÍA GRUPO: \"A\", DE LA UNIDAD DE POSGRADO - FACULTAD DE DERECHO Y CIENCIAS POLÍTICAS DE LA ESCUELA DE POSGRADO DE LA UNIVERSIDAD NACIONAL DE CAJAMARCA. PLAZO DE EJECUCIÓN DEL SERVICIO: DEL 14 DE ENERO AL 05 DE FEBRERO DEL 2023",
          "Monto: S/ 4,800",
          "Código: 2@24846448",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10267056957",
          "UNIVERSIDAD NACIONAL DE CAJAMARCA",
          "SERVICIO POR DICTADO EL CURSO JUSTICIA PENAL Y JUSTICIA COMUNAL, CICLO 2021 - II, PROGRAMA DE MAESTRÍA EN CIENCIAS, MENCION DERECHO PENAL Y CRIMINOLOGÍA DE LA ESCUELA DE POSGRADO DE LA UNIVERSIDAD NACIONAL DE CAJAMARCA.",
          "Monto: S/ 4,800",
          "Código: 2@21523845",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10267056957",
          "UNIVERSIDAD NACIONAL DE CAJAMARCA",
          "DICTADO DE LA ASIGNATURA DE LEGISLACIÓN AMBIENTAL,IV CICLO GESTION AMBIENTAL. EPG SEDE JAEN",
          "Monto: S/ 4,800",
          "Código: 2@16787996",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10267056957",
          "Derechos Mineros",
          "(0)",
          "No registra derechos mineros en REINFO."
        ],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "4 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(3)",
          "REGISTRO DE PREDIOS",
          "PASAJE ARZOBISPO TOVAR NUM 120 FUNDO OYAGUE MAGDALENA DEL MAR - LIMA - LIMA",
          "Autovalúo: S/ 656,955.58",
          "Valor original en dólares que aparece en escritura pública: U$D 195,000.00. Convertido a soles con tipo de cambio de 3.37 (SBS 18/12). Se coloca el autovalúo como valor referencial del predio.",
          "REGISTRO DE PREDIOS",
          "JIRON CAMILO BLAS NUM 148 URB HORACIO ZEBALLOS GAMEZ CAJAMARCA - CAJAMARCA - CAJAMARCA",
          "Autovalúo: S/ 61,758",
          "Se coloca el autovalúo como valor referencial del predio.",
          "REGISTRO DE PREDIOS",
          "AVENIDA GENERAL ANDRES DE SANTA CRUZ NUM 367 DPTO N°902 - NOVENO PISO URB DEL FUNDO JESÚS MARÍA JESUS MARIA - LIMA - LIMA",
          "Autovalúo: S/ 102,494.3",
          "Se coloca el autovalúo como valor referencial del predio.",
          "Bienes muebles (Vehículos)",
          "(1)",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: M3H552",
          "Valor: S/ 45,700",
          "Automovil Chevrolet Sonic 2013",
          "Titularidad (Acciones y Participaciones)",
          "(0)",
          "No registra acciones ni participaciones."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "1 deudas",
        "source": "Fuente: SLCP (Sistema de Licencias de Conducir por Puntos) y SCPPP (Sistema de Consulta de Papeletas Por Puntos)",
        "items": [
          "Deudas alimentarias",
          "No registra deudas alimentarias.",
          "Deudas judiciales",
          "No registra deudas judiciales.",
          "Infracciones de tránsito",
          "Categoría: AI",
          "Licencia Vencida",
          "Vence: 31/03/2022",
          "Puntos acumulados: 0",
          "Faltas graves: 0",
          "Faltas muy graves: 0",
          "Papeletas: 1",
          "L01",
          "Leve",
          "Dejar mal estacionado el vehículo en lugares permitidos",
          "SAT CAJAMARCA",
          "N° 079732-11",
          "Fecha: 08/08/2012",
          "5 puntos"
        ],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "5 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "5 trabajos con 6 años de experiencia aproximadamente",
          "Asesor legal",
          "ONG Grufides",
          "2023 – 2025",
          "CAJAMARCA",
          "Docente",
          "Universidad de Ciencias y Humanidades",
          "2023 – 2025",
          "LIMA",
          "Docente",
          "Pontificia Universidad Católica del Perú",
          "2022 – 2023",
          "LIMA",
          "Presidenta del Consejo de Ministros",
          "Presidencia del Consejo de Ministros",
          "2021 – 2022",
          "LIMA",
          "Congresista de la República",
          "Congreso de la República",
          "2020 – 2021",
          "LIMA"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-5": {
    "personId": "senate-5",
    "candidateId": 7463,
    "rtcName": "Alejandro Aurelio Aguinaga Recuenco",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7463",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "08236035",
    "age": "76 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "2 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Título - MEDICO CIRUJANO",
          "UNIVERSIDAD NACIONAL FEDERICO VILLARREAL",
          "Bachiller - BACHILLER EN MEDICINA",
          "UNIVERSIDAD NACIONAL FEDERICO VILLARREAL"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "3 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES GENERALES 2006",
          "CONGRESISTA DE LA REPÚBLICA",
          "ALIANZA POR EL FUTURO",
          "LAMBAYEQUE",
          "Elegido",
          "ELECCIONES GENERALES 2011",
          "CONGRESISTA DE LA REPÚBLICA",
          "FUERZA 2011",
          "LAMBAYEQUE",
          "Elegido",
          "ELECCIONES GENERALES 2021",
          "CONGRESISTA DE LA REPÚBLICA",
          "FUERZA POPULAR",
          "LAMBAYEQUE",
          "Elegido",
          "Historial de Afiliación",
          "FUERZA POPULAR",
          "NACIONAL",
          "07/2009 – Vigente",
          "AFILIADO VÁLIDO"
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "9 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(3)",
          "OTROS 100% BIEN PROPIO DEL CONYUGUE O CONCUBINO(A)",
          "CALLE MIROQUESADA NRO. 1048 SAN ISIDRO, PERÚ, LIMA, SAN ISIDRO",
          "Autovalúo: S/ 23,689",
          "EN AMBOS VALORES SE CONSIGNAN EL VALOR DE AUTOVALUO.",
          "OTROS 100% BIEN PROPIO DEL CONYUGUE O CONCUBINO (A)",
          "CALLE MIROQUESADA NRO. 1050 SAN ISIDRO, PERÚ, LIMA, SAN ISIDRO",
          "Autovalúo: S/ 16,354",
          "EN AMBOS VALORES SE CONSIGNAN EL VALOR DE AUTOVALUO.",
          "CASA 100% BIEN PROPIO DEL CONYUGUE O CONCUBINO (A)",
          "CALLE MORALLES DE LA TORRE NRO.147 SAN ISIDRO, PERÚ, LIMA, SAN ISIDRO",
          "Autovalúo: S/ 201,077",
          "EN AMBOS VALORES SE CONSIGNAN EL VALOR DE AUTOVALUO.",
          "Bienes muebles (Vehículos)",
          "(4)",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: A5A539",
          "Valor: S/ 29,000",
          "AUTOMÁTICA, COLOR AZUL, MODELO CRUZE LS 1.8, AÑO 2010 — 100% BIEN PROPIO DEL DECLARANTE. EL VALOR CONSIGNADO ES EL ESTIMADO POR EL CANDIDATO.",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: BLG867",
          "Valor: S/ 58,000",
          "MECÁNICA, MARCA RENAULT, MODELO NEW OROCH, AÑO 2022 — 100% BIEN PROPIO DEL DECLARANTE. EL VALOR CONSIGNADO ES EL ESTIMADO POR EL CANDIDATO.",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: CNW629",
          "Valor: S/ 130,000",
          "AUTOMÁTICA, MARCA MAZDA, MODELO CX-5 4X22.0 ATFULL, AÑO 2025 — 100% SOCIEDAD CONYUGAL, CAMIONETA ADQUIRIDA A TRAVES DEL SISTEMA COMERCIAL PANDERO. EL VALOR CONSIGNADO ES EL ESTIMADO POR EL CANDIDATO.",
          "AUTOMOVIL/STATION WAGOM",
          "Placa: LG5250",
          "MECANICA, AÑO 1967 — LA PARTIDA REGISTRAL 50530094, CONSIGNA ANOTACIÓN DE VEHICULO ROBADO.",
          "Titularidad (Acciones y Participaciones)",
          "(2)",
          "NEGOCIACION AGRICOLA GANADERA LA PARED S.A",
          "Acciones",
          "Cantidad: 195,000,000",
          "Valor: S/ 1",
          "TENGO EL 75% DEL PORCENTAJE TOTAL DE LAS ACCIONES DE LA EMPRESA, LA CUAL EQUIVALE A 1'950.000.00 SOLES",
          "CLINICA INDEPENDENCIA S.A.",
          "Acciones",
          "Cantidad: 10",
          "Valor: S/ 1",
          "EL TOTAL DEL VALOR DE LAS ACCIONES ES S/.10.00, CON PARTIDA REGISTRAL N° 00365175"
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "2 deudas",
        "source": "Fuente: SLCP (Sistema de Licencias de Conducir por Puntos) y SCPPP (Sistema de Consulta de Papeletas Por Puntos)",
        "items": [
          "Deudas alimentarias",
          "No registra deudas alimentarias.",
          "Deudas judiciales",
          "No registra deudas judiciales.",
          "Infracciones de tránsito",
          "Categoría: AI",
          "Licencia Vigente",
          "Vence: 24/11/2027",
          "Puntos acumulados: 70",
          "Faltas graves: 1",
          "Faltas muy graves: 1",
          "Papeletas: 2",
          "G11",
          "Grave",
          "Conducir o estacionar sobre islas de tráfico, jardines o bermas",
          "SAT LIMA",
          "N° VP00431067",
          "Fecha: 15/11/2024",
          "20 puntos",
          "M20a",
          "Muy Grave",
          "Superar el límite máximo de velocidad establecido hasta en 10 km/h adicionales",
          "SAT LIMA",
          "N° E3442459",
          "Fecha: 05/01/2023",
          "50 puntos"
        ],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "3 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "3 trabajos con 40 años de experiencia aproximadamente",
          "CONGRESISTA",
          "CONGRESO DE LA REPÚBLICA",
          "2021 – 2025",
          "LIMA",
          "DOCENTE",
          "UNIVERSIDAD CIENTÍFICA DEL SUR",
          "2019 – 2020",
          "LIMA",
          "MÉDICO ESPECIALISTA",
          "HOSPITAL NACIONAL ARZOBISPO LOAYZA",
          "1986 – 2020",
          "LIMA"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-6": {
    "personId": "senate-6",
    "candidateId": 7487,
    "rtcName": "Jose Berley Arista Arbildo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7487",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "06717199",
    "age": "66 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "1 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Bachiller - BACHILLER EN CIENCIAS SOCIALES ECONOMIA",
          "PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ",
          "Año: 1983"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "2 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES REGIONALES Y MUNICIPALES 2010",
          "PRESIDENTE REGIONAL",
          "ALIANZA REGIONAL JUNTOS POR AMAZONAS",
          "AMAZONAS",
          "No elegido",
          "SEGUNDA VUELTA ELECCIONES REGIONALES 2010",
          "PRESIDENTE REGIONAL",
          "ALIANZA REGIONAL JUNTOS POR AMAZONAS",
          "AMAZONAS",
          "Elegido",
          "Historial de Afiliación",
          "ALIANZA REGIONAL JUNTOS POR AMAZONAS",
          "REGIONAL",
          "05/2010 – 06/2014",
          "AFILIACIÓN CANCELADA"
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "6 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(1)",
          "REGISTRO DE PREDIOS",
          "CALLE PIRULIN MZ K LOTE 2 URB PARCELACION SHANGRI-LA, SEGUNDA ETAPA PUENTE PIEDRA - LIMA - LIMA",
          "Esta partida registral se ha cerrado por haberse subdividido en dos partidas: En la Partida 15005591, Asiento 3, se puede verificar que transferí la propiedad del inmueble. En la Partida 15005592, Asiento 3, se puede verificar que transferí la propiedad del inmueble.",
          "Bienes muebles (Vehículos)",
          "(4)",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: BNL693",
          "Valor: S/ 11,000",
          "Auto Datsun 1974",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: A1A591",
          "Honda CRV, color negro crystal, modelo 2010. — En SUNARP se puede verificar que hay una anotación de robo vigente.",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: D6J716",
          "Valor: S/ 8,500",
          "Foton, modelo Ollin, color plata, modelo 2012.",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: AKM547",
          "Valor: S/ 53,000",
          "Camioneta Toyota RAV, modelo 2017, color blanco.",
          "Titularidad (Acciones y Participaciones)",
          "(1)",
          "Inmobiliaria Villa Paris S. A. C.",
          "Acciones",
          "Cantidad: 49,873",
          "Valor: S/ 1",
          "El valor total de las acciones es de 49873 soles."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "3 deudas",
        "source": "Fuente: SLCP (Sistema de Licencias de Conducir por Puntos) y SCPPP (Sistema de Consulta de Papeletas Por Puntos)",
        "items": [
          "Deudas alimentarias",
          "No registra deudas alimentarias.",
          "Deudas judiciales",
          "No registra deudas judiciales.",
          "Infracciones de tránsito",
          "Categoría: AI",
          "Licencia Vigente",
          "Vence: 29/08/2031",
          "Puntos acumulados: 0",
          "Faltas graves: 2",
          "Faltas muy graves: 0",
          "Papeletas: 3",
          "G02",
          "Grave",
          "No hacer señales ni tomar precauciones para girar o detener el vehículo",
          "MUNICIPALIDAD DE CORONEL PORTILLO",
          "N° 093675",
          "Fecha: 10/01/2023",
          "40 puntos",
          "Pendiente de Pago",
          "L01",
          "Leve",
          "Dejar mal estacionado el vehículo en lugares permitidos",
          "MUNICIPALIDAD DE CORONEL PORTILLO",
          "N° 011906",
          "Fecha: 31/03/2020",
          "5 puntos",
          "Pendiente de Pago",
          "G57",
          "Grave",
          "No respetar las señales de tránsito no demarcadas o temporales",
          "MUNICIPALIDAD DE CORONEL PORTILLO",
          "N° 003420",
          "Fecha: 20/02/2020",
          "20 puntos",
          "Pendiente de Pago"
        ],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "5 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "5 trabajos con 9 años de experiencia aproximadamente",
          "Ministro de Estado",
          "Ministerio de Economía y Finanzas",
          "2024 – 2025",
          "LIMA",
          "Consultor",
          "Corporación Andina de Fomento",
          "2018 – 2021",
          "LIMA",
          "Ministro de Estado",
          "Ministerio de Agricultura y Riego",
          "2018",
          "LIMA",
          "Asesor",
          "Ministerio de Economía y Finanzas",
          "2016 – 2017",
          "LIMA",
          "Consultor",
          "Ministerio de Educación",
          "2015 – 2016",
          "LIMA"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-7": {
    "personId": "senate-7",
    "candidateId": 6242,
    "rtcName": "Cesar Augusto Astudillo Salcedo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6242",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "10307948",
    "age": "65 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "6 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Maestría - MAESTRO EN ADMINISTRACION",
          "UNIVERSIDAD ALAS PERUANAS S.A.",
          "Año: 2008",
          "Maestría - MAESTRO EN CIENCIAS MILITARES PLANEAMIENTO ESTRATÉGICO Y TOMA DE DECISIONES",
          "ESCUELA SUPERIOR DE GUERRA DEL EJÉRCITO",
          "Año: 2015",
          "Título - INGENIERO DE SISTEMAS E INFORMATICA",
          "UNIVERSIDAD ALAS PERUANAS S.A.",
          "Año: 2003",
          "Bachiller - BACHILLER EN INGENIERIA DE SISTEMAS E INFORMATICA",
          "UNIVERSIDAD ALAS PERUANAS S.A.",
          "Año: 2003",
          "Bachiller - BACHILLER EN CIENCIAS MILITARES",
          "ESCUELA MILITAR DE CHORRILLOS “CORONEL FRANCISCO BOLOGNESI”",
          "Año: 2008",
          "Doctorado - DOCTOR EN DESARROLLO Y SEGURIDAD ESTRATÉGICA",
          "CENTRO DE ALTOS ESTUDIOS NACIONALES - CAEN",
          "Año: 2024"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "17 contrato",
        "source": "Fuente: REINFO (Registro Integral de Formalización Minera)",
        "items": [
          "(17)",
          "RUC: 17252835466",
          "17 contratos",
          "S/ 60,570",
          "MINISTERIO DE DEFENSA - CENTRO DE ALTOS ESTUDIOS NACIONALES - ESCUELA DE POSGRADO",
          "SEMINARIO DE INTEGRACION 07",
          "Monto: S/ 270",
          "Código: 2@37256410",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "MINISTERIO DE DEFENSA - CENTRO DE ALTOS ESTUDIOS NACIONALES - ESCUELA DE POSGRADO",
          "SEMINARIO DE INTEGRACION 02.",
          "Monto: S/ 270",
          "Código: 2@37256403",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "EJERCITO PERUANO",
          "CONTRATACIÓN DEL SERVICIO DE CAPACITACIÓN EN DOCENCIA DE LA ASIGNATURA DE \"REALIDAD NACIONAL\" A DICTARSE SESENTA Y CUATRO (64) A LOS SEÑORES OFICIALES ESTUDIANTES DE LA SUB LINEA DE CARRERA A TRAVES DEL PROGRAMA DENOMINADO \"GESTIÓN DE OPERACIONES\" DEINFORMACIÓN EN EL MARCO DEL LXIX PROGRAMA DE COMANDO Y ESTADO MAYOR (LXIX PCEM) QUE CONDUCE LA ESGE-EPG",
          "Monto: S/ 6,400",
          "Código: 2@36373326",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "MINISTERIO DE DEFENSA - CENTRO DE ALTOS ESTUDIOS NACIONALES - ESCUELA DE POSGRADO",
          "SERVICIO DE DOCENCIA EN EL PROGRAMA DE VIII MAESTRÍA EN GESTIÓN DEL RIESGO DE DESASTRES",
          "Monto: S/ 4,160",
          "Código: 2@35603972",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "MINISTERIO DE DEFENSA - CENTRO DE ALTOS ESTUDIOS NACIONALES - ESCUELA DE POSGRADO",
          "SERVICIO DE DOCENCIA EN EL PROGRAMA DE LXXV MAESTRIA EN DESARROLLO Y DEFENSA NACIONAL TURNO NOCHE.",
          "Monto: S/ 6,240",
          "Código: 2@35603327",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "MINISTERIO DE DEFENSA - CENTRO DE ALTOS ESTUDIOS NACIONALES - ESCUELA DE POSGRADO",
          "SERVICIO DE DOCENCIA EN EL PROGRAMA DE XVI MAGP-DN AULA \"B\"",
          "Monto: S/ 4,160",
          "Código: 2@35603322",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "MINISTERIO DE DEFENSA - CENTRO DE ALTOS ESTUDIOS NACIONALES - ESCUELA DE POSGRADO",
          "SERVICIO DE DOCENCIA EN EL PROGRAMA DE VII MAESTRIA EN GESTION DEL RIESGO DE DESASTRES",
          "Monto: S/ 8,320",
          "Código: 2@34408031",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "MINISTERIO DE DEFENSA - CENTRO DE ALTOS ESTUDIOS NACIONALES - ESCUELA DE POSGRADO",
          "SERVICIO DE DOCENCIA EN EL PROGRAMA DE LXXV MAESTRÍA EN DESARROLLO Y DEFENSA NACIONAL - TURNO NOCHE",
          "Monto: S/ 6,240",
          "Código: 2@34408017",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "EJERCITO PERUANO",
          "SERVICIO DE CAPACITACION",
          "Monto: S/ 1,760",
          "Código: 2@34767446",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "MINISTERIO DE DEFENSA - CENTRO DE ALTOS ESTUDIOS NACIONALES - ESCUELA DE POSGRADO",
          "SERVICIO DE DOCENCIA EN EL PROGRAMA DE LXXV MAESTRÍA EN DESARROLLO Y DEFENSA NACIONAL - TURNO DIA",
          "Monto: S/ 6,240",
          "Código: 2@34408011",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "MINISTERIO DE DEFENSA - CENTRO DE ALTOS ESTUDIOS NACIONALES - ESCUELA DE POSGRADO",
          "SERVICIO DE DOCENCIA EN EL SEMINARIO \"RETOS Y DESAFIOS DE LA DEFENSA NACIONAL FRENTE AL TID EN LA ASIGNATURA DE PROBLEMÁTICA DEL TID EN LA TRIPLE FRONTERA Y EL PUTUMAYO .",
          "Monto: S/ 450",
          "Código: 2@32778812",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "EJERCITO PERUANO",
          "SERVICIO DE CAPACITACION",
          "Monto: S/ 2,560",
          "Código: 2@30361623",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "MINISTERIO DE DEFENSA",
          "HT 1648429 SEGUN RD N°56-2024-CAEN-EPG, CONTRATAR LOS SERVICIOS DE UNA PERSONA NATURAL, PARA DICTADO DE CLASES EN LA ASIGNATURA DE: SEGURIDAD NACIONAL, EN EL PROGRAMA DE LA LXXIV MAESTRIA EN DESARROLLO Y DEFENSA NACIONAL- TURNO MAÑANA",
          "Monto: S/ 6,240",
          "Código: 2@30161356",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "EJERCITO PERUANO",
          "SERV. DE CAPACITACION",
          "Monto: S/ 1,000",
          "Código: 2@29503028",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "EJERCITO PERUANO",
          "SERV. DE CAPACITACION",
          "Monto: S/ 1,600",
          "Código: 2@29440331",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "MINISTERIO DE DEFENSA",
          "HT 1465473 SERVICIO DE DOCENCIA EN LA ASIGNATURA DE REALIDAD NACIONAL EN EL PROGRAMA DE LA XV MAESTRIA EN",
          "Monto: S/ 4,160",
          "Código: 2@25422648",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "MINISTERIO DE DEFENSA",
          "HT 1464220 SEGUN RD N°22-2023-ESCOFFAA-ESCAC CONTRATACION DE PERSONA NATURAL PARA SERVICIO DE DOCENCIA EN EL XX PCEMC Y XI PAIC.",
          "Monto: S/ 500",
          "Código: 2@25112853",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 17252835466",
          "Derechos Mineros",
          "(0)",
          "No registra derechos mineros en REINFO."
        ],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "3 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(0)",
          "No registra bienes inmuebles.",
          "Bienes muebles (Vehículos)",
          "(3)",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: 13048A",
          "Valor: S/ 30,334.5",
          "Moto lineal marca Harley Davidson — Año 2012. El valor de adquisición es de $9,000. Se ha realizado la conversión a soles con el tipo de cambio SUNAT del 11 de diciembre.",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: CNE036",
          "Valor: S/ 61,245.09",
          "Camioneta Suzuki del año 2024, modelo 2025. — El valor de adquisición es de $18,170.92. Se ha realizado la conversión a soles con el tipo de cambio SUNAT del 11 de diciembre.",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: C60988",
          "Valor: S/ 6,500",
          "Moto lineal marca Honda 750 — Año 2003. Valor de adquisición.",
          "Titularidad (Acciones y Participaciones)",
          "(0)",
          "No registra acciones ni participaciones."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "4 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "4 trabajos con 8 años de experiencia aproximadamente",
          "Jefe",
          "Comando Conjunto de las FFAA",
          "2018 – 2021",
          "LIMA",
          "Comandante General",
          "Ejército del Perú",
          "2017 – 2018",
          "LIMA",
          "Inspector",
          "Ejército del Perú",
          "2016 – 2017",
          "LIMA",
          "Comandante",
          "Ejército del Perú",
          "2014 – 2015",
          "CUSCO"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-8": {
    "personId": "senate-8",
    "candidateId": 6239,
    "rtcName": "Martha Gladys Chavez Cossio",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6239",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07960843",
    "age": "73 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "2 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Bachiller - BACHILLER EN DERECHO",
          "PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ",
          "Año: 1981",
          "Título - ABOGADO",
          "PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ",
          "Año: 1983"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "7 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES CONGRESALES EXTRAORDINARIAS 2020",
          "CONGRESISTA DE LA REPÚBLICA",
          "FUERZA POPULAR",
          "LIMA + RESIDENTES EN EL EXTRANJERO",
          "Elegido",
          "ELECCIONES CONGRESO CONSTITUYENTE DEMOCRATICO 1992",
          "CONGRESISTA CONSTITUYENTE",
          "ALIANZA NUEVA MAYORIA - CAMBIO 90",
          "NACION",
          "Elegido",
          "ELECCIONES GENERALES 1995",
          "CONGRESISTA DE LA REPÚBLICA",
          "CAMBIO 90 - NUEVA MAYORIA",
          "NACION",
          "Elegido",
          "ELECCIONES GENERALES 2000",
          "CONGRESISTA DE LA REPÚBLICA",
          "ALIANZA ELECTORAL PERU 2000",
          "NACION",
          "Elegido",
          "ELECCIONES GENERALES 2001",
          "CONGRESISTA DE LA REPÚBLICA",
          "ALIANZA ELECTORAL CAMBIO 90 - NUEVA MAYORIA",
          "LIMA",
          "Elegido",
          "ELECCIONES GENERALES 2006",
          "PRESIDENTE DE LA REPÚBLICA",
          "ALIANZA POR EL FUTURO",
          "NACION",
          "No elegido",
          "ELECCIONES GENERALES 2011",
          "CONGRESISTA DE LA REPÚBLICA",
          "FUERZA 2011",
          "LIMA + RESIDENTES EN EL EXTRANJERO",
          "Elegido",
          "Historial de Afiliación",
          "FUERZA POPULAR",
          "NACIONAL",
          "09/2020 – Vigente",
          "AFILIADO VÁLIDO",
          "NUEVA MAYORIA",
          "NACIONAL",
          "01/2005 – 07/2012"
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "5 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(2)",
          "CASA",
          "MATIER 655, SAN BORJA, LIMA",
          "Autovalúo: S/ 291,120.28",
          "Los valores consignados corresponden al valor del autovalúo del año 2025.",
          "CASA",
          "LOTE 30, KM 115. PANAMERICANA SUR, ASIA, CAÑETE.",
          "Autovalúo: S/ 98,697.33",
          "Los valores consignados corresponden al valor del autovalúo del año 2025.",
          "Bienes muebles (Vehículos)",
          "(3)",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: AJR283",
          "Valor: S/ 30,000",
          "CAMIONETA HONDA CRV",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: NG97361",
          "Valor: S/ 500",
          "Motocicleta — Ha sido donada, en tramite de inscripción.",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: C0G165",
          "Valor: S/ 35,000",
          "CAMIONETA JEEP CHEROKEE",
          "Titularidad (Acciones y Participaciones)",
          "(0)",
          "No registra acciones ni participaciones."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "5 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "5 trabajos con 19 años de experiencia aproximadamente",
          "Asesor",
          "Congreso de la República",
          "2021 – 2025",
          "LIMA",
          "Congresista de la República",
          "Congreso de la República",
          "2020 – 2021",
          "LIMA",
          "Asesor",
          "Congreso de la República",
          "2016 – 2020",
          "LIMA",
          "Congresista de la República",
          "Congreso de la República",
          "2011 – 2016",
          "LIMA",
          "Docente",
          "Universidad Privada San Juan Bautista",
          "2007 – 2019",
          "LIMA"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-9": {
    "personId": "senate-9",
    "candidateId": 7445,
    "rtcName": "Nilza Merly Chacon Trujillo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7445",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "32971154",
    "age": "50 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "2 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Bachiller - BACHILLER EN FARMACIA Y BIOQUIMICA",
          "UNIVERSIDAD LOS ÁNGELES DE CHIMBOTE",
          "Año: 2002",
          "Título - QUIMICO FARMACEUTICO",
          "UNIVERSIDAD LOS ÁNGELES DE CHIMBOTE",
          "Año: 2002"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "2 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES GENERALES 2016",
          "CONGRESISTA DE LA REPÚBLICA",
          "PERUANOS POR EL KAMBIO",
          "ANCASH",
          "No elegido",
          "ELECCIONES GENERALES 2021",
          "CONGRESISTA DE LA REPÚBLICA",
          "FUERZA POPULAR",
          "ANCASH",
          "Elegido",
          "Historial de Afiliación",
          "FUERZA POPULAR",
          "NACIONAL",
          "09/2020 – Vigente",
          "AFILIADO VÁLIDO"
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "9 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(6)",
          "REGISTRO DE PREDIOS",
          "SANTA-CHIMBOTE- MZ W LOTE 1 - PUEBLO JOVEN MIRAMAR BAJO",
          "Autovalúo: S/ 138,667.42",
          "CASA. EN EL ITEM VALOR SE CONSIGNA EL PRECIO DE ADQUISICIÓN.",
          "REGISTRO DE PREDIOS",
          "SANTA-CHIMBOTE- MZ W LOTE 1B - PUEBLO JOVEN MIRAMAR BAJO",
          "Autovalúo: S/ 10,017",
          "Casa. En ambos valores se duplica el valor del autovaluo.",
          "SECCION ESPECIAL DE PREDIOS RURALES",
          "UBICACION RURAL PARCELA N° 02 DE LA PARCELACION ASCENCION DEL AGUAYTILLO III ETAPA AREA Ha. 40.7724 HA SECTOR ASCENCION DEL AGUAYTILLO UU.CC. 12342 ALEXANDER VON HUMBOLD - PADRE ABAD - UCAYALI",
          "Autovalúo: S/ 48,514.67",
          "TERRENO. EN EL ITEM VALOR, SE CONSIGNA EL VALOR DE ADQUISICIÓN. LA SUSCRITA ES COPROPIETARIA DEL BIEN CON SU CONVIVIENTE",
          "REGISTRO DE PREDIOS",
          "MZ C LOTE 2 URB RESIDENCIAL DENSIDAD MEDIA (RDM) NUEVO CHIMBOTE - SANTA - ANCASH",
          "Autovalúo: S/ 44,815.07",
          "CASA. LA SUSCRITA SOLO POSEE EL 50% DEL BIEN Y EL VALOR DE AUTOVALUO SOLO SE HA CONSIGADO EL MONTO AL % QUE LE CORRESPONDE. EN AMBOS VALORES SE DUPLICA EL VALOR DE AUTOVALUO",
          "REGISTRO DE PREDIOS",
          "SANTA-NUEVO CHIMBOTE- MZ N LOTE 14 UNIDAD A - PROGRAMA DE VIVIENDA PRIMERA ETAPA UNID.U-1 NUCLEO URB",
          "Autovalúo: S/ 41,447.25",
          "Terreno. En ambos valores se duplica el valor del autovaluo.",
          "CASA",
          "Urbanización villa agraria Mz C LT 05. Nuevo Chimbote. Ancash",
          "Autovalúo: S/ 212,138.59",
          "A la fecha el bien no tiene título, no obstante se encuentra inscrito en la Municipalidad correspondiente. En ambos valores se duplica el valor del autovaluo.",
          "Bienes muebles (Vehículos)",
          "(1)",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: BCE709",
          "Valor: S/ 10,000",
          "Camioneta mecánica TOYOTA — EL VALOR ESTIMADO ES PROPORCIONADO POR LA CANDIDATA.",
          "Titularidad (Acciones y Participaciones)",
          "(2)",
          "Inversiones Generales ARIBET SAC",
          "Acciones",
          "Cantidad: 9,500",
          "Valor: S/ 10",
          "LA EMPRESA NO TIENE ACTIVIDAD COMERCIAL, CON RUC DADA DE BAJA, SIN EMBARGO, AÚN SIGUE INSCRITA EN REGISTROS PÚBLICOS. LAS ACCIONES DE LA SUSCRITA TIENEN UN VALOR TOTAL DE 95,000.00 SOLES",
          "Inversiones Generales AMAT SAC",
          "Acciones",
          "Cantidad: 9,500",
          "Valor: S/ 10",
          "LA EMPRESA NO TIENE ACTIVIDAD COMERCIAL, CON RUC DADA DE BAJA, SIN EMBARGO, AÚN SIGUE INSCRITA EN REGISTROS PÚBLICOS Y POSEE UN BIEN MUEBLE (CAMIONETA). LAS ACCIONES DE LA SUSCRITA TIENEN UN VALOR TOTAL DE 95,000.00 SOLES"
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "5 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "5 trabajos con 20 años de experiencia aproximadamente",
          "Congresista de la República",
          "Congreso de la República",
          "2021 – 2025",
          "LIMA",
          "Conductor de vehículo",
          "CONSTRUREDES",
          "2019 – 2021",
          "LIMA",
          "Director Técnico - Químico Farmaceútico",
          "BOTICA ROMA",
          "2012 – 2021",
          "ANCASH",
          "Gerente General",
          "Inversiones Generales ARIBET Corporation SAC.",
          "2012 – 2017",
          "ANCASH",
          "Gerente General",
          "INVERSIONES GENERALES AMAT SAC",
          "2006 – 2016",
          "ANCASH"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-10": {
    "personId": "senate-10",
    "candidateId": 7471,
    "rtcName": "Juan Carlos del Aguila Cardenas",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7471",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "05227631",
    "age": "64 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "1 títulos",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "Bachiller - ADMINISTRACIÓN",
          "UNIVERSIDAD NACIONAL DE LA AMAZONÍA PERUANA"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "6 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES GENERALES 2016",
          "CONGRESISTA DE LA REPÚBLICA",
          "FUERZA POPULAR",
          "LORETO",
          "Elegido",
          "ELECCIONES REGIONALES Y MUNICIPALES 2002",
          "ALCALDE PROVINCIAL",
          "PARTIDO APRISTA PERUANO",
          "LORETO - MAYNAS",
          "Elegido",
          "ELECCIONES REGIONALES Y MUNICIPALES 2006",
          "ALCALDE PROVINCIAL",
          "PARTIDO APRISTA PERUANO",
          "LORETO - MAYNAS",
          "No elegido",
          "ELECCIONES REGIONALES Y MUNICIPALES 2010",
          "VICEPRESIDENTE REGIONAL",
          "MOVIMIENTO POLITICO REGIONAL UNIPOL",
          "LORETO",
          "No elegido",
          "ELECCIONES REGIONALES Y MUNICIPALES 2014",
          "ALCALDE PROVINCIAL",
          "MOVIMIENTO INDEPENDIENTE LORETO - MI LORETO",
          "LORETO - MAYNAS",
          "No elegido",
          "ELECCIONES REGIONALES Y MUNICIPALES 2022",
          "GOBERNADOR REGIONAL",
          "FUERZA POPULAR",
          "LORETO",
          "No elegido",
          "Historial de Afiliación",
          "FUERZA POPULAR",
          "NACIONAL",
          "10/2021 – Vigente",
          "AFILIADO VÁLIDO",
          "LORETO PARA TODOS",
          "LORETO",
          "11/2013 – 02/2015"
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "7 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(1)",
          "REGISTRO DE PREDIOS",
          "MAYNAS-IQUITOS- CALLE ATLANTIDA NUM 821 ETAPA SEGUNDA - PUEBLO JOVEN BERMUDEZ",
          "Autovalúo: S/ 186,500.17",
          "EL VALOR CONSIDERADO EN AMBOS CASOS ES EL VALOR DEL AUTOVALUO 2025. SE PRECISA QUE EL INMUEBLE TIENE COMO PARTIDA EL N° 55019578 Y COMO FICHA/TOMO EL N° 12019662, AMBOS REGISTRO APARECEN EN EL REPORTE DE REGISTRO DE PREDIOS DE LA SUNARP.",
          "Bienes muebles (Vehículos)",
          "(6)",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: MY13945",
          "MOTO HONDA — MAL ESTADO - EN DESUSO - SINIESTRADO",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: MY23243",
          "Valor: S/ 100",
          "MOTO SUSUKI — MAL ESTADO - EN DESUSO, EL VALOR CONSIGNADO ES REFERENCIAL",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: MY87878",
          "Valor: S/ 100",
          "MOTO SUSUKI — MAL ESTADO - EN DESUSO, EL VALOR CONSIGNADO ES REFERENCIAL",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: MY90099",
          "Valor: S/ 100",
          "MOTO HONDA — MAL ESTADO - EN DESUSO, EL VALOR CONSIGNADO ES REFERENCIAL",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: C0U375",
          "Valor: S/ 1,000",
          "AUTO TOYOTA — MAL ESTADO - EN DESUSO, EL VALOR CONSIGNADO ES REFERENCIAL",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: 2577HB",
          "Valor: S/ 100",
          "MOTO YAMAHA — MAL ESTADO - EN DESUSO, EL VALOR CONSIGNADO ES REFERENCIAL",
          "Titularidad (Acciones y Participaciones)",
          "(0)",
          "No registra acciones ni participaciones."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "3 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "3 trabajos con 9 años de experiencia aproximadamente",
          "TITULAR GERENTE",
          "AMAZONIA PRODUCCIONES E.I.R.L",
          "2022 – 2025",
          "LORETO",
          "ASESOR AD-HONOREM",
          "MINISTERIO DE RELACIONES EXTERIORES",
          "2020",
          "LIMA",
          "CONGRESISTA",
          "CONGRESO DE LA REPUBLICA",
          "2016 – 2019",
          "LIMA"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-11": {
    "personId": "senate-11",
    "candidateId": 7461,
    "rtcName": "Victor Seferino Flores Ruiz",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7461",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "17896798",
    "age": "68 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "2 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Bachiller - BACHILLER EN FARMACIA Y BIOQUIMICA",
          "UNIVERSIDAD NACIONAL DE TRUJILLO",
          "Título - QUIMICO FARMACEUTICO",
          "UNIVERSIDAD NACIONAL DE TRUJILLO"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "1 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES GENERALES 2021",
          "CONGRESISTA DE LA REPÚBLICA",
          "FUERZA POPULAR",
          "LA LIBERTAD",
          "Elegido",
          "Historial de Afiliación",
          "FUERZA POPULAR",
          "NACIONAL",
          "09/2020 – Vigente",
          "AFILIADO VÁLIDO"
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "45 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(33)",
          "REGISTRO DE PREDIOS",
          "JIRON JUNIN NUM 631 OFIC 304 3ER PISO TRUJILLO TRUJILLO - TRUJILLO - LA LIBERTAD",
          "Autovalúo: S/ 29,924.64",
          "EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "REGISTRO DE PREDIOS",
          "CALLE LIBERTAD SUB LOTE 01 SIMBAL - TRUJILLO - LA LIBERTAD",
          "Autovalúo: S/ 44,768.41",
          "EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "REGISTRO DE PREDIOS",
          "CALLE LIBERTAD SUB LOTE 02 SIMBAL - TRUJILLO - LA LIBERTAD",
          "Autovalúo: S/ 94,690.14",
          "EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "REGISTRO DE PREDIOS",
          "CALLE LIBERTAD SUB LOTE 03 SIMBAL - TRUJILLO - LA LIBERTAD",
          "Autovalúo: S/ 31,160.92",
          "EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "REGISTRO DE PREDIOS",
          "CALLE LIBERTAD SUB LOTE 04 SIMBAL - TRUJILLO - LA LIBERTAD",
          "Autovalúo: S/ 37,206.18",
          "EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "REGISTRO DE PREDIOS",
          "CALLE OBISPO MARCELO CORNE NUM 159 161 163 URB SAN ANDRES TRUJILLO - TRUJILLO - LA LIBERTAD",
          "Autovalúo: S/ 275,651.09",
          "EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "REGISTRO DE PREDIOS",
          "CALLE BOLIVAR NUM 224 226 TRUJILLO TRUJILLO - TRUJILLO - LA LIBERTAD",
          "Autovalúo: S/ 595,348.45",
          "- SE PRECISA LA DIRECCIÓN, JR. BOLIVAR 224 URBANIZACIÓN CENTRO HISTÓRICO. - EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "REGISTRO DE PREDIOS",
          "#########",
          "Autovalúo: S/ 67,088.85",
          "NO SE PUEDE CONSIGNAR LA DIRECCIÓN EN EL ITEM INDICADO SE PRECISA DIRECCIÓN: PASAJE MANUEL UBALDE S/N MZ. B LT.19 URBANIZACIÓN RAZURI, ETAPA I, TRUJILLO, TRUJILLO, LA LIBERTAD EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "REGISTRO DE PREDIOS",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "Autovalúo: S/ 144,302.19",
          "- DIRECCIÓN: CALLE TUMBOS 1630 HUANCHACO, TRUJILLO, LA LIBERTAD. - EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "REGISTRO DE PREDIOS",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "Autovalúo: S/ 18,558",
          "- DIRECCIÓN: CALLE SANTOS CHOCANO S/N POROTO, TRUJILLO, LA LIBERTAD. - EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "REGISTRO DE PREDIOS",
          "#########",
          "Autovalúo: S/ 40,537.7",
          "NO SE PERMITE CONSIGNAR LA DIRECCIÓN EN EL ITEM INDICADO. SE PRECISA QUE LA DIRECCIÓN ES: AV. PROLONGACIÓN UNIÓN 1570 MZ A LT. 6 URBANIZACIÓN RAZURI, TRUJILLO, TRUJILLO, LA LIBERTAD EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "SECCION ESPECIAL DE PREDIOS RURALES",
          "UBICACION RURAL VALLE MOCHE PREDIO JUSHAPE U.C. 03948 MOCHE - TRUJILLO - LA LIBERTAD",
          "Autovalúo: S/ 125,809",
          "- JR. JUSHAPE 1943 URBANIZACIÓN CAMPIÑA MOCHE TRUJILLO - LA LIBERTAD EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "SECCION ESPECIAL DE PREDIOS RURALES",
          "UBICACION RURAL VALLE MOCHE PREDIO CONACHE SECTOR V PARCELA LOTE VDC-25 PARCELA LOTE VDC-25 LAREDO - TRUJILLO - LA LIBERTAD",
          "Autovalúo: S/ 177,989.53",
          "- CONACHE S/N MZ VDC LT-25 LAREDO TRUJILLO LA LIBERTAD -EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "SECCION ESPECIAL DE PREDIOS RURALES",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: SAN PEDRO",
          "Autovalúo: S/ 32,617.24",
          "- DIRECCIÓN LIMONCARRO S/N GUADALUPE, PACASMAYO, LA LIBERTAD - EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO,",
          "REGISTRO DE PREDIOS",
          "JIRON HUALLAGA NUM 1947 AREA Ha. 138.50M2 SECTOR BARRIO SAN JUAN JUANJUI - MARISCAL CACERES - SAN MARTIN",
          "Autovalúo: S/ 7,894.5",
          "EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "DERECHOS MINEROS",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "CONCESIÓN CARBONERA SANAGORAN. SE DECLARÓ EXTINGUIDO EL DERECHO MINERO POR CAUSAL DE CADUCIDAD EL 17/10/2017",
          "DERECHOS MINEROS",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "CONCESIÓN CARBONERA SANAGORAN UNO. SE DECLARÓ EXTINGUIDO EL DERECHO MINERO POR CAUSAL DE CADUCIDAD EL 17/10/2017,",
          "DERECHOS MINEROS",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "CONCESIÓN MARILIA XXVII. FUE TRANSFERIDA A LA COMPAÑÍA MINERA MARILIA & FCS SAC, el 21/08/2017",
          "DERECHOS MINEROS",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "CONCESIÓN MARILIA XXVII. Se transfirió a la COMPAÑÍA MINERA MARILIA & FCS SAC, el 21/08/2017",
          "DERECHOS MINEROS",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "CONCESIÓN MARILIA XXI, SE TRANSFIRIÓ AL PROPIETARIO COMPAÑÍA MINERA MARILIA & FCS S.A.C. - SE HACE LA PRECISIÓN QUE EXISTE DUPLICIDAD DE ESTA PARTIDA",
          "DERECHOS MINEROS",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "CONCESIÓN MARILIA XXI, SE TRANSFIRIÓ AL PROPIETARIO COMPAÑÍA MINERA MARILIA & FCS S.A.C.",
          "DERECHOS MINEROS",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "CONCESIÓN MARILIA XXIII, TITULAR COMPAÑÍA MINERA MARILIA & FCS SAC",
          "SOCIEDADES LEGALES",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "SE TRANSFIRIO A TECNOLOGIA MINERAL ANDINA SAC Y A TECNOLOGIA MINERAL ROCA BLANCA SL SUCURSAL PERÚ",
          "SOCIEDADES LEGALES",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "SOCIEDAD DE RESPONSABILIDAD LIMITADA MARIONA TRANSFIRIO A: TECNOLOGÍA MINERAL ANDINA S.A.C, TECNOLOGÍA MINERAL ROCA BLANCA S.L. SUCURSAL PERU, y VIRGILIO TORREALVA VALVERDE.",
          "DERECHOS MINEROS",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "CONCESIÓN CALERA III, SE EXTINGUIÓ EN EL 2021",
          "DERECHOS MINEROS",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "CONCESIÓN IVAN I - SE EXTINGUIÓ EN EL 2021",
          "SOCIEDADES LEGALES",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "SOCIEDAD MINERA DE RESPONSABILIDAD LIMITADA QUIRRIPE. SE LIQUIDÓ EL 09.01.2023.",
          "DERECHOS MINEROS",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "CONCESIÓN ENERGÍAS VERDES IV, SE TRANSFIRIO LA TITULARIDAD EN EL 2019 A OTRA SOCIEDAD, YA NO SE ENCUENTRA A NOMBRE DE VICTOR FLORES RUIZ",
          "DERECHOS MINEROS",
          "ZONA: ZONA REGISTRAL V - SEDE TRUJILLO; OFICINA: TRUJILLO",
          "CONCESIÓN JOAQUIN II. Se Extinguió el derecho minero por no pago 2020- 2021, el 18/11/2021",
          "REGISTRO DE PREDIOS",
          "TRUJILLO-TRUJILLO- AV PROLONGACION UNION NUM 1578-1582-1584 LOTE 7-8 MZ A - PROGRAMA DE VIVIENDA COR",
          "Autovalúo: S/ 796,258.45",
          "EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "CASA",
          "CONDOMINIO S/N MZ AC LT 05 URB. PUERTA DEL SOL, CHICLAYO, CHICLAYO, LAMBAYEQUE",
          "Autovalúo: S/ 65,428",
          "EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "INMUEBLE",
          "CALLE HUAMAN S/N MZ B LOTE 15 URB. HUAMAN, VICTOR LARCO HERRERA, TRUJILLO, LA LIBERTAD",
          "Autovalúo: S/ 19,958.4",
          "EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "INMUEBLE",
          "CALLE HUAMAN S/N MZ C LOTE 6 URB. HUAMAN, VICTOR LARCO HERRERA, TRUJILLO, LA LIBERTAD",
          "Autovalúo: S/ 16,650.36",
          "EN AMBOS CASOS EL VALOR CONSIGNADO ES EL VALOR DEL AUTOVALUO",
          "Bienes muebles (Vehículos)",
          "(6)",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: MD1636",
          "Valor: S/ 500",
          "MOTOCICLETA MECANICA YAMAHA — VALOR ESTIMADO PROPORCIONADO POR EL CANDIDATO",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: AB7927",
          "Valor: S/ 1,000",
          "AUTOMOVIL STATION WAGON MARCA HILLMAN - MECANICO — VALOR ESTIMADO PROPORCIONADO POR EL CANDIDATO",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: B0P882",
          "Valor: S/ 12,340",
          "CAMION HYUNDAI - MECANICO — VALOR ESTIMADO PROPORCIONADO POR EL CANDIDATO",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: T3D863",
          "Valor: S/ 5,000",
          "AUTOMOVIL STATION WAGON MITSUBISHI — VALOR ESTIMADO PROPORCIONADO POR EL CANDIDATO",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: F6A231",
          "Valor: S/ 48,141",
          "AUTOMOVIL STATION WAGON VOLKSWAGEN - AUTOMATICO — VALOR ESTIMADO PROPORCIONADO POR EL CANDIDATO",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: ACK309",
          "Valor: S/ 38,450",
          "AUTOMOVIL STATION WAGON WOLKSWAGEN — VALOR ESTIMADO PROPORCIONADO POR EL CANDIDATO",
          "Titularidad (Acciones y Participaciones)",
          "(6)",
          "LUCIA TERESA S.A.C.",
          "Acciones",
          "Cantidad: 800",
          "Valor: S/ 1",
          "EL TOTAL DE ACCIONES QUE POSEO TIENE UN VALOR DE S/. 800.00",
          "CLINICA SALUD INTEGRAL FARMEDICA S.A.C.",
          "Acciones",
          "Cantidad: 10,500",
          "Valor: S/ 10",
          "LA EMPRESA TIENE UN VALOR DE S/ 150,000.00 DEL CUAL TENGO EL 70% DE ACCIONES QUE TIENE UN VALOR DE S/. 105,000.00.",
          "INVERSIONES I.V.L. S.A.C.",
          "Acciones",
          "Cantidad: 33,401",
          "Valor: S/ 1",
          "EL TOTAL DE ACCIONES QUE POSEO TIENE UN VALOR DE S/. 33,401.00",
          "FARMEDICA S.A.C.",
          "Acciones",
          "Cantidad: 21,000",
          "Valor: S/ 10",
          "EL TOTAL DEL VALOR DE LA EMPRESA ES 300,000.00 DEL CUAL TENGO EL 70% DE ACCIONES QUE TIENE UN VALOR DE S/. 210,000.00",
          "COMPAÑIA MINERA MARILIA & FCS SAC",
          "Acciones",
          "Cantidad: 1,031,487",
          "Valor: S/ 1",
          "EL TOTAL DE ACCIONES QUE POSEO TIENE UN VALOR DE S/. 1´031,487.00",
          "SOLUCIONES ORGÁNICAS DEL PERÚ S.A.C. - SORPERU S.A.C.",
          "Acciones",
          "Cantidad: 700",
          "Valor: S/ 1",
          "EL TOTAL DE ACCIONES QUE POSEO TIENE UN VALOR DE S/. 700.00."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "3 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "3 trabajos con 23 años de experiencia aproximadamente",
          "CONGRESISTA",
          "CONGRESO DE LA REPUBLICA",
          "2021 – 2025",
          "LIMA",
          "GERENTE GENERAL",
          "CLINICA SALUD FARMEDICA S.A.C.",
          "2011 – 2021",
          "LA LIBERTAD",
          "GERENTE GENERAL",
          "FARMEDICA S.A.C.",
          "2003 – 2020",
          "LA LIBERTAD"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-12": {
    "personId": "senate-12",
    "candidateId": 7483,
    "rtcName": "Hector Jose Ventura Angel",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7483",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "40242430",
    "age": "46 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "2 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Título - ABOGADO",
          "UNIVERSIDAD PRIVADA \"SAN JUAN BAUTISTA\"",
          "Año: 2006",
          "Bachiller - BACHILLER EN DERECHO",
          "UNIVERSIDAD PRIVADA \"SAN JUAN BAUTISTA\"",
          "Año: 2004"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "1 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES GENERALES 2021",
          "CONGRESISTA DE LA REPÚBLICA",
          "FUERZA POPULAR",
          "TUMBES",
          "Elegido",
          "Historial de Afiliación",
          "FUERZA POPULAR",
          "NACIONAL",
          "09/2020 – Vigente",
          "AFILIADO VÁLIDO",
          "ROCA FUERTE - SEGUNDA JERUSALEN",
          "SAN MARTÍN - RIOJA",
          "09/2015 – 01/2019"
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "2 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(1)",
          "REGISTRO DE PREDIOS",
          "CALLE 6 NUM 219 BLOCK O DPTO N°402 - CUARTO PISO URB LOTIZACION CAMPOY SAN JUAN DE LURIGANCHO - LIMA - LIMA",
          "Autovalúo: S/ 31,703.94",
          "EL VALOR CONSIGNADO EN AMBOS CASOS CORRESPONDE AL VALOR DEL AUTOVALUO",
          "Bienes muebles (Vehículos)",
          "(1)",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: BXW570",
          "Valor: S/ 194,359.5",
          "camioneta grand cherokee, automática — EL VALOR CONSIGNADO ES EL ESTIMADO POR EL CANDIDATO.",
          "Titularidad (Acciones y Participaciones)",
          "(0)",
          "No registra acciones ni participaciones."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "4 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "4 trabajos con 11 años de experiencia aproximadamente",
          "Congresista de la República",
          "Congreso de la República",
          "2021 – 2025",
          "LIMA",
          "asesoría legal",
          "IE Sudamericano",
          "2016 – 2021",
          "LIMA",
          "asesor",
          "Congreso de la República",
          "2015 – 2016",
          "LIMA",
          "asesoría legal",
          "IE Sudamericano",
          "2015",
          "LIMA"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-13": {
    "personId": "senate-13",
    "candidateId": 7460,
    "rtcName": "David Julio Jimenez Heredia",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7460",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "19994639",
    "age": "70 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-14": {
    "personId": "senate-14",
    "candidateId": 6241,
    "rtcName": "Carmen Patricia Juarez Gallegos",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6241",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07831436",
    "age": "65 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-15": {
    "personId": "senate-15",
    "candidateId": 7469,
    "rtcName": "Elard Galo Melgar Valdez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7469",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "09884301",
    "age": "69 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-16": {
    "personId": "senate-16",
    "candidateId": 6246,
    "rtcName": "Carlos Fernando Mesia Ramirez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6246",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "08266314",
    "age": "66 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-17": {
    "personId": "senate-17",
    "candidateId": 7465,
    "rtcName": "Marco Enrique Miyashiro Arashiro",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7465",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "22974228",
    "age": "73 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-18": {
    "personId": "senate-18",
    "candidateId": 6243,
    "rtcName": "Martha Lupe Moyano Delgado",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6243",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "08911520",
    "age": "61 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-19": {
    "personId": "senate-19",
    "candidateId": 7480,
    "rtcName": "Victor Manuel Noriega Reategui",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7480",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "17806760",
    "age": "64 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-20": {
    "personId": "senate-20",
    "candidateId": 6240,
    "rtcName": "Fernando Miguel Rospigliosi Capurro",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6240",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07704730",
    "age": "79 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-21": {
    "personId": "senate-21",
    "candidateId": 7453,
    "rtcName": "Jacques Salomon Rodrich Ackerman",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7453",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "08234063",
    "age": "64 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-22": {
    "personId": "senate-22",
    "candidateId": 7478,
    "rtcName": "Karla Melissa Schaefer Cuculiza",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7478",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "10638205",
    "age": "60 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-23": {
    "personId": "senate-23",
    "candidateId": 7451,
    "rtcName": "Segundo Leocadio Tapia Bernal",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7451",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "16657841",
    "age": "58 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-24": {
    "personId": "senate-24",
    "candidateId": 18,
    "rtcName": "Miguel Angel Torres Morales",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=18",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "40433187",
    "age": "46 años",
    "region": "",
    "postulates": "SEGUNDO VICEPRESIDENTE DE LA REPÚBLICA",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-25": {
    "personId": "senate-25",
    "candidateId": 7485,
    "rtcName": "Jorge Velasquez Portocarrero",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7485",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "21143880",
    "age": "60 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-26": {
    "personId": "senate-26",
    "candidateId": 7458,
    "rtcName": "Rafael Gustavo Yamashiro Ore",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7458",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "21414172",
    "age": "62 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-27": {
    "personId": "senate-27",
    "candidateId": 6298,
    "rtcName": "Saul Andres Armacanqui Morales",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6298",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "21487528",
    "age": "72 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-28": {
    "personId": "senate-28",
    "candidateId": 6296,
    "rtcName": "Jose Mercedes Castillo Terrones",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6296",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "27409088",
    "age": "61 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-29": {
    "personId": "senate-29",
    "candidateId": 7601,
    "rtcName": "Jose Moises Chipana Chipana",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7601",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "02044988",
    "age": "51 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-30": {
    "personId": "senate-30",
    "candidateId": 7589,
    "rtcName": "Victor Raul Cutipa Ccama",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7589",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "04647085",
    "age": "53 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-31": {
    "personId": "senate-31",
    "candidateId": 7588,
    "rtcName": "Hugo Isaac Ccahuana Aymachoque",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7588",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "40669342",
    "age": "47 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-32": {
    "personId": "senate-32",
    "candidateId": 7568,
    "rtcName": "Serafin Andres Lujan",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7568",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "22482738",
    "age": "59 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-33": {
    "personId": "senate-33",
    "candidateId": 6308,
    "rtcName": "Iber Antenor Maravi Olarte",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6308",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "21453924",
    "age": "65 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-34": {
    "personId": "senate-34",
    "candidateId": 7561,
    "rtcName": "Edyson Humberto Morales Ramirez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7561",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "10252335",
    "age": "50 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-35": {
    "personId": "senate-35",
    "candidateId": 7603,
    "rtcName": "Percy Herbert Osorio Palpan",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7603",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "40938678",
    "age": "47 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-36": {
    "personId": "senate-36",
    "candidateId": 6302,
    "rtcName": "Bernardo Jaime Quito Sarmiento",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6302",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "29632775",
    "age": "51 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-37": {
    "personId": "senate-37",
    "candidateId": 7604,
    "rtcName": "Andres Avelino Ramos Huillcas",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7604",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "31010129",
    "age": "67 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-38": {
    "personId": "senate-38",
    "candidateId": 6297,
    "rtcName": "Silvana Emperatriz Robles Araujo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6297",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "42750152",
    "age": "41 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-39": {
    "personId": "senate-39",
    "candidateId": 7565,
    "rtcName": "Wilfredo Verano Saravia",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7565",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "23906812",
    "age": "63 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-40": {
    "personId": "senate-40",
    "candidateId": 7599,
    "rtcName": "Joaquin Yauri Tunque",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7599",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "23271450",
    "age": "51 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-41": {
    "personId": "senate-41",
    "candidateId": 6407,
    "rtcName": "Roger Miguel Astucuri Laura",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6407",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07651031",
    "age": "65 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-42": {
    "personId": "senate-42",
    "candidateId": 33,
    "rtcName": "Daniel Hugo Barragan Coloma",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=33",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "10063223",
    "age": "64 años",
    "region": "",
    "postulates": "PRIMER VICEPRESIDENTE DE LA REPÚBLICA",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-43": {
    "personId": "senate-43",
    "candidateId": 6404,
    "rtcName": "Agripina Maria del Pilar Flores Cordova",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6404",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07250032",
    "age": "75 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-44": {
    "personId": "senate-44",
    "candidateId": 6405,
    "rtcName": "Walter Francisco Gago Rodriguez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6405",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07412350",
    "age": "64 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-45": {
    "personId": "senate-45",
    "candidateId": 7756,
    "rtcName": "Juana Guisella Ticona Cohaila",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7756",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "00422672",
    "age": "63 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-46": {
    "personId": "senate-46",
    "candidateId": 7830,
    "rtcName": "Nora Bonifaz Carmona",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7830",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "06519219",
    "age": "71 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-47": {
    "personId": "senate-47",
    "candidateId": 39,
    "rtcName": "Carlos David Caballero Leon",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=39",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "43360309",
    "age": "63 años",
    "region": "",
    "postulates": "SEGUNDO VICEPRESIDENTE DE LA REPÚBLICA",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-48": {
    "personId": "senate-48",
    "candidateId": 6460,
    "rtcName": "Flavio Felipe Figallo Rivadeneyra",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6460",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07793210",
    "age": "72 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-49": {
    "personId": "senate-49",
    "candidateId": 7856,
    "rtcName": "Juver Nilson Flores Suarez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7856",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "30762511",
    "age": "53 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-50": {
    "personId": "senate-50",
    "candidateId": 6466,
    "rtcName": "Jorge Octavio Gavidia Rodriguez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6466",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07619185",
    "age": "57 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-51": {
    "personId": "senate-51",
    "candidateId": 6461,
    "rtcName": "Patricia Milagros Iturregui Byrne",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=6461",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07231335",
    "age": "73 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-52": {
    "personId": "senate-52",
    "candidateId": 38,
    "rtcName": "Susana Flor de Maria Matute Charun",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=38",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "06876967",
    "age": "60 años",
    "region": "",
    "postulates": "PRIMER VICEPRESIDENTE DE LA REPÚBLICA",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-53": {
    "personId": "senate-53",
    "candidateId": 7027,
    "rtcName": "Maria Lourdes Pia Luisa Alcorta Suero",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7027",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "08235876",
    "age": "74 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-54": {
    "personId": "senate-54",
    "candidateId": 7029,
    "rtcName": "Katherine Milagros Ampuero Meza",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7029",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "25799622",
    "age": "50 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-55": {
    "personId": "senate-55",
    "candidateId": 8804,
    "rtcName": "Francisco Jose Calisto Giampietri",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=8804",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "43285320",
    "age": "65 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-56": {
    "personId": "senate-56",
    "candidateId": 8781,
    "rtcName": "Maria de los Milagros Jackeline Jauregui Martinez de Aguayo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=8781",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07852432",
    "age": "62 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-57": {
    "personId": "senate-57",
    "candidateId": 98,
    "rtcName": "Rafael Bernardo López Aliaga Cazorla",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=98",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07845838",
    "age": "65 años",
    "region": "",
    "postulates": "PRESIDENTE DE LA REPÚBLICA",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-58": {
    "personId": "senate-58",
    "candidateId": 7034,
    "rtcName": "Estanislao Edgar Mancha Pineda",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7034",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "01539305",
    "age": "52 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-59": {
    "personId": "senate-59",
    "candidateId": 7028,
    "rtcName": "Alejandro Muñante Barrios",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=7028",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "45209282",
    "age": "39 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "senate-60": {
    "personId": "senate-60",
    "candidateId": 8808,
    "rtcName": "Miguel Angel Velasquez Garcia",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=8808",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "06504611",
    "age": "64 años",
    "region": "",
    "postulates": "SENADOR",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-1": {
    "personId": "deputies-1",
    "candidateId": 647,
    "rtcName": "Marleny Bibiana Arminta Valencia",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=647",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "29569533",
    "age": "58 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-2": {
    "personId": "deputies-2",
    "candidateId": 653,
    "rtcName": "Freshman Buitron Martinez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=653",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "41618961",
    "age": "43 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-3": {
    "personId": "deputies-3",
    "candidateId": 769,
    "rtcName": "Harvey Julio Colchado Huamani",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=769",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "43592504",
    "age": "52 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-4": {
    "personId": "deputies-4",
    "candidateId": 665,
    "rtcName": "Cesar Augusto Holguin Loaiza",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=665",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "43572794",
    "age": "41 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-5": {
    "personId": "deputies-5",
    "candidateId": 771,
    "rtcName": "Indira Isabel Huilca Flores",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=771",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "45218393",
    "age": "37 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-6": {
    "personId": "deputies-6",
    "candidateId": 710,
    "rtcName": "Bernardino Jair Manrique Olivera",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=710",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "70665764",
    "age": "29 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-7": {
    "personId": "deputies-7",
    "candidateId": 696,
    "rtcName": "Angel Renato Meneses Crispin",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=696",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "20595160",
    "age": "47 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-8": {
    "personId": "deputies-8",
    "candidateId": 765,
    "rtcName": "Cesar Augusto Muedas Balbiese",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=765",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "42839004",
    "age": "49 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-9": {
    "personId": "deputies-9",
    "candidateId": 639,
    "rtcName": "Jose Miguel Marcelo Salazar",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=639",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "41840094",
    "age": "44 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-10": {
    "personId": "deputies-10",
    "candidateId": 740,
    "rtcName": "Helard Bladimir Sonco Villanueva",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=740",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "46307918",
    "age": "36 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-11": {
    "personId": "deputies-11",
    "candidateId": 1656,
    "rtcName": "Jaime Americo Abensur Pinasco",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1656",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "09391698",
    "age": "55 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-12": {
    "personId": "deputies-12",
    "candidateId": 1645,
    "rtcName": "Luis Arturo Alegria Garcia",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1645",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "45382589",
    "age": "37 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-13": {
    "personId": "deputies-13",
    "candidateId": 1621,
    "rtcName": "Gladys Griselda Andrade Salguero de Alvarez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1621",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "15984771",
    "age": "62 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-14": {
    "personId": "deputies-14",
    "candidateId": 1597,
    "rtcName": "Rosangella Andrea Barbaran Reyes",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1597",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "76030152",
    "age": "31 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-15": {
    "personId": "deputies-15",
    "candidateId": 1567,
    "rtcName": "Karina Juliza Beteta Rubin",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1567",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "22509175",
    "age": "51 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-16": {
    "personId": "deputies-16",
    "candidateId": 1555,
    "rtcName": "Angel Bruno Bobadilla Galindo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1555",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "40224994",
    "age": "49 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-17": {
    "personId": "deputies-17",
    "candidateId": 1636,
    "rtcName": "Cesar Manuel Revilla Villanueva",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1636",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "44275599",
    "age": "39 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-18": {
    "personId": "deputies-18",
    "candidateId": 1634,
    "rtcName": "Eduardo Enrique Castillo Rivas",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1634",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "44807108",
    "age": "38 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-19": {
    "personId": "deputies-19",
    "candidateId": 1593,
    "rtcName": "Javier Alejandro Castro Cruz",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1593",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "16650849",
    "age": "59 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-20": {
    "personId": "deputies-20",
    "candidateId": 1529,
    "rtcName": "Royser Castro Grandez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1529",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "10587515",
    "age": "48 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-21": {
    "personId": "deputies-21",
    "candidateId": 1652,
    "rtcName": "Rafael Aldo Celiz Castillo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1652",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07750373",
    "age": "57 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-22": {
    "personId": "deputies-22",
    "candidateId": 1595,
    "rtcName": "Cecilia Isabel Chacon de Vettori",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1595",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "09536896",
    "age": "55 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-23": {
    "personId": "deputies-23",
    "candidateId": 1535,
    "rtcName": "Carlos Alberto Dominguez Herrera",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1535",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "40340841",
    "age": "46 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-24": {
    "personId": "deputies-24",
    "candidateId": 1680,
    "rtcName": "Pierangeli Daniela Dodero Jovich",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1680",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "42433830",
    "age": "42 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-25": {
    "personId": "deputies-25",
    "candidateId": 1596,
    "rtcName": "Diethell Columbus Murata",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1596",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "40826681",
    "age": "45 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-26": {
    "personId": "deputies-26",
    "candidateId": 1598,
    "rtcName": "Pier Paolo Figari Mendoza",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1598",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07268767",
    "age": "52 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-27": {
    "personId": "deputies-27",
    "candidateId": 1671,
    "rtcName": "Francisco Javier Gatica Vega",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1671",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "42667604",
    "age": "41 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-28": {
    "personId": "deputies-28",
    "candidateId": 1665,
    "rtcName": "Luzmila Maria del Carmen Gamarra Pita",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1665",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "42516751",
    "age": "41 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-29": {
    "personId": "deputies-29",
    "candidateId": 1530,
    "rtcName": "Mery Eliana Infantes Castañeda",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1530",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "16448130",
    "age": "62 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-30": {
    "personId": "deputies-30",
    "candidateId": 1582,
    "rtcName": "Leticia Maruja Leiva Baylon",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1582",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "41919665",
    "age": "43 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-31": {
    "personId": "deputies-31",
    "candidateId": 1600,
    "rtcName": "Flor de Jesus Meza Rivera",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1600",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "72393802",
    "age": "32 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-32": {
    "personId": "deputies-32",
    "candidateId": 1662,
    "rtcName": "Liz Huli Mendoza Bernedo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1662",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "10187011",
    "age": "51 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-33": {
    "personId": "deputies-33",
    "candidateId": 1655,
    "rtcName": "Jessica Lizbeth Navas Sanchez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1655",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "10028427",
    "age": "52 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-34": {
    "personId": "deputies-34",
    "candidateId": 1554,
    "rtcName": "Auristela Ana Obando Morgan",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1554",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07737110",
    "age": "72 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-35": {
    "personId": "deputies-35",
    "candidateId": 1599,
    "rtcName": "Marco Antonio Pacheco Quispe",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1599",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "47000483",
    "age": "34 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-36": {
    "personId": "deputies-36",
    "candidateId": 1589,
    "rtcName": "Jose Marvin Palma Mendoza",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1589",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "45721573",
    "age": "37 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-37": {
    "personId": "deputies-37",
    "candidateId": 1635,
    "rtcName": "Carmela Paucara Paxi",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1635",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "41408779",
    "age": "46 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-38": {
    "personId": "deputies-38",
    "candidateId": 1575,
    "rtcName": "Ana Bertha Patiño Urco",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1575",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "10792277",
    "age": "59 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-39": {
    "personId": "deputies-39",
    "candidateId": 1669,
    "rtcName": "Nary Benvinda Pinasco Montenegro",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1669",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "05414308",
    "age": "48 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-40": {
    "personId": "deputies-40",
    "candidateId": 1585,
    "rtcName": "Geanmarco Antonio Quezada Castro",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1585",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "18196788",
    "age": "49 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-41": {
    "personId": "deputies-41",
    "candidateId": 1653,
    "rtcName": "Maria Candelaria Ramos Rosales",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1653",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "29402006",
    "age": "65 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-42": {
    "personId": "deputies-42",
    "candidateId": 1625,
    "rtcName": "Cesar Manuel Vidaurre Floridas",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1625",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "42551310",
    "age": "41 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-43": {
    "personId": "deputies-43",
    "candidateId": 1622,
    "rtcName": "Alexander Salas Rivera",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1622",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "80328889",
    "age": "47 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-44": {
    "personId": "deputies-44",
    "candidateId": 1639,
    "rtcName": "Maria Luisa Silupu Inga",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1639",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "03651034",
    "age": "56 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-45": {
    "personId": "deputies-45",
    "candidateId": 1663,
    "rtcName": "Segundo Senovio Ticlla Rafael",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1663",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "27424381",
    "age": "52 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-46": {
    "personId": "deputies-46",
    "candidateId": 1581,
    "rtcName": "Gilmer Trujillo Zegarra",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1581",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "08571708",
    "age": "59 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-47": {
    "personId": "deputies-47",
    "candidateId": 1631,
    "rtcName": "Jhonn Brayam Valqui Ordoñez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1631",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "47654459",
    "age": "33 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "2 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Título - INGENIERO CIVIL",
          "PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ",
          "Año: 2025",
          "Bachiller - BACHILLER EN CIENCIAS CON MENCIÓN EN INGENIERÍA CIVIL",
          "PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ",
          "Año: 2022"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "16 contrato",
        "source": "Fuente: REINFO (Registro Integral de Formalización Minera)",
        "items": [
          "(16)",
          "RUC: 10476544594",
          "16 contratos",
          "S/ 145,500",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "SERVICIO DE SEGUIMIENTO Y MONITOREO DE PLAN ACTIVIDADES",
          "Monto: S/ 27,000",
          "Código: 2@35709709",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "CONTRATACION DE SEGUIMIENTO Y MONITOREO DEL PLAN DE ACTIVIDADES PARA LA GERENCIA GENERAL REGIONAL",
          "Monto: S/ 13,500",
          "Código: 2@34574638",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "SERVICIO DE SEGUIMIENTO Y MONITOREO DE PLAN ACTIVIDADES PS 42 EXP.N-5495645",
          "Monto: S/ 13,500",
          "Código: 2@33975327",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "SERVICIO DE SEGUIMIENTO Y MONITOREO DE PLAN ACTIVIDADES PS 2932 EXP.N-5362094",
          "Monto: S/ 6,500",
          "Código: 2@33118379",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "SERVICIO DE SEGUIMIEINTO Y MONITOREO DE PLAN ACTIVIDADES PS 2556 EXP.N-5273535",
          "Monto: S/ 7,000",
          "Código: 2@32555417",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "SERVICIO DE SEGUIMIENTO Y MONITOREO DE PLAN ACTIVIDADES.",
          "Monto: S/ 7,000",
          "Código: 2@31674180",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "CONTRATACION DE SERVICIO DE MONITOREO Y SEGUIMIENTO Y MONITOREO DEL PLAN DE ACTIVIDADES",
          "Monto: S/ 3,500",
          "Código: 2@31258064",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "SERVICIO DE SEGUIMIENTO Y MONITOREO DE PLAN ACTIVIDADES",
          "Monto: S/ 7,000",
          "Código: 2@30525550",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "SERVICIO DE SEGUIMIENTO Y MONITOREO DE PLAN ACTIVIDADES",
          "Monto: S/ 7,000",
          "Código: 2@29684246",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "SERVICIO DE SEGUIMIENTO Y MONITOREO DE PLAN ACTIVIDADES",
          "Monto: S/ 7,000",
          "Código: 2@28863332",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "CONTRATACIÓN DEL SERVICIO DE MONITOREO Y SEGUIMIENTO DE PROYECTOS DE INVERSIÓN PÚBLICA PARA LA",
          "Monto: S/ 4,500",
          "Código: 2@27768927",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "CONTRATACIÓN DEL SERVICIO DE MONITOREO Y SEGUIMIENTO DE PROYECTOS DE INVERSIÓN PUBLICA.",
          "Monto: S/ 4,500",
          "Código: 2@27398719",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "CONTRATACIÓN DEL SERVICIO DE MONITOREO Y SEGUIMIENTO DE PROYECTOS DE INVERSIÓN PUBLICA",
          "Monto: S/ 9,000",
          "Código: 2@26855733",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "CONTRATACION DE UN PERSONAL PARA MONITOREAR LOS PROYECTOS DE INVERSION",
          "Monto: S/ 4,500",
          "Código: 2@25973402",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "SERVICIO DE MONITOREO Y SEGUIMIENTO DE PROYECTOS DE INVERSION PUBLICA",
          "Monto: S/ 10,500",
          "Código: 2@24908284",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "GOBIERNO REGIONAL DE HUANUCO SEDE CENTRAL",
          "SERVICIO DE SEGUIMIENTO Y MONITOREO DEL PLAN DE ACTIVIDADES",
          "Monto: S/ 13,500",
          "Código: 2@24103767",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10476544594",
          "Derechos Mineros",
          "(0)",
          "No registra derechos mineros en REINFO."
        ],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "4 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "4 trabajos con 7 años de experiencia aproximadamente",
          "ING. CIVIL",
          "GOBIERNO REGIONAL DE HUANUCO",
          "2023 – 2025",
          "HUANUCO",
          "ING. CIVIL",
          "GARCIA Y FRANCISCO E.I.R.L.",
          "2021 – 2022",
          "LIMA",
          "ING. CIVIL",
          "CONSORCIO PM - DEVENCO",
          "2020",
          "LIMA",
          "ING. CIVIL",
          "DYET TECNOLOGIA Y CONSTRUCCION",
          "2019",
          "LIMA"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-49": {
    "personId": "deputies-49",
    "candidateId": 1626,
    "rtcName": "Ana Luisa Yuffra Lugo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1626",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "05275038",
    "age": "67 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "2 títulos",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "Bachiller - CONTABILIDAD",
          "UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
          "Educación - FACILITADOR ECA",
          "UNODE"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "3 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES MUNICIPALES 1998",
          "REGIDOR PROVINCIAL",
          "MOVIMIENTO DE INTEGRACION PARA EL DESARROLLO",
          "LORETO - MAYNAS",
          "No elegido",
          "ELECCIONES REGIONALES Y MUNICIPALES 2002",
          "REGIDOR DISTRITAL",
          "MOVIMIENTO INDEPENDIENTE \"ACCION Y DESARROLLO\"",
          "LORETO - MAYNAS - SAN JUAN BAUTISTA",
          "Elegido",
          "ELECCIONES REGIONALES Y MUNICIPALES 2006",
          "ALCALDE DISTRITAL",
          "FRENTE INDEPENDIENTE DE LORETO",
          "LORETO - MAYNAS - SAN JUAN BAUTISTA",
          "No elegido",
          "Historial de Afiliación",
          "FUERZA POPULAR",
          "NACIONAL",
          "10/2021 – Vigente",
          "AFILIADO VÁLIDO"
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "8 contrato",
        "source": "Fuente: REINFO (Registro Integral de Formalización Minera)",
        "items": [
          "(8)",
          "RUC: 10052750381",
          "8 contratos",
          "S/ 40,000",
          "MUNICIPALIDAD DISTRITAL DE PUNCHANA",
          "CONTRATACION DEL SERVICIO DE UN (01) PERSONAL BAJO LA MODALIDAD DE LOCACION DE SERVICIO,CORRESPONDIE",
          "Monto: S/ 4,000",
          "Código: 2@35996281",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10052750381",
          "MUNICIPALIDAD DISTRITAL DE PUNCHANA",
          "POR LA CONTRATACION DEL SERVICIO DE PERSONAL BAJO LA MODALIDAD DE LOCACION DE SERVICIO, CORRESPONDIE",
          "Monto: S/ 4,000",
          "Código: 2@35610336",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10052750381",
          "MUNICIPALIDAD DISTRITAL DE PUNCHANA",
          "POR LA CONTRATACION DE UN PERSONAL BAJO LA MODADLIDAD DE LOCACION DE SERVICIOS CORRESPONDIENTE AL ME",
          "Monto: S/ 4,000",
          "Código: 2@35248996",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10052750381",
          "MUNICIPALIDAD DISTRITAL DE PUNCHANA",
          "POR LA CONTRATACION DE PERSONAL BAJO LA MODALIDAD DE LOCACION DE SERVICIO CORRESPONDIENTE AL MES DE",
          "Monto: S/ 4,000",
          "Código: 2@34985148",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10052750381",
          "MUNICIPALIDAD DISTRITAL DE PUNCHANA",
          "POR LA CONTRATACION DE PERSONAL BAJO LA MODALIDAD DE LOCACION CORRESPONDIENTE AL MES DE MARZO",
          "Monto: S/ 4,000",
          "Código: 2@34215895",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10052750381",
          "MUNICIPALIDAD DISTRITAL DE PUNCHANA",
          "POR LA CONTRATACION DE UN PERSONAL BAJO LA MODADLIDAD DE LOCACION DE SERVICIOS CORRESPONDIENTE AL ME",
          "Monto: S/ 4,000",
          "Código: 2@34215618",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10052750381",
          "MUNICIPALIDAD DISTRITAL DE PUNCHANA",
          "CONTRATACION DE UN PERSONAL MODALIDAD DE LOCACION DE SERVICIO CORRESPONDIENTE AL MES ENERO DEL 2025",
          "Monto: S/ 4,000",
          "Código: 2@34092199",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10052750381",
          "GOBIERNO REGIONAL DE LORETO SEDE CENTRAL",
          "CONTRATACION PROFESIONAL ESPECIALISTA TEMA SOCIAL Y DESARROLLAR DE LAS ACTIVIDADES MULTISECTORALES",
          "Monto: S/ 12,000",
          "Código: 1@771871",
          "SERVICIO",
          "Estado: Contratado",
          "Fin: 2014-02-14T05:00:00.000+0000",
          "RUC: 10052750381",
          "Derechos Mineros",
          "(0)",
          "No registra derechos mineros en REINFO."
        ],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "6 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(3)",
          "CASA HABITACIÓN",
          "AV. LAS COLINAS N° 125",
          "Autovalúo: S/ 163,631.88",
          "EN LA SECCIÓN VALOR SE ESTÁ DUPLICANDO EL VALOR DE AUTOVALÚO AL 2025 YA QUE SE DESCONOCE EL VALOR EN EL MERCADO.",
          "CASA HABITACIÓN",
          "AV. LAS COLINAS N° 197",
          "Autovalúo: S/ 20,437.44",
          "TERRENO CON UNA VIVIENDA PRECARIA. EN LA SECCIÓN VALOR SE ESTÁ DUPLICANDO EL VALOR DE AUTOVALÚO AL 2025 YA QUE SE DESCONOCE EL VALOR EN EL MERCADO.",
          "CASA HABITACION",
          "URBANIZACIÓN CIUDAD DEL PESCADOR MZ Y2 LOTE 13, BELLAVISTA - CALLAO",
          "Autovalúo: S/ 298,522.86",
          "SUCESIÓN INTESTADA. EN LA SECCIÓN VALOR SE ESTÁ DUPLICANDO EL VALOR DE AUTOVALÚO AL 2025 YA QUE SE DESCONOCE EL VALOR EN EL MERCADO.",
          "Bienes muebles (Vehículos)",
          "(3)",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: MY83770",
          "Valor: S/ 2,975",
          "MOTOCICLETA LIFAN NEGRO — $ 850 B.V 000337 - 19-09-05 PARTIDA N° MY83770 01-08-2006",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: 53631L",
          "Valor: S/ 5,629.04",
          "TRIMOTO - COLOR AZUL — TRI MOTO DE PASAJEROS MAVILA, PARTIDA 60585564, TÍTULO 2013-12342",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: 12465A",
          "Valor: S/ 5,954.83",
          "MOTOCICLETA COLOR APACHE RTR 180 — PARTIDA: 52621313; TÍTULO: 2013-415456",
          "Titularidad (Acciones y Participaciones)",
          "(0)",
          "No registra acciones ni participaciones."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "5 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "5 trabajos con 6 años de experiencia aproximadamente",
          "COORDINADORA",
          "MUNICIPALIDAD DISTRITAL DE PUNCHANA",
          "2025",
          "LORETO",
          "ASISTENTE",
          "OFICINA PRIVADA ING. JUAN GARCÍA",
          "2024",
          "LORETO",
          "JEFE DE OFICINA",
          "MUNICIPALIDAD DISTRITAL SAN JUAN BAUTISTA",
          "2022",
          "LORETO",
          "COORDINADORA/GERENTE",
          "GOBIERNO REGIONAL DE LORETO",
          "2013 – 2014",
          "LORETO",
          "ASESORA ALCALDÍA",
          "MUNICIPALIDAD PROVINCIAL DE MAYNAS",
          "2012",
          "LORETO"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-50": {
    "personId": "deputies-50",
    "candidateId": 1571,
    "rtcName": "Carlos Alberto Zegarra Sanchez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1571",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "80387180",
    "age": "48 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "4 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Maestría - MAESTRO EN INVESTIGACIÓN Y DOCENCIA UNIVERSITARIA",
          "UNIVERSIDAD PERUANA DE CIENCIAS E INFORMÁTICA S.A.C.",
          "Año: 2019",
          "Bachiller - BACHILLER EN INGENIERIA DE SISTEMAS E INFORMATICA",
          "UNIVERSIDAD ALAS PERUANAS S.A.",
          "Año: 2012",
          "Título - INGENIERO DE SISTEMAS E INFORMATICA",
          "UNIVERSIDAD ALAS PERUANAS S.A.",
          "Año: 2013",
          "Doctorado - DOCTOR EN EDUCACIÓN",
          "UNIVERSIDAD NACIONAL SANTIAGO ANTÚNEZ DE MAYOLO",
          "Año: 2025"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "15 contrato",
        "source": "Fuente: REINFO (Registro Integral de Formalización Minera)",
        "items": [
          "(15)",
          "RUC: 10803871804",
          "15 contratos",
          "S/ 84,000",
          "MUNICIPALIDAD DISTRITAL DE SUBTANJALLA",
          "SERVICIOS PRETADSO COMO SOPORTE INFORMATIVO Y MANTENIMIENTO DEL SISTEMA DEL 06 AL 20 DE OCTUBRE",
          "Monto: S/ 1,500",
          "Código: 2@5415477",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-MEMORANDUM N 366- 2016/SERPAR LIMA /SG/GCII/MML / SERV.DE CONTRAT. TEMPORAL DE UN PROFESIONAL PARA EL MANEJO DE LAS REDES SOCIALES Y WEB INSTITUCIONAL PARA LA OMRP, POR EL MES DE JULIO.",
          "Monto: S/ 3,500",
          "Código: 2@4624259",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-MEMORANDUM N 333- 2016/SERPAR LIMA /SG/GCII/MML / CONTRAT.DE UN PROFESIONAL EN INFORMATICA PARA MONITOREO Y DESARROLLO DE REDES SOCIALES Y WEB INSTITUCIONAL.",
          "Monto: S/ 4,500",
          "Código: 2@4408469",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-MEMO N° 257-2016/SERPAR LIMA/SG/PMRP/MML / CONTRAT. TEMPORAL DE UN(A) PROFESIONAL PARA EL MANEJO DE LAS REDES SOCIALES Y WEB INSTITUCIONAL, PARA EL MES DE MAYO.",
          "Monto: S/ 4,500",
          "Código: 2@4185780",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-INFORME N° 0666-2016/SERPAR LIMA/SG/GT/MML / CONTRATACION DE PROFESIONAL PARA ELABORACION DEL SERVICIO DE ANALISIS Y MEJORA DE PROCEDIMIENTOS ADMINISTRATIVOS DEL PIP. PARQUE ZONAL LLOQUE YUPANQUI",
          "Monto: S/ 5,000",
          "Código: 2@3929664",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-INFORME N° 0262-2016/SERPAR LIMA/SG/GT/MML / CONTRA. DE UN PROFESIONAL PARA LA ELABOR. DEL SERVICIO DE ANALISIS Y MEJORA DE PROCEDIMEITOS ADMINISTRATIVOS DEL PROYECTO",
          "Monto: S/ 10,000",
          "Código: 2@3515688",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-INFORME N° 02751-2015/SERPAR LIMA/SG/GT/MML / CONTR.DE UN PROF. PARA LA ELABOR. DEL INFORME DE VALIDACION DE LA COBERTURA DE TECNOL.VIP PARA LA COMUNICACION TELEFONICA",
          "Monto: S/ 5,000",
          "Código: 2@3605271",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-INFORME N° 02149-2015/SERPAR LIMA/SG/GT/MML / CONTR.DE UN PROFESIONAL PARA LA ELABORACION DEL INFORME DE COMPATIBILIZACION DE LAS REDES DE TELECOMUNICACIONES",
          "Monto: S/ 10,000",
          "Código: 2@3602285",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-INFORME N° 01818-2015/SERPAR LIMA/SG/GT/MML / CONTR. DE UN PROFESIONAL PARA LA ELABORACION DEL INFORME DE COMPATIBILIZACION DE LAS REDES DE TELECOMUNICACIONES",
          "Monto: S/ 10,000",
          "Código: 2@3597852",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-INFORME N° 108-2015/SERPAR-LIMA/GA/UI/MML / CONTRAT.DE UN ANALISTA DE PRUEBAS FUNCIONAL - DESARROLLO Y PRUEBAS TESTING, PARA LA UI POR EL MES DE JULIO",
          "Monto: S/ 5,000",
          "Código: 2@3598865",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-INFORME N° 078- 2015/SERPAR-LIMA/GA/UI/MML. / SERV.DE CONTR.DE UN ANALISTA DE PRUEBAS FUNCIONAL-DESARROLLO Y PRUEBAS TESTING, POR EL MES DE JUNIO",
          "Monto: S/ 5,000",
          "Código: 2@3598042",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-INFORME N° 060-2015/SERPAR-LIMA/GA/UI/MML. / CONTRAT. DE SERVICIO DEL PORTAL DE TRANSFERENCIA PARA LA UNIDAD DE INFORMATICA",
          "Monto: S/ 5,000",
          "Código: 2@3515909",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-INFORME N° 043-2015/SEREPAR-LIMA/GA/UI/MML / SERVICIO DE UN ASESOR DE SISTEMAS PARA LA UNIDAD DE INFORMATICA, POR EL MES DE ABRIL.",
          "Monto: S/ 5,000",
          "Código: 2@3431914",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-INFORME ° 030-2015/SERPAR LIMA/GA/UI/MML / SERV.DE CONTRAT. DE UN PERSONAL PARA EL AREA DE SISTEMAS",
          "Monto: S/ 5,000",
          "Código: 2@3606285",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "SERVICIOS DE PARQUES DE LIMA",
          "-INFORME N 023-2015/SERPAR LIMA/GA/UI/MML / SERV.DE CONTRAT.DE UN ESPECIALISTA INFORMATICO PARA LA UNIDAD DE INFORMATICA , POR EL MES DE FEBRERO",
          "Monto: S/ 5,000",
          "Código: 2@3432881",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10803871804",
          "Derechos Mineros",
          "(0)",
          "No registra derechos mineros en REINFO."
        ],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "5 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(2)",
          "REGISTRO DE PREDIOS",
          "LIMA-VILLA MARIA DEL TRIUNFO- MZ 4B SUB LOTE 18F SECTOR PRIMERO - PUEBLO JOVEN SAN FRANCISCO DE L",
          "NO SOY NI HE SIDO PROPIETARIO DE ESTE BIEN INMUEBLE. DE ACUERDO CON LA INFORMACIÓN DE REGISTROS PÚBLICOS SE CONSTATA QUE PERTENECE A UN HOMÓNIMO CARLO ALBERTO ZEGARRA SANCHEZ, IDENTIFICADO CON DNI. 10037588, PARTIDA REGISTRAL P03302557.",
          "REGISTRO DE PREDIOS",
          "AVENIDA DEL RIO NUM 103 DPTO N°1407 - DÉCIMO CUARTO PISO URB AZCONA PUEBLO LIBRE - LIMA - LIMA",
          "Autovalúo: S/ 66,975.46",
          "Es un departamento. EL VALOR COMERCIAL CONSIGNADO ES EL BRINDADO POR EL CANDIDATO.",
          "Bienes muebles (Vehículos)",
          "(2)",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: D8T464",
          "NINGUNA — NO SOY NI HE SIDO PROPIETARIO DE ESTE BIEN MUEBLE. DE ACUERDO CON LA INFORMACIÓN DE REGISTROS PÚBLICOS SE CONSTATA QUE PERTENECE A UN HOMÓNIMO CARLOS ALBERTO ZEGARRA SANCHEZ, IDENTIFICADO CON DNI. 70692108 - PARTIDA REGISTRAL Nº 52652567 - PLACA D8T464.",
          "Camión Blanco Marca JAC",
          "Placa: AWV-866",
          "Valor: S/ 33,700",
          "Modelo X200 del año 2019 — La compra se efectuó en la notaría Zambrano en la ciudad de Lima. La Oficina de Registros Públicos me informó la existencia de una observación previa al registro vehicular. El valor consignado es de la Escritura Publica 2025.",
          "Titularidad (Acciones y Participaciones)",
          "(1)",
          "Grupo Promotor Talento e Innovación S.A.C.",
          "Acciones",
          "Cantidad: 63",
          "Valor: S/ 100",
          "EL VALOR NOMINAL DEL TOTAL DE MIS ACCIONES ES DE S/ 6,300.LA EMPRESA GRUPO PROMOTOR TALENTO E INNOVACIÓN S.A.C. SE ENCUENTRA DADA DE BAJA."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "1 sanciones",
        "source": "Fuente: OECE (Organismo Supervisor de las Contrataciones del Estado)",
        "items": [
          "OECE",
          "No registra sanciones en el OECE."
        ],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "5 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "5 trabajos con 15 años de experiencia aproximadamente",
          "Asesor II",
          "Gobierno Regional de Ica",
          "2023 – 2025",
          "ICA",
          "Director Regional",
          "Gobierno Regional de Ica",
          "2023 – 2025",
          "ICA",
          "Gerente General",
          "Grupo Promotor Talento e Innovación",
          "2016 – 2024",
          "ANCASH",
          "personal de Informática",
          "Servicios de Parque de Lima",
          "2015 – 2016",
          "LIMA",
          "Personal de Informática",
          "Gobierno Regional de Ica",
          "2011 – 2015",
          "ICA"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-51": {
    "personId": "deputies-51",
    "candidateId": 1960,
    "rtcName": "Marlon Alberto Aguirre Ramos",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1960",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "46432487",
    "age": "35 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "3 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Bachiller - BACHILLER EN INGENIERÍA CIVIL",
          "UNIVERSIDAD PERUANA LOS ANDES",
          "Año: 2019",
          "Bachiller - BACHILLER EN INGENIERÍA ELÉCTRICA",
          "UNIVERSIDAD CONTINENTAL S.A.C.",
          "Año: 2021",
          "Título - Ingeniero Civil",
          "UNIVERSIDAD PERUANA LOS ANDES",
          "Año: 2021"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "4 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES REGIONALES Y MUNICIPALES 2010",
          "REGIDOR DISTRITAL",
          "ALIANZA REGIONAL JUNIN SOSTENIBLE",
          "JUNIN - HUANCAYO - EL TAMBO",
          "Elegido",
          "ELECCIONES REGIONALES Y MUNICIPALES 2014",
          "REGIDOR PROVINCIAL",
          "JUNIN EMPRENDEDORES RUMBO AL 21",
          "JUNIN - HUANCAYO",
          "No elegido",
          "ELECCIONES REGIONALES Y MUNICIPALES 2018",
          "REGIDOR DISTRITAL",
          "JUNIN SOSTENIBLE CON SU GENTE",
          "JUNIN - HUANCAYO - EL TAMBO",
          "No elegido",
          "ELECCIONES REGIONALES Y MUNICIPALES 2022",
          "CONSEJERO REGIONAL",
          "JUNIN SOSTENIBLE CON SU GENTE",
          "JUNIN - HUANCAYO",
          "No elegido",
          "Historial de Afiliación",
          "ALIANZA NACIONAL DE TRABAJADORES AGRICULTORES UNIVERSITARIOS RESERVISTAS Y OBREROS",
          "NACIONAL",
          "07/2024 – 03/2025",
          "AFILIACIÓN CANCELADA"
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "1 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(0)",
          "No registra bienes inmuebles.",
          "Bienes muebles (Vehículos)",
          "(0)",
          "No registra bienes muebles.",
          "Titularidad (Acciones y Participaciones)",
          "(1)",
          "EMPRESA DE MADERAS OXAPAMPA S.A.C.",
          "Acciones",
          "Cantidad: 125",
          "Valor: S/ 1,250",
          "EMPRESA DE MADERAS OXAPAMPA S.A.C. con RUC 20600174038"
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "2 deudas",
        "source": "Fuente: SLCP (Sistema de Licencias de Conducir por Puntos) y SCPPP (Sistema de Consulta de Papeletas Por Puntos)",
        "items": [
          "Deudas alimentarias",
          "No registra deudas alimentarias.",
          "Deudas judiciales",
          "No registra deudas judiciales.",
          "Infracciones de tránsito",
          "Categoría: AI",
          "Licencia Vigente",
          "Vence: 17/08/2031",
          "Puntos acumulados: 5",
          "Faltas graves: 0",
          "Faltas muy graves: 0",
          "Papeletas: 2",
          "L01",
          "Leve",
          "Dejar mal estacionado el vehículo en lugares permitidos",
          "SAT LIMA",
          "N° 15221548",
          "Fecha: 14/10/2024",
          "5 puntos",
          "G25",
          "Grave",
          "No portar el SOAT físico o digital vigente",
          "MUNICIPALIDAD DE CONCEPCION",
          "N° 003668",
          "Fecha: 19/08/2021",
          "Pendiente de Pago"
        ],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "1 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "1 trabajo con 11 años de experiencia aproximadamente",
          "GERENTE GENERAL",
          "EMPRESA DE MADERAS OXAPAMPA S.A.C.",
          "2015 – 2025",
          "JUNIN"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-52": {
    "personId": "deputies-52",
    "candidateId": 1872,
    "rtcName": "Yuli Liliana Ambrosio Dominguez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1872",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "43845728",
    "age": "39 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "2 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Bachiller - BACHILLER EN ENFERMERIA",
          "UNIVERSIDAD DE HUÁNUCO",
          "Año: 2017",
          "Título - TITULO PROFESIONAL DE LICENCIADA EN ENFERMERIA",
          "UNIVERSIDAD DE HUÁNUCO",
          "Año: 2017"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "4 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(0)",
          "No registra bienes inmuebles.",
          "Bienes muebles (Vehículos)",
          "(4)",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: W57257",
          "Valor: S/ 3,500",
          "Marca JINCO. Modelo RTM100-4B",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: 3561BW",
          "Valor: S/ 3,500",
          "Marca RONCO. Modelo TR 150K. Año Modelo 2018",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: 0442NW",
          "Valor: S/ 4,000",
          "Marca ULTRA. Año modelo 2022. Nro Motor: 1P54FMIN1020940",
          "REGISTRO DE PROPIEDAD VEHICULAR",
          "Placa: 0534NW",
          "Valor: S/ 4,000",
          "Marca ULTRA. Año Modelo 2022. Nro Motor: 1P54FMIN1020985",
          "Titularidad (Acciones y Participaciones)",
          "(0)",
          "No registra acciones ni participaciones."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "1 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "1 trabajo con 6 años de experiencia aproximadamente",
          "Enfermería",
          "P.S Villavista",
          "2020 – 2025",
          "HUANUCO"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-53": {
    "personId": "deputies-53",
    "candidateId": 1896,
    "rtcName": "Giannina Iris Avendaño Vilca",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1896",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "40855980",
    "age": "45 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "2 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Bachiller - BACHILLER EN DERECHO",
          "UNIVERSIDAD NACIONAL FEDERICO VILLARREAL",
          "Año: 2004",
          "Título - ABOGADO",
          "UNIVERSIDAD NACIONAL FEDERICO VILLARREAL",
          "Año: 2006"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "2 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES CONGRESALES EXTRAORDINARIAS 2020",
          "CONGRESISTA DE LA REPÚBLICA",
          "JUNTOS POR EL PERU",
          "LIMA + RESIDENTES EN EL EXTRANJERO",
          "No elegido",
          "ELECCIONES GENERALES 2021",
          "CONGRESISTA DE LA REPÚBLICA",
          "JUNTOS POR EL PERU",
          "LIMA",
          "No elegido",
          "Historial de Afiliación",
          "JUNTOS POR EL PERU",
          "NACIONAL",
          "10/2017 – Vigente",
          "AFILIADO VÁLIDO",
          "PARTIDO NACIONALISTA PERUANO",
          "NACIONAL",
          "10/2010 – 08/2014",
          "PARTIDO MOVIMIENTO HUMANISTA PERUANO",
          "NACIONAL",
          "07/2005 – 05/2007"
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "2 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(2)",
          "REGISTRO DE PREDIOS",
          "ZONA: ZONA REGISTRAL IX - SEDE LIMA; OFICINA: HUARAL",
          "REGISTRO DE PREDIOS",
          "U.C. 104856 FUNDO IRRIGACIÓN A ESPERANZA SECCIÓN LA VIRGEN HUARAL - HUARAL - LIMA",
          "Bienes muebles (Vehículos)",
          "(0)",
          "No registra bienes muebles.",
          "Titularidad (Acciones y Participaciones)",
          "(0)",
          "No registra acciones ni participaciones."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "4 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "4 trabajos con 15 años de experiencia aproximadamente",
          "Directora Nacional",
          "Centro de Formación en Turismo",
          "2022",
          "LIMA",
          "Asesora del despacho ministerial",
          "Ministerio de Comercio Exterior y Turismo",
          "2021",
          "LIMA",
          "Jefe del Gabinete de Asesores",
          "Ministerio de Comercio Exterior y Turismo",
          "2021 – 2022",
          "LIMA",
          "Jefe de Área",
          "Defensoría del Pueblo",
          "2011 – 2025",
          "LIMA"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-54": {
    "personId": "deputies-54",
    "candidateId": 1963,
    "rtcName": "Graciela Chipana Condori",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1963",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "40775741",
    "age": "50 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "2 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Segunda Especialidad - TITULO DE SEGUNDA ESPECIALIDAD EN ACOMPAÑAMIENTO PEDAGOGICO",
          "UNIVERSIDAD PERUANA CAYETANO HEREDIA",
          "Año: 2015",
          "Bachiller - BACHILLER EN EDUCACIÓN",
          "UNIVERSIDAD NACIONAL DE SAN AGUSTÍN DE AREQUIPA",
          "Año: 2023"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "8 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(8)",
          "REGISTRO DE PREDIOS",
          "MZ K LOTE 14 SECTOR PAMPAS DE SAN ANTONIO - MOQUEGUA SECTOR A6 - 3 SAN ANTONIO - MARISCAL NIETO - MOQUEGUA",
          "Autovalúo: S/ 1,090.44",
          "Copropietario (sucesión intestada 5 hermanos)",
          "REGISTRO DE PREDIOS",
          "MZ B LOTE 15 SECTOR 2C -1 PAMPA DE SAN ANTONIO SAN ANTONIO - MARISCAL NIETO - MOQUEGUA",
          "Autovalúo: S/ 380.6",
          "Copropietario (sucesión intestada 5 hermanos)",
          "REGISTRO DE PREDIOS",
          "MZ B LOTE 20 SECTOR 2C -1 PAMPA DE SAN ANTONIO SAN ANTONIO - MARISCAL NIETO - MOQUEGUA",
          "Autovalúo: S/ 354.3",
          "Copropietario (sucesión intestada 5 hermanos)",
          "REGISTRO DE PREDIOS",
          "MARISCAL NIETO-MOQUEGUA- MZ U8 LOTE 24 - ASENTAMIENTO HUMANO PAMPAS DE SAN ANTONIO, SECTOR B",
          "Autovalúo: S/ 956.28",
          "Copropietario (sucesión intestada 5 hermanos)",
          "REGISTRO DE PREDIOS",
          "MARISCAL NIETO-MOQUEGUA- MZ W8 LOTE 23 - ASENTAMIENTO HUMANO PAMPAS DE SAN ANTONIO, SECTOR B",
          "Autovalúo: S/ 978.8",
          "Representa el 50% del total de la propiedad",
          "REGISTRO DE PREDIOS",
          "MARISCAL NIETO-MOQUEGUA- MZ K' LOTE 6 - PUEBLO JOVEN SAN FRANCISCO",
          "Autovalúo: S/ 978.8",
          "Copropietario (sucesión intestada 5 hermanos)",
          "REGISTRO DE PREDIOS",
          "MARISCAL NIETO-MOQUEGUA- MZ N2 LOTE 19 SECTOR A - PROYECTO HABILITACION URBANA PAMPAS DE SAN ANTO",
          "Autovalúo: S/ 1,090.44",
          "Casa",
          "Jr. Ejercicio Z4 - Juliaca",
          "Autovalúo: S/ 1,500",
          "Sucesión intestada",
          "Bienes muebles (Vehículos)",
          "(0)",
          "No registra bienes muebles.",
          "Titularidad (Acciones y Participaciones)",
          "(0)",
          "No registra acciones ni participaciones."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "4 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "4 trabajos con 13 años de experiencia aproximadamente",
          "Docente",
          "IEI 265 - San Antonio de Padua",
          "2020 – 2025",
          "MOQUEGUA",
          "Docente",
          "IEI 159 - Los Niños de Jesus",
          "2018 – 2019",
          "MOQUEGUA",
          "Jefa de Proyecto",
          "Caritas del Perú",
          "2016 – 2017",
          "CALLAO",
          "Acompañante Pedagogico - PELA",
          "Ministerio de Educación - UGEL Mariscal nieto",
          "2013 – 2015",
          "MOQUEGUA"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-55": {
    "personId": "deputies-55",
    "candidateId": 1932,
    "rtcName": "Remigio Condori Flores",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1932",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "01223056",
    "age": "59 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "2 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Título - ABOGADO",
          "UNIVERSIDAD JOSÉ CARLOS MARIÁTEGUI",
          "Año: 2010",
          "Bachiller - BACHILLER EN DERECHO",
          "UNIVERSIDAD ANDINA NÉSTOR CÁCERES VELÁSQUEZ",
          "Año: 2008"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "1 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES REGIONALES Y MUNICIPALES 2010",
          "ACCESITARIO",
          "FRENTE AMPLIO DE PUNO",
          "PUNO - PUNO",
          "No elegido",
          "Historial de Afiliación",
          "JUNTOS POR EL PERU",
          "NACIONAL",
          "09/2021 – Vigente",
          "AFILIADO VÁLIDO"
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "12 bienes",
        "source": "Fuente: JNE - Hoja de Vida",
        "items": [
          "Bienes inmuebles",
          "(12)",
          "Urbano",
          "Avenida Circunvalaciòn Sur 1958",
          "Autovalúo: S/ 3,241",
          "Urbano",
          "Calle Bartolina Cisa",
          "Autovalúo: S/ 4,203",
          "Rural",
          "Nuñumiani Cancharani Parcialidad Manto",
          "Autovalúo: S/ 5,265",
          "Rural",
          "Arimisa Parcialidad Manto",
          "Autovalúo: S/ 3,143",
          "Rural",
          "Uma Jalso Parcialidad Manto",
          "Autovalúo: S/ 1,351",
          "Rural",
          "Salahuayco Parqui Parcialidad Manto",
          "Autovalúo: S/ 24.14",
          "Rural",
          "Otro Salahuayco Parqui Parcialidad Manto",
          "Autovalúo: S/ 1,414",
          "Rural",
          "Huayllapujo Chaqri Parcialidad Manto",
          "Autovalúo: S/ 622.91",
          "Urbano",
          "Jiròn Ciudad de La Paz",
          "Autovalúo: S/ 5,499",
          "Urbano",
          "Parcialidad Mantohuaylla Pujjo",
          "Autovalúo: S/ 35,513",
          "Rural",
          "Occopata Manto Cancharani",
          "Autovalúo: S/ 372.56",
          "Rural",
          "Tinta Parqui Los Andes Cancharani",
          "Autovalúo: S/ 1,862.94",
          "Bienes muebles (Vehículos)",
          "(0)",
          "No registra bienes muebles.",
          "Titularidad (Acciones y Participaciones)",
          "(0)",
          "No registra acciones ni participaciones."
        ],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "1 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "1 trabajo con 9 años de experiencia aproximadamente",
          "Abogado",
          "Independiente",
          "2017 – 2025",
          "PUNO"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-56": {
    "personId": "deputies-56",
    "candidateId": 1956,
    "rtcName": "Oswar Elbis Cahuaza Mitivire",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1956",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "00106838",
    "age": "51 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "1 títulos",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "Técnica - DOCENTE",
          "ISPP YARIINACOCHA"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "10 contrato",
        "source": "Fuente: REINFO (Registro Integral de Formalización Minera)",
        "items": [
          "(10)",
          "RUC: 10001068381",
          "10 contratos",
          "S/ 12,900",
          "MUNICIPALIDAD DISTRITAL DE MANANTAY",
          "CONTRATACION DE PERSONAL PARA DESMPEÑARSE COMO ALMACENERO EN LA SUB GERENCIA DE MAESTRANA Y POOL DE",
          "Monto: S/ 1,300",
          "Código: 2@32480754",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10001068381",
          "MUNICIPALIDAD DISTRITAL DE MANANTAY",
          "CONTRATACION DE SERVICIOS PARA EK CUMPLIMIENTO DE METAS DE LA SUB GERENCIA DE MAESTRANZA Y POOL",
          "Monto: S/ 1,300",
          "Código: 2@32480282",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10001068381",
          "MUNICIPALIDAD DISTRITAL DE MANANTAY",
          "CONTRATACION DE SERVICIOS PARA EL CUMPLIMIENTO DE METAS DE LA SUB GERENCIA DE MAESTRANZA Y POOL",
          "Monto: S/ 1,300",
          "Código: 2@32451814",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10001068381",
          "MUNICIPALIDAD DISTRITAL DE MANANTAY",
          "CONTRATACION DE SERVICIOS PARA CUMPLIMIENTO DE METAS DE LA SUB GERENCIA DE MAESTRANZA Y POOL DE MAQ",
          "Monto: S/ 1,300",
          "Código: 2@26225575",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10001068381",
          "MUNICIPALIDAD DISTRITAL DE MANANTAY",
          "CONTRATACION DE SERVICIOS PARA CUMPLIENTO DE METAS DE LA SUB GERENCIA DE MAESTRANZA Y POOL DE",
          "Monto: S/ 1,300",
          "Código: 2@26226805",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10001068381",
          "MUNICIPALIDAD DISTRITAL DE MANANTAY",
          "CONTRATACION DE SERVICIOS PARA CUMPLIIENTO DE METAS DE LA SUB GERENCIA DE MAETSRANZA Y POOL DE MAQUI",
          "Monto: S/ 1,300",
          "Código: 2@26000752",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10001068381",
          "MUNICIPALIDAD DISTRITAL DE MANANTAY",
          "CONTRATACIÒN DE SERVICIOS PARA CUMPLIMIENTO DE METAS DE LA SUB GERENCIA DE MAESTRANZA Y POOL DE MAQU",
          "Monto: S/ 1,300",
          "Código: 2@25998149",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10001068381",
          "MUNICIPALIDAD DISTRITAL DE MANANTAY",
          "CONTRATACION DE SERVICIOS PARA CUMPLIMIENTO METAS DE LA SUB GERENCIA DE MAESTRANZA Y POOL DE MA",
          "Monto: S/ 1,300",
          "Código: 2@25950532",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10001068381",
          "MUNICIPALIDAD DISTRITAL DE MANANTAY",
          "CONTRATACION DE PERSONAL PARA CUMPLIMIENTO DE METAS DE LA SUB GERENCIA DE MAESTRANZA Y POOL DE MAQUI",
          "Monto: S/ 1,300",
          "Código: 2@25950271",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10001068381",
          "MUNICIPALIDAD DISTRITAL DE MANANTAY",
          "CONTRATACION DE PERSONAL LOCACION DE SERVICIO PARA LA SUB GERENCIA DE MAESTRANZA Y POOL MAQUINARIA",
          "Monto: S/ 1,200",
          "Código: 2@25949607",
          "SERVICIO",
          "Estado: Contratado",
          "RUC: 10001068381",
          "Derechos Mineros",
          "(0)",
          "No registra derechos mineros en REINFO."
        ],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "1 deudas",
        "source": "Fuente: SLCP (Sistema de Licencias de Conducir por Puntos) y SCPPP (Sistema de Consulta de Papeletas Por Puntos)",
        "items": [
          "Deudas alimentarias",
          "No registra deudas alimentarias.",
          "Deudas judiciales",
          "No registra deudas judiciales.",
          "Infracciones de tránsito",
          "Categoría: -",
          "Licencia Sin licencia",
          "Vence: -",
          "Puntos acumulados: 0",
          "Faltas graves: 1",
          "Faltas muy graves: 0",
          "Papeletas: 1",
          "G16",
          "Grave",
          "Transitar por rutas o vías no autorizadas",
          "MUNICIPALIDAD DE CORONEL PORTILLO",
          "N° 002043",
          "Fecha: 05/07/2023",
          "40 puntos",
          "Pendiente de Pago"
        ],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "1 sanciones",
        "source": "Fuente: OECE (Organismo Supervisor de las Contrataciones del Estado)",
        "items": [
          "OECE",
          "No registra sanciones en el OECE."
        ],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "3 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "3 trabajos con 30 años de experiencia aproximadamente",
          "JEFE ALMACEN",
          "MUNICIPALIDAD DISTRITAL DE MANANTAY",
          "2023",
          "UCAYALI",
          "SUBPREFECTO",
          "SUBPREFECTURA REGION UCAYALI",
          "2022 – 2025",
          "UCAYALI",
          "DOCENTE",
          "INSTITUTO EDUCATIVO N°64006 JORGE CHAVEZ",
          "1996 – 2025",
          "UCAYALI"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-57": {
    "personId": "deputies-57",
    "candidateId": 1869,
    "rtcName": "Hector Guillen Valencia",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1869",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "23266182",
    "age": "56 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "1 títulos",
        "source": "Fuente: SUNEDU (Superintendencia Nacional de Educación Superior Universitaria)",
        "items": [
          "Bachiller - BACHILLER EN EDUCACION",
          "UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS",
          "Año: 1999"
        ],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "3 elecciones",
        "source": "",
        "items": [
          "Historial Electoral",
          "ELECCIONES CONGRESALES EXTRAORDINARIAS 2020",
          "CONGRESISTA DE LA REPÚBLICA",
          "JUNTOS POR EL PERU",
          "HUANCAVELICA",
          "No elegido",
          "ELECCIONES GENERALES 2016",
          "CONGRESISTA DE LA REPÚBLICA",
          "PARTIDO HUMANISTA PERUANO",
          "HUANCAVELICA",
          "No elegido",
          "ELECCIONES GENERALES 2021",
          "CONGRESISTA DE LA REPÚBLICA",
          "JUNTOS POR EL PERU",
          "HUANCAVELICA",
          "No elegido",
          "Historial de Afiliación",
          "JUNTOS POR EL PERU",
          "NACIONAL",
          "03/2014 – Vigente",
          "AFILIADO VÁLIDO"
        ],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "3 deudas",
        "source": "Fuente: SLCP (Sistema de Licencias de Conducir por Puntos) y SCPPP (Sistema de Consulta de Papeletas Por Puntos)",
        "items": [
          "Deudas alimentarias",
          "No registra deudas alimentarias.",
          "Deudas judiciales",
          "No registra deudas judiciales.",
          "Infracciones de tránsito",
          "Categoría: AI",
          "Licencia Vigente",
          "Vence: 23/09/2034",
          "Puntos acumulados: 40",
          "Faltas graves: 1",
          "Faltas muy graves: 0",
          "Papeletas: 3",
          "G47",
          "Grave",
          "Estacionar afectando las operaciones de transporte público",
          "MUNICIPALIDAD DE HUANCAYO",
          "N° 200488598",
          "Fecha: 04/12/2025",
          "20 puntos",
          "L07",
          "Leve",
          "Usar la bocina de forma innecesaria o excesiva",
          "MUNICIPALIDAD DE HUANCAYO",
          "N° 200460599",
          "Fecha: 04/02/2025",
          "10 puntos",
          "L07",
          "Leve",
          "Usar la bocina de forma innecesaria o excesiva",
          "MUNICIPALIDAD DE HUANCAYO",
          "N° 200460006",
          "Fecha: 27/01/2025",
          "10 puntos"
        ],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "1 registros",
        "source": "Fuente: Declarado en Hoja de Vida (JNE)",
        "items": [
          "1 trabajo con 8 años de experiencia aproximadamente",
          "Profesor",
          "I.E. Nuestra Señora de la Asunción",
          "2018 – 2025",
          "HUANCAVELICA"
        ],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-58": {
    "personId": "deputies-58",
    "candidateId": 1961,
    "rtcName": "Jessica Sadith Perez Quispe",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1961",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "44908591",
    "age": "38 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-59": {
    "personId": "deputies-59",
    "candidateId": 1859,
    "rtcName": "Jessica Roxana Guevara Ramirez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1859",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "45353055",
    "age": "37 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-60": {
    "personId": "deputies-60",
    "candidateId": 1957,
    "rtcName": "Gabriel Robertino Gonzales Delgado",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1957",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "40093361",
    "age": "52 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-61": {
    "personId": "deputies-61",
    "candidateId": 1955,
    "rtcName": "James Arturo Holguin Aguirre",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1955",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "04810886",
    "age": "69 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-62": {
    "personId": "deputies-62",
    "candidateId": 1954,
    "rtcName": "Azucena Isla Rojas",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1954",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "05206203",
    "age": "61 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-63": {
    "personId": "deputies-63",
    "candidateId": 1860,
    "rtcName": "Luis Angel Jibaja Ramos",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1860",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "44106846",
    "age": "39 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-64": {
    "personId": "deputies-64",
    "candidateId": 22,
    "rtcName": "Anali Marquez Huanca",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=22",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "45442927",
    "age": "37 años",
    "region": "",
    "postulates": "PRIMER VICEPRESIDENTE DE LA REPÚBLICA",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-65": {
    "personId": "deputies-65",
    "candidateId": 1951,
    "rtcName": "Alejandro José Manay Pillaca",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1951",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "44560484",
    "age": "38 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-66": {
    "personId": "deputies-66",
    "candidateId": 1968,
    "rtcName": "Julian Luis Perez Mallqui",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1968",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "10536312",
    "age": "51 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-67": {
    "personId": "deputies-67",
    "candidateId": 1848,
    "rtcName": "Luz Merida Soto Ferrari",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1848",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "31012880",
    "age": "60 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-68": {
    "personId": "deputies-68",
    "candidateId": 1949,
    "rtcName": "Catherin Norma Palomino Casavilca",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1949",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "48689735",
    "age": "34 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-69": {
    "personId": "deputies-69",
    "candidateId": 1965,
    "rtcName": "Amalia Emilia Palomino Pacheco",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1965",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "29313850",
    "age": "58 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-70": {
    "personId": "deputies-70",
    "candidateId": 1959,
    "rtcName": "Yenifer Noelia Paredes Navarro",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1959",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "74638299",
    "age": "30 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-71": {
    "personId": "deputies-71",
    "candidateId": 1950,
    "rtcName": "Jesus Perez Alccahuaman",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1950",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "45043739",
    "age": "38 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-72": {
    "personId": "deputies-72",
    "candidateId": 1935,
    "rtcName": "Jacqueline Viviana Tapullima Insapillo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1935",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "70163475",
    "age": "36 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-74": {
    "personId": "deputies-74",
    "candidateId": 1971,
    "rtcName": "Cesar Hugo Tito Rojas",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1971",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "01320941",
    "age": "55 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-75": {
    "personId": "deputies-75",
    "candidateId": 1873,
    "rtcName": "Marco Antonio Flores Valdizan",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1873",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "41711513",
    "age": "44 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-76": {
    "personId": "deputies-76",
    "candidateId": 1891,
    "rtcName": "Ernesto Alonzo Zunini Yerren",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1891",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "45327535",
    "age": "38 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-77": {
    "personId": "deputies-77",
    "candidateId": 1962,
    "rtcName": "Marino Teofilo Lavado Valdivia",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1962",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "42578522",
    "age": "41 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-78": {
    "personId": "deputies-78",
    "candidateId": 1952,
    "rtcName": "Olver Peña Cordova",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1952",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "42135939",
    "age": "43 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-79": {
    "personId": "deputies-79",
    "candidateId": 1857,
    "rtcName": "Pilar Sulca Castillo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1857",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "28303446",
    "age": "50 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-80": {
    "personId": "deputies-80",
    "candidateId": 1926,
    "rtcName": "Haydee Celinda Poma Huamani",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1926",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "42984568",
    "age": "41 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-81": {
    "personId": "deputies-81",
    "candidateId": 1938,
    "rtcName": "Svieta Valia Fernandez Gonzalez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1938",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "45792658",
    "age": "36 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-82": {
    "personId": "deputies-82",
    "candidateId": 1858,
    "rtcName": "Juan Amilcar Villanueva Calderon",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=1858",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "41400923",
    "age": "46 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-83": {
    "personId": "deputies-83",
    "candidateId": 2467,
    "rtcName": "Henry Antonio Albañil Carmona",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2467",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "46602828",
    "age": "35 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-84": {
    "personId": "deputies-84",
    "candidateId": 2466,
    "rtcName": "Edgar Adrian Alvaron de la Cruz",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2466",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "43170121",
    "age": "40 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-85": {
    "personId": "deputies-85",
    "candidateId": 32,
    "rtcName": "Dina Irene Hancco Hancco",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=32",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "01545223",
    "age": "56 años",
    "region": "",
    "postulates": "SEGUNDO VICEPRESIDENTE DE LA REPÚBLICA",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-86": {
    "personId": "deputies-86",
    "candidateId": 2427,
    "rtcName": "Arturo Cesar Eusebio Padilla",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2427",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07654582",
    "age": "62 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-87": {
    "personId": "deputies-87",
    "candidateId": 2403,
    "rtcName": "Raul Jesus Camargo Porta",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2403",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "19845556",
    "age": "65 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-88": {
    "personId": "deputies-88",
    "candidateId": 2453,
    "rtcName": "Juan Cesar Cabrera Nieto",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2453",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "00482691",
    "age": "62 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-89": {
    "personId": "deputies-89",
    "candidateId": 2402,
    "rtcName": "Andrea Dayna Medina Stein",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2402",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "46089177",
    "age": "36 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-90": {
    "personId": "deputies-90",
    "candidateId": 2370,
    "rtcName": "Heber Lopez Letona",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2370",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "25001331",
    "age": "52 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-91": {
    "personId": "deputies-91",
    "candidateId": 2354,
    "rtcName": "Luis Aurelio Masco Caceres",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2354",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "41242025",
    "age": "45 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-92": {
    "personId": "deputies-92",
    "candidateId": 2384,
    "rtcName": "Maximo Peralta Jorpa",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2384",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "19995860",
    "age": "60 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-93": {
    "personId": "deputies-93",
    "candidateId": 2401,
    "rtcName": "Victor Eduardo Piñan Mamani",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2401",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "70074678",
    "age": "34 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-94": {
    "personId": "deputies-94",
    "candidateId": 2471,
    "rtcName": "Jeenny Cristina Samanez Gonzales Vigil",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2471",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07793641",
    "age": "73 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-95": {
    "personId": "deputies-95",
    "candidateId": 2380,
    "rtcName": "Jose Ricardo Yataco Torrealva",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2380",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "42188288",
    "age": "44 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-96": {
    "personId": "deputies-96",
    "candidateId": 2463,
    "rtcName": "Demetrio Flavio Valqui Calderon",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2463",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "17930730",
    "age": "70 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-97": {
    "personId": "deputies-97",
    "candidateId": 2757,
    "rtcName": "Rossana Herminia Alayza Maccera",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2757",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "43478989",
    "age": "40 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-98": {
    "personId": "deputies-98",
    "candidateId": 2754,
    "rtcName": "Jessica Benitez Barrionuevo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2754",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "41356710",
    "age": "44 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-99": {
    "personId": "deputies-99",
    "candidateId": 2655,
    "rtcName": "Segundo Juan Castrejon Fernandez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2655",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "16629849",
    "age": "54 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-100": {
    "personId": "deputies-100",
    "candidateId": 2645,
    "rtcName": "Carmen Georgina Duarte Patiño de Pezet",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2645",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "10277219",
    "age": "69 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-101": {
    "personId": "deputies-101",
    "candidateId": 2634,
    "rtcName": "Edwin Espinoza Huillca",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2634",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "41678124",
    "age": "43 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-102": {
    "personId": "deputies-102",
    "candidateId": 2730,
    "rtcName": "Hilda Judit Fernandez de la Torre",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2730",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "31038213",
    "age": "52 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-103": {
    "personId": "deputies-103",
    "candidateId": 2695,
    "rtcName": "Nery Rodolfo Fernandez Nina",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2695",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "04647591",
    "age": "53 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-104": {
    "personId": "deputies-104",
    "candidateId": 2723,
    "rtcName": "Fernando Alberto Garcia Huby",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2723",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "08573694",
    "age": "65 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-105": {
    "personId": "deputies-105",
    "candidateId": 2618,
    "rtcName": "Edgar Dember Gonzales Polar",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2618",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "29715400",
    "age": "62 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-106": {
    "personId": "deputies-106",
    "candidateId": 2619,
    "rtcName": "Gloria Charito Hirache Pizarro",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2619",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "29311981",
    "age": "59 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-107": {
    "personId": "deputies-107",
    "candidateId": 2699,
    "rtcName": "Miguel Felix Huaman Cornejo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2699",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "02819812",
    "age": "56 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-108": {
    "personId": "deputies-108",
    "candidateId": 2720,
    "rtcName": "Nora Maria Llaque Linares",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2720",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "06296745",
    "age": "71 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-109": {
    "personId": "deputies-109",
    "candidateId": 2676,
    "rtcName": "Nathaly Milagros Molina Soto",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2676",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "76871362",
    "age": "29 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-110": {
    "personId": "deputies-110",
    "candidateId": 2643,
    "rtcName": "Lila Marianela Prado Vallejos",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2643",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "45741388",
    "age": "37 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-111": {
    "personId": "deputies-111",
    "candidateId": 2753,
    "rtcName": "Luis Eliseo Quispe Candia",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2753",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "40067839",
    "age": "77 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-112": {
    "personId": "deputies-112",
    "candidateId": 2662,
    "rtcName": "Oscar de Jesus Reto Otero",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2662",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "43348625",
    "age": "64 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-113": {
    "personId": "deputies-113",
    "candidateId": 2685,
    "rtcName": "Milagros Karina Santana Vera",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2685",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "15750425",
    "age": "52 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-114": {
    "personId": "deputies-114",
    "candidateId": 2673,
    "rtcName": "Romina Alejandra Uribe Saenz",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=2673",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "75421660",
    "age": "28 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-115": {
    "personId": "deputies-115",
    "candidateId": 5488,
    "rtcName": "Christian Aranda Vasquez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5488",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "70747151",
    "age": "34 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-116": {
    "personId": "deputies-116",
    "candidateId": 5602,
    "rtcName": "Jose Isidro Baella Malca",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5602",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "09937296",
    "age": "65 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-117": {
    "personId": "deputies-117",
    "candidateId": 5543,
    "rtcName": "Aldo Antonio Bravo Quispe",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5543",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "10702554",
    "age": "47 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-118": {
    "personId": "deputies-118",
    "candidateId": 5535,
    "rtcName": "Javier Jose Maria Cipriani Thorne",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5535",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07744156",
    "age": "70 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-119": {
    "personId": "deputies-119",
    "candidateId": 5523,
    "rtcName": "Maria Jessica Cordova Lobaton",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5523",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "16719182",
    "age": "52 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-120": {
    "personId": "deputies-120",
    "candidateId": 5546,
    "rtcName": "Leo Miguel de Paz Lancho",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5546",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "43401219",
    "age": "41 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-121": {
    "personId": "deputies-121",
    "candidateId": 5516,
    "rtcName": "Diego Alonso Fernando Bazan Calderon",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5516",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "46847115",
    "age": "35 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-122": {
    "personId": "deputies-122",
    "candidateId": 5538,
    "rtcName": "Frank Krklec Torres",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5538",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "46548697",
    "age": "35 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-123": {
    "personId": "deputies-123",
    "candidateId": 5542,
    "rtcName": "Paola Isabel Martinez Paitan",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5542",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "45363882",
    "age": "38 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-124": {
    "personId": "deputies-124",
    "candidateId": 5614,
    "rtcName": "Roxana Maria Rocha Gallegos",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5614",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "10275564",
    "age": "61 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-125": {
    "personId": "deputies-125",
    "candidateId": 5531,
    "rtcName": "Gustavo Alexander Segura Figueroa",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5531",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "41010370",
    "age": "56 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-126": {
    "personId": "deputies-126",
    "candidateId": 5497,
    "rtcName": "Carlos Alberto Yalta Sotelo",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5497",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "08878867",
    "age": "55 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-127": {
    "personId": "deputies-127",
    "candidateId": 97,
    "rtcName": "Norma Martina Yarrow Lumbreras",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=97",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "10806296",
    "age": "62 años",
    "region": "",
    "postulates": "PRIMER VICEPRESIDENTE DE LA REPÚBLICA",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-128": {
    "personId": "deputies-128",
    "candidateId": 5508,
    "rtcName": "Mady Veronica Yonz Nuñez",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5508",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "44689086",
    "age": "38 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-129": {
    "personId": "deputies-129",
    "candidateId": 5571,
    "rtcName": "Felix See Hung Chang Apuy",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5571",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07974594",
    "age": "55 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  },
  "deputies-130": {
    "personId": "deputies-130",
    "candidateId": 5527,
    "rtcName": "Jorge Arturo Zeballos Aponte",
    "sourceUrl": "https://revisatucandidato.pe/congreso-peru-2026?candidato=5527",
    "source": "Revisa Tu Candidato / fuentes oficiales declaradas en ficha",
    "updatedAtSource": "17 de mayo de 2026",
    "dni": "07026029",
    "age": "74 años",
    "region": "",
    "postulates": "DIPUTADO",
    "sections": {
      "education": {
        "label": "Educación y títulos",
        "countLabel": "0 títulos",
        "source": "",
        "items": [],
        "emptyText": "Sin educación o títulos declarados en la sección consultada."
      },
      "trajectory": {
        "label": "Trayectoria política",
        "countLabel": "0 elecciones",
        "source": "",
        "items": [],
        "emptyText": "Sin trayectoria política declarada en la sección consultada."
      },
      "contracts": {
        "label": "Contratos con el Estado",
        "countLabel": "0 contrato",
        "source": "",
        "items": [],
        "emptyText": "Sin contratos con el Estado declarados en la sección consultada."
      },
      "properties": {
        "label": "Propiedades declaradas",
        "countLabel": "0 bienes",
        "source": "",
        "items": [],
        "emptyText": "Sin propiedades declaradas en la sección consultada."
      },
      "debts": {
        "label": "Deudas y obligaciones",
        "countLabel": "0 deudas",
        "source": "",
        "items": [],
        "emptyText": "Sin deudas u obligaciones declaradas en la sección consultada."
      },
      "sanctions": {
        "label": "Sanciones",
        "countLabel": "0 sanciones",
        "source": "",
        "items": [],
        "emptyText": "Sin sanciones declaradas en la sección consultada."
      },
      "experience": {
        "label": "Experiencia profesional",
        "countLabel": "0 registros",
        "source": "",
        "items": [],
        "emptyText": "Sin experiencia profesional declarada en la sección consultada."
      }
    }
  }
};
