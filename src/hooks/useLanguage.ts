import { useState, useEffect } from "react";

export type LanguageCode = "es" | "en";

export const translations = {
  es: {
    welcome_screen: {
      union: "Nuestra Unión",
      with_music: "Incluye música de fondo",
      open_btn: "Abrir Invitación",
      september_date: "05 de Septiembre de 2026",
    },
    hero: {
      wedding: "Nuestra Boda",
      subtitle: "Dános el honor de acompañarnos a celebrar nuestra unión de amor eterno.",
      date: "SÁBADO • 05 SEPTIEMBRE • 2026",
      place: "PARROQUIA SANTÍSIMA CRUZ DE ACEQUIA ALTA • CAYMA",
    },
    whatsapp: {
      tooltip: "Consultas por WhatsApp",
      default_msg: "¡Hola Jesús y Nuri! 💍✨ Acabo de abrir su espectacular invitación virtual. ¡Qué emoción compartir con ustedes este gran acontecimiento!",
    },
    countdown: {
      title: "Cada Segundo Nos Acerca Más",
      subtitle: "Acompáñanos a iniciar la cuenta regresiva para nuestro gran día",
      completed_title: "¡LLEGÓ EL GRAN DÍA!",
      completed_subtitle: "Hoy celebramos nuestro amor infinito",
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
      save_the_date: "Guarda la Fecha",
      month_year: "Septiembre 2026",
      wedding_day_label: "Boda",
      saturday: "Sábado",
      of: "de",
      cayma: "Cayma, Arequipa, Perú",
    },
    family: {
      blessing: "Con la Bendición de Dios",
      title: "Nuestras Familias",
      quote: '"Hoy honramos a quienes nos guiaron con amor incondicional, templanza y devota fe en nuestro camino."',
      bride_parents: "Padres de la Novia",
      groom_parents: "Padres del Novio",
      godparents: "Los Padrinos",
    },
    our_story: {
      label: "Nuestra Historia",
      title: 'El Camino Hacia el "Sí"',
      quote: '"Cada momento vivido nos trajo hasta aquí, y cada latido afirma que fuiste, eres y siempre serás tú."',
      milestone_1_title: "El Comienzo de Todo",
      milestone_1_text: "Aquel primer café donde una mirada tímida se convirtió en una conversación de horas. Había algo mágico en el ambiente, una conexión inexplicable. Ese día supimos que nuestras vidas cambiarían para siempre y que empezábamos a escribir nuestro propio destino.",
      milestone_2_title: "Aventuras de Dos",
      milestone_2_text: "Viajes espontáneos, atardeceres contemplados en silencio y risas descontroladas compartidas bajo la lluvia. Cada kilómetro recorrido, cada melodía descubierta y cada obstáculo superado consolidó un amor maduro, lleno de complicidad y confianza mutua.",
      milestone_3_title: "Nuestra Complicidad",
      milestone_3_text: "En los días ordinarios también encontramos magia. El café de las mañanas, el apoyo incondicional en los momentos de cansancio y el refugio cálido de nuestros abrazos nos demostraron que el amor real se construye en los pequeños detalles que hacen la vida hermosa.",
      milestone_4_title: "La Propuesta",
      milestone_4_text: "Con el corazón latiendo acelerado y bajo un cielo estrellado y luces de colores navideñas, llegó la pregunta más importante y deseada de nuestras vidas. Un 'SÍ, ACEPTO' que resonó como una hermosa melodía que selló nuestra promesa eterna frente al mundo.",
      milestone_5_title: "Preparando el Gran Día",
      milestone_5_text: "Entre preparativos, decisiones compartidas e ilusiones desbordantes, construimos día a día el inicio de lo que será nuestro hogar. Cada detalle es pensado para celebrar nuestra unión en compañía de las personas que más amamos y respetamos en esta vida.",
      milestone_6_title: "Nuestro 'Para Siempre'",
      milestone_6_text: "El inicio formal de nuestra unión matrimonial. Frente a Dios y a nuestros seres queridos, sellamos una alianza sagrada guiada por la fe, el respeto y la devoción eterna. Este paso es la cumbre de nuestra valiosa historia de amor y el amanecer de una nueva vida.",
    },
    events: {
      religious: "Ceremonia Religiosa",
      sacred_vow: "El Voto Sagrado",
      reception: "La Recepción",
      celebration: "La Gran Celebración",
      time: "Hora",
      place: "Lugar",
      cayma: "Cayma, Arequipa, Perú",
      after_service: "Inmediatamente después del oficio",
      view_map: "Ver Mapa",
      calendar: "Calendario",
      church_view: "Vista General",
      loc_ceremony: "Ubicación de Ceremonia",
      loc_party: "Ubicación de Recepción",
      maps_title: "Ubicaciones & Mapas Integrados",
      maps_desc: "Interectúa con los mapas interactivos o haz clic en las rutas para guiarte sin complicaciones.",
      view_route: "Ver Ruta en Maps",
    },
    schedule: {
      protocol: "Protocolo",
      title: "Cronograma del Evento",
      desc: "Cada instante de nuestro día mágico está planeado para gozar de tu grata calidez y felicidad.",
      event_1_title: "Ceremonia Religiosa",
      event_1_desc: "El solemne encuentro espiritual en la Parroquia Santísima Cruz. El juramento eterno de amor y entrega sagrada.",
      event_2_title: "Recepción",
      event_2_desc: "Ingreso de los distinguidos invitados y esposos a la majestuosa Casa Babilonia para la copa inicial de bienvenida.",
      event_3_title: "Almuerzo de Bodas",
      event_3_desc: "Un recorrido gastronómico gourmet especialmente preparado para homenajear a nuestros familiares y amigos más cercanos.",
      event_4_title: "El Brindis de Honor",
      event_4_desc: "Palabras sinceras de agradecimiento de parte de los consagrados novios y padres de familia del evento.",
      event_5_title: "La Gran Fiesta civil",
      event_5_desc: "Apertura formal de la pista de baile, luces, cotillón exclusivo y diversión sin fronteras para festejar nuestro matrimonio.",
    },
    dress_code: {
      etiquette: "Etiqueta",
      title: "Código de Vestimenta",
      desc: "Nos encantaría verlos lucir sus mejores galas para esta velada tan solemne y mágica.",
      ladies: "Damas",
      ladies_sub: "Vestido Largo Formal",
      ladies_desc: "Agradecemos su asistencia luciendo un vestido largo formal. Estilos sofisticados en los colores que más les favorezcan.",
      ladies_warning: "Evitar color Blanco / Marfil",
      gentlemen: "Caballeros",
      gentlemen_sub: "Traje Formal / Traje de Gala",
      gentlemen_desc: "Uso de traje formal de colores oscuros o Smoking clásico. Camisa formal blanca y corbata o corbatín que resalte su porte.",
      gentlemen_warning: "Smoking o Traje Oscuro",
    },
    gifts: {
      tag: "Detalles de Aprecio",
      title: "Mesa de Regalos",
      desc: "Su presencia en nuestro día de bodas es el regalo más grande. No obstante, si desean realizarnos un obsequio, les brindamos estas opciones:",
      envelope: "Lluvia de Sobres",
      envelope_sub: "Tradición en Efectivo",
      envelope_desc: "Dispondremos de un cofre especial para depositar sus sobres de felicitación y palabras de aliento el día del evento en la recepción de Casa Babilonia.",
      bank: "Cuentas Bancarias",
      bank_sub: "Transferencia Directa",
      bcp: "Banco BCP Soles",
      interbank: "Interbank Soles",
      acct_num: "Nº Cuenta",
      cci_num: "Nº CCI",
    },
    rsvp: {
      tag: "RSVP",
      title: "Confirmar Asistencia",
      desc: "Por favor, infórmanos de tu asistencia antes del 20 de agosto de 2026 para coordinar cada detalle de la recepción.",
      success_title: "¡Confirmación Enviada!",
      success_desc: "Hemos generado tu mensaje y abierto WhatsApp. Si la pestaña no cargó automáticamente, haz clic en el botón de abajo.",
      resend: "Volver a enviar",
      name_label: "Nombre Completo",
      name_placeholder: "Ej: Sr. y Sra. Ramírez Bravo",
      guests_label: "Cantidad de Invitados (Pases)",
      guest_1: "1 Persona (Pase Individual)",
      guest_2: "2 Personas (Pase de Pareja)",
      guest_3: "3 Personas (Familiar)",
      guest_4: "4 Personas (Familiar)",
      guest_5: "5 Personas (Mesa Reservada)",
      msg_label: "Mensaje o Dedicatoria Especial",
      msg_placeholder: "Escribe tus mejores deseos o detalles de alimentación...",
      submit_btn: "Confirmar Asistencia vía WhatsApp",
    },
    footer: {
      love: "Amor Eterno",
      title: "Jesús Manuel & Nuri Aydee",
      share_btn: "Compartir Invitación",
      copied: "¡Enlace Copiado!",
      tooltip_desc: "Copiar o compartir enlace de la invitación",
      rights: "Arequipa, Perú | Todos los derechos reservados © 2026",
      designer_tag: "Invitaciones Virtuales & Diseño Gráfico",
      designer_creators: "Creado con amor por VAC Creative",
    },
    audio: {
      text_mute: "Silenciar Música",
      text_play: "Reproducir Música",
    }
  },
  en: {
    welcome_screen: {
      union: "Our Union",
      with_music: "Includes background music",
      open_btn: "Open Invitation",
      september_date: "September 05, 2026",
    },
    hero: {
      wedding: "Our Wedding",
      subtitle: "Give us the honor of accompanying us to celebrate our eternal union of love.",
      date: "SATURDAY • SEPTEMBER 05 • 2026",
      place: "SANTÍSIMA CRUZ DE ACEQUIA ALTA PARISH • CAYMA",
    },
    whatsapp: {
      tooltip: "Queries via WhatsApp",
      default_msg: "Hello Jesús and Nuri! 💍✨ I have just opened your spectacular virtual invitation. How thrilling it is to share this wonderful event with you!",
    },
    countdown: {
      title: "Every Second Brings Us Closer",
      subtitle: "Join us in counting down to our big day",
      completed_title: "THE BIG DAY HAS ARRIVED!",
      completed_subtitle: "Today we celebrate our infinite love",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      save_the_date: "Save the Date",
      month_year: "September 2026",
      wedding_day_label: "Wedding",
      saturday: "Saturday",
      of: "of",
      cayma: "Cayma, Arequipa, Peru",
    },
    family: {
      blessing: "With God's Blessing",
      title: "Our Families",
      quote: '"Today we honor those who guided us with unconditional love, temperance, and devoted faith along our path."',
      bride_parents: "Parents of the Bride",
      groom_parents: "Parents of the Groom",
      godparents: "The Godparents",
    },
    our_story: {
      label: "Our Story",
      title: 'The Road to "I Do"',
      quote: '"Every moment lived brought us here, and every heartbeat confirms that you were, are, and always will be the one."',
      milestone_1_title: "The Beginning of Everything",
      milestone_1_text: "That first coffee where a shy look turned into a hours-long conversation. There was something magical in the air, an inexplicable connection. That day we knew our lives would change forever and we began writing our own destiny.",
      milestone_2_title: "Adventures of Two",
      milestone_2_text: "Spontaneous trips, sunsets contemplated in silence, and wild laughter shared in the rain. Every kilometer traveled, every song found, and every obstacle overcome consolidated a mature love full of complicity and mutual trust.",
      milestone_3_title: "Our Complicity",
      milestone_3_text: "We also found magic in ordinary days. Morning coffee, unconditional support when tired, and the warm shelter of our hugs demonstrated that real love is built in the small details that make life beautiful.",
      milestone_4_title: "The Proposal",
      milestone_4_text: "Heart racing under a starry sky and colorful Christmas lights, the most crucial and awaited question of our lives came. An 'I DO' that resonated like a beautiful melody, sealing our eternal promise before the world.",
      milestone_5_title: "Preparing the Big Day",
      milestone_5_text: "Between preparations, shared decisions, and overflowing dreams, day by day we built the beginning of our home. Every detail is thought out to celebrate our union in the company of those we love and respect most.",
      milestone_6_title: "Our 'Forever'",
      milestone_6_text: "The formal beginning of our marriage. Before God and our loved ones, we seal a sacred alliance guided by faith, respect, and eternal devotion. This step is the peak of our beautiful love story and the dawn of a new life.",
    },
    events: {
      religious: "Religious Ceremony",
      sacred_vow: "The Sacred Vow",
      reception: "The Reception",
      celebration: "The Grand Celebration",
      time: "Time",
      place: "Location",
      cayma: "Cayma, Arequipa, Peru",
      after_service: "Immediately after the service",
      view_map: "View Map",
      calendar: "Calendar",
      church_view: "General View",
      loc_ceremony: "Ceremony Venue",
      loc_party: "Reception Venue",
      maps_title: "Integrated Locations & Maps",
      maps_desc: "Interact with the map elements or click on directions to guide you smoothly.",
      view_route: "View Route on Maps",
    },
    schedule: {
      protocol: "Protocol",
      title: "Event Schedule",
      desc: "Every moment of our magical day is planned to enjoy your warm presence and happiness.",
      event_1_title: "Religious Ceremony",
      event_1_desc: "The solemn spiritual meeting at the Santísima Cruz Parish. The eternal vow of love and sacred commitment.",
      event_2_title: "Reception",
      event_2_desc: "Special guests and newlyweds check-in at the majestic Casa Babilonia for the welcoming glass of toast.",
      event_3_title: "Wedding Dinner/Lunch",
      event_3_desc: "A custom gourmet gastronomic journey prepared especially to honor our closest family members and friends.",
      event_4_title: "The Toast of Honor",
      event_4_desc: "Heartfelt words of gratitude from the newlyweds and their parents at the reception.",
      event_5_title: "The Great Civil Party",
      event_5_desc: "Formal open of the dancefloor, majestic lights, exclusive party favors, and limitless fun to celebrate our union.",
    },
    dress_code: {
      etiquette: "Etiquette",
      title: "Dress Code",
      desc: "We would love to see you wearing your best attire for this solemn and magical evening.",
      ladies: "Ladies",
      ladies_sub: "Formal Long Dress",
      ladies_desc: "We appreciate you wearing a formal long dress. Sophisticated designs in colors that suit you best.",
      ladies_warning: "Avoid White / Ivory",
      gentlemen: "Gentlemen",
      gentlemen_sub: "Formal Attire / Black Tie",
      gentlemen_desc: "Use dark formal suits or classic Tuxedo. Formal white shirt and tie or bow tie that highlights your elegance.",
      gentlemen_warning: "Tuxedo or Dark Suit",
    },
    gifts: {
      tag: "Details of Appreciation",
      title: "Gift Registry",
      desc: "Your presence on our wedding day is the greatest gift. However, if you would like to give us a present, we offer these options:",
      envelope: "Envelope Wedding",
      envelope_sub: "Cash Gift Tradition",
      envelope_desc: "We will arrange a special chest to place your congratulations envelopes and words of encouragement on the event day at Casa Babilonia reception.",
      bank: "Bank Accounts",
      bank_sub: "Direct Bank Transfer",
      bcp: "BCP Bank (Soles)",
      interbank: "Interbank (Soles)",
      acct_num: "Account No.",
      cci_num: "CCI No.",
    },
    rsvp: {
      tag: "RSVP",
      title: "Confirm Attendance",
      desc: "Please let us know if you are coming before August 20, 2026 to coordinate every single detail of the reception.",
      success_title: "Attendance Confirmed!",
      success_desc: "We have generated your confirmation text and opened WhatsApp. If it didn't open, click the button below.",
      resend: "Send again",
      name_label: "Full Name",
      name_placeholder: "e.g., Mr. and Mrs. Ramirez Bravo",
      guests_label: "Guests Count (Passes)",
      guest_1: "1 Person (Single Pass)",
      guest_2: "2 People (Couple Pass)",
      guest_3: "3 People (Family Pass)",
      guest_4: "4 People (Family Pass)",
      guest_5: "5 People (Reserved Table)",
      msg_label: "Special Dedication Message",
      msg_placeholder: "Write your best wishes or dietary requests here...",
      submit_btn: "Confirm Attendance via WhatsApp",
    },
    footer: {
      love: "Eternal Love",
      title: "Jesús Manuel & Nuri Aydee",
      share_btn: "Share Invitation",
      copied: "Link Copied!",
      tooltip_desc: "Copy or share the invitation URL",
      rights: "Arequipa, Peru | All rights reserved © 2026",
      designer_tag: "Virtual Invitations & Graphic Design",
      designer_creators: "Created with love by VAC Creative",
    },
    audio: {
      text_mute: "Mute Music",
      text_play: "Play Music",
    }
  }
};

export function useLanguage() {
  const [lang, setLang] = useState<LanguageCode>("es");

  useEffect(() => {
    if (typeof window !== "undefined" && window.navigator) {
      const detected = (window.navigator.language || "es").slice(0, 2).toLowerCase();
      if (detected === "en") {
        setLang("en");
      } else {
        setLang("es");
      }
    }
  }, []);

  const t = (key: string, fallback?: string): string => {
    const parts = key.split(".");
    let current: any = translations[lang];

    for (const part of parts) {
      if (current && typeof current === "object" && part in current) {
        current = current[part];
      } else {
        // Fallback to Spanish translation
        let fallbackVal: any = translations["es"];
        for (const fPart of parts) {
          if (fallbackVal && typeof fallbackVal === "object" && fPart in fallbackVal) {
            fallbackVal = fallbackVal[fPart];
          } else {
            fallbackVal = null;
            break;
          }
        }
        return typeof fallbackVal === "string" ? fallbackVal : fallback || key;
      }
    }

    return typeof current === "string" ? current : fallback || key;
  };

  return { lang, t, setLang };
}
