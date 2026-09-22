# Clase 7 — Unitarias, entrelazamiento y tu primer qubit

<span class="qc-badge">Clase 7</span> <span class="qc-badge teal">Capítulo 2</span> <span class="qc-badge gold">Práctica + hardware</span>

Cerramos el Capítulo 2 (diapositivas 30 a 47) y damos el salto a la práctica: **programamos el primer qubit** y conocemos **AWS Braket** y sus plataformas de hardware real.

## Video de la clase

<div class="qc-video">
<iframe src="https://www.youtube.com/embed/Rqw2jVrhduc" title="Clase 7 — Unitarias, entrelazamiento y tu primer qubit" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[:material-youtube: Ver la Clase 7 en YouTube](https://youtu.be/Rqw2jVrhduc)

## Temas de la clase

- Matrices **hermíticas** (autovalores reales) y **unitarias** (evolución reversible).
- Compuertas cuánticas y el **teorema de no-clonación**.
- **Descomposición espectral** de un observable.
- **Producto tensorial**: el origen del crecimiento \(2^n\).
- **Entrelazamiento** y los estados de Bell.
- El **espacio de Hilbert** como arena de la computación cuántica.
- **Primer ejercicio práctico:** tu primer qubit — superposición y medición con Qiskit.
- **AWS Braket** y sus plataformas: iones (IonQ), superconductores (Rigetti/IQM) y átomos neutros (QuEra).

## Práctica

[:material-laptop: Práctica 1 — tu primer qubit](../practicas/practica-01-primer-qubit.md): crea un qubit, ponlo en superposición con una compuerta Hadamard, mídelo y visualiza el resultado.

## Hardware en la nube — AWS Braket

Amazon **Braket** permite ejecutar el mismo programa en **varias plataformas de hardware real** desde un único SDK: iones atrapados (IonQ), superconductores (Rigetti, IQM) y átomos neutros (QuEra). Es ideal para comparar cómo una misma idea aterriza en tecnologías distintas. Más contexto en la sección de [Recursos](../recursos/index.md).

## Diapositivas y lectura

[:material-book-open-page-variant: Leer el Capítulo 2 (PDF)](../assets/libro/capitulo-02.pdf){ .md-button .md-button--primary }
[:material-file-download: Diapositivas (Cap. 2)](../assets/slides/cap02_fundamentos.pdf){ .md-button }

## Ejercicios y evaluación

- [Ejercicios del Capítulo 2](../ejercicios/capitulo-02.md) (incluye la parte 30–47: unitarias, tensorial y entrelazamiento).
- [Quiz autocalificable — unitarias, tensorial y entrelazamiento](../ejercicios/quiz-cap02-avanzado.md).

---

!!! question "Para pensar"
    Si el mismo circuito corre en iones, superconductores y átomos neutros, ¿por qué el resultado (y el ruido) puede diferir? ¿Qué propiedad del hardware —conectividad, compuertas nativas, tiempos de coherencia— pesa más en cada plataforma?
