# Quiz de programación 1 — Qiskit: circuitos, superposición y Bell

<span class="qc-badge">Autoevaluación</span> <span class="qc-badge teal">20 preguntas</span> <span class="qc-badge gold">Compila y responde</span>

Estos ejercicios se resuelven **programando**: abre Google Colab (o Qollab) con **Qiskit**, escribe o ejecuta cada programa y usa el resultado para responder. Cubre circuitos, superposición, medición y entrelazamiento (Práctica 1 y las primeras lecciones de qollab). Responde y pulsa **Calificar** para ver tu puntaje y la explicación de cada pregunta.

!!! tip "Cómo responder"
    Ejecuta cada fragmento en Colab. En las preguntas de cálculo escribe la **probabilidad** como fracción (por ejemplo 0.5) con **punto** decimal; en las de conteo, el número entero. Prepara el entorno con `!pip install qiskit qiskit-aer` y `from qiskit import QuantumCircuit`.

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
    {"t": "mc", "stem": "En Qiskit, ¿qué compuerta pone un qubit en superposición uniforme?", "options": ["qc.x(0)", "qc.h(0)", "qc.z(0)", "qc.measure(0,0)"], "correct": 1, "expl": "La Hadamard <code>qc.h(0)</code> lleva |0⟩ a (|0⟩+|1⟩)/√2: 50 % y 50 % al medir."},
    {"t": "mc", "stem": "Para <b>entrelazar</b> dos qubits en un estado de Bell, después de <code>qc.h(0)</code> aplicas:", "options": ["qc.h(1)", "qc.cx(0,1)", "qc.x(1)", "qc.measure_all()"], "correct": 1, "expl": "<code>qc.cx(0,1)</code> (CNOT con control 0, objetivo 1) crea |Φ⁺⟩=(|00⟩+|11⟩)/√2."},
    {"t": "num", "stem": "Ejecuta y estima la probabilidad de medir <code>0</code> (fracción, p. ej. 0.5):<pre><code>qc = QuantumCircuit(1,1)\nqc.h(0)\nqc.measure(0,0)\n# run, shots=1000</code></pre>", "answer": 0.5, "expl": "Una Hadamard sobre |0⟩ da P(0)=|1/√2|²=0.5."},
    {"t": "num", "stem": "¿Qué valor mides SIEMPRE (0 o 1) con este programa?<pre><code>qc = QuantumCircuit(1,1)\nqc.x(0)\nqc.measure(0,0)</code></pre>", "answer": 1, "expl": "La compuerta X invierte |0⟩→|1⟩, así que siempre mides 1."},
    {"t": "mc", "stem": "¿Qué hace <code>qc.measure_all()</code>?", "options": ["mide solo el qubit 0", "mide todos los qubits (agrega registro clásico)", "borra el circuito", "aplica Hadamard a todos"], "correct": 1, "expl": "Añade un registro clásico y mide todos los qubits del circuito."},
    {"t": "num", "stem": "Para el estado de Bell |Φ⁺⟩ (h(0)+cx(0,1)), ¿cuál es la probabilidad de medir <code>01</code>?", "answer": 0, "expl": "|Φ⁺⟩ solo tiene 00 y 11; P(01)=P(10)=0."},
    {"t": "num", "stem": "¿Cuántas amplitudes complejas tiene el <code>Statevector</code> de un circuito de 3 qubits?", "answer": 8, "expl": "2³ = 8 amplitudes."},
    {"t": "num", "stem": "Ejecuta y da P(medir 0). ¿Qué obtienes?<pre><code>qc = QuantumCircuit(1,1)\nqc.h(0)\nqc.h(0)\nqc.measure(0,0)</code></pre>", "answer": 1, "expl": "H·H = I: el qubit regresa a |0⟩, así que P(0)=1."},
    {"t": "mc", "stem": "Las <b>claves</b> del diccionario <code>counts</code> que devuelve <code>result().get_counts()</code> son:", "options": ["números enteros", "cadenas de bits como '00' y '11'", "objetos QuantumCircuit", "probabilidades"], "correct": 1, "expl": "Son cadenas de bits (bitstrings), p. ej. {'00': 512, '11': 488}."},
    {"t": "num", "stem": "Ejecuta y estima P(medir '11'):<pre><code>qc = QuantumCircuit(2)\nqc.h(0)\nqc.h(1)\nqc.measure_all()</code></pre>", "answer": 0.25, "expl": "Dos Hadamard independientes: cada cadena (00,01,10,11) tiene probabilidad 1/4."},
    {"t": "mc", "stem": "¿Qué operación de un circuito NO es reversible (no es unitaria)?", "options": ["la Hadamard", "la CNOT", "la medición", "la X"], "correct": 2, "expl": "La medición colapsa el estado: es la única operación irreversible."},
    {"t": "num", "stem": "Mides siempre la cadena '11' con este programa. Como entero (11 en binario), ¿qué número es?<pre><code>qc = QuantumCircuit(2)\nqc.x(0)\nqc.cx(0,1)\nqc.measure_all()</code></pre>", "answer": 3, "expl": "X pone el control en 1; la CNOT invierte el objetivo → '11' = 3 en decimal."},
    {"t": "num", "stem": "¿Cuántos resultados DISTINTOS aparecen (con probabilidad no nula) al medir |Φ⁺⟩=h(0)+cx(0,1)?", "answer": 2, "expl": "Solo 00 y 11: dos resultados."},
    {"t": "mc", "stem": "En <code>qc = QuantumCircuit(3)</code>, ¿cuántos qubits tiene el circuito?", "options": ["1", "2", "3", "8"], "correct": 2, "expl": "El argumento es el número de qubits: 3."},
    {"t": "num", "stem": "Ejecuta y da P(medir 1). ¿Cuánto es?<pre><code>qc = QuantumCircuit(1,1)\nqc.h(0)\nqc.z(0)\nqc.measure(0,0)</code></pre>", "answer": 0.5, "expl": "La Z solo cambia la fase; medido en la base Z, la Hadamard sigue dando 50/50 → P(1)=0.5."},
    {"t": "mc", "stem": "El número de <b>shots</b> en <code>run(qc, shots=1000)</code> controla:", "options": ["la cantidad de qubits", "cuántas veces se repite la medición", "la profundidad del circuito", "el número de compuertas"], "correct": 1, "expl": "Los shots son las repeticiones; más shots ⇒ estadística más precisa de los conteos."},
    {"t": "num", "stem": "Para |Φ⁺⟩, si sumas las probabilidades de 00 y 11, ¿cuánto da?", "answer": 1, "expl": "0.5 + 0.5 = 1: la probabilidad total siempre es 1."},
    {"t": "mc", "stem": "¿Cuál es el orden CORRECTO para construir y medir un Bell pair en Qiskit?", "options": ["qc.cx(0,1); qc.h(0)", "qc.h(0); qc.cx(0,1); qc.measure_all()", "qc.measure_all(); qc.h(0)", "qc.x(0); qc.x(1)"], "correct": 1, "expl": "Primero superposición (H), luego entrelazar (CNOT) y al final medir."},
    {"t": "num", "stem": "Ejecuta y estima P(medir '00'):<pre><code>qc = QuantumCircuit(2)\nqc.h(0)\nqc.cx(0,1)\nqc.measure_all()</code></pre>", "answer": 0.5, "expl": "Bell |Φ⁺⟩: P(00)=P(11)=0.5."},
    {"t": "num", "stem": "¿Cuántas compuertas de dos qubits (CNOT) hay en este programa?<pre><code>qc = QuantumCircuit(3)\nqc.h(0)\nqc.cx(0,1)\nqc.cx(1,2)\nqc.measure_all()</code></pre>", "answer": 2, "expl": "Dos <code>cx</code>: construye un estado GHZ de 3 qubits."}
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
    let cls = 'low', msg = 'Repasa la Práctica 1 y las primeras lecciones de qollab: construye, mide y ejecuta los circuitos tú mismo.';
    if (score >= 16){ cls='good'; msg='¡Excelente! Programas circuitos de Qiskit con soltura: superposición, medición y entrelazamiento.'; }
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
