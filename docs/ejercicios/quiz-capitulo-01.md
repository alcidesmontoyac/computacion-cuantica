# Quiz — Capítulo 1

<span class="qc-badge">Autoevaluación</span> <span class="qc-badge teal">10 preguntas</span> <span class="qc-badge gold">Se califica solo</span>

Pon a prueba lo que entendiste del Capítulo 1: superposición, la muralla exponencial, el panorama del hardware y cómo separar el bombo de la evidencia. Responde las diez preguntas y pulsa **Calificar**: verás tu puntaje y la explicación de cada una al instante. Puedes repetirlo las veces que quieras.

!!! tip "¿Para nota?"
    Esta versión es para estudiar (nadie recibe tus respuestas). Si tu profesor abrió la versión para calificación, el enlace de Google Forms estará al final de esta página.

<div id="qc-quiz" class="qc-quiz">
  <div class="qcq-head">
    <label class="qcq-name">Tu nombre (opcional, para tu captura):
      <input type="text" id="qcq-student" placeholder="Escribe tu nombre">
    </label>
  </div>
  <form id="qcq-form"></form>
  <div class="qcq-actions">
    <button type="button" id="qcq-grade" class="qcq-btn primary">Calificar</button>
    <button type="button" id="qcq-reset" class="qcq-btn ghost">Reiniciar</button>
  </div>
  <div id="qcq-result" class="qcq-result" hidden></div>
</div>

<style>
.qc-quiz{--v:#6d28d9;--t:#0d9488;--ok:#15803d;--no:#b91c1c;--line:rgba(0,0,0,.12);
  margin:1.2rem 0;font-size:.92rem;}
