// server/seed.js
import { openDb } from "./src/database/db.js";

const jogos = [
  {
    id: 1,
    titulo: "The Legend of Zelda: Breath of the Wild",
    description:
      "Uma aventura épica em um vasto mundo aberto onde Link desperta de um sono de 100 anos para derrotar Calamity Ganon e salvar o reino de Hyrule.",
    imageUrl: "https://storage.gamehub.com/images/zelda_botw.jpg",
    platform: ["Nintendo Switch", "Wii U"],
    categories: ["Ação", "Aventura", "Mundo Aberto"],
    release: "2017-03-03",
  },
  {
    id: 2,
    titulo: "Red Dead Redemption 2",
    description:
      "Um western épico que segue Arthur Morgan e a gangue Van der Linde em sua luta pela sobrevivência no selvagem oeste americano em declínio.",
    imageUrl: "https://storage.gamehub.com/images/rdr2.jpg",
    platform: ["PlayStation 4", "Xbox One", "PC"],
    categories: ["Ação", "Aventura", "Mundo Aberto"],
    release: "2018-10-26",
  },
  {
    id: 3,
    titulo: "Elden Ring",
    description:
      "Um RPG de ação souls-like ambientado em um mundo de fantasia sombrio criado por Hidetaka Miyazaki e George R.R. Martin com combate desafiador e exploração épica.",
    imageUrl: "https://storage.gamehub.com/images/elden_ring.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
    ],
    categories: ["RPG", "Ação", "Mundo Aberto"],
    release: "2022-02-25",
  },
  {
    id: 4,
    titulo: "God of War Ragnarök",
    description:
      "Kratos e Atreus embarcam em uma jornada emocionante pela mitologia nórdica enquanto enfrentam o iminente apocalipse e deuses vingativos em busca de respostas.",
    imageUrl: "https://storage.gamehub.com/images/gow_ragnarok.jpg",
    platform: ["PlayStation 5", "PlayStation 4"],
    categories: ["Ação", "Aventura"],
    release: "2022-11-09",
  },
  {
    id: 5,
    titulo: "Cyberpunk 2077",
    description:
      "Um RPG de ação futurista ambientado em Night City onde você joga como V, um mercenário personalizável em busca de um implante único que contém a chave para a imortalidade.",
    imageUrl: "https://storage.gamehub.com/images/cyberpunk2077.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
    ],
    categories: ["RPG", "Ação", "Mundo Aberto"],
    release: "2020-12-10",
  },
  {
    id: 6,
    titulo: "The Witcher 3: Wild Hunt",
    description:
      "Geralt de Rivia, um caçador de monstros profissional, busca sua filha adotiva em um mundo de fantasia aberto repleto de escolhas morais complexas e missões envolventes.",
    imageUrl: "https://storage.gamehub.com/images/witcher3.jpg",
    platform: ["PlayStation 4", "Xbox One", "PC", "Nintendo Switch"],
    categories: ["RPG", "Ação", "Mundo Aberto"],
    release: "2015-05-19",
  },
  {
    id: 7,
    titulo: "Minecraft",
    description:
      "Um jogo sandbox de construção e sobrevivência onde jogadores podem explorar, minerar recursos, construir estruturas elaboradas e enfrentar criaturas em mundos proceduralmente gerados infinitos.",
    imageUrl: "https://storage.gamehub.com/images/minecraft.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "Mobile"],
    categories: ["Sandbox", "Sobrevivência", "Aventura"],
    release: "2011-11-18",
  },
  {
    id: 8,
    titulo: "Grand Theft Auto V",
    description:
      "Três criminosos com histórias entrelaçadas executam assaltos ousados em Los Santos enquanto lidam com suas vidas turbulentas e a corrupção que os cerca.",
    imageUrl: "https://storage.gamehub.com/images/gtav.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
    ],
    categories: ["Ação", "Aventura", "Mundo Aberto"],
    release: "2013-09-17",
  },
  {
    id: 9,
    titulo: "Dark Souls III",
    description:
      "O capítulo final da aclamada série souls oferece combate tático brutal, chefes épicos e uma atmosfera sombria enquanto os jogadores tentam impedir o fim do mundo.",
    imageUrl: "https://storage.gamehub.com/images/darksouls3.jpg",
    platform: ["PlayStation 4", "Xbox One", "PC"],
    categories: ["RPG", "Ação"],
    release: "2016-04-12",
  },
  {
    id: 10,
    titulo: "Hades",
    description:
      "Um roguelike de ação onde Zagreus, filho de Hades, tenta escapar do submundo grego em uma jornada repleta de combate dinâmico, personagens carismáticos e narrativa envolvente.",
    imageUrl: "https://storage.gamehub.com/images/hades.jpg",
    platform: [
      "PC",
      "Nintendo Switch",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
    ],
    categories: ["Roguelike", "Ação"],
    release: "2020-09-17",
  },
  {
    id: 11,
    titulo: "Hollow Knight",
    description:
      "Um metroidvania desafiador ambientado em um reino de insetos subterrâneo esquecido, com exploração intrincada, combate preciso e uma atmosfera melancólica deslumbrante.",
    imageUrl: "https://storage.gamehub.com/images/hollow_knight.jpg",
    platform: ["PC", "Nintendo Switch", "PlayStation 4", "Xbox One"],
    categories: ["Metroidvania", "Ação", "Aventura"],
    release: "2017-02-24",
  },
  {
    id: 12,
    titulo: "Sekiro: Shadows Die Twice",
    description:
      "Um shinobi de um braço só busca vingança e resgatar seu mestre em um Japão feudal sombrio repleto de inimigos letais e combate baseado em aparar golpes.",
    imageUrl: "https://storage.gamehub.com/images/sekiro.jpg",
    platform: ["PlayStation 4", "Xbox One", "PC"],
    categories: ["Ação", "Aventura"],
    release: "2019-03-22",
  },
  {
    id: 13,
    titulo: "Bloodborne",
    description:
      "Um caçador explora a cidade gótica vitoriana de Yharnam, infestada por bestas horrendas e segredos cósmicos, em busca da cura para uma misteriosa doença.",
    imageUrl: "https://storage.gamehub.com/images/bloodborne.jpg",
    platform: ["PlayStation 4"],
    categories: ["RPG", "Ação"],
    release: "2015-03-24",
  },
  {
    id: 14,
    titulo: "The Last of Us Part II",
    description:
      "Cinco anos após a jornada original, Ellie embarca em uma busca violenta por justiça em um mundo pós-apocalíptico brutal e moralmente complexo.",
    imageUrl: "https://storage.gamehub.com/images/tlou2.jpg",
    platform: ["PlayStation 5", "PlayStation 4"],
    categories: ["Ação", "Aventura"],
    release: "2020-06-19",
  },
  {
    id: 15,
    titulo: "Spider-Man: Miles Morales",
    description:
      "Miles Morales assume o manto do Homem-Aranha e precisa defender sua vizinhança do Brooklyn enquanto domina seus novos poderes bioelétricos em uma emocionante aventura de super-herói.",
    imageUrl: "https://storage.gamehub.com/images/miles_morales.jpg",
    platform: ["PlayStation 5", "PlayStation 4"],
    categories: ["Ação", "Aventura"],
    release: "2020-11-12",
  },
  {
    id: 16,
    titulo: "Horizon Zero Dawn",
    description:
      "Aloy, uma caçadora habilidosa, explora um mundo pós-apocalíptico dominado por máquinas-dinossauros enquanto descobre os segredos de sua origem e do passado da civilização.",
    imageUrl: "https://storage.gamehub.com/images/horizon_zero_dawn.jpg",
    platform: ["PlayStation 4", "PC"],
    categories: ["RPG", "Ação", "Mundo Aberto"],
    release: "2017-02-28",
  },
  {
    id: 17,
    titulo: "Ghost of Tsushima",
    description:
      "Jin Sakai deve abandonar os códigos samurais e adotar táticas de guerrilha para libertar a ilha de Tsushima da invasão mongol no século XIII.",
    imageUrl: "https://storage.gamehub.com/images/ghost_tsushima.jpg",
    platform: ["PlayStation 5", "PlayStation 4"],
    categories: ["Ação", "Aventura", "Mundo Aberto"],
    release: "2020-07-17",
  },
  {
    id: 18,
    titulo: "Stardew Valley",
    description:
      "Herde a velha fazenda do seu avô e transforme campos abandonados em uma propriedade próspera enquanto constrói relacionamentos com os moradores da cidade em um simulador relaxante.",
    imageUrl: "https://storage.gamehub.com/images/stardew_valley.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "Mobile"],
    categories: ["Simulação", "RPG"],
    release: "2016-02-26",
  },
  {
    id: 19,
    titulo: "Celeste",
    description:
      "Uma jovem chamada Madeline escala a perigosa Montanha Celeste enquanto enfrenta seus próprios demônios internos neste desafiador platformer com uma história comovente sobre saúde mental.",
    imageUrl: "https://storage.gamehub.com/images/celeste.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Plataforma", "Aventura"],
    release: "2018-01-25",
  },
  {
    id: 20,
    titulo: "Ori and the Will of the Wisps",
    description:
      "O espírito guardião Ori embarca em uma jornada emocionante para descobrir seu verdadeiro destino em um mundo de fantasia deslumbrante repleto de desafios e puzzles.",
    imageUrl: "https://storage.gamehub.com/images/ori_wisps.jpg",
    platform: ["Xbox Series X/S", "Xbox One", "PC", "Nintendo Switch"],
    categories: ["Metroidvania", "Plataforma"],
    release: "2020-03-11",
  },
  {
    id: 21,
    titulo: "Resident Evil Village",
    description:
      "Ethan Winters busca sua filha sequestrada em uma misteriosa vila europeia repleta de criaturas sobrenaturais e senhores territoriais assustadores neste survival horror tenso.",
    imageUrl: "https://storage.gamehub.com/images/re_village.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
    ],
    categories: ["Terror", "Ação"],
    release: "2021-05-07",
  },
  {
    id: 22,
    titulo: "Death Stranding",
    description:
      "Sam Porter Bridges atravessa uma América pós-apocalíptica fragmentada, reconectando cidades isoladas enquanto enfrenta entidades sobrenaturais e terroristas em uma experiência narrativa única de Hideo Kojima.",
    imageUrl: "https://storage.gamehub.com/images/death_stranding.jpg",
    platform: ["PlayStation 5", "PlayStation 4", "PC"],
    categories: ["Ação", "Aventura"],
    release: "2019-11-08",
  },
  {
    id: 23,
    titulo: "Monster Hunter: World",
    description:
      "Caçadores exploram ecossistemas vibrantes rastreando e combatendo monstros gigantescos em cooperativo, coletando recursos para criar equipamentos cada vez mais poderosos neste RPG de ação.",
    imageUrl: "https://storage.gamehub.com/images/mh_world.jpg",
    platform: ["PlayStation 4", "Xbox One", "PC"],
    categories: ["RPG", "Ação"],
    release: "2018-01-26",
  },
  {
    id: 24,
    titulo: "Control",
    description:
      "Jesse Faden se torna diretora do Bureau Federal de Controle e investiga fenômenos paranormais enquanto combate uma força sobrenatural conhecida como Hiss neste thriller psicológico de ação.",
    imageUrl: "https://storage.gamehub.com/images/control.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
    ],
    categories: ["Ação", "Aventura"],
    release: "2019-08-27",
  },
  {
    id: 25,
    titulo: "Doom Eternal",
    description:
      "O Doom Slayer retorna para impedir a invasão demoníaca da Terra com combate frenético em primeira pessoa, armas devastadoras e movimentação acrobática em cenários infernais.",
    imageUrl: "https://storage.gamehub.com/images/doom_eternal.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
      "Nintendo Switch",
    ],
    categories: ["FPS", "Ação"],
    release: "2020-03-20",
  },
  {
    id: 26,
    titulo: "Persona 5 Royal",
    description:
      "Estudantes secundaristas por dia, ladrões de corações à noite, os Phantom Thieves infiltram palácios cognitivos para reformar adultos corruptos neste RPG japonês estiloso com mecânicas sociais profundas.",
    imageUrl: "https://storage.gamehub.com/images/persona5_royal.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
      "Nintendo Switch",
    ],
    categories: ["RPG", "Aventura"],
    release: "2019-10-31",
  },
  {
    id: 27,
    titulo: "Final Fantasy VII Remake",
    description:
      "Uma reimaginação moderna do clássico RPG onde Cloud Strife e o grupo eco-terrorista AVALANCHE lutam contra a megacorporação Shinra em Midgar com combate em tempo real renovado.",
    imageUrl: "https://storage.gamehub.com/images/ff7_remake.jpg",
    platform: ["PlayStation 5", "PlayStation 4", "PC"],
    categories: ["RPG", "Ação"],
    release: "2020-04-10",
  },
  {
    id: 28,
    titulo: "Animal Crossing: New Horizons",
    description:
      "Crie sua ilha paradisíaca dos sonhos, decore sua casa, faça amizade com adoráveis moradores animais e relaxe neste simulador de vida tranquilo e criativo.",
    imageUrl: "https://storage.gamehub.com/images/animal_crossing_nh.jpg",
    platform: ["Nintendo Switch"],
    categories: ["Simulação", "Aventura"],
    release: "2020-03-20",
  },
  {
    id: 29,
    titulo: "Among Us",
    description:
      "Tripulantes trabalham juntos para completar tarefas em uma nave espacial enquanto impostores secretos sabotam e eliminam jogadores neste fenômeno multiplayer de dedução social.",
    imageUrl: "https://storage.gamehub.com/images/among_us.jpg",
    platform: [
      "PC",
      "Mobile",
      "Nintendo Switch",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
    ],
    categories: ["Multiplayer", "Social"],
    release: "2018-06-15",
  },
  {
    id: 30,
    titulo: "Fall Guys: Ultimate Knockout",
    description:
      "Sessenta jogadores competem em corridas de obstáculos caóticas e desafios em equipe hilários até que apenas um permaneça neste battle royale colorido e divertido.",
    imageUrl: "https://storage.gamehub.com/images/fall_guys.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
      "Nintendo Switch",
    ],
    categories: ["Battle Royale", "Multiplayer"],
    release: "2020-08-04",
  },
  {
    id: 31,
    titulo: "Valorant",
    description:
      "Agentes com habilidades únicas enfrentam-se em partidas táticas de tiro em primeira pessoa cinco contra cinco onde precisão, estratégia e trabalho em equipe determinam a vitória.",
    imageUrl: "https://storage.gamehub.com/images/valorant.jpg",
    platform: ["PC"],
    categories: ["FPS", "Multiplayer"],
    release: "2020-06-02",
  },
  {
    id: 32,
    titulo: "Apex Legends",
    description:
      "Esquadrões de três lendas com habilidades distintas competem para serem os últimos sobreviventes em um battle royale de ritmo acelerado com movimentação fluida e combate intenso.",
    imageUrl: "https://storage.gamehub.com/images/apex_legends.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
      "Nintendo Switch",
    ],
    categories: ["Battle Royale", "FPS"],
    release: "2019-02-04",
  },
  {
    id: 33,
    titulo: "Fortnite",
    description:
      "Cem jogadores descem em uma ilha e lutam para serem os últimos de pé, coletando armas e construindo estruturas neste fenômeno cultural battle royale com constantes atualizações temáticas.",
    imageUrl: "https://storage.gamehub.com/images/fortnite.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
      "Nintendo Switch",
      "Mobile",
    ],
    categories: ["Battle Royale", "Tiro"],
    release: "2017-07-25",
  },
  {
    id: 34,
    titulo: "Overwatch 2",
    description:
      "Heróis de todo o mundo se unem em combates em equipe objetivos cinco contra cinco com classes distintas, habilidades únicas e mapas variados neste shooter competitivo.",
    imageUrl: "https://storage.gamehub.com/images/overwatch2.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
      "Nintendo Switch",
    ],
    categories: ["FPS", "Multiplayer"],
    release: "2022-10-04",
  },
  {
    id: 35,
    titulo: "League of Legends",
    description:
      "Dois times de cinco campeões com habilidades únicas batalham para destruir o Nexus inimigo neste MOBA estratégico profundo que se tornou um dos maiores esports do mundo.",
    imageUrl: "https://storage.gamehub.com/images/league_legends.jpg",
    platform: ["PC"],
    categories: ["MOBA", "Estratégia"],
    release: "2009-10-27",
  },
  {
    id: 36,
    titulo: "Dota 2",
    description:
      "Heróis com papéis distintos enfrentam-se em intensas batalhas estratégicas cinco contra cinco onde coordenação, mecânica individual e conhecimento profundo do jogo são essenciais para a vitória.",
    imageUrl: "https://storage.gamehub.com/images/dota2.jpg",
    platform: ["PC"],
    categories: ["MOBA", "Estratégia"],
    release: "2013-07-09",
  },
  {
    id: 37,
    titulo: "Counter-Strike: Global Offensive",
    description:
      "Terroristas e contra-terroristas enfrentam-se em partidas táticas de tiro competitivo onde cada rodada conta e habilidade precisa, comunicação e estratégia são fundamentais para o sucesso.",
    imageUrl: "https://storage.gamehub.com/images/csgo.jpg",
    platform: ["PC"],
    categories: ["FPS", "Multiplayer"],
    release: "2012-08-21",
  },
  {
    id: 38,
    titulo: "Rocket League",
    description:
      "Carros acrobáticos jogam futebol em arenas futuristas neste híbrido único de esportes e corrida que combina física satisfatória com jogabilidade competitiva e acessível.",
    imageUrl: "https://storage.gamehub.com/images/rocket_league.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
      "Nintendo Switch",
    ],
    categories: ["Esportes", "Corrida"],
    release: "2015-07-07",
  },
  {
    id: 39,
    titulo: "FIFA 23",
    description:
      "A mais recente edição da série de futebol traz gráficos aprimorados, física de bola realista e modos de jogo abrangentes incluindo carreira, Ultimate Team e partidas online.",
    imageUrl: "https://storage.gamehub.com/images/fifa23.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
    ],
    categories: ["Esportes", "Simulação"],
    release: "2022-09-30",
  },
  {
    id: 40,
    titulo: "NBA 2K23",
    description:
      "O simulador de basquete definitivo oferece gameplay autêntico, modos de carreira imersivos, construção de equipe no MyTeam e ação online competitiva com jogadores da NBA e WNBA.",
    imageUrl: "https://storage.gamehub.com/images/nba2k23.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
      "Nintendo Switch",
    ],
    categories: ["Esportes", "Simulação"],
    release: "2022-09-09",
  },
  {
    id: 41,
    titulo: "Gran Turismo 7",
    description:
      "O simulador de corrida definitivo retorna com física de condução ultra-realista, mais de quatrocentos carros meticulosamente modelados e circuitos autênticos de todo o mundo.",
    imageUrl: "https://storage.gamehub.com/images/gt7.jpg",
    platform: ["PlayStation 5", "PlayStation 4"],
    categories: ["Corrida", "Simulação"],
    release: "2022-03-04",
  },
  {
    id: 42,
    titulo: "Forza Horizon 5",
    description:
      "Explore o vibrante e diverso México em um festival de corrida de mundo aberto com centenas de carros, eventos variados e clima dinâmico espetacular.",
    imageUrl: "https://storage.gamehub.com/images/forza_horizon5.jpg",
    platform: ["Xbox Series X/S", "Xbox One", "PC"],
    categories: ["Corrida", "Mundo Aberto"],
    release: "2021-11-05",
  },
  {
    id: 43,
    titulo: "Assassin's Creed Valhalla",
    description:
      "Eivor lidera seu clã viking da Noruega gelada para as ricas terras da Inglaterra medieval, construindo assentamentos e forjando alianças políticas em um mundo aberto épico.",
    imageUrl: "https://storage.gamehub.com/images/ac_valhalla.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
    ],
    categories: ["RPG", "Ação", "Mundo Aberto"],
    release: "2020-11-10",
  },
  {
    id: 44,
    titulo: "Far Cry 6",
    description:
      "Lute pela liberdade de Yara, uma nação caribenha congelada no tempo sob a tirania de um ditador impiedoso, usando guerrilha criativa e um arsenal improvável de armas.",
    imageUrl: "https://storage.gamehub.com/images/farcry6.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
    ],
    categories: ["FPS", "Ação", "Mundo Aberto"],
    release: "2021-10-07",
  },
  {
    id: 45,
    titulo: "Battlefield 2042",
    description:
      "Guerras futuristas em larga escala com até cento e vinte e oito jogadores, eventos climáticos extremos e mapas massivos criam batalhas caóticas e imprevisíveis neste shooter multiplayer.",
    imageUrl: "https://storage.gamehub.com/images/battlefield2042.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
    ],
    categories: ["FPS", "Multiplayer"],
    release: "2021-11-19",
  },
  {
    id: 46,
    titulo: "Call of Duty: Modern Warfare II",
    description:
      "A Task Force 141 retorna para enfrentar ameaças globais em uma campanha cinematográfica intensa e modos multiplayer frenéticos com mapas clássicos e mecânicas renovadas.",
    imageUrl: "https://storage.gamehub.com/images/cod_mw2.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
    ],
    categories: ["FPS", "Ação"],
    release: "2022-10-28",
  },
  {
    id: 47,
    titulo: "Destiny 2",
    description:
      "Guardiões protegem a humanidade dos últimos de diversas raças alienígenas em um shooter looter online com raids cooperativos desafiadores, PvP competitivo e narrativa expansiva em evolução.",
    imageUrl: "https://storage.gamehub.com/images/destiny2.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
    ],
    categories: ["FPS", "RPG", "Multiplayer"],
    release: "2017-09-06",
  },
  {
    id: 48,
    titulo: "Warframe",
    description:
      "Ninjas espaciais cooperativos enfrentam hordas de inimigos usando parkour acrobático e um arsenal vasto de armas e warframes personalizáveis neste shooter looter free-to-play.",
    imageUrl: "https://storage.gamehub.com/images/warframe.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
      "Nintendo Switch",
    ],
    categories: ["FPS", "Ação", "Multiplayer"],
    release: "2013-03-25",
  },
  {
    id: 49,
    titulo: "No Man's Sky",
    description:
      "Explore um universo proceduralmente gerado com quintilhões de planetas únicos, construa bases, pilote naves espaciais e descubra a verdade por trás do misterioso centro do universo.",
    imageUrl: "https://storage.gamehub.com/images/no_mans_sky.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
      "Nintendo Switch",
    ],
    categories: ["Aventura", "Sobrevivência", "Simulação"],
    release: "2016-08-09",
  },
  {
    id: 50,
    titulo: "Subnautica",
    description:
      "Sobreviva nas profundezas de um oceano alienígena repleto de vida fascinante e perigosa, construa bases subaquáticas e desvende os mistérios deste mundo aquático imersivo.",
    imageUrl: "https://storage.gamehub.com/images/subnautica.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
      "Nintendo Switch",
    ],
    categories: ["Sobrevivência", "Aventura"],
    release: "2018-01-23",
  },
  {
    id: 51,
    titulo: "Terraria",
    description:
      "Explore, construa e lute em um mundo 2D sandbox repleto de biomas distintos, criaturas desafiadoras e recursos infinitos para criar equipamentos e estruturas elaboradas.",
    imageUrl: "https://storage.gamehub.com/images/terraria.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "Mobile"],
    categories: ["Sandbox", "Aventura"],
    release: "2011-05-16",
  },
  {
    id: 52,
    titulo: "Don't Starve Together",
    description:
      "Sobreviva em um mundo hostil e bizarro coletando recursos, criando ferramentas e enfrentando criaturas estranhas neste desafiador jogo de sobrevivência cooperativo com arte gótica única.",
    imageUrl: "https://storage.gamehub.com/images/dont_starve_together.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Sobrevivência", "Multiplayer"],
    release: "2016-04-21",
  },
  {
    id: 53,
    titulo: "Rust",
    description:
      "Acorde nu em uma ilha hostil e lute pela sobrevivência contra jogadores, animais selvagens e o ambiente enquanto constrói abrigos, forma alianças e trai inimigos neste survival brutal.",
    imageUrl: "https://storage.gamehub.com/images/rust.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One"],
    categories: ["Sobrevivência", "Multiplayer"],
    release: "2018-02-08",
  },
  {
    id: 54,
    titulo: "ARK: Survival Evolved",
    description:
      "Desperte em uma ilha misteriosa repleta de dinossauros, dome criaturas pré-históricas, construa bases tribais e sobreviva em um ecossistema perigoso com elementos de ficção científica.",
    imageUrl: "https://storage.gamehub.com/images/ark_survival.jpg",
    platform: ["PlayStation 4", "Xbox One", "PC", "Nintendo Switch", "Mobile"],
    categories: ["Sobrevivência", "Ação", "Multiplayer"],
    release: "2017-08-29",
  },
  {
    id: 55,
    titulo: "Valheim",
    description:
      "Vikings mortos em batalha devem provar seu valor em Valheim, explorando um mundo procedural inspirado na mitologia nórdica, construindo assentamentos e derrotando criaturas míticas cooperativamente.",
    imageUrl: "https://storage.gamehub.com/images/valheim.jpg",
    platform: ["PC"],
    categories: ["Sobrevivência", "Aventura", "Multiplayer"],
    release: "2021-02-02",
  },
  {
    id: 56,
    titulo: "Satisfactory",
    description:
      "Construa fábricas massivas automatizadas em um planeta alienígena, otimize linhas de produção complexas e explore ambientes hostis neste simulador de construção e gerenciamento em primeira pessoa.",
    imageUrl: "https://storage.gamehub.com/images/satisfactory.jpg",
    platform: ["PC"],
    categories: ["Simulação", "Construção"],
    release: "2024-09-10",
  },
  {
    id: 57,
    titulo: "Factorio",
    description:
      "Construa e gerencie fábricas cada vez mais complexas em um planeta alienígena, automatize processos de produção e defenda sua base contra hordas de criaturas nativas neste viciante simulador industrial.",
    imageUrl: "https://storage.gamehub.com/images/factorio.jpg",
    platform: ["PC"],
    categories: ["Simulação", "Estratégia"],
    release: "2020-08-14",
  },
  {
    id: 58,
    titulo: "Cities: Skylines",
    description:
      "Projete e gerencie sua própria metrópole, equilibrando zonas residenciais, comerciais e industriais enquanto mantém cidadãos felizes e a cidade funcionando eficientemente neste simulador urbano profundo.",
    imageUrl: "https://storage.gamehub.com/images/cities_skylines.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Simulação", "Estratégia"],
    release: "2015-03-10",
  },
  {
    id: 59,
    titulo: "Planet Zoo",
    description:
      "Construa zoológicos detalhados, cuide do bem-estar animal, gerencie equipes e crie habitats autênticos para centenas de espécies neste simulador de gerenciamento encantador e educativo.",
    imageUrl: "https://storage.gamehub.com/images/planet_zoo.jpg",
    platform: ["PC"],
    categories: ["Simulação", "Gerenciamento"],
    release: "2019-11-05",
  },
  {
    id: 60,
    titulo: "The Sims 4",
    description:
      "Crie Sims únicos, construa casas dos sonhos e controle todos os aspectos de suas vidas virtuais neste simulador de vida que permite contar histórias ilimitadas e expressar criatividade.",
    imageUrl: "https://storage.gamehub.com/images/sims4.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One"],
    categories: ["Simulação", "Casual"],
    release: "2014-09-02",
  },
  {
    id: 61,
    titulo: "Portal 2",
    description:
      "Resolva quebra-cabeças complexos usando uma arma de portal que cria passagens entre superfícies enquanto explora a misteriosa Aperture Science com humor afiado e mecânicas brilhantes.",
    imageUrl: "https://storage.gamehub.com/images/portal2.jpg",
    platform: ["PC", "PlayStation 3", "Xbox 360"],
    categories: ["Puzzle", "Aventura"],
    release: "2011-04-19",
  },
  {
    id: 62,
    titulo: "The Witness",
    description:
      "Explore uma ilha misteriosa e colorida resolvendo centenas de quebra-cabeças de linha interconectados que gradualmente revelam camadas profundas de complexidade e filosofia neste puzzle atmosférico.",
    imageUrl: "https://storage.gamehub.com/images/the_witness.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Mobile"],
    categories: ["Puzzle", "Aventura"],
    release: "2016-01-26",
  },
  {
    id: 63,
    titulo: "Baba Is You",
    description:
      "Manipule as regras da realidade empurrando palavras que formam as mecânicas do jogo, transformando objetos, paredes e até você mesmo neste puzzle inovador que desafia a lógica tradicional.",
    imageUrl: "https://storage.gamehub.com/images/baba_is_you.jpg",
    platform: ["PC", "Nintendo Switch"],
    categories: ["Puzzle", "Indie"],
    release: "2019-03-13",
  },
  {
    id: 64,
    titulo: "Cuphead",
    description:
      "Cuphead e Mugman devem pagar sua dívida com o diabo enfrentando chefes brutais em um run and gun desafiador com animação tradicional inspirada em desenhos dos anos trinta.",
    imageUrl: "https://storage.gamehub.com/images/cuphead.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Ação", "Plataforma"],
    release: "2017-09-29",
  },
  {
    id: 65,
    titulo: "Dead Cells",
    description:
      "Um prisioneiro imortal explora uma ilha em constante mudança em um roguelike metroidvania fluido com combate satisfatório, progressão permanente e morte permissiva que reinicia a jornada.",
    imageUrl: "https://storage.gamehub.com/images/dead_cells.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "Mobile"],
    categories: ["Roguelike", "Metroidvania", "Ação"],
    release: "2018-08-07",
  },
  {
    id: 66,
    titulo: "Risk of Rain 2",
    description:
      "Sobreviventes naufragados enfrentam hordas crescentes de aliens em um planeta hostil neste roguelike cooperativo tridimensional com centenas de itens sinérgicos e dificuldade escalante constante.",
    imageUrl: "https://storage.gamehub.com/images/risk_of_rain2.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Roguelike", "Ação", "Multiplayer"],
    release: "2020-08-11",
  },
  {
    id: 67,
    titulo: "Slay the Spire",
    description:
      "Escale a torre enfrentando inimigos com decks de cartas estratégicos que você constrói dinamicamente, combinando elementos de roguelike, deckbuilding e RPG em runs viciantes e únicas.",
    imageUrl: "https://storage.gamehub.com/images/slay_the_spire.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "Mobile"],
    categories: ["Roguelike", "Card Game", "Estratégia"],
    release: "2019-01-23",
  },
  {
    id: 68,
    titulo: "Undertale",
    description:
      "Uma criança cai no Underground e deve navegar por um reino de monstros onde pode lutar ou fazer amizade com cada criatura neste RPG subversivo com múltiplos finais emocionantes.",
    imageUrl: "https://storage.gamehub.com/images/undertale.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["RPG", "Indie"],
    release: "2015-09-15",
  },
  {
    id: 69,
    titulo: "Disco Elysium",
    description:
      "Um detetive amnésico investiga um assassinato em uma cidade pós-revolucionária neste RPG narrativo denso com sistema de habilidades psicológico profundo e diálogos filosóficos brilhantes sem combate tradicional.",
    imageUrl: "https://storage.gamehub.com/images/disco_elysium.jpg",
    platform: [
      "PC",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "Nintendo Switch",
    ],
    categories: ["RPG", "Aventura"],
    release: "2019-10-15",
  },
  {
    id: 70,
    titulo: "Divinity: Original Sin 2",
    description:
      "Heróis marcados buscam ascensão divina em um mundo de fantasia rico com combate tático baseado em turnos profundo, narrativa ramificada complexa e cooperativo completo para quatro jogadores.",
    imageUrl: "https://storage.gamehub.com/images/divinity_os2.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["RPG", "Estratégia"],
    release: "2017-09-14",
  },
  {
    id: 71,
    titulo: "Baldur's Gate 3",
    description:
      "Infectado com um parasita de mind flayer, você deve encontrar a cura enquanto navega por decisões morais complexas neste RPG baseado em Dungeons & Dragons com combate tático profundo.",
    imageUrl: "https://storage.gamehub.com/images/baldurs_gate3.jpg",
    platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
    categories: ["RPG", "Estratégia"],
    release: "2023-08-03",
  },
  {
    id: 72,
    titulo: "Mass Effect Legendary Edition",
    description:
      "A trilogia completa de Mass Effect remasterizada onde o Comandante Shepard luta para salvar a galáxia de uma ameaça antiga com decisões que afetam três jogos épicos.",
    imageUrl: "https://storage.gamehub.com/images/mass_effect_legendary.jpg",
    platform: ["PlayStation 4", "Xbox One", "PC"],
    categories: ["RPG", "Ação"],
    release: "2021-05-14",
  },
  {
    id: 73,
    titulo: "Dragon Age: Inquisition",
    description:
      "Como o Inquisidor, feche uma fenda no céu que derrama demônios enquanto reúne aliados, toma decisões políticas complexas e explora vastas regiões em um épico RPG de fantasia.",
    imageUrl: "https://storage.gamehub.com/images/dragon_age_inquisition.jpg",
    platform: ["PlayStation 4", "Xbox One", "PC"],
    categories: ["RPG", "Ação"],
    release: "2014-11-18",
  },
  {
    id: 74,
    titulo: "Skyrim Special Edition",
    description:
      "Explore a vasta província nórdica de Skyrim como Dragonborn, domine shouts dracônicos, junte-se a guildas diversas e forje seu próprio destino neste RPG de mundo aberto icônico.",
    imageUrl: "https://storage.gamehub.com/images/skyrim_se.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
      "Nintendo Switch",
    ],
    categories: ["RPG", "Mundo Aberto"],
    release: "2016-10-28",
  },
  {
    id: 75,
    titulo: "Fallout 4",
    description:
      "Sobreviva no wastelands pós-nuclear de Boston, construa assentamentos, personalize armas e equipamentos, e busque seu filho desaparecido neste RPG de ação ambientado no universo Fallout.",
    imageUrl: "https://storage.gamehub.com/images/fallout4.jpg",
    platform: ["PlayStation 4", "Xbox One", "PC"],
    categories: ["RPG", "Ação", "Mundo Aberto"],
    release: "2015-11-10",
  },
  {
    id: 76,
    titulo: "Outer Wilds",
    description:
      "Explore um sistema solar preso em um loop temporal de vinte e dois minutos, descobrindo os mistérios de uma antiga civilização alienígena neste jogo de exploração contemplativo e emocionante.",
    imageUrl: "https://storage.gamehub.com/images/outer_wilds.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Aventura", "Puzzle"],
    release: "2019-05-30",
  },
  {
    id: 77,
    titulo: "What Remains of Edith Finch",
    description:
      "Explore a casa da família Finch e experimente as histórias finais de seus membros amaldiçoados através de vinhetas narrativas únicas neste jogo de aventura walking simulator emocionante.",
    imageUrl: "https://storage.gamehub.com/images/edith_finch.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Aventura", "Narrativa"],
    release: "2017-04-25",
  },
  {
    id: 78,
    titulo: "Firewatch",
    description:
      "Henry escapa de sua vida problemática para trabalhar como vigia florestal em Wyoming, onde uma conversa por rádio com Delilah e eventos misteriosos desenrolam uma história de suspense atmosférica.",
    imageUrl: "https://storage.gamehub.com/images/firewatch.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Aventura", "Narrativa"],
    release: "2016-02-09",
  },
  {
    id: 79,
    titulo: "Gone Home",
    description:
      "Retorne para casa após uma viagem ao exterior e explore a mansão vazia de sua família descobrindo segredos através de objetos e anotações neste walking simulator intimista sobre família e identidade.",
    imageUrl: "https://storage.gamehub.com/images/gone_home.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Aventura", "Narrativa"],
    release: "2013-08-15",
  },
  {
    id: 80,
    titulo: "Life is Strange",
    description:
      "Max Caulfield descobre que pode rebobinar o tempo e deve usar esse poder para salvar sua cidade natal e melhor amiga de um destino terrível neste jogo episódico de escolhas consequenciais.",
    imageUrl: "https://storage.gamehub.com/images/life_is_strange.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Mobile"],
    categories: ["Aventura", "Narrativa"],
    release: "2015-01-30",
  },
  {
    id: 81,
    titulo: "Detroit: Become Human",
    description:
      "Três androides questionam sua programação e humanidade em uma Detroit futurista onde escolhas morais complexas moldam múltiplas narrativas entrelaçadas neste drama interativo cinematográfico da Quantic Dream.",
    imageUrl: "https://storage.gamehub.com/images/detroit_bh.jpg",
    platform: ["PlayStation 4", "PC"],
    categories: ["Aventura", "Narrativa"],
    release: "2018-05-25",
  },
  {
    id: 82,
    titulo: "Until Dawn",
    description:
      "Oito amigos retornam a uma cabana nas montanhas onde dois deles desapareceram um ano antes, enfrentando decisões de vida ou morte em um thriller de terror interativo cinematográfico.",
    imageUrl: "https://storage.gamehub.com/images/until_dawn.jpg",
    platform: ["PlayStation 4"],
    categories: ["Terror", "Aventura"],
    release: "2015-08-25",
  },
  {
    id: 83,
    titulo: "Outlast",
    description:
      "Um jornalista investigativo armado apenas com uma câmera explora um asilo psiquiátrico abandonado repleto de pacientes violentos e segredos horríveis neste survival horror intenso em primeira pessoa.",
    imageUrl: "https://storage.gamehub.com/images/outlast.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Terror", "Sobrevivência"],
    release: "2013-09-04",
  },
  {
    id: 84,
    titulo: "Alien: Isolation",
    description:
      "Amanda Ripley procura sua mãe desaparecida em uma estação espacial assombrada por um Xenomorph implacável neste survival horror que captura perfeitamente o terror claustrofóbico do filme original.",
    imageUrl: "https://storage.gamehub.com/images/alien_isolation.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Terror", "Sobrevivência"],
    release: "2014-10-07",
  },
  {
    id: 85,
    titulo: "Amnesia: The Dark Descent",
    description:
      "Daniel acorda em um castelo sombrio sem memórias e deve explorar seus corredores aterrorizantes enquanto evita monstros e mantém sua sanidade neste horror psicológico pioneiro.",
    imageUrl: "https://storage.gamehub.com/images/amnesia_tdd.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Terror", "Aventura"],
    release: "2010-09-08",
  },
  {
    id: 86,
    titulo: "Phasmophobia",
    description:
      "Investigadores paranormais cooperativos usam equipamentos de caça fantasmas para identificar espíritos em locais assombrados enquanto tentam sobreviver a encontros aterrorizantes neste horror multiplayer único.",
    imageUrl: "https://storage.gamehub.com/images/phasmophobia.jpg",
    platform: ["PC"],
    categories: ["Terror", "Multiplayer"],
    release: "2020-09-18",
  },
  {
    id: 87,
    titulo: "Resident Evil 2 Remake",
    description:
      "Leon Kennedy e Claire Redfield sobrevivem ao surto de zumbis em Raccoon City nesta reimaginação magistral do clássico survival horror com gráficos modernos e câmera sobre o ombro.",
    imageUrl: "https://storage.gamehub.com/images/re2_remake.jpg",
    platform: ["PlayStation 4", "Xbox One", "PC"],
    categories: ["Terror", "Ação"],
    release: "2019-01-25",
  },
  {
    id: 88,
    titulo: "Silent Hill 2",
    description:
      "James Sunderland viaja para Silent Hill após receber uma carta de sua esposa falecida, enfrentando manifestações físicas de sua culpa e trauma neste horror psicológico atmosférico icônico.",
    imageUrl: "https://storage.gamehub.com/images/silent_hill2.jpg",
    platform: ["PlayStation 2", "PC"],
    categories: ["Terror", "Aventura"],
    release: "2001-09-24",
  },
  {
    id: 89,
    titulo: "It Takes Two",
    description:
      "Cody e May, transformados em bonecas por uma maldição, devem trabalhar juntos através de mundos fantásticos diversos para salvar seu casamento neste cooperativo obrigatório criativo e emocionante.",
    imageUrl: "https://storage.gamehub.com/images/it_takes_two.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
    ],
    categories: ["Aventura", "Plataforma", "Multiplayer"],
    release: "2021-03-26",
  },
  {
    id: 90,
    titulo: "A Way Out",
    description:
      "Dois prisioneiros devem cooperar para escapar da prisão e fugir das autoridades nesta aventura cooperativa cinematográfica exclusivamente para dois jogadores com tela dividida obrigatória.",
    imageUrl: "https://storage.gamehub.com/images/a_way_out.jpg",
    platform: ["PlayStation 4", "Xbox One", "PC"],
    categories: ["Aventura", "Ação", "Multiplayer"],
    release: "2018-03-23",
  },
  {
    id: 91,
    titulo: "Overcooked 2",
    description:
      "Chefs cooperam para preparar pratos caóticos em cozinhas cada vez mais absurdas com obstáculos dinâmicos neste party game frenético que testa comunicação e coordenação sob pressão.",
    imageUrl: "https://storage.gamehub.com/images/overcooked2.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Party", "Simulação", "Multiplayer"],
    release: "2018-08-07",
  },
  {
    id: 92,
    titulo: "Gang Beasts",
    description:
      "Lutadores gelatinosos enfrentam-se em arenas perigosas cheias de perigos ambientais neste brawler party game físico hilário e caótico perfeito para sessões multiplayer locais.",
    imageUrl: "https://storage.gamehub.com/images/gang_beasts.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    categories: ["Party", "Luta", "Multiplayer"],
    release: "2017-12-12",
  },
  {
    id: 93,
    titulo: "Mario Kart 8 Deluxe",
    description:
      "Personagens da Nintendo competem em pistas coloridas usando power-ups caóticos e karts personalizáveis neste jogo de corrida arcade acessível e competitivo perfeito para todas as idades.",
    imageUrl: "https://storage.gamehub.com/images/mario_kart8.jpg",
    platform: ["Nintendo Switch"],
    categories: ["Corrida", "Party", "Multiplayer"],
    release: "2017-04-28",
  },
  {
    id: 94,
    titulo: "Super Smash Bros. Ultimate",
    description:
      "Mais de oitenta personagens icônicos de videogames se enfrentam em batalhas plataforma caóticas com mecânicas acessíveis mas profundas neste celebrado fighting game crossover da Nintendo.",
    imageUrl: "https://storage.gamehub.com/images/smash_ultimate.jpg",
    platform: ["Nintendo Switch"],
    categories: ["Luta", "Party", "Multiplayer"],
    release: "2018-12-07",
  },
  {
    id: 95,
    titulo: "Street Fighter V",
    description:
      "Lutadores de todo o mundo competem em combates um contra um com mecânicas profundas, personagens diversos e sistema de V-Trigger único neste fighting game competitivo icônico da Capcom.",
    imageUrl: "https://storage.gamehub.com/images/street_fighter5.jpg",
    platform: ["PlayStation 4", "PC"],
    categories: ["Luta", "Multiplayer"],
    release: "2016-02-16",
  },
  {
    id: 96,
    titulo: "Tekken 7",
    description:
      "A saga da família Mishima conclui com combates tridimensionais fluidos, roster vasto de lutadores e sistema Rage Art cinematográfico neste fighting game tecnicamente profundo e visualmente impressionante.",
    imageUrl: "https://storage.gamehub.com/images/tekken7.jpg",
    platform: ["PlayStation 4", "Xbox One", "PC"],
    categories: ["Luta", "Multiplayer"],
    release: "2017-06-02",
  },
  {
    id: 97,
    titulo: "Mortal Kombat 11",
    description:
      "Lutadores clássicos e novos se enfrentam com fatalities brutais, gráficos cinematográficos e sistema de variação customizável neste fighting game maduro com história épica envolvendo viagem no tempo.",
    imageUrl: "https://storage.gamehub.com/images/mk11.jpg",
    platform: [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
      "PC",
      "Nintendo Switch",
    ],
    categories: ["Luta", "Ação"],
    release: "2019-04-23",
  },
  {
    id: 98,
    titulo: "Guilty Gear Strive",
    description:
      "Lutadores estilosos com mecânicas únicas se enfrentam em combates anime espetaculares com gráficos celshaded deslumbrantes e trilha sonora de rock metal neste fighting game técnico e acessível.",
    imageUrl: "https://storage.gamehub.com/images/guilty_gear_strive.jpg",
    platform: ["PlayStation 5", "PlayStation 4", "PC"],
    categories: ["Luta", "Multiplayer"],
    release: "2021-06-11",
  },
  {
    id: 99,
    titulo: "Civilization VI",
    description:
      "Lidere uma civilização desde a Idade da Pedra até a Era da Informação, competindo por supremacia através de conquista, ciência, cultura ou diplomacia neste estratégia em turnos viciante e profundo.",
    imageUrl: "https://storage.gamehub.com/images/civ6.jpg",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "Mobile"],
    categories: ["Estratégia", "Simulação"],
    release: "2016-10-21",
  },
  {
    id: 100,
    titulo: "StarCraft II",
    description:
      "Três raças assimétricas batalham pela supremacia galáctica em intensas partidas de estratégia em tempo real que definiram o gênero competitivo com microgerenciamento preciso e decisões macro estratégicas.",
    imageUrl: "https://storage.gamehub.com/images/starcraft2.jpg",
    platform: ["PC"],
    categories: ["Estratégia", "Multiplayer"],
    release: "2010-07-27",
  },
];

const seed = async () => {
  const db = await openDb();

  // Cria tabela se não existir (caso rode o seed antes do app)
  await db.exec(`CREATE TABLE IF NOT EXISTS games ...`);

  for (const jogo of jogos) {
    await db.run(
      `INSERT INTO games (titulo, description, image_url, release_date) VALUES (?, ?, ?, ?)`,
      [jogo.titulo, jogo.description, jogo["imageUrl"], jogo.release],
    );
    console.log(`Inserido: ${jogo.titulo}`);
  }
  console.log("Migração concluída!");
};

seed();
