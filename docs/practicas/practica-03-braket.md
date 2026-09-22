# Práctica 3 — AWS Braket en Colab

<span class="qc-badge">Clase 7</span> <span class="qc-badge teal">Amazon Braket</span> <span class="qc-badge gold">Sin instalar nada</span>

Ejecuta circuitos cuánticos con el **SDK de Amazon Braket** directo en Google Colab: primero en el **simulador local** (gratis, sin cuenta de AWS) y, de forma opcional, en la nube de AWS (simuladores gestionados y hardware real).

[:simple-googlecolab: Abrir en Colab](https://colab.research.google.com/github/alcidesmontoyac/computacion-cuantica/blob/main/notebooks/practica-03-braket-colab.ipynb){ .md-button .md-button--primary }
[:material-download: Descargar notebook](https://github.com/alcidesmontoyac/computacion-cuantica/raw/main/notebooks/practica-03-braket-colab.ipynb){ .md-button }

## Qué vas a hacer

- Instalar el SDK de Braket en Colab con una línea.
- Poner un qubit en **superposición** y medirlo en el **simulador local**.
- Crear **entrelazamiento**: los estados de Bell y GHZ.
- Visualizar los conteos y calcular un **valor esperado** exacto.
- (Opcional) Lanzar el mismo circuito a **AWS** (SV1 o un QPU real) desde tu cuenta.

## Simulador local (gratis, para todos)

No necesitas cuenta de AWS ni tarjeta: el simulador local corre dentro de Colab.

```python
!pip install amazon-braket-sdk -q

from braket.circuits import Circuit
from braket.devices import LocalSimulator

circ = Circuit().h(0)                 # superposición
counts = LocalSimulator().run(circ, shots=1000).result().measurement_counts
print(counts)                         # ~ {'0': 500, '1': 500}
```

Entrelazamiento (estado de Bell):

```python
bell = Circuit().h(0).cnot(0, 1)
print(LocalSimulator().run(bell, shots=1000).result().measurement_counts)  # solo 00 y 11
```

!!! warning "La parte en la nube tiene costo"
    Los **simuladores gestionados** (SV1, DM1, TN1) y los **QPU reales** (IonQ, Rigetti, IQM, QuEra) requieren una **cuenta de AWS** con Braket habilitado y **cobran** por tarea y por shot; los QPU además tienen cola y ventanas de disponibilidad. Para practicar, usa el **simulador local**, que es gratis. Nunca subas tus credenciales de AWS a GitHub.

## Relacionado

- [Práctica 1 — tu primer qubit (Qiskit)](practica-01-primer-qubit.md): el mismo experimento con Qiskit.
- [Clase 7 — unitarias, entrelazamiento y tu primer qubit](../curso/clase-07.md).
