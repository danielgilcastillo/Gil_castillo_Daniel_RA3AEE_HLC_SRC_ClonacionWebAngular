import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.sass']
})
export class ServiciosComponent {
  servicios = [
    {
      "imagen": "../../assets/images/iconocabeza.png",
      "cabecera": "Psicoterapia individual",
      "texto": "Alguien te dijo que tenías un gran problema y no logras encontrar la paz. ¿Un psicólogo?, ¡Sí!, no porque seas un santo puedes prescindir de la ayuda de la confesión o la Eucaristía, ni por tener un problema y acudir al psicólogo te hace un loco o desadaptado.",
      "destino": "/serviciodetalle"
    },
    {
      "imagen": "../../assets/images/iconoflechas.png",
      "cabecera": "Terapia de pareja",
      "texto": "¿Quién no soñó con disfrutar los deleites del amor en pareja? Sin embargo, la tristeza, angustia, ansiedad, aparecen producto de una fractura en la relación y no sabemos cómo proceder o seguir adelante. ¡Ánimo! En Centro Areté sabemos cómo ayudarte.",
      "destino": "/inicio"
    },
    {
      "imagen": "../../assets/images/iconolibro.png",
      "cabecera": "Formación especial para psicólogos",
      "texto": "Contamos con un diplomado en “Psicoterapia de la Reconciliación” así como también con una variada cantidad de MasterClasses orientadas exclusivamente a psicólogos o estudiantes de psicología.",
      "destino": "/contacto"
    },
    {
      "imagen": "../../assets/images/iconocasa.png",
      "cabecera": "Curso virtual “Aceptación y Perdón",
      "texto": "Cursos con modalidad 100% virtual de alta calidad académica, donde se profundizan en diferentes aspectos de la psicología y se potencian las propuestas pedagógicas con reconocidos especialistas a través del uso de una plataforma con herramientas innovadoras. "
    },
    {
      "imagen": "../../assets/images/iconomano.png",
      "cabecera": "Formate con nosotros",
      "texto": "Dictamos conferencias, talleres o seminarios cuyos temas y contenidos se adecuan a las necesidades y objetivos de su institución, según los objetivos planteados y el tiempo acordado."
    },
    {
      "imagen": "../../assets/images/iconotick.png",
      "cabecera": "Areté consulting",
      "texto": "Es la división del Centro Areté que trabaja brindando servicios a distintas empresas de los sectores público y privado, para formar al personal de las mismas en temas como: virtud, reconciliación, asertividad, responsabilidad, excelencia, proactividad, liderazgo interpersonal y sinergia en los equipos de trabajo."
    }

  ];


  primerGrupo() {
    return this.servicios.slice(0, 3);  // Elementos del 0 al 3
  }

  segundoGrupo() {
    return this.servicios.slice(3, 6);  // Elementos del 4 al 6
  }





}
