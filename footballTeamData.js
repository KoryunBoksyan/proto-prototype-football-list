const leagues = {
  leagueA: {
    teams: [
      {
        name: "Манчестер Сити",
        gameCount: 38,
        winCount: 27,
        drawCount: 5,
        louseCount: 6,
        scoredGoal: 83,
        missedGoal: 32,
        point: 86,
        coach: "Хосеп Гвардиола",
        players: [
                    {
                        name: "Эдерсон",
                        nomber: 31,
                        position: "Вратарь",
                        redCards: 0,
                        yellowCards: 3,
                        goalCount: 0,
                        matchCount: 36,
                    },
                    {
                        name: "Рубен Диаш",
                        nomber: 3,
                        position: "Защитник",
                        redCards: 0,
                        yellowCards: 4,
                        goalCount: 1,
                        matchCount: 32,
                    },
                    {
                        name: "Жоау Канселу",
                        nomber: 27,
                        position: "Защитник",
                        redCards: 1,
                        yellowCards: 5,
                        goalCount: 2,
                        matchCount: 28,
                    },
                    {
                        name: "Кайл Уокер",
                        nomber: 2,
                        position: "Защитник",
                        redCards: 0,
                        yellowCards: 1,
                        goalCount: 1,
                        matchCount: 24,
                    },
                    {
                        name: "Джон Стоунз",
                        nomber: 5,
                        position: "Защитник",
                        redCards: 1,
                        yellowCards: 0,
                        goalCount: 4,
                        matchCount: 22,
                    },
                    {
                        name: "Кевин де Брейне",
                        nomber: 17,
                        position: "Полузащитник",
                        redCards: 0,
                        yellowCards: 1,
                        goalCount: 6,
                        matchCount: 25,
                    },
                    {
                        name: "Родри",
                        nomber: 16,
                        position: "Полузащитник",
                        redCards: 0,
                        yellowCards: 6,
                        goalCount: 2,
                        matchCount: 34,
                    },
                    {
                        name: "Ферран Торрес",
                        nomber: 21,
                        position: "Полузащитник",
                        redCards: 0,
                        yellowCards: 1,
                        goalCount: 7,
                        matchCount: 24,
                    },
                    {
                        name: "Фил Фоден",
                        nomber: 47,
                        position: "Полузащитник",
                        redCards: 0,
                        yellowCards: 0,
                        goalCount: 7,
                        matchCount: 28,
                    },
                    {
                        name: "Рахим Стерлинг",
                        nomber: 7,
                        position: "Нападающий",
                        redCards: 0,
                        yellowCards: 4,
                        goalCount: 10,
                        matchCount: 31,
                    },
                    {
                        name: "Габриэл Жезус",
                        nomber: 9,
                        position: "Нападающий",
                        redCards: 0,
                        yellowCards: 2,
                        goalCount: 9,
                        matchCount: 29,
                    },
        ],
      },
      {
        name: "Манчестер Юнайтед",
        gameCount: 38,
        winCount: 21,
        drawCount: 11,
        louseCount: 6,
        scoredGoal: 73,
        missedGoal: 44,
        point: 69,
        coach: "ХУле Гуннар Сульшер",
        players: [
                    {
                        name: "Дин Хендерсон",
                        nomber: 13,
                        position: "Вратарь",
                        redCards: 0,
                        yellowCards: 3,
                        goalCount: 0,
                        matchCount: 13,
                    },
                    {
                        name: "ЗакГарри Магуайр ",
                        nomber: 5,
                        position: "Защитник",
                        redCards: 0,
                        yellowCards: 10,
                        goalCount: 2,
                        matchCount: 34,
                    },
                    {
                        name: "Люк Шоу ",
                        nomber: 23,
                        position: "Защитник",
                        redCards: 0,
                        yellowCards: 8,
                        goalCount: 1,
                        matchCount: 32,
                    },
                    {
                        name: " Алекс Теллес ",
                        nomber: 27,
                        position: "Защитник",
                        redCards: 0,
                        yellowCards: 0,
                        goalCount: 0,
                        matchCount: 9,
                    },
                    {
                        name: "Аарон Ван-Биссака",
                        nomber: 29,
                        position: "Защитник",
                        redCards: 0,
                        yellowCards: 3,
                        goalCount: 2,
                        matchCount: 34,
                    },
                    {
                        name: "Поль Погба",
                        nomber: 6,
                        position: "Полузащитник",
                        redCards: 0,
                        yellowCards: 3,
                        goalCount: 3,
                        matchCount: 26,
                    },
                    {
                        name: "Фред",
                        nomber: 17,
                        position: "Полузащитник",
                        redCards: 0,
                        yellowCards: 5,
                        goalCount: 1,
                        matchCount: 30,
                    },
                    {
                        name: " Неманья Матич",
                        nomber: 31,
                        position: "Полузащитник",
                        redCards: 0,
                        yellowCards: 2,
                        goalCount: 0,
                        matchCount: 20,
                    },
                    {
                        name: " Эдинсон Кавани",
                        nomber: 7,
                        position: "Нападающий",
                        redCards: 0,
                        yellowCards: 5,
                        goalCount: 10,
                        matchCount: 26,
                    },
                    {
                        name: " Антони Марcьяль",
                        nomber: 9,
                        position: "Нападающий",
                        redCards: 1,
                        yellowCards: 0,
                        goalCount: 4,
                        matchCount: 22,
                    },
                    {
                        name: " Маркус Рэшфорд",
                        nomber: 10,
                        position: "Нападающий",
                        redCards: 0,
                        yellowCards: 4,
                        goalCount: 11,
                        matchCount: 37,
                    },
        ],
      },
      {
        name: "Лестер",
        gameCount: 38,
        winCount: 20,
        drawCount: 6,
        louseCount: 12,
        scoredGoal: 68,
        missedGoal: 50,
        point: 6,
        coach: "Брендан Роджерс",
        players: [
                    {
                        name: "Каспер Шмейхель",
                        nomber: 1,
                        position: "Вратарь",
                        redCards: 0,
                        yellowCards: 0,
                        goalCount: 0,
                        matchCount: 38,
                    },
                    {
                        name: "Джеймс Джастин",
                        nomber: 2,
                        position: "Защитник",
                        redCards: 0,
                        yellowCards: 4,
                        goalCount: 2,
                        matchCount: 23,
                    },
                    {
                        name: "Уэсли Фофана",
                        nomber: 3,
                        position: "Защитник",
                        redCards: 0,
                        yellowCards: 7,
                        goalCount: 0,
                        matchCount: 28,
                    },
                    {
                        name: "Чаглар Сеюнджю",
                        nomber: 4,
                        position: "Защитник",
                        redCards: 0,
                        yellowCards: 2,
                        goalCount: 1,
                        matchCount: 23,
                    },
                    {
                        name: "Уэсли Морган",
                        nomber: 5,
                        position: "Защитник",
                        redCards: 0,
                        yellowCards: 0,
                        goalCount: 0,
                        matchCount: 3,
                    },
                    {
                        name: "Юри Тилеманс",
                        nomber: 8,
                        position: "Полузащитник",
                        redCards: 0,
                        yellowCards: 6,
                        goalCount: 6,
                        matchCount: 38,
                    },
                    {
                        name: "Джеймс Мэддисон",
                        nomber: 10,
                        position: "Полузащитник",
                        redCards: 0,
                        yellowCards: 4,
                        goalCount: 8,
                        matchCount: 31,
                    },
                    {
                        name: "Марк Олбрайтон",
                        nomber: 11,
                        position: "Полузащитник",
                        redCards: 0,
                        yellowCards: 2,
                        goalCount: 1,
                        matchCount: 31,
                    },
                    {
                        name: "Джейми Варди",
                        nomber: 9,
                        position: "Нападающий",
                        redCards: 0,
                        yellowCards: 1,
                        goalCount: 15,
                        matchCount: 34,
                    },
                    {
                        name: "Келечи Ихеаначо",
                        nomber: 14,
                        position: "Нападающий",
                        redCards: 1,
                        yellowCards: 1,
                        goalCount: 12,
                        matchCount: 25,
                    },
                    {
                        name: "Айосе Перес",
                        nomber: 17,
                        position: "Нападающий",
                        redCards: 0,
                        yellowCards: 2,
                        goalCount: 2,
                        matchCount: 25,
                    },
        ],
      },
      {
        name: "Челси",
        gameCount: 38,
        winCount: 19,
        drawCount: 10,
        louseCount: 9,
        scoredGoal: 58,
        missedGoal: 36,
        point: 67,
        coach: "Томас Тухель",
        players: [
                {
                    name: "Эдуард Менди",
                    nomber: 16,
                    position: "Вратарь",
                    redCards: 0,
                    yellowCards: 2,
                    goalCount: 0,
                    matchCount: 31,
                },
                {
                    name: "Антонио Рюдигер",
                    nomber: 2,
                    position: "Защитник",
                    redCards: 0,
                    yellowCards: 0,
                    goalCount: 1,
                    matchCount: 19,
                },
                {
                    name: "Маркос Алонсо",
                    nomber: 3,
                    position: "Защитник",
                    redCards: 0,
                    yellowCards: 2,
                    goalCount: 2,
                    matchCount: 13,
                },
                {
                    name: "  Курт Зума",
                    nomber: 15,
                    position: "Защитник",
                    redCards: 0,
                    yellowCards: 3,
                    goalCount: 5,
                    matchCount: 24,
                },
                {
                    name: "Бен Чилуэлл",
                    nomber: 21,
                    position: "Защитник",
                    redCards: 0,
                    yellowCards: 3,
                    goalCount: 3,
                    matchCount: 27,
                },
                {
                    name: "Нголо Канте",
                    nomber: 7,
                    position: "Полузащитник",
                    redCards: 0,
                    yellowCards: 7,
                    goalCount: 0,
                    matchCount: 30,
                },
                {
                    name: "Матео Ковачич",
                    nomber: 17,
                    position: "Полузащитник",
                    redCards: 0,
                    yellowCards: 4,
                    goalCount: 0,
                    matchCount: 27,
                },
                {
                    name: "Мейсон Маунт",
                    nomber: 19,
                    position: "Полузащитник",
                    redCards: 0,
                    yellowCards: 2,
                    goalCount: 6,
                    matchCount: 36,
                },
                {
                    name: "Хаким Зиеш",
                    nomber: 22,
                    position: "Полузащитник",
                    redCards: 0,
                    yellowCards: 3,
                    goalCount: 2,
                    matchCount: 23,
                },
                {
                    name: "Тэмми Абрахам",
                    nomber: 9,
                    position: "Нападающий",
                    redCards: 0,
                    yellowCards: 0,
                    goalCount: 6,
                    matchCount: 22,
                },
                {
                    name: "Тимо Вернер",
                    nomber: 11,
                    position: "Нападающий",
                    redCards: 0,
                    yellowCards: 2,
                    goalCount: 6,
                    matchCount: 35,
                },
        ],
      },
      {
        name: 'Ливерпуль',
        gameCount: 38,
        winCount: 20,
        drawCount: 9,
        louseCount: 9,
        scoredGoal: 68,
        missedGoal: 42,
        point: 69,
        coach: 'Юрген Клопп',
        players: [
                    {
                        name: 'Алиссон',
                        nomber: 13,
                        position: 'Вратарь',
                        redCards: 0,
                        yellowCards: 1,
                        goalCount: 1,
                        matchCount: 33
                    },
                    {
                        name: 'Вирджил ван Дейк',
                        nomber: 4,
                        position: 'Защитник',
                        redCards: 0,
                        yellowCards: 1,
                        goalCount: 1,
                        matchCount: 5
                    },
                    {
                        name: 'Эндрю Робертсон',
                        nomber: 26,
                        position: 'Защитник',
                        redCards: 0,
                        yellowCards: 2,
                        goalCount: 1,
                        matchCount: 38
                    },
                    {
                        name: 'Трент Александер-Арнольд',
                        nomber: 66,
                        position: 'Защитник',
                        redCards: 0,
                        yellowCards: 2,
                        goalCount: 2,
                        matchCount: 36
                    },
                    {
                        name: 'Жоэль Матип',
                        nomber: 32,
                        position: 'Защитник',
                        redCards: 0,
                        yellowCards: 2,
                        goalCount: 1,
                        matchCount: 10
                    },
                    {
                        name: 'Фабиньо',
                        nomber: 3,
                        position: 'Полузащитник',
                        redCards: 0,
                        yellowCards: 6,
                        goalCount: 0,
                        matchCount: 30
                    },
                    {
                        name: 'Джорджиньо Вейналдум',
                        nomber: 5,
                        position: 'Полузащитник',
                        redCards: 0,
                        yellowCards: 1,
                        goalCount: 2,
                        matchCount: 38
                    },
                    {
                        name: 'Джордан Хендерсон',
                        nomber: 14,
                        position: 'Полузащитник',
                        redCards: 0,
                        yellowCards: 0,
                        goalCount: 1,
                        matchCount: 21
                    },
                    {
                        name: 'Тьяго Алькантара',
                        nomber: 6,
                        position: 'Полузащитник',
                        redCards: 0,
                        yellowCards: 4,
                        goalCount: 1,
                        matchCount: 24
                    },
                    {
                        name: 'Роберто Фирмино',
                        nomber: 9,
                        position: 'Нападающий',
                        redCards: 0,
                        yellowCards: 2,
                        goalCount: 9,
                        matchCount: 36
                    },
                    {
                        name: 'Садио Мане',
                        nomber: 10,
                        position: 'Нападающий',
                        redCards: 0,
                        yellowCards: 3,
                        goalCount: 11,
                        matchCount: 35
                    },
                ]
            }
        ],
    },
};
