# Ejercicio interactivo — programa tus primeros circuitos cuánticos

<span class="qc-badge">Práctica externa</span> <span class="qc-badge teal">Qiskit en el navegador</span> <span class="qc-badge gold">Gratis</span>

Un laboratorio **interactivo** de [Qollab](https://qollab.xyz) para escribir y ejecutar tus primeros circuitos con **Qiskit**, directo en el navegador y sobre el simulador de **IonQ**. Son seis lecciones cortas (~1 hora) que construyen complejidad paso a paso: escribes el código, lo ejecutas y ves los resultados al instante.

[:material-open-in-new: Abrir el laboratorio en qollab.xyz](https://qollab.xyz/learn/programming-your-first-quantum-circuits/){ .md-button .md-button--primary }

## Qué vas a practicar

1. **Fundamentos del circuito** — qubits, compuertas como llamadas a métodos, medición y número de repeticiones (*shots*).
2. **Superposición** — la compuerta de Hadamard y la distribución de probabilidad al repetir la medición.
3. **Sistemas de dos qubits** — la compuerta CNOT, los pares de Bell y la convención de orden de bits en Qiskit.
4. **Compuertas de rotación** — rotaciones parciales con RY y RZ, la esfera de Bloch y la fase.
5. **Interferencia y algoritmos** — visibilidad de fase y el algoritmo de búsqueda de **Grover** con dos qubits.
6. **Modelado de ruido** — cómo se comporta un computador cuántico real con los modelos de ruido de IonQ.

## Cómo usarlo

- Crea una cuenta **gratuita** en Qollab (con Google o GitHub).
- Avanza lección por lección: lee el código, **ejecútalo** y observa los conteos de medición.
- Modifica los circuitos y vuelve a correr para ver cómo cambian las probabilidades.

!!! tip "Vínculo con el curso"
    Este laboratorio refuerza lo que vemos en clase: las **compuertas** unitarias (Cap. 2 y 3), la **superposición** y la **esfera de Bloch** (Cap. 3), el **entrelazamiento** y los estados de Bell (Cap. 4), y el ruido de los dispositivos **NISQ** (Cap. 1). Es el complemento perfecto a la [Práctica 1 — tu primer qubit](../practicas/practica-01-primer-qubit.md) y a la [Práctica 3 — AWS Braket](../practicas/practica-03-braket.md).

## Para entregar (opcional)

Completa las seis lecciones y toma una **captura** de tu circuito de Bell (lección 3) mostrando que solo aparecen los resultados `00` y `11`. Publica tu circuito como proyecto público en Qollab y comparte el enlace.

---

!!! question "Para pensar"
    En la lección de superposición mides muchas veces una Hadamard y obtienes ~50 % de `0` y ~50 % de `1`. ¿En qué se diferencia esto de lanzar una moneda clásica? Y cuando entrelazas dos qubits, ¿por qué desaparecen los resultados `01` y `10`?
