const cursos = [
  {
    nombre: "Química",
    id: "quimica",
    ciclo: 1,
    prerequisitos: []
  },
  {
    nombre: "Matemática",
    id: "matematica",
    ciclo: 1,
    prerequisitos: []
  },
  {
    nombre: "Lengua y Oratoria",
    id: "lengua",
    ciclo: 1,
    prerequisitos: []
  },
  {
    nombre: "Introducción a la Medicina",
    id: "intro_medicina",
    ciclo: 1,
    prerequisitos: []
  },
  {
    nombre: "Desempeño Universitario",
    id: "desempeno",
    ciclo: 1,
    prerequisitos: []
  },
  {
    nombre: "Biología Celular y Molecular",
    id: "biocelular",
    ciclo: 1,
    prerequisitos: []
  },
  {
    nombre: "Redacción General",
    id: "redaccion",
    ciclo: 2,
    prerequisitos: ["lengua"]
  },
  {
    nombre: "Realidad Nacional",
    id: "realidad",
    ciclo: 2,
    prerequisitos: ["desempeno"]
  },
  {
    nombre: "Morfofisiología I",
    id: "morfo1",
    ciclo: 2,
    prerequisitos: ["biocelular"]
  }
  // Agrega el resto aquí si deseas...
];

const contenedor = document.getElementById("contenedor-malla");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.classList.add("curso");
  div.id = curso.id;
  div.innerText = `${curso.nombre} (Ciclo ${curso.ciclo})`;
  div.addEventListener("click", () => toggleAprobado(curso));
  contenedor.appendChild(div);
});

function toggleAprobado(curso) {
  const div = document.getElementById(curso.id);
  const aprobado = div.classList.toggle("aprobado");

  if (aprobado) {
    cursos.forEach(c => {
      if (c.prerequisitos.includes(curso.id)) {
        const prereqCumplido = c.prerequisitos.every(pr =>
          document.getElementById(pr).classList.contains("aprobado")
        );
        if (prereqCumplido) {
          document.getElementById(c.id).style.opacity = 1;
          document.getElementById(c.id).style.pointerEvents = "auto";
        }
      }
    });
  } else {
    cursos.forEach(c => {
      if (c.prerequisitos.includes(curso.id)) {
        document.getElementById(c.id).classList.remove("aprobado");
        document.getElementById(c.id).style.opacity = 0.5;
        document.getElementById(c.id).style.pointerEvents = "none";
      }
    });
  }
}

window.onload = () => {
  cursos.forEach(c => {
    if (c.prerequisitos.length > 0) {
      const div = document.getElementById(c.id);
      div.style.opacity = 0.5;
      div.style.pointerEvents = "none";
    }
  });
};
