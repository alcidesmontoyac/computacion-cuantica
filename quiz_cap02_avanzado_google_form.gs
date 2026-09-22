/**
 * Crea el "Quiz — unitarias, producto tensorial y entrelazamiento" (Cap. 2,
 * diapositivas 30–47) como Formulario de Google en modo CUESTIONARIO
 * (autocalificable), con puntaje, clave y retroalimentación. Recoge nombre
 * y correo de cada estudiante y registra las notas.
 *
 * CÓMO USARLO (una vez, ~2 min):
 *   1. Entra a https://script.google.com  (con tu cuenta de la UNAL / del canal).
 *   2. "Nuevo proyecto", borra el código y pega TODO este archivo.
 *   3. Selecciona la función  crearQuizCap2Avanzado  y pulsa "Ejecutar" (autoriza la 1.ª vez).
 *   4. En "Ver > Registros" aparecen el enlace para EDITAR y el de COMPARTIR.
 *   5. En el formulario, pestaña "Respuestas", crea la hoja de cálculo para ver
 *      quién lo presentó y su nota.
 */
function crearQuizCap2Avanzado() {
  var form = FormApp.create('Quiz — Cap. 2: unitarias, producto tensorial y entrelazamiento');
  form.setIsQuiz(true);
  form.setDescription('Capítulo 2 (diapositivas 30–47): hermíticas y unitarias, compuertas, ' +
    'no-clonación, descomposición espectral, producto tensorial, entrelazamiento, valor esperado ' +
    'y espacio de Hilbert. 20 preguntas, 1 punto cada una. σz=[[1,0],[0,-1]]; |Φ⁺⟩=(1/√2)(|00⟩+|11⟩).');
  try { form.setCollectEmail(true); } catch (e) { Logger.log('Aviso recoger correo: ' + e); }
  try { form.setLimitOneResponsePerUser(true); } catch (e) { Logger.log('Aviso un envío/usuario: ' + e); }
  try { form.setProgressBar(true); } catch (e) {}

  form.addTextItem().setTitle('Nombre completo').setRequired(true);

  // {enunciado, opciones[], índice correcto, explicación}
  var Q = [
    ["Los autovalores de una matriz hermítica (A = A†) son siempre:",
     ["números complejos","números reales","de módulo 1","imaginarios puros"],1,
     "Por eso los observables son operadores hermíticos: sus autovalores (resultados de medición) son reales."],
    ["Los autovectores de una matriz hermítica con autovalores distintos son:",
     ["paralelos","ortogonales","iguales","nulos"],1,
     "Autovalores distintos ⇒ autovectores ortogonales; forman una base ortonormal."],
    ["Una matriz unitaria preserva:",
     ["solo la traza","el producto interno y la norma","solo el determinante","solo la dimensión"],1,
     "⟨Uψ|Uφ⟩=⟨ψ|U†U|φ⟩=⟨ψ|φ⟩: conserva la probabilidad total."],
    ["Toda compuerta cuántica sobre un sistema cerrado es:",
     ["hermítica","unitaria (reversible)","diagonal","singular"],1,
     "U⁻¹=U† siempre existe: la computación cuántica es reversible."],
    ["El teorema de no-clonación afirma que:",
     ["no se puede medir dos veces","no se puede copiar un estado cuántico desconocido arbitrario","no se puede entrelazar","no se puede transmitir información"],1,
     "Choca con la linealidad de las unitarias. Es la base de la seguridad de BB84."],
    ["¿Qué matrices admiten base ortonormal de autovectores (descomposición espectral)?",
     ["todas las cuadradas","exactamente las normales (AA†=A†A)","solo las diagonales","solo las reales"],1,
     "Teorema espectral: diagonalizable en base ortonormal ⇔ normal."],
    ["La dimensión del producto tensorial de ℂᵃ y ℂᵇ es:",
     ["a + b","a · b","el mayor de a y b","aᵇ"],1,
     "Las dimensiones se multiplican: de ahí el 2ⁿ para n qubits."],
    ["Un estado de dos qubits que NO se factoriza como |ψ⟩⊗|φ⟩ es:",
     ["separable","entrelazado","clásico","normalizado"],1,
     "Los estados no factorizables (Bell) están entrelazados."],
    ["El valor esperado de un observable A en |ψ⟩ es:",
     ["⟨ψ|ψ⟩","⟨ψ|A|ψ⟩","A|ψ⟩","tr(A)"],1,
     "⟨A⟩=⟨ψ|A|ψ⟩: promedio ponderado por las probabilidades."],
    ["La evolución de un sistema cuántico cerrado es:",
     ["irreversible","reversible, con U⁻¹=U†","aleatoria","no lineal"],1,
     "La única operación irreversible es la medición."],
    ["¿Cuál es la dimensión del espacio de Hilbert de 3 qubits?",
     ["8","6","3","9"],0,"dim = 2³ = 8."],
    ["¿Cuántas amplitudes complejas tiene un estado de 4 qubits?",
     ["16","8","4","12"],0,"2⁴ = 16."],
    ["Para |Φ⁺⟩=(1/√2)(|00⟩+|11⟩), la probabilidad de medir 00 es:",
     ["0.5","1","0.25","0"],0,"|1/√2|² = 0.5."],
    ["Calcula ⟨σz⟩ en el estado |0⟩.",
     ["1","0","−1","0.5"],0,"σz|0⟩=+1|0⟩ ⇒ ⟨0|σz|0⟩=+1."],
    ["Calcula ⟨σz⟩ en el estado |1⟩.",
     ["−1","1","0","−0.5"],0,"σz|1⟩=−1|1⟩ ⇒ ⟨1|σz|1⟩=−1."],
    ["El módulo de un autovalor de una matriz unitaria es:",
     ["1","0","−1","2"],0,"Los autovalores son e^{iθ}: módulo 1."],
    ["Para |ψ⟩=(√3/2)|0⟩+(1/2)|1⟩, ⟨σz⟩ = |α|²−|β|² =",
     ["0.5","1","0.25","0.75"],0,"3/4 − 1/4 = 0.5."],
    ["Al aplicar CNOT a |11⟩ obtienes |1x⟩. El segundo bit x es:",
     ["0","1","2","−1"],0,"Control=1 ⇒ se invierte el objetivo: |11⟩→|10⟩."],
    ["El estado |101⟩ en ℂ⁸: contando desde 0, ¿en qué posición está su único 1?",
     ["5","3","6","2"],0,"101 en binario = 5."],
    ["Calcula la traza tr(σz).",
     ["0","1","−1","2"],0,"1 + (−1) = 0."]
  ];

  Q.forEach(function(q) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(q[0]).setPoints(1).setRequired(true);
    item.setChoices(q[1].map(function(opt, j) { return item.createChoice(opt, j === q[2]); }));
    var fb = FormApp.createFeedback().setText(q[3]).build();
    item.setFeedbackForCorrect(fb);
    item.setFeedbackForIncorrect(fb);
  });

  Logger.log('==================================================');
  Logger.log('QUIZ CAP. 2 (30–47) CREADO');
  Logger.log('EDITAR:    ' + form.getEditUrl());
  Logger.log('COMPARTIR: ' + form.getPublishedUrl());
  Logger.log('==================================================');
}
