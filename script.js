// script.js COMPLETO - Malla curricular interactiva medicina UCSUR

const cursos = [
  // CICLO 1
  { nombre: "Química", id: "quimica", ciclo: 1, prerequisitos: [] },
  { nombre: "Matemática", id: "matematica", ciclo: 1, prerequisitos: [] },
  { nombre: "Lengua y Oratoria", id: "lengua", ciclo: 1, prerequisitos: [] },
  { nombre: "Introducción a la Medicina", id: "intro_medicina", ciclo: 1, prerequisitos: [] },
  { nombre: "Desempeño Universitario", id: "desempeno", ciclo: 1, prerequisitos: [] },
  { nombre: "Biología Celular y Molecular", id: "biocelular", ciclo: 1, prerequisitos: [] },

  // CICLO 2
  { nombre: "Redacción General", id: "redaccion", ciclo: 2, prerequisitos: ["lengua"] },
  { nombre: "Realidad Nacional", id: "realidad", ciclo: 2, prerequisitos: ["desempeno"] },
  { nombre: "Morfofisiología I", id: "morfo1", ciclo: 2, prerequisitos: ["biocelular"] },
  { nombre: "Introducción a la Investigación", id: "investigacion", ciclo: 2, prerequisitos: [] },
  { nombre: "Bioquímica", id: "bioquimica", ciclo: 2, prerequisitos: ["quimica"] },
  { nombre: "Anatomía General", id: "anatomia", ciclo: 2, prerequisitos: ["biocelular"] },

  // CICLO 3
  { nombre: "Morfofisiología II", id: "morfo2", ciclo: 3, prerequisitos: ["anatomia", "morfo1"] },
  { nombre: "Inmunología", id: "inmunologia", ciclo: 3, prerequisitos: ["morfo1"] },
  { nombre: "Genética Médica", id: "genetica", ciclo: 3, prerequisitos: ["biocelular"] },
  { nombre: "Filosofía", id: "filosofia", ciclo: 3, prerequisitos: [] },
  { nombre: "Estadística General", id: "estadistica", ciclo: 3, prerequisitos: ["matematica"] },
  { nombre: "Educación Ambiental", id: "ambiental", ciclo: 3, prerequisitos: ["desempeno"] },

  // CICLO 4
  { nombre: "Morfofisiología III", id: "morfo3", ciclo: 4, prerequisitos: ["morfo1", "anatomia"] },
  { nombre: "Infectología Básica", id: "infectologia", ciclo: 4, prerequisitos: ["bioquimica", "morfo1"] },
  { nombre: "Fisiopatología I", id: "fisio1", ciclo: 4, prerequisitos: ["morfo2"] },
  { nombre: "Desarrollo y Crecimiento", id: "crecimiento", ciclo: 4, prerequisitos: ["biocelular"] },
  { nombre: "Bioética", id: "bioetica", ciclo: 4, prerequisitos: ["intro_medicina", "redaccion"] },

  // CICLO 5
  { nombre: "Salud Mental", id: "salud_mental", ciclo: 5, prerequisitos: ["filosofia"] },
  { nombre: "Morfofisiología IV", id: "morfo4", ciclo: 5, prerequisitos: ["morfo3"] },
  { nombre: "Fund. de Medicina Intercultural", id: "intercultural", ciclo: 5, prerequisitos: ["filosofia", "realidad"] },
  { nombre: "Fisiopatología II", id: "fisio2", ciclo: 5, prerequisitos: ["morfo2"] },
  { nombre: "Bioestadística", id: "bioestadistica", ciclo: 5, prerequisitos: ["estadistica"] },

  // CICLO 6
  { nombre: "Semiología basada en simulación", id: "semi_simula", ciclo: 6, prerequisitos: ["fisio1", "fisio2", "inmunologia", "morfo2", "morfo3", "morfo4"] },
  { nombre: "Semiología", id: "semiologia", ciclo: 6, prerequisitos: ["fisio1", "fisio2", "inmunologia", "morfo2", "morfo3", "morfo4"] },
  { nombre: "Farmacología", id: "farmacologia", ciclo: 6, prerequisitos: ["infectologia"] },
  { nombre: "Apoyo al Diagnóstico", id: "apoyo_diagnostico", ciclo: 6, prerequisitos: ["morfo4"] },
  { nombre: "Anatomía Patológica", id: "anat_patologica", ciclo: 6, prerequisitos: ["fisio2"] },

  // CICLO 7
  { nombre: "Seguridad del Paciente y Calidad", id: "seguridad", ciclo: 7, prerequisitos: ["bioetica"] },
  { nombre: "Nutrición y Prácticas Saludables", id: "nutricion", ciclo: 7, prerequisitos: ["farmacologia"] },
  { nombre: "Metodología de la Investigación", id: "metodologia", ciclo: 7, prerequisitos: ["bioestadistica"] },
  { nombre: "Medicina Interna 1", id: "medicina1", ciclo: 7, prerequisitos: ["anat_patologica", "semiologia", "semi_simula"] },
  { nombre: "Epidemiología", id: "epidemiologia", ciclo: 7, prerequisitos: ["bioestadistica"] },

  // CICLO 8
  { nombre: "Salud Pública", id: "salud_publica", ciclo: 8, prerequisitos: ["epidemiologia"] },
  { nombre: "Medicina Interna 2", id: "medicina2", ciclo: 8, prerequisitos: ["medicina1"] },
  { nombre: "Medicina Basada en la Evidencia", id: "evidencia", ciclo: 8, prerequisitos: ["epidemiologia", "metodologia"] },
  { nombre: "Atención Primaria en Salud", id: "atencion_primaria", ciclo: 8, prerequisitos: ["epidemiologia"] },

  // CICLO 9
  { nombre: "Tesis 1", id: "tesis1", ciclo: 9, prerequisitos: ["evidencia"] },
  { nombre: "Terapéutica", id: "terapeutica", ciclo: 9, prerequisitos: ["medicina2"] },
  { nombre: "Simulación Clínica Integrada", id: "simulacion_clinica", ciclo: 9, prerequisitos: ["medicina2"] },
  { nombre: "Medicina Legal", id: "medicina_legal", ciclo: 9, prerequisitos: ["bioetica", "semiologia", "semi_simula"] },
  { nombre: "Medicina Interna 3", id: "medicina3", ciclo: 9, prerequisitos: ["medicina2"] },

  // CICLO 10
  { nombre: "Simulación Quirúrgica", id: "simulacion_quirurgica", ciclo: 10, prerequisitos: ["medicina3", "simulacion_clinica"] },
  { nombre: "Ecografía", id: "ecografia", ciclo: 10, prerequisitos: ["apoyo_diagnostico", "semiologia"] },
  { nombre: "Cuidados Paliativos y Rehabilitación", id: "paliativos", ciclo: 10, prerequisitos: ["bioetica", "terapeutica"] },
  { nombre: "Cirugía", id: "cirugia", ciclo: 10, prerequisitos: ["medicina3", "simulacion_clinica"] },
  { nombre: "Análisis de Casos I", id: "casos1", ciclo: 10, prerequisitos: ["medicina3", "simulacion_clinica", "terapeutica"] },

  // CICLO 11
  { nombre: "Tesis 2", id: "tesis2", ciclo: 11, prerequisitos: ["tesis1"] },
  { nombre: "Simulación Pediátrica", id: "simulacion_pediatrica", ciclo: 11, prerequisitos: ["medicina3", "simulacion_clinica"] },
  { nombre: "Simulación Gineco-Obstetricia", id: "simulacion_gineco", ciclo: 11, prerequisitos: ["cirugia", "simulacion_quirurgica"] },
  { nombre: "Pediatría", id: "pediatria", ciclo: 11, prerequisitos: ["medicina3", "simulacion_clinica"] },
  { nombre: "Ginecología y Obstetricia", id: "gineco", ciclo: 11, prerequisitos: ["cirugia", "simulacion_quirurgica"] },

  // CICLO 12
  { nombre: "Pre-Internado", id: "preinternado", ciclo: 12, prerequisitos: ["tesis2"] },
  { nombre: "Informática Biomédica", id: "informatica", ciclo: 12, prerequisitos: ["atencion_primaria"] },
  { nombre: "Gerencia en Salud", id: "gerencia", ciclo: 12, prerequisitos: ["atencion_primaria"] },
  { nombre: "Análisis de Casos II", id: "casos2", ciclo: 12, prerequisitos: ["casos1"] },

  // CICLO 13
  { nombre: "Trabajo de Investigación", id: "investigacion_final", ciclo: 13, prerequisitos: ["preinternado"] },
  { nombre: "Internado en Pediatría", id: "internado_pediatria", ciclo: 13, prerequisitos: ["preinternado"] },
  { nombre: "Internado en Medicina", id: "internado_medicina", ciclo: 13, prerequisitos: ["preinternado"] },
  { nombre: "Internado en Cirugía", id: "internado_cirugia", ciclo: 13, prerequisitos: ["preinternado"] },
  { nombre: "Internado en Gineco-Obstetricia", id: "internado_gineco", ciclo: 13, prerequisitos: ["preinternado"] }
];
const mallaContainer = document.getElementById("malla-container");
const ciclosUnicos = [...new Set(cursos.map(c => c.ciclo))].sort((a, b) => a - b);

