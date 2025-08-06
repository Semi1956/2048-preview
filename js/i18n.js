(function (global) {
  const metaDict = {
    en: {
      title: "Play 2048 Online | Advanced Strategy Mode with High-Value Starts",
      description: "Play 2048 online with advanced start options! Begin with high-value tiles (32-512) in your chosen corner. Perfect for experienced players who want to focus on advanced strategies. Free browser-based puzzle game.",
      og_title: "Play 2048 Online | Advanced Strategy Puzzle Game",
      og_description: "Play 2048 online with advanced start mode! Choose your corner, start with high-value tiles (32-512), and master advanced strategies. Free to play!",
      twitter_title: "Play 2048 Online | Advanced Strategy Mode",
      twitter_description: "Play 2048 online with high-value starts (32-512)! Choose your corner and master advanced strategies. Free browser game!"
    },
    de: {
      title: "2048 Online Spielen | Fortgeschrittener Modus mit Hochwertigem Start",
      description: "Spiele 2048 online mit erweiterten Startoptionen! Beginne mit hochwertigen Kacheln (32-512) in deiner gewählten Ecke. Perfekt für erfahrene Spieler, die sich auf fortgeschrittene Strategien konzentrieren möchten.",
      og_title: "2048 Online Spielen | Fortgeschrittenes Strategiespiel",
      og_description: "Spiele 2048 online im fortgeschrittenen Modus! Wähle deine Ecke, starte mit hochwertigen Kacheln (32-512) und meistere fortgeschrittene Strategien. Kostenlos spielbar!",
      twitter_title: "2048 Online Spielen | Fortgeschrittener Modus",
      twitter_description: "Spiele 2048 online mit Hochwertigem Start (32-512)! Wähle deine Ecke und meistere fortgeschrittene Strategien. Kostenloses Browserspiel!"
    },
    ja: {
      title: "2048をオンラインでプレイ | 上級者向け高得点スタートモード",
      description: "高度なスタートオプションで2048をオンラインプレイ！選択したコーナーに高得点タイル(32-512)を配置してスタート。上級者向けの戦略に焦点を当てた無料ブラウザゲーム。",
      og_title: "2048をオンラインでプレイ | 上級戦略パズルゲーム",
      og_description: "上級スタートモードで2048をプレイ！コーナーを選択し、高得点タイル(32-512)からスタート。上級戦略をマスターしよう。無料でプレイ可能！",
      twitter_title: "2048をオンラインでプレイ | 上級者モード",
      twitter_description: "高得点タイル(32-512)で2048をプレイ！コーナーを選んで上級戦略をマスター。無料ブラウザゲーム！"
    },
    ru: {
      title: "Играть в 2048 Онлайн | Продвинутый Режим с Высокими Стартовыми Значениями",
      description: "Играйте в 2048 онлайн с расширенными стартовыми опциями! Начните с высоких плиток (32-512) в выбранном углу. Идеально для опытных игроков, желающих сосредоточиться на продвинутых стратегиях. Бесплатная браузерная головоломка.",
      og_title: "Играть в 2048 Онлайн | Продвинутая Стратегическая Головоломка",
      og_description: "Играйте в 2048 онлайн в продвинутом режиме! Выберите угол, начните с высоких плиток (32-512) и освойте продвинутые стратегии. Бесплатно!",
      twitter_title: "Играть в 2048 Онлайн | Продвинутый Режим",
      twitter_description: "Играйте в 2048 онлайн с высокими стартовыми значениями (32-512)! Выберите угол и освойте продвинутые стратегии. Бесплатная браузерная игра!"
    }
  };

  const dict = {
    en: {
      title: "2048",
      new_game_settings: "New Game Settings",
      start_number: "Starting Number",
      corner_position: "Corner Position",
      top_left: "Top Left",
      top_right: "Top Right",
      bottom_left: "Bottom Left",
      bottom_right: "Bottom Right",
      cancel: "Cancel",
      start: "Start",
      please_select_corner: "Please select a corner position!",
      score: "SCORE",
      best: "BEST",
      new_game: "New Game",
      keep_going: "Keep going",
      try_again: "Try again",
      you_win: "You win!",
      game_over: "Game over!",
      share_title: "Share Your Score",
      how_to_play: "How to play:",
      how_to_play_desc: "Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!",
      pro_tips_title: "Pro Tips for 2048",
      tip1_title: "Anchor Your Biggest Tile",
      tip1_desc: "Pick one corner as your \"home\" for the highest value (working toward 2048). Always slide toward that corner first, and avoid moves that pull it away. This stable anchor keeps your path to 2048 clear.",
      tip2_title: "Build a Descending \"Snake\"",
      tip2_desc: "Arrange tiles in a smooth decreasing order from your chosen corner: for example, 512–256–128–64 along the top row, then continue down. This staircase layout makes merging toward 2048 predictable.",
      tip3_title: "Stick to Two Directions",
      tip3_desc: "Use just Left and Down (if your corner is bottom‑left) for most moves. Limiting yourself avoids accidental shifts that break your snake and set back your 2048 goal. Only use Up or Right to escape a deadlock.",
      tip4_title: "Plan Merges Ahead",
      tip4_desc: "Before each swipe, ask:\\n\\nWill this merge help build toward 2048?\\n\\nCan I keep my highest tile anchored?\\n\\nAm I opening space for the next spawn?\\n\\nThinking two moves ahead prevents careless plays.",
      tip5_title: "Keep Some Empty Space",
      tip5_desc: "Aim to have 2–4 open cells. Too many empties slow momentum; too few and you'll block merges. A mostly full board with room to slide keeps you on track for that final 2048 merge.",
      key_takeaway: "Key Takeaway:",
      key_takeaway_desc: "Anchor, snake pattern, two‑direction rule, and thoughtful merges are your blueprint for hitting 2048. Good luck!",
      share_text_with_score: "I just scored {score} in 2048! My highest tile is {maxTile}. Can you beat my score? 🎮 #2048game",
      share_text_no_score: "Playing 2048 online! My highest tile is {maxTile}. Challenge yourself! 🎮 #2048game",
      copyright: "Copyright 2025 © PLAY 2048 ONLINE. All rights reserved."
    },
    de: {
      title: "2048",
      new_game_settings: "Neues Spiel Einstellungen",
      start_number: "Startnummer",
      corner_position: "Eckposition",
      top_left: "Oben Links",
      top_right: "Oben Rechts",
      bottom_left: "Unten Links",
      bottom_right: "Unten Rechts",
      cancel: "Abbrechen",
      start: "Start",
      please_select_corner: "Bitte wählen Sie eine Eckposition!",
      score: "PUNKTE",
      best: "BESTE",
      new_game: "Neues Spiel",
      keep_going: "Weiter",
      try_again: "Erneut versuchen",
      you_win: "Du hast gewonnen!",
      game_over: "Spiel vorbei!",
      share_title: "Teile deine Punktzahl",
      how_to_play: "Spielanleitung:",
      how_to_play_desc: "Benutze die Pfeiltasten, um die Kacheln zu bewegen. Wenn zwei Kacheln mit derselben Zahl sich berühren, verschmelzen sie!",
      pro_tips_title: "Profi-Tipps für 2048",
      tip1_title: "Verankere deine größte Kachel",
      tip1_desc: "Wähle eine Ecke als \"Basis\" für deinen höchsten Wert (auf dem Weg zu 2048). Schiebe immer zuerst in diese Ecke und vermeide Züge, die sie wegziehen. Dieser stabile Anker hält deinen Weg zu 2048 frei.",
      tip2_title: "Baue eine absteigende \"Schlange\"",
      tip2_desc: "Ordne die Kacheln in absteigender Reihenfolge von deiner gewählten Ecke an: zum Beispiel 512-256-128-64 entlang der oberen Reihe, dann weiter nach unten. Dieses Treppenmuster macht das Verschmelzen zu 2048 vorhersehbar.",
      tip3_title: "Beschränke dich auf zwei Richtungen",
      tip3_desc: "Benutze für die meisten Züge nur Links und Unten (wenn deine Ecke unten links ist). Diese Einschränkung vermeidet versehentliche Verschiebungen, die deine Schlange zerstören und dein 2048-Ziel zurückwerfen. Benutze Oben oder Rechts nur, um einer Sackgasse zu entkommen.",
      tip4_title: "Plane Verschmelzungen voraus",
      tip4_desc: "Frage dich vor jedem Wischen:\\n\\nWird diese Verschmelzung beim Erreichen von 2048 helfen?\\n\\nKann ich meine höchste Kachel verankert halten?\\n\\nSchaffe ich Platz für die nächste Kachel?\\n\\nVorausdenken verhindert unvorsichtige Züge.",
      tip5_title: "Behalte etwas freien Platz",
      tip5_desc: "Ziele auf 2-4 freie Zellen. Zu viele Leerstellen verlangsamen das Momentum; zu wenige und du blockierst Verschmelzungen. Ein größtenteils volles Brett mit Raum zum Schieben hält dich auf Kurs für die finale 2048-Verschmelzung.",
      key_takeaway: "Kernpunkt:",
      key_takeaway_desc: "Anker, Schlangenmuster, Zwei-Richtungen-Regel und durchdachte Verschmelzungen sind dein Bauplan für das Erreichen von 2048. Viel Glück!",
      share_text_with_score: "Ich habe gerade {score} Punkte in 2048 erreicht! Meine höchste Kachel ist {maxTile}. Kannst du meinen Rekord schlagen? 🎮 #2048game",
      share_text_no_score: "Ich spiele 2048 online! Meine höchste Kachel ist {maxTile}. Fordere dich selbst heraus! 🎮 #2048game",
      copyright: "Copyright 2025 © PLAY 2048 ONLINE. Alle Rechte vorbehalten."
    },
    ja: {
      title: "2048",
      new_game_settings: "新規ゲーム設定",
      start_number: "開始数値",
      corner_position: "コーナー位置",
      top_left: "左上",
      top_right: "右上",
      bottom_left: "左下",
      bottom_right: "右下",
      cancel: "キャンセル",
      start: "開始",
      please_select_corner: "コーナー位置を選択してください！",
      score: "スコア",
      best: "ベスト",
      new_game: "ニューゲーム",
      keep_going: "続ける",
      try_again: "もう一度",
      you_win: "勝利！",
      game_over: "ゲームオーバー！",
      share_title: "スコアを共有",
      how_to_play: "遊び方:",
      how_to_play_desc: "矢印キーでタイルを動かします。同じ数字のタイルが合わさると1枚になります！",
      pro_tips_title: "2048攻略のコツ",
      tip1_title: "最大のタイルを固定",
      tip1_desc: "最高値（2048を目指す）のための「ホーム」として一つの角を選びます。常にその角に向かってスライドし、そこから離れる動きは避けましょう。この安定した固定点が2048への道を確保します。",
      tip2_title: "降順の「蛇」を作る",
      tip2_desc: "選んだ角から数値が滑らかに減少するように並べます：例えば上段に512-256-128-64と並べ、そこから下に続けます。この階段状の配置で2048への合成が予測しやすくなります。",
      tip3_title: "2方向に限定",
      tip3_desc: "ほとんどの移動は左と下（左下が角の場合）だけを使います。自分を制限することで、蛇を壊し2048の目標を後退させる偶発的なシフトを避けられます。上や右は行き詰まりを脱する時だけ使用します。",
      tip4_title: "合成を先読み",
      tip4_desc: "スワイプする前に考えましょう：\\n\\nこの合成は2048への近道になる？\\n\\n最高値のタイルを固定できる？\\n\\n次のタイル出現のスペースを確保できる？\\n\\n2手先まで考えることで慎重なプレイができます。",
      tip5_title: "適度な空きスペース",
      tip5_desc: "2-4個の空きセルを目標にします。空きが多すぎるとモメンタムが遅くなり、少なすぎると合成ができなくなります。スライドの余地を残しつつほぼ埋まったボードが、最後の2048合成への道を開きます。",
      key_takeaway: "重要ポイント：",
      key_takeaway_desc: "固定点、蛇パターン、2方向ルール、計画的な合成が2048達成の設計図です。頑張ってください！",
      share_text_with_score: "2048で{score}点獲得！最高タイルは{maxTile}です。私のスコアを超えられる？🎮 #2048game",
      share_text_no_score: "2048をプレイ中！最高タイルは{maxTile}です。チャレンジしてみませんか？🎮 #2048game",
      copyright: "Copyright 2025 © PLAY 2048 ONLINE. All rights reserved."
    },
    ru: {
      title: "2048",
      new_game_settings: "Настройки Новой Игры",
      start_number: "Стартовое Число",
      corner_position: "Позиция Угла",
      top_left: "Левый Верх",
      top_right: "Правый Верх",
      bottom_left: "Левый Низ",
      bottom_right: "Правый Низ",
      cancel: "Отмена",
      start: "Старт",
      please_select_corner: "Пожалуйста, выберите позицию угла!",
      score: "ОЧКИ",
      best: "ЛУЧШИЙ",
      new_game: "Новая Игра",
      keep_going: "Продолжить",
      try_again: "Попробовать снова",
      you_win: "Вы выиграли!",
      game_over: "Игра окончена!",
      share_title: "Поделиться Результатом",
      how_to_play: "Как играть:",
      how_to_play_desc: "Используйте стрелки для перемещения плиток. Когда две плитки с одинаковыми числами соприкасаются, они объединяются в одну!",
      pro_tips_title: "Профессиональные Советы для 2048",
      tip1_title: "Закрепите Самую Большую Плитку",
      tip1_desc: "Выберите один угол как \"дом\" для наивысшего значения (стремясь к 2048). Всегда сдвигайте к этому углу сначала и избегайте ходов, которые уводят плитку. Этот стабильный якорь сохраняет ваш путь к 2048 чистым.",
      tip2_title: "Постройте Убывающую \"Змейку\"",
      tip2_desc: "Расположите плитки в плавно убывающем порядке от выбранного угла: например, 512-256-128-64 вдоль верхнего ряда, затем продолжите вниз. Такая лестничная раскладка делает объединение к 2048 предсказуемым.",
      tip3_title: "Придерживайтесь Двух Направлений",
      tip3_desc: "Используйте только Влево и Вниз (если ваш угол внизу слева) для большинства ходов. Ограничение себя избегает случайных сдвигов, которые ломают змейку и отбрасывают цель 2048. Используйте Вверх или Вправо только для выхода из тупика.",
      tip4_title: "Планируйте Объединения Заранее",
      tip4_desc: "Перед каждым свайпом спросите:\\n\\nПоможет ли это объединение построить путь к 2048?\\n\\nСмогу ли я сохранить мою самую высокую плитку закрепленной?\\n\\nОткрываю ли я место для следующего появления?\\n\\nДумать на два хода вперед предотвращает неосторожные игры.",
      tip5_title: "Сохраняйте Немного Пустого Места",
      tip5_desc: "Стремитесь к 2-4 открытым ячейкам. Слишком много пустых замедляет темп; слишком мало и вы заблокируете объединения. В основном заполненная доска с местом для скольжения держит вас на пути к финальному объединению 2048.",
      key_takeaway: "Ключевой Вывод:",
      key_takeaway_desc: "Якорь, змеиный паттерн, правило двух направлений и продуманные объединения - ваш план для достижения 2048. Удачи!",
      share_text_with_score: "Я только что набрал {score} очков в 2048! Моя самая высокая плитка {maxTile}. Сможешь побить мой счет? 🎮 #2048game",
      share_text_no_score: "Играю в 2048 онлайн! Моя самая высокая плитка {maxTile}. Бросьте себе вызов! 🎮 #2048game",
      copyright: "Copyright 2025 © PLAY 2048 ONLINE. Все права защищены."
    }
  };

  let current = "ru";

  function apply() {
    // 更新普通文本元素
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[current] && dict[current][key]) {
        el.innerText = dict[current][key];
      }
    });

    // 更新meta标签
    document.querySelectorAll("[data-i18n-meta]").forEach(el => {
      const key = el.getAttribute("data-i18n-meta");
      if (metaDict[current] && metaDict[current][key]) {
        if (el.tagName.toLowerCase() === "meta") {
          el.setAttribute("content", metaDict[current][key]);
        } else {
          el.innerText = metaDict[current][key];
        }
      }
    });

    // 更新html标签的lang属性
    document.documentElement.setAttribute("lang", current);
    
    // 更新content-language meta标签
    const contentLangMeta = document.querySelector('meta[http-equiv="content-language"]');
    if (contentLangMeta) {
      contentLangMeta.setAttribute("content", current);
    }

    // 更新language meta标签
    const langMeta = document.querySelector('meta[name="language"]');
    if (langMeta) {
      langMeta.setAttribute("content", current);
    }

    // 更新og:locale
    const ogLocaleMeta = document.querySelector('meta[property="og:locale"]');
    if (ogLocaleMeta) {
      ogLocaleMeta.setAttribute("content", current);
    }
  }

  function setLang(lang) {
    if (!dict[lang]) lang = "en";
    current = lang;
    apply();
    // 供其它脚本调用
    global.I18N = {
      t: (k, vars) => {
        let text = (dict[current] && dict[current][k]) || k;
        if (vars) {
          Object.keys(vars).forEach(key => {
            text = text.replace(new RegExp(`{${key}}`, 'g'), vars[key]);
          });
        }
        return text;
      },
      lang: current
    };
  }

  // 自执行：根据浏览器或 url?lang=，默认使用俄语
  const urlLang = new URLSearchParams(location.search).get("lang");
  const browserLang = navigator.language.slice(0,2);
  // 如果有URL参数则使用，否则检查浏览器语言是否支持，不支持则默认俄语
  const supportedLangs = ["en", "de", "ja", "ru"];
  setLang(urlLang || (supportedLangs.includes(browserLang) ? browserLang : "ru"));
  global.setLang = setLang; // 暴露给下拉框
})(window);