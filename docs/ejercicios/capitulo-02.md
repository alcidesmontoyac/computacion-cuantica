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

---

!!! tip "Verifica con la computadora"
    Casi todos estos ejercicios se pueden comprobar en tres líneas de NumPy. Ábrelos en la [Práctica 2](../practicas/practica-02-braket-pauli.md) y confirma tus respuestas.
