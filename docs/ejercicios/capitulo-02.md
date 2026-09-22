# Ejercicios — Capítulo 2

<span class="qc-badge">Clase 4</span> <span class="qc-badge teal">Fundamentos matemáticos</span>

Intenta cada ejercicio con lápiz y papel antes de mirar la solución. Cuando puedas, verifica el resultado con la [Práctica 2](../practicas/practica-02-braket-pauli.md).

## Notación de Dirac

**2.1** Sean \( |\psi\rangle = \tfrac{1}{\sqrt2}\big(|0\rangle + |1\rangle\big) \) y \( |\phi\rangle = \tfrac{1}{\sqrt2}\big(|0\rangle - |1\rangle\big) \). Calcula \( \langle\phi|\psi\rangle \). ¿Qué relación geométrica tienen los dos estados?

??? success "Solución"
    \( \langle\phi|\psi\rangle = \tfrac12(\langle0| - \langle1|)(|0\rangle + |1\rangle) = \tfrac12(\langle0|0\rangle + \langle0|1\rangle - \langle1|0\rangle - \langle1|1\rangle) = \tfrac12(1 + 0 - 0 - 1) = 0 \). Son **ortogonales**: \(|\psi\rangle=|+\rangle\) y \(|\phi\rangle=|-\rangle\) forman la base de Hadamard.

**2.2** Demuestra que para \( |\psi\rangle = \alpha|0\rangle + \beta|1\rangle \), el bra es \( \langle\psi| = \alpha^*\langle0| + \beta^*\langle1| \). ¿Por qué aparece el **conjugado**?

??? success "Solución"
    El bra es el conjugado transpuesto (adjunto) del ket. Como columna, \(|\psi\rangle=\binom{\alpha}{\beta}\); su adjunto es la fila \((\alpha^*,\ \beta^*)\). El conjugado es necesario para que \(\langle\psi|\psi\rangle=|\alpha|^2+|\beta|^2\) sea real y no negativo (una norma), lo que exige el producto **sesquilineal**.

## Matrices de Pauli

**2.3** Verifica que la matriz \( \sigma_x = \begin{pmatrix}0&1\\1&0\end{pmatrix} \) tiene autovalores \(+1\) y \(-1\), y encuentra sus autovectores.

??? success "Solución"
    \(\det(\sigma_x-\lambda I)=\lambda^2-1=0 \Rightarrow \lambda=\pm1\). Para \(\lambda=+1\): \(\binom{a}{b}\) con \(a=b\) → \(|+\rangle=\tfrac{1}{\sqrt2}\binom{1}{1}\). Para \(\lambda=-1\): \(a=-b\) → \(|-\rangle=\tfrac{1}{\sqrt2}\binom{1}{-1}\). Los autovectores de \(\sigma_x\) son la base de Hadamard.

**2.4** Comprueba que \( \sigma_x \) y \( \sigma_z \) **no conmutan** calculando \( [\sigma_x,\sigma_z]=\sigma_x\sigma_z-\sigma_z\sigma_x \).

??? success "Solución"
    \(\sigma_x\sigma_z=\begin{pmatrix}0&-1\\1&0\end{pmatrix}\), \(\sigma_z\sigma_x=\begin{pmatrix}0&1\\-1&0\end{pmatrix}\). Entonces \([\sigma_x,\sigma_z]=\begin{pmatrix}0&-2\\2&0\end{pmatrix}=-2i\,\sigma_y\neq 0\). No conmutan: por eso no se pueden medir \(x\) y \(z\) simultáneamente con precisión (base del principio de incertidumbre).

## Hermíticas, unitarias y medición

**2.5** La compuerta de Hadamard es \( H=\tfrac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix} \). Demuestra que es a la vez **hermítica** (\(H=H^\dagger\)) y **unitaria** (\(H^\dagger H=I\)).

??? success "Solución"
    \(H\) es real y simétrica, así que \(H^\dagger=H^T=H\) (hermítica). Y \(H^2=\tfrac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}1&1\\1&-1\end{pmatrix}=\tfrac12\begin{pmatrix}2&0\\0&2\end{pmatrix}=I\), luego \(H^\dagger H=H^2=I\) (unitaria). Es de las pocas compuertas que son su propia inversa.

**2.6** Se prepara el estado \( |+\rangle \) y se mide en la base computacional \(\{|0\rangle,|1\rangle\}\). ¿Cuáles son las probabilidades? Si en cambio se mide en la base \(\{|+\rangle,|-\rangle\}\), ¿qué se obtiene?

??? success "Solución"
    En la base \(\{|0\rangle,|1\rangle\}\): \(P(0)=|\langle0|+\rangle|^2=\tfrac12\) y \(P(1)=\tfrac12\) (azar puro). En la base \(\{|+\rangle,|-\rangle\}\): \(P(+)=|\langle+|+\rangle|^2=1\), \(P(-)=0\) (resultado determinista). La aleatoriedad no está "en el estado": depende de **en qué base** se mide.

## Producto tensorial

**2.7** Construye el vector del estado \( |01\rangle \) usando el producto tensorial \( |0\rangle\otimes|1\rangle \). ¿Cuántas amplitudes tiene un estado de \(n\) qubits?

??? success "Solución"
    \(|0\rangle\otimes|1\rangle=\binom{1}{0}\otimes\binom{0}{1}=(0,1,0,0)^T\), el segundo vector de la base de \(\mathbb{C}^4\). Un estado de \(n\) qubits vive en \((\mathbb{C}^2)^{\otimes n}=\mathbb{C}^{2^n}\): tiene \(2^n\) amplitudes complejas. De ahí la muralla exponencial del Capítulo 1.