ciclosUnicos.forEach(ciclo => {
  const columna = document.createElement("div");
  columna.classList.add("columna-ciclo");

  const titulo = document.createElement("div");
  titulo.classList.add("ciclo-titulo");
  titulo.innerText = `ciclo ${ciclo}`;
  columna.appendChild(titulo);

  const cursosDelCiclo = cursos.filter(c => c.ciclo === ciclo);
  cursosDelCiclo.forEach(curso => {
    const div = document.createElement("div");
    div.classList.add("curso");
    div.id = curso.id;
    div.innerText = curso.nombre;
    div.addEventListener("click", () => toggleAprobado(curso));
    columna.appendChild(div);
  });

  mallaContainer.appendChild(columna);
});

function toggleAprobado(curso) {
  const div = document.getElementById(curso.id);
  const aprobado = div.classList.toggle("aprobado");

  cursos.forEach(c => {
    const prereqCumplido = c.prerequisitos.every(pr => document.getElementById(pr).classList.contains("aprobado"));
    const bloqueado = !prereqCumplido;
    const nodo = document.getElementById(c.id);
    if (bloqueado) {
      nodo.style.opacity = 0.5;
      nodo.style.pointerEvents = "none";
    } else {
      nodo.style.opacity = 1;
      nodo.style.pointerEvents = "auto";
    }
  });
}

