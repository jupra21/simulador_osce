import { Question } from '../types/index';
import { CompetencyArea } from '../types/index';

console.log('Cargando questions-basic-1.ts - Preguntas específicas del nivel básico I');

// Definición independiente de preguntas básicas (sin importar de questions.ts)
export const questionsBasic1: Question[] = [
  {
    id: 1,
    category: "Actuaciones Preparatorias",
    question: "Una Municipalidad Provincial necesita adquirir equipos de cómputo. El área usuaria ha formulado su requerimiento. ¿Cuál es la primera acción que debe realizar la Dependencia Encargada de las Contrataciones (DEC) respecto a la interacción con el mercado si la estrategia de contratación define que se realizará una indagación básica?",
    options: {
      A: "Realizar una consulta al mercado mediante difusión del requerimiento.",
      B: "Realizar al menos dos reuniones \"uno a muchos\" con potenciales proveedores.",
      C: "Emplear como mínimo una fuente de información, como cotizaciones de proveedores.",
      D: "Emplear como mínimo dos fuentes de información, incluyendo precios históricos."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 48.3 y Art. 50.1.a). (La indagación básica usa al menos una fuente, la consulta al mercado es otra herramienta)."
  },
  {
    id: 2,
    category: "Actuaciones Preparatorias",
    question: "Un Gobierno Regional planea contratar la elaboración del expediente técnico para un hospital. El área usuaria ha identificado que, por la complejidad, se requiere una estructura de costos específica para la consultoría. ¿En qué documento se plasma y sustenta principalmente la estrategia de contratación para este servicio?",
    options: {
      A: "En el Plan Anual de Contrataciones (PAC) exclusivamente.",
      B: "En el Cuadro Multianual de Necesidades (CMN) y el requerimiento.",
      C: "En un documento específico conforme al formato aprobado por la DGA, que forma parte del expediente de contratación.",
      D: "En el informe de la Dependencia Encargada de las Contrataciones (DEC) que aprueba el requerimiento."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 46.2; Ley N.º 32069, Art. 49.1."
  },
  {
    id: 3,
    category: "Actuaciones Preparatorias",
    question: "Durante la formulación del Plan Anual de Contrataciones (PAC) del Proyecto Especial Legado, se identifica la necesidad de incluir la contratación de un servicio de seguridad que no estaba previsto en el Cuadro Multianual de Necesidades (CMN) aprobado. ¿Cuál es el procedimiento correcto?",
    options: {
      A: "Se incluye directamente en el PAC, justificando su necesidad.",
      B: "Se debe modificar primero el CMN y, una vez aprobado, se incluye en el PAC.",
      C: "Se registra como una contratación no programada y se gestiona su inclusión posterior en el PAC.",
      D: "El PAC no puede incluir contrataciones no previstas en el CMN; se debe esperar al siguiente ejercicio."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 42.1 y Art. 42.3 (implícitamente, el PAC se basa en el CMN). Temario OECE 1.6.1."
  },
  {
    id: 4,
    category: "Actuaciones Preparatorias",
    question: "Una Universidad Pública Nacional, en el marco de la elaboración de su estrategia de contratación para la adquisición de software especializado, desea conocer el perfil de los evaluadores. Si el procedimiento de selección es una Adjudicación Simplificada, ¿quiénes pueden conformar el comité de selección?",
    options: {
      A: "Solo compradores públicos de la DEC.",
      B: "Tres integrantes, de los cuales al menos uno es comprador público de la DEC y uno es experto en el objeto de contratación.",
      C: "Un oficial de compra y dos expertos externos.",
      D: "Tres o cinco expertos en el objeto de contratación, conformando un jurado."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 56.1.b)."
  },
  {
    id: 5,
    category: "Actuaciones Preparatorias",
    question: "El Ministerio de Transportes y Comunicaciones requiere contratar un servicio de consultoría para la evaluación de impacto ambiental de una nueva carretera. La estrategia de contratación considera la modalidad de pago por tarifas. ¿Qué debe contener principalmente el requerimiento en este caso?",
    options: {
      A: "El precio total del servicio y los entregables finales.",
      B: "La descripción detallada de las actividades, los perfiles del personal, y las unidades de medida de las tarifas (hora/hombre, día, etc.).",
      C: "Únicamente el presupuesto estimado y el plazo de ejecución.",
      D: "La fórmula de reajuste y el cronograma de pagos mensuales."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Ley N.º 32069, Art. 46.4; Reglamento D.S. N.º 009-2025-EF, Art. 130.d). (Modalidad de pago por tarifas implica definir claramente qué se tarifa)."
  },
  {
    id: 6,
    category: "Actuaciones Preparatorias",
    question: "Una entidad pública requiere contratar un servicio de limpieza. Al revisar el requerimiento, la DEC identifica que la necesidad es recurrente pero la oportunidad de entrega es variable. ¿Qué modalidad de contratación pública eficiente podría ser la más adecuada según la estrategia de contratación?",
    options: {
      A: "Compra por encargo.",
      B: "Acuerdo Marco.",
      C: "Compra corporativa.",
      D: "Contrato menor."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Ley N.º 32069, Art. 39; Reglamento D.S. N.º 009-2025-EF, Art. 245.2.a)."
  },
  {
    id: 7,
    category: "Actuaciones Preparatorias",
    question: "El Ministerio de Salud (MINSA) está planificando una Compra Pública de Innovación (CPI) para desarrollar una nueva tecnología de diagnóstico. ¿Qué entidad o entidades pueden contratar bajo esta modalidad?",
    options: {
      A: "Solo el MINSA y sus organismos públicos adscritos.",
      B: "Los Ministerios, sus organismos públicos, programas y proyectos adscritos, y las universidades públicas.",
      C: "Únicamente Perú Compras a través de un encargo especial.",
      D: "Cualquier entidad pública con capacidad de investigación y desarrollo."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.INNOVATION,
    explanation: "Ley N.º 32069, Art. 38.1; Reglamento D.S. N.º 009-2025-EF, Art. 247.2."
  },
  {
    id: 8,
    category: "Actuaciones Preparatorias",
    question: "¿Quién es el responsable de identificar los riesgos en la contratación y proponer su asignación en la matriz de riesgos durante la elaboración de la estrategia de contratación para la adquisición de bienes y servicios?",
    options: {
      A: "El área usuaria en coordinación con la DEC.",
      B: "Exclusivamente la Oficina de Control Institucional (OCI).",
      C: "El Titular de la Entidad, como máximo responsable.",
      D: "La Oficina de Planeamiento y Presupuesto."
    },
    correctAnswer: 'A',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 128."
  },
  {
    id: 9,
    category: "Actuaciones Preparatorias",
    question: "Un hospital público necesita adquirir un tomógrafo. La estrategia de contratación ha determinado que el sistema de entrega más adecuado es \"llave en mano con mantenimiento\". ¿Qué implicancias tiene este sistema para el postor?",
    options: {
      A: "Ofertar solo la instalación y puesta en funcionamiento del equipo.",
      B: "Ofertar la adquisición del bien, su instalación, puesta en funcionamiento y el mantenimiento del equipo.",
      C: "Ofertar únicamente el mantenimiento preventivo y correctivo del equipo.",
      D: "Ofertar la adquisición del bien y el diseño de la operación del mismo."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 129.b)."
  },
  {
    id: 10,
    category: "Actuaciones Preparatorias",
    question: "Una entidad pública requiere contratar la elaboración de un expediente técnico para una obra de saneamiento. ¿Cuál es la autoridad que aprueba dicho expediente de contratación?",
    options: {
      A: "El Titular de la Entidad, de forma indelegable.",
      B: "La Dependencia Encargada de las Contrataciones (DEC).",
      C: "El área usuaria que formuló el requerimiento.",
      D: "La Autoridad de la gestión administrativa."
    },
    correctAnswer: 'D',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 54.2."
  },
  {
    id: 11,
    category: "Actuaciones Preparatorias",
    question: "El Ministerio de Educación, como parte de su estrategia de contratación para la adquisición de mobiliario escolar, ha identificado que los bienes a contratar se encuentran en el Catálogo Electrónico de Acuerdos Marco. ¿Es obligatorio utilizar este mecanismo?",
    options: {
      A: "No, es facultativo y la entidad puede elegir otro procedimiento.",
      B: "Sí, la contratación a través de Catálogos Electrónicos es obligatoria, salvo excepciones contempladas en el reglamento.",
      C: "Solo es obligatorio si el monto supera las 8 UIT.",
      D: "Es obligatorio, a menos que Perú Compras autorice expresamente no utilizarlo."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Ley N.º 32069, Art. 43.1."
  },
  {
    id: 12,
    category: "Actuaciones Preparatorias",
    question: "Un Gobierno Regional desea adquirir un software para la gestión de proyectos. Durante la interacción con el mercado, realiza una consulta avanzada. ¿Qué herramientas son propias de este tipo de consulta?",
    options: {
      A: "Una sola herramienta, sea escrita o reuniones.",
      B: "Dos o más herramientas de la misma o distinta clasificación (escrita y/o reuniones).",
      C: "Exclusivamente reuniones \"uno a uno\" con proveedores especializados.",
      D: "Solo difusión del requerimiento y recepción de cotizaciones."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 49.2 y Art. 50.1."
  },
  {
    id: 13,
    category: "Actuaciones Preparatorias",
    question: "¿Cuál de las siguientes NO es una función de la Dependencia Encargada de las Contrataciones (DEC) durante las actuaciones preparatorias?",
    options: {
      A: "Elaborar la estrategia de contratación.",
      B: "Verificar la disponibilidad presupuestal para el perfeccionamiento del contrato.",
      C: "Aprobar el expediente de contratación.",
      D: "Realizar la interacción con el mercado cuando corresponda."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 14.2 (funciones DEC) y Art. 54.2 (aprobación del expediente por la Autoridad de Gestión Administrativa)."
  },
  {
    id: 14,
    category: "Actuaciones Preparatorias",
    question: "¿En qué caso el Titular de la Entidad es responsable de aprobar la contratación mediante procedimientos de selección no competitivos?",
    options: {
      A: "Siempre que se trate de una situación de desabastecimiento.",
      B: "Cuando se trate de una situación de emergencia o para la continuidad de un contrato resuelto.",
      C: "Para la contratación entre entidades, si así lo considera más eficiente.",
      D: "Únicamente para la contratación de servicios personalísimos."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 102.2 (causales b, c y k del Art. 55.1 de la Ley)."
  },
  {
    id: 15,
    category: "Actuaciones Preparatorias",
    question: "Una municipalidad distrital requiere contratar el servicio de alquiler de maquinaria pesada. El valor estimado es de 7 UIT. ¿Qué tipo de modalidad de contratación debe aplicar la entidad?",
    options: {
      A: "Subasta Inversa Electrónica.",
      B: "Contrato Menor.",
      C: "Adjudicación Simplificada.",
      D: "Comparación de Precios."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Ley N.º 32069, Art. 34.1."
  },
  {
    id: 16,
    category: "Actuaciones Preparatorias",
    question: "¿Cuál es el principal objetivo de la segmentación de contrataciones que realiza la entidad contratante?",
    options: {
      A: "Determinar si se requiere financiamiento externo.",
      B: "Coadyuvar a la determinación de la estrategia de contratación y optimizar los recursos.",
      C: "Asegurar que todos los requerimientos sean atendidos por un único proveedor.",
      D: "Simplificar la elaboración del Plan Anual de Contrataciones."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 42.1."
  },
  {
    id: 17,
    category: "Actuaciones Preparatorias",
    question: "¿Quién es responsable de la custodia y conservación de los expedientes de contratación?",
    options: {
      A: "El área usuaria que generó el requerimiento.",
      B: "La Dependencia Encargada de las Contrataciones (DEC).",
      C: "La Oficina de Control Institucional (OCI).",
      D: "El Titular de la Entidad."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Ley N.º 32069, Art. 51 (contenido del expediente, DEC es responsable de su conformación y gestión). Temario OECE 1.1.3."
  },
  {
    id: 18,
    category: "Actuaciones Preparatorias",
    question: "Una entidad pública, al definir su estrategia de contratación para un servicio complejo, decide que el sistema de entrega será \"diseño de la operación y mantenimiento\". ¿Qué debe incluir este diseño?",
    options: {
      A: "Solo el manual de operación del servicio.",
      B: "El diseño de la gestión de instalaciones o el plan de gestión vial, según corresponda.",
      C: "Únicamente el cronograma de actividades de mantenimiento.",
      D: "La adquisición de los bienes necesarios para la operación."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 129.d)."
  },
  {
    id: 19,
    category: "Actuaciones Preparatorias",
    question: "¿Cuál es la principal finalidad de incluir incentivos a los proveedores en la estrategia de contratación?",
    options: {
      A: "Reducir el monto total de la contratación.",
      B: "Fomentar la participación de un mayor número de postores.",
      C: "Lograr que el proveedor ofrezca mejores condiciones técnicas, económicas o de plazo.",
      D: "Asegurar la presentación de garantías contractuales."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Ley N.º 32069, Art. 49.3. Temario OECE 1.2.8."
  },
  {
    id: 20,
    category: "Actuaciones Preparatorias",
    question: "¿Qué debe considerar la entidad al elegir la modalidad de pago en la estrategia de contratación?",
    options: {
      A: "Únicamente la disponibilidad presupuestal.",
      B: "El objeto contractual y las condiciones del mercado.",
      C: "La preferencia del área usuaria.",
      D: "La facilidad para la ejecución de las garantías."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Ley N.º 32069, Art. 49.1; Reglamento D.S. N.º 009-2025-EF, Art. 46.1.a)."
  },
  {
    id: 21,
    category: "Actuaciones Preparatorias",
    question: "Una entidad necesita contratar un servicio cuyo requerimiento ya está estandarizado mediante una ficha de homologación. ¿Qué implicancia tiene esto en la elaboración del requerimiento?",
    options: {
      A: "La entidad puede modificar la ficha de homologación para adaptarla a sus necesidades específicas.",
      B: "El requerimiento debe recoger las características técnicas ya definidas en la ficha, no pudiendo ser modificado.",
      C: "La ficha de homologación solo es una guía, y la entidad define libremente el requerimiento.",
      D: "Se debe solicitar autorización a Perú Compras para usar la ficha de homologación."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Ley N.º 32069, Art. 42.3; Reglamento D.S. N.º 009-2025-EF, Art. 260.4."
  },
  {
    id: 22,
    category: "Actuaciones Preparatorias",
    question: "El Ministerio de Vivienda, Construcción y Saneamiento decide realizar el anuncio de contratación futura para un proyecto de gran envergadura. ¿Cuál es el principal objetivo de esta acción?",
    options: {
      A: "Perfeccionar el contrato de forma anticipada.",
      B: "Dar a conocer de manera temprana a los potenciales proveedores la intención de convocar el procedimiento.",
      C: "Obtener cotizaciones preliminares para definir el valor estimado.",
      D: "Asegurar la asignación presupuestal para el proyecto."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 43."
  },
  {
    id: 23,
    category: "Actuaciones Preparatorias",
    question: "En la planificación y programación de las contrataciones, ¿quién aprueba el Plan Anual de Contrataciones (PAC)?",
    options: {
      A: "La Dependencia Encargada de las Contrataciones.",
      B: "El Titular de la Entidad o el funcionario a quien se hubiera delegado esta facultad.",
      C: "La Oficina de Planeamiento y Presupuesto.",
      D: "El Órgano de Control Institucional."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "(Práctica general y directivas OSCE, la Ley 32069 y su Reglamento se centran en el CMN como base para el PAC, el cual se elabora conforme a directiva DGA). Temario OECE 1.6."
  },
  {
    id: 24,
    category: "Actuaciones Preparatorias",
    question: "¿Cuál es el documento base para la elaboración del Plan Anual de Contrataciones (PAC)?",
    options: {
      A: "El Presupuesto Institucional de Apertura (PIA).",
      B: "El Cuadro Multianual de Necesidades (CMN) del ejercicio presupuestal en curso.",
      C: "El Plan Operativo Institucional (POI).",
      D: "El listado de requerimientos del área usuaria."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 42.1 (El PAC se elabora sobre el CMN)."
  },
  // INICIO BLOQUE II: FASE DE SELECCIÓN
  {
    id: 25,
    category: "Fase de Selección",
    question: "En un Concurso Público para la contratación de una consultoría de obra, bajo el sistema de entrega de \"solo diseño\", ¿qué tipo de procedimiento de selección se utiliza si la entidad ha determinado que es una obra de alta complejidad y requiere evaluar propuestas arquitectónicas innovadoras?",
    options: {
      A: "Licitación Pública con precalificación.",
      B: "Concurso de Proyectos Arquitectónicos y Urbanísticos.",
      C: "Adjudicación Simplificada con diálogo competitivo.",
      D: "Contratación Directa por especialización."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 135.1."
  },
  {
    id: 26,
    category: "Fase de Selección",
    question: "Durante la etapa de Precalificación en una Licitación Pública para una obra compleja, ¿qué evalúa principalmente el comité de selección?",
    options: {
      A: "La oferta económica de los postores.",
      B: "La capacidad legal, técnica, profesional y económica de los postores para ejecutar el contrato.",
      C: "La propuesta técnica detallada de ejecución de la obra.",
      D: "Las garantías de seriedad de oferta presentadas."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 62.1 (Etapa de Precalificación) y Art. 72.3 (Requisitos de calificación)."
  },
  {
    id: 27,
    category: "Fase de Selección",
    question: "En un procedimiento de selección que incluye la etapa de diálogo competitivo para la adquisición de bienes, ¿cuál es el objetivo principal de esta etapa?",
    options: {
      A: "Negociar el precio final de la oferta.",
      B: "Identificar y desarrollar soluciones idóneas para satisfacer las necesidades de la entidad, a partir de un requerimiento preliminar.",
      C: "Evaluar la capacidad financiera de los postores precalificados.",
      D: "Subsanar las omisiones en las ofertas técnicas presentadas."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 77.1 y Art. 77.2."
  },
  {
    id: 28,
    category: "Fase de Selección",
    question: "¿Cuál de las siguientes afirmaciones sobre la Compra Pública de Innovación (CPI) mediante Asociación para la Innovación (API) es correcta?",
    options: {
      A: "La API solo comprende la fase de investigación y desarrollo (I+D).",
      B: "La API comprende la selección, contratación y ejecución del servicio de I+D, y la posterior contratación de la solución innovadora resultante con uno de los proveedores de la primera fase.",
      C: "En la API, la contratación de la solución innovadora siempre se realiza con un nuevo proveedor, distinto al que realizó el I+D.",
      D: "La API no permite la participación de múltiples proveedores en la fase de I+D."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.INNOVATION, // Relacionado con Innovación
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 247.3.b)."
  },
  {
    id: 29,
    category: "Fase de Selección",
    question: "En un procedimiento de Licitación Pública Abreviada para la adquisición de bienes, ¿cuándo se considera que la Buena Pro ha quedado consentida si se presentó una sola oferta?",
    options: {
      A: "Al día siguiente de la notificación de su otorgamiento.",
      B: "El mismo día de la notificación de su otorgamiento.",
      C: "A los ocho días hábiles de notificado el otorgamiento, si no se interpuso recurso de apelación.",
      D: "A los cinco días hábiles de notificado el otorgamiento."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 82.2."
  },
  {
    id: 30,
    category: "Fase de Selección",
    question: "¿En qué consiste la indagación de mercado que debe realizar la entidad antes de convocar un procedimiento de selección por comparación de precios?",
    options: {
      A: "Realizar un estudio de mercado exhaustivo con múltiples fuentes.",
      B: "Asegurar que la oferta en el mercado sea estándar y de entrega rápida (máximo 5 días hábiles).",
      C: "Obtener al menos tres cotizaciones válidas de proveedores con RNP vigente.",
      D: "Verificar que el bien o servicio no se encuentre en los Catálogos Electrónicos."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Modalidad \"Comparación de Precios\" en el cuadro del Art. 95."
  },
  {
    id: 31,
    category: "Fase de Selección",
    question: "Si durante la evaluación de ofertas en un Concurso Público, el comité advierte un error material en la oferta de un postor que no altera su contenido esencial, ¿cómo debe proceder?",
    options: {
      A: "Descalificar la oferta inmediatamente.",
      B: "Solicitar al postor la subsanación del error a través de la Pladicop.",
      C: "Permitir que el postor modifique el contenido esencial de su oferta.",
      D: "Otorgar un puntaje menor a la oferta por el error detectado."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 78.1."
  },
  {
    id: 32,
    category: "Fase de Selección",
    question: "¿Cuál es el plazo máximo para que la entidad contratante o el TCP, según corresponda, resuelvan un recurso de apelación e informen de su interposición en la Pladicop?",
    options: {
      A: "El plazo para informar es al día hábil siguiente; el plazo para resolver es variable y no está normado.",
      B: "La entidad informa de la interposición al día hábil siguiente. La entidad resuelve en 10 días hábiles; el TCP según su carga procesal.",
      C: "La entidad o TCP informan en la Pladicop hasta el día hábil siguiente de su interposición. El plazo de resolución para la entidad es de 10 días hábiles; para el TCP es más extenso.",
      D: "La entidad informa en 3 días hábiles y resuelve en 15 días hábiles; el TCP tiene plazos discrecionales."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT, // Sobre procesos y plazos institucionales
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 305.3 (informar interposición) y Art. 310.1.g) (resolución entidad); Art. 311.1.h) (resolución TCP)."
  },
  {
    id: 33,
    category: "Fase de Selección",
    question: "En un procedimiento de selección de Licitación Pública para obras, ¿cuál es el efecto inmediato de la interposición de un recurso de apelación por un postor?",
    options: {
      A: "Se anula el procedimiento de selección y se convoca uno nuevo.",
      B: "Se suspende el procedimiento de selección hasta que el recurso sea resuelto.",
      C: "Continúa el procedimiento, pero no se puede perfeccionar el contrato.",
      D: "Se ejecuta la garantía de seriedad de oferta del apelante."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 305.1."
  },
  {
    id: 34,
    category: "Fase de Selección",
    question: "¿Ante qué instancia se presenta un recurso de apelación si el valor estimado de una Licitación Pública es de 60 UIT y el postor impugna la adjudicación de la buena pro?",
    options: {
      A: "Ante el Titular de la Entidad.",
      B: "Ante la Autoridad de la gestión administrativa de la Entidad.",
      C: "Ante el Tribunal de Contrataciones Públicas (TCP).",
      D: "Ante el Órgano de Control Institucional (OCI)."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Ley N.º 32069, Art. 74.1.a); Reglamento D.S. N.º 009-2025-EF, Art. 302.1. (Superior a 50 UIT va al TCP)."
  },
  {
    id: 35,
    category: "Fase de Selección",
    question: "Si un proveedor es sancionado por el TCP con inhabilitación temporal para contratar con el Estado, ¿desde cuándo surte efectos dicha sanción?",
    options: {
      A: "Desde la fecha de emisión de la resolución del TCP.",
      B: "Desde el décimo sexto día hábil siguiente de la notificación electrónica de la resolución.",
      C: "Inmediatamente después de que la resolución quede consentida.",
      D: "Desde la fecha de notificación de la resolución al proveedor."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 371.2."
  },
  {
    id: 36,
    category: "Fase de Selección",
    question: "¿En qué tipo de procedimiento de selección NO es posible perfeccionar el contrato con la simple notificación de la orden de compra o servicio, aun cuando la ejecución no supere el año fiscal?",
    options: {
      A: "Licitación Pública Abreviada para bienes.",
      B: "Comparación de Precios.",
      C: "Subasta Inversa Electrónica si el monto corresponde a una Adjudicación Simplificada.",
      D: "Licitación Pública para obras."
    },
    correctAnswer: 'D',
    competencyArea: CompetencyArea.CONTRACTING, // Perfeccionamiento del contrato
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 87.1 (la excepción es para LPA bienes, CP y AS; no para obras)."
  },
  {
    id: 37,
    category: "Fase de Selección",
    question: "¿Cuáles son los tipos de procedimientos de selección cuya implementación progresiva es dispuesta por el OECE mediante comunicado, según la Decimotercera Disposición Complementaria Transitoria del Reglamento?",
    options: {
      A: "Todos los procedimientos de selección no competitivos.",
      B: "Licitación Pública de bienes especializados, Licitación Pública de obras con precalificación, Licitación Pública con diálogo competitivo, entre otros.",
      C: "Únicamente la Subasta Inversa Electrónica y la Comparación de Precios.",
      D: "Solo los Concursos Públicos para consultorías especializadas."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Decimotercera Disposición Complementaria Transitoria, numeral 4."
  },
  {
    id: 38,
    category: "Fase de Selección",
    question: "En una Licitación Pública para obras con precalificación, ¿cuál es la secuencia correcta de las etapas principales?",
    options: {
      A: "Convocatoria, Registro, Consultas/Observaciones, Integración, Presentación de Ofertas, Evaluación, Buena Pro.",
      B: "Convocatoria, Registro, Precalificación, Presentación de Ofertas (por postores precalificados), Evaluación, Buena Pro.",
      C: "Convocatoria, Precalificación, Registro, Consultas/Observaciones, Presentación de Ofertas, Evaluación, Buena Pro.",
      D: "Convocatoria, Registro, Consultas/Observaciones, Integración, Precalificación, Evaluación de Ofertas Técnicas, Buena Pro."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 62.1 y cuadro del Art. 93 (Modalidad \"Diferenciada\" para obras con precalificación)."
  },
  {
    id: 39,
    category: "Fase de Selección",
    question: "¿Cuál es el plazo para que la entidad contratante, en un procedimiento de selección ante ella, resuelva un recurso de apelación y notifique su decisión?",
    options: {
      A: "Ocho días hábiles desde la presentación del recurso.",
      B: "Diez días hábiles desde la presentación del recurso o la subsanación de omisiones.",
      C: "Quince días hábiles desde la interposición del recurso.",
      D: "Siete días hábiles desde la absolución del traslado por el postor emplazado."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 310.1.g)."
  },
  {
    id: 40,
    category: "Fase de Selección",
    question: "Un postor presenta un recurso de apelación ante el TCP. La entidad contratante, al registrar el sustento técnico legal, omite un documento crucial. ¿Puede el TCP solicitar información adicional?",
    options: {
      A: "No, el TCP resuelve solo con lo presentado inicialmente.",
      B: "Sí, la sala puede solicitar información adicional a la entidad, al impugnante o a terceros, antes o después de la audiencia.",
      C: "Solo puede solicitar información al impugnante, no a la entidad.",
      D: "Solo puede solicitar información después de la audiencia pública, nunca antes."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 311.1.e)."
  },
  {
    id: 41,
    category: "Fase de Selección",
    question: "¿Qué sucede si, en un procedimiento de selección, el postor que obtuvo la buena pro se niega a perfeccionar el contrato sin causa justificada?",
    options: {
      A: "La entidad debe convocar a un nuevo procedimiento de selección.",
      B: "Pierde automáticamente la buena pro y la entidad requiere al postor que ocupó el segundo lugar.",
      C: "Se le otorga un plazo adicional para que reconsidere su decisión.",
      D: "La entidad ejecuta la garantía de fiel cumplimiento."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.CONTRACTING, // Relacionado con perfeccionamiento
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 86.4 y Art. 91.3."
  },
  {
    id: 42,
    category: "Fase de Selección",
    question: "En el marco de una Subasta Inversa Electrónica, si el procedimiento se declara desierto por falta de ofertas válidas, ¿cómo debe proceder la entidad para la siguiente convocatoria?",
    options: {
      A: "Convocar obligatoriamente una Licitación Pública Abreviada.",
      B: "Convocar el mismo procedimiento de Subasta Inversa Electrónica, salvo que la DEC sustente riesgo de nueva deserción.",
      C: "Realizar una Contratación Directa.",
      D: "Solicitar a Perú Compras la exclusión del bien del listado."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 96.6."
  },
  {
    id: 43,
    category: "Fase de Selección",
    question: "Para que un recurso de apelación sea admitido por el TCP, además de otros requisitos, ¿qué tipo de garantía debe presentar el impugnante si el valor del ítem impugnado es de 400 UIT?",
    options: {
      A: "Una carta fianza por el 3% del valor del ítem.",
      B: "Un depósito en la cuenta del OECE por el 3% del valor del ítem, con un tope de 300 UIT.",
      C: "Una garantía (depósito o carta fianza) por el 3% del valor del ítem, sin exceder las 300 UIT.",
      D: "Una caución juratoria, por tratarse de un monto elevado."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 309.1."
  },
  {
    id: 44,
    category: "Fase de Selección",
    question: "¿En qué caso el TCP declara la nulidad de los actos del procedimiento de selección, debiendo precisar la etapa a la que se retrotrae?",
    options: {
      A: "Cuando el recurso de apelación es infundado.",
      B: "Cuando verifica alguno de los supuestos del Art. 70.1 de la Ley, en virtud del recurso o de oficio.",
      C: "Únicamente cuando el recurso de apelación es declarado fundado.",
      D: "Cuando el impugnante se desiste del recurso."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 313.1.d)."
  },
  {
    id: 45,
    category: "Fase de Selección",
    question: "Una entidad pública desea contratar la adquisición de combustible. El valor estimado es de 45 UIT. ¿Cuál es el procedimiento de selección que corresponde?",
    options: {
      A: "Licitación Pública.",
      B: "Adjudicación Simplificada.",
      C: "Subasta Inversa Electrónica, si el bien está en el listado de Perú Compras.",
      D: "Comparación de Precios."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 96.1 y el Cuadro del Art. 93 (por monto correspondería AS, pero si es bien común va por SIE)."
  },
  {
    id: 46,
    category: "Fase de Selección",
    question: "En un Concurso Público para servicios, si dos ofertas empatan en el puntaje total, ¿cuál es el primer criterio de desempate?",
    options: {
      A: "A través de sorteo.",
      B: "Se otorga la buena pro al postor que haya obtenido el mejor puntaje técnico.",
      C: "Se otorga la buena pro a la micro o pequeña empresa integrada por personas con discapacidad.",
      D: "Se otorga la buena pro al postor que haya ofertado el menor precio."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 81.a)."
  },
  {
    id: 47,
    category: "Fase de Selección",
    question: "¿Cuál es el plazo para la presentación de ofertas en un procedimiento de Licitación Pública Abreviada para bienes, contado desde la convocatoria?",
    options: {
      A: "No menor de veintidós días hábiles.",
      B: "No menor de siete días hábiles desde la integración de bases.",
      C: "No menor de cinco días hábiles, si no hay consultas ni observaciones.",
      D: "El plazo lo define la entidad en las bases, pero no puede ser menor al establecido para la LPA en el Art. 64.1 de la Ley (22 días), salvo excepciones. El Art. 68.1 del Reglamento establece 7 días hábiles desde la integración para presentación."
    },
    correctAnswer: 'D',
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 64.1 y Art. 68.1. (Plazo entre convocatoria y presentación de ofertas no menor a 22 días hábiles, salvo excepciones)."
  },
  {
    id: 48,
    category: "Fase de Selección",
    question: "Si la entidad contratante no resuelve un recurso de apelación dentro del plazo, ¿qué puede hacer el impugnante?",
    options: {
      A: "Considerar denegado el recurso (denegatoria ficta) e interponer demanda contencioso-administrativa.",
      B: "Solicitar la intervención del TCP para que resuelva.",
      C: "Considerar aprobado el recurso y exigir el cumplimiento.",
      D: "Presentar una queja ante el OCI de la entidad."
    },
    correctAnswer: 'A',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 316.1."
  },
  // INICIO BLOQUE III: FASE DE EJECUCIÓN CONTRACTUAL
  {
    id: 49,
    category: "Fase de Ejecución Contractual",
    question: "Una entidad contrata la ejecución de una obra bajo el sistema de suma alzada. Durante la ejecución, se requiere realizar una prestación adicional indispensable. ¿Hasta qué porcentaje del monto del contrato original puede aprobar la Autoridad de la Gestión Administrativa esta adicional, si es obra bajo sistema de solo construcción?",
    options: {
      A: "Hasta el 15% del monto del contrato original, restando deductivos vinculados.",
      B: "Hasta el 25% del monto del contrato original.",
      C: "Hasta el 50% previa autorización de la Contraloría.",
      D: "No proceden adicionales en contratos a suma alzada."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Ley N.º 32069, Art. 64.1; Reglamento D.S. N.º 009-2025-EF, Art. 194.1 (para obras en general)."
  },
  {
    id: 50,
    category: "Fase de Ejecución Contractual",
    question: "En un contrato de obra, la entidad detecta que el contratista presentó documentación falsa para sustentar una valorización. La Autoridad de la Gestión Administrativa, ¿qué acción debe tomar respecto al contrato?",
    options: {
      A: "Resolver el contrato por incumplimiento.",
      B: "Declarar la nulidad del contrato.",
      C: "Aplicar la máxima penalidad por mora.",
      D: "Solicitar la intervención del OCI."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.CONTRACTING, // Nulidad de contrato
    explanation: "Ley N.º 32069, Art. 71.1.b); Reglamento D.S. N.º 009-2025-EF, Art. 111.1."
  },
  {
    id: 51,
    category: "Fase de Ejecución Contractual",
    question: "Si un contrato de supervisión de obra se ve afectado por una ampliación de plazo del contrato principal de obra debido a un adicional de obra aprobado, ¿cómo se gestiona el incremento de los servicios del supervisor?",
    options: {
      A: "Es una prestación adicional al contrato de supervisión, limitada al 25%.",
      B: "Se considera una modificación por hecho sobreviniente no imputable a las partes.",
      C: "No se considera adicional de supervisión si la variación es por plazo o ritmo, y el pago se realiza según la tarifa contratada por el periodo extendido.",
      D: "Se debe resolver el contrato de supervisión y convocar uno nuevo."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 193.2 y 193.4."
  },
  {
    id: 52,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuál es el plazo máximo para que el contratista solicite una ampliación de plazo en un contrato de obra por causal de atrasos y/o paralizaciones no imputables a él?",
    options: {
      A: "Siete días calendario desde finalizado el hecho generador.",
      B: "Diez días hábiles desde la notificación de la aprobación del adicional o de finalizado el hecho generador.",
      C: "Quince días calendario desde que tuvo conocimiento del hecho.",
      D: "No existe plazo, puede solicitarla en cualquier momento antes de la recepción de obra."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 200.1.a)."
  },
  {
    id: 53,
    category: "Fase de Ejecución Contractual",
    question: "En un contrato de obra, ¿cuál es la consecuencia si el supervisor no se pronuncia sobre la solicitud de ampliación de plazo del contratista dentro del plazo establecido?",
    options: {
      A: "Se considera denegada la solicitud.",
      B: "La entidad contratante debe resolver directamente la solicitud.",
      C: "Se considera aprobado lo informado por el supervisor, o lo solicitado por el contratista si el supervisor no se pronunció.",
      D: "El contratista puede resolver el contrato."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 200.1.d) (última parte, si la entidad no se pronuncia, aplica similar lógica para supervisor)."
  },
  {
    id: 54,
    category: "Fase de Ejecución Contractual",
    question: "¿En qué caso procede la denegatoria ficta de un recurso de apelación tramitado ante el Tribunal de Contrataciones Públicas (TCP)?",
    options: {
      A: "Cuando el TCP no notifica su resolución dentro del plazo para emitirla.",
      B: "Cuando el TCP no admite a trámite el recurso por falta de requisitos.",
      C: "Cuando la sala no realiza la audiencia pública programada.",
      D: "La denegatoria ficta no aplica a las decisiones del TCP."
    },
    correctAnswer: 'A',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT, // Recurso de apelación
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 316.1 (aplicable al TCP)."
  },
  {
    id: 55,
    category: "Fase de Ejecución Contractual",
    question: "Un contratista solicita la recepción de una obra. El comité de recepción, durante la verificación, advierte observaciones. ¿Cuál es el plazo que tiene el contratista para subsanarlas?",
    options: {
      A: "Un décimo del plazo de ejecución vigente de la obra o cuarenta días, el que resulte menor.",
      B: "Quince días calendario, prorrogables por única vez.",
      C: "Treinta días hábiles, sin posibilidad de prórroga.",
      D: "El plazo que establezca el comité de recepción, no mayor a 30 días."
    },
    correctAnswer: 'A',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 212.6."
  },
  {
    id: 56,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuál es la función principal del residente de obra en un contrato ejecutado por contrata?",
    options: {
      A: "Representar a la entidad contratante en la obra.",
      B: "Representar al contratista como responsable técnico de la obra, de modo permanente y exclusivo.",
      C: "Aprobar las valorizaciones y adicionales de obra.",
      D: "Modificar el contrato en caso de controversias."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 177.1 y 177.2."
  },
  {
    id: 57,
    category: "Fase de Ejecución Contractual",
    question: "En la ejecución de un contrato de obra, ¿quién es el responsable de llevar el cuaderno de incidencias digital en la Pladicop, en el componente de ejecución de obra?",
    options: {
      A: "El coordinador del proyecto designado por la entidad.",
      B: "El residente de obra y el supervisor.",
      C: "Únicamente el supervisor de obra.",
      D: "El gerente de proyectos de la empresa contratista."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 188.3."
  },
  {
    id: 58,
    category: "Fase de Ejecución Contractual",
    question: "¿Qué sucede si, culminado el plazo para que el contratista presente la liquidación de un contrato de obra, este no lo hace?",
    options: {
      A: "La entidad aplica la máxima penalidad y resuelve el contrato.",
      B: "La entidad elabora la liquidación en el mismo plazo y corre con los gastos.",
      C: "El supervisor elabora la liquidación y la presenta a la entidad.",
      D: "La entidad puede contratar a un tercero para que elabore la liquidación."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 215.2."
  },
  {
    id: 59,
    category: "Fase de Ejecución Contractual",
    question: "En un contrato de consultoría de obra para la elaboración de expediente técnico, ¿cuál es el plazo de responsabilidad del contratista por vicios ocultos?",
    options: {
      A: "Un año desde la conformidad.",
      B: "Siete años desde la conformidad de la obra.",
      C: "No menor de tres años después de la conformidad de la elaboración del expediente.",
      D: "El mismo plazo de responsabilidad del ejecutor de la obra."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.CONTRACTING,
    explanation: "Ley N.º 32069, Art. 69.2.d)."
  },
  {
    id: 60,
    category: "Fase de Ejecución Contractual",
    question: "Una entidad requiere realizar una contratación complementaria de bienes. ¿Cuál es el límite máximo del monto de esta contratación?",
    options: {
      A: "25% del monto del contrato original.",
      B: "30% del monto del contrato original, siempre que se preserven las mismas condiciones.",
      C: "15% del monto del contrato original, sin posibilidad de modificar condiciones.",
      D: "No hay límite, siempre que el área usuaria lo sustente."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.CONTRACTING,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 146.1.i)."
  },
  {
    id: 61,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuándo es obligatorio el uso de la Junta de Prevención y Resolución de Disputas (JPRD) en contratos de obras?",
    options: {
      A: "En todos los contratos de obras, independientemente del monto.",
      B: "En contratos de obras cuyos montos sean iguales o superiores a S/ 10 000 000,00.",
      C: "Solo en contratos de obras bajo sistemas de entrega de diseño y construcción.",
      D: "Cuando las partes así lo acuerden, de forma facultativa."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 346.1."
  },
  {
    id: 62,
    category: "Fase de Ejecución Contractual",
    question: "Si se aprueba un adicional de obra que implica un mayor plazo de ejecución, ¿cómo se afecta el contrato de supervisión?",
    options: {
      A: "Se resuelve el contrato de supervisión y se convoca uno nuevo.",
      B: "El supervisor debe asumir el mayor plazo sin costo adicional.",
      C: "La entidad puede aprobar una prestación adicional para el supervisor o reconocer los mayores gastos generales.",
      D: "Automáticamente se genera un adicional para el supervisor por el mismo porcentaje del adicional de obra."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 193.2 y 193.4."
  },
  {
    id: 63,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuál es el porcentaje máximo de adelanto directo que se puede otorgar en un contrato de consultoría de obra?",
    options: {
      A: "10% del monto del contrato original.",
      B: "20% del monto del contrato original.",
      C: "30% del monto del contrato original.",
      D: "No proceden adelantos directos en consultorías de obra."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 178.3.a)."
  },
  {
    id: 64,
    category: "Fase de Ejecución Contractual",
    question: "La Autoridad de la Gestión Administrativa en un Gobierno Regional es:",
    options: {
      A: "El Gobernador Regional.",
      B: "El Gerente General Regional.",
      C: "El Jefe de la Oficina de Logística o Abastecimiento.",
      D: "El Consejo Regional."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Ley N.º 32069, Art. 25.1.b)."
  },
  {
    id: 65,
    category: "Fase de Ejecución Contractual",
    question: "En un contrato de obra bajo el sistema de entrega de solo construcción, si el contratista identifica deficiencias en el expediente técnico elaborado por la entidad, ¿cómo debe proceder?",
    options: {
      A: "Subsanarlas por su cuenta y luego solicitar el reembolso.",
      B: "Presentar un informe técnico de revisión del expediente a la entidad y al supervisor.",
      C: "Continuar la ejecución y anotar las deficiencias en el cuaderno de obra para deslindar responsabilidad.",
      D: "Solicitar la resolución del contrato por causal imputable a la entidad."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 171.1."
  },
  {
    id: 66,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuál de las siguientes es una función de la Autoridad de la Gestión Administrativa respecto a la ejecución contractual?",
    options: {
      A: "Aprobar las prestaciones adicionales de obra bajo el sistema de solo construcción hasta el 15% del monto original.",
      B: "Resolver los recursos de apelación en procedimientos de selección cuya cuantía no supere las 50 UIT.",
      C: "Autorizar el inicio de la acción judicial de anulación de laudo arbitral.",
      D: "Aprobar la contratación mediante procedimiento no competitivo por causal de emergencia."
    },
    correctAnswer: 'A',
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Ley N.º 32069, Art. 64.2; Reglamento D.S. N.º 009-2025-EF, Art. 19.a) y Art. 194.1."
  },
  {
    id: 67,
    category: "Fase de Ejecución Contractual",
    question: "Un contratista, en la ejecución de una obra, incurre en un retraso injustificado. La entidad le aplica la penalidad por mora. ¿Cuál es el límite máximo de esta penalidad?",
    options: {
      A: "5% del monto del contrato vigente.",
      B: "10% del monto del contrato vigente.",
      C: "15% del monto del contrato original.",
      D: "No hay límite, se aplica por cada día de retraso."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 119.2."
  },
  {
    id: 68,
    category: "Fase de Ejecución Contractual",
    question: "¿En qué sistema de entrega de obras el contratista es responsable tanto de la elaboración del expediente técnico como de la ejecución de la obra?",
    options: {
      A: "Solo construcción.",
      B: "Diseño y construcción.",
      C: "Suma alzada.",
      D: "Precios unitarios."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 158.1.b)."
  },
  {
    id: 69,
    category: "Fase de Ejecución Contractual",
    question: "En un contrato de obra, el Titular de la Entidad autoriza una prestación adicional que supera el 15% pero no el 30% del monto original del contrato (sistema solo construcción). ¿Qué requisito adicional se necesita, además de contar con los recursos necesarios?",
    options: {
      A: "Informe favorable del OCI.",
      B: "Aprobación del Consejo Regional/Municipal o Directorio, según corresponda.",
      C: "No se requiere requisito adicional si es el Titular quien aprueba.",
      D: "Previa autorización de la Contraloría General de la República."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Ley N.º 32069, Art. 64.3.a) (El Titular aprueba hasta el 30%)."
  },
  {
    id: 70,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuál es el plazo para que el contratista solicite el pago de una valorización de obra mensual?",
    options: {
      A: "Dentro de los primeros tres días del mes siguiente al valorizado.",
      B: "Dentro de los primeros cinco días hábiles del mes siguiente.",
      C: "Al culminar la ejecución de la obra.",
      D: "Cuando lo acuerde con el supervisor."
    },
    correctAnswer: 'A',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 210.2."
  },
  {
    id: 71,
    category: "Fase de Ejecución Contractual",
    question: "Si la entidad contratante declara la nulidad de oficio de un contrato de obra por haberse suscrito con un proveedor impedido, ¿qué sucede con las prestaciones ejecutadas?",
    options: {
      A: "No se reconoce ningún pago al contratista.",
      B: "Se realiza una constatación física e inventario, y se pagan las prestaciones ejecutadas que hayan beneficiado a la entidad.",
      C: "El contratista debe devolver todos los pagos recibidos.",
      D: "Se aplica una penalidad y se liquida el contrato."
    },
    correctAnswer: 'B',
    competencyArea: CompetencyArea.CONTRACTING, // Nulidad y sus efectos
    explanation: "Ley N.º 32069, Art. 71.1.a); Reglamento D.S. N.º 009-2025-EF, Art. 111.3. (La norma no especifica el pago, pero es práctica y principio general evitar enriquecimiento sin causa de la entidad)."
  },
  {
    id: 72,
    category: "Fase de Ejecución Contractual",
    question: "¿Qué tipo de modificación contractual es la ampliación del plazo de ejecución de una obra debido a la aprobación de una prestación adicional que afecta la ruta crítica?",
    options: {
      A: "Una reducción de prestaciones.",
      B: "Una modificación por hecho sobreviniente no imputable a las partes.",
      C: "Una causal específica de ampliación de plazo.",
      D: "Un adicional de obra encubierto."
    },
    correctAnswer: 'C',
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Reglamento D.S. N.º 009-2025-EF, Art. 198.1.b)."
  }
];
