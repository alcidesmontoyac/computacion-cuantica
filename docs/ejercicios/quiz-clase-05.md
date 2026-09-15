# Quiz — Clase 5: álgebra lineal y notación de Dirac

<span class="qc-badge">Autoevaluación</span> <span class="qc-badge teal">20 preguntas</span> <span class="qc-badge gold">Se califica solo</span>

Pon a prueba lo que aprendiste en la Clase 5 (Capítulo 2, diapositivas 11–24): álgebra lineal, notación de Dirac, producto interno, proyectores y autovalores. Responde y pulsa **Calificar** para ver tu puntaje y la explicación de cada pregunta. Puedes repetirlo las veces que quieras.

!!! tip "Recordatorio"
    Matrices de Pauli: σx = [[0,1],[1,0]], σz = [[1,0],[0,−1]]. Base: \|0⟩=[1,0]ᵀ, \|1⟩=[0,1]ᵀ, \|+⟩=(1/√2)(\|0⟩+\|1⟩). En los ejercicios de cálculo, escribe el número con **punto** decimal (por ejemplo `0.5`).

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
    {t:MC, stem:"El adjunto A† (conjugado transpuesto) se obtiene:",
     options:["transponiendo únicamente","conjugando únicamente cada entrada","conjugando y transponiendo (las dos operaciones)","invirtiendo la matriz"],
     correct:2, expl:"A† = (A*)ᵀ: se conjuga cada entrada y se transpone."},
    {t:MC, stem:"¿A qué es igual (AB)†?",
     options:["A†B†","B†A†","(AB)*","A†B"], correct:1,
     expl:"El adjunto invierte el orden del producto: (AB)† = B†A†."},
    {t:MC, stem:"En general, para dos matrices, AB y BA:",
     options:["son siempre iguales","no son necesariamente iguales (el producto no conmuta)","son siempre la matriz cero","son siempre la identidad"],
     correct:1, expl:"El producto de matrices no es conmutativo en general."},
    {t:MC, stem:"El bra ⟨ψ| correspondiente al ket |ψ⟩ es:",
     options:["la transpuesta de |ψ⟩","el complejo conjugado de |ψ⟩ solamente","el conjugado transpuesto (adjunto) de |ψ⟩","el inverso de |ψ⟩"],
     correct:2, expl:"El bra es el adjunto del ket: ⟨ψ| = |ψ⟩†."},
    {t:MC, stem:"En la convención de la física, el producto interno ⟨u|v⟩ es:",
     options:["lineal en ambos argumentos","lineal en el ket y antilineal en el bra","antilineal en ambos argumentos","antilineal en el ket y lineal en el bra"],
     correct:1, expl:"Producto sesquilineal: lineal en el ket (2.º argumento), antilineal en el bra (1.º)."},
    {t:MC, stem:"Dos vectores |u⟩ y |v⟩ son ortogonales si:",
     options:["⟨u|v⟩ = 1","⟨u|v⟩ = 0","|u⟩ = |v⟩","su norma es 1"],
     correct:1, expl:"Ortogonalidad ⇔ producto interno nulo."},
    {t:MC, stem:"La relación de completitud de una base ortonormal {|eᵢ⟩} es:",
     options:["Σᵢ |eᵢ⟩⟨eᵢ| = I","Σᵢ ⟨eᵢ|eᵢ⟩ = 0","Σᵢ |eᵢ⟩ = 1","⟨eᵢ|eⱼ⟩ = 1 para todo i, j"],
     correct:0, expl:"La suma de los proyectores de la base da la identidad."},
    {t:MC, stem:"El producto externo |φ⟩⟨ψ| es:",
     options:["un número complejo","un escalar real","un operador (una matriz)","un bra"],
     correct:2, expl:"Columna × fila = matriz: es un operador."},
    {t:MC, stem:"Un operador de proyección P satisface la idempotencia:",
     options:["P² = I","P² = P","P† = −P","P = 0"], correct:1,
     expl:"Idempotencia: aplicar el proyector dos veces da lo mismo que una vez."},
    {t:MC, stem:"Los autovalores de una matriz A se obtienen como las raíces de:",
     options:["det(A − λI) = 0","tr(A) = 0","A|v⟩ = 0 con |v⟩ ≠ 0","det(A) = 0"],
     correct:0, expl:"El polinomio característico det(A−λI)=0 da los autovalores."},
    {t:NUM, stem:"Calcula la traza tr(σx).", answer:0,
     expl:"σx=[[0,1],[1,0]]: la diagonal es 0+0 = 0."},
    {t:NUM, stem:"Calcula el determinante det(σx).", answer:-1,
     expl:"det[[0,1],[1,0]] = 0·0 − 1·1 = −1."},
    {t:NUM, stem:"Con |ψ⟩=(1/√2)(|0⟩+|1⟩) y |φ⟩=(1/√2)(|0⟩−|1⟩), calcula ⟨φ|ψ⟩.", answer:0,
     expl:"|ψ⟩=|+⟩ y |φ⟩=|−⟩ son ortogonales: ⟨−|+⟩ = 0."},
    {t:NUM, stem:"¿Cuánto vale ⟨0|0⟩?", answer:1,
     expl:"La base es ortonormal: ⟨0|0⟩ = 1."},
    {t:NUM, stem:"Para |ψ⟩=3|0⟩+4|1⟩ (sin normalizar), calcula ⟨ψ|ψ⟩.", answer:25,
     expl:"|3|²+|4|² = 9+16 = 25."},
    {t:NUM, stem:"Para ese mismo |ψ⟩, ¿cuál es su norma ‖ψ‖?", answer:5,
     expl:"‖ψ‖ = √25 = 5."},
    {t:NUM, stem:"Calcula la probabilidad |⟨0|+⟩|² de medir |0⟩ en el estado |+⟩.", answer:0.5,
     expl:"⟨0|+⟩ = 1/√2 ⇒ |1/√2|² = 0.5."},
    {t:NUM, stem:"La matriz σz tiene dos autovalores. Escribe el menor.", answer:-1,
     expl:"Autovalores de σz: +1 y −1; el menor es −1."},
    {t:NUM, stem:"Para A = [[2,0],[0,3]], escribe el mayor autovalor.", answer:3,
     expl:"Matriz diagonal: sus autovalores son 2 y 3."},
    {t:NUM, stem:"Calcula la traza del proyector |0⟩⟨0|.", answer:1,
     expl:"|0⟩⟨0| = [[1,0],[0,0]]: traza = 1."}
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
    let cls = 'low', msg = 'Repasa la clase y vuelve a intentarlo: enfócate en la notación de Dirac y en el producto interno.';
    if (score >= 16){ cls='good'; msg='¡Excelente! Dominas el álgebra lineal y la notación de Dirac de la Clase 5.'; }
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
