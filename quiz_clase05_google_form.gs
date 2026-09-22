/**
 * Crea el "Quiz — Clase 5: álgebra lineal y notación de Dirac" como Formulario
 * de Google en modo CUESTIONARIO (autocalificable), con puntaje y clave.
 * Recoge nombre y correo de cada estudiante y registra las notas.
 *
 * CÓMO USARLO (una vez, ~2 min):
 *   1. Entra a https://script.google.com  (con tu cuenta de Google).
 *   2. "Nuevo proyecto", borra el código y pega TODO este archivo.
 *   3. Selecciona la función  crearQuizClase5  y pulsa "Ejecutar" (autoriza la 1.ª vez).
 *   4. En "Ver > Registros" aparecen el enlace para EDITAR y el de COMPARTIR.
 *   5. En el formulario, pestaña "Respuestas", crea la hoja de cálculo para ver
 *      quién lo presentó y su nota.
 */
function crearQuizClase5() {
  var form = FormApp.create('Quiz — Clase 5: álgebra lineal y notación de Dirac');
  form.setIsQuiz(true);
  form.setDescription('Capítulo 2 (diapositivas 11–24). 20 preguntas, 1 punto cada una. ' +
                      'Matrices de Pauli: σx=[[0,1],[1,0]], σz=[[1,0],[0,-1]]; |+⟩=(1/√2)(|0⟩+|1⟩).');
  // Ajustes opcionales protegidos: si tu cuenta no admite alguno, el quiz igual se crea.
  try { form.setCollectEmail(true); } catch (e) { Logger.log('Aviso: no se pudo activar recoger correo: ' + e); }
  try { form.setLimitOneResponsePerUser(true); } catch (e) { Logger.log('Aviso: un envío por usuario no disponible: ' + e); }
  try { form.setProgressBar(true); } catch (e) {}

  form.addTextItem().setTitle('Nombre completo').setRequired(true);

  // {enunciado, opciones[], índice correcto, explicación}
  var Q = [
    ["El adjunto A† (conjugado transpuesto) se obtiene:",
     ["transponiendo únicamente","conjugando únicamente","conjugando y transponiendo","invirtiendo la matriz"],2,
     "A† = (A*)ᵀ: se conjuga cada entrada y se transpone."],
    ["¿A qué es igual (AB)†?",
     ["A†B†","B†A†","(AB)*","A†B"],1,
     "El adjunto invierte el orden del producto: (AB)† = B†A†."],
    ["En general, AB y BA:",
     ["son siempre iguales","no son necesariamente iguales (no conmuta)","son la matriz cero","son la identidad"],1,
     "El producto de matrices no es conmutativo en general."],
    ["El bra ⟨ψ| correspondiente al ket |ψ⟩ es:",
     ["la transpuesta de |ψ⟩","el conjugado de |ψ⟩","el conjugado transpuesto (adjunto) de |ψ⟩","el inverso de |ψ⟩"],2,
     "El bra es el adjunto del ket: ⟨ψ| = |ψ⟩†."],
    ["En la convención de la física, ⟨u|v⟩ es:",
     ["lineal en ambos","lineal en el ket y antilineal en el bra","antilineal en ambos","antilineal en el ket y lineal en el bra"],1,
     "Producto sesquilineal: lineal en el ket, antilineal en el bra."],
    ["Dos vectores son ortogonales si:",
     ["⟨u|v⟩ = 1","⟨u|v⟩ = 0","|u⟩ = |v⟩","su norma es 1"],1,
     "Ortogonalidad ⇔ producto interno nulo."],
    ["La relación de completitud de una base ortonormal es:",
     ["Σ |eᵢ⟩⟨eᵢ| = I","Σ ⟨eᵢ|eᵢ⟩ = 0","Σ |eᵢ⟩ = 1","⟨eᵢ|eⱼ⟩ = 1"],0,
     "La suma de los proyectores de la base da la identidad."],
    ["El producto externo |φ⟩⟨ψ| es:",
     ["un número complejo","un escalar real","un operador (matriz)","un bra"],2,
     "Columna × fila = matriz: es un operador."],
    ["Un proyector P cumple:",
     ["P² = I","P² = P","P† = −P","P = 0"],1,
     "Idempotencia: aplicar el proyector dos veces = una vez."],
    ["Los autovalores de A son las raíces de:",
     ["det(A − λI) = 0","tr(A) = 0","A|v⟩ = 0","det(A) = 0"],0,
     "El polinomio característico det(A−λI)=0 da los autovalores."],
    ["Calcula la traza tr(σx).",
     ["0","1","2","−1"],0,"σx=[[0,1],[1,0]]: la diagonal es 0+0 = 0."],
    ["Calcula det(σx).",
     ["−1","1","0","2"],0,"det[[0,1],[1,0]] = 0·0 − 1·1 = −1."],
    ["Con |ψ⟩=(1/√2)(|0⟩+|1⟩) y |φ⟩=(1/√2)(|0⟩−|1⟩), ⟨φ|ψ⟩ =",
     ["0","1","1/√2","−1"],0,"|ψ⟩=|+⟩ y |φ⟩=|−⟩ son ortogonales: ⟨−|+⟩=0."],
    ["¿Cuánto vale ⟨0|0⟩?",
     ["1","0","−1","2"],0,"La base es ortonormal: ⟨0|0⟩=1."],
    ["Para |ψ⟩=3|0⟩+4|1⟩ (sin normalizar), ⟨ψ|ψ⟩ =",
     ["25","7","5","12"],0,"|3|²+|4|² = 9+16 = 25."],
    ["La norma ‖ψ‖ del estado anterior es:",
     ["5","25","7","1"],0,"‖ψ‖=√25 = 5."],
    ["Calcula la probabilidad |⟨0|+⟩|².",
     ["0.5","1","0.707","0.25"],0,"⟨0|+⟩=1/√2 ⇒ |1/√2|² = 0.5."],
    ["σz tiene dos autovalores; el menor es:",
     ["−1","1","0","−2"],0,"Autovalores de σz: +1 y −1."],
    ["Para A=[[2,0],[0,3]], el mayor autovalor es:",
     ["3","2","5","6"],0,"Matriz diagonal: autovalores 2 y 3."],
    ["La traza del proyector |0⟩⟨0| es:",
     ["1","0","2","0.5"],0,"|0⟩⟨0|=[[1,0],[0,0]]: traza = 1."]
  ];

  Q.forEach(function(q) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(q[0]).setPoints(1).setRequired(true);
    var choices = q[1].map(function(opt, j) { return item.createChoice(opt, j === q[2]); });
    item.setChoices(choices);
    var fb = FormApp.createFeedback().setText(q[3]).build();
    item.setFeedbackForCorrect(fb);
    item.setFeedbackForIncorrect(fb);
  });

  Logger.log('==================================================');
  Logger.log('QUIZ CLASE 5 CREADO');
  Logger.log('EDITAR:    ' + form.getEditUrl());
  Logger.log('COMPARTIR: ' + form.getPublishedUrl());
  Logger.log('==================================================');
}
