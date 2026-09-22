# Quiz — información en la mecánica cuántica

<span class="qc-badge">Autoevaluación</span> <span class="qc-badge teal">20 preguntas</span> <span class="qc-badge gold">Se califica solo</span>

Pon a prueba el Capítulo 4: qubits y esfera de Bloch, estados separables y entrelazados, la paradoja EPR, las desigualdades de Bell (CHSH), la cota de Tsirelson, los teoremas de no-clonación y no-borrado, fidelidad y valor esperado. Responde y pulsa **Calificar** para ver tu puntaje y la explicación de cada pregunta.

!!! tip "Recordatorio"
    Esfera de Bloch: \|ψ⟩ = cos(θ/2)\|0⟩ + e^{iφ} sin(θ/2)\|1⟩. Test de separabilidad para \|ψ⟩ = a\|00⟩+b\|01⟩+c\|10⟩+d\|11⟩: es **separable** ⟺ ad = bc; la **concurrencia** es C = 2\|ad − bc\|. Bell \|Φ⁺⟩=(1/√2)(\|00⟩+\|11⟩). En los ejercicios de cálculo escribe el número con **punto** decimal.

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
    {t:MC, stem:"Un qubit se distingue de un bit clásico porque puede estar en:",
     options:["solo 0 o solo 1","una superposición α|0⟩+β|1⟩","exactamente tres estados","cualquier número entero"], correct:1,
     expl:"El qubit admite superposiciones coherentes α|0⟩+β|1⟩ con |α|²+|β|²=1; el bit clásico es un caso particular (α o β nulo)."},
    {t:MC, stem:"La esfera de Bloch representa:",
     options:["los estados mezcla de dos qubits","los estados puros de un qubit como puntos de su superficie","la energía del sistema","el espectro de un observable"], correct:1,
     expl:"Cada estado puro de un qubit es un punto de la superficie (|r⃗|=1), parametrizado por los ángulos (θ,φ)."},
    {t:MC, stem:"Un estado de dos qubits |ψ⟩=a|00⟩+b|01⟩+c|10⟩+d|11⟩ es separable si y solo si:",
     options:["a=d","ad = bc","a+d=b+c","siempre lo es"], correct:1,
     expl:"El test ad=bc equivale a factorizar |ψ⟩=|φ₁⟩⊗|φ₂⟩. Si ad≠bc el estado está entrelazado."},
    {t:MC, stem:"El estado de Bell |Φ⁺⟩=(1/√2)(|00⟩+|11⟩) es:",
     options:["separable","máximamente entrelazado","un estado clásico","no normalizado"], correct:1,
     expl:"ad=½ pero bc=0, así que ad≠bc: no factoriza. Es uno de los cuatro estados de Bell, máximamente entrelazados."},
    {t:MC, stem:"Einstein, Podolsky y Rosen (1935) argumentaban que la mecánica cuántica era:",
     options:["completa","incompleta","no lineal","irreversible"], correct:1,
     expl:"EPR proponían que faltaban 'variables ocultas': la teoría sería incompleta. Bell mostró después cómo poner esa idea a prueba."},
    {t:MC, stem:"Las desigualdades de Bell se derivan suponiendo dos hipótesis:",
     options:["linealidad y unitariedad","realismo y localidad","hermiticidad y normalización","superposición y colapso"], correct:1,
     expl:"Realismo (los valores existen antes de medir) + localidad (nada viaja más rápido que la luz) ⇒ |S|≤2."},
    {t:MC, stem:"La cota clásica (variables ocultas locales) para el parámetro CHSH es:",
     options:["|S| ≤ 1","|S| ≤ 2","|S| ≤ 2√2","|S| ≤ 4"], correct:1,
     expl:"Con realismo y localidad, |S|=|E(a,b)−E(a,b')+E(a',b)+E(a',b')| ≤ 2."},
    {t:MC, stem:"La máxima violación cuántica de la desigualdad de Bell (cota de Tsirelson) es:",
     options:["|S| = 2","|S| = 2√2","|S| = 4","|S| = ∞"], correct:1,
     expl:"La mecánica cuántica alcanza |S|=2√2≈2.83 > 2 con el estado |Φ⁺⟩ y ángulos 0°,45°,90°,135°."},
    {t:MC, stem:"El teorema de no-clonación es consecuencia directa de:",
     options:["la medición","la linealidad (y unitariedad) de la mecánica cuántica","la decoherencia","el principio de incertidumbre"], correct:1,
     expl:"Una U que clone dos estados exige ⟨ψ|φ⟩=⟨ψ|φ⟩², luego ⟨ψ|φ⟩∈{0,1}: solo se pueden clonar estados ortogonales, no superposiciones arbitrarias."},
    {t:MC, stem:"La decoherencia es:",
     options:["una compuerta cuántica","el paso de comportamiento cuántico a clásico por interacción con el entorno","la copia de un estado","la medición proyectiva ideal"], correct:1,
     expl:"Al acoplarse al entorno, las superposiciones pierden coherencia y el sistema se comporta clásicamente. Es el enemigo a vencer en el hardware."},
    {t:MC, stem:"El teorema de no-borrado (no-deleting, 2000) afirma que:",
     options:["no se puede medir dos veces","no se puede borrar una de dos copias de un estado cuántico arbitrario","no se puede entrelazar","no se puede rotar un qubit"], correct:1,
     expl:"Es el dual de la no-clonación: dadas dos copias, no existe operación que borre una y deje el sistema en un estado estándar. La información cuántica se conserva."},
    {t:MC, stem:"El teletransporte cuántico NO viola el teorema de no-clonación porque:",
     options:["crea dos copias a la vez","destruye el estado original en el proceso","usa solo bits clásicos","no transmite el estado"], correct:1,
     expl:"La medición de Bell destruye el original; el estado 'reaparece' en el destino. Nunca coexisten dos copias."},

    {t:NUM, stem:"Para |ψ⟩=½|0⟩+(√3/2)e^{iπ/3}|1⟩, ¿cuánto vale el ángulo polar θ (en grados) en la esfera de Bloch?", answer:120,
     expl:"cos(θ/2)=½ ⇒ θ/2=60° ⇒ θ=120°."},
    {t:NUM, stem:"En el mismo estado, ¿cuánto vale el ángulo azimutal φ (en grados)?", answer:60,
     expl:"La fase es e^{iφ}=e^{iπ/3}, así que φ=π/3=60°."},
    {t:NUM, stem:"Concurrencia C=2|ad−bc| del estado de Bell |Φ⁺⟩=(1/√2)(|00⟩+|11⟩):", answer:1,
     expl:"a=d=1/√2, b=c=0 ⇒ C=2·|½−0|=1: entrelazamiento máximo."},
    {t:NUM, stem:"Para |ψ⟩=½|00⟩+½|01⟩+½|10⟩+½|11⟩, calcula ad−bc.", answer:0,
     expl:"ad=¼ y bc=¼ ⇒ ad−bc=0: el estado es separable (=|+⟩⊗|+⟩)."},
    {t:NUM, stem:"Fidelidad F=|⟨ψ|φ⟩|² entre dos estados ortogonales:", answer:0,
     expl:"Si ⟨ψ|φ⟩=0 entonces F=0 (estados perfectamente distinguibles)."},
    {t:NUM, stem:"Probabilidad de medir 11 en el estado |Φ⁺⟩=(1/√2)(|00⟩+|11⟩):", answer:0.5,
     expl:"|1/√2|²=0.5 (y 0.5 para 00; nunca 01 ni 10)."},
    {t:NUM, stem:"¿Cuál es la dimensión del espacio de Hilbert de 2 qubits?", answer:4,
     expl:"dim = 2² = 4."},
    {t:NUM, stem:"Calcula el valor esperado ⟨σz⟩ en el estado |0⟩.", answer:1,
     expl:"σz|0⟩=+1|0⟩ ⇒ ⟨0|σz|0⟩=+1. El valor esperado es real porque σz es hermítico."}
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
    let cls = 'low', msg = 'Repasa el Capítulo 4: enfócate en entrelazamiento, desigualdades de Bell y no-clonación.';
    if (score >= 16){ cls='good'; msg='¡Excelente! Dominas la información cuántica: qubits, entrelazamiento, Bell y no-clonación.'; }
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
