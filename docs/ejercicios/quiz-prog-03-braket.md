# Quiz de programación 3 — AWS Braket y simulación

<span class="qc-badge">Autoevaluación</span> <span class="qc-badge teal">20 preguntas</span> <span class="qc-badge gold">Compila y responde</span>

Tercera parte: **AWS Braket**. Ejecuta los circuitos con el **simulador local** (gratis, sin AWS) del notebook de la Práctica 3 y responde. Cubre superposición, Bell, GHZ, conteos y buenas prácticas.

!!! tip "Cómo responder"
    Prepara el entorno con `!pip install amazon-braket-sdk -q` y `from braket.circuits import Circuit` / `from braket.devices import LocalSimulator`. Probabilidades con **punto** decimal; conteos como enteros. **Nunca subas tus credenciales de AWS a GitHub.**

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
.qc-quiz{--v:#0f766e;--t:#0e7490;--ok:#15803d;--no:#b91c1c;--line:rgba(0,0,0,.12);
  margin:1.2rem 0;font-size:.92rem;}
.qc-quiz .qcq-head{margin:.4rem 0 1rem;}
.qc-quiz .qcq-name{display:block;font-weight:600;font-size:.82rem;}
.qc-quiz .qcq-name input{display:block;margin-top:.3rem;padding:.5rem .6rem;width:min(360px,100%);
  border:1px solid var(--line);border-radius:8px;font-size:.9rem;background:var(--md-default-bg-color,#fff);color:inherit;}
.qcq-q{border:1px solid var(--line);border-left:4px solid var(--v);border-radius:10px;
  padding:.9rem 1rem;margin:.8rem 0;background:rgba(15,118,110,.03);}
.qcq-q .qcq-num{font-weight:800;color:var(--v);margin-right:.35rem;}
.qcq-q .qcq-stem{font-weight:600;margin-bottom:.6rem;line-height:1.45;}
.qcq-q pre{background:#0b2027;color:#e6f4f1;border-radius:8px;padding:.7rem .9rem;overflow:auto;
  font-size:.82rem;line-height:1.4;margin:.5rem 0;font-weight:400;}
.qcq-q pre code{background:none;color:inherit;padding:0;font-size:inherit;white-space:pre;}
.qcq-opt{display:flex;gap:.55rem;align-items:flex-start;padding:.4rem .55rem;border-radius:8px;
  cursor:pointer;margin:.2rem 0;border:1px solid transparent;transition:background .15s;}
.qcq-opt:hover{background:rgba(14,116,144,.07);}
.qcq-opt input{margin-top:.2rem;flex:0 0 auto;}
.qcq-opt.correct{background:rgba(21,128,61,.12);border-color:rgba(21,128,61,.4);}
.qcq-opt.wrong{background:rgba(185,28,28,.10);border-color:rgba(185,28,28,.4);}
.qcq-numin{padding:.45rem .6rem;border:1px solid var(--line);border-radius:8px;font-size:.95rem;
  width:180px;max-width:60%;background:var(--md-default-bg-color,#fff);color:inherit;}
.qcq-numin.correct{border-color:var(--ok);background:rgba(21,128,61,.10);}
.qcq-numin.wrong{border-color:var(--no);background:rgba(185,28,28,.08);}
.qcq-mark{font-weight:800;margin-left:.2rem;}
.qcq-mark.ok{color:var(--ok);}
.qcq-mark.no{color:var(--no);}
.qcq-expl{margin:.55rem 0 .1rem;padding:.55rem .7rem;border-radius:8px;font-size:.85rem;
  background:rgba(14,116,144,.09);border-left:3px solid var(--t);line-height:1.5;}
.qcq-expl b{color:var(--t);}
.qcq-actions{display:flex;gap:.6rem;margin:1.1rem 0;flex-wrap:wrap;}
.qcq-btn{padding:.6rem 1.2rem;border-radius:9px;font-weight:700;font-size:.9rem;border:0;cursor:pointer;}
.qcq-btn.primary{background:var(--v);color:#fff;}
.qcq-btn.ghost{background:transparent;border:1px solid var(--line);color:inherit;}
.qcq-btn:hover{filter:brightness(1.06);}
.qcq-result{padding:1rem 1.2rem;border-radius:12px;font-size:1rem;font-weight:600;line-height:1.5;border:1px solid var(--line);}
.qcq-result .score{font-size:1.8rem;font-weight:800;display:block;margin-bottom:.2rem;}
.qcq-result.good{background:rgba(21,128,61,.10);border-color:rgba(21,128,61,.4);}
.qcq-result.mid{background:rgba(207,169,78,.14);border-color:rgba(207,169,78,.5);}
.qcq-result.low{background:rgba(185,28,28,.09);border-color:rgba(185,28,28,.4);}
.qcq-warn{color:var(--no);font-weight:700;margin:.4rem 0;}
</style>

<script>
(function(){
  const MC = "mc", NUM = "num";
  const QUIZ = [
    {"t": "mc", "stem": "En el SDK de Amazon Braket, para correr GRATIS sin cuenta de AWS usas:", "options": ["AwsDevice(SV1)", "LocalSimulator()", "un QPU de IonQ", "DM1"], "correct": 1, "expl": "<code>LocalSimulator()</code> corre en tu propia máquina (o en Colab), sin costo ni credenciales."},
    {"t": "mc", "stem": "¿Qué construye este código?<pre><code>Circuit().h(0).cnot(0,1)</code></pre>", "options": ["dos qubits independientes", "un estado de Bell (entrelazado)", "un estado GHZ de 3 qubits", "una medición"], "correct": 1, "expl": "H en el qubit 0 y CNOT(0,1) crean el par de Bell (|00⟩+|11⟩)/√2."},
    {"t": "num", "stem": "Ejecuta y estima P(medir '0'). ¿Cuánto es?<pre><code>circ = Circuit().h(0)\ncounts = LocalSimulator().run(circ, shots=1000).result().measurement_counts\n# fracción de '0'</code></pre>", "answer": 0.5, "expl": "Una Hadamard: P(0)=0.5."},
    {"t": "num", "stem": "Para <code>Circuit().h(0).cnot(0,1)</code>, ¿cuál es la probabilidad de medir '10'?", "answer": 0, "expl": "El Bell pair solo da '00' y '11'; P('10')=0."},
    {"t": "mc", "stem": "¿Qué atributo del resultado da el diccionario de conteos en Braket?", "options": [".counts", ".measurement_counts", ".get_counts()", ".probabilities"], "correct": 1, "expl": "En Braket se usa <code>result().measurement_counts</code>."},
    {"t": "num", "stem": "Estado GHZ: estima P(medir '111'). ¿Cuánto es?<pre><code>ghz = Circuit().h(0).cnot(0,1).cnot(1,2)\nLocalSimulator().run(ghz, shots=1000).result().measurement_counts</code></pre>", "answer": 0.5, "expl": "GHZ=(|000⟩+|111⟩)/√2: P('000')=P('111')=0.5."},
    {"t": "num", "stem": "Para ese mismo GHZ, ¿cuál es la probabilidad de medir '101'?", "answer": 0, "expl": "El GHZ solo tiene '000' y '111'; cualquier otra cadena tiene probabilidad 0."},
    {"t": "num", "stem": "¿Cuántos qubits usa el circuito <code>Circuit().h(0).cnot(0,1).cnot(1,2)</code>?", "answer": 3, "expl": "Toca los qubits 0, 1 y 2: tres qubits."},
    {"t": "num", "stem": "¿Qué cadena mides SIEMPRE con este circuito? Escríbela como entero (binario→decimal):<pre><code>circ = Circuit().x(0)\nLocalSimulator().run(circ, shots=100).result().measurement_counts</code></pre>", "answer": 1, "expl": "X sobre el qubit 0 da '1' siempre → entero 1."},
    {"t": "mc", "stem": "¿Cuál de estas opciones tiene COSTO y requiere cuenta de AWS?", "options": ["LocalSimulator()", "los QPU reales (IonQ, Rigetti, IQM, QuEra) y los simuladores gestionados (SV1, DM1, TN1)", "Circuit()", "measurement_counts"], "correct": 1, "expl": "Los QPU y los simuladores gestionados cobran por tarea y por shot; el LocalSimulator es gratis."},
    {"t": "num", "stem": "Estima P(medir '00') de <code>Circuit().h(0).cnot(0,1)</code>:", "answer": 0.5, "expl": "Bell pair: P('00')=0.5."},
    {"t": "mc", "stem": "El parámetro <code>shots</code> en <code>run(circ, shots=1000)</code> es:", "options": ["el número de qubits", "el número de repeticiones de la medición", "la profundidad del circuito", "el costo en dólares"], "correct": 1, "expl": "Es cuántas veces se ejecuta y mide el circuito para estimar la distribución."},
    {"t": "num", "stem": "¿Cuántos resultados distintos (probabilidad no nula) tiene un estado GHZ de 3 qubits?", "answer": 2, "expl": "Solo '000' y '111': dos resultados."},
    {"t": "mc", "stem": "¿Qué gran ventaja tiene Braket frente a un solo SDK de un fabricante?", "options": ["es más barato siempre", "corre el MISMO programa en varias plataformas (iones, superconductores, átomos neutros)", "no necesita código", "evita la medición"], "correct": 1, "expl": "Con un único SDK ejecutas el mismo circuito en IonQ, Rigetti/IQM y QuEra para comparar."},
    {"t": "num", "stem": "Dimensión del espacio de Hilbert que simula <code>Circuit().h(0).cnot(0,1).cnot(1,2)</code> (3 qubits):", "answer": 8, "expl": "2³ = 8."},
    {"t": "mc", "stem": "¿Qué NUNCA debes subir a GitHub al trabajar con Braket?", "options": ["el circuito", "tus credenciales de AWS", "los conteos", "el notebook"], "correct": 1, "expl": "Las credenciales de AWS son secretas; subirlas es un riesgo de seguridad y de costos."},
    {"t": "num", "stem": "Suma de P('000') + P('111') para el estado GHZ:", "answer": 1, "expl": "0.5 + 0.5 = 1: la probabilidad total es 1."},
    {"t": "mc", "stem": "Para lanzar el circuito a hardware/simulador gestionado de AWS usarías:", "options": ["LocalSimulator()", "AwsDevice(arn) con credenciales", "Circuit() a secas", "measurement_counts"], "correct": 1, "expl": "<code>AwsDevice(arn)</code> (p. ej. SV1 o un QPU) necesita credenciales y tiene costo."},
    {"t": "num", "stem": "Estima P(medir '000') del estado GHZ de 3 qubits:", "answer": 0.5, "expl": "P('000')=0.5 (la otra mitad es '111')."},
    {"t": "num", "stem": "¿Cuántas compuertas de un qubit (Hadamard) hay en <code>Circuit().h(0).cnot(0,1).cnot(1,2)</code>?", "answer": 1, "expl": "Una sola <code>h</code> (en el qubit 0); el resto son CNOT."}
  ];

  const form = document.getElementById('qcq-form');
  const result = document.getElementById('qcq-result');

  function render(){
    form.innerHTML = '';
    QUIZ.forEach((q, i) => {
      const box = document.createElement('div');
      box.className = 'qcq-q'; box.id = 'qcq-q' + i;
      const stem = document.createElement('div');
      stem.className = 'qcq-stem';
      stem.innerHTML = '<span class="qcq-num">' + (i+1) + '.</span>' + q.stem;
      box.appendChild(stem);
      if (q.t === MC){
        q.options.forEach((opt, j) => {
          const lab = document.createElement('label');
          lab.className = 'qcq-opt';
          lab.innerHTML = '<input type="radio" name="q'+i+'" value="'+j+'"><span>'+opt+'</span>';
          box.appendChild(lab);
        });
      } else {
        const inp = document.createElement('input');
        inp.type = 'text'; inp.className = 'qcq-numin';
        inp.setAttribute('inputmode','decimal');
        inp.id = 'num'+i; inp.placeholder = 'tu respuesta (número)';
        box.appendChild(inp);
      }
      form.appendChild(box);
    });
    result.hidden = true; result.innerHTML = '';
  }

  function grade(){
    let score = 0, unanswered = 0;
    QUIZ.forEach((q, i) => {
      const box = document.getElementById('qcq-q'+i);
      box.querySelectorAll('.qcq-expl,.qcq-mark').forEach(e => e.remove());
      let ok = false, answered = true;
      if (q.t === MC){
        const labs = box.querySelectorAll('.qcq-opt');
        labs.forEach(l => l.classList.remove('correct','wrong'));
        const picked = form.querySelector('input[name="q'+i+'"]:checked');
        const chosen = picked ? parseInt(picked.value,10) : null;
        if (chosen === null) answered = false;
        labs[q.correct].classList.add('correct');
        if (chosen !== null && chosen !== q.correct) labs[chosen].classList.add('wrong');
        ok = (chosen === q.correct);
      } else {
        const inp = document.getElementById('num'+i);
        inp.classList.remove('correct','wrong');
        const raw = (inp.value || '').trim().replace(',', '.');
        if (raw === '') answered = false;
        const val = parseFloat(raw);
        ok = answered && isFinite(val) && Math.abs(val - q.answer) < 1e-6;
        inp.classList.add(ok ? 'correct' : 'wrong');
      }
      if (!answered) unanswered++;
      if (ok) score++;
      const mark = document.createElement('span');
      mark.className = 'qcq-mark ' + (ok ? 'ok' : 'no');
      mark.textContent = ok ? '  \u2713 Correcta' : '  \u2717 Incorrecta';
      box.querySelector('.qcq-stem').appendChild(mark);
      const ex = document.createElement('div');
      ex.className = 'qcq-expl';
      ex.innerHTML = '<b>Explicaci\u00f3n:</b> ' + q.expl;
      box.appendChild(ex);
    });

    const name = (document.getElementById('qcq-student').value || '').trim();
    const pct = Math.round(score/QUIZ.length*100);
    let cls = 'low', msg = 'Repasa el notebook de la Práctica 3: corre en el simulador local Bell y GHZ y observa los conteos.';
    if (score >= 16){ cls='good'; msg='¡Excelente! Manejas el SDK de Braket: simulador local, Bell, GHZ y buenas prácticas.'; }
    else if (score >= 12){ cls='mid'; msg='Bien encaminado. Revisa con calma las que fallaste y vuelve a correr el c\u00f3digo.'; }
    result.className = 'qcq-result ' + cls; result.hidden = false;
    const head = name ? (name + ', tu resultado:') : 'Tu resultado:';
    const warn = unanswered ? '<div class="qcq-warn">Dejaste '+unanswered+' pregunta(s) sin responder (contadas como incorrectas).</div>' : '';
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
