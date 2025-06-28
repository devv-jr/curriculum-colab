# Interactive Resume

Este repositorio contiene un Currículum Interactivo 100% HTML/CSS/JS usando Vite.

## Estructura

- `index.html`: contiene header, footer y los templates de secciones.
- `pages/`: HTML independiente para cada sección.
- `css/`: variables y estilos globales.
- `js/`: lógica de carga de secciones, scroll suave, dark mode.

## Scripts

```bash
npm install
npm run dev    # servidor con hot-reload
npm run build  # producción en dist/
```

## AVISO

## 🧑‍💻 Flujo de Trabajo para Contribuidores

Este repositorio utiliza un flujo de trabajo basado en ramas. Cada sección o funcionalidad debe desarrollarse en una rama separada y ser enviada a `main` a través de Pull Requests (PRs).

### 🚀 Pasos para contribuir

#### 1. Clonar el repositorio

```bash
git clone git@github.com:devv-jr/curriculum-colab.git
cd interactive-resume
```

#### 2. Crear una nueva rama

Usa el siguiente formato para nombrar la rama: `feature/<nombre-seccion>`

```bash
git checkout -b feature/about-section
```

#### 3. Agregar tus archivos/modificaciones

Por ejemplo, si estás trabajando en la sección "About":

* Agrega tu HTML en `pages/about.html`
* Si necesitas estilos específicos, crea `css/about.css`
* Si necesitas interactividad, crea `js/about.js`

#### 4. Confirmar tus cambios (commit)

```bash
git add pages/about.html css/about.css js/about.js
git commit -m "feat(about): maquetar sección About con HTML, CSS y JS"
```

#### 5. Subir tu rama al repositorio remoto

```bash
git push -u origin feature/about-section
```

#### 6. Abrir un Pull Request (PR)

1. Ve a GitHub y abre el repositorio.
2. Aparecerá un botón para crear un Pull Request desde tu rama.
3. Añade un título y una descripción breve de lo que hiciste.
4. Solicita revisión a Dev u otro revisor.

#### 7. Sincronizar después del merge

Después de que tu PR sea aprobado y combinado (mergeado):

```bash
git checkout main
git pull origin main
```

---

✅ Repite este flujo para cada nueva funcionalidad o sección.

💡 Consejo: Mantén tu rama enfocada solo en una tarea o sección para facilitar la revisión y mantener el código organizado.
