(function (global) {
  const metaDict = {
    en: {
      title: "Play 2048 Online | Free Puzzle Game to Merge Tiles & Score High",
      description: "Play the classic 2048 puzzle game online for free. Merge tiles, challenge your skills, and aim for the 2048 tile!",
      og_title: "Play 2048 Online | Free Puzzle Game",
      og_description: "Merge tiles to reach 2048 in this addictive browser-based puzzle game. No download required!",
      twitter_title: "Play 2048 Online | Free Puzzle Game",
      twitter_description: "Instantly play 2048 in your browser. Merge, strategize, and hit that 2048 tile!"
    },
    de: {
      title: "2048 Online Spielen | Kostenloses Puzzle-Spiel zum Zusammenführen von Kacheln",
      description: "Spiele das klassische 2048-Puzzle kostenlos online. Führe Kacheln zusammen, fordere dein Geschick heraus und strebe die 2048-Kachel an!",
      og_title: "2048 Online Spielen | Kostenloses Puzzle-Spiel",
      og_description: "Verbinde Kacheln zu 2048 in diesem süchtig machenden browserbasiertem Puzzle-Spiel. Kein Download erforderlich!",
      twitter_title: "2048 Online Spielen | Kostenloses Puzzle-Spiel",
      twitter_description: "Spiele 2048 sofort in deinem Browser. Verbinde, plane strategisch und erreiche die 2048-Kachel!"
    },
    ja: {
      title: "2048をオンラインでプレイ | タイルをマージして高得点を目指す無料パズルゲーム",
      description: "クラシックな2048パズルゲームを無料でプレイ。タイルをマージし、スキルを磨いて、2048タイルを目指そう！",
      og_title: "2048をオンラインでプレイ | 無料パズルゲーム",
      og_description: "このブラウザベースの中毒性のあるパズルゲームで、タイルをマージして2048を目指そう。ダウンロード不要！",
      twitter_title: "2048をオンラインでプレイ | 無料パズルゲーム",
      twitter_description: "ブラウザですぐに2048をプレイ。マージして、戦略を立てて、2048タイルを目指そう！"
    }
  };

  const dict = {
    en: {
      title: "2048",
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
    }
  };

  let current = "en";

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

  // 自执行：根据浏览器或 url?lang=
  const urlLang = new URLSearchParams(location.search).get("lang");
  setLang(urlLang || navigator.language.slice(0,2));
  global.setLang = setLang; // 暴露给下拉框
})(window);