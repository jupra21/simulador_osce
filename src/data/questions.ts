import { CompetencyArea } from '../types/index';

interface Question {
  id: number;
  category: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: "A" | "B" | "C" | "D";
  competencyArea?: CompetencyArea;
  explanation?: string;
}

// Preguntas oficiales del examen OECE - NIVEL BÁSICO
export const questions: Question[] = [
  // SOLO PREGUNTAS BÁSICAS (IDs 1-72)
  {
    id: 1,
    category: "Aspectos Generales",
    question: "¿Cuál es el objeto principal de la Ley General de Contrataciones Públicas?",
    options: {
      A: "Promover la inversión privada en infraestructura pública.",
      B: "Establecer el marco normativo para la contratación oportuna de bienes, servicios y obras por parte del Estado.",
      C: "Regular exclusivamente los contratos de consultoría.",
      D: "Fomentar la participación de empresas extranjeras en proyectos nacionales."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "La Ley tiene como objeto principal establecer el marco normativo que regula la contratación de bienes, servicios y obras por parte del Estado, buscando maximizar el valor de los recursos públicos y promover una gestión por resultados."
  },
  {
    id: 2,
    category: "Aspectos Generales",
    question: "Según la ley, ¿cuál es la finalidad de las contrataciones de bienes, servicios y obras por parte del Estado?",
    options: {
      A: "Generar mayores ingresos para las entidades públicas.",
      B: "Maximizar el uso de recursos públicos en términos de eficacia, eficiencia y economía para cumplir fines públicos y mejorar las condiciones de vida de los ciudadanos.",
      C: "Reducir la cantidad de proveedores del Estado.",
      D: "Simplificar los trámites administrativos."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "La finalidad de las contrataciones públicas es maximizar el valor de los recursos públicos que se invierten bajo un enfoque de gestión por resultados, para el cumplimiento de los fines públicos y la mejora de las condiciones de vida de los ciudadanos."
  },
  {
    id: 3,
    category: "Aspectos Generales",
    question: "¿Qué entidades se encuentran comprendidas dentro del ámbito de aplicación de la Ley General de Contrataciones Públicas cuando asumen el pago con fondos públicos?",
    options: {
      A: "Solo el Poder Ejecutivo.",
      B: "El Poder Legislativo, Judicial, organismos constitucionalmente autónomos, ministerios, gobiernos regionales y locales, universidades públicas, empresas del Estado, fondos constituidos con recursos públicos, ESSALUD, Fuerzas Armadas, Policía Nacional del Perú, órganos desconcentrados y organizaciones con autonomía para gestionar sus contrataciones.",
      C: "Únicamente las empresas del Estado.",
      D: "Solo los gobiernos regionales y locales."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "La Ley aplica a todas las entidades del Estado que utilizan fondos públicos para sus contrataciones, incluyendo los tres poderes del Estado, organismos autónomos, gobiernos regionales y locales, entre otros."
  },
  {
    id: 4,
    category: "Aspectos Generales",
    question: "Según la ley, ¿qué son los Contratos?",
    options: {
      A: "Acuerdos solo entre entidades públicas.",
      B: "Acuerdos celebrados entre una entidad contratante y un proveedor para asumir obligaciones recíprocas para abastecer de bienes, servicios u obras.",
      C: "Documentos internos de las entidades para planificar compras.",
      D: "Convenios de colaboración interinstitucional."
    },
    correctAnswer: "B"
  },
  {
    id: 5,
    category: "Aspectos Generales",
    question: "La subcontratación es la relación contractual entre un contratista y un tercero para ejecutar determinadas prestaciones. ¿Quién mantiene la responsabilidad por la ejecución total del contrato frente a la entidad contratante?",
    options: {
      A: "El tercero subcontratista.",
      B: "La entidad contratante.",
      C: "El contratista.",
      D: "El supervisor de la obra."
    },
    correctAnswer: "C"
  },
  {
    id: 6,
    category: "Aspectos Generales",
    question: "¿Qué es la Compra Corporativa según la ley?",
    options: {
      A: "La compra de bienes de lujo para funcionarios.",
      B: "Una modalidad de contratación pública eficiente que agrupa la demanda de más de una entidad para contratar en forma conjunta bienes y servicios en general de naturaleza similar.",
      C: "La adquisición de acciones de empresas privadas por parte del Estado.",
      D: "Un procedimiento de selección para contratar servicios de consultoría."
    },
    correctAnswer: "B"
  },
  {
    id: 7,
    category: "Aspectos Generales",
    question: "La Compra Centralizada es una modalidad por la cual una o más entidades encargan a otra entidad todas las fases del proceso de contratación. ¿Qué pueden incluir dentro del encargo además de bienes, servicios u obras?",
    options: {
      A: "La fiscalización de los proveedores.",
      B: "La distribución de estos.",
      C: "La elaboración de normas complementarias.",
      D: "La resolución de controversias."
    },
    correctAnswer: "B"
  },
  {
    id: 8,
    category: "Aspectos Generales",
    question: "¿Qué procedimiento de selección competitivo se utiliza para la contratación de bienes y obras?",
    options: {
      A: "Concurso Público.",
      B: "Comparación de Precios.",
      C: "Licitación Pública.",
      D: "Subasta Inversa Electrónica."
    },
    correctAnswer: "C"
  },
  {
    id: 9,
    category: "Aspectos Generales",
    question: "¿Qué procedimiento de selección competitivo se utiliza para la contratación de servicios?",
    options: {
      A: "Licitación Pública.",
      B: "Concurso Público.",
      C: "Comparación de Precios.",
      D: "Subasta Inversa Electrónica."
    },
    correctAnswer: "B"
  },
  {
    id: 10,
    category: "Aspectos Generales",
    question: "La Subasta Inversa Electrónica es un procedimiento de selección utilizado para la contratación de bienes y servicios comunes que cuenten con ficha técnica. ¿Quién es el ganador en este procedimiento?",
    options: {
      A: "El que oferta el mayor precio.",
      B: "El que ofrece el mejor plazo de entrega.",
      C: "El que oferta el menor precio.",
      D: "El que presenta la mejor propuesta técnica."
    },
    correctAnswer: "C"
  },
  {
    id: 11,
    category: "Aspectos Generales",
    question: "¿Qué es un Catálogo Electrónico de Acuerdo Marco?",
    options: {
      A: "Un registro de proveedores sancionados.",
      B: "Una herramienta para la gestión de controversias.",
      C: "Una herramienta facilitadora de la contratación pública a través de la cual las entidades contratantes se proveen de bienes o servicios sin mediar un procedimiento de selección.",
      D: "Un listado de precios referenciales del mercado."
    },
    correctAnswer: "C"
  },
  {
    id: 12,
    category: "Aspectos Generales",
    question: "Menciona uno de los principios rectores de la contratación pública según la ley.",
    options: {
      A: "Informalidad.",
      B: "Burocracia.",
      C: "Legalidad.",
      D: "Discrecionalidad ilimitada."
    },
    correctAnswer: "C"
  },
  {
    id: 13,
    category: "Aspectos Generales",
    question: "El principio de Eficacia y Eficiencia implica que las entidades contratantes actúan para lograr el cumplimiento de los fines públicos. ¿Qué priorizan estos principios?",
    options: {
      A: "Las formalidades no esenciales.",
      B: "Los fines públicos.",
      C: "El menor precio por encima de todo.",
      D: "La complejidad de los procesos."
    },
    correctAnswer: "B"
  },
  {
    id: 14,
    category: "Aspectos Generales",
    question: "El principio de Valor por Dinero implica que las entidades contratantes maximizan el valor de lo que obtienen en cada contratación. ¿Qué considera este principio además de la calidad y la sostenibilidad de la oferta?",
    options: {
      A: "Únicamente el menor precio.",
      B: "La nacionalidad del proveedor.",
      C: "La evaluación de los costos y plazos, entre otros aspectos vinculados a la naturaleza de lo que se contrate.",
      D: "La experiencia previa de los funcionarios a cargo."
    },
    correctAnswer: "C"
  },
  {
    id: 15,
    category: "Aspectos Generales",
    question: "¿Qué enfoque de la ley promueve la conducta funcional y actividad comercial responsable, así como instrumentos para prevenir prácticas indebidas o corruptas?",
    options: {
      A: "Gestión por resultados.",
      B: "Gobernanza de la contratación pública.",
      C: "Integridad.",
      D: "Profesionalización de la contratación pública."
    },
    correctAnswer: "C"
  },
  {
    id: 16,
    category: "Aspectos Generales",
    question: "¿Qué enfoque se refiere a una estrategia de gestión pública que vincula la asignación de recursos presupuestales, bienes y servicios a resultados medibles a favor de la población?",
    options: {
      A: "Integridad.",
      B: "Gestión de riesgos en contratación pública.",
      C: "Gestión por resultados.",
      D: "Innovación."
    },
    correctAnswer: "C"
  },
  {
    id: 17,
    category: "Aspectos Generales",
    question: "La Gestión de Riesgos en contratación pública es un proceso dinámico. ¿Qué abarca este proceso según la ley?",
    options: {
      A: "Únicamente la evaluación financiera.",
      B: "Todas las etapas de la contratación pública.",
      C: "Solo la fase de ejecución contractual.",
      D: "La selección de proveedores."
    },
    correctAnswer: "B"
  },
  {
    id: 18,
    category: "Aspectos Generales",
    question: "¿Qué enfoque prioriza la gestión efectiva, eficaz, ordenada y transparente del proceso de contratación pública?",
    options: {
      A: "Profesionalización de la contratación pública.",
      B: "Gestión por resultados.",
      C: "Gobernanza de la contratación pública.",
      D: "Vigencia tecnológica."
    },
    correctAnswer: "C"
  },
  {
    id: 19,
    category: "Aspectos Generales",
    question: "¿Qué aspecto promueve la profesionalización integral y dinámica de los compradores públicos?",
    options: {
      A: "La reducción de la transparencia.",
      B: "La mejora continua en las contrataciones públicas.",
      C: "La eliminación de la competencia.",
      D: "La centralización de todas las compras."
    },
    correctAnswer: "B"
  },
  {
    id: 20,
    category: "Aspectos Generales",
    question: "Menciona un supuesto excluido del ámbito de aplicación de la Ley General de Contrataciones Públicas.",
    options: {
      A: "La contratación de bienes estándar.",
      B: "Los contratos bancarios y financieros provenientes de un servicio financiero, salvo la contratación de seguros y el arrendamiento financiero.",
      C: "Los servicios de consultoría de obra.",
      D: "La ejecución de obras públicas."
    },
    correctAnswer: "B"
  },
  {
    id: 21,
    category: "Aspectos Generales",
    question: "¿Qué organismo es el ente rector y la máxima autoridad técnico-normativa del Sistema Nacional de Abastecimiento?",
    options: {
      A: "El Organismo Especializado para las Contrataciones Públicas Eficientes (OECE).",
      B: "La Dirección General de Abastecimiento del Ministerio de Economía y Finanzas (DGA).",
      C: "La Central de Compras Públicas (Perú Compras).",
      D: "El Tribunal de Contrataciones Públicas."
    },
    correctAnswer: "B"
  },
  {
    id: 22,
    category: "Aspectos Generales",
    question: "¿Qué organismo técnico especializado está adscrito al Ministerio de Economía y Finanzas y brinda asistencia técnica, orientación y supervisa el cumplimiento de la normativa de contratación pública?",
    options: {
      A: "La Dirección General de Abastecimiento (DGA).",
      B: "La Central de Compras Públicas (Perú Compras).",
      C: "El Tribunal de Contrataciones Públicas.",
      D: "El Organismo Especializado para las Contrataciones Públicas Eficientes (OECE)."
    },
    correctAnswer: "D"
  },
  {
    id: 23,
    category: "Aspectos Generales",
    question: "¿Qué organismo público ejecutor está adscrito al Ministerio de Economía y Finanzas y tiene entre sus funciones promover, conducir y gestionar los procedimientos de selección para la generación de catálogos electrónicos de acuerdo marco?",
    options: {
      A: "El Organismo Especializado para las Contrataciones Públicas Eficientes (OECE).",
      B: "La Dirección General de Abastecimiento (DGA).",
      C: "El Tribunal de Contrataciones Públicas.",
      D: "La Central de Compras Públicas (Perú Compras)."
    },
    correctAnswer: "D"
  },
  {
    id: 24,
    category: "Aspectos Generales",
    question: "Dentro del ámbito de las entidades contratantes, ¿quién es la máxima autoridad ejecutiva al interior de la entidad contratante?",
    options: {
      A: "El Jefe de la Dependencia Encargada de las Contrataciones.",
      B: "El Titular de la entidad.",
      C: "El Área Usuaria.",
      D: "La Autoridad de la Gestión Administrativa."
    },
    correctAnswer: "B"
  },
  {
    id: 25,
    category: "Aspectos Generales",
    question: "¿Qué unidad de organización dentro de una entidad contratante es responsable de la adecuada formulación de sus requerimientos y de la verificación y conformidad de las obligaciones del contrato?",
    options: {
      A: "La Dependencia Encargada de las Contrataciones.",
      B: "El Área Técnica Estratégica.",
      C: "El Área Usuaria.",
      D: "La Autoridad de la Gestión Administrativa."
    },
    correctAnswer: "C"
  },
  {
    id: 26,
    category: "Aspectos Generales",
    question: "¿Qué unidad de organización es responsable de proveer y atender los requerimientos de bienes, servicios y obras, incluida la preparación de la estrategia de contratación y conducción de los procesos?",
    options: {
      A: "El Área Usuaria.",
      B: "El Área Técnica Estratégica.",
      C: "La Dependencia Encargada de las Contrataciones.",
      D: "El Titular de la entidad."
    },
    correctAnswer: "C"
  },
  {
    id: 27,
    category: "Aspectos Generales",
    question: "¿Quiénes son los funcionarios y servidores de la dependencia encargada de las contrataciones responsables de realizar las actividades relativas a la gestión de las contrataciones?",
    options: {
      A: "Los Titulares de las entidades.",
      B: "Los compradores públicos.",
      C: "Los proveedores.",
      D: "Los miembros del Tribunal de Contrataciones Públicas."
    },
    correctAnswer: "B"
  },
  {
    id: 28,
    category: "Aspectos Generales",
    question: "¿Qué es un proveedor según la ley?",
    options: {
      A: "Únicamente las empresas con fines de lucro.",
      B: "La persona natural, jurídica o de patrimonio autónomo, nacional o extranjera que contrata o puede contratar con el Estado para abastecerlo de bienes, servicios y obras.",
      C: "Las entidades públicas que realizan compras.",
      D: "Los funcionarios encargados de las contrataciones."
    },
    correctAnswer: "B"
  },
  {
    id: 29,
    category: "Aspectos Generales",
    question: "Para ser proveedor del Estado, ¿con qué se debe contar según la ley?",
    options: {
      A: "Un mínimo de 10 años de experiencia.",
      B: "Un capital social elevado.",
      C: "Inscripción vigente en el RNP y no encontrarse incurso en causal de impedimento para contratar.",
      D: "Recomendación de otra entidad contratante."
    },
    correctAnswer: "C"
  },
  {
    id: 30,
    category: "Aspectos Generales",
    question: "¿Qué consolida la Ficha Única del Proveedor (FUP) del RNP?",
    options: {
      A: "Únicamente los datos de contacto del proveedor.",
      B: "Información relevante de los proveedores, sobre la base de la información administrada por el OECE y provenientes de otras fuentes externas.",
      C: "El historial crediticio del proveedor.",
      D: "Las propuestas técnicas presentadas en procedimientos de selección."
    },
    correctAnswer: "B"
  },
  {
    id: 31,
    category: "Aspectos Generales",
    question: "¿Qué se considera Contrato Menor según la ley?",
    options: {
      A: "Aquellos celebrados por montos superiores a las 50 UIT.",
      B: "Aquellos celebrados cuyos montos sean iguales o inferiores a ocho Unidades Impositivas Tributarias (UIT) y que no requieren procedimientos de selección.",
      C: "Los contratos entre entidades públicas.",
      D: "Los contratos para servicios personalísimos."
    },
    correctAnswer: "B"
  },
  {
    id: 32,
    category: "Aspectos Generales",
    question: "¿Dos o más entidades contratantes pueden consolidar la contratación de bienes y servicios para satisfacer sus necesidades comunes?",
    options: {
      A: "No, la ley lo prohíbe expresamente.",
      B: "Sí, a través de compras corporativas.",
      C: "Solo si son del mismo sector.",
      D: "Únicamente para bienes inmuebles."
    },
    correctAnswer: "B"
  },
  {
    id: 33,
    category: "Aspectos Generales",
    question: "¿Qué modalidad utilizan las entidades contratantes para la generación de soluciones innovadoras soportadas por actividades de investigación y desarrollo cuando dicha solución no está disponible en el mercado o requiera de adaptaciones, ajustes o mejoras innovadoras?",
    options: {
      A: "Compra Corporativa.",
      B: "Acuerdo Marco.",
      C: "Compra Pública de Innovación (CPI).",
      D: "Compra Centralizada."
    },
    correctAnswer: "C"
  },
  {
    id: 34,
    category: "Aspectos Generales",
    question: "¿Qué modalidad de compra pública eficiente permite realizar el proceso de contratación en dos etapas diferenciadas: una para seleccionar a los proveedores y otra para adjudicar el contrato?",
    options: {
      A: "Compra Centralizada.",
      B: "Compra Corporativa.",
      C: "Acuerdo Marco.",
      D: "Compra Pública de Innovación."
    },
    correctAnswer: "C"
  },
  {
    id: 35,
    category: "Aspectos Generales",
    question: "¿Qué situaciones constituyen una situación de emergencia según la ley?",
    options: {
      A: "Cualquier situación imprevista.",
      B: "Las contenidas en las definiciones de emergencia o desastre del SINAGERD, emergencias sanitarias, estados de alerta fitosanitaria y zoosanitaria, situaciones que pongan en riesgo la seguridad o defensa del Estado u orden público, y situaciones de riesgo estructural o ruina de infraestructura pública que afecten la vida o integridad de las personas, medio ambiente o patrimonio cultural.",
      C: "Únicamente los desastres naturales declarados.",
      D: "Las crisis económicas."
    },
    correctAnswer: "B"
  },
  {
    id: 36,
    category: "Aspectos Generales",
    question: "¿Qué procedimiento de selección pueden utilizar las entidades contratantes ante la ocurrencia o inminencia de una situación de emergencia o desastre?",
    options: {
      A: "Únicamente procedimientos competitivos.",
      B: "Procedimiento de selección no competitivo o con proveedores no domiciliados en el país.",
      C: "Solo comparación de precios.",
      D: "Exclusivamente subasta inversa electrónica."
    },
    correctAnswer: "B"
  },
  {
    id: 37,
    category: "Aspectos Generales",
    question: "¿Qué es la Plataforma Digital para las Contrataciones Públicas (Pladicop)?",
    options: {
      A: "Un registro físico de proveedores.",
      B: "El conjunto de herramientas digitales que permiten la gestión e integración de la información sobre contrataciones dentro del ámbito del Sistema Nacional de Abastecimiento.",
      C: "Una base de datos de precios de referencia.",
      D: "Un foro de discusión para proveedores."
    },
    correctAnswer: "B"
  },
  {
    id: 38,
    category: "Aspectos Generales",
    question: "La estandarización de requerimientos es el proceso para uniformizar los términos de referencia, especificaciones técnicas, requisitos de calificación o condiciones de ejecución contractual. ¿Quién conduce y ejecuta el proceso de estandarización para generar fichas técnicas?",
    options: {
      A: "La DGA.",
      B: "El OECE.",
      C: "Perú Compras.",
      D: "Las entidades contratantes."
    },
    correctAnswer: "C"
  },
  {
    id: 39,
    category: "Aspectos Generales",
    question: "¿Los instrumentos para la estandarización de requerimientos (ficha técnica y ficha de homologación) son de uso obligatorio para las entidades contratantes?",
    options: {
      A: "No, su uso es facultativo.",
      B: "Sí, con independencia del monto de contratación, salvo excepciones, y también en contrataciones fuera del ámbito de la ley o sujetas a otro régimen.",
      C: "Solo para contrataciones mayores a 100 UIT.",
      D: "Únicamente para bienes y servicios comunes."
    },
    correctAnswer: "B"
  },
  {
    id: 40,
    category: "Aspectos Generales",
    question: "¿Qué criterios aplican las entidades contratantes al contratar bienes y servicios incluidos en los catálogos electrónicos de acuerdos marco?",
    options: {
      A: "Únicamente la experiencia del proveedor.",
      B: "Criterios de precio y calidad en la evaluación.",
      C: "El orden de llegada de las solicitudes.",
      D: "La ubicación geográfica del proveedor."
    },
    correctAnswer: "B"
  },
  {
    id: 41,
    category: "Aspectos Generales",
    question: "¿El proceso de contratación se divide en tres fases?",
    options: {
      A: "No, son solo dos fases.",
      B: "Sí: Actuaciones Preparatorias, Selección y Ejecución Contractual.",
      C: "Depende del tipo de contratación.",
      D: "Solo aplica para obras."
    },
    correctAnswer: "B"
  },
  {
    id: 42,
    category: "Aspectos Generales",
    question: "¿Qué fase del proceso de contratación da inicio al mismo y es realizada por la entidad contratante en el marco de la Programación Multianual de Bienes, Servicios y Obras?",
    options: {
      A: "Selección.",
      B: "Ejecución Contractual.",
      C: "Actuaciones Preparatorias.",
      D: "Solución de Controversias."
    },
    correctAnswer: "C"
  },
  {
    id: 43,
    category: "Aspectos Generales",
    question: "¿Qué se determina a través de la interacción con el mercado?",
    options: {
      A: "La capacidad financiera de los proveedores.",
      B: "La existencia de oferta y competencia, se perfecciona el requerimiento, se estima el presupuesto y se determina el mecanismo de contratación más idóneo.",
      C: "La responsabilidad de los funcionarios.",
      D: "El tipo de sanción aplicable."
    },
    correctAnswer: "B"
  },
  {
    id: 44,
    category: "Aspectos Generales",
    question: "¿Está prohibido fraccionar la contratación de bienes, servicios u obras?",
    options: {
      A: "No, siempre es permitido para agilizar los procesos.",
      B: "Sí, si tiene como fin evitar el procedimiento de selección que corresponda o evadir la aplicación de la ley y sus reglamentos.",
      C: "Solo para contratos mayores.",
      D: "Únicamente si supera un determinado monto."
    },
    correctAnswer: "B"
  },
  {
    id: 45,
    category: "Aspectos Generales",
    question: "¿Qué contiene el expediente de contratación?",
    options: {
      A: "Únicamente las propuestas de los proveedores.",
      B: "La información que respalda las actuaciones realizadas desde la formulación del requerimiento hasta el cumplimiento total de las obligaciones derivadas del contrato.",
      C: "Las actas de las reuniones de conciliación.",
      D: "El registro de sanciones de los proveedores."
    },
    correctAnswer: "B"
  },
  {
    id: 46,
    category: "Aspectos Generales",
    question: "¿Quiénes están a cargo de los procedimientos de selección competitivos?",
    options: {
      A: "Únicamente el Titular de la entidad.",
      B: "Los proveedores participantes.",
      C: "Evaluadores (compradores públicos, comités o jurados).",
      D: "El OECE."
    },
    correctAnswer: "C"
  },
  {
    id: 47,
    category: "Aspectos Generales",
    question: "¿Cuándo quedan desiertos los procedimientos de selección?",
    options: {
      A: "Cuando se presenta una sola oferta.",
      B: "Cuando no se valida ninguna oferta.",
      C: "Cuando el precio ofertado supera el valor referencial.",
      D: "Cuando la entidad decide cancelar el proceso sin justificación."
    },
    correctAnswer: "B"
  },
  {
    id: 48,
    category: "Aspectos Generales",
    question: "¿En qué momento, previo a la adjudicación de la buena pro, la entidad contratante puede cancelar el procedimiento de selección?",
    options: {
      A: "En cualquier momento sin justificación alguna.",
      B: "Basada en razones de fuerza mayor o caso fortuito, cuando desaparezca la necesidad de contratar o cuando el presupuesto deba destinarse a otros propósitos de emergencia declarados expresamente.",
      C: "Cuando uno de los participantes lo solicita.",
      D: "Si la entidad contratante cambia de opinión."
    },
    correctAnswer: "B"
  },
  {
    id: 49,
    category: "Ejecución Contractual",
    question: "¿Cómo se resuelven las controversias surgidas durante la ejecución contractual según la ley?",
    options: {
      A: "Únicamente mediante arbitraje.",
      B: "Mediante la junta de prevención y resolución de disputas, conciliación, arbitraje u otros previstos en contratos estandarizados de ingeniería y construcción de uso internacional.",
      C: "Directamente en la vía judicial.",
      D: "A través de la DGA."
    },
    correctAnswer: "B"
  },
  {
    id: 50,
    category: "Ejecución Contractual",
    question: "En la resolución de controversias surgidas durante la ejecución contractual, ¿qué se aplica en primer lugar?",
    options: {
      A: "Las normas de derecho privado.",
      B: "La jurisprudencia relevante.",
      C: "La Constitución Política del Perú, la presente ley y su reglamento.",
      D: "Los acuerdos entre las partes."
    },
    correctAnswer: "C"
  },
  {
    id: 51,
    category: "Ejecución Contractual",
    question: "¿Pueden ser sometidas a la junta de prevención y resolución de disputas, conciliación o arbitraje las pretensiones referidas a enriquecimiento sin causa o pago de indemnizaciones derivadas de la falta o aprobación parcial de prestaciones adicionales por la Contraloría?",
    options: {
      A: "Sí, siempre y cuando haya acuerdo entre las partes.",
      B: "No, estos supuestos son de competencia del Poder Judicial.",
      C: "Depende del monto involucrado.",
      D: "Únicamente si la entidad contratante lo autoriza."
    },
    correctAnswer: "B"
  },
  {
    id: 52,
    category: "Ejecución Contractual",
    question: "¿El inicio del procedimiento de solución de controversias suspende o paraliza las obligaciones contractuales de las partes?",
    options: {
      A: "Sí, automáticamente.",
      B: "No, salvo que la entidad contratante o el órgano jurisdiccional competente disponga lo contrario.",
      C: "Solo en el caso de arbitraje.",
      D: "Depende del tipo de controversia."
    },
    correctAnswer: "B"
  },
  {
    id: 53,
    category: "Ejecución Contractual",
    question: "¿Las controversias surgidas entre las partes sobre la validez, nulidad, interpretación, ejecución, terminación o eficacia del contrato se resuelven mediante arbitraje?",
    options: {
      A: "No, solo se resuelven en la vía judicial.",
      B: "Sí, salvo que lo contrario esté expresamente previsto en la ley.",
      C: "Únicamente si el monto del contrato supera un determinado valor.",
      D: "Solo para contratos de obras."
    },
    correctAnswer: "B"
  },
  {
    id: 54,
    category: "Ejecución Contractual",
    question: "¿El laudo arbitral es inapelable, definitivo y obligatorio para las partes?",
    options: {
      A: "No, siempre es apelable en la vía judicial.",
      B: "Sí, y solo cabe interponer recurso de anulación.",
      C: "Solo es obligatorio para la entidad contratante.",
      D: "Su obligatoriedad depende del acuerdo de las partes."
    },
    correctAnswer: "B"
  },
  {
    id: 55,
    category: "Ejecución Contractual",
    question: "¿Cuándo prescribe la acción para solicitar el arbitraje que verse sobre controversias respecto de la validez, nulidad, resolución, terminación o ineficacia del contrato?",
    options: {
      A: "A los 60 días hábiles de notificado el acto.",
      B: "A los 30 días hábiles desde la notificación de los actos que son materia de controversia.",
      C: "Al año de culminada la ejecución contractual.",
      D: "No prescribe."
    },
    correctAnswer: "B"
  },
  {
    id: 56,
    category: "Ejecución Contractual",
    question: "En los contratos de ejecución de obras, ¿cuál es el plazo mínimo de responsabilidad del contratista por vicios ocultos?",
    options: {
      A: "Un año.",
      B: "Tres años.",
      C: "Siete años, contado a partir de la conformidad de la recepción total o parcial de la obra.",
      D: "Diez años."
    },
    correctAnswer: "C"
  },
  {
    id: 57,
    category: "Ejecución Contractual",
    question: "En los contratos de bienes y servicios, ¿cuál es el plazo mínimo de responsabilidad del contratista por la calidad ofrecida y por los vicios ocultos?",
    options: {
      A: "Seis meses.",
      B: "Un año contado a partir de la conformidad otorgada por la entidad contratante.",
      C: "Dos años.",
      D: "Cinco años."
    },
    correctAnswer: "B"
  },
  {
    id: 58,
    category: "Ejecución Contractual",
    question: "En los contratos de consultoría para elaborar expedientes técnicos de obra, ¿en qué plazo puede la entidad contratante reclamar por errores, deficiencias o vicios ocultos?",
    options: {
      A: "En un plazo no menor de un año.",
      B: "En un plazo no menor de tres años después de la conformidad de obra.",
      C: "Durante toda la vida útil de la obra.",
      D: "Solo durante la ejecución de la obra."
    },
    correctAnswer: "B"
  },
  {
    id: 59,
    category: "Ejecución Contractual",
    question: "Los contratos celebrados pueden modificarse. ¿Por acuerdo de quiénes pueden realizarse estas modificaciones?",
    options: {
      A: "Únicamente por decisión del Titular de la entidad.",
      B: "Por acuerdo de las partes, por disposición de la entidad contratante o a solicitud del contratista.",
      C: "Solo a solicitud del área usuaria.",
      D: "Exclusivamente por orden del OECE."
    },
    correctAnswer: "B"
  },
  {
    id: 60,
    category: "Ejecución Contractual",
    question: "En caso de bienes, servicios y consultorías de obras, ¿hasta qué porcentaje del monto del contrato original la autoridad de la gestión administrativa puede autorizar, ordenar y pagar directamente la ejecución de prestaciones adicionales?",
    options: {
      A: "Hasta el 10%.",
      B: "Hasta el 25%.",
      C: "Hasta el 30%.",
      D: "Más del 30% previa autorización de la Contraloría."
    },
    correctAnswer: "B"
  },
  {
    id: 61,
    category: "Ejecución Contractual",
    question: "Tratándose de obras bajo el sistema de entrega de solo construcción, ¿hasta qué porcentaje del monto total del contrato original, restándole los presupuestos deductivos vinculados, la autoridad de la gestión administrativa puede autorizar la ejecución y el pago de prestaciones adicionales?",
    options: {
      A: "Hasta el 10%.",
      B: "Hasta el 15%.",
      C: "Hasta el 20%.",
      D: "Más del 20% previa autorización del Titular de la entidad."
    },
    correctAnswer: "B"
  },
  {
    id: 62,
    category: "Ejecución Contractual",
    question: "En el caso de obras bajo el sistema de entrega de solo construcción, ¿hasta qué porcentaje del monto originalmente contratado, restándole los presupuestos deductivos vinculados, el Titular de la entidad puede autorizar la ejecución y pago de prestaciones adicionales mayores al 15%?",
    options: {
      A: "Hasta un máximo de 20%.",
      B: "Hasta un máximo de 30%.",
      C: "Hasta un máximo de 40%.",
      D: "Hasta un máximo de 50%."
    },
    correctAnswer: "B"
  },
  {
    id: 63,
    category: "Ejecución Contractual",
    question: "En el supuesto del 64.3 a), ¿quién puede autorizar prestaciones adicionales mayores al 30% hasta un máximo de 50%?",
    options: {
      A: "La Autoridad de la Gestión Administrativa.",
      B: "El Área Usuaria.",
      C: "El Titular de la entidad, previa autorización de la Contraloría General de la República.",
      D: "El supervisor de la obra."
    },
    correctAnswer: "C"
  },
  {
    id: 64,
    category: "Ejecución Contractual",
    question: "¿Está prohibida la cesión de posición contractual del contratista?",
    options: {
      A: "No, siempre está permitida.",
      B: "Sí, salvo en los casos previstos en el reglamento.",
      C: "Solo para contratos de servicios.",
      D: "Únicamente si la entidad contratante se niega."
    },
    correctAnswer: "B"
  },
  {
    id: 65,
    category: "Ejecución Contractual",
    question: "¿En qué plazo máximo las entidades contratantes realizan el pago al contratista luego de verificada la correcta ejecución de las prestaciones y cumplidos los procedimientos, salvo excepciones?",
    options: {
      A: "Cinco días hábiles.",
      B: "Diez días hábiles.",
      C: "Quince días calendario.",
      D: "Treinta días calendario."
    },
    correctAnswer: "B"
  },
  {
    id: 66,
    category: "Ejecución Contractual",
    question: "¿Constituye falta grave de la autoridad de gestión administrativa el incumplimiento, negación o demora injustificada del pago al contratista que cuente con la conformidad del área usuaria?",
    options: {
      A: "No, es una falta leve.",
      B: "Sí.",
      C: "Solo si el monto es elevado.",
      D: "Depende de la reincidencia."
    },
    correctAnswer: "B"
  },
  {
    id: 67,
    category: "Ejecución Contractual",
    question: "¿Cuándo se produce la nulidad de los actos expedidos dentro del procedimiento de selección?",
    options: {
      A: "Cuando son dictados por órgano competente.",
      B: "Cuando contravienen las normas legales, contienen un imposible jurídico, prescinden de normas esenciales del procedimiento o de la forma prescrita cuando es insubsanable, entre otros supuestos.",
      C: "Si un postor se retira.",
      D: "Cuando el precio ofertado es muy bajo."
    },
    correctAnswer: "B"
  },
  {
    id: 68,
    category: "Ejecución Contractual",
    question: "Después de perfeccionados los contratos, ¿en qué casos la autoridad de la gestión administrativa de la entidad contratante puede declarar su nulidad?",
    options: {
      A: "Únicamente si el contratista renuncia.",
      B: "Por haberse suscrito con proveedor impedido, presentación de documentación falsa o inexacta, suscripción con recurso de apelación en trámite, prescindiendo de procedimiento competitivo o sin cumplir condiciones para no competitivo, simulación de supuestos excluidos, o evidencia de actos de corrupción por sentencia.",
      C: "Si la ejecución se retrasa por caso fortuito.",
      D: "Cuando el área usuaria cambia de opinión sobre la necesidad."
    },
    correctAnswer: "B"
  },
  {
    id: 69,
    category: "Ejecución Contractual",
    question: "¿Constituyen infracciones administrativas pasibles de sanción para participantes, postores, proveedores y subcontratistas?",
    options: {
      A: "Cumplir con todas las obligaciones contractuales.",
      B: "Desistirse injustificadamente, incumplir el perfeccionamiento del contrato, subcontratar sin autorización, negarse a cumplir obligaciones post-pago, contratar sin RNP vigente o por mayor capacidad, elaborar expedientes técnicos deficientes, supervisar negligentemente, perfeccionar contrato con proceso suspendido o nulo, contratar estando impedido, ocasionar resolución de contrato, no sanear vicios ocultos, presentar información inexacta o documentos falsos/adulterados.",
      C: "Participar en múltiples procedimientos de selección.",
      D: "Solicitar aclaraciones a las bases."
    },
    correctAnswer: "B"
  },
  {
    id: 70,
    category: "Ejecución Contractual",
    question: "¿Quién sanciona a los participantes, postores, proveedores y subcontratistas cuando incurren en infracciones administrativas?",
    options: {
      A: "La entidad contratante.",
      B: "La DGA.",
      C: "El Tribunal de Contrataciones Públicas.",
      D: "El OECE."
    },
    correctAnswer: "C"
  },
  {
    id: 71,
    category: "Ejecución Contractual",
    question: "¿Cuáles pueden ser las sanciones por infracciones administrativas para participantes, postores, proveedores y subcontratistas?",
    options: {
      A: "Amonestación escrita y multa.",
      B: "Multa, inhabilitación temporal y inhabilitación permanente.",
      C: "Exclusión del RNP.",
      D: "Suspensión temporal del registro."
    },
    correctAnswer: "B"
  },
  {
    id: 72,
    category: "Ejecución Contractual",
    question: "¿Las multas o inhabilitaciones impuestas eximen de la obligación de cumplir con los contratos ya perfeccionados a la fecha en que la sanción queda firme?",
    options: {
      A: "Sí, el contrato queda automáticamente resuelto",
      B: "No",
      C: "Depende del tipo de infracción",
      D: "Solo en el caso de multas"
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.CONTRACT_EXECUTION,
    explanation: "Las sanciones impuestas no eximen al contratista de cumplir con las obligaciones contractuales ya asumidas. Los contratos perfeccionados antes de que la sanción quede firme deben ser ejecutados hasta su culminación."
  }
];