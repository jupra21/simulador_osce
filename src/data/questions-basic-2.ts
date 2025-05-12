import { Question } from '../types/index';
import { CompetencyArea } from '../types/index';

// Preguntas específicas para el simulador Básico II
console.log('Cargando questions-basic-2.ts');
export const questionsBasic2: Question[] = [
  // BLOQUE 1: ACTUACIONES PREPARATORIAS (24 PREGUNTAS)
  {
    id: 1,
    category: "Actuaciones Preparatorias",
    question: "La Municipalidad Distrital de San Isidro requiere contratar el servicio de limpieza de sus instalaciones. El área usuaria, al formular su requerimiento, omite especificar la frecuencia del servicio. ¿Qué acción debe tomar la Dependencia Encargada de las Contrataciones (DEC) al recibir dicho requerimiento?",
    options: {
      A: "Proceder con la indagación de mercado, asumiendo una frecuencia estándar para servicios similares.",
      B: "Devolver el requerimiento al área usuaria para que complete la información faltante, ya que es esencial para definir el alcance.",
      C: "Iniciar el procedimiento de selección y solicitar la subsanación de la frecuencia durante la etapa de consultas y observaciones.",
      D: "Considerar el requerimiento como no presentado y archivar la solicitud."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 46, numeral 46.1 de la Ley N.º 32069. El requerimiento debe identificar la finalidad pública y los objetivos, y la DEC coordina la determinación del requerimiento. Artículo 44, numeral 44.2, literal a) del DS N.º 009-2025-EF: El requerimiento contiene el alcance y las condiciones de ejecución."
  },
  {
    id: 2,
    category: "Actuaciones Preparatorias",
    question: "Un Ministerio necesita adquirir equipos de cómputo por un valor total de S/ 500,000. Para agilizar el proceso, el Jefe de Logística propone dividir la compra en 10 contrataciones directas de S/ 50,000 cada una, argumentando que cada una no supera las 8 UIT. ¿Cómo se considera esta acción?",
    options: {
      A: "Una correcta aplicación de la causal de contratación directa por montos menores a 8 UIT.",
      B: "Un fraccionamiento indebido, ya que se busca eludir el procedimiento de selección que corresponde según la necesidad anual.",
      C: "Una estrategia válida para optimizar los tiempos de adquisición, siempre que se cuente con certificación presupuestal para cada compra.",
      D: "Un procedimiento permitido si el área usuaria sustenta la urgencia de cada lote de computadoras."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 50, numeral 50.1, literal a) de la Ley N.º 32069."
  },
  {
    id: 3,
    category: "Actuaciones Preparatorias",
    question: "El Hospital Nacional Dos de Mayo va a convocar un Concurso Público para el servicio de vigilancia. ¿Cuál de los siguientes documentos es indispensable que forme parte del expediente de contratación antes de la convocatoria?",
    options: {
      A: "El contrato borrador que se suscribirá con el postor ganador.",
      B: "La certificación de crédito presupuestario y/o la previsión presupuestal.",
      C: "El informe de evaluación de las propuestas técnicas de todos los postores.",
      D: "El acta de otorgamiento de la buena pro del procedimiento anterior, si este fue declarado desierto."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 54, numeral 54.2, literal f) del DS N.º 009-2025-EF."
  },
  {
    id: 4,
    category: "Actuaciones Preparatorias",
    question: "Una entidad pública está elaborando la estrategia de contratación para un servicio complejo. ¿En qué documento debe quedar reflejada la asignación de riesgos entre la entidad y el futuro contratista?",
    options: {
      A: "En el Plan Anual de Contrataciones (PAC) exclusivamente.",
      B: "En el informe de indagación de mercado realizado por la DEC.",
      C: "En la propia estrategia de contratación, como parte del perfil de riesgos.",
      D: "En el acta de conformación del comité de selección."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 49, numeral 49.2 de la Ley N.º 32069."
  },
  {
    id: 5,
    category: "Actuaciones Preparatorias",
    question: "El Proyecto Especial Legado Juegos Panamericanos requiere estandarizar los términos de referencia para la contratación recurrente de servicios de mantenimiento de instalaciones deportivas. ¿Qué instrumento de gestión debe utilizar para tal fin?",
    options: {
      A: "Un catálogo electrónico de acuerdo marco.",
      B: "Una ficha de homologación.",
      C: "Un contrato estandarizado de uso internacional.",
      D: "Un listado de bienes y servicios comunes."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 42, numeral 42.3 de la Ley N.º 32069."
  },
  {
    id: 6,
    category: "Actuaciones Preparatorias",
    question: "¿Quién aprueba el Plan Anual de Supervisión y Asistencia Técnica del OECE, en el cual, sobre la base de la Programación Multianual de Bienes, Servicios y Obras (PMBSO), se determinan el tipo y la cuantía de las contrataciones por supervisar?",
    options: {
      A: "El Titular de la Entidad del OECE.",
      B: "El Consejo Directivo del OECE.",
      C: "La Dirección General de Abastecimiento (DGA).",
      D: "El Ministerio de Economía y Finanzas."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 11, numeral 11.5 de la Ley N.º 32069."
  },
  {
    id: 7,
    category: "Actuaciones Preparatorias",
    question: "Una Universidad Nacional necesita adquirir software especializado para sus laboratorios. Al realizar la interacción con el mercado, la DEC determina que existen múltiples proveedores. ¿Qué debe incluir la estrategia de contratación respecto al tipo de procedimiento de selección?",
    options: {
      A: "Necesariamente una Licitación Pública por ser una entidad estatal.",
      B: "Un procedimiento de selección competitivo acorde al objeto y cuantía.",
      C: "Una contratación directa por ser un bien especializado.",
      D: "Una subasta inversa electrónica si el software está en el listado de bienes comunes."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 49, numeral 49.1 de la Ley N.º 32069 (La estrategia contiene el tipo de procedimiento de selección). Artículo 53 de la Ley N.º 32069 (El procedimiento se determina considerando el objeto y su cuantía)."
  },
  {
    id: 8,
    category: "Actuaciones Preparatorias",
    question: "En el marco de las actuaciones preparatorias para una obra pública, el área usuaria de una municipalidad identifica la necesidad de emplear la metodología BIM durante la ejecución contractual. ¿Dónde debe sustentarse esta necesidad?",
    options: {
      A: "En el Plan Anual de Contrataciones.",
      B: "En el informe de disponibilidad presupuestal.",
      C: "En el requerimiento, como una propuesta a ser sustentada en la estrategia de contratación.",
      D: "Directamente en las bases del procedimiento, sin necesidad de sustento previo."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 154, numeral 154.1, literal b) del DS N.º 009-2025-EF."
  },
  {
    id: 9,
    category: "Actuaciones Preparatorias",
    question: "Una entidad pública requiere contratar un servicio de consultoría. ¿En qué momento del proceso de contratación se debe conformar el comité de selección?",
    options: {
      A: "Después de la integración de las bases.",
      B: "Antes de la aprobación del expediente de contratación.",
      C: "Durante la etapa de elaboración del requerimiento por el área usuaria.",
      D: "Como parte de las actuaciones preparatorias, antes de la convocatoria."
    },
    correctAnswer: "D",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 52, numeral 52.1 de la Ley N.º 32069 (Los procedimientos de selección competitivos están a cargo de evaluadores, que pueden ser comités). Artículo 56, numeral 56.3 del DS N.º 009-2025-EF (La elección del tipo de evaluador se determina en la estrategia de contratación, que es una actuación preparatoria)."
  },
  {
    id: 10,
    category: "Actuaciones Preparatorias",
    question: "El Titular de una Entidad ha delegado la facultad de aprobar expedientes de contratación al Gerente de Administración. Para una contratación específica, ¿puede el Gerente de Administración, a su vez, delegar esta facultad al Jefe de Logística?",
    options: {
      A: "Sí, siempre que la delegación sea por escrito y por un plazo determinado.",
      B: "No, las facultades delegadas por el Titular de la Entidad son indelegables, salvo disposición legal en contrario.",
      C: "Sí, si el Jefe de Logística cuenta con certificación del OECE de nivel avanzado.",
      D: "No, a menos que el monto de la contratación sea inferior a 8 UIT."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Artículo 25, numeral 25.2 de la Ley N.º 32069 (El Titular y la autoridad de la gestión administrativa pueden delegar facultades, salvo excepciones. No se menciona subdelegación de facultades ya delegadas como regla general). La regla general de derecho administrativo es que las facultades delegadas no se subdelegan, salvo autorización expresa."
  },
  {
    id: 11,
    category: "Actuaciones Preparatorias",
    question: "¿Cuál de los siguientes NO es un supuesto de fraccionamiento prohibido según la Ley de Contrataciones del Estado?",
    options: {
      A: "Dividir una contratación para evitar el tipo de procedimiento de selección que correspondería a la necesidad anual.",
      B: "Contratar bienes o servicios idénticos a los contratados anteriormente en el mismo ejercicio fiscal, cuando surgió una necesidad imprevisible adicional a la programada.",
      C: "Subdividir una contratación para dar lugar a contratos menores y así evadir la Ley.",
      D: "Separar prestaciones para evadir la aplicación de la Ley y su Reglamento o el cumplimiento de acuerdos comerciales."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 50, numeral 50.2, literal a) de la Ley N.º 32069."
  },
  {
    id: 12,
    category: "Actuaciones Preparatorias",
    question: "En el contexto de la elaboración del requerimiento, ¿quién es responsable de identificar la finalidad pública y los objetivos de la contratación?",
    options: {
      A: "Exclusivamente la Dependencia Encargada de las Contrataciones (DEC).",
      B: "El Titular de la Entidad, mediante resolución.",
      C: "El área usuaria, en coordinación con la DEC.",
      D: "El comité de selección designado para el proceso."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 46, numeral 46.1 de la Ley N.º 32069."
  },
  {
    id: 13,
    category: "Actuaciones Preparatorias",
    question: "Una entidad pública requiere adquirir vehículos. La estrategia de contratación ha determinado que el factor de evaluación 'plazo de entrega' es relevante. ¿Puede el comité de selección modificar este factor si considera que otro es más pertinente?",
    options: {
      A: "Sí, el comité tiene autonomía para modificar los factores de evaluación propuestos.",
      B: "No, los factores de evaluación son definidos únicamente por el área usuaria.",
      C: "Sí, pero solo con la autorización expresa del Titular de la Entidad.",
      D: "Sí, los evaluadores pueden establecer modificaciones a los factores propuestos en la estrategia para ser incluidos en las bases."
    },
    correctAnswer: "D",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 55, numeral 55.2 del DS N.º 009-2025-EF."
  },
  {
    id: 14,
    category: "Actuaciones Preparatorias",
    question: "¿Cuál es el objetivo principal del 'Anuncio de contratación futura' que puede publicar una entidad?",
    options: {
      A: "Adjudicar directamente el contrato a los proveedores que manifiesten interés.",
      B: "Dar a conocer de manera temprana a los potenciales proveedores la intención de convocar un procedimiento de selección.",
      C: "Reemplazar la etapa de indagación de mercado para determinar el valor estimado.",
      D: "Servir como convocatoria oficial al procedimiento de selección."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 43 del DS N.º 009-2025-EF."
  },
  {
    id: 15,
    category: "Actuaciones Preparatorias",
    question: "Un hospital público necesita adquirir un tomógrafo de alta complejidad. El área usuaria ha formulado el requerimiento. ¿Qué acción realiza la DEC como parte de la interacción con el mercado para este tipo de bien?",
    options: {
      A: "Únicamente revisa los precios históricos de adquisiciones similares.",
      B: "Realiza una consulta al mercado avanzada, dada la complejidad y el carácter estratégico del bien.",
      C: "Convoca directamente el procedimiento de selección, asumiendo que los proveedores presentarán sus mejores ofertas.",
      D: "Solicita cotizaciones directas a un mínimo de tres proveedores."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 127, numeral 127.1, literal d) del DS N.º 009-2025-EF (Para requerimientos estratégicos se usa consulta al mercado avanzada). Artículo 125, numeral 125.1, literal d) (Contrataciones estratégicas son de alta cuantía y alto riesgo)."
  },
  {
    id: 16,
    category: "Actuaciones Preparatorias",
    question: "¿En qué caso el requerimiento de un bien puede plasmarse en 'objetivos funcionales' en lugar de especificaciones técnicas detalladas?",
    options: {
      A: "Siempre que se trate de una contratación de bienes comunes.",
      B: "Únicamente cuando el valor de la contratación sea inferior a 8 UIT.",
      C: "En el caso de obras, según el sistema de entrega utilizado.",
      D: "Para cualquier tipo de bien, a discreción del área usuaria."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 46, numeral 46.4 de la Ley N.º 32069."
  },
  {
    id: 17,
    category: "Actuaciones Preparatorias",
    question: "El área usuaria de un Programa de Gobierno requiere la contratación de un servicio de desarrollo de software a medida. Indica que el servicio debe ser implementado en un plazo no mayor a 30 días. La DEC, al realizar la indagación de mercado, verifica que el plazo es inviable. ¿Qué debe hacer la DEC?",
    options: {
      A: "Convocar el proceso con el plazo indicado por el área usuaria, dejando que los postores oferten bajo su responsabilidad.",
      B: "Modificar el plazo en el requerimiento a uno más realista y solicitar la no objeción del área usuaria.",
      C: "Declarar la imposibilidad de contratar por incongruencia en el requerimiento.",
      D: "Solicitar al Titular de la Entidad que dirima sobre el plazo de ejecución."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 44, numeral 44.7 del DS N.º 009-2025-EF."
  },
  {
    id: 18,
    category: "Actuaciones Preparatorias",
    question: "¿Qué información debe contener como mínimo la Constancia de Capacidad Libre de Contratación (CCLC) expedida por el OECE?",
    options: {
      A: "El listado de todas las obras ejecutadas por el contratista.",
      B: "El monto no comprometido de la capacidad máxima de contratación del ejecutor de obras.",
      C: "Las penalidades aplicadas al contratista en los últimos cinco años.",
      D: "La relación de personal clave del ejecutor de obras."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.CONTRACTING,
    explanation: "Artículo 29, numeral 29.1 del DS N.º 009-2025-EF."
  },
  {
    id: 19,
    category: "Actuaciones Preparatorias",
    question: "Una entidad tiene programada la adquisición de mobiliario de oficina y servicios de consultoría para formulación de proyectos. ¿Puede agrupar estas necesidades en un solo procedimiento de selección?",
    options: {
      A: "Sí, si el monto total no supera el límite para una Adjudicación Simplificada.",
      B: "No, porque son objetos contractuales de naturaleza distinta (bienes y servicios).",
      C: "Sí, mediante una contratación por paquete si son prestaciones distintas pero vinculadas funcionalmente.",
      D: "Sí, siempre y cuando el área usuaria lo justifique técnicamente."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 52, numeral 52.1, literal a) del DS N.º 009-2025-EF. (En este caso, se tendría que sustentar muy bien la vinculación funcional para un paquete)."
  },
  {
    id: 20,
    category: "Actuaciones Preparatorias",
    question: "Para la contratación del servicio de elaboración de un expediente técnico de obra, el comité de selección, ¿puede incluir como factor de evaluación la 'Metodología Propuesta' por el postor?",
    options: {
      A: "No, la metodología es un requisito de admisión y no un factor de evaluación.",
      B: "Sí, es un factor de evaluación facultativo que puede ser considerado por el comité.",
      C: "Solo si el valor referencial del servicio supera las 100 UIT.",
      D: "No, porque la metodología es definida por la entidad en los términos de referencia."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "El DS N.º 009-2025-EF y la Ley N.º 32069 establecen la posibilidad de factores de evaluación. Las bases estándar (aprobadas por la DGA según Art. 55.3 DS) detallarán los factores aplicables. La metodología suele ser un factor facultativo para servicios de consultoría."
  },
  {
    id: 21,
    category: "Actuaciones Preparatorias",
    question: "Una municipalidad requiere contratar el servicio de alquiler de maquinaria pesada. La DEC, al formular la estrategia de contratación, determina que el sistema de entrega más adecuado es 'Suministro con comodato' para ciertos equipos complementarios. ¿Es esto posible?",
    options: {
      A: "No, el comodato solo aplica para bienes y no para servicios de alquiler.",
      B: "Sí, si la entidad demuestra que resulta más eficiente que adquirir los suministros y el proveedor entregue el equipo en comodato.",
      C: "Solo si el contrato principal es de adquisición de bienes y el comodato es accesorio.",
      D: "No, el alquiler de maquinaria siempre debe ser bajo la modalidad de precios unitarios o suma alzada."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 129, literal c) del DS N.º 009-2025-EF."
  },
  {
    id: 22,
    category: "Actuaciones Preparatorias",
    question: "¿Cuál es la principal responsabilidad de los funcionarios y servidores de la entidad contratante respecto a la organización, elaboración de la documentación y conducción del proceso de contratación?",
    options: {
      A: "Asegurar el menor precio posible en todas las contrataciones.",
      B: "Priorizar los principios de publicidad y valor por dinero, y los enfoques de la ley que cautelan la efectividad de los resultados.",
      C: "Cumplir estrictamente con los plazos, incluso si esto afecta la calidad de la contratación.",
      D: "Delegar todas las decisiones discrecionales al Titular de la Entidad."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "Artículo 26, numeral 26.1 de la Ley N.º 32069."
  },
  {
    id: 23,
    category: "Actuaciones Preparatorias",
    question: "¿En qué consiste la 'indagación básica' como parte de la interacción con el mercado para bienes y servicios?",
    options: {
      A: "En la realización de al menos tres reuniones uno a uno con potenciales proveedores.",
      B: "En el empleo de una sola fuente de información para analizar el mercado.",
      C: "En la publicación obligatoria de una difusión del requerimiento en la Pladicop.",
      D: "En la solicitud de cotizaciones formales a un mínimo de cinco proveedores."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 48, numeral 48.3 de la Ley N.º 32069 (la indagación básica utiliza como mínimo una fuente de información). Artículo 127, numeral 127.1, literal a) del DS N.º 009-2025-EF (la indagación básica es para requerimientos rutinarios)."
  },  {
    id: 24,
    category: "Actuaciones Preparatorias",
    question: "Una entidad pública va a convocar una Licitación Pública para la ejecución de una obra. ¿Quién es responsable de elaborar las bases del procedimiento de selección?",
    options: {
      A: "El área usuaria, por ser quien conoce la necesidad.",
      B: "El Titular de la Entidad, mediante resolución aprobatoria.",
      C: "El oficial de compra o el comité de selección, según corresponda, a partir de la información del expediente de contratación.",
      D: "La Dirección General de Abastecimiento (DGA), que provee formatos estándar."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Artículo 55, numeral 55.1 del DS N.º 009-2025-EF."
  },
  
  // BLOQUE 2: FASE DE SELECCIÓN (24 PREGUNTAS)
  {
    id: 25,
    category: "Fase de Selección",
    question: "Durante un procedimiento de Licitación Pública para una obra, un postor presenta su oferta técnica omitiendo la declaración jurada de no estar impedido para contratar con el Estado. El comité de selección advierte la omisión. ¿Qué acción corresponde?",
    options: {
      A: "Descalificar la oferta inmediatamente por no cumplir con un requisito de admisión esencial.",
      B: "Otorgar al postor un plazo para subsanar la omisión, ya que se trata de un documento que puede ser regularizado.",
      C: "Admitir la oferta y solicitar la subsanación antes del otorgamiento de la buena pro.",
      D: "Considerar la omisión como un error material y continuar con la evaluación."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 69, numeral 69.1, literal c) del DS N.º 009-2025-EF (contenido mínimo de las ofertas técnicas). Artículo 78, numeral 78.1 y 78.2 del DS N.º 009-2025-EF (Subsanación de ofertas, incluyendo documentos emitidos por entidades públicas o privadas ejerciendo función pública o la omisión de su presentación, si fueron emitidos antes)."
  },
  {
    id: 26,
    category: "Fase de Selección",
    question: "En un Concurso Público para servicios de consultoría, dos ofertas empatan en el puntaje total. El primer criterio de desempate es el mejor puntaje técnico. Si persiste el empate, ¿cuál es el siguiente criterio de desempate establecido en la normativa?",
    options: {
      A: "Otorgar la buena pro al postor que ofertó el menor precio.",
      B: "Otorgar la buena pro al postor que sea microempresa o pequeña empresa integrada por personas con discapacidad o a un consorcio conformado en su totalidad por estas.",
      C: "Realizar una nueva evaluación de las propuestas económicas.",
      D: "Declarar desierto el procedimiento por imposibilidad de determinar un ganador."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 81, literal b) del DS N.º 009-2025-EF."
  },
  {
    id: 27,
    category: "Fase de Selección",
    question: "¿En qué momento se considera consentido el otorgamiento de la buena pro cuando se han presentado dos o más ofertas definitivas en un procedimiento de selección?",
    options: {
      A: "El mismo día de la notificación de su otorgamiento en la Pladicop.",
      B: "Al día siguiente de vencido el plazo para interponer recurso de apelación, sin que los postores hubieran ejercido ese derecho.",
      C: "Cinco días hábiles después de la notificación del otorgamiento, si no hay apelaciones.",
      D: "Una vez que el postor ganador presenta las garantías de fiel cumplimiento."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 82, numeral 82.1 del DS N.º 009-2025-EF."
  },
  {
    id: 28,
    category: "Fase de Selección",
    question: "Una entidad convoca una Subasta Inversa Electrónica para la adquisición de combustible. Al finalizar la puja, el postor que ofertó el menor precio resulta ser una empresa que no cuenta con inscripción vigente en el RNP para ser proveedor de bienes. ¿Qué debe hacer el oficial de compra?",
    options: {
      A: "Otorgarle la buena pro, ya que en la Subasta Inversa Electrónica prima el menor precio.",
      B: "Descalificar la oferta por no cumplir con un requisito de calificación esencial y revisar la siguiente mejor oferta.",
      C: "Solicitar al postor que regularice su inscripción en el RNP en un plazo de dos días hábiles.",
      D: "Declarar desierto el procedimiento por falta de ofertas válidas."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 22, numeral 22.2 del DS N.º 009-2025-EF (Para ser participante, postor, contratista o subcontratista se requiere contar con inscripción vigente en el RNP). Artículo 71 y 72 del DS (Admisión y requisitos de calificación)."
  },
  {
    id: 29,
    category: "Fase de Selección",
    question: "¿Cuál es el plazo máximo para que un postor presente los requisitos para perfeccionar el contrato en una Licitación Pública, una vez que la buena pro ha quedado consentida?",
    options: {
      A: "Cinco días hábiles.",
      B: "Ocho días hábiles.",
      C: "Diez días hábiles.",
      D: "Quince días hábiles."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 90, numeral 90.1 del DS N.º 009-2025-EF."
  },
  {
    id: 30,
    category: "Fase de Selección",
    question: "Durante la evaluación de ofertas en un Concurso Público, el comité de selección identifica que un postor ha presentado documentación falsa para acreditar su experiencia. ¿Qué consecuencia acarrea esta situación para el postor?",
    options: {
      A: "Se le otorga un plazo para subsanar y presentar la documentación correcta.",
      B: "Se le descalifica del procedimiento y la entidad debe comunicar el hecho al Tribunal de Contrataciones Públicas para el inicio del procedimiento sancionador.",
      C: "Se le permite continuar en el proceso, pero se le asigna cero puntos en el factor de experiencia.",
      D: "Se le aplica una penalidad económica equivalente al 10% de su oferta."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 83, numeral 83.2 y 83.3 del DS N.º 009-2025-EF (Verificación posterior y consecuencias de inexactitud o falsedad). Artículo 87, numeral 87.1, literal m) de la Ley N.º 32069 (Infracción por presentar documentos falsos)."
  },  {
    id: 31,
    category: "Fase de Selección",
    question: "En un procedimiento de selección bajo la modalidad de \"oferta económica limitada\" para obras con sistema de entrega de solo construcción, ¿cuál es el rango en el que debe encontrarse la oferta económica de los postores?",
    options: {
      A: "Entre el 90% y 110% de la cuantía de la contratación.",
      B: "Exactamente el 100% de la cuantía de la contratación.",
      C: "Entre el 95% y 110% de la cuantía de la contratación.",
      D: "No más del 100% de la cuantía de la contratación."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 165, literal a) del DS N.º 009-2025-EF."
  },
  {
    id: 32,
    category: "Fase de Selección",
    question: "¿Cuál es la consecuencia si un postor, habiendo obtenido la buena pro, se niega injustificadamente a perfeccionar el contrato?",
    options: {
      A: "Pierde automáticamente la buena pro y puede ser sancionado por el TCP.",
      B: "Se le otorga un plazo adicional de cinco días para reconsiderar su decisión.",
      C: "La entidad debe invitar al postor que ocupó el segundo lugar, sin más trámite.",
      D: "Se declara desierto el procedimiento y se convoca nuevamente."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 86, numeral 86.4 de la Ley N.º 32069. Artículo 91, numeral 91.3 del DS N.º 009-2025-EF."
  },
  {
    id: 33,
    category: "Fase de Selección",
    question: "En un procedimiento de Comparación de Precios, ¿quién es el responsable de registrar la convocatoria en la Pladicop y remitir la invitación a los proveedores?",
    options: {
      A: "El Titular de la Entidad.",
      B: "El área usuaria.",
      C: "El oficial de compra.",
      D: "El comité de selección."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 97, numeral 97.2 del DS N.º 009-2025-EF."
  },
  {
    id: 34,
    category: "Fase de Selección",
    question: "Una entidad pública requiere contratar un servicio de consultoría para la elaboración de un estudio de preinversión. ¿Es obligatorio que se designe un comité de selección para este proceso?",
    options: {
      A: "Sí, siempre que el valor referencial supere las 8 UIT.",
      B: "No, puede estar a cargo de un oficial de compra si así se determina en la estrategia de contratación.",
      C: "Solo si se trata de un Concurso Público con precalificación.",
      D: "Sí, para todos los servicios de consultoría es mandatorio un comité."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 56, numeral 56.1 y 56.3 del DS N.º 009-2025-EF (Los procedimientos pueden estar a cargo de oficial de compra o comité, y la elección del tipo de evaluador se determina en la estrategia)."
  },
  {
    id: 35,
    category: "Fase de Selección",
    question: "Durante la etapa de evaluación de ofertas técnicas en un Concurso Público, el comité advierte que un postor ha omitido adjuntar la copia del DNI de su representante legal. ¿Puede el comité solicitar la subsanación de esta omisión?",
    options: {
      A: "No, la omisión de documentos de identidad es causal de descalificación directa.",
      B: "Sí, porque es un error material que no altera el contenido esencial de la oferta.",
      C: "Solo si la omisión se refiere a un miembro del personal clave y no al representante legal.",
      D: "Sí, siempre que el DNI haya estado vigente a la fecha de presentación de ofertas."
    },
    correctAnswer: "D",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 78, numeral 78.1 y 78.2 del DS N.º 009-2025-EF. La subsanación procede para documentos emitidos por entidades públicas, como el DNI, si fueron emitidos con anterioridad."
  },
  {
    id: 36,
    category: "Fase de Selección",
    question: "¿Qué sucede si en un procedimiento de selección se declara desierto y la causa es que el requerimiento no se ajusta a las necesidades del mercado?",
    options: {
      A: "Se convoca inmediatamente un nuevo proceso con las mismas bases.",
      B: "La DEC informa al área usuaria para que modifique el requerimiento o realiza las modificaciones correspondientes.",
      C: "Se anula el expediente de contratación y se archiva el proceso.",
      D: "Se procede a una contratación directa por desabastecimiento inminente."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 84, literal b) del DS N.º 009-2025-EF."
  },
  {
    id: 37,
    category: "Fase de Selección",
    question: "¿Cuál es el plazo máximo para que la entidad contratante publique en la Pladicop el consentimiento de la buena pro, una vez vencido el plazo para apelar sin que se hayan interpuesto recursos?",
    options: {
      A: "El mismo día del vencimiento del plazo para apelar.",
      B: "Al día siguiente de vencido el plazo para interponer recurso de apelación.",
      C: "Tres días hábiles después del vencimiento del plazo para apelar.",
      D: "No existe un plazo específico, queda a discreción de la entidad."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 82, numeral 82.1 del DS N.º 009-2025-EF."
  },
  {
    id: 38,
    category: "Fase de Selección",
    question: "En un Concurso Público para la contratación de un servicio especializado, el comité de selección evalúa las ofertas. ¿Es obligatorio que el personal clave propuesto por los postores cuente con colegiatura y habilitación vigente?",
    options: {
      A: "Solo si así lo indican expresamente las bases estándar.",
      B: "Sí, es un requisito de calificación de capacidad técnica y profesional que debe ser verificado.",
      C: "No, la colegiatura solo es exigible para el residente de obra.",
      D: "Depende del monto del valor referencial del servicio."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 72, numeral 72.3, literal b) del DS N.º 009-2025-EF (Capacidad técnica y profesional incluye calificaciones del personal clave). La habilitación profesional es un requisito esencial para el ejercicio profesional cuando la ley lo exige."
  },
  {
    id: 39,
    category: "Fase de Selección",
    question: "¿Qué acción debe tomar una entidad si, después de otorgada la buena pro y antes de su consentimiento, advierte un vicio de nulidad en el procedimiento de selección?",
    options: {
      A: "Continuar con el perfeccionamiento del contrato y luego iniciar un procedimiento de nulidad de contrato.",
      B: "Declarar la nulidad del procedimiento de selección hasta el otorgamiento de la buena pro, si el vicio es trascendente y afecta la finalidad.",
      C: "Cancelar el procedimiento de selección por fuerza mayor.",
      D: "Esperar a que la buena pro quede consentida para luego evaluar la nulidad."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 70, numeral 70.2, literal b) de la Ley N.º 32069."
  },
  {
    id: 40,
    category: "Fase de Selección",
    question: "Un postor interpone un recurso de apelación contra el otorgamiento de la buena pro en una Licitación Pública. ¿Cuál es el efecto inmediato de esta interposición sobre el procedimiento de selección?",
    options: {
      A: "El procedimiento continúa, pero el contrato no puede perfeccionarse hasta que se resuelva la apelación.",
      B: "El procedimiento se suspende hasta que el recurso sea resuelto.",
      C: "La entidad puede continuar con el perfeccionamiento del contrato bajo su responsabilidad.",
      D: "Se anula automáticamente el otorgamiento de la buena pro."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 75, numeral 75.1 de la Ley N.º 32069."
  },
  {
    id: 41,
    category: "Fase de Selección",
    question: "¿Cuál es el monto de la garantía por interposición del recurso de apelación en un procedimiento cuya cuantía es de S/ 2,000,000, si el impugnante es una microempresa?",
    options: {
      A: "3% de S/ 2,000,000 (S/ 60,000).",
      B: "1% de S/ 2,000,000 (S/ 20,000).",
      C: "0.5% de S/ 2,000,000 (S/ 10,000), con un tope de 25 UIT.",
      D: "Una suma fija equivalente a 5 UIT."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 73, numeral 73.2 de la Ley N.º 32069. Artículo 309, numeral 309.2 del DS N.º 009-2025-EF."
  },
  {
    id: 42,
    category: "Fase de Selección",
    question: "En un Concurso Público con etapa de precalificación, ¿qué sucede si un postor invitado a presentar su oferta definitiva no lo hace?",
    options: {
      A: "Se le sanciona con la pérdida automática de su condición de precalificado.",
      B: "Se le otorga un plazo adicional para que presente su oferta.",
      C: "El procedimiento continúa con los demás postores que sí presentaron oferta.",
      D: "Se declara desierto el proceso si solo queda un postor habilitado."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Se infiere del desarrollo general de los procedimientos de selección y de la lógica de las etapas. Si un postor precalificado no presenta oferta definitiva, simplemente no participa en la siguiente fase de evaluación de dichas ofertas. No hay una penalidad específica en este punto, más allá de no poder competir por la buena pro."
  },
  {
    id: 43,
    category: "Fase de Selección",
    question: "Una entidad convoca una Licitación Pública para obras. El postor ganador, al momento de presentar los documentos para perfeccionar el contrato, omite adjuntar el contrato de consorcio con firmas legalizadas. ¿Qué debe hacer la entidad?",
    options: {
      A: "Perfeccionar el contrato y solicitar la regularización posterior del contrato de consorcio.",
      B: "Otorgar un plazo para la subsanación de la omisión, ya que es un requisito para el perfeccionamiento.",
      C: "Declarar que el postor perdió la buena pro y llamar al segundo lugar.",
      D: "Anular la buena pro y convocar a un nuevo procedimiento."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 88, numeral 88.1, literal b) del DS N.º 009-2025-EF (El contrato de consorcio es un requisito para perfeccionar). Artículo 90, numeral 90.3 y 90.5 del DS N.º 009-2025-EF (Plazos para perfeccionar y posibilidad de subsanar observaciones a los requisitos)."
  },
  {
    id: 44,
    category: "Fase de Selección",
    question: "¿En cuál de los siguientes supuestos la entidad puede cancelar un procedimiento de selección antes de la adjudicación de la buena pro?",
    options: {
      A: "Cuando el Titular de la Entidad considera que los precios ofertados son muy altos.",
      B: "Por razones de fuerza mayor o caso fortuito, o cuando desaparezca la necesidad de contratar.",
      C: "Si el comité de selección considera que ninguna oferta cumple con los requisitos técnicos.",
      D: "Cuando solo se presenta un postor válido al procedimiento."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 57, numeral 57.1 de la Ley N.º 32069."
  },
  {
    id: 45,
    category: "Fase de Selección",
    question: "Si un postor presenta una oferta económica que supera el valor estimado de la contratación en un procedimiento donde este es público, ¿qué debe hacer el comité de selección?",
    options: {
      A: "Descalificar la oferta automáticamente.",
      B: "Solicitar al postor que justifique el monto de su oferta.",
      C: "Evaluar la oferta y, si obtiene el mayor puntaje, solicitar la certificación presupuestal adicional para cubrir la diferencia.",
      D: "Dependerá de lo establecido en las bases para este supuesto."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Si el valor estimado es público y actúa como tope (lo cual es común en ciertos procedimientos o si así lo establecen las bases), una oferta que lo supere sería rechazada. (La normativa es más explícita para el valor referencial en obras y consultorías, donde si la oferta supera en más de 10% el VR se rechaza). Sin una precisión mayor en la pregunta o en las bases, y asumiendo que el valor estimado público funciona como límite, la descalificación sería la acción."
  },
  {
    id: 46,
    category: "Fase de Selección",
    question: "¿Qué ocurre si la entidad contratante no cumple con perfeccionar el contrato dentro del plazo, a pesar de que el postor ganador ha presentado toda la documentación requerida?",
    options: {
      A: "El postor pierde automáticamente la buena pro por demora de la entidad.",
      B: "El postor puede requerir su cumplimiento, dándole un plazo de cinco días hábiles, y si no se perfecciona, el postor queda liberado.",
      C: "Se entiende que el contrato se ha perfeccionado tácitamente.",
      D: "La entidad debe pagar una penalidad al postor por cada día de retraso."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 91, numeral 91.1 y 91.2 del DS N.º 009-2025-EF."
  },
  {
    id: 47,
    category: "Fase de Selección",
    question: "En un Concurso Público para la contratación de un servicio de elaboración de expediente técnico de obra, ¿cuál es el sistema de entrega que usualmente se aplica?",
    options: {
      A: "Llave en mano.",
      B: "Suma alzada o precios unitarios, según la naturaleza de la prestación.",
      C: "Concurso oferta.",
      D: "Administración directa."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "La elaboración de un expediente técnico es un servicio de consultoría. Para servicios, los sistemas de pago suelen ser suma alzada (si las actividades están claramente definidas) o precios unitarios/tarifas (si no se puede precisar el alcance). El sistema de entrega como tal no es 'concurso oferta' o 'administración directa' en este contexto."
  },  {
    id: 48,
    category: "Fase de Selección",
    question: "¿En qué caso el otorgamiento de la buena pro se produce el mismo día de su notificación en un procedimiento de selección?",
    options: {
      A: "Siempre, sin importar el número de ofertas presentadas.",
      B: "Únicamente en los procedimientos de Adjudicación Simplificada.",
      C: "Cuando se haya presentado una sola oferta válida.",
      D: "En todos los procedimientos convocados por entidades bajo el ámbito del FONAFE."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Artículo 82, numeral 82.2 del DS N.º 009-2025-EF."
  },
  
  // BLOQUE 3: FASE DE EJECUCIÓN CONTRACTUAL (24 PREGUNTAS)
  {
    id: 49,
    category: "Fase de Ejecución Contractual",
    question: "El contrato para la ejecución de la obra 'Mejoramiento del servicio educativo de la I.E. Virgen de Fátima', señala que la entrega de terreno será el día 04/03/2023, pero por problemas de invasión de terceros, la Entidad recién logra entregar el terreno el 18/03/2023. ¿Qué sucede en este caso?",
    options: {
      A: "El contratista tiene derecho a la resolución del contrato, por incumplimiento de la Entidad.",
      B: "El contratista puede solicitar una ampliación de plazo por el número de días de demora en la entrega de terreno.",
      C: "El contratista debe asumir el retraso sin derecho a reclamo, pues forma parte del riesgo del contrato.",
      D: "La Entidad debe aprobar una adenda al contrato modificando el cronograma de ejecución."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 100, numeral 100.1 del DS N.º 009-2025-EF. Las ampliaciones de plazo proceden cuando el retraso o paralizaciones no son imputables al contratista."
  },
  {
    id: 50,
    category: "Fase de Ejecución Contractual",
    question: "En un contrato para la adquisición de medicamentos, la Entidad y el contratista acuerdan modificar el contrato para incrementar la cantidad de un producto debido a una emergencia sanitaria. ¿Cuál es el límite máximo que puede incrementarse dicho contrato?",
    options: {
      A: "Hasta el 50% del monto del contrato original.",
      B: "Hasta el 25% del monto del contrato original.",
      C: "Hasta el 15% del monto del contrato original.",
      D: "No existe límite cuando se trata de una emergencia sanitaria."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 92, numeral 92.2 y 92.3 de la Ley N.º 32069."
  },
  {
    id: 51,
    category: "Fase de Ejecución Contractual",
    question: "Durante la ejecución de un contrato de consultoría para la supervisión de obra, la Entidad advierte que el supervisor no cuenta con el personal clave ofertado. ¿Qué acción puede tomar la Entidad?",
    options: {
      A: "Únicamente notificar al contratista para que en un plazo de 5 días hábiles reemplace al personal clave ausente.",
      B: "Aplicar una penalidad y aceptar cualquier personal de reemplazo que proponga el contratista.",
      C: "Resolver el contrato por incumplimiento, sin necesidad de requerimiento previo.",
      D: "Comunicar al contratista el incumplimiento, otorgándole un plazo para su subsanación, bajo apercibimiento de resolver el contrato."
    },
    correctAnswer: "D",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 105, numeral 105.1 y 105.4 de la Ley N.º 32069."
  },
  {
    id: 52,
    category: "Fase de Ejecución Contractual",
    question: "En un contrato de ejecución de obra, si durante el replanteo se advierte la necesidad de realizar una modificación al expediente técnico que implica una variación del monto contractual, ¿cómo se denomina este cambio en la normativa de contrataciones?",
    options: {
      A: "Adicional de Obra.",
      B: "Mayores Metrados.",
      C: "Partidas Nuevas.",
      D: "Expediente Técnico Modificado."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 106, numeral 106.1 de la Ley N.º 32069. Una prestación adicional de obra es aquella no considerada en el expediente técnico, ni en el contrato original, cuya realización resulta indispensable para el cumplimiento de la meta prevista."
  },
  {
    id: 53,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuál es el plazo máximo con el que cuenta la Entidad para emitir y notificar su decisión respecto a una solicitud de ampliación de plazo presentada por el contratista en un contrato de bienes o servicios?",
    options: {
      A: "7 días hábiles desde la presentación de la solicitud.",
      B: "10 días hábiles desde la presentación de la solicitud.",
      C: "15 días calendario desde la presentación de la solicitud.",
      D: "30 días calendario desde la presentación de la solicitud."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 100, numeral 100.3 del DS N.º 009-2025-EF."
  },
  {
    id: 54,
    category: "Fase de Ejecución Contractual",
    question: "La Municipalidad Provincial de Arequipa ha contratado la ejecución de la obra 'Mejoramiento de la Plaza de Armas'. Durante la ejecución, ocurre un sismo que afecta severamente parte de la estructura ya construida. ¿Qué debe hacer el contratista?",
    options: {
      A: "Solicitar inmediatamente una ampliación de plazo.",
      B: "Comunicar a la Entidad y asumir la reconstrucción a su costo, pues es responsable de la obra hasta su recepción.",
      C: "Anotar el hecho en el cuaderno de obra y comunicar a la Entidad en un plazo máximo de 24 horas.",
      D: "Paralizar la obra hasta que la Entidad apruebe un adicional para reconstruir lo dañado."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 100, numeral 100.2 del DS N.º 009-2025-EF. Se trata de un evento no atribuible al contratista, que debe ser anotado en el cuaderno de obra dentro del plazo de ocurrido el hecho, y comunicado formalmente a la Entidad dentro de las 24 horas siguientes."
  },
  {
    id: 55,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuál es el plazo que tiene la Entidad para realizar el pago al contratista luego de otorgada la conformidad de los bienes o servicios?",
    options: {
      A: "7 días calendario.",
      B: "10 días calendario.",
      C: "15 días calendario.",
      D: "20 días calendario."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 103, numeral 103.3 del DS N.º 009-2025-EF."
  },
  {
    id: 56,
    category: "Fase de Ejecución Contractual",
    question: "¿Qué sucede si un contratista acumula el monto máximo de penalidad por mora durante la ejecución contractual?",
    options: {
      A: "La Entidad puede resolver el contrato.",
      B: "La Entidad debe resolver el contrato, sin excepciones.",
      C: "La Entidad debe aplicar penalidades adicionales.",
      D: "La Entidad debe negociar un nuevo plazo con el contratista."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 104, numeral 104.2 del DS N.º 009-2025-EF."
  },
  {
    id: 57,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuál es el monto máximo de penalidad por mora que puede aplicar la Entidad a un contratista?",
    options: {
      A: "10% del monto del contrato vigente.",
      B: "15% del monto del contrato vigente.",
      C: "20% del monto del contrato vigente.",
      D: "25% del monto del contrato vigente."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 104, numeral 104.1 del DS N.º 009-2025-EF."
  },
  {
    id: 58,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuál es la consecuencia si la Entidad no emite pronunciamiento dentro del plazo sobre una solicitud de ampliación de plazo presentada por el contratista?",
    options: {
      A: "Se considera automáticamente denegada la solicitud.",
      B: "Se considera automáticamente aprobada la solicitud.",
      C: "El contratista puede pedir la intervención del OSCE para resolver la controversia.",
      D: "El contrato se mantiene suspendido hasta que la Entidad emita pronunciamiento."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 100, numeral 100.4 del DS N.º 009-2025-EF."
  },
  {
    id: 59,
    category: "Fase de Ejecución Contractual",
    question: "En un contrato de obra ejecutado bajo el sistema a suma alzada, se detecta un error en el expediente técnico que genera la necesidad de ejecutar mayores metrados. ¿Cómo se gestionan estos mayores metrados?",
    options: {
      A: "Se reconocen automáticamente y se pagan al contratista.",
      B: "No corresponde el pago de mayores metrados en un contrato a suma alzada.",
      C: "Se reconocen si el contratista demuestra que no pudo advertir el error durante el proceso de selección.",
      D: "Se requiere la aprobación de una prestación adicional para su pago."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 56, numeral 56.2 del DS N.º 009-2025-EF. En el sistema a suma alzada, el postor formula su oferta por un monto fijo integral y por un determinado plazo de ejecución, considerando todas las actividades necesarias para su ejecución."
  },
  {
    id: 60,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuál de las siguientes situaciones NO constituye una causal para la aprobación de un adicional de obra?",
    options: {
      A: "Deficiencias en el expediente técnico.",
      B: "Situaciones imprevisibles posteriores al perfeccionamiento del contrato.",
      C: "Retraso injustificado en la ejecución de la obra por causas imputables al contratista.",
      D: "Mayores metrados generados por situaciones imprevisibles."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 106, numeral 106.1 de la Ley N.º 32069. Las prestaciones adicionales proceden por deficiencias del expediente técnico o situaciones imprevisibles posteriores a la suscripción del contrato."
  },
  {
    id: 61,
    category: "Fase de Ejecución Contractual",
    question: "En un contrato de servicios, si el contratista solicita la recepción y conformidad de las prestaciones, ¿cuál es el plazo máximo que tiene la Entidad para verificar y otorgar la conformidad?",
    options: {
      A: "07 días calendario.",
      B: "10 días calendario.",
      C: "15 días calendario.",
      D: "20 días calendario."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 103, numeral 103.2 del DS N.º 009-2025-EF."
  },
  {
    id: 62,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuál es la forma correcta de calcular la penalidad diaria por mora en la ejecución de un contrato?",
    options: {
      A: "0.05 x Monto total del contrato / F x Plazo en días.",
      B: "0.10 x Monto vigente del contrato / F x Plazo vigente en días.",
      C: "0.15 x Monto vigente del contrato / F x Plazo vigente en días.",
      D: "0.20 x Monto total del contrato / F x Plazo en días."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 104, numeral 104.1 del DS N.º 009-2025-EF."
  },
  {
    id: 63,
    category: "Fase de Ejecución Contractual",
    question: "¿Qué sucede con las garantías de fiel cumplimiento cuando el contrato es resuelto por incumplimiento del contratista?",
    options: {
      A: "Son devueltas al contratista previa solicitud formal.",
      B: "Son ejecutadas automáticamente por la Entidad.",
      C: "Se mantienen vigentes hasta la liquidación final del contrato.",
      D: "Se transfieren al arbitraje para determinar su ejecución."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 105, numeral 105.8 de la Ley N.º 32069."
  },
  {
    id: 64,
    category: "Fase de Ejecución Contractual",
    question: "En un contrato para la adquisición de bienes, ¿cuál es el monto mínimo para la exigencia de garantía de fiel cumplimiento?",
    options: {
      A: "La garantía siempre es exigible sin importar el monto.",
      B: "No se exige garantía para contratos por montos menores a 8 UIT.",
      C: "No se exige garantía para contratos por montos menores a 50 UIT.",
      D: "No se exige garantía para contratos por montos menores a 100 UIT."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 98, numeral 98.1 del DS N.º 009-2025-EF."
  },
  {
    id: 65,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuál es el porcentaje del monto del contrato original hasta el cual puede ordenarse la ejecución de prestaciones adicionales en los contratos de bienes y servicios?",
    options: {
      A: "15%",
      B: "20%",
      C: "25%",
      D: "30%"
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 92, numeral 92.3 de la Ley N.º 32069."
  },
  {
    id: 66,
    category: "Fase de Ejecución Contractual",
    question: "Si durante la ejecución de una obra, el contratista considera que una instrucción del supervisor excede su contrato, ¿qué debe hacer?",
    options: {
      A: "Anotar el hecho en el cuaderno de obra y solicitar al supervisor que realice la consulta a la Entidad.",
      B: "Suspender la ejecución de la obra hasta que se aclare la instrucción.",
      C: "Ejecutar la instrucción bajo protesta y luego solicitar un adicional de obra.",
      D: "Comunicar directamente a la Entidad, omitiendo al supervisor."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 118, numeral 118.3 del DS N.º 009-2025-EF."
  },
  {
    id: 67,
    category: "Fase de Ejecución Contractual",
    question: "¿Quién es el responsable de custodiar el cuaderno de obra durante la ejecución de la obra?",
    options: {
      A: "El contratista.",
      B: "La Entidad.",
      C: "El supervisor o inspector de obra.",
      D: "El residente de obra."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 118, numeral 118.2 del DS N.º 009-2025-EF."
  },
  {
    id: 68,
    category: "Fase de Ejecución Contractual",
    question: "En caso de controversias durante la ejecución contractual, ¿cuál es el plazo para iniciar el arbitraje después de agotada la conciliación?",
    options: {
      A: "10 días hábiles.",
      B: "15 días hábiles.",
      C: "30 días hábiles.",
      D: "45 días hábiles."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 110, numeral 110.4 de la Ley N.º 32069."
  },
  {
    id: 69,
    category: "Fase de Ejecución Contractual",
    question: "¿Cuál es el plazo máximo para que el contratista presente su liquidación de obra después de la recepción?",
    options: {
      A: "30 días calendario.",
      B: "45 días calendario.",
      C: "60 días calendario.",
      D: "90 días calendario."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 127, numeral 127.1 del DS N.º 009-2025-EF."
  },
  {
    id: 70,
    category: "Fase de Ejecución Contractual",
    question: "¿En qué momento se devuelve la garantía de fiel cumplimiento en un contrato de bienes?",
    options: {
      A: "A la firma del contrato.",
      B: "A la entrega de los bienes.",
      C: "Después de otorgada la conformidad y realizado el pago.",
      D: "A los 30 días de culminado el contrato."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 98, numeral 98.5 del DS N.º 009-2025-EF."
  },
  {
    id: 71,
    category: "Fase de Ejecución Contractual",
    question: "Si un contrato de obra bajo el sistema de precios unitarios requiere la ejecución de mayores metrados, ¿qué procedimiento debe seguirse para su aprobación?",
    options: {
      A: "Requieren autorización previa del Titular de la Entidad, sin importar su monto.",
      B: "No requieren autorización previa para su ejecución ni para su pago.",
      C: "Requieren autorización previa del supervisor o inspector de obra.",
      D: "Solo requieren autorización previa si superan el 15% del monto del contrato."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 106, numeral 106.9 de la Ley N.º 32069. Para la ejecución y pago de mayores metrados en contratos de obra a precios unitarios, no se requiere autorización previa."
  },
  {
    id: 72,
    category: "Fase de Ejecución Contractual",
    question: "Durante la recepción de obra, el comité de recepción encuentra observaciones. ¿Cuál es el plazo máximo para que el contratista subsane dichas observaciones?",
    options: {
      A: "1/5 del plazo de ejecución de la obra.",
      B: "1/10 del plazo de ejecución de la obra.",
      C: "30 días calendario.",
      D: "45 días calendario."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Artículo 126, numeral 126.5 del DS N.º 009-2025-EF."
  },
];
