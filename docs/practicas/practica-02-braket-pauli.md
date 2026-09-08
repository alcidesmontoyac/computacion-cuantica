# Práctica 2 — Bra-ket y matrices de Pauli

<span class="qc-badge">Clase 4</span> <span class="qc-badge teal">NumPy · Qiskit</span>

En esta práctica trabajas el álgebra del Capítulo 2 con la computadora: representas kets como vectores, calculas **productos internos** \( \langle\phi|\psi\rangle \), verificas los **autovectores de las matrices de Pauli** y compruebas qué significa **medir en distintas bases**.

[:simple-googlecolab: Abrir en Colab](https://colab.research.google.com/github/alcidesmontoyac/computacion-cuantica/blob/main/notebooks/practica-02-braket-pauli.ipynb){ .md-button .md-button--primary }
[:material-download: Descargar notebook](https://github.com/alcidesmontoyac/computacion-cuantica/raw/main/notebooks/practica-02-braket-pauli.ipynb){ .md-button }

## Objetivos

- Representar kets y bras como vectores complejos con NumPy.
- Calcular el producto interno y comprobar la normalización.
- Definir las matrices de Pauli y verificar que sus autovalores son \(\pm 1\).
- Ver que medir \(|+\rangle\) en la base \(\{|0\rangle,|1\rangle\}\) da 50/50.

## 1. Kets, bras y producto interno

```python
import numpy as np

# base computacional
ket0 = np.array([1, 0], dtype=complex)
ket1 = np.array([0, 1], dtype=complex)

# un qubit |psi> = (|0> + i|1>)/sqrt(2)
psi = (ket0 + 1j*ket1) / np.sqrt(2)

# el bra <psi| es el conjugado transpuesto
bra_psi = psi.conj()

# producto interno <psi|psi> (debe ser 1)
print("<psi|psi> =", np.vdot(psi, psi).real)   # np.vdot ya conjuga el primer argumento
```

## 2. Probabilidades (regla de Born)

```python
# amplitudes de |psi> en la base {|0>, |1>}
alpha = np.vdot(ket0, psi)
beta  = np.vdot(ket1, psi)
print("P(0) =", abs(alpha)**2, "  P(1) =", abs(beta)**2)   # 0.5 y 0.5
```

## 3. Matrices de Pauli y sus autovalores

```python
I  = np.array([[1,0],[0,1]], dtype=complex)
X  = np.array([[0,1],[1,0]], dtype=complex)
Y  = np.array([[0,-1j],[1j,0]], dtype=complex)
Z  = np.array([[1,0],[0,-1]], dtype=complex)

for nombre, M in [("X",X),("Y",Y),("Z",Z)]:
    valores, vectores = np.linalg.eigh(M)   # eigh: matrices hermíticas
    print(nombre, "-> autovalores:", np.round(valores,3))
```

Verás que los tres dan autovalores \(-1\) y \(+1\): los dos resultados posibles de medir el espín.

## 4. Medir en distintas bases

```python
# base de Hadamard
plus  = (ket0 + ket1)/np.sqrt(2)     # |+>
minus = (ket0 - ket1)/np.sqrt(2)     # |->

# medir |+> en la base {|0>,|1>}
print("|+> medido en Z:  P(0)=", abs(np.vdot(ket0,plus))**2,
      " P(1)=", abs(np.vdot(ket1,plus))**2)

# medir |0> en la base {|+>,|->}
print("|0> medido en X:  P(+)=", abs(np.vdot(plus,ket0))**2,
      " P(-)=", abs(np.vdot(minus,ket0))**2)
```

## Para explorar

1. Comprueba numéricamente que \(X\) y \(Z\) **no conmutan**: calcula `X@Z - Z@X`.
2. Verifica que la Hadamard \(H=\tfrac{1}{\sqrt2}\begin{bmatrix}1&1\\1&-1\end{bmatrix}\) es hermítica **y** unitaria (`H@H` debe dar la identidad).
3. Construye el estado de dos qubits \(|00\rangle\) con `np.kron(ket0, ket0)` y explora \(\tfrac{1}{\sqrt2}(|00\rangle+|11\rangle)\).

## Entrega

Guarda tu notebook con las respuestas de "Para explorar" y compártelo según lo indicado en clase.
