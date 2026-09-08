# Ejercicios — Capítulo 1

<span class="qc-badge">Clases 1–3</span>

Intenta cada ejercicio antes de mirar la solución.

## Conceptos

**1.1** Explica con tus palabras la diferencia entre una **mezcla estadística clásica** (una moneda girando en el aire) y una **superposición cuántica**. ¿Por qué el vector \((1/2, 1/2)\) no es un qubit?

??? success "Solución"
    En la mezcla clásica la moneda **ya tiene** un valor definido; el vector solo describe nuestra ignorancia, y sus componentes son **probabilidades** que suman 1. En la superposición cuántica el sistema **no tiene** valor definido antes de medir, y sus componentes son **amplitudes complejas** cuyos módulos al cuadrado suman 1. El vector \((1/2,1/2)\) tiene componentes que suman 1 (probabilidades), no amplitudes con \(|\alpha|^2+|\beta|^2=1\); un qubit \(|+\rangle\) sería \(\left(\tfrac{1}{\sqrt2},\tfrac{1}{\sqrt2}\right)\).

**1.2** ¿Por qué la naturaleza necesita **números complejos** y no basta con reales? Da un ejemplo físico.

??? success "Solución"
    Por la **interferencia**. En la doble rendija las amplitudes de dos caminos pueden **cancelarse**, produciendo probabilidad cero donde el razonamiento clásico predice luz. Eso requiere amplitudes que puedan tener fase (negativas o, en general, complejas): \(P=|\psi_1+\psi_2|^2=|\psi_1|^2+|\psi_2|^2+2\,\mathrm{Re}[\psi_1^*\psi_2]\), y el último término (interferencia) no existe en la probabilidad clásica.

## Cálculo

**1.3** Un qubit está en el estado \( |\psi\rangle = \tfrac{1}{2}|0\rangle + \tfrac{\sqrt3}{2}|1\rangle \). ¿Cuál es la probabilidad de medir \(|0\rangle\)? ¿Y \(|1\rangle\)? Verifica la normalización.

??? success "Solución"
    \(P(0)=|\tfrac12|^2=\tfrac14\); \(P(1)=|\tfrac{\sqrt3}{2}|^2=\tfrac34\). Normalización: \(\tfrac14+\tfrac34=1\) ✓.

**1.4** Escribe el bra \(\langle\psi|\) correspondiente a \( |\psi\rangle=\alpha|0\rangle+\beta|1\rangle \) y calcula \(\langle\psi|\psi\rangle\).

??? success "Solución"
    \(\langle\psi|=\alpha^*\langle0|+\beta^*\langle1|\). Usando \(\langle i|j\rangle=\delta_{ij}\): \(\langle\psi|\psi\rangle=|\alpha|^2+|\beta|^2\), que vale 1 si el estado está normalizado.

## Reflexión (la muralla exponencial)

**1.5** La penicilina se describe con unos 286 espín-orbitales. Explica por qué el costo clásico es \(2^{286}\) y por qué un computador cuántico necesita solo 286 qubits.

??? success "Solución"
    Cada espín-orbital es una "casilla" que puede estar vacía (0) u ocupada (1): un qubit. Con \(M\) casillas independientes hay \(2^M\) configuraciones (producto tensorial: \(\dim(\mathbb C^2)^{\otimes M}=2^M\)), y una función de onda general es una superposición de todas, con \(2^M\) amplitudes que un computador clásico tendría que **almacenar**. Un computador cuántico no las guarda: las **encarna** en \(M=286\) qubits físicos. Recurso lineal, capacidad exponencial.

---

!!! success "Ponte a prueba"
    Cuando termines, presenta el [**Quiz del Capítulo 1**](quiz-capitulo-01.md): diez preguntas que se califican solas, con explicación de cada respuesta.

!!! tip "¿Encontraste un error o quieres proponer un ejercicio?"
    Escríbelo en clase o abre un *issue* en el repositorio del sitio.
