// defaultWords.ts

const youtubers = ["kuplinov", "over9k5000", "windy31"];

const words = [
  "кибермедицина",
  // "винтовка",
  // "говорящий",
  // "городской",
  // "деловой",
  // "дозор",
  // "имплант",
  // "инстаграм",
  // "клинки",
  // "когти",
  // "коктейльная",
  // "корпораций",
  // "корпорация",
  // "культовый",
  // "легендарный",
  // "локализация",
  // "мусорщики",
  // "оружию",
  // "палочка",
  // "пистолет",
  // "площадь",
  // "подписаться",
  // "полиция",
  // "русский",
  // "русском",
  // "сетевой",
  // "снайперская",
  // "стильный",
  // "тигриные",
  // "триггер",
  // "улица",
  // "шестая",
  // "шмот",
];

const cp77GamingTerms = [
  "ёринобу",
  // "адвосет",
  // "альдекальдо",
  // "альт",
  // "амендиарес",
  // "арасака-тауэр",
  // "арройо",
  // "бак-э-слайс",
  // "бастион",
  // "башки",
  // "бёрнс",
  // "бестия",
  // "бешеные",
  // "биотехника",
  // "биотехники",
  // "блэкхенд",
  // "бруклин",
  // "буригер",
  // "васкес-пасс",
  // "веллингем",
  // "ветер",
  // "ви",
  // "виктор",
  // "винтовки",
  // "виста-дель-рей",
  // "вторая",
  // "вудуисты",
  // "годива",
  // "город",
  // "гряда",
  // "грязь",
  // "дайналар",
  // "дарра",
  // "джапан-таун",
  // "джеки",
  // "джексона",
  // "джонни",
  // "джонни",
  // "джуди",
  // "дзуру-дзуру",
  // "драй-крик",
  // "дьюдроп",
  // "дэниэлс",
  // "евродин",
  // "животные",
  // "жилой",
  // "западный",
  // "зик",
  // "и",
  // "ибарра",
  // "империал",
  // "империя",
  // "инкорпорейтед",
  // "инн",
  // "ишэнь",
  // "кали",
  // "кальенте",
  // "каннингем",
  // "капитан",
  // "капитан",
  // "каполино",
  // "керри",
  // "кимико",
  // "кинг",
  // "кисси",
  // "кныш",
  // "койоакан",
  // "компэки",
  // "коронадо",
  // "красная",
  // "красная",
  // "криспин",
  // "кэй",
  // "кэндати",
  // "лагуна-бенд",
  // "лай",
  // "ли",
  // "лиззи",
  // "лиззис",
  // "лилайя",
  // "линдер",
  // "лос-падрес",
  // "макроуэр",
  // "мальстрём",
  // "мануфактура",
  // "масала",
  // "мацусима-кироши",
  // "мелисса",
  // "мелочи",
  // "мередит",
  // "мёрфи",
  // "месторождения",
  // "меткие",
  // "микрорайон",
  // "милитех",
  // "мисти",
  // "молл",
  // "моноструна",
  // "мотылёк",
  // "мясной",
  // "набережная",
  // "надежда",
  // "найт-сити",
  // "найт-сити",
  // "нефтяные",
  // "норт-оук",
  // "нортсайд",
  // "ноу-телл",
  // "округ",
  // "ольшевская",
  // "отвал",
  // "отчаянная",
  // "панорама",
  // "пасифика",
  // "пёсий",
  // "петерсон",
  // "пир",
  // "пистолеты",
  // "побережье",
  // "поправка",
  // "посмертие",
  // "промышленный",
  // "прорывные",
  // "пустоши",
  // "равнина",
  // "равнины",
  // "рейвен",
  // "ринго",
  // "роки-ридж",
  // "роксанна",
  // "рокси",
  // "рэттлснейк-крик",
  // "сайтех",
  // "санто-доминго",
  // "санчес",
  // "саэкос",
  // "себастьян",
  // "северные",
  // "сильверхенд",
  // "скиппи",
  // "смэшер",
  // "совойл",
  // "софтсис",
  // "стрелки",
  // "студиос",
  // "сьерра-сонора",
  // "сьюзан",
  // "такэмура",
  // "ти-баг",
  // "уиззи",
  // "уэйланд",
  // "уэллс",
  // "уэллспрингс",
  // "уэстбрук",
  // "фредди",
  // "фуюцуки",
  // "хейвуд",
  // "хуанита",
  // "цзэн",
  // "цунами",
  // "чартер-хилл",
  // "чпок-стрит",
  // "шин",
  // "шины",
  // "эвелин",
  // "эдзи",
  // "экспресс",
  // "эль",
  // "энгельс",
  // "энд",
  // "эндрю",
  // "энни",
];

const gamingTerms = [
  ...cp77GamingTerms,
  // "прохождение",
];

const miscSymbols = ["🇷🇺"];

export const defaultWords = [
  ...gamingTerms,
  ...miscSymbols,
  ...words,
  // ...youtubers, // todo: fix google search and youtube entire page can dissapear
];