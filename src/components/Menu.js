import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Modal,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

const dataDistributors = {
  jalisco: {
    state: "Jalisco",
    cities: [
      {
        id: "guadalajara",
        city: "Guadalajara",
        distributors: [
          {
            content: {
              image: "",
              partner: "CLIMAPROYECTOS SA DE CV",
              titular: "Sara Díaz",
              calle: "Av.Lázaro Cárdenas #1445, Alamo Industrial 44490",
              phone: "800 9000 150 y (33) 3838 3900",
              email: "ventas@climaproyectos.com.mx",
              site: "climaproyectos.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.0510544187746!2d-103.3310035851567!3d20.626775706755495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b25be421b667%3A0x3230358852370493!2sCalz.%20L%C3%A1zaro%20C%C3%A1rdenas%201445%2C%20Alamo%20Industrial%2C%2045593%20San%20Pedro%20Tlaquepaque%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1632522556292!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "Logo-AIREMERCADO.png",
              partner: "Airemercado",
              titular: "",
              calle: "Av España 1264, Moderna, 44190 Guadalajara, Jal.",
              phone: "(33)36157995 y (33)36169192",
              email: "mkt-digital@airemercado.mx",
              site: "airemercado.mx",
              map: "",
            },
          },
          {
            content: {
              image: "AIRETEC_HVAC_VERSIONES_OK_HORIZONTAL-COMPACTA.png",
              partner: "AIRETEC HVAC - Sucursal Guadalajara",
              titular: "",
              calle:
                "AV. ADOLFO LÓPEZ MATEOS #131, COL. ARCOS VALLARTA, GUADALAJARA, JAL. C.P. 44110",
              phone: "(33) 3162 0255 y 1874 4850",
              email: "contacto@airetec.com.mx",
              site: "airetec.com.mx",
              map: "",
            },
          },
        ],
      },
    ],
  },
  cdmx: {
    state: "Ciudad de México",
    cities: [
      {
        id: "cdmx",
        city: "",
        distributors: [
          {
            content: {
              image: "",
              partner: "CLIMAPROYECTOS SA DE CV",
              titular: "Sara Díaz",
              calle: "Diana #681 Col. Nueva Industrial Vallejo 07700",
              phone: "(55) 5567 3237, 5567 6992 y 5567 2453",
              email: "ventas@climaproyectos.com.mx",
              site: "climaproyectos.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6325.25935913942!2d-99.149224687265!3d19.497701446218617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f84af8ed82d7%3A0xfbb38e5aea9696c3!2sClimaproyectos%20S.A.%20De%20C.V.!5e0!3m2!1ses-419!2smx!4v1632508378122!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "cropped-ghec-logo.png",
              partner: "GUEMEZ INGENIEROS CONSULTORES SA DE CV",
              titular: "Fernando",
              calle: "C. Río Lerma 187-A, Cuauhtémoc, 06500",
              phone: "(55) 7155 0940 y 7155 0928",
              email: "ricardo.guemez@ghec.com.mx ",
              site: "ghec.com.mx",
              map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3762.639339784394!2d-99.170282!3d19.427983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a62a04eefd61b4!2sCarnitas%20De%20R%C3%ACo%20Lerma!5e0!3m2!1sen!2smx!4v1632545187483!5m2!1sen!2smx",
            },
          },
          {
            content: {
              image: "",
              partner: "REFACCIONES MERETI ",
              titular: "Beatriz Perez",
              calle: "Luis Spota #64, Col. San Simon 03660",
              phone: "800 363784",
              email: "rene.hernandez@daikin-mexico.com",
              site: "grupomereti.mx",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.987957725799!2d-99.14530981186942!3d19.376676842333538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fe52e3357327%3A0xb4bd00b5e762a7bb!2sLuis%20Spota%2064%2C%20San%20Sim%C3%B3n%2C%20Benito%20Ju%C3%A1rez%2C%2003660%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1632520795814!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "",
              partner: "REFACCIONES LUCHICHI",
              titular: "Beatriz Perez",
              calle: "Calle Artículo 123 73, Col. Centro 06050",
              phone: "(55) 5510 0909 y (55) 3002 2454",
              email: "contacto@mereti.com.mx",
              site: "mereti.com.mx",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.527493288312!2d-99.14804178517198!3d19.432811245709583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff2aab1bbd7b%3A0x69daf7528d3e3357!2sC.%20Art%C3%ADculo%20123%2073%2C%20Colonia%20Centro%2C%20Centro%2C%20Cuauht%C3%A9moc%2C%2006000%20Centro%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1632521233311!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "Logo-Starr-2016.jpg",
              partner: "REFRIGERACION STARR",
              titular: "Beatriz Perez",
              calle: "Av. 5 #231, Col. Granjas San Antonio 09070",
              phone: "(55) 5582 5586 y (55) 1090 8810",
              email: "jzaragoza@starr.com.mx",
              site: "refrigeracionstarr.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.0651789522663!2d-99.11109098517281!3d19.366330247814894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fe730f77d337%3A0xd2c310e6b8822c26!2sAv.%205%20231%2C%20Granjas%20San%20Antonio%2C%20Iztapalapa%2C%2009070%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1632521918901!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "",
              partner: "CLIMAPROYECTOS SA DE CV",
              titular: "Beatriz Perez",
              calle: "Diana #681 Col. Nueva Industrial Vallejo 07700",
              phone: "800 9000 400 y 811 9655 073",
              email: "abraham@climastock.com.mx",
              site: "climaproyectos.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6325.25935913942!2d-99.149224687265!3d19.497701446218617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f84af8ed82d7%3A0xfbb38e5aea9696c3!2sClimaproyectos%20S.A.%20De%20C.V.!5e0!3m2!1ses-419!2smx!4v1632508378122!5m2!1ses-419!2smx",
            },
          },
        ],
      },
    ],
  },
  tamaulipas: {
    state: "Tamaulipas",
    cities: [
      {
        id: "matamoros",
        city: "Matamoros",
        distributors: [
          {
            content: {
              image: "chapa_logo.png",
              partner: "CHAPA AIRES CENTRALES",
              titular: "Sara Díaz",
              calle: "Jorge Negrete 32, Col. Expofiesta Nte. 87396",
              phone: "(868) 824 5031",
              email: " nataly_chapa@hotmail.com",
              site: "chapaairescentrales.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.2813197245096!2d-97.52063908507705!3d25.827273812186974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866feb5c3ba7711f%3A0xd2e2faee49fe8780!2sC.%20Jorge%20Negrete%2032%2C%20Expofiesta%20Nte.%2C%2087396%20Heroica%20Matamoros%2C%20Tamps.!5e0!3m2!1ses-419!2smx!4v1632523417607!5m2!1ses-419!2smx",
            },
          },
        ],
      },
      {
        id: "reynosa",
        city: "Reynosa",
        distributors: [
          {
            content: {
              image: "chapa_logo.png",
              partner: "CHAPA AIRES CENTRALES",
              titular: "Francisco Davila",
              calle: "Ote Dos 2 244, Col. Las Cumbres 88740",
              phone: "(899) 924 0139 y (899) 146 6525",
              email: " nataly_chapa@hotmail.com",
              site: "chapaairescentrales.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.8859089265115!2d-98.32664638507282!3d26.06998480213432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866505ef27bcff8b%3A0xc63c9c2c8e469513!2sOte%20Dos%202%20244%2C%20Las%20Cumbres%2C%2088740%20Reynosa%2C%20Tamps.!5e0!3m2!1ses-419!2smx!4v1632523739474!5m2!1ses-419!2smx",
            },
          },
        ],
      },
      {
        id: "tampico",
        city: "Tampico",
        distributors: [
          {
            content: {
              image: "",
              partner: "AIRE TOTAL CONTROLADO SA DE CV",
              titular: "Francisco Davila",
              calle: "Alvaro Obregón 709, Zona Centro 89000",
              phone: "(833) 212 2473 y (833) 235 2664",
              email: "mario.florencia@airetotal.com.mx",
              site: "airetotalcontrolado.miadn.mx",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.512255946328!2d-97.86520838513455!3d22.220634851397495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d7f748ce963481%3A0xdd0ac4ba418f8f34!2sAlvaro%20Obreg%C3%B3n%20709%2C%20Zona%20Centro%2C%2089000%20Tampico%2C%20Tamps.!5e0!3m2!1ses-419!2smx!4v1632537532816!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "Climas_y_refacciones_del_puerto.png",
              partner: "Climas y Refacciones del Puerto Sucursal Matriz",
              titular: "",
              calle:
                "AGUA DULCE #210, FRACC. FLORIDA, TAMPICO, TAMAULIPAS C.P. 89110",
              phone: "800 227 5000 y (833) 283 7603",
              email: "contacto@climasdelpuerto.com",
              site: "climasdelpuerto.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.0894330978235!2d-97.86854819999999!3d22.2366853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d7f755bba2b6e1%3A0xc20742b628de1b4c!2sAv.%20Miguel%20Hidalgo%201703b%2C%20Aurora%2C%2089170%20Tampico%2C%20Tamps.!5e0!3m2!1ses!2smx!4v1683260598417!5m2!1ses!2smx",
            },
          },
          {
            content: {
              image: "Climas_y_refacciones_del_puerto.png",
              partner: "Climas y Refacciones del Puerto Sucursal Palmas",
              titular: "",
              calle:
                "AV. HIDALGO #1703-B, COL. AURORA, TAMPICO, TAMAULIPAS C.P. 89170",
              phone: "(833) 227 3060 y 537 0491",
              email: "roxana.sanchez@climasdelpuerto.com",
              site: "climasdelpuerto.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.0894330978235!2d-97.86854819999999!3d22.2366853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d7f755bba2b6e1%3A0xc20742b628de1b4c!2sAv.%20Miguel%20Hidalgo%201703b%2C%20Aurora%2C%2089170%20Tampico%2C%20Tamps.!5e0!3m2!1ses!2smx!4v1683260598417!5m2!1ses!2smx",
            },
          },
        ],
      },
    ],
  },
  nuevoleon: {
    state: "Nuevo León",
    cities: [
      {
        id: "monterrey",
        city: "Monterrey",
        distributors: [
          {
            content: {
              image: "AireProyectos.png",
              partner: "AIRE PROYECTOS DEL GOLFO SA DE CV",
              titular: "Francisco Davila",
              calle: "Av Fidel Velázquez 3032, Col. Bernardo Reyes 64280 ",
              phone: "(812) 270 7670 y (833) 227 3040",
              email: "www.aireproyectos.com.mx",
              site: "https://airetotalcontrolado.miadn.mx/ ",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4274.59062526077!2d-100.33850110608712!3d25.72137303829132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629432da5cd1e7%3A0x9a3d7aea6b3c2256!2sAv%20Fidel%20Vel%C3%A1zquez%203032%2C%20Bernardo%20Reyes%2C%2064280%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1632537895061!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "",
              partner: "CLIMAPROYECTOS SA DE CV",
              titular: "Sara Díaz",
              calle: "Av. Almazán 1074, Col. Topo Chico 64260",
              phone: "(900) 900 0100 y (81) 8125 1700",
              email: "smartinez@climaproyectos.com.mx",
              site: "climaproyectos.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.0127568590506!2d-100.3258423850786!3d25.737091715900316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629446e971aa85%3A0x384c9b5e4badc318!2sAv.%20Almaz%C3%A1n%201074%2C%20Topo%20Chico%2C%2064260%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1632538184113!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "",
              partner: "CN8 PROYECTOS SA DE CV",
              titular: "Francisco Davila",
              calle: "Manzanares 135, Col. Cumbres, 64345",
              phone: "(818) 027 7174 y (81) 8465 8484",
              email: "proyectos01@cn8.com.mx",
              site: "",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.676169003841!2d-100.41341288507837!3d25.748220515442718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662973a2156f9e3%3A0x5529a1e8f941fe6f!2sCda.%20Manzanares%20135%2C%20Cerradas%20de%20Cumbres%2C%2064100%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1632538515106!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "coolparts.png",
              partner: "COOL & PARTS DE MEXICO SA DE CV",
              titular: "Francisco Davila",
              calle:
                "Leopoldo González Sáenz 3608, Burócratas Municipales, 64769",
              phone: "(81) 2526 5710 y (81) 8287 4698",
              email: "miguel.perez@coolpartsmexico.com",
              site: "coolpartsmexico.com ",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.0604961673175!2d-100.29569268508031!3d25.636117620044057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bfa5f8ff5c5f%3A0xdec829112e9062f8!2sLeopoldo%20Gonz%C3%A1lez%20S%C3%A1enz%203608%2C%20Bur%C3%B3cratas%20Municipales%2C%2064769%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1632538792545!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "ClimaSierraMadre.png",
              partner: "SIERRA MADRE NORTE SA DE CV",
              titular: "Francisco Davila",
              calle:
                "Av. Jose Eleuterio Gonzalez 2150, Col. Los Urdiales 64430",
              phone: "(81) 8004 8900 y (81) 1539 8776",
              email: "ventas@climassierramadre.com",
              site: "climassierramadre.com",
              map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28761.502733177844!2d-100.348112!3d25.698204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662967676069235%3A0x398b07609ec27344!2sDr.%20Jos%C3%A9%20Eleuterio%20Gonz%C3%A1lez%20(Gonzalitos)%202150%2C%20Los%20Urdiales%2C%2064430%20Monterrey%2C%20N.L.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1632539379600!5m2!1ses!2sus",
            },
          },
          {
            content: {
              image: "NAV_logo.png",
              partner: "SURTIDORA ARIA SA DE CV",
              titular: "Sara Díaz",
              calle:
                "Gonzalitos Num. 289 – Esq. Paricutín, Col. Los Urdiales 64430",
              phone: "(81) 2087 1010 al 12",
              email: "contacto@saria.mx",
              site: "saria.mx",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.7889734016255!2d-100.35145377080663!3d25.699261998979043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629675990fc311%3A0x7e2d18089c0ff68a!2sDr.%20Jos%C3%A9%20Eleuterio%20Gonz%C3%A1lez%20(Gonzalitos)%201077%2C%20Los%20Urdiales%2C%2064430%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1632539816517!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "LOGO-EQUIPSA.png",
              partner: "Equipsa Refrigeración",
              calle:
                "Av. Bernardo reyes #3742 norte, Colonia popular C.p. 64290, Monterrey Nuevo león",
              phone: "(81) 1016-2442",
              email: "eortiz@equipsamty.com",
              site: "www.equipsa.com.mx",
            },
          },
        ],
      },
    ],
  },
  bajacalifornia: {
    state: "Baja California",
    cities: [
      {
        id: "mexicali",
        city: "Mexicali",
        distributors: [
          {
            content: {
              image: "logo_becerril.png",
              partner: "BECERRIL REFRIGERACION SA DE CV",
              titular: "Noelia Ayala",
              calle: "Blvd Benito Juárez 2500, Col. Maestros Estatales 21280",
              phone: "(686) 566 2470",
              email: "cesar@becerril.com",
              site: "becerril.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.01028016186!2d-115.44921478494152!3d32.632549698645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d770f4873aedef%3A0xd78120ba3f342517!2sBoulevar%20Benito%20Ju%C3%A1rez%202500%2C%20Parcela%2044%2C%20Mexicali%2C%20B.C.!5e0!3m2!1ses-419!2smx!4v1632541058347!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "",
              partner: "CLIMAPROYECTOS SA DE CV",
              titular: "Sara Díaz",
              calle: "Calz Independencia 1750, Col. Independencia 21290",
              phone: "(800) 900 0300 y (686) 561 4517",
              email: "amontano@climaproyectos.com.mx",
              site: "climaproyectos.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3995.4406191504345!2d-115.43252239063872!3d32.639435340828705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d770ff3a909ab7%3A0x37692477b4d0ff!2sCalz%20Independencia%201750%2C%20Independencia%2C%20Mexicali%2C%20B.C.!5e0!3m2!1ses-419!2smx!4v1632541400281!5m2!1ses-419!2smx",
            },
          },
        ],
      },
      {
        id: "tijuana",
        city: "Tijuana",
        distributors: [
          {
            content: {
              image: "",
              partner: "CLIMAPROYECTOS SA DE CV",
              titular: "Sara Díaz",
              calle: "Vía Rápida oriente 15260, Rio Tijuana 3ra Etapa 22226",
              phone: "(800) 900 0500 y (664) 621 2145",
              email: "cduran@climaproyectos.com.mx",
              site: "climaproyectos.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.892120090606!2d-116.95316568494451!3d32.50231240524867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d938701a1291a9%3A0x8e933d10135314d5!2s%E2%9B%89%20Via%20Rapida%20oriente%2015260%2C%20Rio%20Tijuana%203ra%20Etapa%2C%2022226%20Tijuana%2C%20B.C.!5e0!3m2!1ses-419!2smx!4v1632541794602!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "",
              partner: "CLIMAPROYECTOS SA DE CV",
              titular: "Noelia Ayala",
              calle: "Vía Rápida oriente 15260, Rio Tijuana 3ra Etapa 22226",
              phone: "(664) 621 2145",
              email: "cduran@climaproyectos.com.mx",
              site: "climaproyectos.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.892120090606!2d-116.95316568494451!3d32.50231240524867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d938701a1291a9%3A0x8e933d10135314d5!2s%E2%9B%89%20Via%20Rapida%20oriente%2015260%2C%20Rio%20Tijuana%203ra%20Etapa%2C%2022226%20Tijuana%2C%20B.C.!5e0!3m2!1ses-419!2smx!4v1632541794602!5m2!1ses-419!2smx",
            },
          },
        ],
      },
    ],
  },
  sonora: {
    state: "Sonora",
    cities: [
      {
        id: "hermosillo",
        city: "Hermosillo",
        distributors: [
          {
            content: {
              image: "",
              partner: "CLIMAPROYECTOS SA DE CV",
              titular: "Sara Díaz",
              calle: "Paseo Río Sonora 197, Proyecto Rio Sonora 83270",
              phone: "(800) 900 0700 y (662) 260 1700",
              email: "jruiz@climaproyectos.com.mx",
              site: "climaproyectos.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.2620317908486!2d-110.94439758501682!3d29.068400970970764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce8454c0c6bfa7%3A0xdd53bb91f2715d00!2sClimaproyectos%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1632542261762!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "LOGO-EQUIPSA.png",
              partner: "Equipsa Refrigeración",
              calle:
                "Cuernavaca #55, Col. San Benito C.P. 83190, Casi esquina con Veracruz, Hermosillo, Sonora",
              phone: "(662) 437-7840 - (662) 437-7841",
              email: "jgaxiola@equipsason.com",
              site: "www.equipsa.com.mx",
            },
          },
        ],
      },
      {
        id: "obregon",
        city: "Obregón",
        distributors: [
          {
            content: {
              image: "LOGO-EQUIPSA.png",
              partner: "Equipsa Refrigeración",
              calle:
                "Blvd. Rodolfo Elías Calles, #1005-A Pte, Col. Sochiloa, CP85150",
              phone: "(644) 204-0561",
              email: "ealvarez@equipsabc.com.mx",
              site: "www.equipsa.com.mx",
            },
          },
        ],
      },
    ],
  },
  bajacaliforniasur: {
    state: "Baja California Sur",
    cities: [
      {
        id: "lapaz",
        city: "La Paz",
        distributors: [
          {
            content: {
              image: "itcsa_logo.png",
              partner: "INSTALACIONES TECNICAS CALIFOR",
              titular: "Noelia Ayala",
              calle: "Bravo 615, Zona Central, 23000",
              phone: "(612) 122 3636",
              email: "larechi@prodigy.net.mx",
              site: "itcsalapaz.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.4852702517255!2d-110.31575418510495!3d24.154708379127808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86afd35b5c5553e1%3A0x723c9ae94d2e0331!2sNicol%C3%A1s%20Bravo%20615%2C%20Zona%20Central%2C%2023000%20La%20Paz%2C%20B.C.S.!5e0!3m2!1ses-419!2smx!4v1632542691645!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "LOGO-EQUIPSA.png",
              partner: "Equipsa Refrigeración",
              calle:
                "Melchor Ocampo 907, Col. Centro C.P. 23000, Entre Josefa Ortiz y Héroes de Independencia, La Paz, BCS",
              phone: "(612) 122-3553 y (612) 122-3513",
              email: "eosuna@equipsabc.com.mx",
              site: "www.equipsa.com.mx",
            },
          },
        ],
      },
      {
        id: "constitucion",
        city: "Constitución",
        distributors: [
          {
            content: {
              image: "LOGO-EQUIPSA.png",
              partner: "Equipsa Refrigeración",
              calle:
                "Blvd. Agustín Olachea S/N, entre Madero y Carranza, Col. Centro C.P. 23600, Ciudad Constitución",
              phone: "(613) 132-5970",
              email: "luis.lizarraga@equipsabc.com.mx",
              site: "www.equipsa.com.mx",
            },
          },
        ],
      },
      {
        id: "cabosanlucas",
        city: "Cabo San Lucas",
        distributors: [
          {
            content: {
              image: "LOGO-EQUIPSA.png",
              partner: "Equipsa Refrigeración",
              calle:
                "Calle Adolfo López Mateos, esq. Ignacio Zaragoza, Local  #4, Col. Mariano Matamoros, Cabo San Lucas CP 23468",
              phone: "(624) 105-1229",
              email: "karlo.diaz@equipsabc.com.mx",
              site: "www.equipsa.com.mx",
            },
          },
        ],
      },
    ],
  },
  quintanaroo: {
    state: "Quintana Roo",
    cities: [
      {
        id: "cancun",
        city: "Cancún",
        distributors: [
          {
            content: {
              image: "",
              partner: "CLIMAPROYECTOS SA DE CV",
              titular: "Sara Díaz",
              calle:
                "Av. Uxmal, Supermanzana 24, Manzana 09 Local B, Lote 110, 77509",
              phone: "(800) 900 0350 y (998) 887 3594",
              email: "ygongora@climaproyectos.com.mx",
              site: "climaproyectos.com",
              map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7441.270965101588!2d-86.832702!3d21.1669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5929832c81b63a2!2sClimaproyectos%20S.A.%20de%20C.V.!5e0!3m2!1ses!2sus!4v1632543156866!5m2!1ses!2sus",
            },
          },
          {
            content: {
              image: "logo_refrimart.png",
              partner: "REFRIMART DE MEXICO SA DE CV",
              titular: "Cynthia Lopez",
              calle:
                "Av. Uxmal, Supermanzana 24, Manzana 09 Local B, Lote 110, 77509",
              phone: "(998) 884 4525",
              email: "luism.rendon@refrimartdemexico.com.mx",
              site: "refrimartmexico.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.7706872894364!2d-86.82883399433433!3d21.155863975358756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2bf919e77f39%3A0x20c51102aa14d08a!2sRefrimart!5e0!3m2!1ses-419!2smx!4v1632543372277!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "",
              partner: "SICASA ST SA DE CV",
              titular: "Cynthia Lopez",
              calle: "Av. Kabah 20, Huitzilin, 17, 77505",
              phone: "(998) 823 4097",
              email: "jezapata@sicasa.com.mx",
              site: "sicasa.com.mx ",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.57444385257418!2d-86.83494220413257!3d21.144791840294058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c79cc41752f%3A0x9cbd311118392ebe!2sSICASA!5e0!3m2!1ses-419!2smx!4v1632543850658!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "LOGO-EQUIPSA.png",
              partner: "Equipsa Refrigeración",
              calle:
                "Av Jose López Portillo SM63, M46, Lt 9 Local 1, C.P 77513, Cancún Quintana Roo",
              phone: "(998) 361-0301,  (998) 361-0302",
              email: "cvaldez@equipsasureste.com",
              site: "www.equipsa.com.mx",
            },
          },
        ],
      },
    ],
  },
  yucatan: {
    state: "Yucatán",
    cities: [
      {
        id: "merida",
        city: "Mérida",
        distributors: [
          {
            content: {
              image: "",
              partner: "CLIMAPROYECTOS SA DE CV",
              titular: "Sara Díaz",
              calle: "Calle 59 617, Barrio de Santiago, Centro, 97000",
              phone: "(800) 900 0250 y (999) 923 4100",
              email: "aramirez@climaproyectos.com.mx",
              site: "climaproyectos.com",
              map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7451.078522479701!2d-89.637301!3d20.971010000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2fe5dc07f0df45fb!2sClimaproyectos%20S.A.%20de%20C.V.!5e0!3m2!1ses!2sus!4v1632544164415!5m2!1ses!2sus",
            },
          },
          {
            content: {
              image: "logo_refrimart.png",
              partner: "REFRIMART DE MEXICO SA DE CV",
              titular: "Cynthia Lopez",
              calle: "Calle 43 No. 458 x 52 y 54, Col. Centro, 97000",
              phone: "(999) 923 6162",
              email: "luis.rendon@refrimartdemexico.com.mx",
              site: "refrimartmexico.com",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.3910986409865!2d-89.618254285152!3d20.976954194920996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5673e69be37a45%3A0xd8232ef0b800a734!2sRefrimart%20De%20Mexico%20SA%20De%20CV!5e0!3m2!1ses-419!2smx!4v1632544375872!5m2!1ses-419!2smx",
            },
          },
          {
            content: {
              image: "LOGO-EQUIPSA.png",
              partner: "Equipsa Refrigeración",
              calle:
                "Diagonal 15 #98, Col. Yucatán C.P.  97050, Circuito Colonias, Mérida, Yucatán",
              phone: "(999) 374-4138 - (999) 374-2403",
              email: "jcespedes@equipsasureste.com.mx",
              site: "www.equipsa.com.mx",
            },
          },
        ],
      },
    ],
  },
};

