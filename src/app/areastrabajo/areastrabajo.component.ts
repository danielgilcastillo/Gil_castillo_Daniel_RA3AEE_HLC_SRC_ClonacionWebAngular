import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datos2Service } from './../datos2.service';

@Component({
  selector: 'app-areastrabajo',
  templateUrl: './areastrabajo.component.html',
  styleUrls: ['./areastrabajo.component.sass']
})

export class AreastrabajoComponent {
  areas: any[] =   [
    {
        "imagen": "../../assets/images/iconocabeza.png",
        "cabecera": "Área Clínica",
        "texto": "Evaluación psicológica Terapias psicológicas Asesorías psicológicas Neuropsicología Desarrollo y ejecución de la psicoterapia de la reconciliación Formación de psicólogos y estudiantes de psicología Grupos de estudio y reflexión Conferencias, talleres vivenciales y seminarios"
    },
    {
        "imagen": "./../assets/images/iconocasa.png",
        "cabecera": "Educativa-Familiar",
        "texto": "Ponemos a disposición una serie de herramientas que tienen como objetivo ayudar a las personas a lograr la madurez afectiva y sexual, para lograr un amor sano y una sexualidad sana. A su vez es un llamado para que laicos, consagrados, seminaristas, sacerdotes, noviazgos y matrimonios de todo el mundo puedan vivir un amor verdaderamente auténtico."        },
    {
        "imagen": "../../assets/images/iconoflechas.png",
        "cabecera": "Areté consulting",
        "texto": "Convenios de atención clínica en empresas. Conferencias, talleres vivenciales y seminarios para empresas. Procesos de selección. Diagnóstico y propuesta de intervención en clima y cultura organizacional"
    },
    {
        "imagen": "../../assets/images/iconogente.png",
        "cabecera": "Área social-comunitaria",
        "texto": "La cual contribuye al desarrollo integral de la persona, interviniendo en diferentes comunidades, respondiendo a las necesidades identificadas y ofreciéndoles distintos medios para crecer en la reconciliación, la solidaridad y el empoderamiento comunitario a través de un trabajo personalizado, eficiente e innovador."
    }
]


}