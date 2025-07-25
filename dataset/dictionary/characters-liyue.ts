import type { SourceWord } from "../../libs/types.ts";

export default [
  //
  // Liyue - Main Characters
  //
  {
    en: "Xiangling",
    ja: "香菱",
    zhCN: "香菱",
    zhTW: "香菱",
    pronunciationJa: "シャンリン",
    notes: "[発音についての参考動画](https://youtu.be/p10yiwULJA8?t=303)",
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "Keqing",
    ja: "刻晴",
    zhCN: "刻晴",
    zhTW: "刻晴",
    pronunciationJa: "こくせい",
    notes: "読みは「クゥー(ァ)チン」([参考動画](https://youtu.be/p10yiwULJA8?t=288))",
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "Yuheng",
    ja: "玉衡",
    zhCN: "玉衡",
    zhTW: "玉衡",
    pronunciationJa: "ユーヘン",
    notesEn: "Keqing's title",
    notes: "刻晴の称号。中国では、北斗七星の1つであるおおぐま座ε星が「玉衡」と呼ばれることに由来。 参考: [Wikipedia: 北斗七星](https://ja.wikipedia.org/wiki/%E5%8C%97%E6%96%97%E4%B8%83%E6%98%9F#%E5%8C%97%E6%96%97%E4%B8%83%E6%98%9F%E3%82%92%E6%A7%8B%E6%88%90%E3%81%99%E3%82%8B%E6%98%9F)",
    notesZh: "刻晴的称号。该名字来自于北斗七星中的玉衡星。 [维基百科](https://zh.wikipedia.org/wiki/%E7%8E%89%E8%A1%A1_(%E6%81%92%E6%98%9F))；[百度百科](https://baike.baidu.com/item/%E7%8E%89%E8%A1%A1/75319)。",
    notesZhTW: "刻晴的稱號。該名字來自於北斗七星中的玉衡星。 [維基百科](https://zh.wikipedia.org/wiki/%E7%8E%89%E8%A1%A1_(%E6%81%92%E6%98%9F))。",
    tags: [ "liyue", "title" ],
  },
  {
    en: "Ningguang",
    ja: "凝光",
    zhCN: "凝光",
    zhTW: "凝光",
    pronunciationJa: "ぎょうこう",
    notes: "発音は「ニィングアン」([参考動画](https://youtu.be/p10yiwULJA8?t=256))",
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "Tianquan",
    ja: "天権",
    zhCN: "天权",
    zhTW: "天權",
    pronunciationJa: "テンチュエン",
    notesEn: "Ningguang's title",
    notes: "凝光の称号。中国では、北斗七星の1つであるおおぐま座δ星が「天権」と呼ばれることに由来。参考: [Wikipedia: 北斗七星](https://ja.wikipedia.org/wiki/%E5%8C%97%E6%96%97%E4%B8%83%E6%98%9F#%E5%8C%97%E6%96%97%E4%B8%83%E6%98%9F%E3%82%92%E6%A7%8B%E6%88%90%E3%81%99%E3%82%8B%E6%98%9F)",
    notesZh: "凝光的称号。该名字来自于北斗七星中的天权星，也被称作「文曲星」，掌管学问。 [维基百科](https://zh.wikipedia.org/wiki/%E5%A4%A9%E6%AC%8A)；[百度百科](https://baike.baidu.com/item/%E5%A4%A9%E6%9D%83/5233911)。",
    notesZhTW: "凝光的稱號。該名字來自於北斗七星中的天權星，也被稱作「文曲星」，掌管學問。 [維基百科](https://zh.wikipedia.org/wiki/%E5%A4%A9%E6%AC%8A)。",
    tags: [ "liyue", "title" ],
  },
  {
    en: "Qiqi",
    ja: "七七",
    zhCN: "七七",
    zhTW: "七七",
    pronunciationJa: "なな",
    notes: "読みは「チィーチィー」([参考動画](https://youtu.be/p10yiwULJA8?t=283))",
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "Fortune Preserver",
    ja: "救苦度厄真君",  // notes: 元素爆発の時に仙名を名乗る
    zhCN: "救苦渡厄真君",
    zhTW: "救苦渡厄真君",
    pronunciationJa: "きゅうくどやくしんくん",
    notesEn: "Qiqi's adeptus name",
    notes: "七七の仙名",
    notesZh: "七七的仙名。",
    notesZhTW: "七七的仙名。",
    tags: [ "liyue", "title" ],
  },
  {
    en: "Xingqiu",
    ja: "行秋",
    zhCN: "行秋",
    zhTW: "行秋",
    pronunciationJa: "ゆくあき",
    notes: "読みは「シンチォウ」([参考動画](https://youtu.be/p10yiwULJA8?t=224))",
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "Zhenyu",
    ja: "枕玉",
    zhCN: "枕玉",
    zhTW: "枕玉",
    pronunciationJa: "ちんぎょく",
    notes: "行秋のペンネーム",
    notesZh: "行秋的笔名。",
    notesZhTW: "行秋的筆名。",
    tags: [ "liyue", "title" ],
  },
  {
    en: "Chongyun",
    ja: "重雲",
    zhCN: "重云",
    zhTW: "重雲",
    pronunciationJa: "ちょううん",
    notes: "読みは「チョンュイン」([参考動画](https://youtu.be/p10yiwULJA8?t=237))",
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "Beidou",
    ja: "北斗",
    zhCN: "北斗",
    zhTW: "北斗",
    pronunciationJa: "ほくと",
    notes: "発音は「ベイドウ」([参考動画](https://youtu.be/p10yiwULJA8?t=248))",
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "Xinyan",
    ja: "辛炎",
    zhCN: "辛焱",
    zhTW: "辛焱",
    pronunciationJa: "しんえん",
    tags: [ "liyue", "character-main" ],
    pinyins: [{ char: "焱", pron: "yan4" }],
    zhuyins: [{ char: "焱", pron: "ㄧㄢˋ" }],
  },
  {
    en: "Zhongli",
    ja: "鍾離",
    zhCN: "钟离",
    zhTW: "鍾離",
    pronunciationJa: "しょうり",
    notes: "読みは「ヂョンリー」([参考動画](https://youtu.be/p10yiwULJA8?t=118))",
    notesZh: "「锺离」（曾经简化字写作「钟离」）是中国古代早已有之的汉字复姓。根据国务院在2013年公布的由国家语委和教育部制定的《通用规范汉字表》，在人名姓氏中使用的「钟」字应当改为「锺」字。[维基百科](https://zh.wikipedia.org/wiki/鍾離姓)；[百度百科](https://baike.baidu.com/item/钟离姓/10971667)；[教育部通用规范汉字表](https://www.moe.gov.cn/jyb_sjzl/ziliao/A19/201306/t20130601_186002.html)。",
    notesZhTW: "「鍾離」是中國古代早已有之的漢字複姓。[維基百科](https://zh.wikipedia.org/wiki/%E9%8D%BE%E9%9B%A2%E5%A7%93)。",
    tags: [ "liyue", "character-main" ],
    variants: {
      ja: [ "鐘離" ],
    },
  },
  {
    en: "consultant",
    ja: "客卿",
    zhCN: "客卿",
    zhTW: "客卿",
    pronunciationJa: "かっけい",
    tags: [ "liyue", "title" ],
    notes: "鍾離の往生堂における地位。guest と訳されている箇所もある。", // Source: v2.4 Fleeting Colors in Flight preview page https://webstatic-sea.hoyoverse.com/ys/event/e20211227-pre/
    notesZh: "钟离在往生堂的职位。在英文版有时候也译作「guest」（客人）。",
    notesZhTW: "鍾離在往生堂的職位。在英文版有時候也譯作「guest」（客人）。",
  },
  {
    en: "Mr. Zhongli",
    ja: "鍾離先生 / 鍾離さん",
    zhCN: "钟离先生",
    zhTW: "鍾離先生",
    pronunciationJa: "しょうりせんせい / しょうりさん",
    tags: [ "liyue", "how-to-call" ],
    notes: "日本語版では「鍾離先生」と呼んでいるシーンでも、英語版では Mr. なしで \"Zhongli\" と呼んでいる箇所もあり、必ずしも常に Mr. が付いているわけでもない。例えば香菱などは、英語版では Mr. Zhongli、日本語では「鍾離さん」と呼ぶ。(鍾離のエピソード動画「想定外の支出」など [日本語](https://youtu.be/5slzVViNrtA?t=79) / [英語](https://youtu.be/CvCzYbVei04?t=80))",
    notesZh: "在日文版中，即使是称呼「钟离先生」的场景，英文版有时也会直接称呼「Zhongli」，并不总是带有「Mr.」。例如香菱在英文版中称呼为「Mr. Zhongli」，而在日文版中则称呼为「鍾離さん」。（参考钟离角色PV「额外的记账」：[日文版](https://youtu.be/5slzVViNrtA?t=79)、[英文版](https://youtu.be/CvCzYbVei04?t=80)。）",
    notesZhTW: "在日文版中，即使是稱呼「鍾離先生」的場景，英文版有時也會直接稱呼「Zhongli」，並不總是帶有「Mr.」。例如香菱在英文版中稱呼為「Mr. Zhongli」，而在日文版中則稱呼為「鍾離さん」。（參考鍾離角色PV「額外的記帳」：[日文版](https://youtu.be/5slzVViNrtA?t=79)、[英文版](https://youtu.be/CvCzYbVei04?t=80)。）",
  },
  {
    en: "Jade Shield",
    ja: "玉璋シールド",
    zhCN: "玉璋护盾",
    zhTW: "玉璋護盾",
    pronunciationJa: "ぎょくしょうシールド",
    notes: "鍾離の元素スキルで生成されるシールド",
    notesZh: "钟离元素战技生成的护盾。",
    notesZhTW: "鍾離元素戰技生成的護盾。",
    tags: [ "liyue" ],
  },
  {
    en: "Xiao",
    ja: "魈",
    zhCN: "魈",
    zhTW: "魈",
    pronunciationJa: "しょう",
    notes: "発音は「シァオ」([参考動画](https://youtu.be/p10yiwULJA8?t=310))",
    tags: [ "liyue", "character-main" ],
    pinyins: [{ char: "魈", pron: "xiao1" }],
    zhuyins: [{ char: "魈", pron: "ㄒㄧㄠ" }],
  },
  {
    en: "Conqueror of Demons",
    ja: "降魔大聖",
    zhCN: "降魔大圣",
    zhTW: "降魔大聖",
    pronunciationJa: "こうまたいせい",
    notesEn: "Xiao's title",
    notes: "魈の称号",
    notesZh: "魈的称号。",
    notesZhTW: "魈的稱號。",
    tags: [ "liyue", "title" ],
  },
  {
    en: "Guardian Yaksha",
    ja: "護法夜叉",
    zhCN: "护法夜叉",
    zhTW: "護法夜叉",
    pronunciationJa: "ごほうやしゃ",
    // Source of Vigilant Yaksha: v2.4 Fleeting Colors in Flight preview page https://webstatic-sea.hoyoverse.com/ys/event/e20211227-pre/
    notesEn: "Xiao's title",
    notes: "魈の称号。「護法夜叉大将」(Vigilant Yaksha) と記される場合もある。",
    notesZh: "魈的称号。日文版中有时会补上「大将」二字。英文版另有「Vigilant Yaksha」，亦表示护法夜叉。",
    notesZhTW: "魈的稱號。日文版中有時會補上「大將」二字。英文版另有「Vigilant Yaksha」，亦表示護法夜叉。",
    tags: [ "liyue", "title" ],
  },
  {
    en: "Alatus",
    ja: "金鵬",
    zhCN: "金鹏",
    zhTW: "金鵬",
    pronunciationJa: "きんほう",
    notesEn: "Xiao's title",
    notes: "魈の称号",
    notesZh: "魈的称号。",
    tags: [ "liyue", "title" ],
  },
  {
    en: "Ganyu",
    ja: "甘雨",
    zhCN: "甘雨",
    zhTW: "甘雨",
    pronunciationJa: "かんう",
    // Pronunciataion of Chinese spelled in Japanese can be 「がんゆー」,　IMO. -- Bill Haku
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "qilin",
    ja: "麒麟",
    zhCN: "麒麟",
    zhTW: "麒麟",
    pronunciationJa: "きりん",
    tags: [ "liyue" ],
    examples: [{
      en: "The blood of the qilin, an illuminated beast, flows within her veins.",
      ja: "その身には仙獣「麒麟」の血が流れている。",
      zhCN: "体内流淌着仙兽「麒麟」的血脉。",
      zhTW: "體內流淌著仙獸「麒麟」的血脈。",
      ref: "v2.4「流るる星霜、華咲きて」特設ページ ― 甘雨の紹介文",
      refURL: "https://webstatic-sea.hoyoverse.com/ys/event/e20211227-pre/",
    }],
  },
  {
    id: "hutao",
    en: "Hu Tao",
    ja: "胡桃",
    zhCN: "胡桃",
    zhTW: "胡桃",
    pronunciationJa: "フータオ",
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "Yanfei",
    ja: "煙緋",
    zhCN: "烟绯",
    zhTW: "煙緋",
    pronunciationJa: "えんひ",
    notes: "英語及び中国語の読みは「イェンフェイ」",
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "Baizhu",
    ja: "白朮",
    zhCN: "白术",
    zhTW: "白朮",
    pronunciationJa: "びゃくじゅつ",
    tags: [ "liyue", "character-main" ],
    notes: "英語の発音は「バイジュ」",
    pinyins: [{ char: "术", pron: "zhu2" }],
    zhuyins: [{ char: "朮", pron: "ㄓㄨˊ" }],
  },
  {
    en: "Dr. Baizhu",
    ja: "白先生",
    zhCN: "白先生",
    zhTW: "白先生",
    pronunciationJa: "びゃくせんせい",
    tags: [ "liyue", "how-to-call" ],
    notes: "七七などからの白朮の呼び名",
    notesZh: "七七对白术的称呼。",
    notesZhTW: "七七對白朮的稱呼。",
  },
  // ▼▼ TODO Become a main character in the upcoming version? ▼▼
  {
    en: "Xingyan",
    ja: "星燕",
    zhCN: "星燕",
    zhTW: "星燕",
    tags: [ "liyue", "character-sub" ],
  },
  // ▲▲ TODO Become a main character in the upcoming version? ▲▲
  {
    en: "Yun Jin",
    ja: "雲菫",
    zhCN: "云堇",
    zhTW: "雲堇",
    // Pronunciataion of Chinese spelled in Japanese can be 「ゆんじん」, IMO. -- Bill Haku
    pronunciationJa: "うんきん",
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "Ms. Yun",
    ja: "雲先生 / 雲座頭",
    zhCN: "云先生",
    zhTW: "雲先生",
    pronunciationJa: "うんせんせい / うんざがしら",
    tags: [ "liyue", "how-to-call" ],
    notes: "雲菫への敬称",
    notesZh: "对云堇的敬称。",
    notesZhTW: "對雲堇的敬稱。",
  },
  {
    en: "Shenhe",
    ja: "申鶴",
    zhCN: "申鹤",
    zhTW: "申鶴",
    pronunciationJa: "しんかく",
    tags: [ "liyue", "character-main" ],
    notes: "発音は「シェンハ」",
  },
  {
    en: "Yelan",
    ja: "夜蘭",
    zhCN: "夜兰",
    zhTW: "夜蘭",
    pronunciationJa: "イェラン",
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "Yaoyao",
    ja: "ヨォーヨ",
    zhCN: "瑶瑶",
    zhTW: "瑤瑤",
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "Yuegui",
    ja: "月桂",
    zhCN: "月桂",
    zhTW: "月桂",
    pronunciationJa: "ユェーグェイ",
    tags: [ "liyue", "object" ],
    notes: "ヨォーヨの持っている人形 (留雲借風真君が作ったからくり)",
    notesZh: "瑶瑶手中拿的布偶，留云借风真君打造的仙家法宝。",
    notesZhTW: "瑤瑤手中拿的布偶，留雲借風真君打造的仙家法寶。",
  },
  {
    en: "Jade Radish",
    ja: "白玉大根",
    zhCN: "白玉萝卜",
    zhTW: "白玉蘿蔔",
    pronunciationJa: "しらたまだいこん", // need confirmation
    tags: [ "liyue" ],
    notes: "月桂が投げる武器",
    notesZh: "月桂投掷的武器。",
    notesZhTW: "月桂投擲的武器。",
  },
  {
    en: "Mega Radish",
    ja: "超スゴイ! 大根",
    zhCN: "超厉害·大萝卜",
    zhTW: "超厲害·大蘿蔔",
    pronunciationJa: "ちょうスゴイだいこん",
    tags: [ "liyue" ],
    notes: "ヨォーヨが完凸している場合に月桂が投げる武器",
    notesZh: "瑶瑶满命之后月桂投掷的武器的名字。",
    notesZhTW: "瑤瑤滿命之後月桂投擲的武器的名字。",
  },
  {
    en: "Morax",
    ja: "モラクス",
    zhCN: "摩拉克斯",
    zhTW: "摩拉克斯",
    tags: [ "liyue", "title" ],
    notesEn: "Zhongli's Goetic name.",
    notes: "鍾離の魔神名",
    notesZh: "钟离的魔神名。",
    notesZhTW: "鍾離的魔神名。",
  },
  {
    en: "Rex Lapis",
    ja: "岩王帝君",
    zhCN: "岩王帝君",
    zhTW: "岩王帝君",
    pronunciationJa: "がんおうていくん",
    tags: [ "liyue", "title", "how-to-call" ],
    notesEn: "Honorary title to Morax.",
    notes: "モラクスへの尊称",
    notesZh: "对摩拉克斯的尊称。",
    notesZhTW: "對摩拉克斯的尊稱。",
    variants: {
      zhCN: [ "岩王爷", "阎王爷" ],
      zhTW: [ "岩王爺", "閻王爺" ],
    },
  },
  {
    en: "Geo Archon",
    ja: "岩神",
    zhCN: "岩神",
    zhTW: "岩神",
    tags: [ "liyue", "title" ],
    pronunciationJa: "がんしん",
    variants: {
      en: [ "Geo God", "God of Geo" ],
    },
  },
  {
    en: "Xianyun",
    ja: "閑雲",
    zhCN: "闲云",
    zhTW: "閒雲",
    pronunciationJa: "かんうん",
    tags: [ "liyue", "character-main" ],
    notesEn: "Cloud Retainer's popular name",
    notes: "留雲借風真君の俗名",
    notesZh: "留云借风真君入世后起的新名字。",
    notesZhTW: "留雲借風真君入世後起的新名字。",
  },
  {
    en: "Gaming",
    ja: "嘉明",
    zhCN: "嘉明",
    zhTW: "嘉明",
    pronunciationJa: "がみん",
    tags: [ "liyue", "character-main" ],
  },
  {
    en: "Lan Yan",
    ja: "藍硯",
    zhCN: "蓝砚",
    zhTW: "藍硯",
    pronunciationJa: "らんやん",
    tags: [ "liyue", "character-main" ],
  },

  //
  // Liyue - Sub-Characters
  //
  {
    en: "Madame Ping",
    ja: "ピンばあや",
    zhCN: "萍姥姥",
    zhTW: "萍姥姥",
    tags: [ "liyue", "character-sub", "sereniteapot" ],
    notesEn: "Streetward Rambler's popular name",
    notes: "歌塵浪市真君の俗名",
    notesZh: "歌尘浪市真君入世后的称呼。",
    notesZhTW: "歌塵浪市真君入世後的稱呼。",
  },
  {
    en: "Streetward Rambler",
    ja: "歌塵浪市真君",
    pronunciationJa: "かじんろういちしんくん",
    zhCN: "歌尘浪市真君",
    zhTW: "歌塵浪市真君",
    tags: [ "liyue", "character-sub", "sereniteapot" ],
    notesEn: "Madame Ping's adeptus name and title",
    notes: "ピンばあやの称号・仙名",
    notesZh: "萍姥姥的称号和仙名。",
    notesZhTW: "萍姥姥的稱號和仙名。",
  },
  {
    en: "Uncle Tian",
    ja: "天おじ",
    zhCN: "天叔",
    zhTW: "天叔",
    pronunciationJa: "てんおじ",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Tianshu",
    ja: "天枢",
    zhCN: "天枢",
    zhTW: "天樞",
    pronunciationJa: "てんすう",
    tags: [ "liyue", "title" ],
    notesEn: "Uncle Tian's title",
    notes: "天おじの称号。中国では、北斗七星の1つであるおおぐま座α星が「天枢」と呼ばれることに由来。参考: [Wikipedia: 北斗七星](https://ja.wikipedia.org/wiki/%E5%8C%97%E6%96%97%E4%B8%83%E6%98%9F#%E5%8C%97%E6%96%97%E4%B8%83%E6%98%9F%E3%82%92%E6%A7%8B%E6%88%90%E3%81%99%E3%82%8B%E6%98%9F)",
    notesZh: "天叔的称号。来自于北斗七星中的天枢星。",
    notesZhTW: "天叔的稱號。來自於北斗七星中的天樞星。",
  },
  {
    en: "Moon Carver",
    ja: "削月築陽真君",
    zhCN: "削月筑阳真君",
    zhTW: "削月筑陽真君",
    pronunciationJa: "さくげつちくようしんくん",
    tags: [ "liyue", "character-sub" ],
    notesEn: "Houzhang's adeptus name and title",
    notes: "候章の称号・仙名",
    notesZh: "侯章的称号和仙名。",
    notesZhTW: "侯章的稱號和仙名。",
  },
  {
    en: "Mountain Shaper",
    ja: "理水畳山真君",
    zhCN: "理水叠山真君",
    zhTW: "理水疊山真君",
    pronunciationJa: "りすいじょうざんしんくん",
    tags: [ "liyue", "character-sub" ],
    notesEn: "Jiehu's adeptus name and title",
    notes: "接笏の称号・仙名",
    notesZh: "接笏的称号和仙名。",
    notesZhTW: "接笏的稱號和仙名。",
  },
  {
    en: "Uncle Mountain Shaper",
    ja: "理水おじちゃん",
    zhCN: "理水叔叔",
    zhTW: "理水叔叔",
    pronunciationJa: "りすいおじちゃん",
    tags: [ "liyue", "how-to-call" ],
    notes: "ヨォーヨの理水畳山真君に対する呼び方",
    notesZh: "瑶瑶对理水叠山真君的称呼。",
    notesZhTW: "瑤瑤對理水疊山真君的稱呼。",
  },
  {
    en: "Cloud Retainer",
    ja: "留雲借風真君",
    zhCN: "留云借风真君",
    zhTW: "留雲借風真君",
    pronunciationJa: "りゅううんしゃくふうしんくん",
    tags: [ "liyue", "character-sub" ],
    notesEn: "Xianyun's adeptus name and title.",
    notes: "閑雲の称号・仙名",
    notesZh: "闲云的称号和仙名。",
    notesZhTW: "閒雲的稱號和仙名。",
  },
  {
    en: "Aunty Cloud Retainer",
    ja: "留雲おばちゃん",
    zhCN: "留云阿姨",
    zhTW: "留雲阿姨",
    pronunciationJa: "りゅううんおばちゃん",
    tags: [ "liyue", "how-to-call" ],
    notes: "ヨォーヨの留雲借風真君に対する呼び方",
    notesZh: "瑶瑶对留云借风真君的称呼。",
    notesZhTW: "瑤瑤對留雲借風真君的稱呼。",
  },
  {
    en: "Azhdaha",
    ja: "若陀龍王",
    zhCN: "若陀龙王",
    zhTW: "若陀龍王",
    pronunciationJa: "じゃくだりゅうおう",
    notes: "英語の発音は「エイジダハ」",
    notesZh: "英文「Azhdaha」开头的元音为闭口音「ei」。",
    notesZhTW: "英文「Azhdaha」開頭的元音為閉口音「ei」。",
    tags: [ "liyue", "character-sub", "enemy-boss" ],
    variants: {
      ja: [ "若陀竜王", "若蛇龍王", "若蛇竜王", "若陀" ],
      zhCN: [ "若陀" ],
      zhTW: [ "若陀" ],
    },
    pinyins: [{ char: "若", pron: "re3" }],
    zhuyins: [{ char: "若", pron: "ㄖㄜˇ" }],
  },
  {
    en: "Guoba",
    zhCN: "锅巴",
    zhTW: "鍋巴",
    ja: "グゥオパァー",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Marchosius",
    ja: "マルコシアス",
    zhCN: "马科修斯",
    zhTW: "馬科修斯",
    tags: [ "liyue", "title" ],
    notesEn: "Guoba's Goetic name.",
    notes: "グゥオパァーの魔神名",
    notesZh: "锅巴的魔神名。",
    notesZhTW: "鍋巴的魔神名。",
  },
  {
    en: "God of the Stove",
    ja: "竈神",
    zhCN: "灶神",
    zhTW: "灶神",
    pronunciationJa: "かまどがみ",
    tags: [ "liyue", "title" ],
    notesEn: "Marchosius(Guoba)'s title",
    notes: "マルコシアス (グゥオパァー) の称号",
    notesZh: "马科修斯（锅巴）的称号。",
    notesZhTW: "馬科修斯（鍋巴）的稱號。",
  },
  {
    en: "Bosacius",
    ja: "浮舎",
    zhCN: "浮舍",
    zhTW: "浮舍",
    pronunciationJa: "ふしゃ",
    tags: [ "liyue", "character-sub" ],
    notes: "仙衆夜叉の1人",
    notesZh: "仙众夜叉之一。",
    notesZhTW: "仙眾夜叉之一。",
  },
  {
    en: "Marshal Vritras",
    ja: "騰蛇太元帥",
    zhCN: "腾蛇太元帅",
    zhTW: "騰蛇太元帥",
    pronunciationJa: "とうだたいげんすい",
    tags: [ "liyue", "title" ],
    notesEn: "Bosacius's title",
    notes: "仙衆夜叉・浮舎の称号",
    notesZh: "仙众夜叉「浮舍」的称号。",
    notesZhTW: "仙眾夜叉「浮舍」的稱號。",
  },
  {
    en: "Menogias",
    ja: "弥怒",
    zhCN: "弥怒",
    zhTW: "彌怒",
    pronunciationJa: "みぬ",
    tags: [ "liyue", "character-sub" ],
    notes: "仙衆夜叉の1人",
    notesZh: "仙众夜叉之一。",
    notesZhTW: "仙眾夜叉之一。",
  },
  {
    en: "General Kapisas",
    ja: "心猿大将",
    zhCN: "心猿大将",
    zhTW: "心猿大將",
    pronunciationJa: "しんえんたいしょう",
    tags: [ "liyue", "title" ],
    notesEn: "Menogias's title",
    notes: "仙衆夜叉・弥怒の称号",
    notesZh: "仙众夜叉「弥怒」的称号。",
    notesZhTW: "仙眾夜叉「彌怒」的稱號。",
  },
  {
    en: "Bonanus",
    ja: "伐難",
    zhCN: "伐难",
    zhTW: "伐難",
    pronunciationJa: "ばつなん",
    tags: [ "liyue", "character-sub" ],
    notes: "仙衆夜叉の1人",
    notesZh: "仙众夜叉之一。",
    notesZhTW: "仙眾夜叉之一。",
  },
  {
    en: "General Chizapus",
    ja: "螺巻大将",
    zhCN: "螺卷大将",
    zhTW: "螺卷大將",
    pronunciationJa: "らかんたいしょう",
    tags: [ "liyue", "title" ],
    notesEn: "Bonanus's title",
    notes: "仙衆夜叉・伐難の称号",
    notesZh: "仙众夜叉「伐难」的称号。",
    notesZhTW: "仙眾夜叉「伐難」的稱號。",
  },
  {
    en: "Indarias",
    ja: "応達",
    zhCN: "应达",
    zhTW: "應達",
    pronunciationJa: "おうたつ",
    tags: [ "liyue", "character-sub" ],
    notes: "仙衆夜叉の1人",
    notesZh: "仙众夜叉之一。",
    notesZhTW: "仙眾夜叉之一。",
  },
  {
    en: "General Musatas",
    ja: "火鼠大将",
    zhCN: "火鼠大将",
    zhTW: "火鼠大將",
    pronunciationJa: "かそたいしょう",
    tags: [ "liyue", "title" ],
    notesEn: "Indarias's title.",
    notes: "仙衆夜叉・応達の称号",
    notesZh: "仙众夜叉「应达」的称号。",
    notesZhTW: "仙眾夜叉「應達」的稱號。",
  },
  {
    en: "Pervases",
    ja: "銅雀",
    zhCN: "铜雀",
    zhTW: "銅雀",
    pronunciationJa: "どうじゃく",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Wang Ping'an",
    ja: "平安",
    zhCN: "王平安",
    zhTW: "王平安",
    pronunciationJa: "へいあん",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Starsnatcher",
    ja: "掇星攫辰天君",
    zhCN: "掇星攫辰天君",
    zhTW: "掇星攫辰天君",
    tags: [ "liyue", "title" ],
    pinyins: [{ char: "掇", pron: "duo1" }, { char: "攫", pron: "jue2" }],
    zhuyins: [{ char: "掇", pron: "ㄉㄨㄛ" }, { char: "攫", pron: "ㄐㄩㄝˊ" }],
  },
  {
    en: "Chef Mao",
    ja: "卯師匠",
    zhCN: "卯师傅",
    zhTW: "卯師傅",
    pronunciationJa: "うーししょう",
    notes: "香菱の父",
    notesZh: "香菱的父亲。",
    notesZhTW: "香菱的父親。",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Bao'er",
    ja: "宝児",
    zhCN: "宝儿",
    zhTW: "寶兒",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Yan'er",
    ja: "イェン",
    zhCN: "胭儿",
    zhTW: "胭兒",
    tags: [ "liyue", "character-sub" ],
    notes: "世界任務『「螭」の話』「広海の守護」などに登場する宝盗団の幹部",
    notesZh: "世界任务「古云有『螭』」、「广海的守望」等中登场的盗宝团干部。",
    notesZhTW: "世界任務「古雲有『螭』」、「廣海的守望」等中登場的盜寶團幹部。",
  },
  {
    en: "\"Big Sis\"",
    ja: "「姉御」",
    zhCN: "「大姐」",
    zhTW: "「大姐」",
    tags: [ "liyue", "title" ],
    notes: "イェンの通り名",
    notesZh: "胭儿的通称。",
    notesZhTW: "胭兒的通稱。",
  },
  {
    en: "Guizhong",
    ja: "帰終",
    zhCN: "归终",
    zhTW: "歸終",
    pronunciationJa: "きしゅう",
    tags: [ "liyue", "character-sub" ],
    notes: "発音は「グウェィヂョン」([参考動画](https://youtu.be/p10yiwULJA8?t=179))",
  },
  {
    en: "Haagentus",
    ja: "ハーゲントゥス",
    zhCN: "哈艮图斯",
    zhTW: "哈艮圖斯",
    tags: [ "liyue", "title" ],
    notesEn: "Guizhong's Goetic name.",
    notes: "帰終の魔神名",
    notesZh: "归终的魔神名。",
    notesZhTW: "歸終的魔神名。",
  },
  {
    en: "God of Dust",
    ja: "塵の魔神",
    zhCN: "尘之魔神",
    zhTW: "塵之魔神",
    pronunciationJa: "ちりのまじん",
    tags: [ "liyue", "title" ],
    notesEn: "Guizhong's title",
    notes: "帰終の魔神としての称号",
    notesZh: "归终的魔神称号。",
    notesZhTW: "歸終的魔神稱號。",
  },
  {
    en: "Havria",
    ja: "ヘウリア",
    zhCN: "赫乌莉亚",
    zhTW: "赫烏莉亞",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "God of Salt",
    ja: "塩の魔神",
    zhCN: "盐之魔神",
    zhTW: "鹽之魔神",
    pronunciationJa: "しおのまじん",
    tags: [ "liyue", "title" ],
    notesEn: "Havria's title",
    notes: "ヘウリアの魔神としての称号",
    notesZh: "赫乌莉亚的魔神称号。",
    notesZhTW: "赫烏莉亞的魔神稱號。",
  },
  {
    en: "Sea Gazer",
    ja: "鳴海栖霞真君",
    zhCN: "鸣海栖霞真君",
    zhTW: "鳴海棲霞真君",
    pronunciationJa: "なるみせいかしんくん",
    tags: [ "liyue", "character-sub" ],
    notes: "璃月の仙人の一人",
    notesZh: "璃月仙人之一。",
    notesZhTW: "璃月仙人之一。",
  },
  {
    en: "Skybracer",
    ja: "移霄導天真君",
    zhCN: "移霄导天真君",
    zhTW: "移霄導天真君",
    pronunciationJa: "いしょうどうてんしんくん",
    tags: [ "liyue", "character-sub" ],
    notes: "璃月の仙人の一人",
    notesZh: "璃月仙人之一。",
    notesZhTW: "璃月仙人之一。",
  },
  {
    en: "Changsheng",
    ja: "長生",
    zhCN: "长生",
    zhTW: "長生",
    pronunciationJa: "ちょうせい",
    tags: [ "liyue", "character-sub" ],
    notes: "白朮が連れている蛇",
    notesZh: "白术脖子上的蛇。",
    notesZhTW: "白朮脖子上的蛇。",
  },
  {
    en: "Baiwen",
    ja: "百聞",
    pronunciationJa: "ひゃくぶん",
    zhCN: "百闻",
    zhTW: "百聞",
    tags: [ "liyue", "character-sub" ],
    notes: "凝光の秘書の1人",
    notesZh: "凝光的秘书之一。",
    notesZhTW: "凝光的秘書之一。",
  },
  {
    en: "Baishi",
    ja: "百識",
    zhCN: "百识",
    zhTW: "百識",
    tags: [ "liyue", "character-sub" ],
    notes: "凝光の秘書の1人",
    notesZh: "凝光的秘书之一。",
    notesZhTW: "凝光的秘書之一。",
  },
  {
    en: "Baixiao",
    ja: "百暁",
    zhCN: "百晓",
    zhTW: "百曉",
    tags: [ "liyue", "character-sub" ],
    notes: "凝光の秘書の1人",
    notesZh: "凝光的秘书之一。",
    notesZhTW: "凝光的秘書之一。",
  },
  {
    en: "Verr Goldet",
    ja: "ヴェル・ゴレット",
    zhCN: "菲尔戈黛特",
    zhTW: "菲爾戈黛特",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Huai'an",
    ja: "淮安",
    zhCN: "淮安",
    zhTW: "淮安",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Smiley Yanxiao",
    ja: "言笑",
    zhCN: "言笑",
    zhTW: "言笑",
    pronunciationJa: "げんしょう",
    tags: [ "liyue", "character-sub" ],
    variants: {
      en: [ "Yanxiao" ],
    },
  },
  {
    en: "Jiangxue",
    ja: "江雪",
    zhCN: "江雪",
    zhTW: "江雪",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Ms. Yu",
    ja: "シャオユウ",
    zhCN: "小雨",
    zhTW: "小雨",
    tags: [ "liyue", "character-sub" ],
    notes: "璃月評判任務の受付キャラクター",
    notesEn: "A representative character for the reputation quests in Liyue.",
    notesZh: "璃月声望任务的交付角色。",
    notesZhTW: "璃月聲望任務的交付角色。",
  },
  {
    en: "Jiawei",
    ja: "嘉瑋",
    zhCN: "嘉玮",
    zhTW: "嘉瑋",
    tags: [ "liyue", "character-sub" ],
    notes: "璃月の漁師",
    notesEn: "Liyue Angler.",
    notesZh: "璃月的渔夫。",
    notesZhTW: "璃月的漁夫。",
  },
  {
    en: "Ying'er",
    ja: "鶯",
    zhCN: "莺儿",
    zhTW: "鶯兒",
    pronunciationJa: "うぐいす",
    tags: [ "liyue", "character-sub" ],
    notes: "英語版における発音は「インガー」",
  },
  {
    en: "Shitou",
    ja: "石商",
    zhCN: "石头",
    zhTW: "石頭",
    pronunciationJa: "せきしょう", // TODO Need Check
    tags: [ "liyue", "character-sub" ],
    notes: "鉱石を売っている店「解翠行」の店主",
    notesEn: "Owner of the ore shop \"Jade Mystery\".",
    notesZh: "赌石铺「解翠行」的店主。",
    notesZhTW: "賭石鋪「解翠行」的店主。",
  },
  {
    en: "Lan",
    ja: "嵐姉",
    zhCN: "岚姐",
    zhTW: "嵐姐",
    pronunciationJa: "あらしねえ",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Hanfeng, \"Cold Blade\"",
    ja: "寒鋒",
    zhCN: "寒锋",
    zhTW: "寒鋒",
    tags: [ "liyue", "character-sub" ],
    variants: {
      en: [ "Hanfeng" ],
    },
  },
  {
    en: "Master Zhang",
    ja: "章",
    zhCN: "老章",
    zhTW: "老章",
    tags: [ "liyue", "character-sub" ],
    variants: {
      en: [ "Zhang" ],
    },
  },
  {
    en: "Jifang",
    ja: "紀芳",
    zhCN: "纪芳",
    zhTW: "紀芳",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Tea Master Liu Su",
    ja: "茶博士劉蘇",
    zhCN: "茶博士刘苏",
    zhTW: "茶博士劉蘇",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Fan Er'ye",
    ja: "範二",
    zhCN: "范二爷",
    zhTW: "範二爺",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Soraya",
    ja: "ソラヤー",
    zhCN: "索拉雅",
    zhTW: "索拉雅",
    tags: [ "liyue", "sumeru", "character-sub" ],
  },
  // The Chasm
  {
    en: "Jinwu",
    ja: "瑾武",
    zhCN: "瑾武",
    zhTW: "瑾武",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Yuehui",
    ja: "玥輝",
    zhCN: "玥辉",
    zhTW: "玥輝",
    pronunciationJa: "げつき",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Muning",
    ja: "沐寧",
    zhCN: "沐宁",
    zhTW: "沐寧",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Zhiqiong",
    ja: "志璇",
    zhCN: "志璇",
    zhTW: "志璇",
    pronunciationJa: "しせん",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Taliesin",
    ja: "タリエシン",
    zhCN: "塔列辛",
    zhTW: "塔列辛",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Khedive Pursina",
    ja: "ヘディーヴ・プルシナ",
    zhCN: "海迪夫·普尔希纳",
    zhTW: "海迪夫·普爾希納",
    tags: [ "liyue", "sumeru", "character-sub" ],
  },
  {
    en: "Clitopho",
    ja: "クレイトポン",
    zhCN: "克里托夫",
    zhTW: "克里托夫",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Uncle He",
    ja: "何爺",
    zhCN: "何爷",
    zhTW: "何爺",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Brass Bull Zhao",
    ja: "趙鉄牛",
    zhCN: "赵铁牛",
    zhTW: "趙鐵牛",
    tags: [ "liyue", "character-sub", "enemy" ],
  },
  {
    en: "Chen the Flower",
    ja: "陳嬌花",
    zhCN: "陈娇花",
    zhTW: "陳嬌花",
    tags: [ "liyue", "character-sub", "enemy" ],
  },
  {
    en: "Anton Melnikov",
    ja: "アントン・メルニコフ",
    zhCN: "安东·梅利尼科夫",
    zhTW: "安東·梅利尼科夫",
    notes: "層岩巨淵に取り残されたファデュイ「第九中隊」の臨時隊長",
    notesEn: "Brevet Commander of the Ninth Company, a Fatui company got lost in The Chasm.",
    notesZh: "被困在层岩巨渊的愚人众第九连队的临时连长。",
    notesZhTW: "被困在層岩巨淵的愚人眾第九連隊的臨時連長。",
    tags: [ "liyue", "fatui", "character-sub" ],
  },
  {
    en: "Antoha",
    ja: "アントハー",
    zhCN: "安托哈",
    zhTW: "安託哈",
    notes: "アントン・メルニコフの呼び名",
    notesEn: "Anton Melnikov's nickname.",
    notesZh: "安东·梅利尼科夫的昵称。",
    notesZhTW: "安東·梅利尼科夫的暱稱。",
    tags: [ "liyue", "fatui", "character-sub" ],
  },
  {
    en: "Ninth Company Brevet Commander",
    ja: "「第九中隊」臨時隊長",
    zhCN: "「第九连队」临时连长",
    zhTW: "「第九連隊」臨時連長",
    notes: "アントン・メルニコフの肩書",
    notesEn: "Anton Melnikov's title.",
    notesZh: "安东·梅利尼科夫的头衔。",
    notesZhTW: "安東·梅利尼科夫的頭銜。",
    tags: [ "liyue", "fatui", "title" ],
  },
  {
    en: "Temur",
    ja: "ティモール",
    zhCN: "提莫尔",
    zhTW: "提莫爾",
    notes: "層岩巨淵に取り残されたファデュイ「第九中隊」の隊員",
    notesEn: "A member of the Ninth Company, a Fatui company got lost in The Chasm.",
    notesZh: "被困在层岩巨渊的愚人众第九连队的队员。",
    notesZhTW: "被困在層岩巨淵的愚人眾第九連隊的隊員。",
    tags: [ "liyue", "fatui", "character-sub" ],
  },
  {
    en: "Danila",
    ja: "ダニーラ",
    zhCN: "达尼拉",
    zhTW: "達尼拉",
    notes: "層岩巨淵に取り残されたファデュイ「第九中隊」の隊員",
    notesEn: "A member of the Ninth Company, a Fatui company got lost in The Chasm.",
    notesZh: "被困在层岩巨渊的愚人众第九连队的队员。",
    notesZhTW: "被困在層岩巨淵的愚人眾第九連隊的隊員。",
    tags: [ "liyue", "fatui", "character-sub" ],
  },
  {
    en: "Radomir",
    ja: "ラドミール",
    zhCN: "拉多米尔",
    zhTW: "拉多米爾",
    notes: "層岩巨淵に取り残されたファデュイ「第九中隊」の隊員",
    notesEn: "A member of the Ninth Company, a Fatui company got lost in The Chasm.",
    notesZh: "被困在层岩巨渊的愚人众第九连队的队员。",
    notesZhTW: "被困在層岩巨淵的愚人眾第九連隊的隊員。",
    tags: [ "liyue", "fatui", "character-sub" ],
  },
  {
    en: "Yanbo",
    ja: "彦博",
    zhCN: "彦博",
    zhTW: "彥博",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Katarina",
    ja: "カタリナ",
    zhCN: "卡塔琳娜",
    zhTW: "卡塔琳娜",
    notes: "層岩巨淵・蛍光隘路にいる雷蛍術師",
    notesEn: "An Electro Cicin Mage in The Glowing Narrows, The Chasm.",
    notesZh: "层岩巨渊·荧光狭道中的雷萤术士。",
    notesZhTW: "層岩巨淵·螢光狹道中的雷螢術士。",
    tags: [ "liyue", "fatui", "character-sub" ],
  },
  {
    en: "Xamaran",
    ja: "ザマラン",
    zhCN: "赞玛兰",
    zhTW: "贊瑪蘭",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Qi Ding",
    ja: "戚定",
    zhCN: "戚定",
    zhTW: "戚定",
    tags: [ "liyue", "character-sub" ],
    notes: "世界任務「巨淵の恩恵」で登場する、人形を探している鉱夫",
    notesZh: "世界任务「巨渊的馈赠」中的登场角色，寻找丢失娃娃的矿工。",
    notesZhTW: "世界任務「巨淵的饋贈」中的登場角色，尋找丟失娃娃的礦工。",
  },
  {
    en: "Kun Jun",
    ja: "クンジュ",
    zhCN: "昆钧",
    zhTW: "昆鈞",
    tags: [ "liyue", "character-sub" ],
    notes: "鍾離の伝説任務に登場する人物",
    notesZh: "钟离的传说任务 古闻之章·第二幕「匪石」中的登场角色。",
    notesZhTW: "鍾離的傳說任務 古聞之章·第二幕「匪石」中的登場角色。",
  },
  {
    en: "Boyang",
    ja: "伯陽",
    zhCN: "伯阳",
    zhTW: "伯陽",
    pronunciationJa: "はくよう",
    tags: [ "liyue", "character-sub" ],
    notes: "夜蘭の先祖",
    notesZh: "夜兰的祖先。",
    notesZhTW: "夜蘭的祖先。",
  },
  {
    en: "Fujin",
    ja: "浮錦",
    zhCN: "浮锦",
    zhTW: "浮錦",
    pronunciationJa: "ふきん",
    tags: [ "liyue", "character-sub" ],
    notes: "世界任務「沈玉の祝福」などに登場する、名もなき魔神眷属の仙人",
    notesZh: "世界任务「沉玉祝珑」等中登场的仙人，无名魔神的眷属。",
    notesZhTW: "世界任務「沉玉祝瓏」等中登場的仙人，無名魔神的眷屬。",
  },
  {
    en: "Lingyuan",
    ja: "霊淵",
    zhCN: "灵渊",
    zhTW: "靈淵",
    pronunciationJa: "れいえん",
    tags: [ "liyue", "character-sub" ],
    notes: "名もなき魔神眷属の仙人",
    notesZh: "世界任务「沉玉祝珑」等中登场的仙人，无名魔神的仆从。",
    notesZhTW: "世界任務「沉玉祝瓏」等中登場的仙人，無名魔神的仆從。",
  },
  {
    en: "Herblord",
    ja: "薬君",
    zhCN: "药君",
    zhTW: "藥君",
    pronunciationJa: "やくくん",
    tags: [ "liyue", "character-sub" ],
    notes: "名もなき魔神眷属の仙人",
    notesZh: "世界任务「沉玉祝珑」等中登场的仙人，无名魔神的仆从。",
    notesZhTW: "世界任務「沉玉祝瓏」等中登場的仙人，無名魔神的仆從。",
  },
  {
    en: "Uncle Luo",
    ja: "羅おじ",
    zhCN: "罗叔",
    zhTW: "羅叔",
    pronunciationJa: "らおじ", // TODO Need check
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Little Mao",
    ja: "マオくん",
    zhCN: "小茂",
    zhTW: "小茂",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Shuyu",
    ja: "漱玉",
    zhCN: "漱玉",
    zhTW: "漱玉",
    pronunciationJa: "そうぎょく",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Yuandai",
    ja: "遠黛",
    zhCN: "远黛",
    zhTW: "遠黛",
    pronunciationJa: "えんたい",
    notes: "閑雲の伝説任務に登場する人物",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Man Chai",
    ja: "ウェンツァイ",
    zhCN: "文仔",
    zhTW: "文仔",
    pronunciationJa: "うぇんつぁい",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Houzhang",
    ja: "候章",
    zhCN: "侯章",
    zhTW: "侯章",
    pronunciationJa: "こうしょう",
    tags: [ "liyue", "character-sub" ],
    notes: "削月築陽真君の俗名",
    notesZh: "v4.4 活动「彩鹞栉春风」中，削月筑阳真君来到璃月港后起的名字。",
    notesZhTW: "v4.4 活動「彩鷂櫛春風」中，削月築陽真君來到璃月港後起的名字。",
  },
  {
    en: "Jiehu",
    ja: "接笏",
    zhCN: "接笏",
    zhTW: "接笏",
    pronunciationJa: "せっしゃく",
    tags: [ "liyue", "character-sub" ],
    notes: "理水畳山真君の俗名",
    notesZh: "v4.4 活动「彩鹞栉春风」中，理水叠山真君来到璃月港后起的名字。",
    notesZhTW: "v4.4 活動「彩鷂櫛春風」中，理水疊山真君來到璃月港後起的名字。",
  },
  {
    en: "Yip Tak",
    ja: "葉徳",
    zhCN: "叶德",
    zhTW: "葉德",
    pronunciationJa: "ようとく",
    tags: [ "liyue", "character-sub" ],
  },
  {
    en: "Hautemontagne",
    ja: "オートモンターニュ",
    zhCN: "沃特蒙泰涅",
    zhTW: "沃特蒙泰涅",
    tags: [ "liyue", "fontaine", "character-sub" ],
  },
  {
    en: "Tao Dou",
    ja: "桃都",
    zhCN: "桃都",
    zhTW: "桃都",
    pronunciationJa: "とうと",
    tags: [ "liyue", "character-sub" ],
    notesEn: "The god that once existed in Liyue.",
    notes: "璃月にかつて存在した魔神",
    notesZh: "曾经存在于璃月的魔神。",
    notesZhTW: "曾經存在於璃月的魔神。",
  },
  {
    en: "Bune",
    ja: "擘那",
    zhCN: "擘那",
    zhTW: "擘那",
    pronunciationJa: "はくな",  // TODO Need check
    tags: [ "liyue", "character-sub" ],
    notesEn: "The Goetic name of the god Tao Dou.",
    notes: "魔神桃都の本来の名",
    notesZh: "桃都的魔神名。",
    notesZhTW: "桃都的魔神名。",
  },
] as const satisfies SourceWord[];
