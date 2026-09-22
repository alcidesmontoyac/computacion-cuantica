# Quiz — unitarias, producto tensorial y entrelazamiento

<span class="qc-badge">Autoevaluación</span> <span class="qc-badge teal">20 preguntas</span> <span class="qc-badge gold">Se califica solo</span>

Pon a prueba la parte final del Capítulo 2 (diapositivas 30–47): matrices hermíticas y unitarias, compuertas, no-clonación, descomposición espectral, producto tensorial, entrelazamiento, valor esperado y espacio de Hilbert. Responde y pulsa **Calificar** para ver tu puntaje y la explicación de cada pregunta.

!!! tip "Recordatorio"
    Matrices de Pauli: σz = [[1,0],[0,−1]]. Estados: \|0⟩=[1,0]ᵀ, \|1⟩=[0,1]ᵀ, \|+⟩=(1/√2)(\|0⟩+\|1⟩); Bell \|Φ⁺⟩=(1/√2)(\|00⟩+\|11⟩). En los ejercicios de cálculo escribe el número con **punto** decimal.

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
.qcq-numin{padding:.45rem .6rem;border:1px solid var(--line);border-radius:8px;font-size:.95rem;
  width:180px;max-width:60%;background:var(--md-default-bg-color,#fff);color:inherit;}
.qcq-numin.correct{border-color:var(--ok);background:rgba(21,128,61,.10);}
.qcq-numin.wrong{border-color:var(--no);background:rgba(185,28,28,.08);}
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
    {t:MC, stem:"Los autovalores de una matriz hermítica (A = A†) son siempre:",
     options:["números complejos","números reales","de módulo 1","imaginarios puros"], correct:1,
     expl:"Por eso los observables se modelan con operadores hermíticos: sus autovalores (resultados de medición) son reales."},
    {t:MC, stem:"Los autovectores de una matriz hermítica con autovalores distintos son:",
     options:["paralelos","ortogonales","iguales","nulos"], correct:1,
     expl:"Autovalores distintos ⇒ autovectores ortogonales; forman una base ortonormal de estados."},
    {t:MC, stem:"Una matriz unitaria preserva:",
     options:["solo la traza","el producto interno y la norma","solo el determinante","solo la dimensión"], correct:1,
     expl:"⟨Uψ|Uφ⟩=⟨ψ|U†U|φ⟩=⟨ψ|φ⟩: conserva productos internos y, por tanto, la probabilidad total."},
    {t:MC, stem:"Toda compuerta cuántica sobre un sistema cerrado es:",
     options:["hermítica","unitaria (reversible)","diagonal","singular"], correct:1,
     expl:"Las compuertas son unitarias: U⁻¹=U† siempre existe, así que la computación cuántica es reversible."},
    {t:MC, stem:"El teorema de no-clonación afirma que:",
     options:["no se puede medir dos veces","no se puede copiar un estado cuántico desconocido arbitrario","no se puede entrelazar","no se puede transmitir información"], correct:1,
     expl:"No hay unitaria que copie un estado arbitrario desconocido; choca con la linealidad. Es la base de la seguridad de BB84."},
    {t:MC, stem:"¿Qué matrices admiten una base ortonormal de autovectores (descomposición espectral)?",
     options:["todas las cuadradas","exactamente las normales (AA† = A†A)","solo las diagonales","solo las reales"], correct:1,
     expl:"El teorema espectral: una matriz es diagonalizable en base ortonormal si y solo si es normal (hermíticas y unitarias lo son)."},
    {t:MC, stem:"La dimensión del producto tensorial de ℂᵃ y ℂᵇ es:",
     options:["a + b","a · b","el mayor de a y b","aᵇ"], correct:1,
     expl:"Las dimensiones se multiplican: dim(ℂᵃ⊗ℂᵇ)=a·b. De ahí el crecimiento 2ⁿ para n qubits."},
    {t:MC, stem:"Un estado de dos qubits que NO se puede factorizar como |ψ⟩⊗|φ⟩ se llama:",
     options:["separable","entrelazado","clásico","normalizado"], correct:1,
     expl:"Los estados no factorizables (como los de Bell) están entrelazados: son el recurso no clásico de muchos algoritmos."},
    {t:MC, stem:"El valor esperado de un observable A en el estado |ψ⟩ es:",
     options:["⟨ψ|ψ⟩","⟨ψ|A|ψ⟩","A|ψ⟩","tr(A)"], correct:1,
     expl:"⟨A⟩=⟨ψ|A|ψ⟩: el promedio de los resultados posibles ponderado por sus probabilidades."},
    {t:MC, stem:"La evolución de un sistema cuántico cerrado es:",
     options:["irreversible","reversible, con U⁻¹ = U†","aleatoria","no lineal"], correct:1,
     expl:"La evolución unitaria es reversible; la única operación irreversible es la medición (acople al entorno)."},
    {t:NUM, stem:"¿Cuál es la dimensión del espacio de Hilbert de 3 qubits?", answer:8,
     expl:"dim = 2³ = 8."},
    {t:NUM, stem:"¿Cuántas amplitudes complejas tiene un estado genérico de 4 qubits?", answer:16,
     expl:"2⁴ = 16 amplitudes."},
    {t:NUM, stem:"Para el estado de Bell |Φ⁺⟩=(1/√2)(|00⟩+|11⟩), ¿cuál es la probabilidad de medir 00?", answer:0.5,
     expl:"|1/√2|² = 0.5 (y 0.5 para 11; nunca 01 ni 10)."},
    {t:NUM, stem:"Calcula ⟨σz⟩ en el estado |0⟩.", answer:1,
     expl:"σz|0⟩=+1|0⟩, así que ⟨0|σz|0⟩=+1."},
    {t:NUM, stem:"Calcula ⟨σz⟩ en el estado |1⟩.", answer:-1,
     expl:"σz|1⟩=−1|1⟩, así que ⟨1|σz|1⟩=−1."},
    {t:NUM, stem:"¿Cuál es el módulo de un autovalor de una matriz unitaria?", answer:1,
     expl:"Los autovalores de una unitaria son de la forma e^{iθ}: módulo 1."},
    {t:NUM, stem:"Para |ψ⟩=(√3/2)|0⟩+(1/2)|1⟩, calcula ⟨σz⟩ = |α|² − |β|².", answer:0.5,
     expl:"3/4 − 1/4 = 1/2."},
    {t:NUM, stem:"Al aplicar CNOT a |11⟩ obtienes |1x⟩. ¿Cuánto vale el segundo bit x?", answer:0,
     expl:"Control = 1 ⇒ se invierte el objetivo: |11⟩ → |10⟩, así que x = 0."},
    {t:NUM, stem:"El estado |101⟩ es un vector de la base de ℂ⁸. Contando desde 0, ¿en qué posición está su único 1?", answer:5,
     expl:"101 en binario = 5."},
    {t:NUM, stem:"Calcula la traza tr(σz).", answer:0,
     expl:"σz=[[1,0],[0,−1]]: traza = 1 + (−1) = 0."}
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
      mark.textContent = ok ? '  ✓ Correcta' : '  ✗ Incorrecta';
      box.querySelector('.qcq-stem').appendChild(mark);
      const ex = document.createElement('div');
      ex.className = 'qcq-expl';
      ex.innerHTML = '<b>Explicación:</b> ' + q.expl;
      box.appendChild(ex);
    });

    const name = (document.getElementById('qcq-student').value || '').trim();
    const pct = Math.round(score/QUIZ.length*100);
    let cls = 'low', msg = 'Repasa las diapositivas 30–47: enfócate en unitarias, producto tensorial y entrelazamiento.';
    if (score >= 16){ cls='good'; msg='¡Excelente! Dominas unitarias, producto tensorial y entrelazamiento.'; }
    else if (score >= 12){ cls='mid'; msg='Bien encaminado. Revisa las que fallaste con sus explicaciones.'; }
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
