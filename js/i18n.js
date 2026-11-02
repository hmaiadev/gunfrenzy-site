/* Gun Frenzy — i18n (EN default, PT-BR, ES). Sem dependências.
   Uso: elemento com data-i18n="chave". data-i18n-attr="content" altera atributo.
   Idioma: ?lang=pt|es|en ou localStorage.gf_lang. */
(function () {
  'use strict';

  var I18N = {
    en: {
      meta_title: 'Gun Frenzy — 2D multiplayer arena shooter',
      meta_desc: 'Gun Frenzy is a 2D multiplayer arena shooter with explosive movement, real projectile gunplay and fast matches. In development on Unreal Engine 5.8.',
      lang_aria: 'Language',
      nav_game: 'The game', nav_mech: 'Mechanics', nav_arsenal: 'Arsenal', nav_gameplay: 'Gameplay', nav_status: 'Status', nav_updates: 'Updates', nav_playtest: 'Playtest',
      hero_kicker: 'In development · PC',
      hero_title: 'Enter the arena.<br><em>Leave as a legend.</em>',
      hero_lede: 'A 2D multiplayer arena shooter where every jump, flip and shot counts. Explosive movement, real projectiles and fast matches against players and bots.',
      hero_cta1: 'See mechanics', hero_cta2: 'Be a playtester',
      p1t: 'Explosive movement', p1d: 'Double jump, backflip, wall jump, crouch and slide. Cross the arena through the air, switch sides in half a second and escape over the shots.',
      p2t: 'Real gunplay', p2d: 'Every bullet is a physical projectile with speed, recoil and spread. Aim freely in 360° with mouse or stick.',
      p3t: 'Online arena', p3d: 'Authoritative server, scoreboard with flags and bots with different personalities filling the match.',
      about_eyebrow: 'The game', about_title: 'Side-view action, nonstop combat',
      about_p1: 'Gun Frenzy puts every fighter on the same battle plane, seen from the side, in 3D arenas with a perspective camera. Reading the fight is as simple as a 2D classic — left, right, up — but the action has the depth and weight of a modern shooter.',
      about_p2: 'Inspired by Soldat and Worms Rumble, the focus is the fast duel: reach the ammo first, gain height, read your opponent and land the shot mid-air.',
      f_genre: 'Genre', f_genre_v: '2D multiplayer arena shooter',
      f_platform: 'Platform', f_platform_v: 'PC (Windows)',
      f_controls: 'Controls', f_controls_v: 'Keyboard & mouse · Gamepad',
      f_engine: 'Engine', f_engine_v: 'Unreal Engine 5.8',
      mech_eyebrow: 'Mechanics', mech_title: 'Everything that happens in the arena',
      m1t: 'Double jump & backflip', m1d: 'The second jump can become a backflip: jump against your aim and spin backwards to gain distance.',
      m2t: 'Wall jump', m2d: 'Touching a wall turns it into a springboard. The sideways impulse takes priority and changes the vertical fight.',
      m3t: '360° aim', m3d: 'The character follows the cursor: torso and head track the aim while the legs keep running.',
      m4t: 'Crouch & slide', m4d: 'Crouch for cover or slide keeping your momentum — and leave the slide in a jump that preserves speed.',
      m5t: 'Health & ammo', m5d: 'Floating health and ammo pickups respawn at fixed points. Controlling them decides matches.',
      m6t: 'Bots with personality', m6d: 'Defensive, balanced or aggressive: each bot has its own distance, aim and reaction time — and fights other bots too.',
      m7t: 'Scoreboard with flags', m7d: 'Kills and deaths for everyone on screen, with each fighter\'s name and flag. Bots keep their identity for the whole match.',
      m8t: 'Ragdoll', m8d: 'When someone falls, they really fall: the body inherits the last velocity and collapses with physics.',
      ars_eyebrow: 'Arsenal', ars_title: 'Pick your rate of fire',
      w1tag: 'Slot 1', w1name: 'Pistol', w1desc: 'Semi-automatic, accurate and reliable. One click, one shot: perfect for hitting in the air.',
      w2tag: 'Slot 2', w2name: 'Rifle', w2desc: 'Automatic with a long magazine. Hold the trigger and control the recoil to own mid-range.',
      wstag: 'Coming soon', wsname: 'New weapons', wsdesc: 'The arsenal was built to grow. New weapons enter testing in upcoming versions.',
      bar_damage: 'Damage per shot', bar_rate: 'Fire rate', bar_mag: 'Magazine', bar_control: 'Control',
      gp_eyebrow: 'Gameplay', gp_title: 'Straight from the arena', gp_trailer: 'Trailer in production',
      gp_shot: 'Shot', gp_soon: 'Coming soon',
      st_eyebrow: 'Status', st_title: 'Development log',
      st1t: 'Core combat', st1d: 'Movement, special jumps, free aim, projectile weapons and reload.',
      st2t: 'Living arena', st2d: 'Spawners, bot profiles, pickups, scoreboard and online/offline menu.',
      st3t: 'Advanced mobility', st3d: 'Crouch, slide and slide jump; HUD with health and weapon slots.',
      st4t: 'Polish', st4d: 'Audio, effects, weapon tuning and server stability.',
      st5t: 'Online servers', st5d: 'Internet tests and matches with more players.',
      st_more: 'See all updates →',
      pt_eyebrow: 'Playtest', pt_title: 'Be a playtester',
      pt_text: 'Closed tests on PC. Join the Discord to get the builds, test times and talk directly to the developer.',
      pt_btn: 'Join Discord',
      foot_note: 'Game in development. All content subject to change.',
      foot_rights: '© 2026 Gun Frenzy', foot_updates: 'Updates', foot_discord: 'Discord',
      up_title: 'Updates — Gun Frenzy', up_h1: 'What changed in the arena',
      up_intro: 'What was added and fixed, in plain language. Want to test before everyone else?',
      up_builds: 'Latest builds', up_log: 'Development log', up_validation: 'Validation:',
      up_note: 'Only the latest updates are listed here. Technical details stay with the development team.', up_empty: 'No updates yet. Check back soon.',
      up_empty_b: 'No builds recorded yet.', up_empty_v: 'No versions recorded yet.', up_back: 'Home'
    },

    pt: {
      meta_title: 'Gun Frenzy — Arena shooter multiplayer 2D',
      meta_desc: 'Gun Frenzy é um arena shooter multiplayer em 2D com movimento explosivo, tiroteio com projéteis reais e partidas rápidas. Em desenvolvimento na Unreal Engine 5.8.',
      lang_aria: 'Idioma',
      nav_game: 'O jogo', nav_mech: 'Mecânicas', nav_arsenal: 'Arsenal', nav_gameplay: 'Gameplay', nav_status: 'Status', nav_updates: 'Updates', nav_playtest: 'Playtest',
      hero_kicker: 'Em desenvolvimento · PC',
      hero_title: 'Entre na arena.<br><em>Saia como lenda.</em>',
      hero_lede: 'Um arena shooter multiplayer em 2D onde cada pulo, giro e disparo conta. Movimento explosivo, projéteis reais e partidas rápidas contra jogadores e bots.',
      hero_cta1: 'Ver mecânicas', hero_cta2: 'Be a playtester',
      p1t: 'Movimento explosivo', p1d: 'Pulo duplo, backflip, wall jump, agachar e deslizar. Cruze a arena pelo ar, troque de lado em meio segundo e escape por cima dos tiros.',
      p2t: 'Tiroteio de verdade', p2d: 'Cada bala é um projétil físico com velocidade, recuo e dispersão. Mire livremente em 360° com o mouse ou o analógico.',
      p3t: 'Arena online', p3d: 'Servidor autoritativo, placar com bandeiras e bots com personalidades diferentes completando a partida.',
      about_eyebrow: 'O jogo', about_title: 'Ação lateral, combate sem pausa',
      about_p1: 'Gun Frenzy coloca todos os combatentes num mesmo plano de batalha, visto de lado, em cenários 3D com câmera em perspectiva. A leitura é simples como num clássico 2D — esquerda, direita, cima — mas a ação tem a profundidade e o peso de um shooter moderno.',
      about_p2: 'Inspirado em Soldat e Worms Rumble, o foco é o duelo rápido: chegar primeiro na munição, ganhar altura, ler o movimento do adversário e acertar o tiro no ar.',
      f_genre: 'Gênero', f_genre_v: 'Arena shooter multiplayer 2D',
      f_platform: 'Plataforma', f_platform_v: 'PC (Windows)',
      f_controls: 'Controles', f_controls_v: 'Teclado e mouse · Gamepad',
      f_engine: 'Engine', f_engine_v: 'Unreal Engine 5.8',
      mech_eyebrow: 'Mecânicas', mech_title: 'Tudo que acontece na arena',
      m1t: 'Pulo duplo & backflip', m1d: 'O segundo pulo pode virar um backflip: salte contra a direção da mira e gire para trás ganhando distância.',
      m2t: 'Wall jump', m2d: 'Encostou na parede? Ela vira trampolim. O impulso lateral tem prioridade e muda o ritmo do combate vertical.',
      m3t: 'Mira 360°', m3d: 'O personagem segue o cursor: tronco e cabeça acompanham a mira enquanto as pernas continuam correndo.',
      m4t: 'Agachar & slide', m4d: 'Agache para se proteger ou deslize mantendo o momento — e saia do slide num salto que preserva a velocidade.',
      m5t: 'Vida & munição', m5d: 'Pickups flutuantes de cura e munição reaparecem em pontos fixos do mapa. Controlar esses pontos decide partidas.',
      m6t: 'Bots com personalidade', m6d: 'Defensivos, equilibrados ou agressivos: cada bot tem distância, mira e reação próprias, e também luta entre si.',
      m7t: 'Placar com bandeiras', m7d: 'Kills e mortes de todos na tela, com nome e bandeira de cada combatente. Bots mantêm sua identidade a partida inteira.',
      m8t: 'Ragdoll', m8d: 'Quem cai, cai de verdade: o corpo herda a velocidade do último instante e desaba com física.',
      ars_eyebrow: 'Arsenal', ars_title: 'Escolha seu ritmo de fogo',
      w1tag: 'Slot 1', w1name: 'Pistola', w1desc: 'Semiautomática, precisa e confiável. Cada clique é um tiro: ideal para quem acerta no ar.',
      w2tag: 'Slot 2', w2name: 'Rifle', w2desc: 'Automático e de carregador longo. Segure o gatilho e controle o recuo para dominar a média distância.',
      wstag: 'Em breve', wsname: 'Novas armas', wsdesc: 'O arsenal foi construído para crescer. Novas armas entram em teste nas próximas versões.',
      bar_damage: 'Dano por tiro', bar_rate: 'Cadência', bar_mag: 'Carregador', bar_control: 'Controle',
      gp_eyebrow: 'Gameplay', gp_title: 'Direto da arena', gp_trailer: 'Trailer em produção',
      gp_shot: 'Captura', gp_soon: 'Em breve',
      st_eyebrow: 'Status', st_title: 'Diário de desenvolvimento',
      st1t: 'Combate base', st1d: 'Movimento, saltos especiais, mira livre, armas com projéteis e recarga.',
      st2t: 'Arena viva', st2d: 'Spawners, bots com perfis, pickups, placar e menu online/offline.',
      st3t: 'Mobilidade avançada', st3d: 'Agachar, slide e slide jump; HUD com vida e slots de arma.',
      st4t: 'Polimento', st4d: 'Áudio, efeitos, ajuste fino das armas e estabilidade do servidor.',
      st5t: 'Servidores online', st5d: 'Testes pela internet e partidas com mais jogadores.',
      st_more: 'Ver todas as atualizações →',
      pt_eyebrow: 'Playtest', pt_title: 'Be a playtester',
      pt_text: 'Testes fechados no PC. Entre no Discord para receber as builds, os horários de teste e falar direto com o desenvolvedor.',
      pt_btn: 'Entrar no Discord',
      foot_note: 'Jogo em desenvolvimento. Todo conteúdo sujeito a mudanças.',
      foot_rights: '© 2026 Gun Frenzy', foot_updates: 'Updates', foot_discord: 'Discord',
      up_title: 'Updates — Gun Frenzy', up_h1: 'O que mudou na arena',
      up_intro: 'O que foi adicionado e corrigido, em linguagem simples. Quer testar antes de todo mundo?',
      up_builds: 'Últimas builds', up_log: 'Diário de desenvolvimento', up_validation: 'Validação:',
      up_note: 'Só as atualizações mais recentes aparecem aqui. Os detalhes técnicos ficam com a equipe.', up_empty: 'Nenhuma atualização ainda. Volte em breve.',
      up_empty_b: 'Nenhuma build registrada ainda.', up_empty_v: 'Nenhuma versão registrada ainda.', up_back: 'Início'
    },

    es: {
      meta_title: 'Gun Frenzy — Arena shooter multijugador 2D',
      meta_desc: 'Gun Frenzy es un arena shooter multijugador en 2D con movimiento explosivo, disparos con proyectiles reales y partidas rápidas. En desarrollo en Unreal Engine 5.8.',
      lang_aria: 'Idioma',
      nav_game: 'El juego', nav_mech: 'Mecánicas', nav_arsenal: 'Arsenal', nav_gameplay: 'Gameplay', nav_status: 'Estado', nav_updates: 'Novedades', nav_playtest: 'Playtest',
      hero_kicker: 'En desarrollo · PC',
      hero_title: 'Entra en la arena.<br><em>Sal como una leyenda.</em>',
      hero_lede: 'Un arena shooter multijugador en 2D donde cada salto, giro y disparo cuenta. Movimiento explosivo, proyectiles reales y partidas rápidas contra jugadores y bots.',
      hero_cta1: 'Ver mecánicas', hero_cta2: 'Be a playtester',
      p1t: 'Movimiento explosivo', p1d: 'Doble salto, backflip, wall jump, agacharse y deslizarse. Cruza la arena por el aire, cambia de lado en medio segundo y escapa por encima de los disparos.',
      p2t: 'Disparos de verdad', p2d: 'Cada bala es un proyectil físico con velocidad, retroceso y dispersión. Apunta libremente en 360° con el mouse o el stick.',
      p3t: 'Arena online', p3d: 'Servidor autoritativo, marcador con banderas y bots con personalidades distintas completando la partida.',
      about_eyebrow: 'El juego', about_title: 'Acción lateral, combate sin pausa',
      about_p1: 'Gun Frenzy pone a todos los combatientes en el mismo plano de batalla, visto de lado, en escenarios 3D con cámara en perspectiva. La lectura es simple como un clásico 2D — izquierda, derecha, arriba — pero la acción tiene la profundidad y el peso de un shooter moderno.',
      about_p2: 'Inspirado en Soldat y Worms Rumble, el foco es el duelo rápido: llegar primero a la munición, ganar altura, leer el movimiento del rival y acertar el tiro en el aire.',
      f_genre: 'Género', f_genre_v: 'Arena shooter multijugador 2D',
      f_platform: 'Plataforma', f_platform_v: 'PC (Windows)',
      f_controls: 'Controles', f_controls_v: 'Teclado y mouse · Gamepad',
      f_engine: 'Motor', f_engine_v: 'Unreal Engine 5.8',
      mech_eyebrow: 'Mecánicas', mech_title: 'Todo lo que pasa en la arena',
      m1t: 'Doble salto y backflip', m1d: 'El segundo salto puede ser un backflip: salta contra tu mira y gira hacia atrás para ganar distancia.',
      m2t: 'Wall jump', m2d: '¿Tocaste la pared? Se vuelve trampolín. El impulso lateral tiene prioridad y cambia el ritmo del combate vertical.',
      m3t: 'Mira 360°', m3d: 'El personaje sigue el cursor: torso y cabeza acompañan la mira mientras las piernas siguen corriendo.',
      m4t: 'Agacharse y deslizarse', m4d: 'Agáchate para cubrirte o deslízate manteniendo el impulso — y sal del slide con un salto que conserva la velocidad.',
      m5t: 'Vida y munición', m5d: 'Los pickups flotantes de curación y munición reaparecen en puntos fijos. Controlarlos decide partidas.',
      m6t: 'Bots con personalidad', m6d: 'Defensivos, equilibrados o agresivos: cada bot tiene su distancia, mira y reacción, y también pelea entre sí.',
      m7t: 'Marcador con banderas', m7d: 'Kills y muertes de todos en pantalla, con nombre y bandera de cada combatiente. Los bots mantienen su identidad toda la partida.',
      m8t: 'Ragdoll', m8d: 'Quien cae, cae de verdad: el cuerpo hereda la velocidad del último instante y se desploma con física.',
      ars_eyebrow: 'Arsenal', ars_title: 'Elige tu ritmo de fuego',
      w1tag: 'Slot 1', w1name: 'Pistola', w1desc: 'Semiautomática, precisa y confiable. Un clic, un disparo: ideal para acertar en el aire.',
      w2tag: 'Slot 2', w2name: 'Rifle', w2desc: 'Automático y de cargador largo. Mantén el gatillo y controla el retroceso para dominar la media distancia.',
      wstag: 'Pronto', wsname: 'Nuevas armas', wsdesc: 'El arsenal se construyó para crecer. Nuevas armas entran en prueba en las próximas versiones.',
      bar_damage: 'Daño por disparo', bar_rate: 'Cadencia', bar_mag: 'Cargador', bar_control: 'Control',
      gp_eyebrow: 'Gameplay', gp_title: 'Directo de la arena', gp_trailer: 'Trailer en producción',
      gp_shot: 'Captura', gp_soon: 'Pronto',
      st_eyebrow: 'Estado', st_title: 'Diario de desarrollo',
      st1t: 'Combate base', st1d: 'Movimiento, saltos especiales, mira libre, armas con proyectiles y recarga.',
      st2t: 'Arena viva', st2d: 'Spawners, perfiles de bots, pickups, marcador y menú online/offline.',
      st3t: 'Movilidad avanzada', st3d: 'Agacharse, slide y slide jump; HUD con vida y slots de arma.',
      st4t: 'Pulido', st4d: 'Audio, efectos, ajuste fino de armas y estabilidad del servidor.',
      st5t: 'Servidores online', st5d: 'Pruebas por internet y partidas con más jugadores.',
      st_more: 'Ver todas las novedades →',
      pt_eyebrow: 'Playtest', pt_title: 'Be a playtester',
      pt_text: 'Pruebas cerradas en PC. Entra al Discord para recibir las builds, los horarios y hablar directo con el desarrollador.',
      pt_btn: 'Entrar al Discord',
      foot_note: 'Juego en desarrollo. Todo el contenido puede cambiar.',
      foot_rights: '© 2026 Gun Frenzy', foot_updates: 'Novedades', foot_discord: 'Discord',
      up_title: 'Novedades — Gun Frenzy', up_h1: 'Qué cambió en la arena',
      up_intro: 'Qué se agregó y corrigió, en lenguaje simple. ¿Quieres probar antes que nadie?',
      up_builds: 'Últimas builds', up_log: 'Diario de desarrollo', up_validation: 'Validación:',
      up_note: 'Aquí solo aparecen las actualizaciones más recientes. Los detalles técnicos quedan con el equipo.', up_empty: 'Aún no hay actualizaciones. Vuelve pronto.',
      up_empty_b: 'Aún no hay builds registradas.', up_empty_v: 'Aún no hay versiones registradas.', up_back: 'Inicio'
    }
  };

  var SUPPORTED = ['en', 'pt', 'es'];
  var params = new URLSearchParams(window.location.search);
  var stored = null;
  try { stored = localStorage.getItem('gf_lang'); } catch (e) { /* modo privado */ }
  var lang = SUPPORTED.indexOf(params.get('lang')) >= 0 ? params.get('lang')
    : (SUPPORTED.indexOf(stored) >= 0 ? stored : 'en');

  function apply(next) {
    var dict = I18N[next] || I18N.en;
    document.documentElement.lang = next === 'pt' ? 'pt-BR' : next;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = dict[key] != null ? dict[key] : I18N.en[key];
      if (value == null) return;
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) { el.setAttribute(attr, value); return; }
      if (el.tagName === 'META') { el.setAttribute('content', value); return; }
      el.innerHTML = value;
    });
    document.querySelectorAll('[data-lang-block]').forEach(function (el) {
      el.hidden = el.getAttribute('data-lang-block') !== next;
    });
    document.title = dict.meta_title || I18N.en.meta_title;
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === next;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.classList.toggle('is-active', active);
    });
    var group = document.querySelector('.lang');
    if (group) group.setAttribute('aria-label', dict.lang_aria || 'Language');
  }

  apply(lang);

  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      var next = btn.getAttribute('data-lang');
      try { localStorage.setItem('gf_lang', next); } catch (e) { /* ignore */ }
      var url = new URL(window.location.href);
      url.searchParams.set('lang', next);
      window.location.href = url.toString();
    });
  });

  window.GF_LANG = lang;
  window.GF_I18N = I18N;
})();
