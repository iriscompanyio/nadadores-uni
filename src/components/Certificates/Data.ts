export const infoLevels = {
  "title": "La Ruta del Nadador",
  "description": "Descubre la experiencia de superación personal en cada metro de avance y conviértete en un Tiburón Legendario. Cada matrícula es una oportunidad para sumar puntos, subir de nivel y disfrutar de recompensas únicas.",
  "points_system": {
    "1 vez por semana": {
      "points": 1,
      "levels": 1
    },
    "2 veces por semana": {
      "points": 2,
      "levels": 2
    },
    "3 veces por semana": {
      "points": 5,
      "levels": 5
    },
    "5 veces por semana": {
      "points": 5,
      "levels": 5
    }
  },
  "categories": [
    {
      "name": "Tiburoncin Enano",
      "levels": "0-9",
      "benefits": ["Sin beneficios específicos, pero estás en camino a algo grandioso."],
      "penalty": "Tras 2 meses sin matrícula, bajas 2 niveles, luego 1 nivel por mes."
    },
    {
      "name": "Tiburoncin Azul",
      "levels": "10-19",
      "benefits": ["Descuento de 5% en todas las matrículas futuras."],
      "penalty": "Tras 3 meses sin matrícula, bajas 2 niveles, luego 1 nivel por mes."
    },
    {
      "name": "Tiburoncin Martillo",
      "levels": "20-29",
      "benefits": ["Descuento de 10% en todas las matrículas futuras."],
      "penalty": "Tras 3 meses sin matrícula, bajas 1 nivel, luego 1 nivel por mes.",
      "recoveries": "2 recuperaciones por mes sin justificación."
    },
    {
      "name": "Tiburoncin Tigre",
      "levels": "30-39",
      "benefits": [
        "Descuento de 15% en todas las matrículas futuras.",
        "Descuento de 10% en merchandising de Nadadores UNI."
      ],
      "penalty": "Tras 4 meses sin matrícula, bajas solo 1 nivel, luego 1 nivel por mes.",
      "recoveries": "4 recuperaciones por mes sin justificación."
    },
    {
      "name": "Tiburoncin Blanco",
      "levels": "40-49",
      "benefits": [
        "Descuento de 20% en todas las matrículas futuras.",
        "Descuento de 20% en merchandising de Nadadores UNI.",
        "Amigo Gratis: 2 horas mensuales para invitar a un amigo a clase.",
        "Vacante Garantizada: Siempre se abre un cupo en el horario que necesites."
      ],
      "penalty": "Tras 5 meses sin matrícula, bajas solo 1 nivel, luego 1 nivel por mes.",
      "recoveries": "4 recuperaciones por mes sin justificación."
    },
    {
      "name": "Tiburoncin Legendario",
      "levels": "50",
      "benefits": [
        "Descuento de 25% en todas las matrículas futuras.",
        "Descuento de 50% en todo el merchandising de Nadadores UNI.",
        "Amigo Gratis: 6 horas mensuales para invitar a un amigo a clase.",
        "Vacante Garantizada en el horario que necesites.",
        "Premios Exclusivos: Polo, gorro y cuaderno gratis.",
        "Reconocimiento: Foto en la 'Ruta de Honor' en nuestra página web."
      ],
      "penalty": "Tras 6 meses sin matrícula, bajas solo 1 nivel, luego 1 nivel por mes.",
      "recoveries": "4 recuperaciones por mes sin justificación."
    }
  ],
  "milestone_rewards": [
    {
      "level": 5,
      "reward": "Tomatodo de la academia gratis."
    },
    {
      "level": 15,
      "reward": "Cuaderno de la academia gratis."
    },
    {
      "level": 25,
      "reward": "Gorro de la academia gratis."
    },
    {
      "level": 35,
      "reward": "Polo de la academia gratis."
    },
    {
      "level": 45,
      "reward": "Toalla de microfibra de la academia gratis"
    }
  ],
  "rules": [
    "Cada matrícula suma puntos y te hace progresar en la ruta. Las membresías más frecuentes (diaria e interdiaria) suman más puntos.",
    "Los niveles y categoría del alumno se actualizarán una vez haya cerrado la matrícula del mes en curso.",
    "El premio se otorgará una única vez al alumno y este podrá recoger su premio durante el mes siguiente tras haberlo alcanzado. Si no recoge dicho premio, pierde dicho beneficio sin derecho a reclamo.",
    "Si dejas de matricularte durante 3 o 2 meses seguidos, bajas de nivel, y por cada mes adicional, sigues perdiendo niveles."
  ]
}