.qc-quiz .qcq-head{margin:.4rem 0 1rem;}
.qc-quiz .qcq-name{display:block;font-weight:600;font-size:.82rem;}
.qc-quiz .qcq-name input{display:block;margin-top:.3rem;padding:.5rem .6rem;width:min(360px,100%);
  border:1px solid var(--line);border-radius:8px;font-size:.9rem;background:var(--md-default-bg-color,#fff);color:inherit;}
.qcq-q{border:1px solid var(--line);border-left:4px solid var(--v);border-radius:10px;
  padding:.9rem 1rem;margin:.8rem 0;background:rgba(124,58,237,.03);}
.qcq-q .qcq-num{font-weight:800;color:var(--v);margin-right:.35rem;}
.qcq-q .qcq-stem{font-weight:600;margin-bottom:.6rem;line-height:1.45;}
.qcq-opt{display:flex;gap:.55rem;align-items:flex-start;padding:.4rem .55rem;border-radius:8px;
  cursor:pointer;margin:.2rem 0;border:1px solid transparent;transition:background .15s;}
.qcq-opt:hover{background:rgba(13,148,136,.07);}
.qcq-opt input{margin-top:.2rem;flex:0 0 auto;}
.qcq-opt.correct{background:rgba(21,128,61,.12);border-color:rgba(21,128,61,.4);}
.qcq-opt.wrong{background:rgba(185,28,28,.10);border-color:rgba(185,28,28,.4);}
.qcq-mark{font-weight:800;margin-left:.2rem;}
.qcq-mark.ok{color:var(--ok);}
.qcq-mark.no{color:var(--no);}
.qcq-expl{margin:.55rem 0 .1rem;padding:.55rem .7rem;border-radius:8px;font-size:.85rem;
  background:rgba(13,148,136,.09);border-left:3px solid var(--t);line-height:1.5;}
.qcq-expl b{color:var(--t);}
.qcq-actions{display:flex;gap:.6rem;margin:1.1rem 0;flex-wrap:wrap;}
.qcq-btn{padding:.6rem 1.2rem;border-radius:9px;font-weight:700;font-size:.9rem;border:0;cursor:pointer;}
.qcq-btn.primary{background:var(--v);color:#fff;}
.qcq-btn.ghost{background:transparent;border:1px solid var(--line);color:inherit;}
.qcq-btn:hover{filter:brightness(1.06);}
.qcq-result{padding:1rem 1.2rem;border-radius:12px;font-size:1rem;font-weight:600;line-height:1.5;
  border:1px solid var(--line);}
.qcq-result .score{font-size:1.8rem;font-weight:800;display:block;margin-bottom:.2rem;}
.qcq-result.good{background:rgba(21,128,61,.10);border-color:rgba(21,128,61,.4);}
.qcq-result.mid{background:rgba(207,169,78,.14);border-color:rgba(207,169,78,.5);}
.qcq-result.low{background:rgba(185,28,28,.09);border-color:rgba(185,28,28,.4);}
.qcq-warn{color:var(--no);font-weight:700;margin:.4rem 0;}
</style>

<script>
(function(){
  const QUIZ = [
    {
      stem: "Un qubit está en la superposición |ψ⟩ = α|0⟩ + β|1⟩ antes de medirlo. ¿Cuál afirmación es correcta?",
      options: [
        "Ya tiene un valor definido (0 o 1); la superposición solo describe nuestra ignorancia, como una moneda girando.",
        "No tiene un valor definido; α y β son amplitudes complejas y las probabilidades de medir son |α|² y |β|², con |α|²+|β|²=1.",
        "Es una mezcla estadística 50/50 de 0 y 1, igual que lanzar una moneda al aire.",
        "Sus componentes son probabilidades que suman 1, así que (½, ½) sería un qubit válido."
      ],
      correct: 1,
      expl: "La superposición no es ignorancia clásica. En una mezcla clásica el sistema ya tiene valor y las componentes son probabilidades (suman 1). En un qubit las componentes son amplitudes complejas cuyo módulo al cuadrado da la probabilidad: |α|²+|β|²=1. Por eso (½,½) no es un qubit, pero (1/√2, 1/√2) sí."
    },
    {
      stem: "¿Por qué la mecánica cuántica exige números complejos y no le bastan los reales?",
      options: [
        "Para garantizar que las probabilidades sumen 1.",
        "Porque las amplitudes con fase permiten la interferencia: dos caminos pueden cancelarse (término 2·Re[ψ₁*ψ₂]), algo imposible con probabilidades clásicas.",
        "Es solo una conveniencia de notación; con reales se puede hacer todo igual.",
        "Porque el espín del electrón obliga a usar matrices de 2×2."
      ],
      correct: 1,
      expl: "La física clásica usa números reales; la cuántica exige complejos porque son la fuente de la interferencia. Al sumar amplitudes aparece el término cruzado 2·Re[ψ₁*ψ₂], que puede ser negativo y cancelar caminos (como en la doble rendija). Ese término no existe en la probabilidad clásica."
    },
    {
      stem: "La penicilina (~41 átomos) se modela con 286 espín-orbitales, y el costo clásico es 2²⁸⁶ ≈ 1.2×10⁸⁶. ¿Cuál es la lectura correcta?",
      options: [
        "Hay 286 electrones, uno por qubit, y por eso se necesitan 286 qubits.",
        "Cada espín-orbital (casilla) está vacío u ocupado: con M casillas hay 2^M configuraciones que el clásico debe almacenar como amplitudes, mientras el cuántico las encarna en M=286 qubits físicos.",
        "2²⁸⁶ es el número de compuertas que tendría el circuito cuántico.",
        "El computador cuántico también debe guardar los 2²⁸⁶ números, solo que los procesa más rápido."
      ],
      correct: 1,
      expl: "Son 176 electrones acomodados en 286 casillas. La función de onda es una superposición sobre las 2^M ocupaciones posibles; el clásico tendría que guardar 2²⁸⁶ amplitudes (más que átomos en el universo, ~10⁸⁰). El cuántico no las guarda: las encarna en 286 qubits físicos. Recurso lineal, capacidad exponencial."
    },
    {
      stem: "El capítulo contrasta la IA moderna con la computación cuántica ante espacios exponenciales. ¿Cuál es el contraste correcto?",
      options: [
        "Ambas representan el espacio de estados de forma exacta, solo que la cuántica es más veloz.",
        "El aprendizaje profundo renuncia a la exactitud (aproxima con datos y descenso por gradiente: sacrifica rigor por escala); lo cuántico representa el espacio exponencial de forma exacta, encarnándolo en hardware (conserva rigor, al precio de hardware pequeño).",
        "La IA es exacta y lo cuántico es aproximado.",
        "Ninguna de las dos aborda realmente espacios exponenciales."
      ],
      correct: 1,
      expl: "El puente con la IA del capítulo: el aprendizaje profundo ataca lo exponencial 'al revés', renunciando a la exactitud para ganar escala. La computación cuántica hace lo contrario: conserva el rigor representando el espacio exacto en el hardware, y su precio hoy es un hardware todavía pequeño."
    },
    {
      stem: "Sobre los cuatro hitos fundacionales, ¿cuál asociación es correcta?",
      options: [
        "Grover (1994) — factorización en tiempo polinomial.",
        "Shor (1994) — factorización en tiempo polinomial, que vuelve vulnerable a RSA.",
        "Deutsch (1984) — protocolo de distribución de claves BB84.",
        "BB84 — algoritmo de búsqueda con aceleración cuadrática √N."
      ],
      correct: 1,
      expl: "BB84 es de Bennett y Brassard (1984); Deutsch (1985) propuso el computador cuántico universal; Shor (1994) dio la factorización en tiempo polinomial que amenaza a RSA; Grover (1996) dio la búsqueda con aceleración cuadrática √N."
    },
    {
      stem: "¿Cuál afirmación describe con mayor precisión las aceleraciones cuánticas?",
      options: [
        "Todo problema se acelera exponencialmente en un computador cuántico.",
        "Shor logra aceleración exponencial pero solo para problemas con estructura (como factorizar); Grover da solo aceleración cuadrática (√N), aunque para una clase mucho más amplia de problemas.",
        "Grover ofrece la aceleración exponencial más general que existe.",
        "La aceleración exponencial es una propiedad de la máquina, no del problema."
      ],
      correct: 1,
      expl: "La ventaja depende del problema, no de la máquina. Shor explota la estructura de la factorización para un salto exponencial; Grover solo consigue √N, pero aplica a una clase muy amplia de búsquedas. No existe aceleración exponencial universal para cualquier tarea."
    },
    {
      stem: "¿Qué caracteriza a la era NISQ (la de hoy)?",
      options: [
        "Qubits lógicos con errores ya corregidos por código de superficie.",
        "Cientos de qubits físicos ruidosos con mitigación (no corrección) de errores; útil para química pequeña, heurísticas y experimentos.",
        "Millones de qubits capaces de ejecutar el algoritmo de Shor a escala.",
        "Máquinas que ya reemplazan a los supercomputadores clásicos."
      ],
      correct: 1,
      expl: "NISQ = Noisy Intermediate-Scale Quantum: cientos de qubits físicos ruidosos donde los errores se mitigan, no se corrigen. La corrección real y los qubits lógicos pertenecen a la era FTQC (tolerante a fallos), necesaria para Shor a escala y biomoléculas exactas."
    },
    {
      stem: "Un titular anuncia '5 minutos frente a 10²⁵ años'. Según el criterio del capítulo para leer el bombo, ¿cuál es la pregunta crítica correcta?",
      options: [
        "Ninguna: si es supremacía cuántica, ya demuestra utilidad práctica.",
        "'¿En qué tarea?' — y si esa 'supremacía' en un test artificial implica de verdad una utilidad que necesites, recordando que las hojas de ruta serias cuentan qubits lógicos, no físicos.",
        "Solo importa cuántos qubits físicos tiene la máquina.",
        "Que ya se puede confiar en que reemplazará a los clásicos para todo."
      ],
      correct: 1,
      expl: "La destreza central del capítulo: ante cada afirmación preguntar '¿en qué tarea?'. La supremacía en un test artificial no implica utilidad, y por eso las hojas de ruta honestas cuentan qubits lógicos (corregidos) y no los físicos en bruto."
    },
    {
      stem: "Respecto a la amenaza del algoritmo de Shor sobre RSA y la respuesta defensiva:",
      options: [
        "No hay urgencia: basta esperar a que exista la máquina para migrar la seguridad.",
        "La lógica de 'cosechar ahora, descifrar después' obliga a migrar ya a criptografía post-cuántica: ML-KEM (Kyber) para intercambio de claves y ML-DSA (Dilithium) para firmas.",
        "Es Grover, no Shor, quien rompe RSA.",
        "La única defensa posible es BB84."
      ],
      correct: 1,
      expl: "Shor convierte la factorización de exponencial a polinomial, rompiendo RSA. Como un adversario puede 'cosechar ahora y descifrar después', hay que migrar ya a criptografía post-cuántica: los estándares ML-KEM (Kyber) y ML-DSA (Dilithium). BB84 es otra vía (comunicación), pero no la 'única'."
    },
    {
      stem: "¿Por qué el aprendizaje automático cuántico (QML) NO es simplemente 'la IA, pero más rápida'?",
      options: [
        "Porque el hardware cuántico es intrínsecamente más lento que una GPU.",
        "Por límites duros: las mesetas estériles (gradientes que se desvanecen) y el cuello de botella de carga de datos/QRAM, donde codificar N puntos clásicos puede costar O(N) y matar la aceleración.",
        "Porque la IA clásica ya alcanzó el óptimo teórico y no se puede mejorar.",
        "Porque el QML no utiliza datos de entrenamiento."
      ],
      correct: 1,
      expl: "El QML enfrenta obstáculos propios: las mesetas estériles (barren plateaus), análogas a los gradientes que se desvanecen en redes profundas, y el costo de cargar datos clásicos (QRAM), que puede ser O(N) y anular cualquier ventaja. Por eso no es 'IA acelerada' sin más."
    }
  ];

  const form = document.getElementById('qcq-form');
  const result = document.getElementById('qcq-result');

  function render(){
    form.innerHTML = '';
    QUIZ.forEach((q, i) => {
      const box = document.createElement('div');
      box.className = 'qcq-q';
      box.id = 'qcq-q' + i;
      const stem = document.createElement('div');
      stem.className = 'qcq-stem';
      stem.innerHTML = '<span class="qcq-num">' + (i+1) + '.</span>' + q.stem;
      box.appendChild(stem);
      q.options.forEach((opt, j) => {
        const lab = document.createElement('label');
        lab.className = 'qcq-opt';
        lab.setAttribute('data-opt', j);
        lab.innerHTML = '<input type="radio" name="q'+i+'" value="'+j+'"><span>'+opt+'</span>';
        box.appendChild(lab);
      });
      form.appendChild(box);
    });
    result.hidden = true;
    result.innerHTML = '';
  }

  function grade(){
    let score = 0, unanswered = 0;
    QUIZ.forEach((q, i) => {
      const box = document.getElementById('qcq-q'+i);
      const labs = box.querySelectorAll('.qcq-opt');
      const picked = form.querySelector('input[name="q'+i+'"]:checked');
      labs.forEach(l => l.classList.remove('correct','wrong'));
      // remove old explanation/mark
      box.querySelectorAll('.qcq-expl,.qcq-mark').forEach(e => e.remove());
      const chosen = picked ? parseInt(picked.value,10) : null;
      if (chosen === null) unanswered++;
      // mark correct option
      labs[q.correct].classList.add('correct');
      if (chosen !== null && chosen !== q.correct) labs[chosen].classList.add('wrong');
      if (chosen === q.correct) score++;
      // header mark
      const mark = document.createElement('span');
      mark.className = 'qcq-mark ' + (chosen===q.correct ? 'ok' : 'no');
      mark.textContent = chosen===q.correct ? '  ✓ Correcta' : '  ✗ Incorrecta';
      box.querySelector('.qcq-stem').appendChild(mark);
      // explanation
      const ex = document.createElement('div');
      ex.className = 'qcq-expl';
      ex.innerHTML = '<b>Explicación:</b> ' + q.expl;
      box.appendChild(ex);
    });

    const name = (document.getElementById('qcq-student').value || '').trim();
    const pct = Math.round(score/QUIZ.length*100);
    let cls = 'low', msg = 'Repasa el capítulo y vuelve a intentarlo: el objetivo es distinguir superposición de mezcla clásica y separar el bombo de la evidencia.';
    if (score >= 8){ cls='good'; msg='¡Excelente! Dominas los conceptos clave del Capítulo 1.'; }
    else if (score >= 6){ cls='mid'; msg='Bien encaminado. Revisa las que fallaste con sus explicaciones.'; }
    result.className = 'qcq-result ' + cls;
    result.hidden = false;
    let head = name ? (name + ', tu resultado:') : 'Tu resultado:';
    let warn = unanswered ? '<div class="qcq-warn">Dejaste '+unanswered+' pregunta(s) sin responder (contadas como incorrectas).</div>' : '';
    result.innerHTML = '<span class="score">'+score+' / '+QUIZ.length+'  ('+pct+'%)</span>'+head+' '+msg+warn;
    result.scrollIntoView({behavior:'smooth', block:'nearest'});
  }

  document.getElementById('qcq-grade').addEventListener('click', grade);
  document.getElementById('qcq-reset').addEventListener('click', function(){
    render();
    document.getElementById('qcq-student').value='';
    window.scrollTo({top: document.getElementById('qc-quiz').offsetTop-80, behavior:'smooth'});
  });

  render();
})();
</script>

---

## Versión para calificación (Google Forms)

Si vas a tomar el quiz **para nota**, usa el enlace que compartió el profesor. Esa versión se califica sola y registra tu nombre y tu puntaje.

> Profesor: el enlace se pega aquí una vez creado el formulario. (Instrucciones en el archivo `quiz_google_form.gs` entregado con el sitio.)
