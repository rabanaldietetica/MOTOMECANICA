import './style.css';

const WHATSAPP = '5491154235076';
const whatsappMessage =
  'Hola, MOTOMECANICA. Encontré el taller a través de la página web y quisiera consultar por un trabajo para mi moto. ¿Me podrían informar cómo proceder?';

const whatsappUrl =
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`;

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Av.+La+Plata+2926,+Pompeya,+CABA';

const services = [
  {
    icon: '01',
    title: 'MECÁNICA GENERAL',
    text: 'Service, mantenimiento preventivo, puesta a punto, revisiones generales y reparación de fallas mecánicas.'
  },
  {
    icon: '02',
    title: 'MOTOR',
    text: 'Diagnóstico, reparación y armado de motores, válvulas, distribución, juntas, cilindros, pistones, aros, cigüeñal y más.'
  },
  {
    icon: '03',
    title: 'ELECTRICIDAD',
    text: 'Diagnóstico de fallas eléctricas, cableado, batería, carga, arranque, luces, fusibles, relés y sistemas eléctricos.'
  },
  {
    icon: '04',
    title: 'ELECTRÓNICA',
    text: 'Revisión de sensores, sistemas electrónicos, encendido e inyección y diagnóstico especializado según el modelo.'
  },
  {
    icon: '05',
    title: 'CARBURACIÓN',
    text: 'Limpieza, regulación, sincronización, puesta a punto y diagnóstico de problemas de alimentación.'
  },
  {
    icon: '06',
    title: 'INYECCIÓN',
    text: 'Diagnóstico de inyección electrónica, cuerpo de aceleración, alimentación y fallas de funcionamiento.'
  },
  {
    icon: '07',
    title: 'TRANSMISIÓN',
    text: 'Cadena, piñón, corona, kit de transmisión, tensado, lubricación, embrague y diagnóstico de caja.'
  },
  {
    icon: '08',
    title: 'FRENOS',
    text: 'Pastillas, discos, campanas, zapatas, líquido, purgado, bombas, pinzas y revisión integral del sistema.'
  },
  {
    icon: '09',
    title: 'SUSPENSIÓN',
    text: 'Barrales, retenes, aceite de suspensión, amortiguadores, dirección, rodamientos y componentes del tren delantero.'
  },
  {
    icon: '10',
    title: 'RUEDAS Y NEUMÁTICOS',
    text: 'Cambio de neumáticos, cámaras, válvulas, pinchaduras, rodamientos y revisión de ruedas y llantas.'
  },
  {
    icon: '11',
    title: 'DIAGNÓSTICO',
    text: 'Buscamos la causa del problema antes de cambiar piezas innecesariamente. Diagnóstico mecánico, eléctrico y electrónico.'
  },
  {
    icon: '12',
    title: 'PERFORMANCE',
    text: 'Puesta a punto, mejoras de respuesta, modificaciones y preparación orientada al uso deportivo.'
  },
  {
    icon: '13',
    title: 'PREPARACIÓN',
    text: 'Preparación de motos para uso exigente, deportivo o de competición, según las necesidades del proyecto.'
  },
  {
    icon: '14',
    title: 'RESTAURACIÓN',
    text: 'Recuperación de motos que estuvieron paradas, puesta en marcha, revisión completa y recuperación mecánica.'
  },
  {
    icon: '15',
    title: 'POST-ACCIDENTE',
    text: 'Revisión de motos después de una caída o accidente, buscando daños mecánicos, eléctricos y estructurales.'
  },
  {
    icon: '16',
    title: 'PERSONALIZACIÓN',
    text: 'Instalación de accesorios, componentes, iluminación, manillares, espejos, puños y diferentes mejoras.'
  }
];

const gallery = Array.from({ length: 11 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return `/images/foto-${number}.png`;
});

const videos = [
  { number: '01', file: 'video-01.mp4' },
  { number: '02', file: 'video-02.mp4' },
  { number: '03', file: 'video-03.mp4' },
  { number: '04', file: 'video-04.mp4' },
  { number: '05', file: 'video-05.mp4' },
  { number: '06', file: 'video-07.mp4' },
  { number: '07', file: 'video-08.mp4' }
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="site-shell">

    <header class="topbar">
      <a class="brand" href="#inicio" aria-label="MOTOMECANICA">
        <img src="/images/logo.jpg" alt="MOTOMECANICA">
      </a>

      <a class="topbar-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener">
        <span class="wa-symbol">◉</span>
        WHATSAPP
      </a>
    </header>

    <main>

      <!-- HERO -->
      <section class="hero" id="inicio">
        <div class="hero-checkers"></div>

        <div class="hero-copy">
          <span class="eyebrow">MOTORCYCLE SERVICE · POMPEYA</span>

          <h1>
            TU MOTO<br>
            <strong>EN MANOS</strong><br>
            DE EXPERTOS.
          </h1>

          <p class="hero-description">
            Mecánica, mantenimiento y performance para que tu moto funcione
            como tiene que funcionar: con seguridad, precisión y respuesta.
          </p>

          <a class="primary-button" href="${whatsappUrl}" target="_blank" rel="noopener">
            CONSULTAR POR WHATSAPP
            <span>→</span>
          </a>

          <div class="hero-location">
            <strong>AV. LA PLATA 2926</strong>
            <span>POMPEYA · CABA</span>
          </div>
        </div>

        <div class="hero-bike">
          <div class="hero-bike-number">01</div>
          <img src="/images/portada.png" alt="MOTOMECANICA - motocicleta de competición">
        </div>

        <div class="hero-racing-line"></div>

        <div class="hero-bottom">
          <span>PRECISIÓN</span>
          <span>SEGURIDAD</span>
          <span>PERFORMANCE</span>
        </div>
      </section>

      <!-- MANIFIESTO -->
      <section class="manifesto">
        <span class="section-kicker">MOTOMECANICA · POMPEYA</span>

        <h2>
          CADA KILÓMETRO<br>
          <em>CUENTA.</em>
        </h2>

        <div class="manifesto-grid">
          <div>
            <p class="lead">
              TU MOTO NO ES SOLAMENTE UN MEDIO DE TRANSPORTE.
            </p>
          </div>

          <div>
            <p>
              Es tu forma de moverte, trabajar, viajar y disfrutar de la ruta.
              Por eso un buen mantenimiento no debería limitarse a cambiar una
              pieza cuando algo falla.
            </p>

            <p>
              En MOTOMECANICA buscamos entender qué necesita tu moto, detectar
              los problemas y realizar el trabajo con criterio. Desde un
              mantenimiento periódico hasta una reparación más compleja,
              queremos que vuelvas a la calle con una moto confiable y lista
              para seguir sumando kilómetros.
            </p>
          </div>
        </div>
      </section>

      <!-- BENEFICIOS -->
      <section class="benefits">
        <div class="section-heading">
          <span class="section-kicker">POR QUÉ ELEGIRNOS</span>
          <h2>TU MOTO<br><em>MERECE MÁS.</em></h2>
        </div>

        <div class="benefit-grid">
          <article>
            <span class="benefit-number">01</span>
            <h3>DIAGNÓSTICO</h3>
            <p>Buscamos la causa del problema antes de reemplazar componentes sin necesidad.</p>
          </article>

          <article>
            <span class="benefit-number">02</span>
            <h3>SEGURIDAD</h3>
            <p>Frenos, neumáticos, transmisión, suspensión y funcionamiento general: todo importa.</p>
          </article>

          <article>
            <span class="benefit-number">03</span>
            <h3>MANTENIMIENTO</h3>
            <p>Un mantenimiento realizado a tiempo puede evitar problemas mayores y gastos innecesarios.</p>
          </article>

          <article>
            <span class="benefit-number">04</span>
            <h3>PERFORMANCE</h3>
            <p>Una moto correctamente puesta a punto responde mejor y transmite otra sensación al conducir.</p>
          </article>

          <article>
            <span class="benefit-number">05</span>
            <h3>ATENCIÓN</h3>
            <p>Cada moto tiene una historia diferente. Escuchamos el problema y evaluamos el trabajo necesario.</p>
          </article>
        </div>
      </section>

      <!-- PROPAGANDA -->
      <section class="why-us">
        <div class="why-copy">
          <span class="section-kicker">EL TALLER QUE TU MOTO NECESITA</span>

          <h2>
            NO ESPERES<br>
            A QUE EL PROBLEMA<br>
            <em>SE HAGA GRANDE.</em>
          </h2>

          <p class="large-copy">
            Los pequeños ruidos, una vibración diferente, una dificultad para
            arrancar, una pérdida, un freno que no responde como antes o una
            moto que dejó de sentirse igual pueden ser señales de que algo
            necesita atención.
          </p>

          <p>
            Llevar la moto a revisión a tiempo permite detectar desgaste,
            prevenir averías y mantener en condiciones los componentes que
            hacen posible que puedas circular con seguridad.
          </p>

          <p>
            En MOTOMECANICA trabajamos con una visión integral: motor,
            transmisión, frenos, suspensión, electricidad, alimentación y
            diagnóstico. Porque una moto no funciona por una sola pieza.
            Funciona cuando todo trabaja correctamente en conjunto.
          </p>

          <a class="outline-button" href="${whatsappUrl}" target="_blank" rel="noopener">
            HABLAR CON MOTOMECANICA →
          </a>
        </div>

        <div class="why-visual">
          <div class="checker-panel">
            <span>RACING</span>
            <strong>02</strong>
          </div>
          <img src="/images/foto-01.png" alt="Trabajo de MOTOMECANICA">
        </div>
      </section>

      <!-- SERVICIOS -->
      <section class="services" id="servicios">
        <div class="section-heading centered">
          <span class="section-kicker">SERVICIOS · MECÁNICA · PERFORMANCE</span>
          <h2>TODO LO QUE<br><em>TU MOTO NECESITA.</em></h2>
          <p>
            Una propuesta amplia para mantenimiento, reparación, diagnóstico,
            puesta a punto y preparación de motos.
          </p>
        </div>

        <div class="service-grid">
          ${services.map(service => `
            <article class="service-card">
              <div class="service-top">
                <span class="service-number">${service.icon}</span>
                <span class="service-arrow">↗</span>
              </div>
              <h3>${service.title}</h3>
              <p>${service.text}</p>
            </article>
          `).join('')}
        </div>

        <div class="service-highlight">
          <span class="highlight-number">03</span>
          <div>
            <span class="section-kicker">UN PROBLEMA · UNA MOTO · UNA SOLUCIÓN</span>
            <h3>¿TENÉS UNA FALLA O UN TRABAJO ESPECIAL?</h3>
            <p>
              Contanos qué le pasa a tu moto, qué trabajo necesitás o qué
              proyecto tenés en mente. Evaluamos el caso y te orientamos sobre
              la mejor manera de resolverlo.
            </p>
          </div>
          <a class="primary-button small" href="${whatsappUrl}" target="_blank" rel="noopener">
            CONSULTAR
            <span>→</span>
          </a>
        </div>
      </section>

      <!-- GALERÍA -->
      <section class="gallery-section" id="trabajos">
        <div class="section-heading">
          <span class="section-kicker">PIT LANE · TRABAJOS</span>
          <h2>EL TRABAJO<br><em>HABLA SOLO.</em></h2>
          <p>
            Una selección de trabajos y momentos del mundo MOTOMECANICA.
          </p>
        </div>

        <div class="gallery-grid">
          ${gallery.map((image, index) => `
            <button class="gallery-item" type="button" data-image="${image}">
              <img src="${image}" alt="Trabajo MOTOMECANICA ${String(index + 1).padStart(2, '0')}" loading="lazy">
              <span>${String(index + 1).padStart(2, '0')}</span>
            </button>
          `).join('')}
        </div>
      </section>

      <!-- MENSAJE COMERCIAL -->
      <section class="sales-section">
        <div class="sales-number">04</div>

        <span class="section-kicker">MANTENIMIENTO · CONFIANZA · KILÓMETROS</span>

        <h2>
          TU PRÓXIMO<br>
          KILÓMETRO<br>
          <em>EMPIEZA ACÁ.</em>
        </h2>

        <p>
          Una moto cuidada no solamente se ve mejor. Se siente mejor, responde
          mejor y te permite disfrutar cada recorrido con mayor tranquilidad.
        </p>

        <p>
          No esperes a quedar tirado para ocuparte de ella. Un service,
          una revisión o un diagnóstico a tiempo pueden marcar la diferencia
          entre una simple reparación y un problema mucho mayor.
        </p>

        <a class="primary-button" href="${whatsappUrl}" target="_blank" rel="noopener">
          QUIERO CONSULTAR POR MI MOTO
          <span>→</span>
        </a>
      </section>

      <!-- VIDEOS -->
      <section class="videos" id="videos">
        <div class="section-heading">
          <span class="section-kicker">RACING VIDEOS</span>
          <h2>PIT<br><em>LANE.</em></h2>
          <p>MOVIMIENTO REAL · TRABAJO REAL</p>
        </div>

        <div class="video-grid">
          ${videos.map(video => `
            <article class="video-card">
              <div class="video-number">${video.number}</div>
              <video controls preload="metadata" playsinline>
                <source src="/videos/${video.file}" type="video/mp4">
                Tu navegador no puede reproducir este video.
              </video>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- CONTACTO -->
      <section class="contact-section" id="contacto">
        <div class="contact-racing">
          <span>05</span>
          <strong>GO</strong>
        </div>

        <div class="contact-copy">
          <span class="section-kicker">MOTOMECANICA · POMPEYA · CABA</span>

          <h2>
            LISTO PARA<br>
            VOLVER A<br>
            <em>LA RUTA?</em>
          </h2>

          <p>
            Consultanos por mantenimiento, reparación, diagnóstico,
            performance o cualquier trabajo que necesite tu moto.
          </p>

          <a class="primary-button" href="${whatsappUrl}" target="_blank" rel="noopener">
            WHATSAPP
            <span>→</span>
          </a>
        </div>

        <div class="contact-details">
          <a href="${mapsUrl}" target="_blank" rel="noopener">
            <span class="detail-label">DIRECCIÓN</span>
            <strong>AV. LA PLATA 2926</strong>
            <span>POMPEYA · CABA</span>
          </a>

          <div>
            <span class="detail-label">TELÉFONO</span>
            <strong>11 5423-5076</strong>
          </div>

          <div>
            <span class="detail-label">ATENCIÓN</span>
            <strong>LUNES A SÁBADOS</strong>
            <span>09:00 A 18:00 HS</span>
          </div>
        </div>
      </section>

    </main>

    <footer>
      <div class="footer-checkers"></div>
      <div class="footer-inner">
        <strong>MOTOMECANICA</strong>
        <span>PASIÓN · PRECISIÓN · PERFORMANCE</span>
        <span>AV. LA PLATA 2926 · POMPEYA · CABA</span>
      </div>
    </footer>

    <!-- LIGHTBOX -->
    <div class="lightbox" id="lightbox" aria-hidden="true">
      <button class="lightbox-close" type="button" aria-label="Cerrar">×</button>
      <img id="lightbox-image" src="" alt="Imagen ampliada">
    </div>

  </div>
`;

const lightbox = document.querySelector<HTMLDivElement>('#lightbox');
const lightboxImage = document.querySelector<HTMLImageElement>('#lightbox-image');
const lightboxClose = document.querySelector<HTMLButtonElement>('.lightbox-close');

document.querySelectorAll<HTMLButtonElement>('.gallery-item').forEach(button => {
  button.addEventListener('click', () => {
    const image = button.dataset.image;

    if (!image || !lightbox || !lightboxImage) return;

    lightboxImage.src = image;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  });
});

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  document.body.classList.remove('no-scroll');
}

lightboxClose?.addEventListener('click', closeLightbox);

lightbox?.addEventListener('click', event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});
