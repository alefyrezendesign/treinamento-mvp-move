
import { Slide } from './types';

export const TRAINING_TITLE = "MOVE | Ministério Visão e Propósito (MVP)";
export const HEADLINE = "MOVE";

export const INITIAL_SLIDES: Slide[] = [
  {
    id: 0,
    title: "MOVE",
    type: 'capa',
    subtitle: "Treinamento de Grupos de Crescimento",
    expandableContent: "Ministério Visão e Propósito (MVP)\nPres. Pr. Fábio Alves | Vice Pr. Cleiton Burger\nDesde 2015",
    reference: "BEM-VINDO",
  },
  {
    id: 1,
    title: "Índice",
    type: 'content',
    content: [
      "02 • Para quem é este treinamento",
      "03 • Objetivo e Visão MVP",
      "05 • DNA e Cultura de Serviço",
      "11 • O que é o MOVE (Célula)",
      "18 • Pilares e Prática do Encontro",
      "27 • Liderança e Responsabilidades",
      "31 • Acompanhamento e Multiplicação"
    ],
  },
  {
    id: 2,
    title: "Para quem é este treinamento",
    type: 'checklist',
    checklist: [
      { id: 'pq1', text: "líderes de célula (MOVE)" },
      { id: 'pq2', text: "obreiros e voluntários" },
      { id: 'pq3', text: "anfitriões (casa que recebe)" },
      { id: 'pq4', text: "líderes em treinamento (futuros líderes MOVE)" }
    ],
    reference: "INTRODUÇÃO"
  },
  {
    id: 3,
    title: "Objetivo do treinamento",
    type: 'checklist',
    reference: "OBJETIVO",
    checklist: [
      { id: 'obj1', text: "alinhar visão e cultura" },
      { id: 'obj2', text: "formar coração e caráter de liderança" },
      { id: 'obj3', text: "ensinar prática do encontro" },
      { id: 'obj4', text: "garantir cuidado, pastoreio e multiplicação saudável" }
    ]
  },
  {
    id: 4,
    title: "Somos a MVP",
    reference: "IDENTIDADE",
    type: 'content',
    content: [
      "Ministério Visão e Propósito, uma igreja cristã comprometida em amar a Deus, servir pessoas e anunciar Jesus com fé, unidade e excelência. Existimos para estabelecer o Reino de Deus onde Ele nos plantou, levando salvação, restauração e esperança às famílias e à comunidade.",
      "Entendemos que a igreja não se resume a quatro paredes. O templo é o lugar onde nos reunimos para celebrar e adorar juntos, mas a Igreja somos nós, em todos os ambientes onde estivermos: em casa, no trabalho, na escola e na cidade. Por isso, somos uma igreja que ama estar junto, vive em comunhão e caminha como família, expressando Jesus no dia a dia.",
      "Cremos em uma igreja viva e cheia da presença do Espírito Santo, fundamentada na Palavra, que forma crianças, adolescentes, jovens e adultos com identidade, maturidade e propósito. Somos uma família espiritual que busca crescer com direção de Deus, levantando líderes, ativando dons e servindo com alegria para impactar vidas."
    ]
  },
  {
    id: 5,
    title: "DNA MVP",
    type: 'capa',
    subtitle: "O que sustenta tudo o que somos e fazemos é o nosso DNA:\nServir com Excelência.",
    reference: "CULTURA",
  },
  {
    id: 6,
    title: "Servir com Excelência",
    type: 'content',
    subtitle: "É o REINO!",
    content: [
      "Fomos chamados para fazer diferença. O chamado de Jesus, “Ide por todo o mundo”, é uma ordem viva.",
      "Não existimos para nós mesmos, mas para estabelecer o Reino de Deus na terra, levando o Evangelho com verdade, poder e amor."
    ]
  },
  {
    id: 7,
    title: "Nosso compromisso",
    reference: "DNA",
    type: 'content',
    content: [
      "Nosso compromisso é maior do que qualquer dor, cansaço ou dificuldade. Não desistimos.",
      "Continuamos, mesmo quando sangra, porque Jesus é suficiente.",
      "Ele é nossa força, nosso alívio e nossa esperança. Parar não é uma opção, porque há vidas que precisam ouvir as boas novas."
    ],
    callout: "Não desistimos. Continuamos porque Ele é suficiente."
  },
  {
    id: 8,
    title: "Como Servimos",
    type: 'content',
    content: [
      "Servir no Reino não é apenas fazer coisas para Deus. É servir pessoas com o coração cheio de Deus.",
      "Nós não servimos apenas para Deus; nós servimos com Deus, como filhos que amam a obra do Pai.",
      "Servir com excelência é viver com Deus e, a partir disso, amar, cuidar e servir o próximo com tudo o que Ele nos confiou."
    ]
  },
  {
    id: 9,
    title: "Missão",
    reference: "DNA",
    type: 'checklist',
    subtitle: "O que Queremos Ser",
    checklist: [
      { id: 'mis1', text: "Uma igreja que influencia o lugar onde Deus a estabeleceu" },
      { id: 'mis2', text: "Uma igreja viva, que gera transformação real na comunidade" },
      { id: 'mis3', text: "Um canal de esperança e fortalecimento de famílias" },
      { id: 'mis4', text: "Referência em amor pela Palavra e no ensino" },
      { id: 'mis5', text: "Uma chama que ativa pessoas e ministérios" },
      { id: 'mis6', text: "Um arco que lança flechas inflamadas pelo Espírito de Deus" }
    ]
  },
  {
    id: 10,
    title: "Visão",
    type: 'checklist',
    subtitle: "O que Queremos Ver",
    checklist: [
      { id: 'vis1', text: "Salvação de almas e rendição verdadeira a Jesus" },
      { id: 'vis2', text: "Famílias restauradas e lares curados" },
      { id: 'vis3', text: "Pessoas maduras, vivendo com propósito e cheias de Deus" },
      { id: 'vis4', text: "Dons ativados, líderes levantados e serviço com alegria" },
      { id: 'vis5', text: "Comunidades alcançadas e expansão com direção de Deus" }
    ]
  },
  {
    id: 11,
    title: "O que é o MOVE",
    type: 'content',
    content: [
      "MOVE - Movimento Visão e Expansão",
      "MOVE é uma célula que alguns conhecem como Grupo de Crescimento.",
      "Ele é a igreja estendida para dentro das casas, dentro do dia a dia, dentro das relações mais próximas."
    ]
  },
  {
    id: 12,
    title: "A Prática da Igreja",
    type: 'reflection',
    question: "O culto é onde a igreja se reúne pra celebrar e adorar. O MOVE é onde a igreja acontece na prática.",
  },
  {
    id: 13,
    title: "MOVE é o coração da igreja",
    type: 'content',
    content: [
      "Coração é o lugar que mantém tudo vivo.",
      "Uma igreja pode ter culto forte e mesmo assim ter gente ferida, sem acompanhamento, sem discipulado ou sem amadurecimento."
    ],
    callout: "Sem o MOVE, o cuidado torna-se distante."
  },
  {
    id: 14,
    title: "Equilíbrio",
    type: 'content',
    content: [
      "Isso não é comparação de valor ou importância espiritual.",
      "A igreja primitiva tinha templo e tinha casa.",
      "A força estava no equilíbrio: celebração + vida próxima e compartilhada."
    ]
  },
  {
    id: 15,
    title: "Impacto Real",
    type: 'checklist',
    checklist: [
      { id: 'imp1', text: "queda espiritual vira algo percebido cedo" },
      { id: 'imp2', text: "feridas são tratadas no começo" },
      { id: 'imp3', text: "dúvidas são acolhidas, não escondidas" },
      { id: 'imp4', text: "pecados são confrontados com amor" },
      { id: 'imp5', text: "dons e ministérios são ativados" }
    ]
  },
  {
    id: 16,
    title: "O MOVE É",
    type: 'content',
    content: [
      "uma família espiritual durante a semana",
      "uma extensão da igreja nas casas",
      "discipulado com participação de todos",
      "cuidado, pastoreio, correção e encorajamento",
      "lugar de cura e responsabilidade mútua"
    ]
  },
  {
    id: 17,
    title: "O QUE O MOVE não é",
    type: 'checklist',
    checklist: [
      { id: 'not1', text: "não é um culto" },
      { id: 'not2', text: "apenas um grupo de oração" },
      { id: 'not3', text: "estudo com ouvintes passivos" },
      { id: 'not4', text: "grupo fechado exclusivo (panelinha)" },
      { id: 'not5', text: "reunião para bate-papo" },
      { id: 'not6', text: "comunhão sem objetivo" }
    ]
  },
  {
    id: 18,
    title: "Pilares do MOVE",
    type: 'capa',
    subtitle: "Se um pilar enfraquece, o MOVE vira apenas reunião.\nSe estão firmes, o MOVE cumpre seu objetivo.",
    fullScreen: true,
  },
  {
    id: 19,
    title: "Os 7 Pilares",
    type: 'checklist',
    checklist: [
      { id: 'pil1', text: "Comunhão" },
      { id: 'pil2', text: "Cuidado" },
      { id: 'pil3', text: "Evangelização" },
      { id: 'pil4', text: "Ensino" },
      { id: 'pil5', text: "Fortalecimento" },
      { id: 'pil6', text: "Crescimento" },
      { id: 'pil7', text: "Multiplicação" }
    ]
  },
  {
    id: 20,
    title: "Comunhão",
    type: 'checklist', // Changed type to checklist to support itemized content with icons
    subtitle: "Conexão real que cria família e vínculo.",
    checklist: [
      { id: 'com1', text: "Receber bem e incluir quem chega" },
      { id: 'com2', text: "Conversas reais, sem máscara" },
      { id: 'com3', text: "Cadeiras em círculo e tempo de comunhão" }
    ],
    measurement: [
      "Se alguém falta, alguém percebe",
      "Pessoas se conhecem pelo nome",
      "O visitante se sente acolhido"
    ]
  },
  {
    id: 21,
    title: "Cuidado",
    type: 'checklist',
    subtitle: "Pastoreio de perto com amor e responsabilidade.",
    checklist: [
      { id: 'cui1', text: "Acompanhar ausências e necessidades" },
      { id: 'cui2', text: "Orar por nomes e situações específicas" },
      { id: 'cui3', text: "Corrigir com amor quando necessário" }
    ],
    measurement: [
      "Ninguém fica invisível",
      "Pessoas pedem ajuda sem medo",
      "Há restauração e avanço"
    ]
  },
  {
    id: 22,
    title: "Evangelização",
    type: 'checklist',
    subtitle: "Alcançar pessoas através de relacionamento.",
    checklist: [
      { id: 'eva1', text: "Manter sempre espaço para visitante" },
      { id: 'eva2', text: "Orar por pessoas e convidar na semana" },
      { id: 'eva3', text: "Fazer encontro livre de tempos em tempos" }
    ],
    measurement: [
      "Sempre chega alguém novo",
      "Visitantes voltam",
      "O grupo tem fome por almas"
    ]
  },
  {
    id: 23,
    title: "Ensino",
    type: 'checklist',
    subtitle: "Bíblia aplicada à vida com clareza e participação.",
    checklist: [
      { id: 'ens1', text: "Talk simples e fiel à Palavra" },
      { id: 'ens2', text: "Perguntas de aplicação prática" },
      { id: 'ens3', text: "Todos participam, não só um fala" }
    ],
    measurement: [
      "Pessoas entendem e explicam com simplicidade",
      "Há mudança na semana",
      "O grupo amadurece"
    ]
  },
  {
    id: 24,
    title: "Fortalecimento",
    type: 'checklist',
    subtitle: "Renovo espiritual e encorajamento para continuar firme.",
    checklist: [
      { id: 'for1', text: "Oração final com seriedade" },
      { id: 'for2', text: "Ministração e encorajamento pela Palavra" },
      { id: 'for3', text: "Celebrar vitórias e avanços" }
    ],
    measurement: [
      "Pessoas saem mais firmes do que chegaram",
      "Há constância na semana",
      "O grupo enfrenta crises unido"
    ]
  },
  {
    id: 25,
    title: "Crescimento",
    type: 'checklist',
    subtitle: "Formação de discípulos e maturidade espiritual.",
    checklist: [
      { id: 'cre1', text: "Desenvolver rotina com Deus (Palavra e oração)" },
      { id: 'cre2', text: "Acompanhar novos convertidos e visitantes" },
      { id: 'cre3', text: "Ativar dons e envolver no serviço" }
    ],
    measurement: [
      "Menos instabilidade e mais maturidade",
      "Mais compromisso com a igreja",
      "Mais fruto e responsabilidade"
    ]
  },
  {
    id: 26,
    title: "Multiplicação",
    type: 'checklist',
    subtitle: "Abrir espaço para novas vidas e proteger o cuidado.",
    checklist: [
      { id: 'mul1', text: "Formar líder em treinamento desde cedo" },
      { id: 'mul2', text: "Delegar funções e preparar nova casa" },
      { id: 'mul3', text: "Planejar quando o grupo se aproxima do limite saudável" }
    ],
    measurement: [
      "O cuidado não cai quando o grupo cresce",
      "Novas lideranças aparecem",
      "O grupo se multiplica com paz e propósito"
    ]
  },
  {
    id: 27,
    title: "Se um pilar cair...",
    type: 'content', // Using content type but will catch in SlideContent with special logic
    subtitle: "A estrutura inteira sofre.",
    content: []
  },
  {
    id: 28,
    title: "Líderes e Anfitriões",
    type: 'capa',
    subtitle: "O coração do serviço nas casas.",
  },
  {
    id: 29,
    title: "Líder do MOVE",
    type: 'checklist',
    subtitle: "Responsabilidades",
    checklist: [
      { id: 'lr1', text: "guardar a visão e o clima espiritual do grupo" },
      { id: 'lr2', text: "conduzir talk com clareza e Bíblia aberta" },
      { id: 'lr3', text: "promover participação, não monólogo" },
      { id: 'lr4', text: "acompanhar pessoas durante a semana" },
      { id: 'lr5', text: "perceber ausências e agir com cuidado" },
      { id: 'lr6', text: "corrigir com amor e verdade" },
      { id: 'lr7', text: "delegar funções e formar novos líderes" },
      { id: 'lr8', text: "proteger ambiente seguro e cultura de honra" }
    ],
    expectations: [
      "ser servo, não controlador",
      "ser firme, não duro",
      "ser presente, não distante",
      "ser intencional, não improvisado",
      "ser ensinável, não soberbo ou arrogante",
      "ser constante, não volúvel",
      "ser sábio e cuidadoso com palavras, não imprudente e insensato"
    ],
    commitments: [
      "viver com Deus em primeiro lugar",
      "servir pessoas com excelência e coração puro",
      "amar a visão do MVP",
      "ser constante, responsável e ensinável",
      "formar outros, não centralizar",
      "cuidar de vidas com seriedade"
    ]
  },
  {
    id: 30,
    title: "Anfitrião",
    type: 'checklist',
    subtitle: "Responsabilidades e Postura",
    checklist: [
      { id: 'ar1', text: "abrir a casa e gerar um ambiente acolhedor" },
      { id: 'ar2', text: "apoiar organização, pontualidade e bom senso" },
      { id: 'ar3', text: "facilitar o ambiente para oração e comunhão" },
      { id: 'ar4', text: "cooperar para que a casa permaneça lugar de paz" },
      { id: 'ar5', text: "ajudar a receber pessoas com alegria" },
      { id: 'ar6', text: "sensibilidade espiritual e discernimento" },
      { id: 'ar7', text: "ter bom relacionamento e ser transparente com todos" },
      { id: 'ar8', text: "gerar um ambiente de abertura e confissões" },
      { id: 'ar9', text: "orientar e ter zelo pelo casa (ordem, limpeza e cuidado com detalhes)" }
    ],
    posture: [
      "hospitalidade com honra",
      "simplicidade com excelência",
      "parceria com a liderança",
      "discrição e confidencialidade",
      "cordialidade e escuta atenta",
      "proatividade com humildade",
      "comunicação clara, gentil e respeitosa",
      "atitude de serviço"
    ]
  },
  {
    id: 31,
    title: "Líder em treinamento",
    type: 'checklist',
    subtitle: "Responsabilidades e Postura",
    checklist: [
      { id: 'lt1', text: "servir com constância e humildade" },
      { id: 'lt2', text: "aprender observando e praticando" },
      { id: 'lt3', text: "conduzir partes do encontro sob orientação" },
      { id: 'lt4', text: "começar a acompanhar pessoas com supervisão" },
      { id: 'lt5', text: "preparar-se para liderar quando for direcionado" }
    ],
    posture: [
      "disponibilidade",
      "responsabilidade crescente",
      "coração ensinável",
      "pontualidade e constância",
      "iniciativa com submissão",
      "fazer perguntas e buscar feedback",
      "discrição e confidencialidade",
      "compromisso com oração e Palavra"
    ]
  },
  {
    id: 32,
    title: "Como ocorre o MOVE na prática",
    type: 'checklist',
    subtitle: "Roteiro e Regras de Ouro",
    fullScreen: true,
    reference: "DINÂMICA DO ENCONTRO",
    timeline: [
      { time: "10 min", text: "Recepção e conexão" },
      { time: "5-10 min", text: "Oração inicial ou louvor" },
      { time: "-", text: "Apresentação (nomes)" },
      { time: "15 min", text: "Palavra do dia (Talk) e leitura bíblica" },
      { time: "20-25 min", text: "Aplicação e participação do grupo" },
      { time: "-", text: "Dinâmica (caso tenha)" },
      { time: "10-15 min", text: "Oração, ministração e pedidos" },
      { time: "2-5 min", text: "Avisos rápidos" },
      { time: "-", text: "Tempo de mesa (comunhão)" }
    ]
  },
  {
    id: 33,
    title: "Regras de Ouro",
    type: 'checklist',
    subtitle: "Princípios inegociáveis do encontro",
    fullScreen: true,
    reference: "PRINCÍPIOS",
    checklist: [
      { id: 'gr1', text: "Pontualidade é honra (nunca em hipótese alguma o líder pode atrasar)" },
      { id: 'gr2', text: "Todos participam" },
      { id: 'gr3', text: "Não é um culto: ambiente leve, próximo, descontraído e de comunhão" },
      { id: 'gr4', text: "Ordem e decência em tudo" },
      { id: 'gr5', text: "Jamais estender além do combinado (respeite o tempo de todos)" }
    ]
  },
  {
    id: 34,
    title: "Acompanhamento Semanal",
    type: 'content',
    content: [
      "O MOVE não vive só no dia do encontro. Ele vive no acompanhamento.",
      "contato com quem faltou (com amor)",
      "oração por necessidades específicas",
      "atenção a novos convertidos",
      "grupo para comunicação"
    ],
    callout: "VOCÊ NÃO É UM LÍDER DE REUNIÃO. VOCÊ É UM PASTOR DE PESSOAS."
  },
  {
    id: 35,
    title: "Saúde do MOVE",
    type: 'reflection',
    question: "A verdadeira medida de saúde do MOVE não é só casa cheia. É vida acompanhada."
  },
  {
    id: 36,
    title: "Confidencialidade",
    type: 'content',
    content: [
      "vulnerabilidade tratada com honra",
      "não expomos pessoas",
      "não fofocamos",
      "não julgamos histórias",
      "verdade e amor caminham juntos"
    ]
  },
  {
    id: 37,
    title: "Crescimento e multiplicação",
    type: 'content',
    content: [
      "Multiplicação não é dividir amigos. É proteger o cuidado e abrir espaço.",
      "quando o grupo está entre 20 a 30 pessoas, começa o preparo.",
      "a multiplicação acontece com paz, alinhamento e propósito."
    ]
  },
  {
    id: 38,
    title: "Comunicação e Honra",
    type: 'checklist',
    checklist: [
      { id: 'com1', text: "evite excesso de conteúdos aleatórios no WhatsApp" },
      { id: 'com2', text: "evite polêmicas" },
      { id: 'com3', text: "assuntos sensíveis: tratar no privado" },
      { id: 'com4', text: "celebre novas vidas e avanços" }
    ]
  },
  {
    id: 39,
    title: "Finalização",
    type: 'capa',
    subtitle: "Bom é isso!\nVamos juntos até o final.\nNinguém fica para trás.",
  }
];