window.onload = () => {
  // Ocultar los cursos que tienen prerequisitos
  cursos.forEach(c => {
    const div = document.getElementById(c.id);
    if (c.prerequisitos.length > 0) {
      div.style.opacity = 0.5;
      div.style.pointerEvents = "none";
    }
  });

  // Cargar progreso guardado
  const guardados = JSON.parse(localStorage.getItem("cursos_aprobados")) || [];
  guardados.forEach(id => {
    const div = document.getElementById(id);
    if (div) div.classList.add("aprobado");
  });

  // Re-evaluar desbloqueo de cursos
  cursos.forEach(c => {
    const prereqCumplido = c.prerequisitos.every(pr =>
      document.getElementById(pr).classList.contains("aprobado")
    );
    const div = document.getElementById(c.id);
    if (prereqCumplido) {
      div.style.opacity = 1;
      div.style.pointerEvents = "auto";
    }
  });
};

// FUNCIÓN para guardar cursos aprobados
function guardarProgreso() {
  const aprobados = cursos
    .filter(c => document.getElementById(c.id).classList.contains("aprobado"))
    .map(c => c.id);
  localStorage.setItem("cursos_aprobados", JSON.stringify(aprobados));
  alert("✅ Progreso guardado con éxito.");
}

// FUNCIÓN para reiniciar la malla
function reiniciarMalla() {
  localStorage.removeItem("cursos_aprobados");
  location.reload();
}
