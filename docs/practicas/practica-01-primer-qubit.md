# Práctica 1 — Tu primer qubit

<span class="qc-badge">Semana 1</span> <span class="qc-badge teal">Qiskit</span>

En esta práctica creas tu primer qubit, lo pones en **superposición** con una compuerta **Hadamard**, lo mides muchas veces y compruebas que sale \(|0\rangle\) y \(|1\rangle\) cada uno cerca del 50 % de las veces.

[:simple-googlecolab: Abrir en Colab](https://colab.research.google.com/github/alcidesmontoyac/computacion-cuantica/blob/main/notebooks/practica-01-primer-qubit.ipynb){ .md-button .md-button--primary }
[:material-download: Descargar notebook](https://github.com/alcidesmontoyac/computacion-cuantica/raw/main/notebooks/practica-01-primer-qubit.ipynb){ .md-button }

## Objetivos

- Instalar y usar Qiskit.
- Construir un circuito de un qubit.
- Entender qué hace la compuerta Hadamard: \( H|0\rangle = \tfrac{1}{\sqrt2}(|0\rangle+|1\rangle) = |+\rangle \).
- Medir y leer un histograma de resultados.

## 1. Instalación

```python
# En Colab, ejecuta esta celda una vez.
!pip -q install qiskit qiskit-aer pylatexenc
```

## 2. Un qubit en superposición

```python
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator
from qiskit.visualization import plot_histogram

# Un circuito con 1 qubit y 1 bit clásico (para guardar la medición)
qc = QuantumCircuit(1, 1)
qc.h(0)            # Hadamard: pone el qubit en superposición |+>
qc.measure(0, 0)   # mide el qubit y guarda el resultado en el bit clásico
print(qc.draw())
```

## 3. Ejecutar y medir 1000 veces

```python
sim = AerSimulator()
resultado = sim.run(qc, shots=1000).result()
conteos = resultado.get_counts()
print(conteos)          # p. ej. {'0': 503, '1': 497}
plot_histogram(conteos)
```

Deberías ver que `0` y `1` aparecen con frecuencia parecida: es la regla de Born en acción, \(|\alpha|^2=|\beta|^2=\tfrac12\).

## 4. Visualizar el estado en la esfera de Bloch

```python
from qiskit.quantum_info import Statevector
from qiskit.visualization import plot_bloch_multivector

qc2 = QuantumCircuit(1)
qc2.h(0)                         # sin medir, para ver el estado
estado = Statevector(qc2)
plot_bloch_multivector(estado)   # el vector apunta al ecuador: estado |+>
```

## Para explorar

1. Cambia `qc.h(0)` por `qc.x(0)` (compuerta NOT). ¿Qué mide ahora?
2. Aplica dos Hadamard seguidas (`qc.h(0); qc.h(0)`). ¿Por qué vuelve a \(|0\rangle\)?
3. Prueba `qc.ry(theta, 0)` con distintos ángulos y observa cómo cambian las probabilidades.

## Entrega

Guarda tu notebook con las respuestas a la sección "Para explorar" y compártelo según lo indicado en clase.
