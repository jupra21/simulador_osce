import { Question } from '../types/index';
import { CompetencyArea } from '../types/index';

// Preguntas específicas para el simulador Avanzado
console.log('Cargando questions-advanced.ts');
export const questionsAdvanced: Question[] = [
  // BLOQUE I: ACTUACIONES PREPARATORIAS
  {
    id: 1,
    category: "Actuaciones Preparatorias",
    question: "Una entidad contratante, en el marco de su Programación Multianual de Bienes, Servicios y Obras (PMBSO) para el ejercicio fiscal en curso, identifica la necesidad de contratar un servicio recurrente de consultoría especializado por un monto que supera el umbral para Contrato Menor pero no alcanza el de Licitación Pública. La Dirección General de Abastecimiento (DGA) ha emitido una directiva que establece el uso obligatorio de un procedimiento de selección abreviado para este tipo de servicio, con base en criterios de eficiencia y agilidad. Según la normativa vigente, ¿cuál de las siguientes afirmaciones es **incorrecta** respecto a la gestión de esta contratación?",
    options: {
      A: "La entidad debe considerar la directiva de la DGA y utilizar el procedimiento abreviado señalado, ya que la DGA es la máxima autoridad técnico-normativa del Sistema Nacional de Abastecimiento.",
      B: "El área usuaria, al elaborar el requerimiento, debe incluir la justificación técnica y legal para la utilización de la modalidad abreviada conforme a lo establecido en la estrategia de contratación.",
      C: "El evaluador a cargo del procedimiento de selección debe basar la elaboración de las bases en la información proporcionada en el expediente de contratación aprobado por la autoridad de gestión administrativa.",
      D: "La Dirección General de Abastecimiento (DGA) establece los procedimientos, requisitos y condiciones para las modalidades abreviadas de los procedimientos de selección competitivos en el reglamento de la Ley."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 10 de la Ley N.º 32069, Artículo 12.1 del Reglamento D.S. N.º 009-2025-EF, Artículo 46.1 del Reglamento D.S. N.º 009-2025-EF, Artículo 55.1 del Reglamento D.S. N.º 009-2025-EF. (El Reglamento establece los procedimientos para modalidades abreviadas, no la DGA en el reglamento)."
  },
  {
    id: 2,
    category: "Actuaciones Preparatorias",
    question: "Una entidad contratante planifica la adquisición de material bibliográfico especializado para su biblioteca, indispensable para cumplir con los planes curriculares y pedagógicos de una institución educativa pública adscrita. El requerimiento ha sido elaborado por el área usuaria, identificando el título, autor y edición específicos, justificando plenamente esta elección. Según la Ley N.º 32069 y su Reglamento, ¿cuál es la condición esencial para la validez de este requerimiento particular?",
    options: {
      A: "Que la adquisición se sustente exclusivamente en criterios técnicos y pedagógicos del área usuaria.",
      B: "Que la estrategia de contratación haya considerado la naturaleza específica del material bibliográfico.",
      C: "Que el requerimiento especifique únicamente el título, autor y edición, sin referenciar marcas comerciales si las hubiera.",
      D: "Que la DGA haya emitido una directiva que apruebe la adquisición de material bibliográfico por contenido temático o planes curriculares."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 126.7 del Reglamento D.S. N.º 009-2025-EF. (El artículo 126.7 establece que la justificación debe ser 'debidamente justificadas por el área usuaria' en base al contenido temático, planes curriculares, etc.)."
  },
  {
    id: 3,
    category: "Actuaciones Preparatorias",
    question: "El jefe de una oficina descentralizada de un Ministerio, con facultades delegadas mediante resolución para ejercer la máxima autoridad administrativa en el ámbito de su competencia territorial, ha estado involucrado en la aprobación del expediente de contratación para la ejecución de una obra de mantenimiento vial en su jurisdicción. Seis meses después de cesar en dicho cargo, busca postular como socio en un consorcio para una licitación pública de consultoría de obra a nivel nacional, donde la obra se ubica en una provincia diferente. ¿Se encuentra impedido de contratar con el Estado en este procedimiento?",
    options: {
      A: "Sí, se encuentra impedido de contratar con el Estado por el plazo de seis meses desde el cese del cargo en todo proceso de contratación a nivel nacional, conforme al Tipo 1.D.",
      B: "Sí, se encuentra impedido de contratar con el Estado por el plazo de seis meses desde el cese del cargo en el ámbito territorial donde ejerció funciones, conforme al Tipo 1.D.",
      C: "No, el impedimento del Tipo 1.D aplica al titular de la entidad o a la autoridad de gestión administrativa, no a los jefes de oficinas descentralizadas con facultades delegadas.",
      D: "No, el impedimento del Tipo 1.D aplica al titular de la entidad o a la autoridad de gestión administrativa, pero incluso si aplicara, el impedimento territorial solo se extiende hasta seis meses después del cese."
    },
    correctAnswer: "D",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 30.1 literal a) y Tabla Tipo 1.D de la Ley N.º 32069, Artículo 25.1 literal b) y 25.1 literal a) del Reglamento D.S. N.º 009-2025-EF. (El impedimento aplica a la autoridad de gestión administrativa, y el alcance territorial es relevante para este tipo)."
  },
  {
    id: 4,
    category: "Actuaciones Preparatorias",
    question: "La entidad contratante XYZ requiere la adquisición de bienes fungibles de uso recurrente, cuyo plazo de prestación según las bases estándar es de doce meses. Considerando la naturaleza del bien y la necesidad continua, el área usuaria propone que el requerimiento establezca un plazo de dos años. ¿Es viable esta propuesta según la normativa vigente?",
    options: {
      A: "Sí, siempre que se adopten las previsiones presupuestarias necesarias para garantizar el pago de las obligaciones en ambos ejercicios fiscales.",
      B: "Sí, pero el plazo máximo para la contratación de bienes de provisión continua o periódica es de un año, prorrogable sucesivamente.",
      C: "No, el plazo máximo para la contratación de bienes fungibles o perecibles está sujeto a las excepciones establecidas en la estrategia de contratación, pero no puede superar un año.",
      D: "Sí, si el bien se adquiere mediante catálogos electrónicos de acuerdo marco, ya que estos permiten contratos con plazos mayores a un año."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 126.2 del Reglamento D.S. N.º 009-2025-EF. (Permite hasta 3 años para provisión continua/periódica si hay previsiones presupuestarias, salvo excepciones)."
  },
  {
    id: 5,
    category: "Actuaciones Preparatorias",
    question: "En el marco de una contratación bajo un sistema de entrega de obras, la entidad contratante evalúa la conveniencia de utilizar metodologías colaborativas para la gestión del proyecto. La estrategia de contratación ha identificado la necesidad de emplear Building Information Modeling (BIM). Según la normativa vigente, ¿qué aspecto debe incluir la estrategia de contratación para este caso?",
    options: {
      A: "El análisis comparativo para la elección del sistema de entrega de la obra y la valoración del empleo de metodologías de trabajo colaborativo.",
      B: "La obligatoriedad de la utilización de BIM durante la fase de ejecución contractual, conforme a los lineamientos del Sistema Nacional de Programación Multianual y Gestión de Inversiones (SNPMGI).",
      C: "El sustento técnico y legal de la necesidad de BIM, considerando únicamente la complejidad técnica de la obra.",
      D: "La propuesta de incentivos para el contratista por la implementación exitosa de metodologías colaborativas como BIM."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 49.3 de la Ley N.º 32069. (Menciona que la estrategia debe incluir el análisis comparativo para la elección del sistema de entrega y la valoración del empleo de metodologías colaborativas como BIM)."
  },
  {
    id: 6,
    category: "Actuaciones Preparatorias",
    question: "Una entidad contratante necesita adquirir servicios especializados de consultoría. El área usuaria, en coordinación con la dependencia encargada de las contrataciones (DEC), está elaborando el requerimiento. El jefe del área usuaria insiste en incluir en los términos de referencia una cláusula que exige que el personal clave del consultor posea certificaciones específicas no universales, argumentando que solo así se garantizará la calidad del servicio. ¿Es esto procedente según la normativa de contrataciones públicas?",
    options: {
      A: "Sí, si la estrategia de contratación justifica que dicha exigencia es indispensable para asegurar la calidad técnica y cumplir con la finalidad pública.",
      B: "Sí, si la exigencia está prevista en una norma técnica de carácter obligatorio vinculada al objeto de la contratación.",
      C: "No, el requerimiento no puede incluir exigencias desproporcionadas o innecesarias que limiten la concurrencia o favorezcan a determinado proveedor.",
      D: "No, las certificaciones específicas no universales solo pueden ser consideradas como factores de evaluación, no como requisitos de calificación."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 44.6 del Reglamento D.S. N.º 009-2025-EF. (Prohíbe exigencias desproporcionadas o innecesarias)."
  },
  {
    id: 7,
    category: "Actuaciones Preparatorias",
    question: "Durante la fase de actuaciones preparatorias, la DEC de una entidad contratante realiza una 'indagación avanzada' sobre el mercado para la adquisición de bienes que requieren provisión continua. Según la normativa vigente, ¿cuál de las siguientes opciones es una fuente de información permitida para esta indagación avanzada?",
    options: {
      A: "Únicamente la información histórica de la entidad contratante sobre contrataciones anteriores del mismo bien.",
      B: "La información de procedimientos de selección y contratos suscritos por otras entidades, obtenida de la Pladicop, y otras fuentes pertinentes estimadas en la estrategia de contratación.",
      C: "Exclusivamente la información de proveedores registrados en el RNP sobre su experiencia en contrataciones similares.",
      D: "Unicamente la realización de consultas escritas a potenciales proveedores identificados en el mercado."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 48.2 y 48.3 del Reglamento D.S. N.º 009-2025-EF. (Indagación avanzada utiliza dos o más fuentes, incluyendo info de otras entidades en Pladicop y otras fuentes estimadas)."
  },
  {
    id: 8,
    category: "Actuaciones Preparatorias",
    question: "Una entidad contratante ha identificado la necesidad de contratar un servicio común que cuenta con una ficha técnica aprobada y publicada por Perú Compras en la Pladicop. El monto estimado de la contratación supera las 8 UIT. ¿Cuál es la obligación de la entidad contratante respecto al uso de esta ficha técnica al elaborar su requerimiento?",
    options: {
      A: "Es obligatorio utilizar la ficha técnica al elaborar el requerimiento, salvo que la entidad justifique objetivamente que no se ajusta a su necesidad específica.",
      B: "Es obligatorio utilizar la ficha técnica al elaborar el requerimiento y no puede modificar su contenido bajo ninguna circunstancia.",
      C: "El uso de la ficha técnica es obligatorio solo si el procedimiento de selección a utilizar es la Subasta Inversa Electrónica.",
      D: "El uso de la ficha técnica es facultativo si el monto de la contratación supera las 8 UIT."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 42.3 de la Ley N.º 32069, Artículo 260.4 del Reglamento D.S. N.º 009-2025-EF. (El uso de la ficha técnica es obligatorio y su contenido no puede ser modificado por la entidad contratante)."
  },
  {
    id: 9,
    category: "Actuaciones Preparatorias",
    question: "En el contexto de un procedimiento de selección competitivo, ¿cuál es la principal función del evaluador, ya sea oficial de compra, comité o jurado, según lo establecido en la normativa vigente?",
    options: {
      A: "Garantizar la libre concurrencia y competencia efectiva de los proveedores en el proceso de selección.",
      B: "Adoptar las decisiones necesarias para el desarrollo del procedimiento de selección, sin alterar, cambiar o modificar la información del expediente de contratación.",
      C: "Elaborar las bases del procedimiento de selección a partir de la información del expediente de contratación, incluyendo los factores de evaluación obligatorios.",
      D: "Verificar que los postores cumplan con todos los requisitos legales y técnicos exigidos por la normativa y las bases para ser admitidos."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 52.3 de la Ley N.º 32069. (Señala que los comités o jurados adoptan las decisiones necesarias sin alterar la información del expediente, salvo factores de evaluación y excepciones)."
  },
  {
    id: 10,
    category: "Actuaciones Preparatorias",
    question: "Una entidad contratante requiere contratar la ejecución de una obra pública. Durante la fase de actuaciones preparatorias, el área usuaria elabora el requerimiento. Según la normativa, ¿cuál es la responsabilidad principal del área usuaria en esta fase?",
    options: {
      A: "Determinar la cuantía de la contratación y gestionar la asignación de los recursos presupuestales necesarios.",
      B: "Formular adecuadamente sus requerimientos en coordinación con la DEC y verificar el cumplimiento de las obligaciones del contrato.",
      C: "Elaborar la estrategia de contratación considerando el ciclo de vida de la obra y la gestión de riesgos.",
      D: "Aprobar el expediente de contratación que contenga el requerimiento final y todos los documentos necesarios."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 25.1 literal c) de la Ley N.º 32069, Artículo 20.1 literal a) del Reglamento D.S. N.º 009-2025-EF. (Define el área usuaria y sus responsabilidades, incluyendo la formulación del requerimiento y verificación contractual)."
  },
  {
    id: 11,
    category: "Actuaciones Preparatorias",
    question: "Una entidad contratante del gobierno nacional decide acogerse a una compra centralizada obligatoria dispuesta por la DGA para la adquisición de vehículos. Según la normativa vigente, ¿quién es responsable de desarrollar el proceso de contratación para esta compra centralizada obligatoria?",
    options: {
      A: "La entidad contratante que se adhiere a la compra centralizada.",
      B: "Perú Compras, que es la entidad encargada por defecto para las compras centralizadas obligatorias.",
      C: "Un comité técnico especializado conformado por representantes de la entidad encargante y las entidades requerientes.",
      D: "La DGA, como ente rector del Sistema Nacional de Abastecimiento."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 20.2 literal f) de la Ley N.º 32069, Artículo 241.1, 241.3, 241.4 del Reglamento D.S. N.º 009-2025-EF. (Perú Compras promueve, conduce y gestiona compras centralizadas obligatorias)."
  },
  {
    id: 12,
    category: "Actuaciones Preparatorias",
    question: "Un Ministerio planea homologar el requerimiento de un servicio transversal de gran impacto en la gestión pública. Según la normativa, ¿quién es el responsable de impulsar y ejecutar este proceso de homologación?",
    options: {
      A: "La Dirección General de Abastecimiento (DGA) en coordinación con el Ministerio.",
      B: "El Ministerio, a través de su equipo de homologación, en coordinación con Perú Compras.",
      C: "Perú Compras, ya que es el organismo especializado en la estandarización de requerimientos.",
      D: "El Organismo Especializado para las Contrataciones Públicas Eficientes (OECE), como administrador de la Pladicop."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 42.5 de la Ley N.º 32069, Artículo 266.1 y 270.2 del Reglamento D.S. N.º 009-2025-EF. (Los Ministerios ejecutan la homologación a través de su equipo, sujeto a directiva de Perú Compras)."
  },
  {
    id: 13,
    category: "Actuaciones Preparatorias",
    question: "Durante la ejecución de una obra bajo el sistema de entrega de solo construcción, el contratista detecta la necesidad de ejecutar mayores metrados no previstos en el presupuesto contractual, debido a un error en el replanteo. Estos mayores metrados, sumados a otros adicionales aprobados, superan el 50% del monto del contrato original. ¿Qué acción debe realizar la entidad ante esta situación?",
    options: {
      A: "Aprobar la ejecución de los mayores metrados que exceden el 50% previa autorización de la CGR.",
      B: "Resolver el contrato.",
      C: "Reducir el alcance de la obra para no superar el límite del 50%.",
      D: "Requerir al contratista que asuma el costo del exceso."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento: Artículo 194.5 del DS Nº 009-2025-EF."
  },
  {
    id: 14,
    category: "Actuaciones Preparatorias",
    question: "La dependencia encargada de las contrataciones (DEC) de una entidad contratante revisa la Ficha Única del Proveedor (FUP) de un postor en un procedimiento de selección. La FUP muestra que el postor fue sancionado con inhabilitación temporal hace tres años. Según la Ley N.º 32069 y su Reglamento, ¿qué información específica sobre esta sanción debería estar disponible en el RNP, que forma parte de la Pladicop y se integra en la FUP?",
    options: {
      A: "Únicamente el hecho de la sanción y su duración.",
      B: "La relación de proveedores sancionados por el Tribunal de Contrataciones Públicas (TCP) de los últimos cinco años, incluyendo la información de los socios o titulares y de los integrantes de los órganos de administración al momento de la sanción.",
      C: "La información de sanciones impuestas por el TCP y por otras entidades facultadas por ley en los últimos cuatro años.",
      D: "El registro de sanciones definitivas impuestas por el TCP, sin incluir información sobre inhabilitaciones temporales."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 22.4 del Reglamento D.S. N.º 009-2025-EF. (Especifica la información sobre TCP sanctions in RNP/FUP)."
  },
  {
    id: 15,
    category: "Actuaciones Preparatorias",
    question: "El área usuaria de una entidad contratante identifica la necesidad de un servicio especializado que, dada su alta complejidad técnica, la entidad no cuenta con la capacidad interna para determinar completamente el requerimiento idóneo. La entidad evalúa encargar la fase de actuaciones preparatorias (incluyendo la definición precisa del requerimiento) a un organismo internacional debidamente acreditado. ¿Cuál es una condición necesaria para que proceda este encargo según el Reglamento?",
    options: {
      A: "Que la entidad acredite la falta de capacidad técnica para definir el requerimiento debido a su complejidad y que el objeto contractual no esté relacionado con las funciones habituales de la entidad.",
      B: "Que el organismo internacional cuente con procedimientos formales de carácter general previamente establecidos para ejecutar encargos similares.",
      C: "Que el encargo incluya obligatoriamente tanto la fase de actuaciones preparatorias como la fase de selección.",
      D: "Que el Titular de la Entidad apruebe el encargo previo informe técnico legal que sustente la necesidad y conveniencia."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 238.1 literal a) del Reglamento D.S. N.º 009-2025-EF. (Establece la condición de acreditar falta de capacidad y que el objeto no sea habitual)."
  },
  {
    id: 16,
    category: "Actuaciones Preparatorias",
    question: "Una entidad contratante planea convocar una licitación pública para adquisición de bienes, cuya cuantía se encuentra dentro del rango establecido para esta modalidad. Según el Reglamento de la Ley N.º 32069, ¿cuál es el plazo mínimo entre la fecha de convocatoria y la presentación de ofertas para este procedimiento, salvo excepciones?",
    options: {
      A: "No menor de veintidós días hábiles.",
      B: "No menor de diez días calendario.",
      C: "No menor de quince días hábiles.",
      D: "No menor de tres días hábiles."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 64.1 del Reglamento D.S. N.º 009-2025-EF. (Para modalidades abreviadas, el plazo es no menor a tres días hábiles, salvo si hay consultas/observaciones)."
  },
  {
    id: 17,
    category: "Actuaciones Preparatorias",
    question: "Una entidad contratante necesita adquirir equipos médicos complejos. El área usuaria propone utilizar el sistema de entrega 'Llave en mano con mantenimiento', que incluye el mantenimiento del equipo además de la instalación y puesta en funcionamiento. Según el Reglamento, ¿este sistema de entrega es obligatorio para la adquisición de equipamiento médico?",
    options: {
      A: "Sí, es obligatorio para adquirir equipamiento médico, para garantizar su ciclo de vida y operatividad.",
      B: "No, el uso de sistemas de entrega en bienes y servicios es facultativo y depende de la estrategia de contratación.",
      C: "Es obligatorio solo para equipamiento técnicamente complejo o avanzado.",
      D: "Es obligatorio si así lo determina la DGA mediante directiva específica para equipamiento médico."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 129 literal b) del Reglamento D.S. N.º 009-2025-EF. (Establece la obligatoriedad para equipamiento médico)."
  },
  {
    id: 18,
    category: "Actuaciones Preparatorias",
    question: "Según el Reglamento, ¿cuál es el propósito principal de la CCLC en el marco del RNP?",
    options: {
      A: "Certificar que el ejecutor de obras cumple con los requisitos de solvencia económica.",
      B: "Acreditar el monto no comprometido de la capacidad máxima de contratación de un ejecutor de obras.",
      C: "Registrar el historial de ejecución de obras de un postor.",
      D: "Habilitar a un postor para suscribir contratos de obra, certificando que cuenta con capacidad suficiente."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 29.1 del Reglamento D.S. N.º 009-2025-EF. (Define la CCLC como el documento que certifica el monto no comprometido de la capacidad máxima de contratación)."
  },
  {
    id: 19,
    category: "Actuaciones Preparatorias",
    question: "La Dirección General de Abastecimiento (DGA) está elaborando una directiva para regular la gestión de riesgos en la contratación pública. Según la Ley N.º 32069, ¿quién es responsable de establecer las disposiciones específicas para la gestión de riesgos?",
    options: {
      A: "El OECE, como organismo especializado en contrataciones públicas eficientes.",
      B: "El Ministerio de Economía y Finanzas (MEF), como ente rector del Sistema Nacional de Abastecimiento.",
      C: "La DGA, mediante directiva, establece las disposiciones específicas para la gestión de riesgos.",
      D: "Las entidades contratantes, en el marco de su autonomía funcional."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 156.5 del Reglamento D.S. N.º 009-2025-EF. (Confirma que la DGA establece disposiciones específicas mediante directiva)."
  },
  {
    id: 20,
    category: "Actuaciones Preparatorias",
    question: "Un postor, al registrarse como participante en un procedimiento de selección, presenta una declaración jurada de desafectación del impedimento por parentesco, acogiéndose a una de las excepciones previstas en el numeral 2 del párrafo 30.1 del artículo 30 de la Ley. Según la normativa vigente, ¿qué acción debe realizar la entidad contratante respecto a esta declaración jurada?",
    options: {
      A: "Verificar la declaración jurada y autorizar la participación del postor si cumple formalmente con el requisito.",
      B: "Remitir la declaración jurada al órgano de control institucional (OCI) para que se haga constar la condición de desafectación.",
      C: "Archivar la declaración jurada como parte del expediente de contratación sin realizar ninguna verificación adicional.",
      D: "Requerir documentación adicional que acredite la desafectación, ya que la declaración jurada no es suficiente."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 33.2 de la Ley N.º 32069. (Establece la remisión al OCI)."
  },
  {
    id: 21,
    category: "Actuaciones Preparatorias",
    question: "La Plataforma Digital para las Contrataciones Públicas (Pladicop) integra diversas herramientas digitales relacionadas con la gestión de contrataciones. Según la Ley N.º 32069, ¿cuál es el valor legal de las actuaciones y actos realizados en la Pladicop en comparación con los realizados por medios manuales?",
    options: {
      A: "Tienen el mismo valor y eficacia que los actos manuales, siempre que se ajusten a los requisitos establecidos en la normativa.",
      B: "Sustituyen a los actos realizados por medios manuales para todos los efectos legales.",
      C: "Tienen valor legal solo si son ratificados posteriormente por un acto administrativo manual.",
      D: "Tienen valor legal solo si la normativa sectorial específica así lo dispone."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 41.4 de la Ley N.º 32069. (Establece que sustituyen a los actos manuales para todos los efectos legales)."
  },
  {
    id: 22,
    category: "Actuaciones Preparatorias",
    question: "Se convoca un procedimiento de selección competitivo para la contratación de un servicio, y en las bases se establece que la evaluación de ofertas económicas se realizará de manera posterior a la evaluación técnica. Según el Reglamento, ¿cuál es el puntaje máximo que puede otorgarse a cada una de estas evaluaciones?",
    options: {
      A: "100 puntos para la evaluación técnica y 100 puntos para la evaluación económica.",
      B: "60 puntos para la evaluación técnica y 40 puntos para la evaluación económica.",
      C: "El puntaje máximo de la evaluación económica no puede superar los cuarenta puntos, salvo en la comparación de precios.",
      D: "La suma de los puntajes máximos de ambas evaluaciones debe ser equivalente a cien puntos."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 75.2 del Reglamento D.S. N.º 009-2025-EF. (Establece que en evaluación posterior, el puntaje máximo de cada es cien puntos)."
  },
  {
    id: 23,
    category: "Actuaciones Preparatorias",
    question: "Una entidad contratante necesita adquirir bienes estandarizados que cuentan con una ficha técnica aprobada por Perú Compras. La entidad decide utilizar el procedimiento de Subasta Inversa Electrónica. Sin embargo, al elaborar el requerimiento, incluye requisitos de calificación adicionales a los contemplados en la ficha técnica, argumentando que son necesarios para asegurar la idoneidad del proveedor. Según la normativa, ¿es esto procedente?",
    options: {
      A: "Sí, los requisitos adicionales pueden incluirse si están justificados en la estrategia de contratación.",
      B: "Sí, siempre que los requisitos adicionales no limiten la libre concurrencia de proveedores.",
      C: "No, no se pueden incluir requisitos de calificación adicionales o diferentes a los contemplados en la ficha técnica, salvo que la normativa específica del objeto exija un requisito obligatorio.",
      D: "No, la inclusión de requisitos adicionales es responsabilidad exclusiva del OECE."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 96.2 del Reglamento D.S. N.º 009-2025-EF. (Prohíbe requisitos adicionales, salvo excepción normativa específica)."
  },  {
    id: 24,
    category: "Actuaciones Preparatorias",
    question: "La Ley N.º 32069 establece principios rectores de la contratación pública. Uno de ellos es el principio de 'Valor por dinero'. ¿Cuál de las siguientes afirmaciones describe correctamente la aplicación de este principio en el marco de las actuaciones preparatorias y la fase de selección según la Ley?",
    options: {
      A: "Maximizar el uso de recursos públicos priorizando únicamente el menor precio de las ofertas presentadas.",
      B: "Contratar a quien asegure el cumplimiento de la finalidad pública, considerando calidad, sostenibilidad, costos y plazos, sin procurar únicamente el menor precio.",
      C: "Garantizar la transparencia y el acceso público a la información sobre las contrataciones para fomentar la competencia.",
      D: "Promover prácticas responsables considerando aspectos económicos, sociales y medioambientales en el proceso de adquisición."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PLANNING,
    explanation: "Fundamento legal: Artículo 5.1 literal c) de la Ley N.º 32069. (Define el principio de Valor por dinero)."
  },
  // BLOQUE II: FASE DE SELECCIÓN
  {
    id: 25,
    category: "Fase de Selección",
    question: "Durante un procedimiento de Adjudicación Simplificada para la contratación de servicios de consultoría, uno de los participantes presenta una consulta cuestionando un requisito de calificación que considera restrictivo. El comité de selección, tras analizar la consulta, concluye que el requisito efectivamente limita la concurrencia injustificadamente. ¿Cuál es la acción correcta que debe adoptar el comité de selección según la normativa vigente?",
    options: {
      A: "Elaborar y publicar un pliego de absolución manteniendo el requisito, argumentando que este fue incluido en los términos de referencia aprobados por el área usuaria y no puede ser modificado en esta etapa.",
      B: "Solicitar al área usuaria que reformule el requisito de calificación y, tras recibir su respuesta, modificar las bases eliminando o ajustando el requisito restrictivo mediante una resolución de integración.",
      C: "Desestimar la consulta dado que los requisitos de calificación son inmodificables durante el procedimiento de selección, y sugerir al participante que presente una impugnación formal si considera vulnerados sus derechos.",
      D: "Consultar al Órgano Encargado de las Contrataciones para que este determine si corresponde modificar el requisito, ya que el comité no tiene facultades para realizar cambios sustanciales a las bases."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículos 72.4 y 72.7 del Reglamento D.S. N.º 009-2025-EF. (Las consultas y observaciones pueden generar modificaciones a las bases, y el comité debe coordinar con el área usuaria cuando corresponda)."
  },
  {
    id: 26,
    category: "Fase de Selección",
    question: "Durante un procedimiento de selección, un participante ha solicitado la elevación de cuestionamientos al pliego de absolución de consultas y observaciones ante el OSCE. Según la normativa vigente, ¿en cuál de los siguientes casos el OSCE emitirá un pronunciamiento sobre el particular?",
    options: {
      A: "Solo cuando el valor estimado del procedimiento sea igual o superior al tope para Licitación Pública y Concurso Público.",
      B: "En cualquier tipo de procedimiento de selección, siempre que el participante haya agotado la vía de reconsideración ante el comité de selección.",
      C: "En procedimientos de selección cuyo valor estimado sea igual o superior al tope para Adjudicación Simplificada, tratándose de bienes, servicios y consultoría en general.",
      D: "Únicamente cuando el OSCE identifique que las absoluciones podrían contravenir normas de contratación pública, incluso en procedimientos por debajo del tope para Adjudicación Simplificada."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 72.8 del Reglamento D.S. N.º 009-2025-EF. (Establece los montos para elevación al OSCE)."
  },
  {
    id: 27,
    category: "Fase de Selección",
    question: "Un participante desea solicitar la elevación de los cuestionamientos del pliego de absolución de consultas y observaciones al OSCE en un procedimiento de selección competitivo. ¿Cuál es el plazo que establece el Reglamento para que el participante presente dicha solicitud?",
    options: {
      A: "Tres (3) días hábiles siguientes a la notificación del pliego de absolución a través del SEACE.",
      B: "Cinco (5) días hábiles siguientes a la notificación del pliego de absolución a través del SEACE.",
      C: "Dos (2) días hábiles siguientes a la notificación del pliego de absolución a través del SEACE.",
      D: "Ocho (8) días hábiles siguientes a la notificación del pliego de absolución a través del SEACE."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 72.8 del Reglamento D.S. N.º 009-2025-EF. (Establece el plazo de tres días hábiles para solicitar la elevación)."
  },
  {
    id: 28,
    category: "Fase de Selección",
    question: "En un procedimiento de Adjudicación Simplificada para la adquisición de bienes, el comité de selección ha recibido una solicitud de elevación de cuestionamientos sobre la absolución de consultas y observaciones. El valor estimado del procedimiento es S/ 200,000.00. ¿Cuál de las siguientes afirmaciones es correcta?",
    options: {
      A: "La solicitud procede y el OSCE emitirá un pronunciamiento, ya que el valor estimado supera el tope para Adjudicación Simplificada.",
      B: "La solicitud procede y el OSCE emitirá un pronunciamiento, ya que el monto se encuentra dentro del rango permitido para la elevación.",
      C: "La solicitud no procede ya que solo se puede elevar cuestionamientos en procedimientos cuyo valor estimado sea igual o superior al tope para Licitación Pública.",
      D: "La solicitud no procede porque en la Adjudicación Simplificada no existe la etapa de elevación de cuestionamientos al OSCE."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 72.8 del Reglamento D.S. N.º 009-2025-EF. (Establece que procede la elevación en procedimientos con valor estimado igual o superior al tope para Adjudicación Simplificada)."
  },
  {
    id: 29,
    category: "Fase de Selección",
    question: "Durante el procedimiento de selección para la contratación de un servicio, la entidad detecta una grave deficiencia técnica en los términos de referencia luego de haber recibido las ofertas. ¿Cuál es la acción correcta que debe tomar según la normativa vigente?",
    options: {
      A: "La Entidad debe declarar la nulidad del procedimiento y retrotraerlo hasta la etapa de actuaciones preparatorias para corregir la deficiencia.",
      B: "El comité de selección puede emitir una circular aclaratoria y otorgar un plazo adicional para que los postores adecúen sus ofertas a las nuevas especificaciones.",
      C: "La Entidad debe continuar con el procedimiento y subsanar la deficiencia mediante una adenda al contrato una vez adjudicada la buena pro.",
      D: "El comité de selección debe solicitar autorización a la autoridad de gestión administrativa para modificar los términos de referencia y reiniciar la etapa de presentación de ofertas."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 62.1 del Reglamento D.S. N.º 009-2025-EF. (Establece la declaración de nulidad por deficiencias en los documentos del procedimiento)."
  },
  {
    id: 30,
    category: "Fase de Selección",
    question: "El comité de selección ha detectado que uno de los postores ha incluido en su oferta un documento con información contradictoria respecto a las especificaciones técnicas requeridas. ¿Cuál es la acción correcta que debe tomar el comité según lo establecido en el Reglamento?",
    options: {
      A: "Solicitar la subsanación de la oferta, otorgando un plazo no mayor de tres días hábiles desde la notificación.",
      B: "Solicitar la subsanación de la oferta, otorgando un plazo no mayor de dos días hábiles desde la notificación.",
      C: "Descalificar la oferta inmediatamente por contener información contradictoria, sin posibilidad de subsanación.",
      D: "Comunicar al postor la inconsistencia y permitirle retirar su oferta sin aplicación de sanción."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 76.3 del Reglamento D.S. N.º 009-2025-EF. (Establece que el plazo para subsanar la oferta no puede exceder de dos días hábiles)."
  },
  {
    id: 31,
    category: "Fase de Selección",
    question: "En un procedimiento de Licitación Pública para la adquisición de bienes, el postor que obtuvo el segundo lugar en el orden de prelación presenta un recurso de apelación contra la buena pro otorgada, argumentando que el postor ganador incumplió un requisito de calificación. El valor estimado del procedimiento es de S/ 2,000,000.00. ¿Ante qué instancia debe presentarse y resolverse el recurso de apelación?",
    options: {
      A: "Ante el comité de selección, quien tiene un plazo de diez días hábiles para resolver.",
      B: "Ante el Tribunal de Contrataciones del Estado, ya que el valor estimado supera los cincuenta Unidades Impositivas Tributarias.",
      C: "Ante la autoridad de gestión administrativa de la Entidad, ya que el valor estimado supera los cincuenta Unidades Impositivas Tributarias.",
      D: "Ante el titular de la Entidad, quien tiene un plazo de siete días hábiles para resolver."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 141.2 del Reglamento D.S. N.º 009-2025-EF. (Establece que el Tribunal es competente cuando el valor estimado es superior a 50 UIT)."
  },
  {
    id: 32,
    category: "Fase de Selección",
    question: "En un procedimiento de Adjudicación Simplificada para la contratación de servicios, con valor estimado de S/ 150,000.00, un postor desea interponer un recurso de apelación contra la buena pro. ¿Cuál es el plazo que establece el Reglamento para interponer dicho recurso?",
    options: {
      A: "Cinco (5) días hábiles siguientes de haberse notificado el otorgamiento de la buena pro.",
      B: "Ocho (8) días hábiles siguientes de haberse notificado el otorgamiento de la buena pro.",
      C: "Tres (3) días hábiles siguientes de haberse notificado el otorgamiento de la buena pro.",
      D: "Diez (10) días hábiles siguientes de haberse notificado el otorgamiento de la buena pro."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 138.1 literal a) del Reglamento D.S. N.º 009-2025-EF. (Establece el plazo de cinco días hábiles para procedimientos distintos a la Licitación Pública, Concurso Público, Adjudicación Simplificada para obras y Selección de Consultores Individuales)."
  },
  {
    id: 33,
    category: "Fase de Selección",
    question: "Durante un procedimiento de Concurso Público para la contratación de un servicio de consultoría, un postor presenta un recurso de apelación ante el Tribunal de Contrataciones del Estado. ¿Cuál de los siguientes requisitos NO es necesario para la admisión del recurso según el Reglamento?",
    options: {
      A: "Identificación del impugnante, con indicación de su RUC.",
      B: "La presentación de una garantía equivalente al 3% del valor estimado o referencial del procedimiento de selección.",
      C: "La aprobación de la participación del recurso por parte de la junta de accionistas o directorio de la empresa impugnante.",
      D: "Determinación clara y precisa de los actos que se recurren, los fundamentos de hecho y derecho, y las pretensiones."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 139 del Reglamento D.S. N.º 009-2025-EF. (No contempla como requisito la aprobación por parte de la junta de accionistas o directorio)."
  },
  {
    id: 34,
    category: "Fase de Selección",
    question: "En un procedimiento de selección competitivo para la adquisición de bienes, el comité de selección recibió diez ofertas. Al realizar la calificación, sólo dos ofertas cumplieron con los requisitos establecidos en las bases. ¿Cuál es el procedimiento que corresponde según la normativa vigente?",
    options: {
      A: "El comité debe declarar desierto el procedimiento por insuficiencia de ofertas calificadas, ya que se requiere un mínimo de tres ofertas válidas.",
      B: "El comité debe continuar con la evaluación y calificación de las dos ofertas válidas, pudiendo otorgar la buena pro si alguna cumple con los requisitos.",
      C: "El comité debe solicitar autorización al titular de la entidad para continuar con el procedimiento, debido a que hay menos de tres ofertas calificadas.",
      D: "El comité debe retrotraer el procedimiento a la etapa de presentación de ofertas y otorgar un plazo adicional para fomentar mayor participación."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 79.1 del Reglamento D.S. N.º 009-2025-EF. (No se requiere un número mínimo de ofertas para continuar con el procedimiento)."
  },
  {
    id: 35,
    category: "Fase de Selección",
    question: "Durante la ejecución de un Contrato Menor para la adquisición de bienes, se detecta que el contratista ha subcontratado parte de las prestaciones sin autorización de la Entidad. ¿Cuál es la consecuencia inmediata de esta acción según la normativa vigente?",
    options: {
      A: "El contratista es pasible de una sanción administrativa de multa impuesta por el Tribunal de Contrataciones.",
      B: "La Entidad debe resolver el contrato por incumplimiento y comunicar al OSCE para el inicio del procedimiento sancionador.",
      C: "La Entidad debe aplicar una penalidad equivalente al 10% del monto del contrato, pero no puede resolverlo por este motivo.",
      D: "La Entidad debe requerir al contratista la terminación del subcontrato en un plazo no mayor de cinco días hábiles."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 186.1 literal c) del Reglamento D.S. N.º 009-2025-EF. (Establece como causal de resolución del contrato la subcontratación no autorizada)."
  },
  {
    id: 36,
    category: "Fase de Selección",
    question: "En un procedimiento de Licitación Pública para la adquisición de bienes, se ha otorgado la buena pro, pero antes de la suscripción del contrato, la autoridad de gestión administrativa detecta que hubo un vicio en el procedimiento que afecta su validez. ¿Cuál es la acción que corresponde según la normativa vigente?",
    options: {
      A: "La autoridad de gestión administrativa puede declarar la nulidad de oficio del procedimiento y retrotraerlo a la etapa en que se produjo el vicio.",
      B: "Solo el Tribunal de Contrataciones del Estado puede declarar la nulidad una vez otorgada la buena pro.",
      C: "Solo el titular de la entidad puede declarar la nulidad del procedimiento, previo informe del OSCE.",
      D: "La autoridad de gestión administrativa debe continuar con el procedimiento y subsanar el vicio detectado durante la ejecución contractual."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 65.1 del Reglamento D.S. N.º 009-2025-EF. (Faculta a la autoridad de gestión administrativa para declarar la nulidad)."
  },
  {
    id: 37,
    category: "Fase de Selección",
    question: "En un procedimiento de selección para la ejecución de una obra, el comité de selección ha determinado que la mejor oferta técnica obtuvo 85 puntos y la mejor oferta económica obtuvo 100 puntos. Según el método de evaluación establecido en las bases, la ponderación es de 60% para la técnica y 40% para la económica. ¿Cuál es el puntaje total de la mejor oferta si corresponde al mismo postor?",
    options: {
      A: "91 puntos",
      B: "94 puntos",
      C: "90 puntos",
      D: "85 puntos"
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 75.3 del Reglamento D.S. N.º 009-2025-EF. (Establece la fórmula para el cálculo del puntaje total: 0.6 x 85 + 0.4 x 100 = 51 + 40 = 91)."
  },
  {
    id: 38,
    category: "Fase de Selección",
    question: "En un procedimiento de Adjudicación Simplificada para la contratación de servicios en general, un postor ha presentado una oferta que supera en 15% el valor estimado. ¿Cuál es la acción que corresponde al comité de selección según la normativa vigente?",
    options: {
      A: "Descalificar la oferta por superar el valor estimado en más del 10%.",
      B: "Solicitar al postor que reduzca su oferta hasta el valor estimado como condición para otorgar la buena pro.",
      C: "Rechazar la oferta sin posibilidad de reducción, ya que en servicios no se permite que las ofertas superen el valor estimado.",
      D: "Solicitar la certificación presupuestal adicional y continuar con la evaluación si se cuenta con la disponibilidad necesaria."
    },
    correctAnswer: "D",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 79.2 del Reglamento D.S. N.º 009-2025-EF. (Establece el procedimiento cuando la oferta supera el valor estimado)."
  },
  {
    id: 39,
    category: "Fase de Selección",
    question: "En un procedimiento de Adjudicación Simplificada para la contratación de bienes, el comité de selección ha recibido tres ofertas con los siguientes puntajes totales: Postor A = 90 puntos, Postor B = 90 puntos y Postor C = 85 puntos. ¿Cómo debe actuar el comité de selección para determinar el orden de prelación según la normativa vigente?",
    options: {
      A: "Otorgar la buena pro al Postor A o B que haya presentado la oferta con menor precio.",
      B: "Convocar a un sorteo para determinar al ganador entre los Postores A y B, ya que tienen el mismo puntaje.",
      C: "Evaluar factores de desempate adicionales como experiencia del postor o mejoras ofrecidas.",
      D: "Determinar el ganador en función al orden cronológico de presentación de ofertas entre los Postores A y B."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 80.2 del Reglamento D.S. N.º 009-2025-EF. (Establece que en caso de empate, la buena pro se otorga al postor que haya ofertado el menor precio)."
  },
  {
    id: 40,
    category: "Fase de Selección",
    question: "En un procedimiento de Licitación Pública para la ejecución de una obra, el comité de selección ha descalificado a un postor por incumplimiento de los requisitos de calificación. El postor presenta un recurso de apelación ante el Tribunal de Contrataciones del Estado solicitando se revoque la descalificación y se le otorgue la buena pro. ¿Cuál es el efecto de la interposición del recurso según la normativa vigente?",
    options: {
      A: "Suspende automáticamente el procedimiento hasta que se resuelva el recurso, incluyendo la suscripción del contrato.",
      B: "No suspende el procedimiento, pero se suspende el plazo para la suscripción del contrato hasta que se resuelva el recurso.",
      C: "No tiene efecto suspensivo, salvo que el Tribunal, mediante resolución motivada, disponga lo contrario.",
      D: "Suspende únicamente la etapa de calificación, permitiendo continuar con la evaluación de otras ofertas."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 138.2 del Reglamento D.S. N.º 009-2025-EF. (Establece que la interposición del recurso suspende el procedimiento de selección)."
  },
  {
    id: 41,
    category: "Fase de Selección",
    question: "En un procedimiento de selección para la contratación de servicios, luego de la presentación de ofertas, se observó que dos de los integrantes del comité de selección tienen conflicto de intereses con uno de los postores. ¿Cuál es la acción correcta según la normativa de contrataciones?",
    options: {
      A: "Los miembros con conflicto deben abstenerse solo de la calificación y evaluación de la oferta del postor con quien tienen conflicto.",
      B: "Los miembros con conflicto deben ser reemplazados inmediatamente por sus suplentes para continuar con el procedimiento.",
      C: "El procedimiento debe declararse nulo y retrotraerse hasta la etapa de designación del comité de selección.",
      D: "El titular de la entidad debe aprobar la continuidad del procedimiento con los mismos miembros, estableciendo medidas de transparencia adicionales."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 74.3 del Reglamento D.S. N.º 009-2025-EF. (Establece el reemplazo de los miembros con conflicto de intereses)."
  },
  {
    id: 42,
    category: "Fase de Selección",
    question: "En un procedimiento de Subasta Inversa Electrónica, un postor solicita la descalificación de otro participante argumentando que este no cumple con las especificaciones técnicas requeridas. ¿Cuál es la acción correcta que debe tomar la entidad según la normativa vigente?",
    options: {
      A: "Declarar infundada la solicitud, ya que en la Subasta Inversa Electrónica solo se verifica que los postores oferten bienes que cumplen con las características establecidas en la ficha técnica.",
      B: "Derivar la solicitud al comité de selección para que evalúe el cumplimiento de especificaciones técnicas y decida sobre la descalificación.",
      C: "Solicitar al proveedor cuestionado que presente documentación adicional que acredite el cumplimiento de las especificaciones técnicas.",
      D: "Suspender el procedimiento y solicitar un informe técnico a Perú Compras sobre el cumplimiento de la ficha técnica."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículos 96.1 y 96.3 del Reglamento D.S. N.º 009-2025-EF. (En la SIE solo se verifica que los postores oferten bienes que cumplen con la ficha técnica)."
  },
  {
    id: 43,
    category: "Fase de Selección",
    question: "En un procedimiento de Licitación Pública para la adquisición de bienes, se ha otorgado la buena pro a un postor. Sin embargo, antes de la firma del contrato, la entidad detecta que el postor ganador está incurso en una causal de impedimento que no fue identificada durante la evaluación. ¿Cuál es la acción correcta según la normativa vigente?",
    options: {
      A: "La entidad debe comunicar al postor el impedimento detectado y otorgar la buena pro al postor que ocupó el segundo lugar en el orden de prelación.",
      B: "La autoridad de gestión administrativa debe declarar la nulidad del otorgamiento de la buena pro y retrotraer el procedimiento a la etapa de evaluación.",
      C: "El titular de la entidad debe autorizar la continuación del procedimiento con el postor impedido, imponiendo penalidades específicas en el contrato.",
      D: "La entidad debe solicitar pronunciamiento previo del OSCE para poder declarar la nulidad del otorgamiento de la buena pro."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 65.1 del Reglamento D.S. N.º 009-2025-EF. (Establece la facultad de declarar la nulidad por vulneración de la normativa)."
  },
  {
    id: 44,
    category: "Fase de Selección",
    question: "En un procedimiento de Comparación de Precios para la adquisición de bienes disponibles en el mercado, con entrega inmediata, la entidad ha invitado a cinco proveedores, pero solo ha recibido dos cotizaciones. ¿Cuál es la acción que corresponde según la normativa vigente?",
    options: {
      A: "Declarar desierto el procedimiento por no contar con al menos tres cotizaciones válidas.",
      B: "Continuar con la evaluación de las cotizaciones recibidas y otorgar la buena pro si alguna cumple con los requisitos.",
      C: "Ampliar el plazo para la presentación de cotizaciones y volver a invitar a más proveedores.",
      D: "Cancelar el procedimiento y optar por una Adjudicación Simplificada, ya que no es posible la Comparación de Precios."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 110.2 del Reglamento D.S. N.º 009-2025-EF. (Establece que se requieren al menos tres cotizaciones que cumplan con lo solicitado)."
  },
  {
    id: 45,
    category: "Fase de Selección",
    question: "Un postor ha presentado un recurso de apelación ante la autoridad de gestión administrativa de la entidad, impugnando el otorgamiento de la buena pro en un procedimiento de Adjudicación Simplificada. ¿Cuál es el plazo máximo que tiene la entidad para resolver el recurso según la normativa vigente?",
    options: {
      A: "Diez (10) días hábiles contados a partir del día siguiente de la presentación del recurso o de la subsanación.",
      B: "Quince (15) días hábiles contados a partir del día siguiente de la presentación del recurso o de la subsanación.",
      C: "Cinco (5) días hábiles contados a partir del día siguiente de la presentación del recurso o de la subsanación.",
      D: "Siete (7) días hábiles contados a partir del día siguiente de la presentación del recurso o de la subsanación."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 143.1 literal a) del Reglamento D.S. N.º 009-2025-EF. (Establece el plazo de diez días hábiles para que la Entidad resuelva)."
  },
  {
    id: 46,
    category: "Fase de Selección",
    question: "En un procedimiento de Selección de Consultores Individuales, la entidad ha comunicado una decisión a través del SEACE. Un participante desea interponer un recurso de reconsideración contra dicha decisión. ¿Cuál es el plazo que establece el Reglamento para interponer dicho recurso?",
    options: {
      A: "Tres (3) días hábiles siguientes de notificada la decisión que se desea impugnar.",
      B: "Dos (2) días hábiles siguientes de notificada la decisión que se desea impugnar.",
      C: "Cinco (5) días hábiles siguientes de notificada la decisión que se desea impugnar.",
      D: "Un (1) día hábil siguiente de notificada la decisión que se desea impugnar."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 115.2 del Reglamento D.S. N.º 009-2025-EF. (Establece el plazo de dos días hábiles para interponer el recurso de reconsideración)."
  },
  {
    id: 47,
    category: "Fase de Selección",
    question: "En un procedimiento de Subasta Inversa Electrónica, un postor ha impugnado la descalificación de su oferta mediante un recurso de apelación. El valor estimado del procedimiento es de S/ 60,000.00. ¿Qué requisito debe cumplir el postor para que su recurso sea admitido?",
    options: {
      A: "Presentar una garantía equivalente al 3% del valor estimado o valor referencial del procedimiento impugnado.",
      B: "Presentar una garantía equivalente al 1% del valor de su oferta económica.",
      C: "No se requiere garantía para la interposición del recurso cuando el valor estimado es inferior a S/ 100,000.00.",
      D: "Presentar un informe técnico que justifique su cumplimiento con la ficha técnica requerida."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 139.1 literal f) del Reglamento D.S. N.º 009-2025-EF. (Establece la garantía del 3% del valor estimado)."
  },
  {
    id: 48,
    category: "Fase de Selección",
    question: "Durante un procedimiento de Licitación Pública para la ejecución de una obra, el comité de selección ha descalificado a un postor por no cumplir con un requisito de calificación relacionado con la experiencia del plantel profesional clave. El postor impugna esta decisión argumentando que sí cumple con dicho requisito conforme a lo establecido en las bases integradas. ¿Qué efecto tiene la interposición de este recurso sobre el plazo de consentimiento de la buena pro?",
    options: {
      A: "El plazo de consentimiento de la buena pro se suspende hasta que se resuelva el recurso en última instancia administrativa.",
      B: "El plazo de consentimiento de la buena pro no se ve afectado por la interposición del recurso.",
      C: "El plazo de consentimiento de la buena pro se extiende automáticamente por cinco días hábiles adicionales.",
      D: "El plazo de consentimiento de la buena pro se reduce a la mitad para agilizar la resolución del procedimiento."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.SELECTION,
    explanation: "Fundamento legal: Artículo 87.2 del Reglamento D.S. N.º 009-2025-EF. (Establece la suspensión del plazo de consentimiento hasta resolución definitiva)."
  },
  
  // BLOQUE III: FASE DE EJECUCIÓN CONTRACTUAL
  {
    id: 49,
    category: "Ejecución Contractual",
    question: "Se ha perfeccionado el contrato de ejecución de una obra. Según el Reglamento, ¿desde cuándo rige el plazo de ejecución contractual?",
    options: {
      A: "Desde el día siguiente de la suscripción del contrato.",
      B: "Desde la fecha que se establezca en el contrato o desde la fecha en que se cumplan las condiciones previstas para su inicio.",
      C: "Desde la notificación de la orden de inicio de la obra.",
      D: "Desde la fecha de entrega del terreno."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 105.2 y 106.1 del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 50,
    category: "Ejecución Contractual",
    question: "Un contratista ha suscrito un contrato de servicios con una entidad contratante. El contrato incluye una cláusula que establece una penalidad por mora. Según la Ley y su Reglamento, ¿cuál es el límite máximo que puede alcanzar la suma de la aplicación de la penalidad por mora y otras penalidades aplicables en el contrato?",
    options: {
      A: "El 5% del monto vigente del contrato.",
      B: "El 10% del monto vigente del contrato o, de ser el caso, del ítem correspondiente.",
      C: "El 15% del monto vigente del contrato.",
      D: "El 20% del monto vigente del contrato o, de ser el caso, del ítem correspondiente."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 119.2 del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 51,
    category: "Ejecución Contractual",
    question: "El contratista de una obra solicita una ampliación de plazo argumentando un atraso no imputable a él. Según el Reglamento, ¿cuál es el plazo que tiene la entidad contratante para resolver y notificar su decisión sobre la solicitud de ampliación de plazo en obras bajo los sistemas de entrega de solo construcción y diseño y construcción?",
    options: {
      A: "Diez días hábiles contados desde el día siguiente de recibida la solicitud.",
      B: "Doce días hábiles contados desde el día siguiente de recibida la opinión del supervisor.",
      C: "Quince días hábiles contados desde el día siguiente de presentada la solicitud.",
      D: "Ocho días hábiles contados desde el día siguiente de recibida la solicitud."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 200.1 literal d) del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 52,
    category: "Ejecución Contractual",
    question: "En un contrato de servicios, el contratista debe cumplir con un plazo de prestación de sesenta días calendario. Según el Reglamento, si existe un retraso injustificado imputable al contratista, ¿cuál es el valor del factor \"F\" a utilizar para calcular la penalidad diaria por mora?",
    options: {
      A: "F = 0.40",
      B: "F = 0.25",
      C: "F = 0.15",
      D: "Depende de lo establecido en las bases estándar."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 120.1 del Reglamento D.S. N.º 009-2025-EF. (Tabla para bienes y servicios, plazo <= 60 días es F=0.40)."
  },
  {
    id: 53,
    category: "Ejecución Contractual",
    question: "Un contratista ha suscrito un contrato de servicios de operación y/o mantenimiento. Según el Reglamento, ¿cuándo se considera que ha culminado el avance de las actividades de operación y/o mantenimiento a efectos de solicitar la conformidad?",
    options: {
      A: "Al finalizar el plazo total del contrato.",
      B: "Al finalizar cada mes de operación y/o mantenimiento, o el periodo convenido por las partes.",
      C: "Al alcanzar el nivel de servicio o estándar de calidad establecido en el diseño.",
      D: "Una vez culminado el plazo de ejecución contractual y liquidado el contrato."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 149.1 del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 54,
    category: "Ejecución Contractual",
    question: "En un contrato de obra bajo el sistema de entrega \"Solo construcción\", el contratista, tras finalizar la ejecución, solicita la recepción de la obra. Según el Reglamento, ¿cuál es el plazo máximo que tiene el supervisor para verificar el estricto cumplimiento del expediente técnico y las modificaciones aprobadas, y emitir el certificado de conformidad técnica?",
    options: {
      A: "Quince días hábiles contados desde el día siguiente de efectuada la anotación de solicitud de recepción.",
      B: "Cinco días hábiles contados desde el día siguiente de efectuada la anotación de solicitud de recepción.",
      C: "Diez días hábiles contados desde la fecha de la anotación de solicitud de recepción.",
      D: "Cinco días calendario contados desde el día siguiente de efectuada la anotación de solicitud de recepción."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 212.1 del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 55,
    category: "Ejecución Contractual",
    question: "Se ha declarado la nulidad de un contrato de obra por causa no atribuible al contratista. Según la Ley, ¿cuál es la consecuencia de esta declaración respecto a la obra ejecutada y los bienes inventariados?",
    options: {
      A: "La entidad contratante debe recibir la obra y compensar al contratista por los costos incurridos, sin incluir utilidad.",
      B: "Se debe realizar una constatación física de la obra y un inventario, y la obra queda bajo responsabilidad de la entidad contratante tras la culminación de este acto.",
      C: "El contratista debe retirar la obra y los bienes inventariados del lugar de ejecución.",
      D: "La entidad contratante debe convocar un nuevo procedimiento de selección para la culminación de la obra, asumiendo el contratista los costos de inventario."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 111.3 del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 56,
    category: "Ejecución Contractual",
    question: "En un contrato de obra bajo el sistema de entrega \"Diseño y construcción\", el contratista ha solicitado un adelanto directo. Según el Reglamento, ¿cuál es el plazo máximo que tiene la entidad contratante para entregar este adelanto directo, una vez recibido el mecanismo de garantía correspondiente?",
    options: {
      A: "Diez días hábiles contados desde el día siguiente de recibida la solicitud.",
      B: "Siete días hábiles contados desde el día siguiente de recibida la solicitud.",
      C: "Siete días hábiles contados desde el día siguiente de recibido el mecanismo de garantía.",
      D: "Diez días hábiles contados desde el día siguiente de recibido el mecanismo de garantía."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 179.2 del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 57,
    category: "Ejecución Contractual",
    question: "Un contratista ha suscrito un contrato de servicios. El contrato prevé el otorgamiento de un adelanto directo. Según el Reglamento, ¿cuál de los siguientes mecanismos de garantía **no** procede para garantizar este adelanto directo en un contrato de servicios?",
    options: {
      A: "Fideicomiso.",
      B: "Carta fianza financiera.",
      C: "Contrato de seguro.",
      D: "Retención de pago."
    },
    correctAnswer: "D",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 113.3 del Reglamento D.S. N.º 009-2025-EF. (Retención de pago es para fiel cumplimiento o prestaciones accesorias, no adelantos directos en servicios)."
  },
  {
    id: 58,
    category: "Ejecución Contractual",
    question: "Durante la ejecución de un contrato de obra bajo el sistema de entrega \"Solo construcción\", el contratista solicita una prestación adicional debido a deficiencias en el expediente técnico. Según la Ley y su Reglamento, ¿quién tiene la facultad de aprobar mediante resolución la ejecución de esta prestación adicional hasta un 15% del monto del contrato original?",
    options: {
      A: "El titular de la entidad contratante.",
      B: "La autoridad de gestión administrativa de la entidad contratante.",
      C: "El supervisor de la obra.",
      D: "El órgano encargado de la elaboración del expediente técnico de la entidad."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 194.3 del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 59,
    category: "Ejecución Contractual",
    question: "Un contratista de obra bajo el sistema \"Diseño y construcción\" ha culminado la etapa de diseño y el expediente técnico de obra ha sido aprobado. Según el Reglamento, ¿cuándo se inicia el plazo de ejecución del componente obra?",
    options: {
      A: "Al día siguiente de la suscripción del contrato.",
      B: "Al día siguiente de notificado el expediente técnico de obra debidamente aprobado.",
      C: "Al día siguiente de cumplidas las condiciones previstas para su inicio, que incluyen la notificación del expediente aprobado y la entrega de adelanto directo si aplica.",
      D: "Al día siguiente de la fecha establecida en el programa de ejecución."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 176.1 y 176.5 del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 60,
    category: "Ejecución Contractual",
    question: "Durante la ejecución de un contrato de servicios, las partes acuerdan la suspensión del plazo por un evento no atribuible a ellas. Según el Reglamento, ¿esta suspensión del plazo de ejecución contractual permite la realización de actividades relacionadas con la gestión del contrato, como la tramitación de modificaciones contractuales?",
    options: {
      A: "Sí, se pueden realizar trámites de gestión de contrato durante la suspensión, siempre que ello resulte posible y no contravenga otras disposiciones del Reglamento.",
      B: "No, durante la suspensión del plazo de ejecución no se puede realizar ninguna actividad relacionada con el contrato.",
      C: "Depende de lo establecido en el acta de suspensión del plazo de ejecución.",
      D: "Sí, pero solo si así lo autoriza previamente la autoridad de gestión administrativa."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 107.4 del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 61,
    category: "Ejecución Contractual",
    question: "Una entidad contratante y un contratista han suscrito un contrato de obra. Surge una controversia sobre la liquidación final del contrato. Según la Ley, ¿qué mecanismo de solución de controversias es aplicable a esta materia?",
    options: {
      A: "Únicamente el arbitraje.",
      B: "La conciliación, como mecanismo previo y obligatorio al arbitraje.",
      C: "La Junta de Prevención y Resolución de Disputas (JPRD), si así se acordó en el contrato.",
      D: "La liquidación de contrato es una materia pasible de conciliación, y en su defecto, de arbitraje."
    },
    correctAnswer: "D",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 81.1 literal e) de la Ley N.º 32069, Artículo 83.1 de la Ley N.º 32069, Artículo 330.1 del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 62,
    category: "Ejecución Contractual",
    question: "Se ha pactado en un contrato de obra la aplicación de una Junta de Prevención y Resolución de Disputas (JPRD). Surge una discrepancia entre las partes sobre un aspecto técnico de la ejecución de la obra. Según la Ley, ¿cuál es la competencia de la JPRD respecto a esta discrepancia?",
    options: {
      A: "Emitir una opinión consultiva no vinculante sobre el aspecto técnico.",
      B: "Resolver la controversia mediante una decisión vinculante.",
      C: "Asistir a las partes en la prevención del desacuerdo, buscando un entendimiento.",
      D: "Mediar entre las partes para que lleguen a un acuerdo sobre la discrepancia."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 79.3 de la Ley N.º 32069, Artículo 350 literal c) del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 63,
    category: "Ejecución Contractual",
    question: "Un contratista de obra solicita la ejecución de mayores metrados en un contrato bajo la modalidad de precios unitarios. Según el Reglamento, ¿se requiere aprobación previa de la entidad contratante para ejecutar estos mayores metrados?",
    options: {
      A: "Sí, siempre que superen el límite establecido para las prestaciones adicionales de obra.",
      B: "Sí, se requiere aprobación previa por la autoridad de gestión administrativa para su ejecución.",
      C: "No se requiere aprobación previa para ejecutar mayores metrados, pero sí para su pago.",
      D: "Depende de lo establecido en las bases estándar del procedimiento de selección."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 197.2 del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 64,
    category: "Ejecución Contractual",
    question: "Durante la ejecución de un contrato de servicios, la entidad contratante se retrasa injustificadamente en el pago de una valorización que cuenta con la conformidad del área usuaria. Según la Ley, ¿cuál es la consecuencia de este retraso para la entidad contratante?",
    options: {
      A: "La entidad debe reconocer al contratista los intereses legales correspondientes.",
      B: "La entidad debe pagar una penalidad por mora al contratista por cada día de retraso.",
      C: "El contratista puede resolver el contrato por incumplimiento de la entidad.",
      D: "La autoridad de gestión administrativa comete una falta grave por el incumplimiento injustificado del pago."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 67.5 de la Ley N.º 32069."
  },
  {
    id: 65,
    category: "Ejecución Contractual",
    question: "Un contratista ofrece a la entidad contratante la entrega de bienes con características técnicas superiores a las especificadas en el requerimiento original, siempre que no varíe el objeto contractual. Según el Reglamento, ¿es procedente modificar el contrato para aceptar estas mejoras?",
    options: {
      A: "Sí, si la entidad contratante justifica técnicamente que las mejoras satisfacen su necesidad y obtiene la opinión favorable de la DEC.",
      B: "Sí, si así lo autoriza previamente la autoridad de gestión administrativa de la entidad.",
      C: "No, el contrato solo puede modificarse para incluir prestaciones adicionales o reducir prestaciones.",
      D: "No, las mejoras técnicas solo pueden ser propuestas durante la fase de selección como parte de la oferta."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 143.1 y 143.2 del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 66,
    category: "Ejecución Contractual",
    question: "En un contrato de ejecución de obra, el contratista subcontrata parte de las prestaciones sin contar con la autorización previa de la entidad contratante. Según la Ley, ¿quién mantiene la responsabilidad por la ejecución total del contrato frente a la entidad contratante en caso de subcontratación?",
    options: {
      A: "La entidad contratante, si la subcontratación fue realizada por un proveedor inscrito en el RNP.",
      B: "El subcontratista, ya que es quien ejecuta la prestación.",
      C: "El contratista, independientemente de la subcontratación.",
      D: "La responsabilidad es compartida entre el contratista y el subcontratista."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 69.2 literal a) de la Ley N.º 32069."
  },
  {
    id: 67,
    category: "Ejecución Contractual",
    question: "Un contratista ha suscrito un contrato de obra bajo el sistema \"Solo construcción\". Durante la ejecución, surge la necesidad de una prestación adicional debido a deficiencias en el expediente técnico. Según el Reglamento, ¿quién es responsable de elaborar el expediente técnico de esta prestación adicional de obra, si así se determina en las bases?",
    options: {
      A: "La entidad contratante, a través de su órgano competente.",
      B: "El contratista.",
      C: "El supervisor de la obra.",
      D: "Cualquiera de los mencionados en A), B), o C), si así lo establece la entidad en las bases."
    },
    correctAnswer: "D",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 194.2 literal c) del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 68,
    category: "Ejecución Contractual",
    question: "Un contratista ha suscrito un contrato de servicios. La entidad contratante ha decidido ceder su posición contractual a otra entidad. ¿Es procedente esta cesión según la Ley N.º 32069 y su Reglamento?",
    options: {
      A: "Sí, la entidad contratante puede ceder su posición contractual, con conocimiento de la otra parte, sin necesidad de aprobación previa o posterior.",
      B: "Sí, si así lo autoriza previamente la DGA.",
      C: "No, la cesión de posición contractual del contratista no procede, salvo en casos previstos en el Reglamento, pero la Ley no permite la cesión de posición de la entidad.",
      D: "No, la cesión de posición contractual por parte de la entidad solo procede si la otra parte lo acepta expresamente mediante adenda."
    },
    correctAnswer: "A",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 65.2 de la Ley N.º 32069."
  },
  {
    id: 69,
    category: "Ejecución Contractual",
    question: "Se ha resuelto un contrato de obra por incumplimiento imputable al contratista. La entidad contratante ha ejecutado la garantía de fiel cumplimiento. Según la Ley, ¿esta ejecución de la garantía exime al contratista de la responsabilidad por los daños y perjuicios causados a la entidad?",
    options: {
      A: "Sí, la ejecución de la garantía cubre la totalidad de los daños y perjuicios.",
      B: "No, la ejecución de la garantía no exime al contratista de la indemnización por los daños y perjuicios debidamente demostrados.",
      C: "Depende de lo establecido en las bases del procedimiento de selección.",
      D: "Sí, si el monto de la garantía es suficiente para cubrir los daños y perjuicios."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 123.1 del Reglamento D.S. N.º 009-2025-EF."
  },
  {
    id: 70,
    category: "Ejecución Contractual",
    question: "La Ley N.º 32069 establece cláusulas obligatorias en los contratos. ¿Cuál de las siguientes cláusulas debe incluirse obligatoriamente en los contratos regulados por la Ley?",
    options: {
      A: "Cláusula de reajuste de precios.",
      B: "Cláusula de solución de controversias.",
      C: "Cláusula de responsabilidad por vicios ocultos.",
      D: "Cláusula de penalidad por mora."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 60 literal c) de la Ley N.º 32069. (La Ley lista garantías, anticorrupción, solución de controversias, resolución por incumplimiento, gestión de riesgos como obligatorias)."
  },
  {
    id: 71,
    category: "Ejecución Contractual",
    question: "Se ha suscitado una controversia durante la ejecución de un contrato. La controversia ha sido sometida a arbitraje institucional, y se ha emitido un laudo. Según la Ley, ¿el laudo arbitral es apelable ante el Poder Judicial?",
    options: {
      A: "Sí, el laudo es apelable ante la Corte Superior en vía contencioso administrativa.",
      B: "No, el laudo arbitral es inapelable, definitivo y obligatorio para las partes, solo cabe recurso de anulación.",
      C: "Sí, el laudo es apelable ante la Corte Suprema en vía de casación.",
      D: "No, el laudo solo es apelable si se refiere a materias de orden público."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 84.9 de la Ley N.º 32069."
  },
  {
    id: 72,
    category: "Ejecución Contractual",
    question: "En un contrato de obra bajo el sistema de entrega \"Solo construcción\", se ha producido una suspensión del plazo de ejecución por causas imputables a la entidad contratante. Según el Reglamento, ¿qué rubros se reconocen al contratista debido a esta ampliación de plazo?",
    options: {
      A: "Únicamente los costos directos y gastos generales variables acreditados.",
      B: "Los costos directos y gastos generales, así como la utilidad, todos ellos debidamente acreditados.",
      C: "Los costos y gastos generales debidamente acreditados.",
      D: "Los gastos generales fijos y variables, así como la utilidad, todos ellos debidamente acreditados."
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "Fundamento legal: Artículo 201.1 de la Ley N.º 32069. (Establece que las ampliaciones de plazo dan lugar al pago de los conceptos vinculados al periodo que originó la ampliación de plazo, los cuales deben ser acreditados)."
  }
];

// Add debug logging
console.log('Advanced questions loaded:', questionsAdvanced?.length || 0, 'questions');