function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [setstateOption, setSetstateOption] = useState({});
  const [dataDistributors, setDataDistributors] = useState({});

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  const fetchData = () => {
    axios
      .get("/api/distributorsByState.json")
      .then((response) => {
        setDataDistributors(response.data);
        /* console.log(response.data); */
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const options = Object.values(dataDistributors);

  /* console.log(dataDis) */
  return (
    <Container fluid className="fixed-top px-0 bg-white" id="home">
      {/* Menu Phone */}
      <Navbar className="d-block d-xl-none bg-gray shadow" expand="lg">
        <Container className="py-3 px-1">
          <Navbar.Brand>
            <Link className="text-decoration-none text-black" to={"/"}>
              <img
                className="logo-img"
                src={require("../img/logo_171x37.png")}
                alt="Logo Daikin México"
                width={200}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" className="me-3" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link
                  className="text-decoration-none text-black"
                  to={"/cultura"}
                >
                  Cultura Daikin
                </Link>
              </Nav.Link>
              <NavDropdown title="Productos" id="navbarDropdown">
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-black" to={"/"}>
                    <i className="bi bi-chevron-right"></i> VRV
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-black" to={"/"}>
                    <i className="bi bi-chevron-right"></i> Residencial
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-black" to={"/"}>
                    <i className="bi bi-chevron-right"></i> Aplicado
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-black"
                  to={"/servicios"}
                >
                  Servicios
                </Link>
              </Nav.Link>
              <Nav.Link onClick={handleShowModal}>Distribuidores</Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-black"
                  to={"/noticias"}
                >
                  Noticias e Industria
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Menu computer */}
      <Navbar className="d-xl-block d-none" expand="lg">
        <Container className="py-2">
          <Navbar.Brand>
            <Link className="text-decoration-none text-black" to={"/"}>
              <img
                className="logo-img"
                src={require("../img/logo_171x37.png")}
                alt="Logo Daikin México"
                width={160}
              />
              <span className="fontsize-1 country ms-3">MÉXICO</span>
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="https://www.daikin.com/">
              DAIKIN GLOBAL <i className="bi bi-globe"></i>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-secondary" to={"/"}>
                CONTACTO
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar className="d-xl-block d-none bg-gray shadow" expand="lg">
        <Container>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                className="text-decoration-none text-secondary"
                to={"/cultura"}
              >
                Cultura Daikin
              </Link>
            </Nav.Link>
            <NavDropdown title="Productos" id="navbarDropdown">
              <NavDropdown.Item>
                <Link
                  className="text-decoration-none text-secondary"
                  to={"/vrv"}
                >
                  <i className="bi bi-chevron-right"></i> VRV
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="text-decoration-none text-secondary"
                  to={"/residencial"}
                >
                  <i className="bi bi-chevron-right"></i> Residencial
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="text-decoration-none text-secondary"
                  to={"/"}
                >
                  <i className="bi bi-chevron-right"></i> Aplicado
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link
                className="text-decoration-none text-secondary"
                to={"/servicios"}
              >
                Servicios
              </Link>
            </Nav.Link>
            <Nav.Link onClick={handleShowModal}>Distribuidores</Nav.Link>
            <Nav.Link>
              <Link
                className="text-decoration-none text-secondary"
                to={"/noticias"}
              >
                Noticias e Industria
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Modal centrado verticalmente */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Elige un estado:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dataDistributors != null ? (
            <Autocomplete
              disablePortal
              id="grouped-state"
              options={options}
              getOptionLabel={(option) => option.state}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Estado" />}
              onChange={(event, value) => {
                setSetstateOption(value);
              }}
            />
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Link
            className="btn btn-primary"
            to={"/distribuidores"}
            onClick={handleCloseModal}
            state={setstateOption}
          >
            Continuar
          </Link>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Menu;
