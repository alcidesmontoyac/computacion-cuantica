/**
 * Crea automáticamente el "Quiz — Capítulo 1" como Formulario de Google
 * en modo CUESTIONARIO (autocalificable), con puntaje, clave de respuestas
 * y retroalimentación por pregunta. Recoge nombre y correo de cada estudiante.
 *
 * CÓMO USARLO (una sola vez, ~2 minutos):
 *   1. Entra a https://script.google.com  (con tu cuenta de Google).
 *   2. "Nuevo proyecto". Borra el código que aparece y pega TODO este archivo.
 *   3. Arriba, selecciona la función  crearQuizCapitulo1  y pulsa "Ejecutar".
 *   4. La primera vez Google te pedirá autorizar el acceso a tus Formularios: acepta.
 *   5. Abre "Ver > Registros" (o "Execution log"): ahí aparecen dos enlaces.
 *        - EDITAR: para revisar/ajustar el formulario.
 *        - COMPARTIR: este es el que les pasas a los estudiantes.
 *   6. En el formulario, pestaña "Respuestas", crea la hoja de cálculo para ver
 *      quién lo presentó y su nota. (Configuración > Cuestionarios: puedes elegir
 *      mostrar la calificación al enviar o después de revisar.)
 */

function crearQuizCapitulo1() {
  var form = FormApp.create('Quiz — Capítulo 1: Introducción a la computación cuántica');
  form.setIsQuiz(true);
  form.setDescription(
    'Diez preguntas sobre el Capítulo 1: superposición, la muralla exponencial, ' +
    'el panorama del hardware (NISQ/FTQC) y cómo separar el bombo de la evidencia. ' +
    'Cada pregunta vale 1 punto. Se califica automáticamente.'
  );
  form.setCollectEmail(true);        // registra el correo de cada estudiante
  form.setLimitOneResponsePerUser(true);
  form.setProgressBar(true);
  form.setShuffleQuestions(false);

  // Nombre completo (obligatorio)
  form.addTextItem()
      .setTitle('Nombre completo')
      .setRequired(true);

  var QUIZ = [
    { stem: "Un qubit está en la superposición |ψ⟩ = α|0⟩ + β|1⟩ antes de medirlo. ¿Cuál afirmación es correcta?",
      options: [
        "Ya tiene un valor definido (0 o 1); la superposición solo describe nuestra ignorancia, como una moneda girando.",
        "No tiene un valor definido; α y β son amplitudes complejas y las probabilidades de medir son |α|² y |β|², con |α|²+|β|²=1.",
        "Es una mezcla estadística 50/50 de 0 y 1, igual que lanzar una moneda al aire.",
        "Sus componentes son probabilidades que suman 1, así que (½, ½) sería un qubit válido."
      ], correct: 1,
      expl: "La superposición no es ignorancia clásica: en una mezcla clásica el sistema ya tiene valor y las componentes son probabilidades. En un qubit son amplitudes complejas cuyo módulo al cuadrado da la probabilidad: |α|²+|β|²=1. Por eso (½,½) no es un qubit, pero (1/√2, 1/√2) sí." },

    { stem: "¿Por qué la mecánica cuántica exige números complejos y no le bastan los reales?",
      options: [
        "Para garantizar que las probabilidades sumen 1.",
        "Porque las amplitudes con fase permiten la interferencia: dos caminos pueden cancelarse (término 2·Re[ψ₁*ψ₂]), algo imposible con probabilidades clásicas.",
        "Es solo una conveniencia de notación; con reales se puede hacer todo igual.",
        "Porque el espín del electrón obliga a usar matrices de 2×2."
      ], correct: 1,
      expl: "La física clásica usa reales; la cuántica exige complejos porque son la fuente de la interferencia. Al sumar amplitudes aparece el término 2·Re[ψ₁*ψ₂], que puede ser negativo y cancelar caminos (doble rendija). Ese término no existe en la probabilidad clásica." },

    { stem: "La penicilina (~41 átomos) se modela con 286 espín-orbitales, y el costo clásico es 2^286 ≈ 1.2×10^86. ¿Cuál es la lectura correcta?",
      options: [
        "Hay 286 electrones, uno por qubit, y por eso se necesitan 286 qubits.",
        "Cada espín-orbital (casilla) está vacío u ocupado: con M casillas hay 2^M configuraciones que el clásico debe almacenar como amplitudes, mientras el cuántico las encarna en M=286 qubits físicos.",
        "2^286 es el número de compuertas que tendría el circuito cuántico.",
        "El computador cuántico también debe guardar los 2^286 números, solo que los procesa más rápido."
      ], correct: 1,
      expl: "Son 176 electrones en 286 casillas. La función de onda es una superposición sobre las 2^M ocupaciones; el clásico tendría que guardar 2^286 amplitudes (más que átomos en el universo, ~10^80). El cuántico las encarna en 286 qubits: recurso lineal, capacidad exponencial." },

    { stem: "El capítulo contrasta la IA moderna con la computación cuántica ante espacios exponenciales. ¿Cuál es el contraste correcto?",
      options: [
        "Ambas representan el espacio de estados de forma exacta, solo que la cuántica es más veloz.",
        "El aprendizaje profundo renuncia a la exactitud (aproxima con datos y descenso por gradiente: sacrifica rigor por escala); lo cuántico representa el espacio exponencial de forma exacta, encarnándolo en hardware (conserva rigor, al precio de hardware pequeño).",
        "La IA es exacta y lo cuántico es aproximado.",
        "Ninguna de las dos aborda realmente espacios exponenciales."
      ], correct: 1,
      expl: "El puente con la IA: el aprendizaje profundo ataca lo exponencial renunciando a la exactitud para ganar escala; la computación cuántica conserva el rigor representando el espacio exacto en el hardware, y su precio hoy es un hardware pequeño." },

    { stem: "Sobre los cuatro hitos fundacionales, ¿cuál asociación es correcta?",
      options: [
        "Grover (1994) — factorización en tiempo polinomial.",
        "Shor (1994) — factorización en tiempo polinomial, que vuelve vulnerable a RSA.",
        "Deutsch (1984) — protocolo de distribución de claves BB84.",
        "BB84 — algoritmo de búsqueda con aceleración cuadrática √N."
      ], correct: 1,
      expl: "BB84 es de Bennett y Brassard (1984); Deutsch (1985) propuso el computador cuántico universal; Shor (1994) dio la factorización polinomial que amenaza a RSA; Grover (1996) dio la búsqueda con aceleración cuadrática √N." },

    { stem: "¿Cuál afirmación describe con mayor precisión las aceleraciones cuánticas?",
      options: [
        "Todo problema se acelera exponencialmente en un computador cuántico.",
        "Shor logra aceleración exponencial pero solo para problemas con estructura (como factorizar); Grover da solo aceleración cuadrática (√N), aunque para una clase mucho más amplia de problemas.",
        "Grover ofrece la aceleración exponencial más general que existe.",
        "La aceleración exponencial es una propiedad de la máquina, no del problema."
      ], correct: 1,
      expl: "La ventaja depende del problema, no de la máquina. Shor explota la estructura de la factorización para un salto exponencial; Grover solo consigue √N, pero para una clase muy amplia. No hay aceleración exponencial universal." },

    { stem: "¿Qué caracteriza a la era NISQ (la de hoy)?",
      options: [
        "Qubits lógicos con errores ya corregidos por código de superficie.",
        "Cientos de qubits físicos ruidosos con mitigación (no corrección) de errores; útil para química pequeña, heurísticas y experimentos.",
        "Millones de qubits capaces de ejecutar el algoritmo de Shor a escala.",
        "Máquinas que ya reemplazan a los supercomputadores clásicos."
      ], correct: 1,
      expl: "NISQ = Noisy Intermediate-Scale Quantum: cientos de qubits físicos ruidosos donde los errores se mitigan, no se corrigen. La corrección real y los qubits lógicos son de la era FTQC (tolerante a fallos)." },

    { stem: "Un titular anuncia '5 minutos frente a 10^25 años'. Según el criterio del capítulo para leer el bombo, ¿cuál es la pregunta crítica correcta?",
      options: [
        "Ninguna: si es supremacía cuántica, ya demuestra utilidad práctica.",
        "'¿En qué tarea?' — y si esa 'supremacía' en un test artificial implica de verdad una utilidad que necesites, recordando que las hojas de ruta serias cuentan qubits lógicos, no físicos.",
        "Solo importa cuántos qubits físicos tiene la máquina.",
        "Que ya se puede confiar en que reemplazará a los clásicos para todo."
      ], correct: 1,
      expl: "La destreza central: ante cada afirmación preguntar '¿en qué tarea?'. La supremacía en un test artificial no implica utilidad, y por eso las hojas de ruta honestas cuentan qubits lógicos, no los físicos en bruto." },

    { stem: "Respecto a la amenaza del algoritmo de Shor sobre RSA y la respuesta defensiva:",
      options: [
        "No hay urgencia: basta esperar a que exista la máquina para migrar la seguridad.",
        "La lógica de 'cosechar ahora, descifrar después' obliga a migrar ya a criptografía post-cuántica: ML-KEM (Kyber) para intercambio de claves y ML-DSA (Dilithium) para firmas.",
        "Es Grover, no Shor, quien rompe RSA.",
        "La única defensa posible es BB84."
      ], correct: 1,
      expl: "Shor lleva la factorización de exponencial a polinomial, rompiendo RSA. Como un adversario puede 'cosechar ahora y descifrar después', hay que migrar ya a criptografía post-cuántica: ML-KEM (Kyber) y ML-DSA (Dilithium)." },

    { stem: "¿Por qué el aprendizaje automático cuántico (QML) NO es simplemente 'la IA, pero más rápida'?",
      options: [
        "Porque el hardware cuántico es intrínsecamente más lento que una GPU.",
        "Por límites duros: las mesetas estériles (gradientes que se desvanecen) y el cuello de botella de carga de datos/QRAM, donde codificar N puntos clásicos puede costar O(N) y matar la aceleración.",
        "Porque la IA clásica ya alcanzó el óptimo teórico y no se puede mejorar.",
        "Porque el QML no utiliza datos de entrenamiento."
      ], correct: 1,
      expl: "El QML enfrenta obstáculos propios: las mesetas estériles (barren plateaus), análogas a los gradientes que se desvanecen, y el costo de cargar datos clásicos (QRAM), que puede ser O(N) y anular la ventaja." }
  ];

  QUIZ.forEach(function(q) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(q.stem);
    item.setPoints(1);
    item.setRequired(true);
    var choices = q.options.map(function(opt, j) {
      return item.createChoice(opt, j === q.correct);
    });
    item.setChoices(choices);
    var fb = FormApp.createFeedback().setText(q.expl).build();
    item.setFeedbackForCorrect(fb);
    item.setFeedbackForIncorrect(fb);
  });

  Logger.log('==================================================');
  Logger.log('QUIZ CREADO CORRECTAMENTE');
  Logger.log('Enlace para EDITAR:    ' + form.getEditUrl());
  Logger.log('Enlace para COMPARTIR: ' + form.getPublishedUrl());
  Logger.log('==================================================');
}
