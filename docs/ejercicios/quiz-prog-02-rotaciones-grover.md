# Quiz de programación 2 — rotaciones, interferencia y Grover

<span class="qc-badge">Autoevaluación</span> <span class="qc-badge teal">20 preguntas</span> <span class="qc-badge gold">Compila y responde</span>

Segunda parte: **compuertas de rotación** (RY, RZ), **interferencia** y el algoritmo de **Grover** de dos qubits, siguiendo las lecciones de qollab. Ejecuta cada programa en Colab/Qollab (con `import math`) y responde con lo que observas.

!!! tip "Cómo responder"
    Recuerda: RY(θ)|0⟩ da P(1)=sin²(θ/2); RZ solo cambia la fase (invisible al medir en Z). Escribe las probabilidades con **punto** decimal (0.25, 0.5, 0.75).

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
    {"t": "mc", "stem": "La compuerta <code>qc.ry(theta, 0)</code> sobre |0⟩ produce:", "options": ["cos(θ/2)|0⟩ + sin(θ/2)|1⟩", "e^{iθ}|0⟩", "siempre |1⟩", "una medición"], "correct": 0, "expl": "RY(θ)|0⟩ = cos(θ/2)|0⟩ + sin(θ/2)|1⟩, así que P(1)=sin²(θ/2)."},
    {"t": "num", "stem": "Ejecuta con θ=π y estima P(medir 1):<pre><code>qc = QuantumCircuit(1,1)\nqc.ry(math.pi, 0)\nqc.measure(0,0)</code></pre>", "answer": 1, "expl": "RY(π)|0⟩ = |1⟩ (sin²(π/2)=1): siempre mides 1."},
    {"t": "num", "stem": "Con θ=π/2, estima P(medir 1) de <code>qc.ry(math.pi/2, 0)</code>:", "answer": 0.5, "expl": "P(1)=sin²(π/4)=0.5: equivale a una superposición uniforme."},
    {"t": "num", "stem": "Con θ=π/3, estima P(medir 1) de <code>qc.ry(math.pi/3, 0)</code>:", "answer": 0.25, "expl": "P(1)=sin²(π/6)=(1/2)²=0.25."},
    {"t": "num", "stem": "Con θ=2π/3, ¿cuál es P(medir 1) de <code>qc.ry(2*math.pi/3, 0)</code>?", "answer": 0.75, "expl": "P(1)=sin²(π/3)=(√3/2)²=0.75."},
    {"t": "mc", "stem": "Aplicas <code>qc.rz(phi, 0)</code> a |0⟩ y mides en la base Z. ¿Qué observas?", "options": ["P(0) cambia con phi", "P(0)=1 siempre (RZ no cambia la medición en Z)", "siempre mides 1", "el qubit se entrelaza"], "correct": 1, "expl": "RZ solo agrega fase; sobre |0⟩ no cambia la probabilidad en la base Z: P(0)=1."},
    {"t": "num", "stem": "Estima P(medir 0). RZ sobre |0⟩ no cambia la medición en Z:<pre><code>qc = QuantumCircuit(1,1)\nqc.rz(math.pi/4, 0)\nqc.measure(0,0)</code></pre>", "answer": 1, "expl": "RZ|0⟩ = e^{-iφ/2}|0⟩: fase global, P(0)=1."},
    {"t": "num", "stem": "Interferencia: ejecuta y da P(medir 0). ¿Cuánto es?<pre><code>qc = QuantumCircuit(1,1)\nqc.h(0)\nqc.rz(math.pi, 0)\nqc.h(0)\nqc.measure(0,0)</code></pre>", "answer": 0, "expl": "H·RZ(π)·H = X (salvo fase): |0⟩→|1⟩, así que P(0)=0. La fase se volvió visible por interferencia."},
    {"t": "num", "stem": "Ahora con fase 0 en lugar de π: P(medir 0) de H·RZ(0)·H sobre |0⟩:", "answer": 1, "expl": "Sin fase, H·H=I: regresas a |0⟩ y P(0)=1. Comparar con la anterior muestra la interferencia."},
    {"t": "mc", "stem": "En el algoritmo de <b>Grover</b> de 2 qubits (4 estados), ¿cuántas iteraciones bastan para hallar el elemento marcado con probabilidad ≈1?", "options": ["0", "1", "4", "16"], "correct": 1, "expl": "Para N=4, la fórmula ⌊π/4·√N⌋ da 1 iteración: encuentra el marcado con certeza."},
    {"t": "num", "stem": "Grover de 2 qubits, 1 iteración: ¿cuál es (idealmente) la probabilidad de medir el estado marcado?", "answer": 1, "expl": "Con N=4 y 1 iteración, Grover alcanza probabilidad 1 (caso exacto)."},
    {"t": "mc", "stem": "¿Por qué Grover logra una ventaja frente a la búsqueda clásica?", "options": ["mide más rápido", "usa interferencia para amplificar la amplitud del estado marcado", "copia el estado", "usa más bits clásicos"], "correct": 1, "expl": "La difusión de Grover amplifica por interferencia la amplitud correcta y cancela las demás."},
    {"t": "num", "stem": "Número de estados de la base para el espacio de búsqueda de Grover con 2 qubits (N):", "answer": 4, "expl": "N = 2² = 4 estados (00,01,10,11)."},
    {"t": "num", "stem": "¿Qué ángulo θ (en radianes) hace que <code>qc.ry(theta,0)</code> lleve |0⟩ exactamente a |1⟩? Escribe el valor de π como 3.14159.", "answer": 3.14159, "expl": "RY(π)|0⟩=|1⟩; π≈3.14159."},
    {"t": "mc", "stem": "Para obtener P(1)=0.5 con una sola rotación RY sobre |0⟩, usas θ igual a:", "options": ["0", "π/2", "π", "2π"], "correct": 1, "expl": "sin²(θ/2)=0.5 ⇒ θ/2=π/4 ⇒ θ=π/2."},
    {"t": "num", "stem": "Estima P(medir 1) de dos rotaciones seguidas RY(π/2)·RY(π/2) sobre |0⟩:", "answer": 1, "expl": "RY se suma: RY(π/2)·RY(π/2)=RY(π), que da |1⟩ ⇒ P(1)=1."},
    {"t": "mc", "stem": "La visualización en la <b>esfera de Bloch</b> del estado tras <code>qc.ry(math.pi/2,0)</code> apunta hacia:", "options": ["el polo norte (|0⟩)", "el ecuador", "el polo sur (|1⟩)", "fuera de la esfera"], "correct": 1, "expl": "RY(π/2) lleva |0⟩ al ecuador (superposición uniforme, tipo |+⟩)."},
    {"t": "num", "stem": "Estima P(medir 1) de <code>qc.ry(0, 0)</code> (rotación nula) sobre |0⟩:", "answer": 0, "expl": "θ=0 no hace nada: el qubit queda en |0⟩ y P(1)=0."},
    {"t": "mc", "stem": "La diferencia clave entre RZ y RY al medir en la base computacional (Z) es:", "options": ["ninguna", "RY cambia las probabilidades; RZ solo la fase (invisible en Z)", "RZ cambia las probabilidades; RY solo la fase", "ambas colapsan el estado"], "correct": 1, "expl": "RY rota entre |0⟩ y |1⟩ (cambia P); RZ solo agrega fase, invisible al medir en Z."},
    {"t": "num", "stem": "Con θ=π, ¿cuánto vale sin²(θ/2) = P(1) de RY(θ)|0⟩?", "answer": 1, "expl": "sin²(π/2)=1."}
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
    let cls = 'low', msg = 'Vuelve a las lecciones de rotaciones e interferencia en qollab y ejecuta cada RY/RZ para ver el efecto.';
    if (score >= 16){ cls='good'; msg='¡Muy bien! Dominas las rotaciones, la interferencia y la idea de Grover.'; }
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