## Unitarias, tensorial y entrelazamiento (diapositivas 30–47)

**2.8** Verifica que \( A=\begin{pmatrix}2&i\\-i&2\end{pmatrix} \) es **hermítica** y encuentra sus autovalores. ¿Por qué debían salir reales?

??? success "Solución"
    \(A^\dagger=(\overline{A})^T=A\) (la entrada \(i\) se conjuga a \(-i\) y la transposición las intercambia): es hermítica. Polinomio: \((2-\lambda)^2-(i)(-i)=(2-\lambda)^2-1=0\Rightarrow\lambda=1,3\). Son reales porque **toda matriz hermítica tiene autovalores reales** (representan resultados de medición).

**2.9** Sea \(U\) unitaria y \( |\psi'\rangle=U|\psi\rangle \). Demuestra que \( \langle\psi'|\psi'\rangle=\langle\psi|\psi\rangle \) (la norma se conserva).

??? success "Solución"
    \( \langle\psi'|\psi'\rangle=(U|\psi\rangle)^\dagger(U|\psi\rangle)=\langle\psi|U^\dagger U|\psi\rangle=\langle\psi|I|\psi\rangle=\langle\psi|\psi\rangle \). Conservar la norma (la probabilidad total) es justo lo que **exige** que las compuertas sean unitarias.

**2.10** La compuerta **CNOT** invierte el segundo qubit (objetivo) si el primero (control) es \(|1\rangle\). Calcula su acción sobre \(|10\rangle\) y \(|11\rangle\).

??? success "Solución"
    Control \(=1\) en ambos casos, así que se invierte el objetivo: \(|10\rangle\to|11\rangle\) y \(|11\rangle\to|10\rangle\). Sobre \(|00\rangle\) y \(|01\rangle\) (control \(=0\)) no hace nada.

**2.11** Enuncia el **teorema de no-clonación** y explica, en una línea, por qué choca con la linealidad.

??? success "Solución"
    No existe una operación unitaria que copie un estado cuántico **desconocido y arbitrario**: \(U(|\psi\rangle|0\rangle)=|\psi\rangle|\psi\rangle\) no puede valer para todo \(|\psi\rangle\), porque la linealidad de \(U\) aplicada a una superposición \(|\psi\rangle=a|0\rangle+b|1\rangle\) da \(a|00\rangle+b|11\rangle\neq(a|0\rangle+b|1\rangle)^{\otimes2}\). Es la base de la seguridad de BB84.

**2.12** Escribe la **descomposición espectral** de \(\sigma_z\) en términos de proyectores y verifica que reproduce la matriz.

??? success "Solución"
    \(\sigma_z=(+1)\,|0\rangle\langle0|+(-1)\,|1\rangle\langle1|=\begin{pmatrix}1&0\\0&0\end{pmatrix}-\begin{pmatrix}0&0\\0&1\end{pmatrix}=\begin{pmatrix}1&0\\0&-1\end{pmatrix}\). Autovalores como pesos, proyectores como "medidores": así se conecta un observable con su medición.

**2.13** ¿Cuál es la **dimensión** del espacio de Hilbert de **3 qubits**? Escribe el estado \(|101\rangle\) como vector de la base e indica la posición (contando desde 0) de su único 1.

??? success "Solución"
    \(\dim=2^3=8\). En \(\mathbb{C}^8\), \(|101\rangle\) es el vector base cuyo 1 está en la posición \(101_2=5\) (contando desde 0). El orden de la base es el binario de las etiquetas.

**2.14** Demuestra que el estado de Bell \( |\Phi^+\rangle=\tfrac{1}{\sqrt2}(|00\rangle+|11\rangle) \) **no** se puede escribir como producto \((a|0\rangle+b|1\rangle)\otimes(c|0\rangle+d|1\rangle)\): está **entrelazado**.

??? success "Solución"
    El producto da \(ac|00\rangle+ad|01\rangle+bc|10\rangle+bd|11\rangle\). Igualar con \(|\Phi^+\rangle\) exige \(ad=0\) y \(bc=0\), pero también \(ac=bd=\tfrac{1}{\sqrt2}\neq0\), lo que obliga a \(a,b,c,d\neq0\) — contradicción. No hay factorización: el estado es entrelazado.

**2.15** Calcula el **valor esperado** \( \langle\sigma_z\rangle \) en el estado \( |\psi\rangle=\tfrac{\sqrt3}{2}|0\rangle+\tfrac12|1\rangle \).

??? success "Solución"
    \( \langle\sigma_z\rangle=\langle\psi|\sigma_z|\psi\rangle=|\alpha|^2-|\beta|^2=\tfrac34-\tfrac14=\tfrac12 \). Es el promedio \((+1)P(0)+(-1)P(1)\) de los resultados \(\pm1\) ponderados por sus probabilidades.

---

!!! tip "Verifica con la computadora"
    Casi todos estos ejercicios se pueden comprobar en tres líneas de NumPy. Ábrelos en la [Práctica 2](../practicas/practica-02-braket-pauli.md) y confirma tus respuestas.

!!! success "Ponte a prueba"
    Cuando termines, presenta el [**Quiz — unitarias, tensorial y entrelazamiento**](quiz-cap02-avanzado.md): 20 preguntas que se califican solas, con explicación de cada respuesta.
