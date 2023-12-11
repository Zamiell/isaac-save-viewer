"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/isaacscript-common-ts/dist/constants.js
  var SECOND_IN_MILLISECONDS = 1e3;
  var MINUTE_IN_MILLISECONDS = 60 * SECOND_IN_MILLISECONDS;
  var HOUR_IN_MILLISECONDS = 60 * MINUTE_IN_MILLISECONDS;

  // node_modules/isaacscript-common-ts/dist/types/ReadonlySet.js
  var ReadonlySet = Set;

  // node_modules/isaacscript-common-ts/dist/functions/utils.js
  var INTEGER_REGEX = /^-?\d+$/;
  function parseIntSafe(string) {
    if (typeof string !== "string") {
      return void 0;
    }
    const trimmedString = string.trim();
    if (INTEGER_REGEX.exec(trimmedString) === null) {
      return void 0;
    }
    const number = Number.parseInt(trimmedString, 10);
    return Number.isNaN(number) ? void 0 : number;
  }

  // node_modules/isaacscript-common-ts/dist/types/ReadonlyMap.js
  var ReadonlyMap = Map;

  // src/data/achievements.json
  var achievements_exports = {};
  __export(achievements_exports, {
    "1": () => _,
    "10": () => _0,
    "100": () => _00,
    "101": () => _01,
    "102": () => _022,
    "103": () => _032,
    "104": () => _042,
    "105": () => _052,
    "106": () => _062,
    "107": () => _072,
    "108": () => _082,
    "109": () => _092,
    "11": () => _1,
    "110": () => _10,
    "111": () => _11,
    "112": () => _122,
    "113": () => _132,
    "114": () => _142,
    "115": () => _152,
    "116": () => _162,
    "117": () => _172,
    "118": () => _182,
    "119": () => _192,
    "12": () => _22,
    "120": () => _20,
    "121": () => _21,
    "122": () => _222,
    "123": () => _232,
    "124": () => _242,
    "125": () => _252,
    "126": () => _262,
    "127": () => _272,
    "128": () => _282,
    "129": () => _292,
    "13": () => _32,
    "130": () => _30,
    "131": () => _31,
    "132": () => _322,
    "133": () => _332,
    "134": () => _342,
    "135": () => _352,
    "136": () => _362,
    "137": () => _372,
    "138": () => _382,
    "139": () => _392,
    "14": () => _42,
    "140": () => _40,
    "141": () => _41,
    "142": () => _422,
    "143": () => _432,
    "144": () => _442,
    "145": () => _452,
    "146": () => _462,
    "147": () => _472,
    "148": () => _482,
    "149": () => _492,
    "15": () => _52,
    "150": () => _50,
    "151": () => _51,
    "152": () => _522,
    "153": () => _532,
    "154": () => _542,
    "155": () => _552,
    "156": () => _562,
    "157": () => _572,
    "158": () => _582,
    "159": () => _592,
    "16": () => _62,
    "160": () => _60,
    "161": () => _61,
    "162": () => _622,
    "163": () => _632,
    "164": () => _642,
    "165": () => _652,
    "166": () => _662,
    "167": () => _672,
    "168": () => _682,
    "169": () => _692,
    "17": () => _72,
    "170": () => _70,
    "171": () => _71,
    "172": () => _722,
    "173": () => _732,
    "174": () => _742,
    "175": () => _752,
    "176": () => _762,
    "177": () => _772,
    "178": () => _782,
    "179": () => _792,
    "18": () => _82,
    "180": () => _80,
    "181": () => _81,
    "182": () => _822,
    "183": () => _832,
    "184": () => _842,
    "185": () => _852,
    "186": () => _862,
    "187": () => _872,
    "188": () => _882,
    "189": () => _892,
    "19": () => _92,
    "190": () => _90,
    "191": () => _91,
    "192": () => _922,
    "193": () => _932,
    "194": () => _942,
    "195": () => _952,
    "196": () => _962,
    "197": () => _972,
    "198": () => _982,
    "199": () => _992,
    "2": () => _2,
    "20": () => _02,
    "200": () => _002,
    "201": () => _012,
    "202": () => _023,
    "203": () => _033,
    "204": () => _043,
    "205": () => _053,
    "206": () => _063,
    "207": () => _073,
    "208": () => _083,
    "209": () => _093,
    "21": () => _12,
    "210": () => _102,
    "211": () => _112,
    "212": () => _123,
    "213": () => _133,
    "214": () => _143,
    "215": () => _153,
    "216": () => _163,
    "217": () => _173,
    "218": () => _183,
    "219": () => _193,
    "22": () => _23,
    "220": () => _202,
    "221": () => _212,
    "222": () => _223,
    "223": () => _233,
    "224": () => _243,
    "225": () => _253,
    "226": () => _263,
    "227": () => _273,
    "228": () => _283,
    "229": () => _293,
    "23": () => _33,
    "230": () => _302,
    "231": () => _312,
    "232": () => _323,
    "233": () => _333,
    "234": () => _343,
    "235": () => _353,
    "236": () => _363,
    "237": () => _373,
    "238": () => _383,
    "239": () => _393,
    "24": () => _43,
    "240": () => _402,
    "241": () => _412,
    "242": () => _423,
    "243": () => _433,
    "244": () => _443,
    "245": () => _453,
    "246": () => _463,
    "247": () => _473,
    "248": () => _483,
    "249": () => _493,
    "25": () => _53,
    "250": () => _502,
    "251": () => _512,
    "252": () => _523,
    "253": () => _533,
    "254": () => _543,
    "255": () => _553,
    "256": () => _563,
    "257": () => _573,
    "258": () => _583,
    "259": () => _593,
    "26": () => _63,
    "260": () => _602,
    "261": () => _612,
    "262": () => _623,
    "263": () => _633,
    "264": () => _643,
    "265": () => _653,
    "266": () => _663,
    "267": () => _673,
    "268": () => _683,
    "269": () => _693,
    "27": () => _73,
    "270": () => _702,
    "271": () => _712,
    "272": () => _723,
    "273": () => _733,
    "274": () => _743,
    "275": () => _753,
    "276": () => _763,
    "277": () => _773,
    "278": () => _783,
    "279": () => _793,
    "28": () => _83,
    "280": () => _802,
    "281": () => _812,
    "282": () => _823,
    "283": () => _833,
    "284": () => _843,
    "285": () => _853,
    "286": () => _863,
    "287": () => _873,
    "288": () => _883,
    "289": () => _893,
    "29": () => _93,
    "290": () => _902,
    "291": () => _912,
    "292": () => _923,
    "293": () => _933,
    "294": () => _943,
    "295": () => _953,
    "296": () => _963,
    "297": () => _973,
    "298": () => _983,
    "299": () => _993,
    "3": () => _3,
    "30": () => _03,
    "300": () => _003,
    "301": () => _013,
    "302": () => _024,
    "303": () => _034,
    "304": () => _044,
    "305": () => _054,
    "306": () => _064,
    "307": () => _074,
    "308": () => _084,
    "309": () => _094,
    "31": () => _13,
    "310": () => _103,
    "311": () => _113,
    "312": () => _124,
    "313": () => _134,
    "314": () => _144,
    "315": () => _154,
    "316": () => _164,
    "317": () => _174,
    "318": () => _184,
    "319": () => _194,
    "32": () => _24,
    "320": () => _203,
    "321": () => _213,
    "322": () => _224,
    "323": () => _234,
    "324": () => _244,
    "325": () => _254,
    "326": () => _264,
    "327": () => _274,
    "328": () => _284,
    "329": () => _294,
    "33": () => _34,
    "330": () => _303,
    "331": () => _313,
    "332": () => _324,
    "333": () => _334,
    "334": () => _344,
    "335": () => _354,
    "336": () => _364,
    "337": () => _374,
    "338": () => _384,
    "339": () => _394,
    "34": () => _44,
    "340": () => _403,
    "341": () => _413,
    "342": () => _424,
    "343": () => _434,
    "344": () => _444,
    "345": () => _454,
    "346": () => _464,
    "347": () => _474,
    "348": () => _484,
    "349": () => _494,
    "35": () => _54,
    "350": () => _503,
    "351": () => _513,
    "352": () => _524,
    "353": () => _534,
    "354": () => _544,
    "355": () => _554,
    "356": () => _564,
    "357": () => _574,
    "358": () => _584,
    "359": () => _594,
    "36": () => _64,
    "360": () => _603,
    "361": () => _613,
    "362": () => _624,
    "363": () => _634,
    "364": () => _644,
    "365": () => _654,
    "366": () => _664,
    "367": () => _674,
    "368": () => _684,
    "369": () => _694,
    "37": () => _74,
    "370": () => _703,
    "371": () => _713,
    "372": () => _724,
    "373": () => _734,
    "374": () => _744,
    "375": () => _754,
    "376": () => _764,
    "377": () => _774,
    "378": () => _784,
    "379": () => _794,
    "38": () => _84,
    "380": () => _803,
    "381": () => _813,
    "382": () => _824,
    "383": () => _834,
    "384": () => _844,
    "385": () => _854,
    "386": () => _864,
    "387": () => _874,
    "388": () => _884,
    "389": () => _894,
    "39": () => _94,
    "390": () => _903,
    "391": () => _913,
    "392": () => _924,
    "393": () => _934,
    "394": () => _944,
    "395": () => _954,
    "396": () => _964,
    "397": () => _974,
    "398": () => _984,
    "399": () => _994,
    "4": () => _4,
    "40": () => _04,
    "400": () => _004,
    "401": () => _014,
    "402": () => _025,
    "403": () => _035,
    "404": () => _045,
    "405": () => _055,
    "406": () => _065,
    "407": () => _075,
    "408": () => _085,
    "409": () => _095,
    "41": () => _14,
    "410": () => _104,
    "411": () => _114,
    "412": () => _125,
    "413": () => _135,
    "414": () => _145,
    "415": () => _155,
    "416": () => _165,
    "417": () => _175,
    "418": () => _185,
    "419": () => _195,
    "42": () => _25,
    "420": () => _204,
    "421": () => _214,
    "422": () => _225,
    "423": () => _235,
    "424": () => _245,
    "425": () => _255,
    "426": () => _265,
    "427": () => _275,
    "428": () => _285,
    "429": () => _295,
    "43": () => _35,
    "430": () => _304,
    "431": () => _314,
    "432": () => _325,
    "433": () => _335,
    "434": () => _345,
    "435": () => _355,
    "436": () => _365,
    "437": () => _375,
    "438": () => _385,
    "439": () => _395,
    "44": () => _45,
    "440": () => _404,
    "441": () => _414,
    "442": () => _425,
    "443": () => _435,
    "444": () => _445,
    "445": () => _455,
    "446": () => _465,
    "447": () => _475,
    "448": () => _485,
    "449": () => _495,
    "45": () => _55,
    "450": () => _504,
    "451": () => _514,
    "452": () => _525,
    "453": () => _535,
    "454": () => _545,
    "455": () => _555,
    "456": () => _565,
    "457": () => _575,
    "458": () => _585,
    "459": () => _595,
    "46": () => _65,
    "460": () => _604,
    "461": () => _614,
    "462": () => _625,
    "463": () => _635,
    "464": () => _645,
    "465": () => _655,
    "466": () => _665,
    "467": () => _675,
    "468": () => _685,
    "469": () => _695,
    "47": () => _75,
    "470": () => _704,
    "471": () => _714,
    "472": () => _725,
    "473": () => _735,
    "474": () => _745,
    "475": () => _755,
    "476": () => _765,
    "477": () => _775,
    "478": () => _785,
    "479": () => _795,
    "48": () => _85,
    "480": () => _804,
    "481": () => _814,
    "482": () => _825,
    "483": () => _835,
    "484": () => _845,
    "485": () => _855,
    "486": () => _865,
    "487": () => _875,
    "488": () => _885,
    "489": () => _895,
    "49": () => _95,
    "490": () => _904,
    "491": () => _914,
    "492": () => _925,
    "493": () => _935,
    "494": () => _945,
    "495": () => _955,
    "496": () => _965,
    "497": () => _975,
    "498": () => _985,
    "499": () => _995,
    "5": () => _5,
    "50": () => _05,
    "500": () => _005,
    "501": () => _015,
    "502": () => _026,
    "503": () => _036,
    "504": () => _046,
    "505": () => _056,
    "506": () => _066,
    "507": () => _076,
    "508": () => _086,
    "509": () => _096,
    "51": () => _15,
    "510": () => _105,
    "511": () => _115,
    "512": () => _126,
    "513": () => _136,
    "514": () => _146,
    "515": () => _156,
    "516": () => _166,
    "517": () => _176,
    "518": () => _186,
    "519": () => _196,
    "52": () => _26,
    "520": () => _205,
    "521": () => _215,
    "522": () => _226,
    "523": () => _236,
    "524": () => _246,
    "525": () => _256,
    "526": () => _266,
    "527": () => _276,
    "528": () => _286,
    "529": () => _296,
    "53": () => _36,
    "530": () => _305,
    "531": () => _315,
    "532": () => _326,
    "533": () => _336,
    "534": () => _346,
    "535": () => _356,
    "536": () => _366,
    "537": () => _376,
    "538": () => _386,
    "539": () => _396,
    "54": () => _46,
    "540": () => _405,
    "541": () => _415,
    "542": () => _426,
    "543": () => _436,
    "544": () => _446,
    "545": () => _456,
    "546": () => _466,
    "547": () => _476,
    "548": () => _486,
    "549": () => _496,
    "55": () => _56,
    "550": () => _505,
    "551": () => _515,
    "552": () => _526,
    "553": () => _536,
    "554": () => _546,
    "555": () => _556,
    "556": () => _566,
    "557": () => _576,
    "558": () => _586,
    "559": () => _596,
    "56": () => _66,
    "560": () => _605,
    "561": () => _615,
    "562": () => _626,
    "563": () => _636,
    "564": () => _646,
    "565": () => _656,
    "566": () => _666,
    "567": () => _676,
    "568": () => _686,
    "569": () => _696,
    "57": () => _76,
    "570": () => _705,
    "571": () => _715,
    "572": () => _726,
    "573": () => _736,
    "574": () => _746,
    "575": () => _756,
    "576": () => _766,
    "577": () => _776,
    "578": () => _786,
    "579": () => _796,
    "58": () => _86,
    "580": () => _805,
    "581": () => _815,
    "582": () => _826,
    "583": () => _836,
    "584": () => _846,
    "585": () => _856,
    "586": () => _866,
    "587": () => _876,
    "588": () => _886,
    "589": () => _896,
    "59": () => _96,
    "590": () => _905,
    "591": () => _915,
    "592": () => _926,
    "593": () => _936,
    "594": () => _946,
    "595": () => _956,
    "596": () => _966,
    "597": () => _976,
    "598": () => _986,
    "599": () => _996,
    "6": () => _6,
    "60": () => _06,
    "600": () => _006,
    "601": () => _016,
    "602": () => _027,
    "603": () => _037,
    "604": () => _047,
    "605": () => _057,
    "606": () => _067,
    "607": () => _077,
    "608": () => _087,
    "609": () => _097,
    "61": () => _16,
    "610": () => _106,
    "611": () => _116,
    "612": () => _127,
    "613": () => _137,
    "614": () => _147,
    "615": () => _157,
    "616": () => _167,
    "617": () => _177,
    "618": () => _187,
    "619": () => _197,
    "62": () => _27,
    "620": () => _206,
    "621": () => _216,
    "622": () => _227,
    "623": () => _237,
    "624": () => _247,
    "625": () => _257,
    "626": () => _267,
    "627": () => _277,
    "628": () => _287,
    "629": () => _297,
    "63": () => _37,
    "630": () => _306,
    "631": () => _316,
    "632": () => _327,
    "633": () => _337,
    "634": () => _347,
    "635": () => _357,
    "636": () => _367,
    "637": () => _377,
    "64": () => _47,
    "65": () => _57,
    "66": () => _67,
    "67": () => _77,
    "68": () => _87,
    "69": () => _97,
    "7": () => _7,
    "70": () => _07,
    "71": () => _17,
    "72": () => _28,
    "73": () => _38,
    "74": () => _48,
    "75": () => _58,
    "76": () => _68,
    "77": () => _78,
    "78": () => _88,
    "79": () => _98,
    "8": () => _8,
    "80": () => _08,
    "81": () => _18,
    "82": () => _29,
    "83": () => _39,
    "84": () => _49,
    "85": () => _59,
    "86": () => _69,
    "87": () => _79,
    "88": () => _89,
    "89": () => _99,
    "9": () => _9,
    "90": () => _09,
    "91": () => _19,
    "92": () => _210,
    "93": () => _310,
    "94": () => _410,
    "95": () => _510,
    "96": () => _610,
    "97": () => _710,
    "98": () => _810,
    "99": () => _910,
    NEW_ACHIEVEMENT: () => NEW_ACHIEVEMENT,
    default: () => achievements_default
  });
  var NEW_ACHIEVEMENT = {
    link: "",
    name: "Unknown Achievement",
    inGameDescription: "",
    unlockDescription: "Tracker doesn't know this achievement yet"
  };
  var _ = {
    link: "Magdalene",
    name: "Magdalene",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "Have 7 or more Red Heart Containers at one time"
  };
  var _2 = {
    link: "Cain",
    name: "Cain",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "Hold 55 Coins at one time"
  };
  var _3 = {
    link: "Judas",
    name: "Judas",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "Defeat Satan"
  };
  var _4 = {
    link: "Womb",
    name: "The Womb",
    inGameDescription: "Chapter 4 - The Womb unlocked.",
    unlockDescription: "Defeat Mom"
  };
  var _5 = {
    link: "The_Harbingers",
    name: "The Harbingers",
    inGameDescription: "The horsemen are loose.",
    unlockDescription: "Defeat Mom"
  };
  var _6 = {
    link: "Cube_of_Meat",
    name: "A Cube of Meat",
    inGameDescription: "Unlocked a new item. (Also unlocks the Ball of Bandages)",
    unlockDescription: "Defeat Mom"
  };
  var _7 = {
    link: "Book_of_Revelations",
    name: "The Book of Revelations",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat a Harbinger"
  };
  var _8 = {
    link: "Transcendence",
    name: "A Noose",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Mom's Heart 3 times"
  };
  var _9 = {
    link: "The_Nail",
    name: "The Nail",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as Azazel"
  };
  var _0 = {
    link: "A_Quarter",
    name: "A Quarter",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Mom's Heart 8 times"
  };
  var _1 = {
    link: "Dr._Fetus",
    name: "A Fetus in a Jar",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Mom's Heart 9 times"
  };
  var _22 = {
    link: "The_Small_Rock",
    name: "A Small Rock",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Destroy 100 Tinted Rocks"
  };
  var _32 = {
    link: "Monstro%27s_Tooth",
    name: "Monstro's Tooth",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Beat Chapter 1"
  };
  var _42 = {
    link: "Little_Chubby",
    name: "Lil' Chubby",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Beat Chapter 2"
  };
  var _52 = {
    link: "Loki%27s_Horns",
    name: "Loki's Horns",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Lokii"
  };
  var _62 = {
    link: "Steven",
    name: "Something From The Future",
    inGameDescription: "New boss in the basement!",
    unlockDescription: "Beat Basement 40 times"
  };
  var _72 = {
    link: "C.H.A.D.",
    name: "Something Cute",
    inGameDescription: "New boss in the caves!",
    unlockDescription: "Beat Chapter 2 30 times"
  };
  var _82 = {
    link: "Gish",
    name: "Something Sticky",
    inGameDescription: "New boss in the depths!",
    unlockDescription: "Beat Chapter 3 20 times"
  };
  var _92 = {
    link: "Super_Bandage",
    name: "A Bandage",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Make a Super Bandage Girl by picking up 4 copies of Ball of Bandages in one run; see Unlocking Super Meat Boy &amp; Super Bandage Girl"
  };
  var _02 = {
    link: "The_Relic",
    name: "A Cross",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac as Magdalene"
  };
  var _12 = {
    link: "Sack_of_Pennies",
    name: "A Bag of Pennies",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac as Cain"
  };
  var _23 = {
    link: "The_Book_of_Sin",
    name: "The Book of Sin",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat all 7 Deadly Sins"
  };
  var _33 = {
    link: "Little_Gish",
    name: "Little Gish",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Gish"
  };
  var _43 = {
    link: "Little_Steven",
    name: "Little Steven",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Steven"
  };
  var _53 = {
    link: "Little_C.H.A.D.",
    name: "Little C.H.A.D.",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat C.H.A.D."
  };
  var _63 = {
    link: "The_Gamekid",
    name: "A Gamekid",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Visit 10 Arcades"
  };
  var _73 = {
    link: "The_Halo",
    name: "A Halo",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Mom, Mom's Heart, or It Lives! using The Bible"
  };
  var _83 = {
    link: "Mr._Mega",
    name: "Mr. Mega",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Destroy 10 Tinted Rocks"
  };
  var _93 = {
    link: "The_D6",
    name: "The D6",
    inGameDescription: "Isaac now holds the D6!",
    unlockDescription: "Defeat Isaac as ???"
  };
  var _03 = {
    link: "Scissors",
    name: "The Scissors",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Die 100 times"
  };
  var _13 = {
    link: "The_Parasite",
    name: "The Parasite",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: `Pick up any 2 of the following items in a single run: Bob's Rotten Head, Dead Cat, Cricket's Head, and Tammy's Head (any 2 items that have the "dead" item tag)`
  };
  var _24 = {
    link: "%3F%3F%3F_(Character)",
    name: "???",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "Defeat Mom's Heart 10 times"
  };
  var _34 = {
    link: "",
    name: "Everything Is Terrible!!!",
    inGameDescription: "The game just got harder!",
    unlockDescription: "Defeat Mom's Heart 5 times"
  };
  var _44 = {
    link: "It_Lives",
    name: "It Lives!",
    inGameDescription: "Your future's past waits.",
    unlockDescription: "Defeat Mom's Heart 11 times"
  };
  var _54 = {
    link: "Mom%27s_Contacts",
    name: "Mom's Contact",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Obtain three Yes Mother? items in one run"
  };
  var _64 = {
    link: "The_Necronomicon",
    name: "The Necronomicon",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Use XIII - Death 4 times"
  };
  var _74 = {
    link: "",
    name: "Basement Boy",
    inGameDescription: "Beat basement without taking damage.",
    unlockDescription: "Beat Chapter 1 without taking damage"
  };
  var _84 = {
    link: "",
    name: "Spelunker Boy",
    inGameDescription: "Beat caves without taking damage.",
    unlockDescription: "Beat Chapter 2 without taking damage"
  };
  var _94 = {
    link: "",
    name: "Dark Boy",
    inGameDescription: "Beat depths without taking damage.",
    unlockDescription: "Beat Chapter 3 without taking damage"
  };
  var _04 = {
    link: "",
    name: "Mama's Boy",
    inGameDescription: "Beat womb without taking damage.",
    unlockDescription: "Beat Chapter 4 without taking damage"
  };
  var _14 = {
    link: "",
    name: "Golden God!",
    inGameDescription: "You are the best!!",
    unlockDescription: "Defeat ??? and The Lamb"
  };
  var _25 = {
    link: "Eve",
    name: "Eve",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "Don't pick up any Hearts for 2 floors in a row"
  };
  var _35 = {
    link: "Mom%27s_Knife",
    name: "Mom's Knife",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as Isaac"
  };
  var _45 = {
    link: "Razor_Blade",
    name: "The Razor",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as Eve"
  };
  var _55 = {
    link: "Guardian_Angel",
    name: "Guardian Angel",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as Magdalene"
  };
  var _65 = {
    link: "Bomb_Bag",
    name: "A Bag of Bombs",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as Cain"
  };
  var _75 = {
    link: "Demon_Baby",
    name: "Demon Baby",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as Azazel"
  };
  var _85 = {
    link: "Forget_Me_Now",
    name: "Forget Me Now",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as ???"
  };
  var _95 = {
    link: "D20",
    name: "The D20",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat ??? as Isaac"
  };
  var _05 = {
    link: "Celtic_Cross",
    name: "Celtic Cross",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat ??? as Magdalene"
  };
  var _15 = {
    link: "Abel",
    name: "Abel",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as Cain"
  };
  var _26 = {
    link: "Curved_Horn",
    name: "Curved Horn",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as Judas"
  };
  var _36 = {
    link: "Sacrificial_Dagger",
    name: "Sacrificial Dagger",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat ??? as Eve"
  };
  var _46 = {
    link: "Bloody_Lust",
    name: "Bloody Lust",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac as Samson"
  };
  var _56 = {
    link: "Bloody_Penny",
    name: "Blood Penny",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat ??? as Samson"
  };
  var _66 = {
    link: "Blood_Rights",
    name: "Blood Rights",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as Samson"
  };
  var _76 = {
    link: "The_Polaroid",
    name: "The Polaroid",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac 5 times"
  };
  var _86 = {
    link: "Dad%27s_Key",
    name: "Dad's Key",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Pick up both Key Pieces from the Angels in one run"
  };
  var _96 = {
    link: "The_Candle",
    name: "Blue Candle",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Donate 900 coins to the Donation Machine"
  };
  var _06 = {
    link: "Burnt_Penny",
    name: "Burnt Penny",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Beans! (challenge #13)"
  };
  var _16 = {
    link: "Lucky_Toe",
    name: "Lucky Toe",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Blow up 20 Shopkeepers"
  };
  var _27 = {
    link: "Epic_Fetus",
    name: "Epic Fetus",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete The Family Man (challenge #19)"
  };
  var _37 = {
    link: "SMB_Super_Fan",
    name: "SMB Super Fan",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete It's in the Cards (challenge #14)"
  };
  var _47 = {
    link: "Counterfeit_Penny",
    name: "Counterfeit Coin",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Play either Shell Game or Hell Game 100 times"
  };
  var _57 = {
    link: "Guppy%27s_Hair_Ball",
    name: "Guppy's Hairball",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Become Guppy"
  };
  var _67 = {
    link: "Conquest",
    name: "A Forgotten Horseman",
    inGameDescription: "Unlocked a new boss!",
    unlockDescription: "Take 10 Angel Room items"
  };
  var _77 = {
    link: "Samson",
    name: "Samson",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "Complete 2 floors in a row without taking damage"
  };
  var _87 = {
    link: "Triachnid",
    name: "Something Icky",
    inGameDescription: "New boss in the womb!",
    unlockDescription: "Defeat Isaac 10 times"
  };
  var _97 = {
    link: "",
    name: "Platinum God!",
    inGameDescription: "OMG!",
    unlockDescription: "Collect all non-DLC items in the game, and unlock all of the secrets and endings (minus The Lost and his 6 unlockable items)"
  };
  var _07 = {
    link: "Isaac%27s_Head",
    name: "Isaac's Head",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as Isaac"
  };
  var _17 = {
    link: "Maggy%27s_Faith",
    name: "Maggy's Faith",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as Magdalene"
  };
  var _28 = {
    link: "Judas%27_Tongue",
    name: "Judas' Tongue",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as Judas"
  };
  var _38 = {
    link: "%3F%3F%3F%27s_Soul",
    name: "???'s Soul",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as ???"
  };
  var _48 = {
    link: "Samson%27s_Lock",
    name: "Samson's Lock",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as Samson"
  };
  var _58 = {
    link: "Cain%27s_Eye",
    name: "Cain's Eye",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat ??? as Cain"
  };
  var _68 = {
    link: "Eve%27s_Bird_Foot",
    name: "Eve's Bird Foot",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac as Eve"
  };
  var _78 = {
    link: "The_Left_Hand",
    name: "The Left Hand",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Pride as any character, or ??? as Judas"
  };
  var _88 = {
    link: "The_Negative",
    name: "The Negative",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan 5 times"
  };
  var _98 = {
    link: "Azazel",
    name: "Azazel",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "Make 3 Deals with the Devil in one run"
  };
  var _08 = {
    link: "Lazarus",
    name: "Lazarus",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "Have 4 or more Soul Hearts at one time"
  };
  var _18 = {
    link: "Eden",
    name: "Eden",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "Complete Chapter 4"
  };
  var _29 = {
    link: "The_Lost",
    name: "The Lost",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "It's complicated Die in a Sacrifice Room while holding Missing Poster"
  };
  var _39 = {
    link: "",
    name: "Dead Boy",
    inGameDescription: "Beat Chest or Dark Room without taking damage.",
    unlockDescription: "Complete Chapter 6 without taking damage"
  };
  var _49 = {
    link: "",
    name: "The Real Platinum God",
    inGameDescription: "111% now stop playing!",
    unlockDescription: "Collect every non-DLC item, and unlock every secret and ending."
  };
  var _59 = {
    link: "Lucky_Rock",
    name: "Lucky Rock",
    inGameDescription: "Destroy 100 rocks.",
    unlockDescription: "Destroy 100 rocks"
  };
  var _69 = {
    link: "The_Cellar",
    name: "The Cellar",
    inGameDescription: "Alt stage to the basement.",
    unlockDescription: "Beat all Basement bosses ( except Baby Plum) (not restricted to beating bosses in The Basement)"
  };
  var _79 = {
    link: "The_Catacombs",
    name: "The Catacombs",
    inGameDescription: "Alt stage to the caves.",
    unlockDescription: "Beat all Caves bosses ( except Bumbino) (not restricted to beating bosses in The Caves)"
  };
  var _89 = {
    link: "Necropolis",
    name: "The Necropolis",
    inGameDescription: "Alt stage to the depths.",
    unlockDescription: "Beat all Depths bosses ( except Reap Creep) (not restricted to beating bosses in The Depths)"
  };
  var _99 = {
    link: "Runes",
    name: "Rune of Hagalaz",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Pitch Black (challenge #1)"
  };
  var _09 = {
    link: "Runes",
    name: "Rune of Jera",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete High Brow (challenge #2)"
  };
  var _19 = {
    link: "Runes",
    name: "Rune of Ehwaz",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Head Trauma (challenge #3)"
  };
  var _210 = {
    link: "Runes",
    name: "Rune of Dagaz",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Darkness Falls (challenge #4)"
  };
  var _310 = {
    link: "Runes",
    name: "Rune of Ansuz",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete The Tank (challenge #5)"
  };
  var _410 = {
    link: "Runes",
    name: "Rune of Perthro",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Solar System (challenge #6)"
  };
  var _510 = {
    link: "Runes",
    name: "Rune of Berkano",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Purist (challenge #20)"
  };
  var _610 = {
    link: "Runes",
    name: "Rune of Algiz",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Cat Got Your Tongue (challenge #8)"
  };
  var _710 = {
    link: "Chaos_Card",
    name: "Chaos Card",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Demo Man (challenge #9)"
  };
  var _810 = {
    link: "Credit_Card",
    name: "Credit Card",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Cursed! (challenge #10)"
  };
  var _910 = {
    link: "Rules_Card",
    name: "Rules Card",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Glass Cannon (challenge #11)"
  };
  var _00 = {
    link: "A_Card_Against_Humanity",
    name: "Card Against Humanity",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete When Life Gives You Lemons (challenge #12)"
  };
  var _01 = {
    link: "Swallowed_Penny",
    name: "Swallowed Penny",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Slow Roll (challenge #15)"
  };
  var _022 = {
    link: "Robo-Baby_2.0",
    name: "Robo-Baby 2.0",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Computer Savvy (challenge #16)"
  };
  var _032 = {
    link: "Death%27s_Touch",
    name: "Death's Touch",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Waka Waka (challenge #17)"
  };
  var _042 = {
    link: "Tech.5",
    name: "Technology .5",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete The Host (challenge #18)"
  };
  var _052 = {
    link: "Missing_No.",
    name: "Missing No.",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as Lazarus"
  };
  var _062 = {
    link: "Isaac%27s_Tears",
    name: "Isaac's Tears",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac as Isaac"
  };
  var _072 = {
    link: "Guillotine",
    name: "Guillotine",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac as Judas"
  };
  var _082 = {
    link: "Judas%27_Shadow",
    name: "Judas' Shadow",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as Judas"
  };
  var _092 = {
    link: "Maggy%27s_Bow",
    name: "Maggy's Bow",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as Magdalene"
  };
  var _10 = {
    link: "Cain%27s_Other_Eye",
    name: "Cain's Other Eye",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as Cain"
  };
  var _11 = {
    link: "Black_Lipstick",
    name: "Black Lipstick",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as Eve"
  };
  var _122 = {
    link: "Eve%27s_Mascara",
    name: "Eve's Mascara",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as Eve"
  };
  var _132 = {
    link: "Fate",
    name: "Fate",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat ??? as ???"
  };
  var _142 = {
    link: "%3F%3F%3F%27s_Only_Friend",
    name: "???'s Only Friend",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as ???"
  };
  var _152 = {
    link: "Samson%27s_Chains",
    name: "Samson's Chains",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as Samson"
  };
  var _162 = {
    link: "Lazarus%27_Rags",
    name: "Lazarus' Rags",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac as Lazarus"
  };
  var _172 = {
    link: "Broken_Ankh",
    name: "Broken Ankh",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as Lazarus"
  };
  var _182 = {
    link: "Store_Credit",
    name: "Store Credit",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat ??? as Lazarus"
  };
  var _192 = {
    link: "Pandora%27s_Box",
    name: "Pandora's Box",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as Lazarus"
  };
  var _20 = {
    link: "Suicide_King",
    name: "Suicide King",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Suicide King (challenge #7)"
  };
  var _21 = {
    link: "Blank_Card",
    name: "Blank Card",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac as Eden"
  };
  var _222 = {
    link: "Book_of_Secrets",
    name: "Book of Secrets",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as Eden"
  };
  var _232 = {
    link: "Mysterious_Paper",
    name: "Mysterious Paper",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Beat ??? as Eden"
  };
  var _242 = {
    link: "Mystery_Sack",
    name: "Mystery Sack",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as Eden"
  };
  var _252 = {
    link: "Undefined",
    name: "Undefined",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as Eden"
  };
  var _262 = {
    link: "Satanic_Bible",
    name: "Satanic Bible",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac as Azazel"
  };
  var _272 = {
    link: "Daemon%27s_Tail",
    name: "Daemon's Tail",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as Azazel"
  };
  var _282 = {
    link: "Abaddon",
    name: "Abaddon",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat ??? as Azazel"
  };
  var _292 = {
    link: "Isaac%27s_Heart",
    name: "Isaac's Heart",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac as The Lost"
  };
  var _30 = {
    link: "The_Mind",
    name: "The Mind",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as The Lost"
  };
  var _31 = {
    link: "The_Body",
    name: "The Body",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat ??? as The Lost"
  };
  var _322 = {
    link: "The_Soul",
    name: "The Soul",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as The Lost"
  };
  var _332 = {
    link: "D100",
    name: "The D100",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as The Lost"
  };
  var _342 = {
    link: "Blue_Map",
    name: "Blue Map",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Donate 10 Coins to the Donation Machine"
  };
  var _352 = {
    link: "There%27s_Options",
    name: "There's Options",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Donate 50 Coins to the Donation Machine"
  };
  var _362 = {
    link: "Black_Candle",
    name: "Black Candle",
    inGameDescription: "Unlocked a new item",
    unlockDescription: "Donate 150 Coins to the Donation Machine"
  };
  var _372 = {
    link: "Red_Candle",
    name: "Red Candle",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Donate 400 Coins to the Donation Machine"
  };
  var _382 = {
    link: "Stop_Watch",
    name: "Stop Watch",
    inGameDescription: "Unlocked a new item",
    unlockDescription: "Donate 999 Coins to the Donation Machine"
  };
  var _392 = {
    link: "Wire_Coat_Hanger",
    name: "Wire Coat Hanger",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Mom's Heart 4 times"
  };
  var _40 = {
    link: "Ipecac",
    name: "Ipecac",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Mom's Heart 6 times"
  };
  var _41 = {
    link: "Experimental_Treatment",
    name: "Experimental Treatment",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Mom's Heart 7 times"
  };
  var _422 = {
    link: "Krampus",
    name: "Krampus",
    inGameDescription: "Unlocked another miniboss!",
    unlockDescription: "Take 20 items from Devil Rooms"
  };
  var _432 = {
    link: "Head_of_Krampus",
    name: "Head of Krampus",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Krampus"
  };
  var _442 = {
    link: "Cube_of_Meat",
    name: "Super Meat Boy",
    inGameDescription: "Built him out of meat cubes.",
    unlockDescription: "Make a Super Meat Boy by picking up 4 copies of Cube of Meat in one run; see Unlocking Super Meat Boy &amp; Super Bandage Girl"
  };
  var _452 = {
    link: "Butter_Bean",
    name: "Butter Bean",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Destroy 100 Poops"
  };
  var _462 = {
    link: "Little_Baggy",
    name: "Little Baggy",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: 'Pick up any 2 of the following items in a single run: Roid Rage, The Virus, Growth Hormones, Experimental Treatment, and Speed Ball (any 2 items that have the "syringe" item tag)'
  };
  var _472 = {
    link: "Blood_Bag",
    name: "Blood Bag",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Use the Blood Donation Machine 30 times"
  };
  var _482 = {
    link: "D4",
    name: "The D4",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Blow up 30 Slot Machine"
  };
  var _492 = {
    link: "Missing_Poster",
    name: "Missing Poster",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as Isaac"
  };
  var _50 = {
    link: "Rubber_Cement",
    name: "Rubber Cement",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Mom's Heart 2 times"
  };
  var _51 = {
    link: "Shop#Levels",
    name: "Store Upgrade lv.1",
    inGameDescription: "Donated 20 pennies to the shop.",
    unlockDescription: "Donate 20 Coins to the Donation Machine"
  };
  var _522 = {
    link: "Shop#Levels",
    name: "Store Upgrade lv.2",
    inGameDescription: "Donated 100 pennies to the shop.",
    unlockDescription: "Donate 100 Coins to the Donation Machine"
  };
  var _532 = {
    link: "Shop#Levels",
    name: "Store Upgrade lv.3",
    inGameDescription: "Donated 200 pennies to the shop.",
    unlockDescription: "Donate 200 Coins to the Donation Machine"
  };
  var _542 = {
    link: "Shop#Levels",
    name: "Store Upgrade lv.4",
    inGameDescription: "Donated 600 pennies to the shop.",
    unlockDescription: "Donate 600 Coins to the Donation Machine"
  };
  var _552 = {
    link: "Angel",
    name: "Angels",
    inGameDescription: "They are waiting.",
    unlockDescription: "Complete Chapter 6"
  };
  var _562 = {
    link: "Godhead",
    name: "Godhead",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Earn all 12 Completion Marks on Hard mode as The Lost"
  };
  var _572 = {
    link: "Darkness_Falls",
    name: "Darkness Falls",
    inGameDescription: "Unlocked Challenge #4.",
    unlockDescription: "Defeat Mom's Heart 11 times Defeat Satan and ??? as Eve"
  };
  var _582 = {
    link: "The_Tank",
    name: "The Tank",
    inGameDescription: "Unlocked Challenge #5.",
    unlockDescription: "Have 7 or more Red Heart Containers at one time"
  };
  var _592 = {
    link: "Solar_System",
    name: "Solar System",
    inGameDescription: "Unlocked Challenge #6.",
    unlockDescription: "Defeat Mom's Heart 3 times"
  };
  var _60 = {
    link: "Suicide_King_(Challenge)",
    name: "Suicide King",
    inGameDescription: "Unlocked Challenge #7.",
    unlockDescription: "Defeat Mom's Heart 11 times"
  };
  var _61 = {
    link: "Cat_Got_Your_Tongue",
    name: "Cat Got Your Tongue",
    inGameDescription: "Unlocked Challenge #8.",
    unlockDescription: "Become Guppy"
  };
  var _622 = {
    link: "Demo_Man",
    name: "Demo Man",
    inGameDescription: "Unlocked Challenge #9.",
    unlockDescription: "Defeat Mom's Heart 9 times"
  };
  var _632 = {
    link: "Cursed!",
    name: "Cursed!",
    inGameDescription: "Unlocked Challenge #10.",
    unlockDescription: "Have 7 or more Red Heart Containers at one time"
  };
  var _642 = {
    link: "Glass_Cannon_(Challenge)",
    name: "Glass Cannon",
    inGameDescription: "Unlocked Challenge #11.",
    unlockDescription: "Beat The Family Man (challenge #19) and defeat Lokii"
  };
  var _652 = {
    link: "The_Family_Man",
    name: "The Family Man",
    inGameDescription: "Unlocked Challenge #19.",
    unlockDescription: "Pick up both Key Pieces from the Angels in one run"
  };
  var _662 = {
    link: "Purist",
    name: "Purist",
    inGameDescription: "Unlocked Challenge #20.",
    unlockDescription: "Defeat Mom"
  };
  var _672 = {
    link: "Babies",
    name: "Lost Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mom's Heart on Hard mode as Isaac"
  };
  var _682 = {
    link: "Babies",
    name: "Cute Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mom's Heart on Hard mode as Magdalene"
  };
  var _692 = {
    link: "Babies",
    name: "Crow Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mom's Heart on Hard mode as Eve"
  };
  var _70 = {
    link: "Babies",
    name: "Shadow Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mom's Heart on Hard mode as Judas"
  };
  var _71 = {
    link: "Babies",
    name: "Glass Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mom's Heart on Hard mode as Cain"
  };
  var _722 = {
    link: "Babies",
    name: "Wrapped Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mom's Heart on Hard mode as Azazel Defeat Mom's Heart on Hard mode as Lazarus"
  };
  var _732 = {
    link: "Babies",
    name: "Begotten Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mom's Heart on Hard mode as Lazarus Defeat Mom's Heart on Hard mode as Azazel"
  };
  var _742 = {
    link: "Babies",
    name: "Dead Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mom's Heart on Hard mode as ???"
  };
  var _752 = {
    link: "Babies",
    name: "-0- Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mom's Heart on Hard mode as The Lost"
  };
  var _762 = {
    link: "Babies",
    name: "Glitch Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mom's Heart on Hard mode as Eden"
  };
  var _772 = {
    link: "Babies",
    name: "Fighting Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mom's Heart on Hard mode as Samson"
  };
  var _782 = {
    link: "Beelzebub",
    name: "Lord of the Flies",
    inGameDescription: "You became Lord of the Flies.",
    unlockDescription: "Become Beelzebub"
  };
  var _792 = {
    link: "",
    name: "Fart Baby",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as Isaac"
  };
  var _80 = {
    link: "",
    name: "Purity",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as Magdalene"
  };
  var _81 = {
    link: "",
    name: "D12",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as Cain"
  };
  var _822 = {
    link: "",
    name: "Betrayal",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as Judas"
  };
  var _832 = {
    link: "",
    name: "Fate's Reward",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as ???"
  };
  var _842 = {
    link: "",
    name: "Athame",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as Eve"
  };
  var _852 = {
    link: "",
    name: "Blind Rage",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as Samson"
  };
  var _862 = {
    link: "",
    name: "Maw of the Void",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as Azazel"
  };
  var _872 = {
    link: "",
    name: "Empty Vessel",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as Lazarus"
  };
  var _882 = {
    link: "",
    name: "Eden's Blessing",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as Eden"
  };
  var _892 = {
    link: "",
    name: "Sworn Protector",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as The Lost"
  };
  var _90 = {
    link: "",
    name: "Incubus",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as Lilith"
  };
  var _91 = {
    link: "",
    name: "Keeper now holds... A Penny!",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as Keeper"
  };
  var _922 = {
    link: "",
    name: "Lil' Chest",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as Isaac"
  };
  var _932 = {
    link: "",
    name: "Censer",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as Magdalene"
  };
  var _942 = {
    link: "",
    name: "Evil Eye",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as Cain"
  };
  var _952 = {
    link: "",
    name: "My Shadow",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as Judas"
  };
  var _962 = {
    link: "",
    name: "Cracked Dice",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as ???"
  };
  var _972 = {
    link: "",
    name: "Black Feather",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as Eve"
  };
  var _982 = {
    link: "",
    name: "Lusty Blood",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as Samson"
  };
  var _992 = {
    link: "",
    name: "Lilith",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "Defeat Ultra Greed as Azazel"
  };
  var _002 = {
    link: "",
    name: "Key Bum",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as Lazarus"
  };
  var _012 = {
    link: "",
    name: "GB Bug",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as Eden"
  };
  var _023 = {
    link: "",
    name: "Zodiac",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as The Lost"
  };
  var _033 = {
    link: "",
    name: "Box of Friends",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as Lilith"
  };
  var _043 = {
    link: "",
    name: "Rib of Greed",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as Keeper"
  };
  var _053 = {
    link: "",
    name: "Cry Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as Isaac"
  };
  var _063 = {
    link: "",
    name: "Red Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as Magdalene"
  };
  var _073 = {
    link: "",
    name: "Green Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as Cain"
  };
  var _083 = {
    link: "",
    name: "Brown Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as Judas"
  };
  var _093 = {
    link: "",
    name: "Blue Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as ???"
  };
  var _102 = {
    link: "",
    name: "Lil' Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as Eve"
  };
  var _112 = {
    link: "",
    name: "Rage Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as Samson"
  };
  var _123 = {
    link: "",
    name: "Black Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as Azazel"
  };
  var _133 = {
    link: "",
    name: "Long Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as Lazarus"
  };
  var _143 = {
    link: "",
    name: "Yellow Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as Eden"
  };
  var _153 = {
    link: "",
    name: "White Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as The Lost"
  };
  var _163 = {
    link: "",
    name: "Big Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as Lilith"
  };
  var _173 = {
    link: "",
    name: "Noose Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as Keeper"
  };
  var _183 = {
    link: "",
    name: "Rune Bag",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac as Lilith"
  };
  var _193 = {
    link: "",
    name: "Cambion Conception",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat ??? as Lilith"
  };
  var _202 = {
    link: "",
    name: "Serpent's Kiss",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as Lilith"
  };
  var _212 = {
    link: "",
    name: "Succubus",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as Lilith"
  };
  var _223 = {
    link: "",
    name: "Immaculate Conception",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as Lilith"
  };
  var _233 = {
    link: "",
    name: "Goat Head Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mom's Heart on Hard mode as Lilith"
  };
  var _243 = {
    link: "",
    name: "Gold Heart",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete XXXXXXXXL (challenge #21)"
  };
  var _253 = {
    link: "",
    name: "Get out of Jail Free Card",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete SPEED! (challenge #22)"
  };
  var _263 = {
    link: "",
    name: "Gold Bomb",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Blue Bomber (challenge #23)"
  };
  var _273 = {
    link: "",
    name: "2 new pills",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete PAY TO PLAY (challenge #24)"
  };
  var _283 = {
    link: "",
    name: "2 new pills",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Have a Heart (challenge #25)"
  };
  var _293 = {
    link: "",
    name: "Poker Chip",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete I RULE! (challenge #26)"
  };
  var _302 = {
    link: "",
    name: "Stud Finder",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete BRAINS! (challenge #27)"
  };
  var _312 = {
    link: "",
    name: "D8",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete PRIDE DAY! (challenge #28)"
  };
  var _323 = {
    link: "",
    name: "Kidney Stone",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete The Guardian (challenge #30) Complete Onan's Streak (challenge #29)"
  };
  var _333 = {
    link: "",
    name: "Blank Rune",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Onan's Streak (challenge #29) Complete The Guardian (challenge #30)"
  };
  var _343 = {
    link: "",
    name: "Blue Womb",
    inGameDescription: "Unlocked a hidden chapter.",
    unlockDescription: "Defeat Mom's Heart 10 times"
  };
  var _353 = {
    link: "",
    name: "1001%",
    inGameDescription: "Nerd x 1000000",
    unlockDescription: "Unlock all secrets and endings, and collect every item in the game"
  };
  var _363 = {
    link: "",
    name: "Keeper holds Wooden Nickel",
    inGameDescription: "Unlocked a new starting item.",
    unlockDescription: "Defeat Isaac as Keeper"
  };
  var _373 = {
    link: "",
    name: "Keeper holds Store Key",
    inGameDescription: "Unlocked a new starting item.",
    unlockDescription: "Defeat Satan as Keeper"
  };
  var _383 = {
    link: "",
    name: "Deep Pockets",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat ??? as Keeper"
  };
  var _393 = {
    link: "",
    name: "Karma",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as Keeper"
  };
  var _402 = {
    link: "",
    name: "Sticky Nickels",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as Keeper"
  };
  var _412 = {
    link: "",
    name: "Super Greed Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mom's Heart on Hard mode as Keeper"
  };
  var _423 = {
    link: "",
    name: "Lucky Pennies",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Donate 1 Coin to the Greed Donation Machine"
  };
  var _433 = {
    link: "",
    name: "Special Hanging Shopkeepers",
    inGameDescription: "Unlocked a secret.",
    unlockDescription: "Donate 10 Coins to the Greed Donation Machine"
  };
  var _443 = {
    link: "",
    name: "Wooden Nickel",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Donate 30 Coins to the Greed Donation Machine"
  };
  var _453 = {
    link: "",
    name: "Cain holds Paperclip",
    inGameDescription: "Unlocked a new starting item.",
    unlockDescription: "Donate 68 Coins to the Greed Donation Machine"
  };
  var _463 = {
    link: "",
    name: "Everything is Terrible 2!!!",
    inGameDescription: "Greed just got harder!",
    unlockDescription: "Donate 111 Coins to the Greed Donation Machine"
  };
  var _473 = {
    link: "",
    name: "Special Shopkeepers",
    inGameDescription: "Unlocked a secret.",
    unlockDescription: "Donate 234 Coins to the Greed Donation Machine"
  };
  var _483 = {
    link: "",
    name: "Eve now holds Razor Blade",
    inGameDescription: "Unlocked a new starting item.",
    unlockDescription: "Donate 439 Coins to the Greed Donation Machine"
  };
  var _493 = {
    link: "",
    name: "Store Key",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Donate 666 Coins to the Greed Donation Machine"
  };
  var _502 = {
    link: "",
    name: "Lost holds Holy Mantle",
    inGameDescription: "Unlocked a new starting item.",
    unlockDescription: "Donate 879 Coins to the Greed Donation Machine"
  };
  var _512 = {
    link: "",
    name: "Keeper",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "Donate 1000 Coins to the Greed Donation Machine"
  };
  var _523 = {
    link: "",
    name: "Hive Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as ???"
  };
  var _533 = {
    link: "",
    name: "Buddy Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as Isaac"
  };
  var _543 = {
    link: "",
    name: "Colorful Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as Magdalene"
  };
  var _553 = {
    link: "",
    name: "Whore Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as Eve"
  };
  var _563 = {
    link: "",
    name: "Cracked Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as Eden"
  };
  var _573 = {
    link: "",
    name: "Dripping Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as Lazarus"
  };
  var _583 = {
    link: "",
    name: "Blinding Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Use Blank Card while holding XIX - The Sun"
  };
  var _593 = {
    link: "",
    name: "Sucky Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as Azazel"
  };
  var _602 = {
    link: "",
    name: "Dark Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as Lilith"
  };
  var _612 = {
    link: "",
    name: "Picky Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as Cain"
  };
  var _623 = {
    link: "",
    name: "Revenge Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as Samson"
  };
  var _633 = {
    link: "",
    name: "Belial Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as Judas"
  };
  var _643 = {
    link: "",
    name: "Sale Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as Keeper"
  };
  var _653 = {
    link: "",
    name: "XXXXXXXXL",
    inGameDescription: "Unlocked Challenge #21.",
    unlockDescription: "Defeat Mom"
  };
  var _663 = {
    link: "",
    name: "SPEED!",
    inGameDescription: "Unlocked Challenge #22.",
    unlockDescription: "Defeat Mom"
  };
  var _673 = {
    link: "",
    name: "Blue Bomber",
    inGameDescription: "Unlocked Challenge #23.",
    unlockDescription: "Destroy 10 Tinted Rocks and defeat Mom's Heart 11 times"
  };
  var _683 = {
    link: "",
    name: "PAY TO PLAY",
    inGameDescription: "Unlocked Challenge #24.",
    unlockDescription: "Defeat Isaac as Cain"
  };
  var _693 = {
    link: "",
    name: "Have a Heart",
    inGameDescription: "Unlocked Challenge #25.",
    unlockDescription: "Defeat Mom"
  };
  var _702 = {
    link: "",
    name: "I RULE!",
    inGameDescription: "Unlocked Challenge #26.",
    unlockDescription: "Defeat ??? or The Lamb, and defeat Satan as Isaac Defeat Mega Satan"
  };
  var _712 = {
    link: "",
    name: "BRAINS!",
    inGameDescription: "Unlocked Challenge #27.",
    unlockDescription: "Defeat Isaac 5 times"
  };
  var _723 = {
    link: "",
    name: "PRIDE DAY!",
    inGameDescription: "Unlocked Challenge #28.",
    unlockDescription: "Defeat Mom"
  };
  var _733 = {
    link: "",
    name: "Onan's Streak",
    inGameDescription: "Unlocked Challenge #29.",
    unlockDescription: "Defeat Mom"
  };
  var _743 = {
    link: "",
    name: "The Guardian",
    inGameDescription: "Unlocked Challenge #30.",
    unlockDescription: "Defeat Mom"
  };
  var _753 = {
    link: "",
    name: "Generosity",
    inGameDescription: "If only everyone was as generous as you are...",
    unlockDescription: "Donate 999 Coins to the Greed Donation Machine"
  };
  var _763 = {
    link: "",
    name: "Mega",
    inGameDescription: "Unlocked...",
    unlockDescription: "Defeat Mega Satan as every character ( except Tainted characters)"
  };
  var _773 = {
    link: "",
    name: "Backasswards",
    inGameDescription: "Unlocked a new challenge.",
    unlockDescription: "Defeat ??? or The Lamb Defeat Mega Satan"
  };
  var _783 = {
    link: "",
    name: "Aprils fool",
    inGameDescription: "Unlocked a new challenge.",
    unlockDescription: "Defeat Mom"
  };
  var _793 = {
    link: "",
    name: "Pokey Mans",
    inGameDescription: "Unlocked a new challenge.",
    unlockDescription: "Defeat Mom's Heart 11 times"
  };
  var _802 = {
    link: "",
    name: "Ultra Hard",
    inGameDescription: "Unlocked a new challenge.",
    unlockDescription: "Defeat ??? or The Lamb. Possession of The Polaroid / The Negative is required, barring getting to Dark Room through a Sacrifice Room. Defeat Mega Satan"
  };
  var _812 = {
    link: "",
    name: "PONG",
    inGameDescription: "Unlocked a new challenge.",
    unlockDescription: "Defeat Isaac 5 times"
  };
  var _823 = {
    link: "",
    name: "D Infinity",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as Isaac"
  };
  var _833 = {
    link: "",
    name: "Eucharist",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as Magdalene"
  };
  var _843 = {
    link: "",
    name: "Silver Dollar",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as Cain"
  };
  var _853 = {
    link: "",
    name: "Shade",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as Judas"
  };
  var _863 = {
    link: "",
    name: "King Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Delirium as ???"
  };
  var _873 = {
    link: "",
    name: "Bloody Crown",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as Samson"
  };
  var _883 = {
    link: "",
    name: "Dull Razor",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as Eve"
  };
  var _893 = {
    link: "",
    name: "Eden's Soul",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as Eden"
  };
  var _902 = {
    link: "",
    name: "Dark Prince's Crown",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as Azazel"
  };
  var _912 = {
    link: "",
    name: "Compound Fracture",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as Lazarus"
  };
  var _923 = {
    link: "",
    name: "Euthanasia",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as Lilith"
  };
  var _933 = {
    link: "",
    name: "Holy Card",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as The Lost"
  };
  var _943 = {
    link: "",
    name: "Crooked Penny",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as Keeper"
  };
  var _953 = {
    link: "",
    name: "Void",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as Apollyon"
  };
  var _963 = {
    link: "",
    name: "D1",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as Isaac"
  };
  var _973 = {
    link: "",
    name: "Glyph of Balance",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as Magdalene"
  };
  var _983 = {
    link: "",
    name: "Sack of Sacks",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as Cain"
  };
  var _993 = {
    link: "",
    name: "Eye of Belial",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as Judas"
  };
  var _003 = {
    link: "",
    name: "Meconium",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as ???"
  };
  var _013 = {
    link: "",
    name: "Stem Cell",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as Samson"
  };
  var _024 = {
    link: "",
    name: "Crow Heart",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as Eve"
  };
  var _034 = {
    link: "",
    name: "Metronome",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as Eden"
  };
  var _044 = {
    link: "",
    name: "Bat Wing",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as Azazel"
  };
  var _054 = {
    link: "",
    name: "Plan C",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as Lazarus"
  };
  var _064 = {
    link: "",
    name: "Duality",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as Lilith"
  };
  var _074 = {
    link: "",
    name: "Dad's Lost Coin",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as The Lost"
  };
  var _084 = {
    link: "",
    name: "Eye of Greed",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as Keeper"
  };
  var _094 = {
    link: "",
    name: "Black Rune",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as Apollyon"
  };
  var _103 = {
    link: "",
    name: "Locust of Wrath",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac as Apollyon"
  };
  var _113 = {
    link: "",
    name: "Locust of Pestilence",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as Apollyon"
  };
  var _124 = {
    link: "",
    name: "Locust of Famine",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat ??? as Apollyon"
  };
  var _134 = {
    link: "",
    name: "Locust of Death",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as Apollyon"
  };
  var _144 = {
    link: "",
    name: "Locust of Conquest",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as Apollyon"
  };
  var _154 = {
    link: "",
    name: "Hushy",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as Apollyon"
  };
  var _164 = {
    link: "",
    name: "Brown Nugget",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as Apollyon"
  };
  var _174 = {
    link: "",
    name: "Mort Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as Apollyon"
  };
  var _184 = {
    link: "",
    name: "Smelter",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Mom's Heart or It Lives! on Hard mode as Apollyon"
  };
  var _194 = {
    link: "",
    name: "Apollyon Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as Apollyon"
  };
  var _203 = {
    link: "",
    name: "New Area",
    inGameDescription: "Unlocked a new area.",
    unlockDescription: "Defeat Hush"
  };
  var _213 = {
    link: "",
    name: "Once More with Feeling!",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete a Victory Lap, defeating The Lamb"
  };
  var _224 = {
    link: "",
    name: "Hat trick!",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Get a 3-win streak"
  };
  var _234 = {
    link: "",
    name: "5 Nights at Mom's",
    inGameDescription: "Unlocked super special rocks.",
    unlockDescription: "Get a 5-win streak ( 3-win streak), using a different character each time"
  };
  var _244 = {
    link: "",
    name: "Sin collector",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Collect every entry in the Bestiary (bugged v190 - Mobs that don't exist in the bestiary are being counted. This allows Sin Collector to be unlocked without a complete bestiary)"
  };
  var _254 = {
    link: "",
    name: "Dedication",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Participate in 31 Daily Challenges (they don't have to be consecutive; it will still count if Isaac dies in the first room)"
  };
  var _264 = {
    link: "",
    name: "ZIP!",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb in under 20 minutes"
  };
  var _274 = {
    link: "",
    name: "It's the Key",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb without taking Hearts, Coins, or Bombs through the entire run"
  };
  var _284 = {
    link: "",
    name: "Mr. Resetter!",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Reset 7 times in a row"
  };
  var _294 = {
    link: "",
    name: "Living on the edge",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete a Chapter (floors I and II) after Basement, start-to-finish, with only half a Heart total (can use The Lost)"
  };
  var _303 = {
    link: "",
    name: "U Broke It!",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Obtain 50 items in a run (duplicate passive items/familiars count towards the total, e.g., multiple Breakfast)"
  };
  var _313 = {
    link: "",
    name: "Laz Bleeds More!",
    inGameDescription: "Unlocked a new starting item.",
    unlockDescription: "Complete Backasswards (challenge #31)"
  };
  var _324 = {
    link: "",
    name: "Maggy Now Holds a Pill!",
    inGameDescription: "Unlocked a new starting item.",
    unlockDescription: "Complete Aprils Fool (challenge #32)"
  };
  var _334 = {
    link: "",
    name: "Charged Key",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Pokey Mans (challenge #33)"
  };
  var _344 = {
    link: "",
    name: "Samson Feels Healthy!",
    inGameDescription: "Unlocked a new starting item.",
    unlockDescription: "Complete Ultra Hard (challenge #34)"
  };
  var _354 = {
    link: "",
    name: "Greed's Gullet",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete Pong (challenge #35)"
  };
  var _364 = {
    link: "",
    name: "The Marathon",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Get a 5-win streak in the Daily Challenges ( Isaac must have a score above 0 on the score screen)"
  };
  var _374 = {
    link: "",
    name: "RERUN",
    inGameDescription: "Unlocked the power of RERUN.",
    unlockDescription: "Complete 3 Victory Laps and start a 4th"
  };
  var _384 = {
    link: "",
    name: "Delirious",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium"
  };
  var _394 = {
    link: "",
    name: "1000000%",
    inGameDescription: "Just Stop!",
    unlockDescription: "Collect every item in the game, unlock all secrets and endings, and complete the Bestiary"
  };
  var _403 = {
    link: "",
    name: "Apollyon",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "Defeat Mega Satan"
  };
  var _413 = {
    link: "",
    name: "Greedier!",
    inGameDescription: "New mode unlocked!",
    unlockDescription: "Donate 500 Coins to the Greed Donation Machine"
  };
  var _424 = {
    link: "",
    name: "Burning Basement",
    inGameDescription: "Alt stage to the basement.",
    unlockDescription: "Defeat Mom's Heart 11 times"
  };
  var _434 = {
    link: "",
    name: "Flooded Caves",
    inGameDescription: "Alt stage to the caves.",
    unlockDescription: "Defeat It Lives! 16 times"
  };
  var _444 = {
    link: "",
    name: "Dank Depths",
    inGameDescription: "Alt stage to the depths.",
    unlockDescription: "Defeat It Lives! 21 times"
  };
  var _454 = {
    link: "",
    name: "Scarred Womb",
    inGameDescription: "Alt stage to the womb.",
    unlockDescription: "Defeat It Lives! 30 times"
  };
  var _464 = {
    link: "",
    name: "Something wicked this way comes!",
    inGameDescription: "Unlocked new bosses!",
    unlockDescription: "Defeat ??? as 3 different Characters"
  };
  var _474 = {
    link: "",
    name: "Something wicked this way comes+!",
    inGameDescription: "Unlocked even more bosses!",
    unlockDescription: "Defeat ??? as 6 different Characters"
  };
  var _484 = {
    link: "",
    name: "The gate is open!",
    inGameDescription: "Unlocked new enemies!",
    unlockDescription: "Defeat The Lamb"
  };
  var _494 = {
    link: "",
    name: "Black Hole",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat 20 Portals"
  };
  var _503 = {
    link: "",
    name: "Mystery Gift",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Destroy 500 rocks"
  };
  var _513 = {
    link: "",
    name: "Sprinkler",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Beat Chapter 1 without taking damage"
  };
  var _524 = {
    link: "",
    name: "Angry Fly",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Become Beelzebub"
  };
  var _534 = {
    link: "",
    name: "Bozo",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Destroy 5 rainbow poops"
  };
  var _544 = {
    link: "",
    name: "Broken Modem",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete 7 Daily Challenges (by touching the trophy at the end)"
  };
  var _554 = {
    link: "",
    name: "Buddy in a Box",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Pick up 5 familiars in a single run"
  };
  var _564 = {
    link: "",
    name: "Fast Bombs",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Little Horn 20 times"
  };
  var _574 = {
    link: "",
    name: "Lil Delirium",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium for the 1st time"
  };
  var _584 = {
    link: "",
    name: "Hairpin",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Recharge using Lil' Batteries 20 times"
  };
  var _594 = {
    link: "",
    name: "Wooden Cross",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Sleep in a bed"
  };
  var _603 = {
    link: "",
    name: "Butter!",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete 2 Victory Laps and start a 3rd"
  };
  var _613 = {
    link: "",
    name: "Huge Growth",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: 'Increase in size 5 times in a single run via Magic Mushroom, "One Makes you Larger" pills, XI - Strength, etc.'
  };
  var _624 = {
    link: "",
    name: "Ancient Recall",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Use Cards and Runes 20 times"
  };
  var _634 = {
    link: "",
    name: "Era Walk",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Have both the Broken Watch and the Stop Watch unlocked"
  };
  var _644 = {
    link: "",
    name: "Coupon",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Purchase anything from Shops, Devil Rooms, and/or Black Markets 50 times"
  };
  var _654 = {
    link: "",
    name: "Telekinesis",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Beat Chapter 2 without taking damage"
  };
  var _664 = {
    link: "",
    name: "Moving Box",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Use Pandora's Box in Dark Room"
  };
  var _674 = {
    link: "",
    name: "Jumper Cables",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: 'Pick up any 2 of the following items/trinkets in a single run: 9 Volt, The Battery, Car Battery, AAA Battery, and Watch Battery (any 2 items that have the "battery" item tag)'
  };
  var _684 = {
    link: "",
    name: "Leprosy",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Beat Chapter 3 without taking damage"
  };
  var _694 = {
    link: "",
    name: "Technology Zero",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: 'Pick up any 2 technology items in a single run (any 2 items that have the "tech" item tag)'
  };
  var _703 = {
    link: "",
    name: "Filigree Feather",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Acquire both Key Piece 1 and Key Piece 2"
  };
  var _713 = {
    link: "",
    name: "Mr. ME!",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Open 20 Locked Chests"
  };
  var _724 = {
    link: "",
    name: "7 Seals",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat all 5 Harbingers"
  };
  var _734 = {
    link: "",
    name: "Angelic Prism",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat an Angel 10 times"
  };
  var _744 = {
    link: "",
    name: "Pop!",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Beat Chapter 4 without taking damage"
  };
  var _754 = {
    link: "",
    name: "Door Stop",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Blow up doors and Secret Room walls 50 times"
  };
  var _764 = {
    link: "",
    name: "Death's List",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Take 25 Deals with the Devil"
  };
  var _774 = {
    link: "",
    name: "Haemolacria",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Acquire Blood Clot 10 times"
  };
  var _784 = {
    link: "",
    name: "Lachryphagy",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: 'Collect 10 "Tears Up" items or pills in one run'
  };
  var _794 = {
    link: "",
    name: "Schoolbag",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Enter every Shop from Chapter 1 through Chapter 3 in one run"
  };
  var _803 = {
    link: "",
    name: "Trisagion",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Take 25 Angel Rooms items"
  };
  var _813 = {
    link: "",
    name: "Extension Cord",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Have The Battery, 9 Volt, and Car Battery in Isaac's collection"
  };
  var _824 = {
    link: "",
    name: "Flat Stone",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Acquire Rubber Cement 5 times"
  };
  var _834 = {
    link: "",
    name: "Sacrificial Altar",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Take 50 Deals with the Devil"
  };
  var _844 = {
    link: "",
    name: "Lil Spewer",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Have Isaac die to his own explosion from Ipecac, Bob's Rotten Head, or a Horf! pill"
  };
  var _854 = {
    link: "",
    name: "Blanket",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Sleep in 10 beds"
  };
  var _864 = {
    link: "",
    name: "Marbles",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Use 5 Gulp! pills in one run ( Placebo uses count)"
  };
  var _874 = {
    link: "",
    name: "Mystery Egg",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Spawn three charmed enemies in the same room"
  };
  var _884 = {
    link: "",
    name: "Rotten Penny",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Have 20 Blue Flies at the same time"
  };
  var _894 = {
    link: "",
    name: "Baby-Bender",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Use I - The Magician or Telepathy for Dummies while already having homing tears"
  };
  var _903 = {
    link: "",
    name: "The Forgotten",
    inGameDescription: "Unlocked a new character.",
    unlockDescription: "It's complicated"
  };
  var _913 = {
    link: "",
    name: "Bone Heart",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "It's complicated"
  };
  var _924 = {
    link: "",
    name: "Marrow",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Mom's Heart or It Lives! on Hard mode as The Forgotten"
  };
  var _934 = {
    link: "",
    name: "Slipped Rib",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Isaac as The Forgotten"
  };
  var _944 = {
    link: "",
    name: "Pointy Rib",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Satan as The Forgotten"
  };
  var _954 = {
    link: "",
    name: "Jaw Bone",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat ??? as The Forgotten"
  };
  var _964 = {
    link: "",
    name: "Brittle Bones",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat The Lamb as The Forgotten"
  };
  var _974 = {
    link: "",
    name: "Divorce Papers",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Complete the Boss Rush as The Forgotten"
  };
  var _984 = {
    link: "",
    name: "Hallowed Ground",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Hush as The Forgotten"
  };
  var _994 = {
    link: "",
    name: "Finger Bone",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greed as The Forgotten"
  };
  var _004 = {
    link: "",
    name: "Dad's Ring",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Ultra Greedier as The Forgotten"
  };
  var _014 = {
    link: "",
    name: "Book of the Dead",
    inGameDescription: "Unlocked a new item.",
    unlockDescription: "Defeat Delirium as The Forgotten"
  };
  var _025 = {
    link: "",
    name: "Bone Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Earn all Hard mode Completion Marks as The Forgotten"
  };
  var _035 = {
    link: "",
    name: "Bound Baby",
    inGameDescription: "Unlocked a new co-player baby.",
    unlockDescription: "Defeat Mega Satan as The Forgotten"
  };
  var _045 = {
    link: "",
    name: "Bethany",
    inGameDescription: "Beat Hard mode as Lazarus without losing a life",
    unlockDescription: "Defeat Mom's Heart/It Lives! on hard mode as Lazarus, without dying at all"
  };
  var _055 = {
    link: "",
    name: "Jacob and Esau",
    inGameDescription: "You are just like your father...",
    unlockDescription: "Defeat Mother"
  };
  var _065 = {
    link: "",
    name: "The Planetarium",
    inGameDescription: "Kids shouldn't believe in fortunes...",
    unlockDescription: 'Collect any 3 items with the "stars" item tag in a single run'
  };
  var _075 = {
    link: "",
    name: "A Secret Exit",
    inGameDescription: "Complete&#160;??? 3 times.",
    unlockDescription: "Defeat Hush 3 times"
  };
  var _085 = {
    link: "",
    name: "Forgotten Lullaby",
    inGameDescription: "Get that song out of her head.",
    unlockDescription: "Blow up The Siren's skull after defeating her"
  };
  var _095 = {
    link: "",
    name: "Fruity Plum",
    inGameDescription: "Defeat Baby Plum 10 times.",
    unlockDescription: "Defeat Baby Plum 10 times"
  };
  var _104 = {
    link: "",
    name: "Plum Flute",
    inGameDescription: "Make a new friend!",
    unlockDescription: "Allow Baby Plum to escape instead of defeating her"
  };
  var _114 = {
    link: "",
    name: "Rotten Heart",
    inGameDescription: "Enter the Corpse...",
    unlockDescription: "Enter Corpse for the first time"
  };
  var _125 = {
    link: "",
    name: "Dross",
    inGameDescription: "Defeat all bosses in Downpour.",
    unlockDescription: "Defeat all bosses in Downpour"
  };
  var _135 = {
    link: "",
    name: "Ashpit",
    inGameDescription: "Defeat all bosses in the Mines.",
    unlockDescription: "Defeat all bosses in Mines"
  };
  var _145 = {
    link: "",
    name: "Gehenna",
    inGameDescription: "Defeat all bosses in the Mausoleum.",
    unlockDescription: "Defeat all bosses in Mausoleum"
  };
  var _155 = {
    link: "",
    name: "Red Key",
    inGameDescription: "The other side is calling...",
    unlockDescription: "Open Mom's Chest in Home"
  };
  var _165 = {
    link: "",
    name: "Wisp Baby",
    inGameDescription: "Beat the game in Hard mode with Bethany.",
    unlockDescription: "Defeat Mom's Heart or It Lives! on Hard mode as Bethany"
  };
  var _175 = {
    link: "",
    name: "Book of Virtues",
    inGameDescription: "Complete the Cathedral with Bethany.",
    unlockDescription: "Defeat Isaac as Bethany"
  };
  var _185 = {
    link: "",
    name: "Urn of Souls",
    inGameDescription: "Complete Sheol with Bethany.",
    unlockDescription: "Defeat Satan as Bethany"
  };
  var _195 = {
    link: "",
    name: "Blessed Penny",
    inGameDescription: "Complete the Chest with Bethany.",
    unlockDescription: "Defeat ??? as Bethany"
  };
  var _204 = {
    link: "",
    name: "Alabaster Box",
    inGameDescription: "Complete the Dark Room with Bethany.",
    unlockDescription: "Defeat The Lamb as Bethany"
  };
  var _214 = {
    link: "",
    name: "Beth's Faith",
    inGameDescription: "Complete Boss Rush with Bethany.",
    unlockDescription: "Complete the Boss Rush as Bethany"
  };
  var _225 = {
    link: "",
    name: "Soul Locket",
    inGameDescription: "Beat Greed mode with Bethany.",
    unlockDescription: "Defeat Ultra Greed as Bethany"
  };
  var _235 = {
    link: "",
    name: "Divine Intervention",
    inGameDescription: "Complete&#160;??? with Bethany.",
    unlockDescription: "Defeat Hush as Bethany"
  };
  var _245 = {
    link: "",
    name: "Vade Retro",
    inGameDescription: "Beat Greedier mode with Bethany.",
    unlockDescription: "Defeat Ultra Greedier as Bethany"
  };
  var _255 = {
    link: "",
    name: "Star of Bethlehem",
    inGameDescription: "Beat the Void with Bethany.",
    unlockDescription: "Defeat Delirium as Bethany"
  };
  var _265 = {
    link: "",
    name: "Hope Baby",
    inGameDescription: "Beat everything in Hard mode with Bethany.",
    unlockDescription: "Earn all Hard mode Completion Marks as Bethany"
  };
  var _275 = {
    link: "",
    name: "Glowing Baby",
    inGameDescription: "Defeat Mega Satan with Bethany.",
    unlockDescription: "Defeat Mega Satan as Bethany"
  };
  var _285 = {
    link: "",
    name: "Double Baby",
    inGameDescription: "Beat the game in Hard mode with Jacob and Esau.",
    unlockDescription: "Defeat Mom's Heart or It Lives! on Hard mode as Jacob and Esau"
  };
  var _295 = {
    link: "",
    name: "The Stairway",
    inGameDescription: "Complete the Cathedral with Jacob and Esau.",
    unlockDescription: "Defeat Isaac as Jacob and Esau"
  };
  var _304 = {
    link: "",
    name: "Red Stew",
    inGameDescription: "Complete Sheol with Jacob and Esau.",
    unlockDescription: "Defeat Satan as Jacob and Esau"
  };
  var _314 = {
    link: "",
    name: "Birthright",
    inGameDescription: "Complete the Chest with Jacob and Esau.",
    unlockDescription: "Defeat ??? as Jacob and Esau"
  };
  var _325 = {
    link: "",
    name: "Damocles",
    inGameDescription: "Complete the Dark Room with Jacob and Esau.",
    unlockDescription: "Defeat The Lamb as Jacob and Esau"
  };
  var _335 = {
    link: "",
    name: "Rock Bottom",
    inGameDescription: "Complete Boss Rush with Jacob and Esau.",
    unlockDescription: "Complete Boss Rush as Jacob and Esau"
  };
  var _345 = {
    link: "",
    name: "Inner Child",
    inGameDescription: "Beat Greed mode with Jacob and Esau.",
    unlockDescription: "Defeat Ultra Greed as Jacob and Esau"
  };
  var _355 = {
    link: "",
    name: "Vanishing Twin",
    inGameDescription: "Complete&#160;??? with Jacob and Esau.",
    unlockDescription: "Defeat Hush as Jacob and Esau"
  };
  var _365 = {
    link: "",
    name: "Genesis",
    inGameDescription: "Beat Greedier mode with Jacob and Esau.",
    unlockDescription: "Defeat Ultra Greedier as Jacob and Esau"
  };
  var _375 = {
    link: "",
    name: "Suplex!",
    inGameDescription: "Complete the Void with Jacob and Esau.",
    unlockDescription: "Defeat Delirium as Jacob and Esau"
  };
  var _385 = {
    link: "",
    name: "Solomon's Baby",
    inGameDescription: "Beat everything in Hard mode with Jacob and Esau.",
    unlockDescription: "Earn all Hard mode Completion Marks as Jacob and Esau"
  };
  var _395 = {
    link: "",
    name: "Illusion Baby",
    inGameDescription: "Defeat Mega Satan with Jacob and Esau.",
    unlockDescription: "Defeat Mega Satan as Jacob and Esau"
  };
  var _404 = {
    link: "",
    name: "Meat Cleaver",
    inGameDescription: "Complete the Corpse with Isaac.",
    unlockDescription: "Defeat Mother as Isaac"
  };
  var _414 = {
    link: "",
    name: "Options?",
    inGameDescription: "Complete the final chapter with Isaac.",
    unlockDescription: "Defeat The Beast as Isaac"
  };
  var _425 = {
    link: "",
    name: "Yuck Heart",
    inGameDescription: "Complete the Corpse with Magdalene.",
    unlockDescription: "Defeat Mother as Magdalene"
  };
  var _435 = {
    link: "",
    name: "Candy Heart",
    inGameDescription: "Complete the final chapter with Magdalene.",
    unlockDescription: "Defeat The Beast as Magdalene"
  };
  var _445 = {
    link: "",
    name: "Guppy's Eye",
    inGameDescription: "Complete the Corpse with Cain.",
    unlockDescription: "Defeat Mother as Cain"
  };
  var _455 = {
    link: "",
    name: "A Pound of Flesh",
    inGameDescription: "Complete the final chapter with Cain.",
    unlockDescription: "Defeat The Beast as Cain"
  };
  var _465 = {
    link: "",
    name: "Akeldama",
    inGameDescription: "Complete the Corpse with Judas.",
    unlockDescription: "Defeat Mother as Judas"
  };
  var _475 = {
    link: "",
    name: "Redemption",
    inGameDescription: "Complete the final chapter with Judas.",
    unlockDescription: "Defeat The Beast as Judas"
  };
  var _485 = {
    link: "",
    name: "Eternal D6",
    inGameDescription: "Complete the Corpse with&#160;???.",
    unlockDescription: "Defeat Mother as ???"
  };
  var _495 = {
    link: "",
    name: "Montezuma's Revenge",
    inGameDescription: "Complete the final chapter with&#160;???.",
    unlockDescription: "Defeat The Beast as ???"
  };
  var _504 = {
    link: "",
    name: "Bird Cage",
    inGameDescription: "Complete the Corpse with Eve.",
    unlockDescription: "Defeat Mother as Eve"
  };
  var _514 = {
    link: "",
    name: "Cracked Orb",
    inGameDescription: "Complete the final chapter with Eve.",
    unlockDescription: "Defeat The Beast as Eve"
  };
  var _525 = {
    link: "",
    name: "Bloody Gust",
    inGameDescription: "Complete the Corpse with Samson.",
    unlockDescription: "Defeat Mother as Samson"
  };
  var _535 = {
    link: "",
    name: "Empty Heart",
    inGameDescription: "Complete the final chapter with Samson.",
    unlockDescription: "Defeat The Beast as Samson"
  };
  var _545 = {
    link: "",
    name: "Devil's Crown",
    inGameDescription: "Complete the Corpse with Azazel.",
    unlockDescription: "Defeat Mother as Azazel"
  };
  var _555 = {
    link: "",
    name: "Lil Abaddon",
    inGameDescription: "Complete the final chapter with Azazel.",
    unlockDescription: "Defeat The Beast as Azazel"
  };
  var _565 = {
    link: "",
    name: "Tinytoma",
    inGameDescription: "Complete the Corpse with Lazarus.",
    unlockDescription: "Defeat Mother as Lazarus"
  };
  var _575 = {
    link: "",
    name: "Astral Projection",
    inGameDescription: "Complete the final chapter with Lazarus.",
    unlockDescription: "Defeat The Beast as Lazarus"
  };
  var _585 = {
    link: "",
    name: "'M",
    inGameDescription: "Complete the Corpse with Eden.",
    unlockDescription: "Defeat Mother as Eden"
  };
  var _595 = {
    link: "",
    name: "Everything Jar",
    inGameDescription: "Complete the final chapter with Eden.",
    unlockDescription: "Defeat The Beast as Eden"
  };
  var _604 = {
    link: "",
    name: "Lost Soul",
    inGameDescription: "Complete the Corpse with the Lost.",
    unlockDescription: "Defeat Mother as The Lost"
  };
  var _614 = {
    link: "",
    name: "Hungry Soul",
    inGameDescription: "Complete the final chapter with the Lost.",
    unlockDescription: "Defeat The Beast as The Lost"
  };
  var _625 = {
    link: "",
    name: "Blood Puppy",
    inGameDescription: "Complete the Corpse with Lilith.",
    unlockDescription: "Defeat Mother as Lilith"
  };
  var _635 = {
    link: "",
    name: "C Section",
    inGameDescription: "Complete the final chapter with Lilith.",
    unlockDescription: "Defeat The Beast as Lilith"
  };
  var _645 = {
    link: "",
    name: "Keeper's Sack",
    inGameDescription: "Complete the Corpse with Keeper.",
    unlockDescription: "Defeat Mother as Keeper"
  };
  var _655 = {
    link: "",
    name: "Keeper's Box",
    inGameDescription: "Complete the final chapter with Keeper.",
    unlockDescription: "Defeat The Beast as Keeper"
  };
  var _665 = {
    link: "",
    name: "Lil Portal",
    inGameDescription: "Complete the Corpse with Apollyon.",
    unlockDescription: "Defeat Mother as Apollyon"
  };
  var _675 = {
    link: "",
    name: "Worm Friend",
    inGameDescription: "Complete the final chapter with Apollyon.",
    unlockDescription: "Defeat The Beast as Apollyon"
  };
  var _685 = {
    link: "",
    name: "Bone Spurs",
    inGameDescription: "Complete the Corpse with the Forgotten.",
    unlockDescription: "Defeat Mother as The Forgotten"
  };
  var _695 = {
    link: "",
    name: "Spirit Shackles",
    inGameDescription: "Complete the final chapter with the Forgotten.",
    unlockDescription: "Defeat The Beast as The Forgotten"
  };
  var _704 = {
    link: "",
    name: "Revelation",
    inGameDescription: "Complete the Corpse with Bethany.",
    unlockDescription: "Defeat Mother as Bethany"
  };
  var _714 = {
    link: "",
    name: "Jar of Wisps",
    inGameDescription: "Complete the final chapter with Bethany.",
    unlockDescription: "Defeat The Beast as Bethany"
  };
  var _725 = {
    link: "",
    name: "Magic Skin",
    inGameDescription: "Complete the Corpse with Jacob and Esau.",
    unlockDescription: "Defeat Mother as Jacob and Esau"
  };
  var _735 = {
    link: "",
    name: "Friend Finder",
    inGameDescription: "Complete the final chapter with Jacob and Esau.",
    unlockDescription: "Defeat The Beast as Jacob and Esau"
  };
  var _745 = {
    link: "",
    name: "The Broken",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Isaac"
  };
  var _755 = {
    link: "",
    name: "The Dauntless",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Magdalene"
  };
  var _765 = {
    link: "",
    name: "The Hoarder",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Cain"
  };
  var _775 = {
    link: "",
    name: "The Deceiver",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Judas"
  };
  var _785 = {
    link: "",
    name: "The Soiled",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as ???"
  };
  var _795 = {
    link: "",
    name: "The Curdled",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Eve"
  };
  var _804 = {
    link: "",
    name: "The Savage",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Samson"
  };
  var _814 = {
    link: "",
    name: "The Benighted",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Azazel"
  };
  var _825 = {
    link: "",
    name: "The Enigma",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Lazarus"
  };
  var _835 = {
    link: "",
    name: "The Capricious",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Eden"
  };
  var _845 = {
    link: "",
    name: "The Baleful",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as The Lost"
  };
  var _855 = {
    link: "",
    name: "The Harlot",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Lilith"
  };
  var _865 = {
    link: "",
    name: "The Miser",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Keeper"
  };
  var _875 = {
    link: "",
    name: "The Empty",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Apollyon"
  };
  var _885 = {
    link: "",
    name: "The Fettered",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as The Forgotten"
  };
  var _895 = {
    link: "",
    name: "The Zealot",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Bethany"
  };
  var _904 = {
    link: "",
    name: "The Deserter",
    inGameDescription: "???",
    unlockDescription: "Use Red Key (etc.) to open the hidden closet in Home as Jacob and Esau"
  };
  var _914 = {
    link: "",
    name: "Glitched Crown",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Isaac"
  };
  var _925 = {
    link: "",
    name: "Belly Jelly",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Magdalene"
  };
  var _935 = {
    link: "",
    name: "Blue Key",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Cain"
  };
  var _945 = {
    link: "",
    name: "Sanguine Bond",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Judas"
  };
  var _955 = {
    link: "",
    name: "The Swarm",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted&#160;???"
  };
  var _965 = {
    link: "",
    name: "Heartbreak",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Eve"
  };
  var _975 = {
    link: "",
    name: "Larynx",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Samson"
  };
  var _985 = {
    link: "",
    name: "Azazel's Rage",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Azazel"
  };
  var _995 = {
    link: "",
    name: "Salvation",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Lazarus"
  };
  var _005 = {
    link: "",
    name: "TMTRAINER",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Eden"
  };
  var _015 = {
    link: "",
    name: "Sacred Orb",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Lost"
  };
  var _026 = {
    link: "",
    name: "Twisted Pair",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Lilith"
  };
  var _036 = {
    link: "",
    name: "Strawman",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Keeper"
  };
  var _046 = {
    link: "",
    name: "Echo Chamber",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Apollyon"
  };
  var _056 = {
    link: "",
    name: "Isaac's Tomb",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Forgotten"
  };
  var _066 = {
    link: "",
    name: "Vengeful Spirit",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Bethany"
  };
  var _076 = {
    link: "",
    name: "Esau Jr.",
    inGameDescription: "???",
    unlockDescription: "Defeat The Beast as Tainted Jacob"
  };
  var _086 = {
    link: "",
    name: "Bloody Mary",
    inGameDescription: "Unlocked a new challenge.",
    unlockDescription: "Unlock Bethany, Blood Bag, and It Lives!"
  };
  var _096 = {
    link: "",
    name: "Baptism by Fire",
    inGameDescription: "Unlocked a new challenge.",
    unlockDescription: "Defeat Satan as Bethany, defeat Mom's Heart 11 times, and unlock Maggy's Faith"
  };
  var _105 = {
    link: "",
    name: "Isaac's Awakening",
    inGameDescription: "Unlocked a new challenge.",
    unlockDescription: "Defeat Mother"
  };
  var _115 = {
    link: "",
    name: "Seeing Double",
    inGameDescription: "Unlocked a new challenge.",
    unlockDescription: "Defeat Mother"
  };
  var _126 = {
    link: "",
    name: "Pica Run",
    inGameDescription: "Unlocked a new challenge.",
    unlockDescription: "Defeat Mom's Heart 11 times and unlock Marbles"
  };
  var _136 = {
    link: "",
    name: "Hot Potato",
    inGameDescription: "Unlocked a new challenge.",
    unlockDescription: "Unlock Tainted Forgotten"
  };
  var _146 = {
    link: "",
    name: "Cantripped!",
    inGameDescription: "Unlocked a new challenge.",
    unlockDescription: "Unlock Tainted Cain"
  };
  var _156 = {
    link: "",
    name: "Red Redemption",
    inGameDescription: "Unlocked a new challenge.",
    unlockDescription: "Unlock Tainted Jacob"
  };
  var _166 = {
    link: "",
    name: "DELETE THIS",
    inGameDescription: "TODO: remove this achievement",
    unlockDescription: "Unlock Tainted Eden"
  };
  var _176 = {
    link: "",
    name: "Dirty Mind",
    inGameDescription: "Complete Challenge 36.",
    unlockDescription: "Complete Scat Man (challenge #36)"
  };
  var _186 = {
    link: "",
    name: "Sigil of Baphomet",
    inGameDescription: "Complete Challenge 37.",
    unlockDescription: "Complete Bloody Mary (challenge #37)"
  };
  var _196 = {
    link: "",
    name: "Purgatory",
    inGameDescription: "Complete Challenge 38.",
    unlockDescription: "Complete Baptism by Fire (challenge #38)"
  };
  var _205 = {
    link: "",
    name: "Spirit Sword",
    inGameDescription: "Complete Challenge 39.",
    unlockDescription: "Complete Isaac's Awakening (challenge #39)"
  };
  var _215 = {
    link: "",
    name: "Broken Glasses",
    inGameDescription: "Complete Challenge 40.",
    unlockDescription: "Complete Seeing Double (challenge #40)"
  };
  var _226 = {
    link: "",
    name: "Ice Cube",
    inGameDescription: "Complete Challenge 41.",
    unlockDescription: "Complete Pica Run (challenge #41)"
  };
  var _236 = {
    link: "",
    name: "Charged Penny",
    inGameDescription: "They will charge you up... for a small fee.",
    unlockDescription: "Donate to Battery Bums until they pay out with an item 5 times"
  };
  var _246 = {
    link: "",
    name: "The Fool",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Lost"
  };
  var _256 = {
    link: "",
    name: "The Magician",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Judas"
  };
  var _266 = {
    link: "",
    name: "The High Priestess",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Lilith"
  };
  var _276 = {
    link: "",
    name: "The Empress",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Eve"
  };
  var _286 = {
    link: "",
    name: "The Emperor",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted&#160;???"
  };
  var _296 = {
    link: "",
    name: "The Hierophant",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Bethany"
  };
  var _305 = {
    link: "",
    name: "The Lovers",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Magdalene"
  };
  var _315 = {
    link: "",
    name: "The Chariot",
    inGameDescription: "Complete Challenge 42.",
    unlockDescription: "Complete Hot Potato (challenge #42)"
  };
  var _326 = {
    link: "",
    name: "Justice",
    inGameDescription: "Complete Challenge 43.",
    unlockDescription: "Complete Cantripped (challenge #43)"
  };
  var _336 = {
    link: "",
    name: "The Hermit",
    inGameDescription: "Complete Challenge 44.",
    unlockDescription: "Complete Red Redemption (challenge #44)"
  };
  var _346 = {
    link: "",
    name: "Wheel of Fortune",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Cain"
  };
  var _356 = {
    link: "",
    name: "Strength",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Samson"
  };
  var _366 = {
    link: "",
    name: "The Hanged Man",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Keeper"
  };
  var _376 = {
    link: "",
    name: "Death",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Forgotten"
  };
  var _386 = {
    link: "",
    name: "Temperance",
    inGameDescription: "INVALID_DESCRIPTION",
    unlockDescription: "Complete DELETE THIS (challenge #45)"
  };
  var _396 = {
    link: "",
    name: "The Devil",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Azazel"
  };
  var _405 = {
    link: "",
    name: "The Tower",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Apollyon"
  };
  var _415 = {
    link: "",
    name: "The Stars",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Isaac"
  };
  var _426 = {
    link: "",
    name: "The Sun and the Moon",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Jacob"
  };
  var _436 = {
    link: "",
    name: "Judgement",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Lazarus"
  };
  var _446 = {
    link: "",
    name: "The World",
    inGameDescription: "???",
    unlockDescription: "Defeat Ultra Greedier as Tainted Eden"
  };
  var _456 = {
    link: "",
    name: "Old Capacitor",
    inGameDescription: "Kill 10 Battery Bums.",
    unlockDescription: "Kill 10 Battery Bums"
  };
  var _466 = {
    link: "",
    name: "Brimstone Bombs",
    inGameDescription: "Kill Hornfel before he escapes!",
    unlockDescription: "After breaking Hornfel's minecart, kill him before he can escape"
  };
  var _476 = {
    link: "",
    name: "Mega Mush",
    inGameDescription: "Beat everything in Hard Mode as every character.",
    unlockDescription: "Earn all Hard mode Completion Marks for all non-Tainted characters"
  };
  var _486 = {
    link: "",
    name: "Mom's Lock",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Isaac"
  };
  var _496 = {
    link: "",
    name: "Dice Bag",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Isaac"
  };
  var _505 = {
    link: "",
    name: "Holy Crown",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Magdalene"
  };
  var _515 = {
    link: "",
    name: "Mother's Kiss",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Magdalene"
  };
  var _526 = {
    link: "",
    name: "Gilded Key",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Cain"
  };
  var _536 = {
    link: "",
    name: "Lucky Sack",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Cain"
  };
  var _546 = {
    link: "",
    name: "Your Soul",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Judas"
  };
  var _556 = {
    link: "",
    name: "Number Magnet",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Judas"
  };
  var _566 = {
    link: "",
    name: "Dingle Berry",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted&#160;???"
  };
  var _576 = {
    link: "",
    name: "Ring Cap",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted&#160;???"
  };
  var _586 = {
    link: "",
    name: "Strange Key",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Eve"
  };
  var _596 = {
    link: "",
    name: "Lil Clot",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Eve"
  };
  var _605 = {
    link: "",
    name: "Temporary Tattoo",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Samson"
  };
  var _615 = {
    link: "",
    name: "Swallowed M80",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Samson"
  };
  var _626 = {
    link: "",
    name: "Wicked Crown",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Azazel"
  };
  var _636 = {
    link: "",
    name: "Azazel's Stump",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Azazel"
  };
  var _646 = {
    link: "",
    name: "Torn Pocket",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Lazarus"
  };
  var _656 = {
    link: "",
    name: "Torn Card",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Lazarus"
  };
  var _666 = {
    link: "",
    name: "Nuh Uh!",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Eden"
  };
  var _676 = {
    link: "",
    name: "Modeling Clay",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Eden"
  };
  var _686 = {
    link: "",
    name: "Kid's Drawing",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Lost"
  };
  var _696 = {
    link: "",
    name: "Crystal Key",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Lost"
  };
  var _705 = {
    link: "",
    name: "The Twins",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Lilith"
  };
  var _715 = {
    link: "",
    name: "Adoption Papers",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Lilith"
  };
  var _726 = {
    link: "",
    name: "Keeper's Bargain",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Keeper"
  };
  var _736 = {
    link: "",
    name: "Cursed Penny",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Keeper"
  };
  var _746 = {
    link: "",
    name: "Cricket Leg",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Apollyon"
  };
  var _756 = {
    link: "",
    name: "Apollyon's Best Friend",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Apollyon"
  };
  var _766 = {
    link: "",
    name: "Polished Bone",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Forgotten"
  };
  var _776 = {
    link: "",
    name: "Hollow Heart",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Forgotten"
  };
  var _786 = {
    link: "",
    name: "Expansion Pack",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Bethany"
  };
  var _796 = {
    link: "",
    name: "Beth's Essence",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Bethany"
  };
  var _805 = {
    link: "",
    name: "RC Remote",
    inGameDescription: "???",
    unlockDescription: "Defeat Isaac, ???, Satan, and The Lamb as Tainted Jacob"
  };
  var _815 = {
    link: "",
    name: "Found Soul",
    inGameDescription: "???",
    unlockDescription: "Defeat Mother as Tainted Jacob"
  };
  var _826 = {
    link: "",
    name: "Member Card",
    inGameDescription: "Spend 40+ pennies in a single shop.",
    unlockDescription: "Spend 40+ coins in a single Shop"
  };
  var _836 = {
    link: "",
    name: "Golden Razor",
    inGameDescription: "Obtain 99 pennies. Then spend every single one of them.",
    unlockDescription: "In a single run, obtain 99 Coins, then spend all of them."
  };
  var _846 = {
    link: "",
    name: "Spindown Dice",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Isaac"
  };
  var _856 = {
    link: "",
    name: "Hypercoagulation",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Magdalene"
  };
  var _866 = {
    link: "",
    name: "Bag of Crafting",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Cain"
  };
  var _876 = {
    link: "",
    name: "Dark Arts",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Judas"
  };
  var _886 = {
    link: "",
    name: "IBS",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted&#160;???"
  };
  var _896 = {
    link: "",
    name: "Sumptorium",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Eve"
  };
  var _905 = {
    link: "",
    name: "Berserk!",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Samson"
  };
  var _915 = {
    link: "",
    name: "Hemoptysis",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Azazel"
  };
  var _926 = {
    link: "",
    name: "Flip",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Lazarus"
  };
  var _936 = {
    link: "",
    name: "Corrupted Data",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Eden"
  };
  var _946 = {
    link: "",
    name: "Ghost Bombs",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Lost"
  };
  var _956 = {
    link: "",
    name: "Gello",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Lilith"
  };
  var _966 = {
    link: "",
    name: "Keeper's Kin",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Keeper"
  };
  var _976 = {
    link: "",
    name: "Abyss",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Apollyon"
  };
  var _986 = {
    link: "",
    name: "Decap Attack",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Forgotten"
  };
  var _996 = {
    link: "",
    name: "Lemegeton",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Bethany"
  };
  var _006 = {
    link: "",
    name: "Anima Sola",
    inGameDescription: "???",
    unlockDescription: "Defeat Delirium as Tainted Jacob"
  };
  var _016 = {
    link: "",
    name: "Mega Chest",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Isaac"
  };
  var _027 = {
    link: "",
    name: "Queen of Hearts",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Magdalene"
  };
  var _037 = {
    link: "",
    name: "Gold Pill",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Cain"
  };
  var _047 = {
    link: "",
    name: "Black Sack",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Judas"
  };
  var _057 = {
    link: "",
    name: "Charming Poop",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted&#160;???"
  };
  var _067 = {
    link: "",
    name: "Horse Pill",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Eve"
  };
  var _077 = {
    link: "",
    name: "Crane Game",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Samson"
  };
  var _087 = {
    link: "",
    name: "Hell Game",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Azazel"
  };
  var _097 = {
    link: "",
    name: "Wooden Chest",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Lazarus"
  };
  var _106 = {
    link: "",
    name: "Wild Card",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Eden"
  };
  var _116 = {
    link: "",
    name: "Haunted Chest",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Lost"
  };
  var _127 = {
    link: "",
    name: "Fool's Gold",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Lilith"
  };
  var _137 = {
    link: "",
    name: "Golden Penny",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Keeper"
  };
  var _147 = {
    link: "",
    name: "Rotten Beggar",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Apollyon"
  };
  var _157 = {
    link: "",
    name: "Golden Battery",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Forgotten"
  };
  var _167 = {
    link: "",
    name: "Confessional",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Bethany"
  };
  var _177 = {
    link: "",
    name: "Golden Trinket",
    inGameDescription: "???",
    unlockDescription: "Defeat Mega Satan as Tainted Jacob"
  };
  var _187 = {
    link: "",
    name: "Soul of Isaac",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Isaac"
  };
  var _197 = {
    link: "",
    name: "Soul of Magdalene",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Magdalene"
  };
  var _206 = {
    link: "",
    name: "Soul of Cain",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Cain"
  };
  var _216 = {
    link: "",
    name: "Soul of Judas",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Judas"
  };
  var _227 = {
    link: "",
    name: "Soul of&#160;???",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted&#160;???"
  };
  var _237 = {
    link: "",
    name: "Soul of Eve",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Eve"
  };
  var _247 = {
    link: "",
    name: "Soul of Samson",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Samson"
  };
  var _257 = {
    link: "",
    name: "Soul of Azazel",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Azazel"
  };
  var _267 = {
    link: "",
    name: "Soul of Lazarus",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Lazarus"
  };
  var _277 = {
    link: "",
    name: "Soul of Eden",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Eden"
  };
  var _287 = {
    link: "",
    name: "Soul of the Lost",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Lost"
  };
  var _297 = {
    link: "",
    name: "Soul of Lilith",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Lilith"
  };
  var _306 = {
    link: "",
    name: "Soul of the Keeper",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Keeper"
  };
  var _316 = {
    link: "",
    name: "Soul of Apollyon",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Apollyon"
  };
  var _327 = {
    link: "",
    name: "Soul of the Forgotten",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Forgotten"
  };
  var _337 = {
    link: "",
    name: "Soul of Bethany",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Bethany"
  };
  var _347 = {
    link: "",
    name: "Soul of Jacob and Esau",
    inGameDescription: "???",
    unlockDescription: "Defeat Hush and Boss Rush as Tainted Jacob"
  };
  var _357 = {
    link: "",
    name: "A Strange Door",
    inGameDescription: "Where could it lead to?",
    unlockDescription: "Defeat Mother"
  };
  var _367 = {
    link: "",
    name: "Death Certificate",
    inGameDescription: "...",
    unlockDescription: "Earn all Hard mode Completion Marks for all characters, including tainted ones"
  };
  var _377 = {
    link: "",
    name: "Dead God",
    inGameDescription: "",
    unlockDescription: "Unlock all the other achievements and collect every item in the game"
  };
  var achievements_default = {
    NEW_ACHIEVEMENT,
    "1": _,
    "2": _2,
    "3": _3,
    "4": _4,
    "5": _5,
    "6": _6,
    "7": _7,
    "8": _8,
    "9": _9,
    "10": _0,
    "11": _1,
    "12": _22,
    "13": _32,
    "14": _42,
    "15": _52,
    "16": _62,
    "17": _72,
    "18": _82,
    "19": _92,
    "20": _02,
    "21": _12,
    "22": _23,
    "23": _33,
    "24": _43,
    "25": _53,
    "26": _63,
    "27": _73,
    "28": _83,
    "29": _93,
    "30": _03,
    "31": _13,
    "32": _24,
    "33": _34,
    "34": _44,
    "35": _54,
    "36": _64,
    "37": _74,
    "38": _84,
    "39": _94,
    "40": _04,
    "41": _14,
    "42": _25,
    "43": _35,
    "44": _45,
    "45": _55,
    "46": _65,
    "47": _75,
    "48": _85,
    "49": _95,
    "50": _05,
    "51": _15,
    "52": _26,
    "53": _36,
    "54": _46,
    "55": _56,
    "56": _66,
    "57": _76,
    "58": _86,
    "59": _96,
    "60": _06,
    "61": _16,
    "62": _27,
    "63": _37,
    "64": _47,
    "65": _57,
    "66": _67,
    "67": _77,
    "68": _87,
    "69": _97,
    "70": _07,
    "71": _17,
    "72": _28,
    "73": _38,
    "74": _48,
    "75": _58,
    "76": _68,
    "77": _78,
    "78": _88,
    "79": _98,
    "80": _08,
    "81": _18,
    "82": _29,
    "83": _39,
    "84": _49,
    "85": _59,
    "86": _69,
    "87": _79,
    "88": _89,
    "89": _99,
    "90": _09,
    "91": _19,
    "92": _210,
    "93": _310,
    "94": _410,
    "95": _510,
    "96": _610,
    "97": _710,
    "98": _810,
    "99": _910,
    "100": _00,
    "101": _01,
    "102": _022,
    "103": _032,
    "104": _042,
    "105": _052,
    "106": _062,
    "107": _072,
    "108": _082,
    "109": _092,
    "110": _10,
    "111": _11,
    "112": _122,
    "113": _132,
    "114": _142,
    "115": _152,
    "116": _162,
    "117": _172,
    "118": _182,
    "119": _192,
    "120": _20,
    "121": _21,
    "122": _222,
    "123": _232,
    "124": _242,
    "125": _252,
    "126": _262,
    "127": _272,
    "128": _282,
    "129": _292,
    "130": _30,
    "131": _31,
    "132": _322,
    "133": _332,
    "134": _342,
    "135": _352,
    "136": _362,
    "137": _372,
    "138": _382,
    "139": _392,
    "140": _40,
    "141": _41,
    "142": _422,
    "143": _432,
    "144": _442,
    "145": _452,
    "146": _462,
    "147": _472,
    "148": _482,
    "149": _492,
    "150": _50,
    "151": _51,
    "152": _522,
    "153": _532,
    "154": _542,
    "155": _552,
    "156": _562,
    "157": _572,
    "158": _582,
    "159": _592,
    "160": _60,
    "161": _61,
    "162": _622,
    "163": _632,
    "164": _642,
    "165": _652,
    "166": _662,
    "167": _672,
    "168": _682,
    "169": _692,
    "170": _70,
    "171": _71,
    "172": _722,
    "173": _732,
    "174": _742,
    "175": _752,
    "176": _762,
    "177": _772,
    "178": _782,
    "179": _792,
    "180": _80,
    "181": _81,
    "182": _822,
    "183": _832,
    "184": _842,
    "185": _852,
    "186": _862,
    "187": _872,
    "188": _882,
    "189": _892,
    "190": _90,
    "191": _91,
    "192": _922,
    "193": _932,
    "194": _942,
    "195": _952,
    "196": _962,
    "197": _972,
    "198": _982,
    "199": _992,
    "200": _002,
    "201": _012,
    "202": _023,
    "203": _033,
    "204": _043,
    "205": _053,
    "206": _063,
    "207": _073,
    "208": _083,
    "209": _093,
    "210": _102,
    "211": _112,
    "212": _123,
    "213": _133,
    "214": _143,
    "215": _153,
    "216": _163,
    "217": _173,
    "218": _183,
    "219": _193,
    "220": _202,
    "221": _212,
    "222": _223,
    "223": _233,
    "224": _243,
    "225": _253,
    "226": _263,
    "227": _273,
    "228": _283,
    "229": _293,
    "230": _302,
    "231": _312,
    "232": _323,
    "233": _333,
    "234": _343,
    "235": _353,
    "236": _363,
    "237": _373,
    "238": _383,
    "239": _393,
    "240": _402,
    "241": _412,
    "242": _423,
    "243": _433,
    "244": _443,
    "245": _453,
    "246": _463,
    "247": _473,
    "248": _483,
    "249": _493,
    "250": _502,
    "251": _512,
    "252": _523,
    "253": _533,
    "254": _543,
    "255": _553,
    "256": _563,
    "257": _573,
    "258": _583,
    "259": _593,
    "260": _602,
    "261": _612,
    "262": _623,
    "263": _633,
    "264": _643,
    "265": _653,
    "266": _663,
    "267": _673,
    "268": _683,
    "269": _693,
    "270": _702,
    "271": _712,
    "272": _723,
    "273": _733,
    "274": _743,
    "275": _753,
    "276": _763,
    "277": _773,
    "278": _783,
    "279": _793,
    "280": _802,
    "281": _812,
    "282": _823,
    "283": _833,
    "284": _843,
    "285": _853,
    "286": _863,
    "287": _873,
    "288": _883,
    "289": _893,
    "290": _902,
    "291": _912,
    "292": _923,
    "293": _933,
    "294": _943,
    "295": _953,
    "296": _963,
    "297": _973,
    "298": _983,
    "299": _993,
    "300": _003,
    "301": _013,
    "302": _024,
    "303": _034,
    "304": _044,
    "305": _054,
    "306": _064,
    "307": _074,
    "308": _084,
    "309": _094,
    "310": _103,
    "311": _113,
    "312": _124,
    "313": _134,
    "314": _144,
    "315": _154,
    "316": _164,
    "317": _174,
    "318": _184,
    "319": _194,
    "320": _203,
    "321": _213,
    "322": _224,
    "323": _234,
    "324": _244,
    "325": _254,
    "326": _264,
    "327": _274,
    "328": _284,
    "329": _294,
    "330": _303,
    "331": _313,
    "332": _324,
    "333": _334,
    "334": _344,
    "335": _354,
    "336": _364,
    "337": _374,
    "338": _384,
    "339": _394,
    "340": _403,
    "341": _413,
    "342": _424,
    "343": _434,
    "344": _444,
    "345": _454,
    "346": _464,
    "347": _474,
    "348": _484,
    "349": _494,
    "350": _503,
    "351": _513,
    "352": _524,
    "353": _534,
    "354": _544,
    "355": _554,
    "356": _564,
    "357": _574,
    "358": _584,
    "359": _594,
    "360": _603,
    "361": _613,
    "362": _624,
    "363": _634,
    "364": _644,
    "365": _654,
    "366": _664,
    "367": _674,
    "368": _684,
    "369": _694,
    "370": _703,
    "371": _713,
    "372": _724,
    "373": _734,
    "374": _744,
    "375": _754,
    "376": _764,
    "377": _774,
    "378": _784,
    "379": _794,
    "380": _803,
    "381": _813,
    "382": _824,
    "383": _834,
    "384": _844,
    "385": _854,
    "386": _864,
    "387": _874,
    "388": _884,
    "389": _894,
    "390": _903,
    "391": _913,
    "392": _924,
    "393": _934,
    "394": _944,
    "395": _954,
    "396": _964,
    "397": _974,
    "398": _984,
    "399": _994,
    "400": _004,
    "401": _014,
    "402": _025,
    "403": _035,
    "404": _045,
    "405": _055,
    "406": _065,
    "407": _075,
    "408": _085,
    "409": _095,
    "410": _104,
    "411": _114,
    "412": _125,
    "413": _135,
    "414": _145,
    "415": _155,
    "416": _165,
    "417": _175,
    "418": _185,
    "419": _195,
    "420": _204,
    "421": _214,
    "422": _225,
    "423": _235,
    "424": _245,
    "425": _255,
    "426": _265,
    "427": _275,
    "428": _285,
    "429": _295,
    "430": _304,
    "431": _314,
    "432": _325,
    "433": _335,
    "434": _345,
    "435": _355,
    "436": _365,
    "437": _375,
    "438": _385,
    "439": _395,
    "440": _404,
    "441": _414,
    "442": _425,
    "443": _435,
    "444": _445,
    "445": _455,
    "446": _465,
    "447": _475,
    "448": _485,
    "449": _495,
    "450": _504,
    "451": _514,
    "452": _525,
    "453": _535,
    "454": _545,
    "455": _555,
    "456": _565,
    "457": _575,
    "458": _585,
    "459": _595,
    "460": _604,
    "461": _614,
    "462": _625,
    "463": _635,
    "464": _645,
    "465": _655,
    "466": _665,
    "467": _675,
    "468": _685,
    "469": _695,
    "470": _704,
    "471": _714,
    "472": _725,
    "473": _735,
    "474": _745,
    "475": _755,
    "476": _765,
    "477": _775,
    "478": _785,
    "479": _795,
    "480": _804,
    "481": _814,
    "482": _825,
    "483": _835,
    "484": _845,
    "485": _855,
    "486": _865,
    "487": _875,
    "488": _885,
    "489": _895,
    "490": _904,
    "491": _914,
    "492": _925,
    "493": _935,
    "494": _945,
    "495": _955,
    "496": _965,
    "497": _975,
    "498": _985,
    "499": _995,
    "500": _005,
    "501": _015,
    "502": _026,
    "503": _036,
    "504": _046,
    "505": _056,
    "506": _066,
    "507": _076,
    "508": _086,
    "509": _096,
    "510": _105,
    "511": _115,
    "512": _126,
    "513": _136,
    "514": _146,
    "515": _156,
    "516": _166,
    "517": _176,
    "518": _186,
    "519": _196,
    "520": _205,
    "521": _215,
    "522": _226,
    "523": _236,
    "524": _246,
    "525": _256,
    "526": _266,
    "527": _276,
    "528": _286,
    "529": _296,
    "530": _305,
    "531": _315,
    "532": _326,
    "533": _336,
    "534": _346,
    "535": _356,
    "536": _366,
    "537": _376,
    "538": _386,
    "539": _396,
    "540": _405,
    "541": _415,
    "542": _426,
    "543": _436,
    "544": _446,
    "545": _456,
    "546": _466,
    "547": _476,
    "548": _486,
    "549": _496,
    "550": _505,
    "551": _515,
    "552": _526,
    "553": _536,
    "554": _546,
    "555": _556,
    "556": _566,
    "557": _576,
    "558": _586,
    "559": _596,
    "560": _605,
    "561": _615,
    "562": _626,
    "563": _636,
    "564": _646,
    "565": _656,
    "566": _666,
    "567": _676,
    "568": _686,
    "569": _696,
    "570": _705,
    "571": _715,
    "572": _726,
    "573": _736,
    "574": _746,
    "575": _756,
    "576": _766,
    "577": _776,
    "578": _786,
    "579": _796,
    "580": _805,
    "581": _815,
    "582": _826,
    "583": _836,
    "584": _846,
    "585": _856,
    "586": _866,
    "587": _876,
    "588": _886,
    "589": _896,
    "590": _905,
    "591": _915,
    "592": _926,
    "593": _936,
    "594": _946,
    "595": _956,
    "596": _966,
    "597": _976,
    "598": _986,
    "599": _996,
    "600": _006,
    "601": _016,
    "602": _027,
    "603": _037,
    "604": _047,
    "605": _057,
    "606": _067,
    "607": _077,
    "608": _087,
    "609": _097,
    "610": _106,
    "611": _116,
    "612": _127,
    "613": _137,
    "614": _147,
    "615": _157,
    "616": _167,
    "617": _177,
    "618": _187,
    "619": _197,
    "620": _206,
    "621": _216,
    "622": _227,
    "623": _237,
    "624": _247,
    "625": _257,
    "626": _267,
    "627": _277,
    "628": _287,
    "629": _297,
    "630": _306,
    "631": _316,
    "632": _327,
    "633": _337,
    "634": _347,
    "635": _357,
    "636": _367,
    "637": _377
  };

  // src/data/easterEggs.json
  var easterEggs_exports = {};
  __export(easterEggs_exports, {
    "1": () => _121,
    "10": () => _017,
    "11": () => _110,
    "12": () => _220,
    "13": () => _321,
    "14": () => _418,
    "15": () => _519,
    "16": () => _611,
    "17": () => _720,
    "18": () => _820,
    "19": () => _917,
    "2": () => _128,
    "20": () => _019,
    "21": () => _119,
    "23": () => _320,
    "24": () => _411,
    "25": () => _511,
    "26": () => _618,
    "27": () => _718,
    "28": () => _818,
    "29": () => _916,
    "3": () => _100,
    "30": () => _018,
    "32": () => _217,
    "33": () => _311,
    "35": () => _520,
    "36": () => _621,
    "37": () => _719,
    "38": () => _819,
    "4": () => _101,
    "41": () => _129,
    "42": () => _221,
    "43": () => _328,
    "44": () => _420,
    "46": () => _620,
    "47": () => _717,
    "48": () => _817,
    "5": () => _107,
    "52": () => _219,
    "53": () => _319,
    "54": () => _419,
    "55": () => _516,
    "56": () => _616,
    "57": () => _711,
    "58": () => _811,
    "59": () => _911,
    "6": () => _108,
    "60": () => _010,
    "61": () => _117,
    "62": () => _218,
    "63": () => _318,
    "64": () => _416,
    "65": () => _517,
    "66": () => _617,
    "67": () => _716,
    "68": () => _816,
    "7": () => _120,
    "70": () => _011,
    "71": () => _111,
    "72": () => _211,
    "73": () => _317,
    "74": () => _417,
    "75": () => _518,
    "76": () => _619,
    "77": () => _721,
    "78": () => _821,
    "8": () => _109,
    "9": () => _118,
    default: () => easterEggs_default
  });
  var _611 = {
    seed: "BASEMENT",
    inGameDescription: "Infinite basements",
    effectsDescription: "The Basement repeats infinitely."
  };
  var _110 = {
    seed: "KEEPAWAY",
    inGameDescription: "Tricky pickups",
    effectsDescription: "Pickups mimic Isaac's movements."
  };
  var _211 = {
    seed: "G0NES00N",
    inGameDescription: "Pickups time out",
    effectsDescription: "Pickups quickly fade. This includes pedestal items, shop purchases, devil deals, and the Cathedral/Sheol boss chest."
  };
  var _311 = {
    seed: "FREE2PAY",
    inGameDescription: "F2P version",
    effectsDescription: "Isaac starts with 69 coins, but all items and consumables must be bought."
  };
  var _511 = {
    seed: "PAC1F1SM",
    inGameDescription: "Pacifism",
    effectsDescription: "Enemies do not take damage. All rooms are considered cleared upon entering them; doors stay open, room rewards spawn, Stonies instantly die. When in a boss room, the boss's health bar is used as a timer and slowly ticks down. At the end of the countdown, the trapdoor to the next floor appears."
  };
  var _217 = {
    seed: "C0MEBACK",
    inGameDescription: "Enemies respawn",
    effectsDescription: "Enemies, including bosses, respawn once Isaac leaves the room. Completing a room multiple times does not yield additional pickups."
  };
  var _111 = {
    seed: "N0RETVRN",
    inGameDescription: "Point of no return",
    effectsDescription: "Boss rooms lock Isaac in, similar to the Mom fight."
  };
  var _411 = {
    seed: "BRWNSNKE",
    inGameDescription: "Poopy trail",
    effectsDescription: "Isaac leaves a trail of poop behind him as he walks."
  };
  var _317 = {
    seed: "ALM1GHTY",
    inGameDescription: "Dog mode",
    effectsDescription: "Isaac is invincible."
  };
  var _516 = {
    seed: "K1DSM0DE",
    inGameDescription: "Kids' co-op mode",
    effectsDescription: "Makes co-op babies invincible."
  };
  var _616 = {
    seed: "DARKNESS",
    inGameDescription: "Permanent darkness",
    effectsDescription: "Permanent Curse of Darkness."
  };
  var _711 = {
    seed: "LABYRNTH",
    inGameDescription: "Inescapable labyrinth",
    effectsDescription: "Permanent Curse of the Labyrinth."
  };
  var _811 = {
    seed: "L0ST",
    inGameDescription: "Hopelessly lost",
    effectsDescription: "Permanent Curse of the Lost."
  };
  var _911 = {
    seed: "VNKN0WN",
    inGameDescription: "Forever unknown",
    effectsDescription: "Permanent Curse of the Unknown."
  };
  var _010 = {
    seed: "MAZE",
    inGameDescription: "Unending maze",
    effectsDescription: "Permanent Curse of the Maze."
  };
  var _117 = {
    seed: "BL1ND",
    inGameDescription: "Incurable blindness",
    effectsDescription: "Permanent Curse of the Blind."
  };
  var _218 = {
    seed: "CVRSED",
    inGameDescription: "Horrible curse",
    effectsDescription: "Permanent Curse of the Cursed."
  };
  var _318 = {
    seed: "N1TEL1TE",
    inGameDescription: "Illuminate darkness",
    effectsDescription: "Provides immunity to Curse of Darkness."
  };
  var _416 = {
    seed: "THREAD",
    inGameDescription: "Escape the labyrinth",
    effectsDescription: "Provides immunity to Curse of the Labyrinth."
  };
  var _517 = {
    seed: "F0VND",
    inGameDescription: "I once was lost",
    effectsDescription: "Provides immunity to Curse of the Lost."
  };
  var _617 = {
    seed: "N0W1KN0W",
    inGameDescription: "Know the unknown",
    effectsDescription: "Provides immunity to Curse of the Unknown."
  };
  var _716 = {
    seed: "PATHF1ND",
    inGameDescription: "Stay out of the maze",
    effectsDescription: "Provides immunity to Curse of the Maze."
  };
  var _816 = {
    seed: "BRA1LLE",
    inGameDescription: "Heal the blind",
    effectsDescription: "Provides immunity to Curse of the Blind."
  };
  var _011 = {
    seed: "BLCKCNDL",
    inGameDescription: "Total curse immunity",
    effectsDescription: "Provides immunity to all curses."
  };
  var _717 = {
    seed: "HARDHARD",
    inGameDescription: "Full heart damage",
    effectsDescription: "Isaac takes a full heart of damage from all sources."
  };
  var _817 = {
    seed: "BRTLB0NS",
    inGameDescription: "Twelve heart damage",
    effectsDescription: "Isaac takes twelve hearts of damage from all sources."
  };
  var _618 = {
    seed: "D0NTST0P",
    inGameDescription: "Don't stop moving",
    effectsDescription: "Isaac takes damage if he stops moving."
  };
  var _718 = {
    seed: "THEGH0ST",
    inGameDescription: "Damage on a timer",
    effectsDescription: "Every 45 seconds, a ticking will begin, and after 5 seconds, Isaac will take 1/2 heart of damage. Damage increases to 1 heart in Chapter 4 and beyond. Having invincibility during the time when damage should be inflicted blocks the damage."
  };
  var _818 = {
    seed: "30M1N1TS",
    inGameDescription: "30 minute limit",
    effectsDescription: "Gives a time limit of 30 minutes to beat the game. When the timer hits 29:45, a timer starts ticking, and after 30:00, Isaac takes damage every second."
  };
  var _219 = {
    seed: "1CESKATE",
    inGameDescription: "Ice physics",
    effectsDescription: "Makes the ground slippery."
  };
  var _417 = {
    seed: "BRAVERY",
    inGameDescription: "Bravery",
    effectsDescription: "Isaac automatically fires tears in the same direction that he moves. Removes the ability to fire tears manually."
  };
  var _518 = {
    seed: "C0WRD1CE",
    inGameDescription: "Cowardice",
    effectsDescription: "Isaac automatically fires tears in the opposite direction that he moves. Removes the ability to fire tears manually."
  };
  var _220 = {
    seed: "DRAWKCAB",
    inGameDescription: "Reversed controls",
    effectsDescription: "All movement and firing keys are reversed."
  };
  var _619 = {
    seed: "AX1SALGN",
    inGameDescription: "Axis aligned controls",
    effectsDescription: "Isaac cannot move diagonally."
  };
  var _100 = {
    seed: "CAM0K1DD",
    inGameDescription: "Camouflage player",
    effectsDescription: "Isaac blends into the ground."
  };
  var _101 = {
    seed: "CAM0F0ES",
    inGameDescription: "Camouflage enemies",
    effectsDescription: "All enemies blend into the ground."
  };
  var _107 = {
    seed: "CAM0DR0P",
    inGameDescription: "Camouflage stuff",
    effectsDescription: "Pickups and items blend into the ground."
  };
  var _108 = {
    seed: "WH0AWHAT",
    inGameDescription: "Camouflage EVERYTHING!",
    effectsDescription: "Isaac, enemies, pickups, and items all blend into the ground."
  };
  var _418 = {
    seed: "1MN0B0DY",
    inGameDescription: "Invisible player",
    effectsDescription: "Isaac becomes completely invisible."
  };
  var _519 = {
    seed: "BL1NDEYE",
    inGameDescription: "Invisible enemies",
    effectsDescription: "All enemies become completely invisible."
  };
  var _620 = {
    seed: "THEBLANK",
    inGameDescription: "The blank",
    effectsDescription: "Isaac has no face."
  };
  var _319 = {
    seed: "KAPPA",
    inGameDescription: "Grayscale",
    effectsDescription: "Isaac turns gray."
  };
  var _419 = {
    seed: "H0H0H0H0",
    inGameDescription: "Christmas",
    effectsDescription: "Isaac wears a Christmas hat."
  };
  var _520 = {
    seed: "T0PHEAVY",
    inGameDescription: "Big head mode",
    effectsDescription: "Isaac's head is large."
  };
  var _621 = {
    seed: "T1NYD0ME",
    inGameDescription: "Tiny head mode",
    effectsDescription: "Isaac's head is small."
  };
  var _719 = {
    seed: "PTCHBLCK",
    inGameDescription: "Black body",
    effectsDescription: "Isaac and his tears turn completely black."
  };
  var _819 = {
    seed: "TEARGL0W",
    inGameDescription: "Glowing tears",
    effectsDescription: "Isaac's tears glow."
  };
  var _320 = {
    seed: "BL0000DY",
    inGameDescription: "Extra gore",
    effectsDescription: "Makes a lot more blood appear after enemies die."
  };
  var _109 = {
    seed: "B00BT00B",
    inGameDescription: "Cathode rays!",
    effectsDescription: "Applies a filter that makes the game look like it's being played through a cathode ray tube."
  };
  var _118 = {
    seed: "DYSLEX1A",
    inGameDescription: "Dyslexia",
    effectsDescription: "All in-game text is rearranged."
  };
  var _017 = {
    seed: "KEEPTRAK",
    inGameDescription: "No HUD",
    effectsDescription: "Removes the HUD entirely. This affects the map, health, consumables, held items, pickup text, floor names, and more."
  };
  var _916 = {
    seed: "MED1C1NE",
    inGameDescription: "Mystery pills",
    effectsDescription: "All pill names and descriptions show&#160;???."
  };
  var _018 = {
    seed: "FACED0WN",
    inGameDescription: "Mystery cards",
    effectsDescription: "All card names and descriptions show&#160;???."
  };
  var _321 = {
    seed: "CHAMP10N",
    inGameDescription: "Champion enemies",
    effectsDescription: "All enemies turn into champions if possible."
  };
  var _720 = {
    seed: "C0CKFGHT",
    inGameDescription: "Charmed enemies",
    effectsDescription: "All enemies are permanently charmed."
  };
  var _820 = {
    seed: "C0NFETT1",
    inGameDescription: "Confused enemies",
    effectsDescription: "All enemies are permanently confused."
  };
  var _917 = {
    seed: "FEARM1NT",
    inGameDescription: "Scaredy enemies",
    effectsDescription: "All enemies are permanently scared."
  };
  var _019 = {
    seed: "FRA1DN0T",
    inGameDescription: "Skittish enemies",
    effectsDescription: "Every few seconds, all enemies become scared."
  };
  var _119 = {
    seed: "CLSTRPH0",
    inGameDescription: "Asocial enemies",
    effectsDescription: "All enemies are permanently charmed and scared."
  };
  var _120 = {
    seed: "FARTSNDS",
    inGameDescription: "Farty sounds",
    effectsDescription: "All sound effects are replaced with farts."
  };
  var _121 = {
    seed: "SL0W4ME2",
    inGameDescription: "Movement tempo",
    effectsDescription: "Music speed is affected by Isaac's walking speed."
  };
  var _128 = {
    seed: "HARTBEAT",
    inGameDescription: "Health tempo",
    effectsDescription: "The lower Isaac's health is, the slower the music is."
  };
  var _129 = {
    seed: "ANDANTE",
    inGameDescription: "Downtempo",
    effectsDescription: "Music is slowed down."
  };
  var _221 = {
    seed: "LARGHET0",
    inGameDescription: "Downtempo--",
    effectsDescription: "Music is significantly slowed down."
  };
  var _328 = {
    seed: "ALLEGR0",
    inGameDescription: "Uptempo",
    effectsDescription: "Music is sped up."
  };
  var _420 = {
    seed: "PREST0",
    inGameDescription: "Uptempo++",
    effectsDescription: "Music is significantly sped up."
  };
  var _721 = {
    seed: "SVPERH0T",
    inGameDescription: "SuperHot",
    effectsDescription: "While Isaac is not moving, time runs extremely slowly. Isaac's speed and fire rate remain normal at all times."
  };
  var _821 = {
    seed: "M0DESEVN",
    inGameDescription: "Retro vision",
    effectsDescription: "Screen has a permanent Retro-Vision effect."
  };
  var easterEggs_default = {
    "16": _611,
    "11": _110,
    "72": _211,
    "33": _311,
    "25": _511,
    "32": _217,
    "71": _111,
    "24": _411,
    "73": _317,
    "55": _516,
    "56": _616,
    "57": _711,
    "58": _811,
    "59": _911,
    "60": _010,
    "61": _117,
    "62": _218,
    "63": _318,
    "64": _416,
    "65": _517,
    "66": _617,
    "67": _716,
    "68": _816,
    "70": _011,
    "47": _717,
    "48": _817,
    "26": _618,
    "27": _718,
    "28": _818,
    "52": _219,
    "74": _417,
    "75": _518,
    "12": _220,
    "76": _619,
    "3": _100,
    "4": _101,
    "5": _107,
    "6": _108,
    "14": _418,
    "15": _519,
    "46": _620,
    "53": _319,
    "54": _419,
    "35": _520,
    "36": _621,
    "37": _719,
    "38": _819,
    "23": _320,
    "8": _109,
    "9": _118,
    "10": _017,
    "29": _916,
    "30": _018,
    "13": _321,
    "17": _720,
    "18": _820,
    "19": _917,
    "20": _019,
    "21": _119,
    "7": _120,
    "1": _121,
    "2": _128,
    "41": _129,
    "42": _221,
    "43": _328,
    "44": _420,
    "77": _721,
    "78": _821
  };

  // src/data/itempools.json
  var ItemPools = {
    Pool: [
      {
        Item: [
          {
            _Id: "1",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "2",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "3",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "4",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "5",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "6",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "7",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "8",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "10",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "12",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "13",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "14",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "15",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "17",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "19",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "36",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "37",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "38",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "39",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "40",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "41",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "42",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "44",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "45",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "46",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "47",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "48",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "49",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "52",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "53",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "55",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "56",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "57",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "58",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "62",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "65",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "66",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "67",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "68",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "69",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "71",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "72",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "75",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "76",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "77",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "78",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "85",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "86",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "87",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "88",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "89",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "91",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "92",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "93",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "94",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "95",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "96",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "97",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "98",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "99",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "100",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "101",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "102",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "103",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "104",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "105",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "106",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "107",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "108",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "109",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "110",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "111",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "113",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "114",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "115",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "117",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "120",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "121",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "123",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "124",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "125",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "127",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "128",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "129",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "131",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "136",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "137",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "138",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "140",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "142",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "143",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "144",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "146",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "148",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "149",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "150",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "151",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "152",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "153",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "154",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "155",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "157",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "160",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "161",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "162",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "163",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "166",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "167",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "169",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "170",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "171",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "172",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "173",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "174",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "175",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "176",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "178",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "180",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "186",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "188",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "189",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "190",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "191",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "192",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "200",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "201",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "202",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "206",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "209",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "210",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "211",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "213",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "214",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "217",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "220",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "221",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "222",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "223",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "224",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "225",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "227",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "228",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "229",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "231",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "233",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "234",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "236",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "237",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "240",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "242",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "244",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "245",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "256",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "257",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "261",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "264",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "265",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "266",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "267",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "268",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "269",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "270",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "271",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "272",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "273",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "274",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "275",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "276",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "277",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "278",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "279",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "280",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "281",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "282",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "283",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "284",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "285",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "287",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "288",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "291",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "292",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "294",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "295",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "298",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "299",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "300",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "301",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "302",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "303",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "304",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "305",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "306",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "307",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "308",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "309",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "310",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "312",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "313",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "314",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "315",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "316",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "317",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "318",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "319",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "320",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "321",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "322",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "323",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "324",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "325",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "329",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "330",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "332",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "333",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "334",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "335",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "336",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "350",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "351",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "352",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "353",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "358",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "359",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "361",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "362",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "364",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "365",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "366",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "367",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "368",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "369",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "371",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "373",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "374",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "375",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "377",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "378",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "379",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "381",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "382",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "384",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "385",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "386",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "388",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "389",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "390",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "391",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "392",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "393",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "394",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "395",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "397",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "398",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "401",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "404",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "405",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "406",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "407",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "410",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "411",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "418",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "419",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "421",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "422",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "426",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "427",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "430",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "431",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "432",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "435",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "436",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "437",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "440",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "443",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "444",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "445",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "446",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "447",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "448",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "449",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "452",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "453",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "454",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "457",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "458",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "459",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "460",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "461",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "463",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "465",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "466",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "467",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "469",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "470",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "471",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "473",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "476",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "478",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "481",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "482",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "485",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "488",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "491",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "492",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "493",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "494",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "495",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "496",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "497",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "502",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "504",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "506",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "507",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "508",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "509",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "511",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "512",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "513",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "516",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "517",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "522",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "524",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "525",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "529",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "531",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "532",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "537",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "539",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "540",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "542",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "543",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "544",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "545",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "548",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "549",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "553",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "555",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "557",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "558",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "559",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "560",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "561",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "563",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "565",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "570",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "575",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "576",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "578",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "581",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "583",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "605",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "607",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "608",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "609",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "610",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "611",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "612",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "614",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "615",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "616",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "617",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "618",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "625",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "629",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "631",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "635",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "637",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "639",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "641",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "645",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "649",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "650",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "652",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "655",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "657",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "658",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "661",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "663",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "671",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "675",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "676",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "677",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "678",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "680",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "681",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "682",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "683",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "687",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "690",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "693",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "695",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "703",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "709",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "710",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "713",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "717",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "720",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "722",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "723",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "724",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "725",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "726",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "727",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "728",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "729",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "treasure"
      },
      {
        Item: [
          {
            _Id: "21",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "33",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "54",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "60",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "63",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "64",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "75",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "85",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "102",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "116",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "137",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "139",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "147",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "156",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "164",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "177",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "195",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "199",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "203",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "204",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "205",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "208",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "227",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "232",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "246",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "247",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "248",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "249",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "250",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "251",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "252",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "260",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "286",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "289",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "290",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "295",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "296",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "297",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "337",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "338",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "347",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "348",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "349",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "356",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "357",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "372",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "376",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "380",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "383",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "396",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "402",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "403",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "414",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "416",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "422",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "424",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "425",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "434",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "439",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "451",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "472",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "475",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "479",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "480",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "483",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "485",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "486",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "487",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "505",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "514",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "515",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "518",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "520",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "521",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "523",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "527",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "534",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "535",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "566",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "585",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "599",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "602",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "603",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "604",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "619",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "621",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "623",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "624",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "638",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "642",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "647",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "660",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "670",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "716",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "719",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          }
        ],
        _Name: "shop"
      },
      {
        Item: [
          {
            _Id: "14",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "22",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "23",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "24",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "25",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "26",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "27",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "28",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "29",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "30",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "31",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "32",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "51",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "70",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "92",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "141",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "143",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "165",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "176",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "183",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "193",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "194",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "195",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "196",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "197",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "198",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "218",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "219",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "240",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "253",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "254",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "255",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "339",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "340",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "341",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "342",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "343",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "344",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "345",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "346",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "354",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "355",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "370",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "428",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "438",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "455",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "456",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "538",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "541",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "547",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "564",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "600",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "624",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "644",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "659",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "707",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "708",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "730",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "731",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "boss"
      },
      {
        Item: [
          {
            _Id: "8",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "34",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "35",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "51",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "67",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "74",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "79",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "80",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "81",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "82",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "83",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "84",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "97",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "109",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "113",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "114",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "115",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "118",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "122",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "123",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "126",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "127",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "133",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "134",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "145",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "157",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "159",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "163",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "172",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "187",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "212",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "215",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "216",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "225",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "230",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "237",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "241",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "259",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "262",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "268",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "269",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "275",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "278",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "292",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "311",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "360",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "391",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "399",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "408",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "409",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "411",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "412",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "417",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "420",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "431",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "433",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "441",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "442",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "462",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "468",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "475",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "477",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "498",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "519",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "526",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "530",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "536",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "545",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "554",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "556",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "569",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "572",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "577",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "606",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "634",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "646",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "654",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "665",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "672",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "679",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "684",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "692",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "694",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "695",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "698",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "699",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "702",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "704",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "705",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "706",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "712",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "728",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "devil"
      },
      {
        Item: [
          {
            _Id: "7",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "33",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "72",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "98",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "101",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "108",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "112",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "124",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "142",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "146",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "156",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "162",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "173",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "178",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "182",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "184",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "185",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "243",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "313",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "326",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "331",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "332",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "333",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "334",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "335",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "363",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "374",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "387",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "390",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "400",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "413",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "415",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "423",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "464",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "477",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "490",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "498",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "499",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "510",
            _Weight: "0.4",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.04"
          },
          {
            _Id: "519",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "526",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "528",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "533",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "543",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "567",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "568",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "573",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "574",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "579",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "584",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "586",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "601",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "622",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "634",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "640",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "643",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "651",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "653",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "685",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "686",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "691",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "696",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "angel"
      },
      {
        Item: [
          {
            _Id: "11",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "16",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "17",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "20",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "35",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "84",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "120",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "121",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "127",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "168",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "190",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "213",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "226",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "242",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "258",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "262",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "263",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "271",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "286",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "287",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "316",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "321",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "348",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "388",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "389",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "402",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "405",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "424",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "450",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "489",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "500",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "501",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "546",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "562",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "571",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "580",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "582",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "609",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "612",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "625",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "628",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "632",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "636",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "664",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "667",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "669",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "674",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "675",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "677",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "688",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "689",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "691",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "697",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "700",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "701",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "703",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "711",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "716",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "717",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "719",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "721",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "723",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "secret"
      },
      {
        Item: [
          {
            _Id: "33",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "34",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "35",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "58",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "65",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "78",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "97",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "123",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "192",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "282",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "287",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "292",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "545",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "584",
            _Weight: "0.2",
            _DecreaseBy: "0.02",
            _RemoveOn: "0.02"
          },
          {
            _Id: "712",
            _Weight: "0.2",
            _DecreaseBy: "0.02",
            _RemoveOn: "0.02"
          }
        ],
        _Name: "library"
      },
      {
        Item: [
          {
            _Id: "9",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "36",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "209",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "378",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "504",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "576",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "shellGame"
      },
      {
        Item: [
          {
            _Id: "28",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "29",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "32",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "74",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "179",
            _Weight: "0.5",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.05"
          },
          {
            _Id: "194",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "196",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "255",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "341",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "343",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "344",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "354",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "355",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "370",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "428",
            _Weight: "0.5",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.05"
          },
          {
            _Id: "438",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "444",
            _Weight: "0.1",
            _DecreaseBy: "0.04",
            _RemoveOn: "0.01"
          },
          {
            _Id: "455",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "456",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "534",
            _Weight: "0.5",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.05"
          },
          {
            _Id: "571",
            _Weight: "0.1",
            _DecreaseBy: "0.04",
            _RemoveOn: "0.01"
          },
          {
            _Id: "644",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "708",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "730",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "732",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "goldenChest"
      },
      {
        Item: [
          {
            _Id: "81",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "133",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "134",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "140",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "145",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "212",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "297",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "316",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "371",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "475",
            _Weight: "0.1",
            _DecreaseBy: "0.04",
            _RemoveOn: "0.01"
          },
          {
            _Id: "565",
            _Weight: "0.5",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.05"
          },
          {
            _Id: "580",
            _Weight: "0.1",
            _DecreaseBy: "0.04",
            _RemoveOn: "0.01"
          },
          {
            _Id: "642",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "654",
            _Weight: "0.2",
            _DecreaseBy: "0.08",
            _RemoveOn: "0.02"
          },
          {
            _Id: "665",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "redChest"
      },
      {
        Item: [
          {
            _Id: "21",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "22",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "23",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "24",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "25",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "26",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "46",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "54",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "102",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "111",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "144",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "177",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "180",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "195",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "198",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "204",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "246",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "271",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "294",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "362",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "376",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "385",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "447",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "455",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "456",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "485",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "707",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "beggar"
      },
      {
        Item: [
          {
            _Id: "13",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "14",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "51",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "70",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "79",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "80",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "82",
            _Weight: "0.2",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.02"
          },
          {
            _Id: "83",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "87",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "102",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "122",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "126",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "127",
            _Weight: "0.5",
            _DecreaseBy: "0.25",
            _RemoveOn: "0.05"
          },
          {
            _Id: "143",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "159",
            _Weight: "0.2",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.02"
          },
          {
            _Id: "195",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "216",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "225",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "230",
            _Weight: "0.2",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.02"
          },
          {
            _Id: "240",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "241",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "259",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "262",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "278",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "340",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "345",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "409",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "420",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "475",
            _Weight: "0.2",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.02"
          },
          {
            _Id: "487",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "493",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "496",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "503",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "672",
            _Weight: "0.5",
            _DecreaseBy: "0.25",
            _RemoveOn: "0.05"
          },
          {
            _Id: "676",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "demonBeggar"
      },
      {
        Item: [
          {
            _Id: "51",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "79",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "80",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "81",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "133",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "134",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "145",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "212",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "215",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "216",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "225",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "241",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "260",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "371",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "408",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "442",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "451",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "468",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "475",
            _Weight: "0.2",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.02"
          },
          {
            _Id: "496",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "503",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "508",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "536",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "565",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "569",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "580",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "642",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "654",
            _Weight: "0.5",
            _DecreaseBy: "0.25",
            _RemoveOn: "0.05"
          },
          {
            _Id: "692",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "694",
            _Weight: "0.5",
            _DecreaseBy: "0.25",
            _RemoveOn: "0.05"
          },
          {
            _Id: "697",
            _Weight: "0.5",
            _DecreaseBy: "0.25",
            _RemoveOn: "0.05"
          },
          {
            _Id: "702",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "711",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "curse"
      },
      {
        Item: [
          {
            _Id: "10",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "57",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "128",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "175",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "199",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "264",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "272",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "279",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "320",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "343",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "364",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "365",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "388",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "426",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "430",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "492",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "527",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "580",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "581",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "629",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "649",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "693",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "keyMaster"
      },
      {
        Item: [
          {
            _Id: "63",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "116",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "205",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "356",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "372",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "494",
            _Weight: "0.1",
            _DecreaseBy: "0.05",
            _RemoveOn: "0.01"
          },
          {
            _Id: "520",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "559",
            _Weight: "0.1",
            _DecreaseBy: "0.05",
            _RemoveOn: "0.01"
          },
          {
            _Id: "603",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "647",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "batteryBum"
      },
      {
        Item: [
          {
            _Id: "29",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "30",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "31",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "39",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "41",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "55",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "102",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "110",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "114",
            _Weight: "0.1",
            _DecreaseBy: "0.05",
            _RemoveOn: "0.01"
          },
          {
            _Id: "139",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "195",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "199",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "200",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "217",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "228",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "355",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "439",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "508",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "580",
            _Weight: "0.5",
            _DecreaseBy: "0.25",
            _RemoveOn: "0.05"
          },
          {
            _Id: "732",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "momsChest"
      },
      {
        Item: [
          {
            _Id: "1",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "2",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "3",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "4",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "5",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "6",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "7",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "8",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "10",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "12",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "13",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "34",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "35",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "37",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "38",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "42",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "45",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "47",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "48",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "50",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "52",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "55",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "56",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "57",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "62",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "64",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "65",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "67",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "68",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "69",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "73",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "77",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "78",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "85",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "87",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "88",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "89",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "93",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "94",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "95",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "96",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "97",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "98",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "99",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "100",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "101",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "102",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "103",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "104",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "106",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "107",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "108",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "110",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "111",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "114",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "115",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "117",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "120",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "124",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "125",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "128",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "131",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "132",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "137",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "138",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "140",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "142",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "146",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "148",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "149",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "150",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "151",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "152",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "153",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "154",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "155",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "157",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "161",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "162",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "163",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "167",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "169",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "170",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "172",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "174",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "175",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "186",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "188",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "189",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "191",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "192",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "200",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "201",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "206",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "209",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "210",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "213",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "214",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "217",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "220",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "221",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "222",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "223",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "224",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "226",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "228",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "229",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "231",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "233",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "234",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "236",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "237",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "242",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "244",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "245",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "254",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "256",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "257",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "258",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "261",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "264",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "265",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "266",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "267",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "268",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "269",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "271",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "273",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "274",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "277",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "279",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "280",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "281",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "288",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "291",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "299",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "300",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "301",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "302",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "303",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "305",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "306",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "307",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "308",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "309",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "310",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "312",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "315",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "316",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "317",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "318",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "319",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "320",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "321",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "322",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "325",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "329",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "330",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "332",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "333",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "334",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "335",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "336",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "349",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "351",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "352",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "353",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "357",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "358",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "359",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "362",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "364",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "365",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "366",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "367",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "368",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "369",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "371",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "373",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "374",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "375",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "377",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "378",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "379",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "380",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "382",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "383",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "384",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "389",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "391",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "392",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "393",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "394",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "395",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "397",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "398",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "401",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "407",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "410",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "411",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "416",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "421",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "425",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "426",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "430",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "431",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "432",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "434",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "436",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "440",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "443",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "444",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "445",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "446",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "447",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "448",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "449",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "450",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "452",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "453",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "454",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "457",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "458",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "459",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "460",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "461",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "463",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "465",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "466",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "467",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "469",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "470",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "471",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "473",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "493",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "494",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "495",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "496",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "497",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "502",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "503",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "504",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "506",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "507",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "508",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "509",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "511",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "512",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "513",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "514",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "515",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "516",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "517",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "518",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "520",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "522",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "524",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "525",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "529",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "531",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "532",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "537",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "539",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "540",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "542",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "543",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "544",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "545",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "548",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "549",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "553",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "555",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "557",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "558",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "559",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "560",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "561",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "563",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "565",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "570",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "575",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "576",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "578",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "581",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "583",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "605",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "607",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "608",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "609",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "610",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "611",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "612",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "614",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "615",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "616",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "617",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "618",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "625",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "629",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "631",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "635",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "637",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "639",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "641",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "645",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "649",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "650",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "652",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "655",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "657",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "658",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "661",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "663",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "671",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "675",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "676",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "677",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "678",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "680",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "681",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "682",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "683",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "687",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "690",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "693",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "695",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "703",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "709",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "710",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "713",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "716",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "717",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "719",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "720",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "721",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "722",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "723",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "724",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "725",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "726",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "727",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "728",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "729",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "greedTreasure"
      },
      {
        Item: [
          {
            _Id: "12",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "14",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "15",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "16",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "22",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "23",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "24",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "25",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "26",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "27",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "28",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "29",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "30",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "31",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "32",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "70",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "71",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "73",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "101",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "120",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "132",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "143",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "176",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "183",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "193",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "194",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "195",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "196",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "197",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "198",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "199",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "240",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "253",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "254",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "255",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "314",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "339",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "340",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "341",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "342",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "343",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "344",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "345",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "346",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "354",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "355",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "370",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "428",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "438",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "455",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "456",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "538",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "541",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "547",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "564",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "600",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "624",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "644",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "659",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "707",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "708",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "730",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "731",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "greedBoss"
      },
      {
        Item: [
          {
            _Id: "11",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "46",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "63",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "73",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "75",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "76",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "84",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "91",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "105",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "116",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "139",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "156",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "166",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "204",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "208",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "246",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "247",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "248",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "251",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "252",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "260",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "283",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "284",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "285",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "286",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "289",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "297",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "348",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "356",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "372",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "380",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "386",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "402",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "403",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "405",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "406",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "416",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "434",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "439",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "451",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "472",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "475",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "476",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "477",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "478",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "481",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "482",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "483",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "485",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "486",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "487",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "488",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "489",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "500",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "505",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "512",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "515",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "516",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "518",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "527",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "534",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "535",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "566",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "585",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "603",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "604",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "619",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "621",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "623",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "624",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "636",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "638",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "647",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "667",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "674",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "688",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "689",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "691",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "692",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "700",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "701",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "703",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "711",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "721",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "722",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "723",
            _Weight: "0.1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.01"
          },
          {
            _Id: "732",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "greedShop"
      },
      {
        Item: [
          {
            _Id: "51",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "73",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "79",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "80",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "81",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "133",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "134",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "145",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "212",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "216",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "225",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "260",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "371",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "408",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "442",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "451",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "468",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "475",
            _Weight: "0.2",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.02"
          },
          {
            _Id: "496",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "503",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "508",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "536",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "565",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "569",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "642",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "654",
            _Weight: "0.5",
            _DecreaseBy: "0.25",
            _RemoveOn: "0.05"
          },
          {
            _Id: "692",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "694",
            _Weight: "0.5",
            _DecreaseBy: "0.25",
            _RemoveOn: "0.05"
          },
          {
            _Id: "702",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "711",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "greedCurse"
      },
      {
        Item: [
          {
            _Id: "34",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "35",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "51",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "67",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "68",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "73",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "74",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "79",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "80",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "81",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "82",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "83",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "97",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "109",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "113",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "114",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "115",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "117",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "118",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "122",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "123",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "132",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "133",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "134",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "145",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "157",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "159",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "172",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "187",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "212",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "216",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "225",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "230",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "237",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "259",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "268",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "269",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "270",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "292",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "311",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "360",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "391",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "399",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "408",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "409",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "411",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "412",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "420",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "431",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "433",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "441",
            _Weight: "0.2",
            _DecreaseBy: "0.2",
            _RemoveOn: "0.02"
          },
          {
            _Id: "442",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "451",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "462",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "468",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "503",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "519",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "526",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "530",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "536",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "545",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "554",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "556",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "569",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "572",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "577",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "606",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "634",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "646",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "654",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "665",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "679",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "684",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "692",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "694",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "695",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "698",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "699",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "702",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "704",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "705",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "706",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "712",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "728",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "greedDevil"
      },
      {
        Item: [
          {
            _Id: "7",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "72",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "73",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "78",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "112",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "138",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "162",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "178",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "182",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "184",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "185",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "197",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "243",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "313",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "331",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "333",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "334",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "335",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "363",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "387",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "390",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "400",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "407",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "413",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "415",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "423",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "464",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "490",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "499",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "526",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "528",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "533",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "543",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "567",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "568",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "573",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "574",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "579",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "584",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "586",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "601",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "622",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "634",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "640",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "643",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "651",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "653",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "685",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "686",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "691",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "696",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "greedAngel"
      },
      {
        Item: [
          {
            _Id: "11",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "16",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "17",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "20",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "35",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "73",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "84",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "120",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "121",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "127",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "168",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "190",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "213",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "226",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "242",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "258",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "262",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "263",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "271",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "286",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "316",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "321",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "348",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "389",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "402",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "405",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "424",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "450",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "489",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "500",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "501",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "546",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "562",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "571",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "582",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "609",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "612",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "625",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "628",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "632",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "636",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "664",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "667",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "669",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "674",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "677",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "688",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "689",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "691",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "700",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "701",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "703",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "711",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "716",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "717",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "719",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "721",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "723",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "greedSecret"
      },
      {
        Item: [
          {
            _Id: "1",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "3",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "4",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "5",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "21",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "32",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "38",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "44",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "46",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "47",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "48",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "49",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "51",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "63",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "66",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "68",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "77",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "85",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "89",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "90",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "91",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "93",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "95",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "102",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "105",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "116",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "136",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "137",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "147",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "152",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "153",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "166",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "189",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "194",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "196",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "208",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "212",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "227",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "232",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "244",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "251",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "255",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "263",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "267",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "283",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "284",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "285",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "337",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "338",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "352",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "357",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "362",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "370",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "382",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "383",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "386",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "395",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "397",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "403",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "406",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "419",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "422",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "425",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "427",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "437",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "438",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "439",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "444",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "451",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "465",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "476",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "478",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "488",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "494",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "505",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "515",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "516",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "518",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "524",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "527",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "538",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "599",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "604",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "609",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "617",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "624",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "629",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "638",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "644",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "649",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "655",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "687",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "709",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "720",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "723",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "730",
            _Weight: "1",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "craneGame"
      },
      {
        Item: [
          {
            _Id: "12",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "13",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "15",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "30",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "31",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "40",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "45",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "49",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "51",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "53",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "67",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "72",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "73",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "79",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "80",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "82",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "96",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "105",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "109",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "110",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "118",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "119",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "122",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "135",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "137",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "157",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "159",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "166",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "167",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "176",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "177",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "182",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "193",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "208",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "214",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "230",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "247",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "253",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "254",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "261",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "276",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "289",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "334",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "373",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "394",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "399",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "411",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "412",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "421",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "435",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "443",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "452",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "462",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "466",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "475",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "481",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "506",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "511",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "531",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "541",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "554",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "556",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "565",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "572",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "573",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "580",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "606",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "607",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "614",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "616",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "618",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "621",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "637",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "650",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "654",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "657",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "671",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "682",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "684",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "692",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "694",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "695",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "700",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "702",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "703",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "704",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "705",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "706",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "711",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "724",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "726",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "728",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "ultraSecret"
      },
      {
        Item: [
          {
            _Id: "37",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "106",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "125",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "137",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "140",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "190",
            _Weight: "0.2",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.02"
          },
          {
            _Id: "209",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "220",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "256",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "353",
            _Weight: "0.2",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.02"
          },
          {
            _Id: "366",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "367",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "432",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "483",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "517",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "563",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "583",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "614",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          },
          {
            _Id: "646",
            _Weight: "0.2",
            _DecreaseBy: "0.1",
            _RemoveOn: "0.02"
          },
          {
            _Id: "727",
            _Weight: "1",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "bombBum"
      },
      {
        Item: [
          {
            _Id: "588",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "589",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "590",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "591",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "592",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "593",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "594",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "595",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "596",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "597",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "598",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "planetarium"
      },
      {
        Item: [
          {
            _Id: "29",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "30",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "31",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "39",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "41",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "55",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "102",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "110",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "114",
            _Weight: "0.2",
            _DecreaseBy: "0.08",
            _RemoveOn: "0.02"
          },
          {
            _Id: "139",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "175",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "195",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "199",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "200",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "217",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "228",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "341",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "355",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "439",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "455",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "508",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "546",
            _Weight: "0.2",
            _DecreaseBy: "0.08",
            _RemoveOn: "0.02"
          },
          {
            _Id: "547",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          },
          {
            _Id: "604",
            _Weight: "1",
            _DecreaseBy: "0.4",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "oldChest"
      },
      {
        Item: [
          {
            _Id: "8",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "10",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "57",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "67",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "73",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "88",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "95",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "96",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "99",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "100",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "112",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "113",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "117",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "128",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "144",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "155",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "163",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "167",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "170",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "172",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "174",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "188",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "207",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "264",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "265",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "266",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "267",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "268",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "269",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "270",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "272",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "273",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "274",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "275",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "277",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "278",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "279",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "280",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "281",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "320",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "322",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "360",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "361",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "363",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "364",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "365",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "372",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "384",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "385",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "388",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "390",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "403",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "404",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "417",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "426",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "430",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "435",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "468",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "470",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "471",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "472",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "473",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "491",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "492",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "509",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "511",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "518",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "519",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "537",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "575",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "581",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "607",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "608",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "610",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "612",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "615",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "629",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "635",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "645",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "649",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "661",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "679",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "682",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "698",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "babyShop"
      },
      {
        Item: [
          {
            _Id: "7",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "27",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "60",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "138",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "183",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "349",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "362",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "439",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "488",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "527",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "719",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "woodenChest"
      },
      {
        Item: [
          {
            _Id: "26",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "42",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "140",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "268",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "273",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "336",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "480",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          },
          {
            _Id: "618",
            _Weight: "0.5",
            _DecreaseBy: "0.5",
            _RemoveOn: "0.05"
          },
          {
            _Id: "639",
            _Weight: "1",
            _DecreaseBy: "1",
            _RemoveOn: "0.1"
          }
        ],
        _Name: "rottenBeggar"
      }
    ]
  };

  // src/data/items.json
  var items_exports = {};
  __export(items_exports, {
    "-1": () => _130,
    "1": () => _131,
    "10": () => _020,
    "100": () => _007,
    "101": () => _0110,
    "102": () => _0210,
    "103": () => _0310,
    "104": () => _048,
    "105": () => _058,
    "106": () => _068,
    "107": () => _078,
    "108": () => _088,
    "109": () => _098,
    "11": () => _158,
    "110": () => _1010,
    "111": () => _1110,
    "112": () => _1210,
    "113": () => _1310,
    "114": () => _1410,
    "115": () => _1510,
    "116": () => _1610,
    "117": () => _178,
    "118": () => _188,
    "119": () => _198,
    "12": () => _228,
    "120": () => _207,
    "121": () => _2110,
    "122": () => _2210,
    "123": () => _2310,
    "124": () => _249,
    "125": () => _258,
    "126": () => _268,
    "127": () => _278,
    "128": () => _288,
    "129": () => _298,
    "13": () => _329,
    "130": () => _307,
    "131": () => _3110,
    "132": () => _3210,
    "133": () => _3310,
    "134": () => _349,
    "135": () => _358,
    "136": () => _368,
    "137": () => _378,
    "138": () => _387,
    "139": () => _397,
    "14": () => _421,
    "140": () => _406,
    "141": () => _4110,
    "142": () => _4210,
    "143": () => _4310,
    "144": () => _447,
    "145": () => _457,
    "146": () => _467,
    "147": () => _477,
    "148": () => _487,
    "149": () => _497,
    "15": () => _521,
    "150": () => _506,
    "151": () => _5110,
    "152": () => _5210,
    "153": () => _5310,
    "154": () => _547,
    "155": () => _557,
    "156": () => _567,
    "157": () => _577,
    "158": () => _587,
    "159": () => _597,
    "16": () => _627,
    "160": () => _606,
    "161": () => _6110,
    "162": () => _6210,
    "163": () => _6310,
    "164": () => _647,
    "165": () => _657,
    "166": () => _667,
    "167": () => _677,
    "168": () => _687,
    "169": () => _697,
    "17": () => _727,
    "170": () => _706,
    "171": () => _7110,
    "172": () => _7210,
    "173": () => _7310,
    "174": () => _747,
    "175": () => _757,
    "176": () => _767,
    "177": () => _777,
    "178": () => _787,
    "179": () => _797,
    "18": () => _827,
    "180": () => _806,
    "181": () => _8110,
    "182": () => _8210,
    "183": () => _8310,
    "184": () => _847,
    "185": () => _857,
    "186": () => _867,
    "187": () => _877,
    "188": () => _887,
    "189": () => _897,
    "19": () => _918,
    "190": () => _906,
    "191": () => _9110,
    "192": () => _9210,
    "193": () => _937,
    "194": () => _947,
    "195": () => _957,
    "196": () => _967,
    "197": () => _977,
    "198": () => _987,
    "199": () => _997,
    "2": () => _138,
    "20": () => _021,
    "200": () => _008,
    "2001": () => _001,
    "2002": () => _0022,
    "2003": () => _0032,
    "2004": () => _0042,
    "2005": () => _0052,
    "2006": () => _0062,
    "2007": () => _0072,
    "2008": () => _0082,
    "2009": () => _0092,
    "201": () => _0111,
    "2010": () => _0102,
    "2011": () => _0117,
    "2012": () => _0122,
    "2013": () => _0132,
    "2014": () => _0142,
    "2015": () => _0152,
    "2016": () => _0162,
    "2017": () => _0172,
    "2018": () => _0182,
    "2019": () => _0192,
    "202": () => _0211,
    "2020": () => _0202,
    "2021": () => _0217,
    "2022": () => _0222,
    "2023": () => _0232,
    "2024": () => _0242,
    "2025": () => _0252,
    "2026": () => _0262,
    "2027": () => _0272,
    "2028": () => _0282,
    "2029": () => _0292,
    "203": () => _0311,
    "2030": () => _0302,
    "2031": () => _0317,
    "2032": () => _0322,
    "2033": () => _0332,
    "2034": () => _0342,
    "2035": () => _0352,
    "2036": () => _0362,
    "2037": () => _0372,
    "2038": () => _0382,
    "2039": () => _0392,
    "204": () => _049,
    "2040": () => _0402,
    "2041": () => _041,
    "2042": () => _0422,
    "2043": () => _0432,
    "2044": () => _0442,
    "2045": () => _0452,
    "2046": () => _0462,
    "2048": () => _0482,
    "2049": () => _0492,
    "205": () => _059,
    "2050": () => _050,
    "2051": () => _051,
    "2052": () => _0522,
    "2053": () => _0532,
    "2054": () => _0542,
    "2055": () => _0552,
    "2056": () => _0562,
    "2057": () => _0572,
    "2058": () => _0582,
    "2059": () => _0592,
    "206": () => _069,
    "2060": () => _060,
    "2061": () => _061,
    "2062": () => _0622,
    "2063": () => _0632,
    "2064": () => _0642,
    "2065": () => _0652,
    "2066": () => _0662,
    "2067": () => _0672,
    "2068": () => _0682,
    "2069": () => _0692,
    "207": () => _079,
    "2070": () => _070,
    "2071": () => _071,
    "2072": () => _0722,
    "2073": () => _0732,
    "2074": () => _0742,
    "2075": () => _0752,
    "2076": () => _0762,
    "2077": () => _0772,
    "2078": () => _0782,
    "2079": () => _0792,
    "208": () => _089,
    "2080": () => _080,
    "2081": () => _081,
    "2082": () => _0822,
    "2083": () => _0832,
    "2084": () => _0842,
    "2085": () => _0852,
    "2086": () => _0862,
    "2087": () => _0872,
    "2088": () => _0882,
    "2089": () => _0892,
    "209": () => _099,
    "2090": () => _090,
    "2091": () => _091,
    "2092": () => _0922,
    "2093": () => _0932,
    "2094": () => _0942,
    "2095": () => _0952,
    "2096": () => _0962,
    "2097": () => _0972,
    "2098": () => _0982,
    "2099": () => _0992,
    "21": () => _159,
    "210": () => _1011,
    "2100": () => _1002,
    "2101": () => _1017,
    "2102": () => _1022,
    "2103": () => _1032,
    "2104": () => _1042,
    "2105": () => _1052,
    "2106": () => _1062,
    "2107": () => _1072,
    "2108": () => _1082,
    "2109": () => _1092,
    "211": () => _1111,
    "2110": () => _1102,
    "2111": () => _1117,
    "2112": () => _1122,
    "2113": () => _1132,
    "2114": () => _1142,
    "2115": () => _1152,
    "2116": () => _1162,
    "2117": () => _1172,
    "2118": () => _1182,
    "2119": () => _1192,
    "212": () => _1211,
    "2120": () => _1202,
    "2121": () => _1217,
    "2122": () => _1222,
    "2123": () => _1232,
    "2124": () => _1242,
    "2125": () => _1252,
    "2126": () => _1262,
    "2127": () => _1272,
    "2128": () => _1282,
    "2129": () => _1292,
    "213": () => _1311,
    "2130": () => _1302,
    "2131": () => _1316,
    "2132": () => _1322,
    "2133": () => _1332,
    "2134": () => _1342,
    "2135": () => _1352,
    "2136": () => _1362,
    "2137": () => _1372,
    "2138": () => _1382,
    "2139": () => _1392,
    "214": () => _1411,
    "2140": () => _1402,
    "2141": () => _1417,
    "2142": () => _1422,
    "2143": () => _1432,
    "2144": () => _1442,
    "2145": () => _1452,
    "2146": () => _1462,
    "2147": () => _1472,
    "2148": () => _1482,
    "2149": () => _1492,
    "215": () => _1511,
    "2150": () => _1502,
    "2151": () => _1517,
    "2152": () => _1522,
    "2153": () => _1532,
    "2154": () => _1542,
    "2155": () => _1552,
    "2156": () => _1562,
    "2157": () => _1572,
    "2158": () => _1582,
    "2159": () => _1592,
    "216": () => _1611,
    "2160": () => _1602,
    "2161": () => _1617,
    "2162": () => _1622,
    "2163": () => _1632,
    "2164": () => _1642,
    "2165": () => _1652,
    "2166": () => _1662,
    "2167": () => _1672,
    "2168": () => _1682,
    "2169": () => _1692,
    "217": () => _179,
    "2170": () => _1702,
    "2171": () => _1715,
    "2172": () => _1722,
    "2173": () => _1732,
    "2174": () => _1742,
    "2175": () => _1752,
    "2176": () => _1762,
    "2177": () => _1772,
    "2178": () => _1782,
    "2179": () => _1792,
    "218": () => _189,
    "2180": () => _180,
    "2181": () => _181,
    "2182": () => _1822,
    "2183": () => _1832,
    "2184": () => _1842,
    "2185": () => _1852,
    "2186": () => _1862,
    "2187": () => _1872,
    "2188": () => _1882,
    "2189": () => _1892,
    "219": () => _199,
    "22": () => _229,
    "220": () => _208,
    "221": () => _2111,
    "222": () => _2211,
    "223": () => _2311,
    "224": () => _2410,
    "225": () => _259,
    "226": () => _269,
    "227": () => _279,
    "228": () => _289,
    "229": () => _299,
    "23": () => _330,
    "230": () => _308,
    "231": () => _3111,
    "232": () => _3211,
    "233": () => _3311,
    "234": () => _3410,
    "236": () => _369,
    "237": () => _379,
    "238": () => _388,
    "239": () => _398,
    "24": () => _427,
    "240": () => _407,
    "241": () => _4111,
    "242": () => _4211,
    "243": () => _4311,
    "244": () => _448,
    "245": () => _458,
    "246": () => _468,
    "247": () => _478,
    "248": () => _488,
    "249": () => _498,
    "25": () => _527,
    "250": () => _507,
    "251": () => _5111,
    "252": () => _5211,
    "253": () => _5311,
    "254": () => _548,
    "255": () => _558,
    "256": () => _568,
    "257": () => _578,
    "258": () => _588,
    "259": () => _598,
    "26": () => _628,
    "260": () => _607,
    "261": () => _6111,
    "262": () => _6211,
    "263": () => _6311,
    "264": () => _648,
    "265": () => _658,
    "266": () => _668,
    "267": () => _678,
    "268": () => _688,
    "269": () => _698,
    "27": () => _728,
    "270": () => _707,
    "271": () => _7111,
    "272": () => _7211,
    "273": () => _7311,
    "274": () => _748,
    "275": () => _758,
    "276": () => _768,
    "277": () => _778,
    "278": () => _788,
    "279": () => _798,
    "28": () => _828,
    "280": () => _807,
    "281": () => _8111,
    "282": () => _8211,
    "283": () => _8311,
    "284": () => _848,
    "285": () => _858,
    "286": () => _868,
    "287": () => _878,
    "288": () => _888,
    "289": () => _898,
    "29": () => _919,
    "290": () => _907,
    "291": () => _9111,
    "292": () => _9211,
    "293": () => _938,
    "294": () => _948,
    "295": () => _958,
    "296": () => _968,
    "297": () => _978,
    "298": () => _988,
    "299": () => _998,
    "3": () => _139,
    "30": () => _028,
    "300": () => _009,
    "3000": () => _000,
    "3001": () => _0014,
    "3002": () => _0023,
    "301": () => _0112,
    "302": () => _0212,
    "303": () => _0312,
    "304": () => _0410,
    "305": () => _0510,
    "306": () => _0610,
    "307": () => _0710,
    "308": () => _0810,
    "309": () => _0910,
    "31": () => _160,
    "310": () => _1012,
    "311": () => _1112,
    "312": () => _1212,
    "313": () => _1312,
    "314": () => _1412,
    "315": () => _1512,
    "316": () => _1612,
    "317": () => _1710,
    "318": () => _1810,
    "319": () => _1910,
    "32": () => _230,
    "320": () => _209,
    "321": () => _2112,
    "322": () => _2212,
    "323": () => _2312,
    "324": () => _2411,
    "325": () => _2510,
    "326": () => _2610,
    "327": () => _2710,
    "32769": () => _2769,
    "32770": () => _2770,
    "32771": () => _2771,
    "32772": () => _2772,
    "32773": () => _2773,
    "32774": () => _2774,
    "32775": () => _2775,
    "32776": () => _2776,
    "32777": () => _2777,
    "32778": () => _2778,
    "32779": () => _2779,
    "32780": () => _2780,
    "32781": () => _2781,
    "32782": () => _2782,
    "32783": () => _2783,
    "32784": () => _2784,
    "32785": () => _2785,
    "32786": () => _2786,
    "32787": () => _2787,
    "32788": () => _2788,
    "32789": () => _2789,
    "32790": () => _2790,
    "32791": () => _2791,
    "32792": () => _2792,
    "32793": () => _2793,
    "32794": () => _2794,
    "32795": () => _2795,
    "32796": () => _2796,
    "32797": () => _2797,
    "32798": () => _2798,
    "32799": () => _2799,
    "328": () => _2810,
    "32800": () => _2800,
    "32801": () => _2801,
    "32802": () => _2802,
    "32803": () => _2803,
    "32804": () => _2804,
    "32805": () => _2805,
    "32806": () => _2806,
    "32807": () => _2807,
    "32808": () => _2808,
    "32809": () => _2809,
    "32810": () => _28102,
    "32811": () => _28112,
    "32812": () => _28122,
    "32813": () => _28132,
    "32814": () => _28142,
    "32816": () => _2816,
    "32817": () => _2817,
    "32818": () => _2818,
    "32819": () => _2819,
    "32820": () => _2820,
    "32821": () => _2821,
    "32822": () => _2822,
    "32823": () => _2823,
    "32824": () => _2824,
    "32825": () => _2825,
    "32826": () => _2826,
    "32827": () => _2827,
    "32828": () => _2828,
    "32829": () => _2829,
    "32830": () => _2830,
    "32831": () => _2831,
    "32832": () => _2832,
    "32833": () => _2833,
    "32834": () => _2834,
    "32835": () => _2835,
    "32836": () => _2836,
    "32837": () => _2837,
    "32838": () => _2838,
    "32839": () => _2839,
    "32840": () => _2840,
    "32841": () => _2841,
    "32842": () => _2842,
    "32843": () => _2843,
    "32844": () => _2844,
    "32845": () => _2845,
    "32846": () => _2846,
    "32847": () => _2847,
    "32848": () => _2848,
    "32849": () => _2849,
    "32850": () => _2850,
    "32851": () => _2851,
    "32852": () => _2852,
    "32853": () => _2853,
    "32854": () => _2854,
    "32855": () => _2855,
    "32856": () => _2856,
    "32857": () => _2857,
    "32858": () => _2858,
    "32859": () => _2859,
    "32860": () => _2860,
    "32861": () => _2861,
    "32862": () => _2862,
    "32863": () => _2863,
    "32864": () => _2864,
    "32865": () => _2865,
    "32866": () => _2866,
    "32867": () => _2867,
    "32868": () => _2868,
    "32869": () => _2869,
    "32870": () => _2870,
    "32871": () => _2871,
    "32872": () => _2872,
    "32873": () => _2873,
    "32874": () => _2874,
    "32875": () => _2875,
    "32876": () => _2876,
    "32877": () => _2877,
    "32878": () => _2878,
    "32879": () => _2879,
    "32880": () => _2880,
    "32881": () => _2881,
    "32882": () => _2882,
    "32883": () => _2883,
    "32884": () => _2884,
    "32885": () => _2885,
    "32886": () => _2886,
    "32887": () => _2887,
    "32888": () => _2888,
    "32889": () => _2889,
    "32890": () => _2890,
    "32891": () => _2891,
    "32892": () => _2892,
    "32893": () => _2893,
    "32894": () => _2894,
    "32895": () => _2895,
    "32896": () => _2896,
    "32897": () => _2897,
    "32898": () => _2898,
    "32899": () => _2899,
    "329": () => _2910,
    "32900": () => _2900,
    "32901": () => _2901,
    "32902": () => _2902,
    "32903": () => _2903,
    "32904": () => _2904,
    "32905": () => _2905,
    "32906": () => _2906,
    "32907": () => _2907,
    "32908": () => _2908,
    "32909": () => _2909,
    "32910": () => _29102,
    "32911": () => _29112,
    "32912": () => _29122,
    "32913": () => _29132,
    "32914": () => _29142,
    "32915": () => _2915,
    "32916": () => _2916,
    "32917": () => _2917,
    "32918": () => _2918,
    "32919": () => _2919,
    "32920": () => _2920,
    "32921": () => _2921,
    "32922": () => _2922,
    "32923": () => _2923,
    "32924": () => _2924,
    "32925": () => _2925,
    "32926": () => _2926,
    "32927": () => _2927,
    "32928": () => _2928,
    "32929": () => _2929,
    "32930": () => _2930,
    "32931": () => _2931,
    "32932": () => _2932,
    "32933": () => _2933,
    "32934": () => _2934,
    "32935": () => _2935,
    "32936": () => _2936,
    "32937": () => _2937,
    "32938": () => _2938,
    "32939": () => _2939,
    "32940": () => _2940,
    "32941": () => _2941,
    "32942": () => _2942,
    "32943": () => _2943,
    "32944": () => _2944,
    "32945": () => _2945,
    "32946": () => _2946,
    "32947": () => _2947,
    "32948": () => _2948,
    "32949": () => _2949,
    "32950": () => _2950,
    "32951": () => _2951,
    "32952": () => _2952,
    "32953": () => _2953,
    "32954": () => _2954,
    "32955": () => _2955,
    "32956": () => _2956,
    "32957": () => _2957,
    "33": () => _331,
    "330": () => _309,
    "331": () => _3112,
    "332": () => _3212,
    "333": () => _3312,
    "334": () => _3411,
    "335": () => _359,
    "336": () => _3610,
    "337": () => _3710,
    "338": () => _389,
    "339": () => _399,
    "34": () => _428,
    "340": () => _408,
    "341": () => _4112,
    "342": () => _4212,
    "343": () => _4312,
    "344": () => _449,
    "345": () => _459,
    "346": () => _469,
    "347": () => _479,
    "348": () => _489,
    "349": () => _499,
    "35": () => _528,
    "350": () => _508,
    "351": () => _5112,
    "352": () => _5212,
    "353": () => _5312,
    "354": () => _549,
    "355": () => _559,
    "356": () => _569,
    "357": () => _579,
    "358": () => _589,
    "359": () => _599,
    "36": () => _629,
    "360": () => _608,
    "361": () => _6112,
    "362": () => _6212,
    "363": () => _6312,
    "364": () => _649,
    "365": () => _659,
    "366": () => _669,
    "367": () => _679,
    "368": () => _689,
    "369": () => _699,
    "37": () => _729,
    "370": () => _708,
    "371": () => _7112,
    "372": () => _7212,
    "373": () => _7312,
    "374": () => _749,
    "375": () => _759,
    "376": () => _769,
    "377": () => _779,
    "378": () => _789,
    "379": () => _799,
    "38": () => _829,
    "380": () => _808,
    "381": () => _8112,
    "382": () => _8212,
    "383": () => _8312,
    "384": () => _849,
    "385": () => _859,
    "386": () => _869,
    "387": () => _879,
    "388": () => _889,
    "389": () => _899,
    "39": () => _920,
    "390": () => _908,
    "391": () => _9112,
    "392": () => _9212,
    "393": () => _939,
    "394": () => _949,
    "395": () => _959,
    "396": () => _969,
    "397": () => _979,
    "398": () => _989,
    "399": () => _999,
    "4": () => _140,
    "40": () => _029,
    "400": () => _0010,
    "401": () => _0113,
    "402": () => _0213,
    "403": () => _0313,
    "404": () => _0411,
    "405": () => _0511,
    "406": () => _0611,
    "407": () => _0711,
    "408": () => _0811,
    "409": () => _0911,
    "41": () => _161,
    "410": () => _1013,
    "411": () => _1113,
    "412": () => _1213,
    "413": () => _1313,
    "414": () => _1413,
    "415": () => _1513,
    "416": () => _1613,
    "417": () => _1711,
    "418": () => _1811,
    "419": () => _1911,
    "42": () => _231,
    "420": () => _2010,
    "421": () => _2113,
    "422": () => _2213,
    "423": () => _2313,
    "424": () => _2412,
    "425": () => _2511,
    "426": () => _2611,
    "427": () => _2711,
    "428": () => _2811,
    "429": () => _2911,
    "430": () => _3010,
    "431": () => _3113,
    "432": () => _3213,
    "433": () => _3313,
    "434": () => _3412,
    "435": () => _3510,
    "436": () => _3611,
    "437": () => _3711,
    "438": () => _3810,
    "439": () => _3910,
    "44": () => _429,
    "440": () => _409,
    "441": () => _4113,
    "442": () => _4213,
    "443": () => _4313,
    "444": () => _4410,
    "445": () => _4510,
    "446": () => _4610,
    "447": () => _4710,
    "448": () => _4810,
    "449": () => _4910,
    "45": () => _529,
    "450": () => _509,
    "451": () => _5113,
    "452": () => _5213,
    "453": () => _5313,
    "454": () => _5410,
    "455": () => _5510,
    "456": () => _5610,
    "457": () => _5710,
    "458": () => _5810,
    "459": () => _5910,
    "46": () => _630,
    "460": () => _609,
    "461": () => _6113,
    "462": () => _6213,
    "463": () => _6313,
    "464": () => _6410,
    "465": () => _6510,
    "466": () => _6610,
    "467": () => _6710,
    "468": () => _6810,
    "469": () => _6910,
    "47": () => _730,
    "470": () => _709,
    "471": () => _7113,
    "472": () => _7213,
    "473": () => _7313,
    "474": () => _7410,
    "475": () => _7510,
    "476": () => _7610,
    "477": () => _7710,
    "478": () => _7810,
    "479": () => _7910,
    "48": () => _830,
    "480": () => _809,
    "481": () => _8113,
    "482": () => _8213,
    "483": () => _8313,
    "484": () => _8410,
    "485": () => _8510,
    "486": () => _8610,
    "487": () => _8710,
    "488": () => _8810,
    "489": () => _8910,
    "49": () => _921,
    "490": () => _909,
    "491": () => _9113,
    "492": () => _9213,
    "493": () => _9310,
    "494": () => _9410,
    "495": () => _9510,
    "496": () => _9610,
    "497": () => _9710,
    "498": () => _9810,
    "499": () => _9910,
    "5": () => _141,
    "50": () => _030,
    "500": () => _0011,
    "501": () => _0114,
    "502": () => _0214,
    "503": () => _0314,
    "504": () => _0412,
    "505": () => _0512,
    "506": () => _0612,
    "507": () => _0712,
    "508": () => _0812,
    "509": () => _0912,
    "51": () => _168,
    "510": () => _1014,
    "511": () => _1114,
    "512": () => _1214,
    "513": () => _1314,
    "514": () => _1414,
    "515": () => _1514,
    "516": () => _1614,
    "517": () => _1712,
    "518": () => _1812,
    "519": () => _1912,
    "52": () => _238,
    "520": () => _2011,
    "521": () => _2114,
    "522": () => _2214,
    "523": () => _2314,
    "524": () => _2413,
    "525": () => _2512,
    "526": () => _2612,
    "527": () => _2712,
    "528": () => _2812,
    "529": () => _2912,
    "53": () => _338,
    "530": () => _3011,
    "531": () => _3114,
    "532": () => _3214,
    "533": () => _3314,
    "534": () => _3413,
    "535": () => _3511,
    "536": () => _3612,
    "537": () => _3712,
    "538": () => _3811,
    "539": () => _3911,
    "54": () => _430,
    "540": () => _4010,
    "541": () => _4114,
    "542": () => _4214,
    "543": () => _4314,
    "544": () => _4411,
    "545": () => _4511,
    "546": () => _4611,
    "547": () => _4711,
    "548": () => _4811,
    "549": () => _4911,
    "55": () => _530,
    "550": () => _5010,
    "551": () => _5114,
    "552": () => _5214,
    "553": () => _5314,
    "554": () => _5411,
    "555": () => _5511,
    "556": () => _5611,
    "557": () => _5711,
    "558": () => _5811,
    "559": () => _5911,
    "56": () => _631,
    "560": () => _6010,
    "561": () => _6114,
    "562": () => _6214,
    "563": () => _6314,
    "564": () => _6411,
    "565": () => _6511,
    "566": () => _6611,
    "567": () => _6711,
    "568": () => _6811,
    "569": () => _6911,
    "57": () => _731,
    "570": () => _7010,
    "571": () => _7114,
    "572": () => _7214,
    "573": () => _7314,
    "574": () => _7411,
    "575": () => _7511,
    "576": () => _7611,
    "577": () => _7711,
    "578": () => _7811,
    "579": () => _7911,
    "58": () => _831,
    "580": () => _8010,
    "581": () => _8114,
    "582": () => _8214,
    "583": () => _8314,
    "584": () => _8411,
    "585": () => _8511,
    "586": () => _8611,
    "588": () => _8811,
    "589": () => _8911,
    "590": () => _9010,
    "591": () => _9114,
    "592": () => _9214,
    "593": () => _9311,
    "594": () => _9411,
    "595": () => _9511,
    "596": () => _9611,
    "597": () => _9711,
    "598": () => _9811,
    "599": () => _9911,
    "6": () => _148,
    "60": () => _031,
    "600": () => _0012,
    "601": () => _0115,
    "602": () => _0215,
    "603": () => _0315,
    "604": () => _0413,
    "605": () => _0513,
    "606": () => _0613,
    "607": () => _0713,
    "608": () => _0813,
    "609": () => _0913,
    "610": () => _1015,
    "611": () => _1115,
    "612": () => _1215,
    "614": () => _1415,
    "615": () => _1515,
    "616": () => _1615,
    "617": () => _1713,
    "618": () => _1813,
    "619": () => _1913,
    "62": () => _239,
    "621": () => _2115,
    "622": () => _2215,
    "623": () => _2315,
    "624": () => _2414,
    "625": () => _2513,
    "626": () => _2613,
    "627": () => _2713,
    "628": () => _2813,
    "629": () => _2913,
    "63": () => _339,
    "631": () => _3115,
    "632": () => _3215,
    "633": () => _3315,
    "634": () => _3414,
    "635": () => _3512,
    "636": () => _3613,
    "637": () => _3713,
    "638": () => _3812,
    "639": () => _3912,
    "64": () => _431,
    "640": () => _4011,
    "641": () => _4115,
    "642": () => _4215,
    "643": () => _4315,
    "644": () => _4412,
    "645": () => _4512,
    "646": () => _4612,
    "647": () => _4712,
    "649": () => _4912,
    "65": () => _531,
    "650": () => _5011,
    "651": () => _5115,
    "652": () => _5215,
    "653": () => _5315,
    "654": () => _5412,
    "655": () => _5512,
    "656": () => _5612,
    "657": () => _5712,
    "658": () => _5812,
    "659": () => _5912,
    "66": () => _637,
    "660": () => _6011,
    "661": () => _6115,
    "663": () => _6315,
    "664": () => _6412,
    "665": () => _6512,
    "667": () => _6712,
    "668": () => _6812,
    "669": () => _6912,
    "67": () => _737,
    "670": () => _7011,
    "671": () => _7115,
    "672": () => _7215,
    "673": () => _7315,
    "674": () => _7412,
    "675": () => _7512,
    "676": () => _7612,
    "677": () => _7712,
    "678": () => _7812,
    "679": () => _7912,
    "68": () => _837,
    "680": () => _8011,
    "681": () => _8115,
    "682": () => _8215,
    "683": () => _8315,
    "684": () => _8412,
    "685": () => _8512,
    "686": () => _8612,
    "687": () => _8711,
    "688": () => _8812,
    "689": () => _8912,
    "69": () => _927,
    "690": () => _9011,
    "691": () => _9115,
    "692": () => _9215,
    "693": () => _9312,
    "694": () => _9412,
    "695": () => _9512,
    "696": () => _9612,
    "697": () => _9712,
    "698": () => _9812,
    "699": () => _9912,
    "7": () => _149,
    "70": () => _038,
    "700": () => _0013,
    "701": () => _0116,
    "702": () => _0216,
    "703": () => _0316,
    "704": () => _0414,
    "705": () => _0514,
    "706": () => _0614,
    "707": () => _0714,
    "708": () => _0814,
    "709": () => _0914,
    "71": () => _169,
    "710": () => _1016,
    "711": () => _1116,
    "712": () => _1216,
    "713": () => _1315,
    "714": () => _1416,
    "715": () => _1516,
    "716": () => _1616,
    "717": () => _1714,
    "719": () => _1914,
    "72": () => _240,
    "720": () => _2012,
    "721": () => _2116,
    "722": () => _2216,
    "723": () => _2316,
    "724": () => _2415,
    "725": () => _2514,
    "726": () => _2614,
    "727": () => _2714,
    "728": () => _2814,
    "729": () => _2914,
    "73": () => _340,
    "730": () => _3012,
    "731": () => _3116,
    "732": () => _3216,
    "74": () => _437,
    "75": () => _537,
    "76": () => _638,
    "77": () => _738,
    "78": () => _838,
    "79": () => _928,
    "8": () => _150,
    "80": () => _039,
    "81": () => _170,
    "82": () => _241,
    "83": () => _341,
    "84": () => _438,
    "85": () => _538,
    "86": () => _639,
    "87": () => _739,
    "88": () => _839,
    "89": () => _929,
    "9": () => _151,
    "90": () => _040,
    "91": () => _171,
    "92": () => _248,
    "93": () => _348,
    "94": () => _439,
    "95": () => _539,
    "96": () => _640,
    "97": () => _740,
    "98": () => _840,
    "99": () => _930,
    NEW: () => NEW,
    default: () => items_default
  });
  var NEW = {
    name: "Unknown Item",
    shown: true,
    text: "Tracker doesn't know this item yet",
    introduced_in: "Unknown"
  };
  var _130 = {
    name: "Glitched item",
    shown: true,
    text: "Randomized effects",
    introduced_in: "Repentance"
  };
  var _131 = {
    name: "The Sad Onion",
    shown: true,
    tears: "0.72",
    text: "",
    introduced_in: "Rebirth"
  };
  var _138 = {
    name: "The Inner Eye",
    tears_x: "0.51",
    shown: true,
    text: "Triple shot",
    introduced_in: "Rebirth"
  };
  var _139 = {
    name: "Spoon Bender",
    shown: true,
    text: "Homing tears",
    introduced_in: "Rebirth"
  };
  var _140 = {
    name: "Cricket's Head",
    dmg: "0.5",
    dmg_x: "1.5",
    shown: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _141 = {
    name: "My Reflection",
    height: "1",
    range: "5.4",
    shot_speed: "0.6",
    shown: true,
    text: "Boomerang tears",
    introduced_in: "Rebirth"
  };
  var _148 = {
    name: "Number One",
    height: "0.45",
    range: "-2.5",
    shown: true,
    tears: "1.75",
    text: "",
    introduced_in: "Rebirth"
  };
  var _149 = {
    name: "Blood of the Martyr",
    dmg: "1",
    shown: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _150 = {
    name: "Brother Bobby",
    shown: true,
    conjoined: true,
    text: "Familiar (3.5 dmg / tear)",
    introduced_in: "Rebirth"
  };
  var _151 = {
    name: "Skatole",
    shown: true,
    beelzebub: true,
    text: "Flies won't attack you",
    introduced_in: "Rebirth"
  };
  var _020 = {
    name: "Halo of Flies",
    shown: true,
    beelzebub: true,
    text: "Two non-damaging fly orbitals",
    introduced_in: "Rebirth"
  };
  var _158 = {
    name: "1UP",
    shown: true,
    funguy: true,
    text: "+1 life",
    introduced_in: "Rebirth"
  };
  var _228 = {
    name: "Magic Mushroom",
    dmg: "0.3",
    dmg_x: "1.5",
    health: "1",
    height: "0.5",
    range: "1.5",
    shown: true,
    speed: "0.3",
    text: "Size up, full heal",
    funguy: true,
    introduced_in: "Rebirth"
  };
  var _329 = {
    name: "The Virus",
    speed: "0.2",
    shown: true,
    spun: true,
    text: "Poison touch, enemies take 12 dmg on contact",
    introduced_in: "Rebirth"
  };
  var _421 = {
    name: "Roid Rage",
    height: "0.5",
    range: "1.5",
    shown: true,
    spun: true,
    speed: "0.3",
    text: "",
    introduced_in: "Rebirth"
  };
  var _521 = {
    name: "<3",
    health: "1",
    shown: true,
    health_only: true,
    text: "Full heal",
    introduced_in: "Rebirth"
  };
  var _627 = {
    name: "Raw Liver",
    health: "2",
    shown: true,
    health_only: true,
    text: "Full heal",
    introduced_in: "Rebirth"
  };
  var _727 = {
    name: "Skeleton Key",
    shown: true,
    text: "+99 keys",
    introduced_in: "Rebirth"
  };
  var _827 = {
    name: "A Dollar",
    shown: true,
    text: "+99 cents",
    introduced_in: "Rebirth"
  };
  var _918 = {
    name: "Boom!",
    shown: true,
    text: "+10 bombs",
    introduced_in: "Rebirth"
  };
  var _021 = {
    name: "Transcendence",
    shown: true,
    text: "Flight",
    introduced_in: "Rebirth"
  };
  var _159 = {
    name: "The Compass",
    shown: true,
    text: "Reveals special rooms",
    introduced_in: "Rebirth"
  };
  var _229 = {
    name: "Lunch",
    health: "1",
    shown: true,
    health_only: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _330 = {
    name: "Dinner",
    health: "1",
    shown: true,
    health_only: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _427 = {
    name: "Dessert",
    health: "1",
    shown: true,
    health_only: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _527 = {
    name: "Breakfast",
    health: "1",
    shown: true,
    health_only: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _628 = {
    name: "Rotten Meat",
    health: "1",
    shown: true,
    health_only: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _728 = {
    name: "Wooden Spoon",
    shown: true,
    speed: "0.3",
    text: "",
    introduced_in: "Rebirth"
  };
  var _828 = {
    name: "The Belt",
    shown: true,
    speed: "0.3",
    text: "",
    introduced_in: "Rebirth"
  };
  var _919 = {
    name: "Mom's Underwear",
    height: "0.5",
    range: "1.5",
    shown: true,
    yesmother: true,
    text: "Spawn 3-6 blue flies on pickup",
    introduced_in: "Rebirth"
  };
  var _028 = {
    name: "Mom's Heels",
    height: "0.5",
    range: "1.5",
    shown: true,
    yesmother: true,
    text: "Deals 12 damage to enemies coming into contact with the player",
    introduced_in: "Rebirth"
  };
  var _160 = {
    name: "Mom's Lipstick",
    height: "0.5",
    range: "2.25",
    shown: true,
    yesmother: true,
    text: "Spawns a red heart on pickup",
    introduced_in: "Rebirth"
  };
  var _230 = {
    name: "Wire Coat Hanger",
    shown: true,
    tears: "0.72",
    text: "",
    introduced_in: "Rebirth"
  };
  var _331 = {
    name: "The Bible",
    shown: true,
    seraphim: true,
    bookworm: true,
    text: "Temporary flight, instantly kills Mom / It Lives!",
    space: true,
    introduced_in: "Rebirth"
  };
  var _428 = {
    name: "The Book of Belial",
    shown: true,
    bookworm: true,
    text: "Temporary +2 dmg, +12.5% deal chance, x1.5 dmg with Blood of the Martyr",
    space: true,
    introduced_in: "Rebirth"
  };
  var _528 = {
    name: "The Necronomicon",
    shown: true,
    bookworm: true,
    text: "Deals 40 dmg to the room",
    space: true,
    introduced_in: "Rebirth"
  };
  var _629 = {
    name: "The Poop",
    shown: true,
    ohcrap: true,
    text: "Makes a poop",
    space: true,
    introduced_in: "Rebirth"
  };
  var _729 = {
    name: "Mr. Boom",
    shown: true,
    text: "Spawns a big bomb (185 dmg)",
    space: true,
    introduced_in: "Rebirth"
  };
  var _829 = {
    name: "Tammy's Head",
    shown: true,
    text: "Shoots 10 tears (dmg + 25)",
    space: true,
    introduced_in: "Rebirth"
  };
  var _920 = {
    name: "Mom's Bra",
    shown: true,
    yesmother: true,
    text: "Temporarily petrifies enemies",
    space: true,
    introduced_in: "Rebirth"
  };
  var _029 = {
    name: "Kamikaze",
    shown: true,
    text: ".5 heart dmg to yourself, 185 dmg explosion",
    space: true,
    introduced_in: "Rebirth"
  };
  var _161 = {
    name: "Mom's Pad",
    shown: true,
    yesmother: true,
    text: "Temporarily fears enemies",
    space: true,
    introduced_in: "Rebirth"
  };
  var _231 = {
    name: "Bob's Rotten Head",
    shown: true,
    bob: true,
    text: "Shoots a poison bomb that leaves a poisoning gas cloud (185 dmg + 5 dmg / tick)",
    space: true,
    introduced_in: "Rebirth"
  };
  var _429 = {
    name: "Teleport!",
    shown: true,
    text: "Can influence teleport direction based on player's direction",
    space: true,
    introduced_in: "Rebirth"
  };
  var _529 = {
    name: "Yum Heart",
    shown: true,
    text: "Heals 1 heart",
    space: true,
    introduced_in: "Rebirth"
  };
  var _630 = {
    name: "Lucky Foot",
    shown: true,
    luck: "1",
    text: "Better gambling chances, guarantee positive pills effects",
    introduced_in: "Rebirth"
  };
  var _730 = {
    name: "Doctor's Remote",
    shown: true,
    text: "Shoots a missile (20x dmg)",
    space: true,
    introduced_in: "Rebirth"
  };
  var _830 = {
    name: "Cupid's Arrow",
    shown: true,
    text: "Piercing tears",
    introduced_in: "Rebirth"
  };
  var _921 = {
    name: "Shoop Da Whoop",
    shown: true,
    text: "Shoots a blood laser (2x dmg / tick, 12 ticks)",
    space: true,
    introduced_in: "Rebirth"
  };
  var _030 = {
    name: "Steven",
    dmg: "1",
    shown: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _168 = {
    name: "Pentagram",
    dmg: "1",
    shown: true,
    leviathan: true,
    text: "+10% deal chance",
    introduced_in: "Rebirth"
  };
  var _238 = {
    name: "Dr. Fetus",
    tears_x: "0.4",
    dmg_x: "10",
    shown: true,
    text: "Bomb tears",
    introduced_in: "Rebirth"
  };
  var _338 = {
    name: "Magneto",
    shown: true,
    text: "Attracts pickups, open chests at close range",
    introduced_in: "Rebirth"
  };
  var _430 = {
    name: "Treasure Map",
    shown: true,
    text: "Reveals the floor layout",
    introduced_in: "Rebirth"
  };
  var _530 = {
    name: "Mom's Eye",
    shown: true,
    yesmother: true,
    text: "Chance to shoot a 2nd tear backwards",
    introduced_in: "Rebirth"
  };
  var _631 = {
    name: "Lemon Mishap",
    shown: true,
    text: "Makes a pool of pee",
    space: true,
    introduced_in: "Rebirth"
  };
  var _731 = {
    name: "Distant Admiration",
    shown: true,
    beelzebub: true,
    text: "Orbital (5 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _831 = {
    name: "Book of Shadows",
    shown: true,
    bookworm: true,
    text: "Temporary invincibility",
    space: true,
    introduced_in: "Rebirth"
  };
  var _031 = {
    name: "The Ladder",
    shown: true,
    text: "Allows you to cross gaps",
    introduced_in: "Rebirth"
  };
  var _239 = {
    name: "Charm of the Vampire",
    shown: true,
    dmg: "0.3",
    text: "Heals half heart every 13 enemy deaths",
    introduced_in: "Rebirth"
  };
  var _339 = {
    name: "The Battery",
    shown: true,
    text: "Can double charge active items",
    introduced_in: "Rebirth"
  };
  var _431 = {
    name: "Steam Sale",
    shown: true,
    text: "Reduce shop items price where price = 1/(2^number of Steam sales)",
    introduced_in: "Rebirth"
  };
  var _531 = {
    name: "Anarchist Cookbook",
    shown: true,
    bookworm: true,
    text: "Spawns 6 troll bombs",
    space: true,
    introduced_in: "Rebirth"
  };
  var _637 = {
    name: "The Hourglass",
    shown: true,
    text: "Temporarily slows enemies",
    space: true,
    introduced_in: "Rebirth"
  };
  var _737 = {
    name: "Sister Maggy",
    shown: true,
    conjoined: true,
    text: "Familiar (6 dmg / tear)",
    introduced_in: "Rebirth"
  };
  var _837 = {
    name: "Technology",
    shown: true,
    text: "Laser tears (piercing)",
    introduced_in: "Rebirth"
  };
  var _927 = {
    name: "Chocolate Milk",
    shown: true,
    text: "Charge tears (max is 4x dmg and 2.5x delay)",
    introduced_in: "Rebirth"
  };
  var _038 = {
    name: "Growth Hormones",
    dmg: "1",
    shown: true,
    spun: true,
    speed: "0.2",
    text: "",
    introduced_in: "Rebirth"
  };
  var _169 = {
    name: "Mini Mush",
    height: "1.5",
    range: "1.5",
    shown: true,
    funguy: true,
    speed: "0.3",
    text: "Size down",
    introduced_in: "Rebirth"
  };
  var _240 = {
    name: "Rosary",
    shown: true,
    seraphim: true,
    tears: "0.5",
    soul_hearts: "3",
    text: "Puts the bible into most item pools",
    introduced_in: "Rebirth"
  };
  var _340 = {
    name: "Cube of Meat",
    shown: true,
    text: "Orbital (7 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _437 = {
    name: "A Quarter",
    shown: true,
    text: "+25 cents",
    introduced_in: "Rebirth"
  };
  var _537 = {
    name: "PhD",
    shown: true,
    text: "Bad pills become good or neutral pill",
    introduced_in: "Rebirth"
  };
  var _638 = {
    name: "X-Ray Vision",
    shown: true,
    text: "Automatically opens secret and super secret rooms",
    introduced_in: "Rebirth"
  };
  var _738 = {
    name: "My Little Unicorn",
    shown: true,
    text: "Temporary invincibility, 20 contact dmg twice per second",
    space: true,
    introduced_in: "Rebirth"
  };
  var _838 = {
    name: "Book of Revelations",
    shown: true,
    bookworm: true,
    text: "+1 soul heart on use, changes floor boss to a horseman (once per chapter)",
    space: true,
    introduced_in: "Rebirth"
  };
  var _928 = {
    name: "The Mark",
    dmg: "1",
    shown: true,
    leviathan: true,
    speed: "0.2",
    sin_hearts: "1",
    introduced_in: "Rebirth"
  };
  var _039 = {
    name: "The Pact",
    dmg: "0.5",
    shown: true,
    leviathan: true,
    tears: "0.72",
    sin_hearts: "2",
    introduced_in: "Rebirth"
  };
  var _170 = {
    name: "Dead Cat",
    shown: true,
    guppy: true,
    text: "+9 lives, sets red heart containers to 1",
    introduced_in: "Rebirth"
  };
  var _241 = {
    name: "Lord of the Pit",
    speed: "0.3",
    leviathan: true,
    shown: true,
    text: "Grants fly",
    introduced_in: "Rebirth"
  };
  var _341 = {
    name: "The Nail",
    shown: true,
    leviathan: true,
    text: "On use: +1 half black heart, temporarily crush rocks, temporary -0.18 speed and 0.7 dmg up",
    space: true,
    introduced_in: "Rebirth"
  };
  var _438 = {
    name: "We Need To Go Deeper!",
    shown: true,
    text: "Spawns a trapdoor (10% chance for crawlspace)",
    space: true,
    introduced_in: "Rebirth"
  };
  var _538 = {
    name: "Deck of Cards",
    shown: true,
    text: "Spawns a random card",
    space: true,
    introduced_in: "Rebirth"
  };
  var _639 = {
    name: "Monstro's Tooth",
    shown: true,
    text: "Summons monstro (120 dmg)",
    space: true,
    introduced_in: "Rebirth"
  };
  var _739 = {
    name: "Loki's Horns",
    shown: true,
    text: "Chance to shoot 4 tears instead of 1",
    introduced_in: "Rebirth"
  };
  var _839 = {
    name: "Little Chubby",
    shown: true,
    text: "Familiar (3.5 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _929 = {
    name: "Spider Bite",
    shown: true,
    spiderbaby: true,
    text: "Chance to shoot slowing tears",
    introduced_in: "Rebirth"
  };
  var _040 = {
    name: "The Small Rock",
    dmg: "1",
    speed: "-0.2",
    tears: "0.2",
    shown: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _171 = {
    name: "Spelunker Hat",
    shown: true,
    text: "See adjacent special rooms on the map",
    introduced_in: "Rebirth"
  };
  var _248 = {
    name: "Super Bandage",
    health: "1",
    shown: true,
    health_only: true,
    soul_hearts: "2",
    text: "",
    introduced_in: "Rebirth"
  };
  var _348 = {
    name: "The Gamekid",
    shown: true,
    text: "Temporary invincibility and enemies become scared, 20 contact dmg twice per second",
    space: true,
    introduced_in: "Rebirth"
  };
  var _439 = {
    name: "Sack of Pennies",
    shown: true,
    text: "Spawns a coin every 2 rooms cleared",
    introduced_in: "Rebirth"
  };
  var _539 = {
    name: "Robo-Baby",
    shown: true,
    conjoined: true,
    text: "Familiar (3.5 dmg / laser)",
    introduced_in: "Rebirth"
  };
  var _640 = {
    name: "Little C.H.A.D.",
    shown: true,
    text: "Spawns a half red heart every 2 rooms cleared",
    introduced_in: "Rebirth"
  };
  var _740 = {
    name: "The Book of Sin",
    shown: true,
    bookworm: true,
    text: "Spawns a random pickup",
    space: true,
    introduced_in: "Rebirth"
  };
  var _840 = {
    name: "The Relic",
    shown: true,
    text: "Spawns a soul heart every few rooms cleared",
    introduced_in: "Rebirth"
  };
  var _930 = {
    name: "Little Gish",
    shown: true,
    text: "Familiar (3.5 dmg / tear, chance to slow)",
    introduced_in: "Rebirth"
  };
  var _007 = {
    name: "Little Steven",
    shown: true,
    conjoined: true,
    text: "Familiar (3.5 dmg / tear, homing tears)",
    introduced_in: "Rebirth"
  };
  var _0110 = {
    name: "The Halo",
    dmg: "0.3",
    health: "1",
    height: "0.5",
    range: "0.38",
    shown: true,
    seraphim: true,
    speed: "0.3",
    tears: "0.2",
    text: "",
    introduced_in: "Rebirth"
  };
  var _0210 = {
    name: "Mom's Bottle of Pills",
    shown: true,
    yesmother: true,
    text: "Spawns a random pill",
    space: true,
    introduced_in: "Rebirth"
  };
  var _0310 = {
    name: "The Common Cold",
    shown: true,
    text: "Chance to shoot poison tears",
    introduced_in: "Rebirth"
  };
  var _048 = {
    name: "The Parasite",
    shown: true,
    text: "Tears split into 2 pieces, each does 1/4 dmg",
    introduced_in: "Rebirth"
  };
  var _058 = {
    name: "The D6",
    shown: true,
    text: "Rerolls pedestal items",
    space: true,
    introduced_in: "Rebirth"
  };
  var _068 = {
    name: "Mr. Mega",
    shown: true,
    text: "+5 bombs, bomb blast radius increased, bomb dmg increased from 100 to 185",
    introduced_in: "Rebirth"
  };
  var _078 = {
    name: "Pinking Shears",
    shown: true,
    text: "Spawns a melee familiar, speed of the body depends of player's speed",
    space: true,
    introduced_in: "Rebirth"
  };
  var _088 = {
    name: "The Wafer",
    shown: true,
    text: "All dmg is reduced to half a heart",
    introduced_in: "Rebirth"
  };
  var _098 = {
    name: "Money = Power",
    shown: true,
    text: "+0.04 dmg per coin held",
    introduced_in: "Rebirth"
  };
  var _1010 = {
    name: "Mom's Contacts",
    range: "0.38",
    shown: true,
    yesmother: true,
    text: "Chance to shoot petrifying tears",
    introduced_in: "Rebirth"
  };
  var _1110 = {
    name: "The Bean",
    shown: true,
    text: "Poison fart (26 dmg if the enemy is poisoned, 5 otherwise)",
    space: true,
    introduced_in: "Rebirth"
  };
  var _1210 = {
    name: "Guardian Angel",
    shown: true,
    conjoined: true,
    text: "Orbital (7 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _1310 = {
    name: "Demon Baby",
    shown: true,
    conjoined: true,
    text: "Familiar (3 dmg / tear)",
    introduced_in: "Rebirth"
  };
  var _1410 = {
    name: "Mom's Knife",
    shown: true,
    text: "Replaces tears with a knife",
    yesmother: true,
    introduced_in: "Rebirth"
  };
  var _1510 = {
    name: "Ouija Board",
    shown: true,
    text: "Spectral tears",
    introduced_in: "Rebirth"
  };
  var _1610 = {
    name: "9 Volt",
    shown: true,
    text: "Quicker charge, fully charges current item on pickup",
    introduced_in: "Rebirth"
  };
  var _178 = {
    name: "Dead Bird",
    shown: true,
    text: "Spawns a bird familiar when hit (2 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _188 = {
    name: "Brimstone",
    tears_x: "0.33",
    shown: true,
    leviathan: true,
    text: "Tears become blood laser, hits 9 times",
    introduced_in: "Rebirth"
  };
  var _198 = {
    name: "Blood Bag",
    health: "1",
    speed: "0.3",
    shown: true,
    text: "Heals 5 red hearts",
    introduced_in: "Rebirth"
  };
  var _207 = {
    name: "Odd Mushroom (Thin)",
    shown: true,
    dmg_x: "0.9",
    dmg: "0.4",
    speed: "0.3",
    tears: "1.7",
    funguy: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _2110 = {
    name: "Odd Mushroom (Thick)",
    dmg: "1",
    health: "1",
    height: "0.5",
    range: "0.38",
    shown: true,
    speed: "-0.2",
    funguy: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _2210 = {
    name: "Whore of Babylon",
    dmg: "1.5",
    shown: true,
    speed: "0.3",
    text: "Only active if at a half red heart or less",
    introduced_in: "Rebirth"
  };
  var _2310 = {
    name: "Monster Manual",
    shown: true,
    bookworm: true,
    text: "Summons a random familiar that stays for the entire floor",
    space: true,
    introduced_in: "Rebirth"
  };
  var _249 = {
    name: "Dead Sea Scrolls",
    shown: true,
    text: "Performs one effect between 32 active items",
    space: true,
    introduced_in: "Rebirth"
  };
  var _258 = {
    name: "Bobby-Bomb",
    shown: true,
    text: "+5 bombs, homing bombs",
    introduced_in: "Rebirth"
  };
  var _268 = {
    name: "Razor Blade",
    shown: true,
    text: "Deals 1 heart dmg to yourself, gives a temporary dmg up per use",
    space: true,
    introduced_in: "Rebirth"
  };
  var _278 = {
    name: "Forget Me Now",
    shown: true,
    text: "Generates a new floor, single use",
    space: true,
    introduced_in: "Rebirth"
  };
  var _288 = {
    name: "Forever Alone",
    shown: true,
    beelzebub: true,
    text: "Orbital (2 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _298 = {
    name: "Bucket of Lard",
    health: "2",
    shown: true,
    speed: "-0.2",
    text: "",
    introduced_in: "Rebirth"
  };
  var _307 = {
    name: "A Pony",
    shown: true,
    text: "Grants fly, minimum speed 1.5, deals player's damage * 4 + 28 while charging enemies",
    space: true,
    introduced_in: "Rebirth"
  };
  var _3110 = {
    name: "Bomb Bag",
    shown: true,
    text: "Spawns a bomb every few rooms cleared",
    introduced_in: "Rebirth"
  };
  var _3210 = {
    name: "A Lump of Coal",
    shown: true,
    text: "dmg up up to +25% based on tear distance",
    introduced_in: "Rebirth"
  };
  var _3310 = {
    name: "Guppy's Paw",
    shown: true,
    guppy: true,
    text: "-1 red heart container and +3 soul hearts on use",
    space: true,
    introduced_in: "Rebirth"
  };
  var _349 = {
    name: "Guppy's Tail",
    shown: true,
    guppy: true,
    text: "Increased chance to find chests",
    introduced_in: "Rebirth"
  };
  var _358 = {
    name: "IV Bag",
    shown: true,
    text: "Spawns coins and deals dmg to yourself",
    space: true,
    introduced_in: "Rebirth"
  };
  var _368 = {
    name: "Best Friend",
    shown: true,
    text: "Spawns a decoy (185 dmg)",
    space: true,
    introduced_in: "Rebirth"
  };
  var _378 = {
    name: "Remote Detonator",
    shown: true,
    text: "+5 bombs, manually detonate bombs",
    space: true,
    introduced_in: "Rebirth"
  };
  var _387 = {
    name: "Stigmata",
    dmg: "0.3",
    health: "1",
    shown: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _397 = {
    name: "Mom's Purse",
    shown: true,
    yesmother: true,
    text: "Spawns a trinket",
    introduced_in: "Rebirth"
  };
  var _406 = {
    name: "Bob's Curse",
    shown: true,
    bob: true,
    text: "+5 bombs, bombs deal poison dmg and leave poisoning gas cloud behind them",
    introduced_in: "Rebirth"
  };
  var _4110 = {
    name: "Pageant Boy",
    shown: true,
    text: "Spawns 7 coins",
    introduced_in: "Rebirth"
  };
  var _4210 = {
    name: "Scapular",
    shown: true,
    text: "+1 soul heart if hit to half a red heart (once per room)",
    introduced_in: "Rebirth"
  };
  var _4310 = {
    name: "Speed Ball",
    shot_speed: "0.2",
    shown: true,
    spun: true,
    speed: "0.3",
    text: "",
    introduced_in: "Rebirth"
  };
  var _447 = {
    name: "Bum Friend",
    shown: true,
    superbum: true,
    text: "Turns coins into other pickups",
    introduced_in: "Rebirth"
  };
  var _457 = {
    name: "Guppy's Head",
    shown: true,
    guppy: true,
    text: "Spawn 2-4 blue flies",
    space: true,
    introduced_in: "Rebirth"
  };
  var _467 = {
    name: "Prayer Card",
    shown: true,
    text: "Gives an eternal heart",
    space: true,
    introduced_in: "Rebirth"
  };
  var _477 = {
    name: "Notched Axe",
    shown: true,
    text: "Melee weapon that damage enemies, break rocks and open doors",
    space: true,
    introduced_in: "Rebirth"
  };
  var _487 = {
    name: "Infestation",
    shown: true,
    text: "Spawns 2-6 blue flies when hit",
    introduced_in: "Rebirth"
  };
  var _497 = {
    name: "Ipecac",
    tears_x: "0.33",
    range: "-1.3",
    shown: true,
    bob: true,
    text: "Explosive tears",
    dmg: "40",
    introduced_in: "Rebirth"
  };
  var _506 = {
    name: "Tough Love",
    shown: true,
    text: "Chance to shoot teeth tears (3.2x dmg)",
    introduced_in: "Rebirth"
  };
  var _5110 = {
    name: "The Mulligan",
    shown: true,
    beelzebub: true,
    text: "1/6 chance for blue fly on tear hit",
    introduced_in: "Rebirth"
  };
  var _5210 = {
    name: "Technology 2",
    shown: true,
    tears_x: "0.66",
    text: "Right eye shoots a permanent laser (piercing)",
    introduced_in: "Rebirth"
  };
  var _5310 = {
    name: "Mutant Spider",
    tears_x: "0.42",
    shown: true,
    spiderbaby: true,
    text: "Quad shot",
    introduced_in: "Rebirth"
  };
  var _547 = {
    name: "Chemical Peel",
    shown: true,
    text: "+2 flat dmg every 2nd shot",
    introduced_in: "Rebirth"
  };
  var _557 = {
    name: "The Peeper",
    shown: true,
    text: "Familiar (8 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _567 = {
    name: "Habit",
    shown: true,
    text: "Recharge one tick of your active item when hit",
    introduced_in: "Rebirth"
  };
  var _577 = {
    name: "Bloody Lust",
    shown: true,
    text: "dmg up when hit (only for the current floor, max +6 dmg at 6 hits)",
    introduced_in: "Rebirth"
  };
  var _587 = {
    name: "Crystal Ball",
    shown: true,
    text: "Reveals the floor, spawns a card / rune / soul heart",
    space: true,
    introduced_in: "Rebirth"
  };
  var _597 = {
    name: "Spirit of the Night",
    shown: true,
    leviathan: true,
    text: "Flight, spectral tears",
    introduced_in: "Rebirth"
  };
  var _606 = {
    name: "Crack The Sky",
    shown: true,
    text: "Creates 5 beams (base dmg + 20 dmg / tick)",
    space: true,
    introduced_in: "Rebirth"
  };
  var _6110 = {
    name: "Ankh",
    shown: true,
    text: "+1 life (will respawn as Blue Baby)",
    introduced_in: "Rebirth"
  };
  var _6210 = {
    name: "Celtic Cross",
    shown: true,
    text: "Chance for shield when hit (based on luck)",
    seraphim: true,
    introduced_in: "Rebirth"
  };
  var _6310 = {
    name: "Ghost Baby",
    shown: true,
    conjoined: true,
    text: "Familiar (3.5 dmg / tear)",
    introduced_in: "Rebirth"
  };
  var _647 = {
    name: "The Candle",
    shown: true,
    text: "Shoots a blue flame",
    space: true,
    introduced_in: "Rebirth"
  };
  var _657 = {
    name: "Cat-o-nine-tails",
    dmg: "1",
    shot_speed: "0.23",
    shown: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _667 = {
    name: "D20",
    shown: true,
    text: "Rerolls pickups",
    space: true,
    introduced_in: "Rebirth"
  };
  var _677 = {
    name: "Harlequin Baby",
    shown: true,
    conjoined: true,
    text: "Familiar (4 dmg / tear)",
    introduced_in: "Rebirth"
  };
  var _687 = {
    name: "Epic Fetus",
    shown: true,
    text: "Replaces tears with missiles (20x dmg)",
    introduced_in: "Rebirth"
  };
  var _697 = {
    name: "Polyphemus",
    tears_x: "0.42",
    dmg: "4",
    dmg_x: "2",
    shown: true,
    text: "Excess damage pierces",
    introduced_in: "Rebirth"
  };
  var _706 = {
    name: "Daddy Longlegs",
    spiderbaby: true,
    shown: true,
    text: "Familiar (40 dmg / stomp)",
    introduced_in: "Rebirth"
  };
  var _7110 = {
    name: "Spider Butt",
    shown: true,
    spiderbaby: true,
    text: "Temporarily slows enemies and deals 10 dmg, killed enemies by the item spawn blue spiders",
    space: true,
    introduced_in: "Rebirth"
  };
  var _7210 = {
    name: "Sacrificial Dagger",
    shown: true,
    text: "Orbital (15 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _7310 = {
    name: "Mitre",
    shown: true,
    seraphim: true,
    text: "33% to change red heart drop into soul heart",
    introduced_in: "Rebirth"
  };
  var _747 = {
    name: "Rainbow Baby",
    shown: true,
    conjoined: true,
    text: "Familiar (shoots random tears)",
    introduced_in: "Rebirth"
  };
  var _757 = {
    name: "Dad's Key",
    shown: true,
    text: "Opens almost all doors",
    space: true,
    introduced_in: "Rebirth"
  };
  var _767 = {
    name: "Stem Cells",
    health: "1",
    shot_speed: "0.16",
    shown: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _777 = {
    name: "Portable Slot",
    shown: true,
    text: "Acts like a Slot Machine",
    space: true,
    introduced_in: "Rebirth"
  };
  var _787 = {
    name: "Holy Water",
    shown: true,
    text: "Can be thrown, creates a pool when broken (8 dmg / tick) that also petrify enemies",
    introduced_in: "Rebirth"
  };
  var _797 = {
    name: "Fate",
    shown: true,
    text: "Flight, eternal heart",
    introduced_in: "Rebirth"
  };
  var _806 = {
    name: "The Black Bean",
    shown: true,
    text: "Farts when hit (26 dmg)",
    introduced_in: "Rebirth"
  };
  var _8110 = {
    name: "White Pony",
    shown: true,
    text: "Grants fly, minimum speed 1.5, leaves trail of light beams that deals player's damage * 4 + 10 on use",
    space: true,
    introduced_in: "Rebirth"
  };
  var _8210 = {
    name: "Sacred Heart",
    dmg_x: "2.3",
    dmg: "1",
    height: "0.75",
    range: "0.5",
    shot_speed: "-0.25",
    shown: true,
    tears: "-0.4",
    text: "full heal",
    seraphim: true,
    introduced_in: "Rebirth"
  };
  var _8310 = {
    name: "Toothpicks",
    shot_speed: "0.16",
    shown: true,
    tears: "0.72",
    text: "",
    introduced_in: "Rebirth"
  };
  var _847 = {
    name: "Holy Grail",
    health: "1",
    shown: true,
    seraphim: true,
    text: "flight",
    introduced_in: "Rebirth"
  };
  var _857 = {
    name: "Dead Dove",
    shown: true,
    seraphim: true,
    text: "Flight, spectral tears",
    introduced_in: "Rebirth"
  };
  var _867 = {
    name: "Blood Rights",
    shown: true,
    text: "Deals 1 heart dmg to yourself, deals 40 dmg to all enemies",
    space: true,
    introduced_in: "Rebirth"
  };
  var _877 = {
    name: "Guppy's Hairball",
    shown: true,
    guppy: true,
    text: "Familiar (5 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _887 = {
    name: "Abel",
    shown: true,
    text: "Familiar (3.5 dmg / tear, 7.5 dmg if picked by Cain or T. Cain)",
    conjoined: true,
    introduced_in: "Rebirth"
  };
  var _897 = {
    name: "SMB Super Fan",
    dmg: "0.3",
    health: "1",
    height: "1",
    range: "1.5",
    shown: true,
    speed: "0.2",
    tears: "0.2",
    text: "full heal",
    introduced_in: "Rebirth"
  };
  var _906 = {
    name: "Pyro",
    shown: true,
    text: "+99 bombs",
    introduced_in: "Rebirth"
  };
  var _9110 = {
    name: "3 Dollar Bill",
    shown: true,
    text: "Random tear effects that change every 3 seconds",
    introduced_in: "Rebirth"
  };
  var _9210 = {
    name: "Telepathy for Dummies",
    shown: true,
    bookworm: true,
    text: "Temporary homing tears and range up",
    space: true,
    introduced_in: "Rebirth"
  };
  var _937 = {
    name: "Meat!",
    dmg: "0.3",
    health: "1",
    shown: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _947 = {
    name: "Magic 8 Ball",
    shot_speed: "0.16",
    shown: true,
    text: "Spawns a random card on pickup",
    introduced_in: "Rebirth"
  };
  var _957 = {
    name: "Mom's Coin Purse",
    shown: true,
    yesmother: true,
    text: "Spawns 4 random pills on pickup",
    introduced_in: "Rebirth"
  };
  var _967 = {
    name: "Squeezy",
    shown: true,
    tears: "0.4",
    soul_hearts: "2",
    text: "",
    introduced_in: "Rebirth"
  };
  var _977 = {
    name: "Jesus Juice",
    dmg: "0.5",
    height: "0.5",
    range: "0.38",
    shown: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _987 = {
    name: "Box",
    shown: true,
    text: "Spawns 1 coin, 1 key, 1 bomb, 1 heart, 1 card, 1 pill, and 1 trinket on pickup",
    introduced_in: "Rebirth"
  };
  var _997 = {
    name: "Mom's Key",
    shown: true,
    yesmother: true,
    text: "More pickups from chests, spawns 2 keys on pickup",
    introduced_in: "Rebirth"
  };
  var _008 = {
    name: "Mom's Eyeshadow",
    shown: true,
    yesmother: true,
    text: "Chance to shoot charm tears",
    introduced_in: "Rebirth"
  };
  var _0111 = {
    name: "Iron Bar",
    dmg: "0.3",
    shown: true,
    text: "Chance to shoot confusion tears",
    introduced_in: "Rebirth"
  };
  var _0211 = {
    name: "Midas Touch",
    shown: true,
    text: "Contact dmg equal to number of cents held",
    introduced_in: "Rebirth"
  };
  var _0311 = {
    name: "Humbling Bundle",
    shown: true,
    text: "Chance to double coin, key, bomb, and heart pickups",
    introduced_in: "Rebirth"
  };
  var _049 = {
    name: "Fanny Pack",
    shown: true,
    text: "Chance to spawn a coin, bomb, or key when hit",
    introduced_in: "Rebirth"
  };
  var _059 = {
    name: "Sharp Plug",
    shown: true,
    text: "Deals half heart dmg to self per charge missing, fully recharges item",
    introduced_in: "Rebirth"
  };
  var _069 = {
    name: "Guillotine",
    dmg: "1",
    shown: true,
    tears: "0.5",
    text: "Orbital (7 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _079 = {
    name: "Ball of Bandages",
    shown: true,
    text: "Orbital (7 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _089 = {
    name: "Champion Belt",
    dmg: "1",
    shown: true,
    text: "Greater chance of champion enemies",
    introduced_in: "Rebirth"
  };
  var _099 = {
    name: "Butt Bombs",
    shown: true,
    ohcrap: true,
    text: "+5 bombs, bombs confuse all enemies, bombs deal 10 dmg to all enemies",
    introduced_in: "Rebirth"
  };
  var _1011 = {
    name: "Gnawed Leaf",
    shown: true,
    text: "Turn invincible by standing still",
    introduced_in: "Rebirth"
  };
  var _1111 = {
    name: "Spiderbaby",
    shown: true,
    spiderbaby: true,
    text: "Spawns 2-5 blue spiders when hit",
    introduced_in: "Rebirth"
  };
  var _1211 = {
    name: "Guppy's Collar",
    shown: true,
    guppy: true,
    text: "50% chance to respawn with 1/2 soul heart",
    introduced_in: "Rebirth"
  };
  var _1311 = {
    name: "Lost Contact",
    shown: true,
    shot_speed: "-0.15",
    text: "Tears can hit enemy tears",
    introduced_in: "Rebirth"
  };
  var _1411 = {
    name: "Anemic",
    range: "1.5",
    shown: true,
    text: "Makes a trail of creep when hit",
    introduced_in: "Rebirth"
  };
  var _1511 = {
    name: "Goat Head",
    shown: true,
    text: "Devil/Angel Rooms are always open",
    introduced_in: "Rebirth"
  };
  var _1611 = {
    name: "Ceremonial Robes",
    dmg: "1",
    shown: true,
    sin_hearts: "3",
    text: "",
    introduced_in: "Rebirth"
  };
  var _179 = {
    name: "Mom's Wig",
    shown: true,
    yesmother: true,
    text: "Chance to spawn blue spiders when shooting",
    introduced_in: "Rebirth"
  };
  var _189 = {
    name: "Placenta",
    health: "1",
    shown: true,
    text: "Chance to heal half a heart every minute",
    introduced_in: "Rebirth"
  };
  var _199 = {
    name: "Old Bandage",
    health: "1",
    shown: true,
    text: "Chance to drop a red heart on hit",
    introduced_in: "Rebirth"
  };
  var _208 = {
    name: "Sad Bombs",
    shown: true,
    text: "+5 bombs, bombs shoot out 8 tears",
    introduced_in: "Rebirth"
  };
  var _2111 = {
    name: "Rubber Cement",
    shown: true,
    text: "Bouncy tears (tears bounce off rocks/walls)",
    introduced_in: "Rebirth"
  };
  var _2211 = {
    name: "Anti-Gravity",
    shown: true,
    tears: "1",
    text: "Hovering tears",
    introduced_in: "Rebirth"
  };
  var _2311 = {
    name: "Pyromaniac",
    shown: true,
    text: "+5 bombs, explosions heal 1 half red heart, fire and bomb immunity",
    introduced_in: "Rebirth"
  };
  var _2410 = {
    name: "Cricket's Body",
    range: "-1.3",
    shown: true,
    tears: "0.5",
    text: "Shots split into 4 pieces, each deals 1/2 dmg",
    introduced_in: "Rebirth"
  };
  var _259 = {
    name: "Gimpy",
    shown: true,
    text: "Chance to spawn soul hearts on hit, chance for enemies to drop half a red heart",
    introduced_in: "Rebirth"
  };
  var _269 = {
    name: "Black Lotus",
    health: "1",
    soul_hearts: "1",
    sin_hearts: "1",
    shown: true,
    health_only: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _279 = {
    name: "Piggy Bank",
    shown: true,
    text: "+3 cents, 1-2 pennies spawn on hit",
    introduced_in: "Rebirth"
  };
  var _289 = {
    name: "Mom's Perfume",
    shown: true,
    yesmother: true,
    tears: "0.5",
    text: "Chance to shoot fear tears",
    introduced_in: "Rebirth"
  };
  var _299 = {
    name: "Monstro's Lung",
    shown: true,
    text: "Charged tear spray",
    tears_x: "0.231",
    introduced_in: "Rebirth"
  };
  var _308 = {
    name: "Abaddon",
    sin_hearts: "2",
    dmg: "1.5",
    leviathan: true,
    shown: true,
    speed: "0.2",
    text: "Convert all red hearts to black hearts, chance to shoot fear tears",
    introduced_in: "Rebirth"
  };
  var _3111 = {
    name: "Ball of Tar",
    shown: true,
    text: "Chance to shoot slowing tears, makes a trail of slowing creep",
    introduced_in: "Rebirth"
  };
  var _3211 = {
    name: "Stop Watch",
    shown: true,
    speed: "0.3",
    text: "Slows enemies",
    introduced_in: "Rebirth"
  };
  var _3311 = {
    name: "Tiny Planet",
    height: "7",
    shown: true,
    text: "Orbiting tears",
    introduced_in: "Rebirth"
  };
  var _3410 = {
    name: "Infestation 2",
    shown: true,
    spiderbaby: true,
    text: "Spawns a blue spider on enemy death",
    introduced_in: "Rebirth"
  };
  var _369 = {
    name: "E. Coli",
    shown: true,
    ohcrap: true,
    text: "Enemies turn to poop on touch",
    introduced_in: "Rebirth"
  };
  var _379 = {
    name: "Death's Touch",
    dmg: "1.5",
    shown: true,
    tears: "-0.6",
    text: "Scythe tears (piercing)",
    introduced_in: "Rebirth"
  };
  var _388 = {
    name: "Key Piece #1",
    shown: true,
    text: "Both key pieces together unlock the door to Mega Satan",
    introduced_in: "Rebirth"
  };
  var _398 = {
    name: "Key Piece #2",
    shown: true,
    text: "Both key pieces together unlock the door to Mega Satan",
    introduced_in: "Rebirth"
  };
  var _407 = {
    name: "Experimental Treatment",
    shown: true,
    spun: true,
    text: "Randomly increases or decreases each stats",
    introduced_in: "Rebirth"
  };
  var _4111 = {
    name: "Contract From Below",
    shown: true,
    text: "Doubles pickups, increased chance of Double Trouble boss fights",
    introduced_in: "Rebirth"
  };
  var _4211 = {
    name: "Infamy",
    shown: true,
    text: "Chance to block a projectile (from any direction)",
    introduced_in: "Rebirth"
  };
  var _4311 = {
    name: "Trinity Shield",
    shown: true,
    text: "Blocks all projectiles from the front",
    introduced_in: "Rebirth"
  };
  var _448 = {
    name: "Tech.5",
    shown: true,
    text: "Chance to shoot an additional laser (scales with dmg, ignores tear rate)",
    introduced_in: "Rebirth"
  };
  var _458 = {
    name: "20/20",
    dmg_x: "0.75",
    shown: true,
    text: "Double shot",
    introduced_in: "Rebirth"
  };
  var _468 = {
    name: "Blue Map",
    shown: true,
    text: "Reveals Secret and Super Secret Rooms",
    introduced_in: "Rebirth"
  };
  var _478 = {
    name: "BFFS!",
    shown: true,
    text: "Familiars do 2x dmg",
    introduced_in: "Rebirth"
  };
  var _488 = {
    name: "Hive Mind",
    shown: true,
    beelzebub: true,
    spiderbaby: true,
    text: "Blue spiders and flies do 2x dmg",
    introduced_in: "Rebirth"
  };
  var _498 = {
    name: "There's Options",
    shown: true,
    text: "Choice of 2 items after each boss",
    introduced_in: "Rebirth"
  };
  var _507 = {
    name: "Bogo Bombs",
    shown: true,
    text: "Doubles bomb pickups",
    introduced_in: "Rebirth"
  };
  var _5111 = {
    name: "Starter Deck",
    shown: true,
    text: "Pills become cards, can carry 2 cards instead of 1",
    introduced_in: "Rebirth"
  };
  var _5211 = {
    name: "Little Baggy",
    shown: true,
    text: "Cards become pills, can carry 2 pills instead of 1",
    introduced_in: "Rebirth"
  };
  var _5311 = {
    name: "Magic Scab",
    health: "1",
    luck: "1",
    shown: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _548 = {
    name: "Blood Clot",
    shown: true,
    text: "+1 flat dmg and +5 range for every 2nd shot",
    introduced_in: "Rebirth"
  };
  var _558 = {
    name: "Screw",
    shot_speed: "0.2",
    shown: true,
    tears: "0.5",
    text: "",
    introduced_in: "Rebirth"
  };
  var _568 = {
    name: "Hot Bombs",
    shown: true,
    text: "+5 bombs, leaves fires that do 22 dmg, 16 dmg contact, fire immunity",
    introduced_in: "Rebirth"
  };
  var _578 = {
    name: "Fire Mind",
    shown: true,
    text: "Burns enemies, chance to shoot exploding tears (2x dmg + 22)",
    introduced_in: "Rebirth"
  };
  var _588 = {
    name: "Missing No.",
    shown: true,
    text: "Rerolls your items on pickup and on the start of every floor",
    introduced_in: "Rebirth"
  };
  var _598 = {
    dmg: "1",
    name: "Dark Matter",
    shown: true,
    text: "Chance to shoot fear tears",
    introduced_in: "Rebirth"
  };
  var _607 = {
    name: "Black Candle",
    shown: true,
    sin_hearts: "1",
    text: "Removes all floor curses, +15% deal chance",
    introduced_in: "Rebirth"
  };
  var _6111 = {
    name: "Proptosis",
    dmg: "0.5",
    shown: true,
    text: "dmg goes from 300% to 0 the further the tear goes",
    introduced_in: "Rebirth"
  };
  var _6211 = {
    name: "Missing Page 2",
    shown: true,
    sin_hearts: "1",
    text: "Deals 80 dmg to enemies when hit if at 1 heart or lower and increase all kind of black heart dmg from 40 to 80",
    introduced_in: "Rebirth"
  };
  var _6311 = {
    name: "Clear Rune",
    shown: true,
    text: "Mimics the effect of the currently held rune",
    space: true,
    introduced_in: "Repentance"
  };
  var _648 = {
    name: "Smart Fly",
    shown: true,
    beelzebub: true,
    text: "Spawns a fly familiar when hit (1.5 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _658 = {
    name: "Dry Baby",
    shown: true,
    conjoined: true,
    text: "Blocks projectiles, chance to deal 40 dmg to the room on block",
    introduced_in: "Rebirth"
  };
  var _668 = {
    name: "Juicy Sack",
    shown: true,
    spiderbaby: true,
    text: "Spawns 1-2 blue spiders every room cleared, makes a trail of slowing creep",
    introduced_in: "Rebirth"
  };
  var _678 = {
    name: "Robo-Baby 2.0",
    conjoined: true,
    shown: true,
    text: "Familiar (3.5 dmg / laser)",
    introduced_in: "Rebirth"
  };
  var _688 = {
    name: "Rotten Baby",
    shown: true,
    conjoined: true,
    text: "Familiar (shoots blue flies)",
    introduced_in: "Rebirth"
  };
  var _698 = {
    name: "Headless Baby",
    shown: true,
    conjoined: true,
    text: "Makes a trail of creep",
    introduced_in: "Rebirth"
  };
  var _707 = {
    name: "Leech",
    shown: true,
    text: "Familiar (1.5 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _7111 = {
    name: "Mystery Sack",
    shown: true,
    text: "Spawns hearts, coins, bombs, or keys every few rooms cleared",
    introduced_in: "Rebirth"
  };
  var _7211 = {
    name: "BBF",
    shown: true,
    beelzebub: true,
    text: "Familiar (110 dmg explosion)",
    introduced_in: "Rebirth"
  };
  var _7311 = {
    name: "Bob's Brain",
    shown: true,
    bob: true,
    text: "Familiar (100 dmg explosion + poison dmg)",
    introduced_in: "Rebirth"
  };
  var _748 = {
    name: "Best Bud",
    shown: true,
    beelzebub: true,
    text: "Spawns a fly orbital when hit (10 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _758 = {
    name: "Lil' Brimstone",
    shown: true,
    conjoined: true,
    text: "Familiar (20 dmg / blood laser)",
    introduced_in: "Rebirth"
  };
  var _768 = {
    name: "Isaac's Heart",
    shown: true,
    text: "Player's hitbox is on the heart (doesn't prevent self damage), charge it and release it to repel enemies and shoot tears in 8 directions",
    introduced_in: "Rebirth"
  };
  var _778 = {
    name: "Lil' Haunt",
    shown: true,
    text: "Familiar (2 dmg / tick, chance to fear)",
    introduced_in: "Rebirth"
  };
  var _788 = {
    name: "Dark Bum",
    shown: true,
    superbum: true,
    text: "Converts 1.5 red heart pickups to a black heart, spider, pill, card or rune",
    introduced_in: "Rebirth"
  };
  var _798 = {
    name: "Big Fan",
    shown: true,
    beelzebub: true,
    text: "Orbital (2 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _807 = {
    name: "Sissy Long Legs",
    shown: true,
    spiderbaby: true,
    text: "Spawns blue spiders, charms enemies upon contact",
    introduced_in: "Rebirth"
  };
  var _8111 = {
    name: "Punching Bag",
    shown: true,
    text: "Familiar (decoy)",
    introduced_in: "Rebirth"
  };
  var _8211 = {
    name: "How To Jump",
    shown: true,
    bookworm: true,
    text: "Can jump over obstacles",
    space: true,
    introduced_in: "Rebirth"
  };
  var _8311 = {
    name: "D100",
    shown: true,
    text: "All dice effects at once (except Spindown Dice)",
    space: true,
    introduced_in: "Rebirth"
  };
  var _848 = {
    name: "D4",
    shown: true,
    text: "Rerolls current items",
    space: true,
    introduced_in: "Rebirth"
  };
  var _858 = {
    name: "D10",
    shown: true,
    text: "Rerolls enemies in the room",
    space: true,
    introduced_in: "Rebirth"
  };
  var _868 = {
    name: "Blank Card",
    shown: true,
    text: "Mimics the effect of the currently held card",
    space: true,
    introduced_in: "Rebirth"
  };
  var _878 = {
    name: "Book of Secrets",
    shown: true,
    bookworm: true,
    text: "Randomly get Treasure Map, Compass, or Blue Map for the floor",
    space: true,
    introduced_in: "Rebirth"
  };
  var _888 = {
    name: "Box of Spiders",
    shown: true,
    spiderbaby: true,
    text: "Spawns 4-8 blue spiders",
    space: true,
    introduced_in: "Rebirth"
  };
  var _898 = {
    name: "Red Candle",
    shown: true,
    text: "Shoots a flame that times out after ten seconds",
    space: true,
    introduced_in: "Rebirth"
  };
  var _907 = {
    name: "The Jar",
    shown: true,
    text: "Stores red hearts for later",
    space: true,
    introduced_in: "Rebirth"
  };
  var _9111 = {
    name: "Flush!",
    shown: true,
    ohcrap: true,
    text: "Non-boss enemies turn to poop, instantly kills poop bosses",
    space: true,
    introduced_in: "Rebirth"
  };
  var _9211 = {
    name: "The Satanic Bible",
    shown: true,
    bookworm: true,
    text: "On use: +1 black heart, transforms boss item into a devil deal",
    space: true,
    introduced_in: "Rebirth"
  };
  var _938 = {
    name: "Head of Krampus",
    shown: true,
    text: "Create 4 blood lasers (190 dmg / laser)",
    space: true,
    introduced_in: "Rebirth"
  };
  var _948 = {
    name: "Butter Bean",
    shown: true,
    text: "Knocks back enemies. If pushed enemies hit a wall, they take 10 dmg",
    space: true,
    introduced_in: "Rebirth"
  };
  var _958 = {
    name: "Magic Fingers",
    shown: true,
    text: "Deals 2x + 10 dmg to the room, takes 1 coin per use, ignore +40 dmg from ipecac",
    space: true,
    introduced_in: "Rebirth"
  };
  var _968 = {
    name: "Converter",
    shown: true,
    text: "+1 red heart container, -1 soul/black hearts",
    space: true,
    introduced_in: "Rebirth"
  };
  var _978 = {
    name: "Pandora's Box",
    shown: true,
    text: "B1: 2soul, B2: 2bomb+2key, C1: boss, C2: boss+2soul, D1: 4soul, D2: 20coin, W1: 2boss, W2: Bible, Sheol: devil+black, Cath: angel+white, Void/Hush/DR: nothing, Chest: coin, Home: Red Key",
    space: true,
    introduced_in: "Rebirth"
  };
  var _988 = {
    name: "Unicorn Stump",
    shown: true,
    text: "Temporary invincibility",
    space: true,
    introduced_in: "Rebirth"
  };
  var _998 = {
    name: "Taurus",
    shown: true,
    speed: "-0.3",
    text: "Speed increases until you unicorn",
    introduced_in: "Rebirth"
  };
  var _009 = {
    name: "Aries",
    shown: true,
    speed: "0.25",
    text: "18 contact dmg + prevent dmg contact if moving fast enough",
    introduced_in: "Rebirth"
  };
  var _0112 = {
    name: "Cancer",
    shown: true,
    soul_hearts: "3",
    text: "All dmg is reduced to half a heart (after getting hit in the room)",
    introduced_in: "Rebirth"
  };
  var _0212 = {
    name: "Leo",
    shown: true,
    text: "Crush rocks",
    introduced_in: "Rebirth"
  };
  var _0312 = {
    name: "Virgo",
    shown: true,
    text: "Chance of shield when hit, bad pills become good",
    introduced_in: "Rebirth"
  };
  var _0410 = {
    name: "Libra",
    shown: true,
    text: "Evens out stats, +6 bombs, +6 keys, +6 cents",
    introduced_in: "Rebirth"
  };
  var _0510 = {
    name: "Scorpio",
    shown: true,
    text: "Chance to shoot poison tears",
    introduced_in: "Rebirth"
  };
  var _0610 = {
    name: "Sagittarius",
    shown: true,
    speed: "0.2",
    text: "Piercing tears",
    introduced_in: "Rebirth"
  };
  var _0710 = {
    name: "Capricorn",
    dmg: "0.5",
    health: "1",
    range: "0.75",
    shown: true,
    speed: "0.1",
    tears: "0.5",
    text: "+1 coin, +1 bomb, +1 key",
    introduced_in: "Rebirth"
  };
  var _0810 = {
    name: "Aquarius",
    shown: true,
    text: "Makes a trail of creep that inherit the player's tears effects and damage",
    introduced_in: "Rebirth"
  };
  var _0910 = {
    name: "Pisces",
    shown: true,
    tears: "0.5",
    text: "Knockback tears",
    introduced_in: "Rebirth"
  };
  var _1012 = {
    name: "Eve's Mascara",
    tears_x: "0.66",
    dmg_x: "2",
    shot_speed: "-0.5",
    shown: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _1112 = {
    name: "Judas' Shadow",
    shown: true,
    text: "+1 life (will respawn as Dark Judas with a 2.0 dmg multiplier)",
    introduced_in: "Rebirth"
  };
  var _1212 = {
    health: "1",
    name: "Maggy's Bow",
    shown: true,
    text: "Red heart pickups count for double",
    introduced_in: "Rebirth"
  };
  var _1312 = {
    name: "Holy Mantle",
    shown: true,
    text: "1-hit shield for every room",
    seraphim: true,
    introduced_in: "Rebirth"
  };
  var _1412 = {
    name: "Thunder Thighs",
    health: "1",
    shown: true,
    speed: "-0.4",
    text: "Crush rocks",
    introduced_in: "Rebirth"
  };
  var _1512 = {
    name: "Strange Attractor",
    shown: true,
    text: "Tears attract enemies and pickups",
    introduced_in: "Rebirth"
  };
  var _1612 = {
    name: "Cursed Eye",
    shown: true,
    text: "Charge shots, random teleport if hit while charging",
    introduced_in: "Rebirth"
  };
  var _1710 = {
    name: "Mysterious Liquid",
    shown: true,
    text: "Tears generate creep",
    introduced_in: "Rebirth"
  };
  var _1810 = {
    name: "Gemini",
    shown: true,
    text: "Familiar (3 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _1910 = {
    name: "Cain's Other Eye",
    shown: true,
    text: "Familiar (3.5 dmg / tear)",
    introduced_in: "Rebirth"
  };
  var _209 = {
    name: "???'s Only Friend",
    shown: true,
    beelzebub: true,
    text: "Familiar (3.5 dmg / tick)",
    introduced_in: "Rebirth"
  };
  var _2112 = {
    name: "Samson's Chains",
    shown: true,
    text: "5 dmg / tick, crushes rocks",
    introduced_in: "Rebirth"
  };
  var _2212 = {
    name: "Mongo Baby",
    shown: true,
    conjoined: true,
    text: "Familiar (copies other familiars or 3.5 dmg / tear)",
    introduced_in: "Rebirth"
  };
  var _2312 = {
    name: "Isaac's Tears",
    shown: true,
    text: "Fires 8 tears",
    space: true,
    introduced_in: "Rebirth"
  };
  var _2411 = {
    name: "Undefined",
    shown: true,
    text: "Randomly teleport to Treasure, Secret, Super Secret, I AM ERROR, or Black Market",
    space: true,
    introduced_in: "Rebirth"
  };
  var _2510 = {
    name: "Scissors",
    shown: true,
    text: "Spawns a shooting head familiar, body spews a constant stream of blood",
    space: true,
    introduced_in: "Rebirth"
  };
  var _2610 = {
    name: "Breath of Life",
    shown: true,
    text: "Invincibility when charge bar hits zero, spawns a lightbeam on an enemy if you touch it while invincible",
    space: true,
    introduced_in: "Rebirth"
  };
  var _2710 = {
    name: "The Polaroid",
    shown: true,
    text: "Temporary shield when hit at 1/2 heart, can enter The Chest",
    introduced_in: "Rebirth"
  };
  var _2810 = {
    name: "The Negative",
    shown: true,
    dmg: "1",
    text: "Damage enemies when hit at 1/2 heart, can enter the Dark Room",
    introduced_in: "Rebirth"
  };
  var _2910 = {
    name: "The Ludovico Technique",
    shown: true,
    text: "Remote control tears",
    introduced_in: "Rebirth"
  };
  var _309 = {
    name: "Soy Milk",
    tears_x: "5.5",
    dmg_x: "0.2",
    shown: true,
    text: "x0.5 tear size",
    introduced_in: "Rebirth"
  };
  var _3112 = {
    name: "Godhead",
    dmg: "0.5",
    height: "0.8",
    range: "0.5",
    shot_speed: "-0.3",
    shown: true,
    tears: "-0.6",
    text: "Damaging aura around tears",
    seraphim: true,
    introduced_in: "Rebirth"
  };
  var _3212 = {
    name: "Lazarus' Rags",
    shown: true,
    text: "+1 life (will respawn as Lazarus II)",
    introduced_in: "Rebirth"
  };
  var _3312 = {
    name: "The Mind",
    shown: true,
    text: "Treasure Map + Compass + Blue Map",
    introduced_in: "Rebirth"
  };
  var _3411 = {
    name: "The Body",
    health: "3",
    shown: true,
    health_only: true,
    text: "+3 heart containers",
    introduced_in: "Rebirth"
  };
  var _359 = {
    name: "The Soul",
    shown: true,
    soul_hearts: "2",
    text: "Enemy projectiles are repulsed",
    introduced_in: "Rebirth"
  };
  var _3610 = {
    name: "Dead Onion",
    height: "-0.5",
    range: "-1.5",
    shot_speed: "-0.4",
    shown: true,
    text: "Piercing and spectral tears",
    introduced_in: "Rebirth"
  };
  var _3710 = {
    name: "Broken Watch",
    shown: true,
    text: "Chance to slow down or speed up enemies",
    introduced_in: "Rebirth"
  };
  var _389 = {
    name: "Boomerang",
    shown: true,
    text: "2x dmg and is piercing, can petrify enemies, can grab pickups",
    space: true,
    introduced_in: "Rebirth"
  };
  var _399 = {
    name: "Safety Pin",
    height: "0.5",
    range: "1.5",
    shot_speed: "0.16",
    shown: true,
    sin_hearts: "1",
    text: "Evil up",
    introduced_in: "Rebirth"
  };
  var _408 = {
    name: "Caffeine Pill",
    shown: true,
    speed: "0.3",
    text: "Size down, grants a pill",
    introduced_in: "Rebirth"
  };
  var _4112 = {
    name: "Torn Photo",
    shot_speed: "0.16",
    shown: true,
    tears: "0.72",
    text: "",
    introduced_in: "Rebirth"
  };
  var _4212 = {
    name: "Blue Cap",
    health: "1",
    shot_speed: "-0.16",
    shown: true,
    funguy: true,
    tears: "0.72",
    text: "",
    introduced_in: "Rebirth"
  };
  var _4312 = {
    name: "Latch Key",
    luck: "1",
    shown: true,
    soul_hearts: "1",
    text: "+2 keys",
    introduced_in: "Rebirth"
  };
  var _449 = {
    name: "Match Book",
    shown: true,
    sin_hearts: "1",
    text: "+3 bombs and can spawn Match Stick",
    introduced_in: "Rebirth"
  };
  var _459 = {
    name: "Synthoil",
    dmg: "1",
    height: "0.5",
    range: "1.5",
    shown: true,
    spun: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _469 = {
    name: "A Snack",
    health: "1",
    shown: true,
    health_only: true,
    text: "",
    introduced_in: "Rebirth"
  };
  var _479 = {
    name: "Diplopia",
    text: "One-shot duplicates pedestals and pickups",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _489 = {
    name: "Placebo",
    text: "Mimics the effect of the currently held pill",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _499 = {
    name: "Wooden Nickel",
    text: "50% chance to drop a coin",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _508 = {
    name: "Toxic Shock",
    text: "Deals 2x dmg to enemies at the start of each room",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _5112 = {
    name: "Mega Bean",
    text: "Big damaging fart with spike wave",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _5212 = {
    name: "Glass Cannon",
    text: "Shoots a big shot. On hit: inflict an extra 2 full heart dmg (non lethal), leaves blood trail and gain 1.5 range",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _5312 = {
    name: "Bomber Boy",
    text: "+5 bombs, bombs explode in a plus shape",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _549 = {
    name: "Crack Jacks",
    text: "Spawns a random trinket on pickup",
    shown: true,
    health: "1",
    introduced_in: "Afterbirth"
  };
  var _559 = {
    name: "Mom's Pearls",
    text: "",
    shown: true,
    yesmother: true,
    range: "0.38",
    luck: "1",
    height: "0.5",
    soul_hearts: "1",
    introduced_in: "Afterbirth"
  };
  var _569 = {
    name: "Car Battery",
    text: "Active items trigger twice when used",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _579 = {
    name: "Box of Friends",
    text: "Temporarily duplicates each familiar, gives Demon Baby if no familiars",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _589 = {
    name: "The Wiz",
    text: "Diagonal double shot tears, spectral tears",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _599 = {
    name: "8 Inch Nails",
    text: "Nail tears",
    shown: true,
    dmg: "1.5",
    introduced_in: "Afterbirth"
  };
  var _608 = {
    name: "Incubus",
    text: "Familiar that copies your tears effect and deals 75% of your damage",
    conjoined: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _6112 = {
    name: "Fate's Reward",
    text: "Familiar (copies your tears with a slow shooting frequency)",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _6212 = {
    name: "Lil Chest",
    text: "Spawns pickups and trinkets every few rooms cleared",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _6312 = {
    name: "Sworn Protector",
    text: "Orbital (7 dmg / tick)",
    conjoined: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _649 = {
    name: "Friend Zone",
    text: "Orbital (3 dmg / tick)",
    beelzebub: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _659 = {
    name: "Lost Fly",
    text: "Familiar that hugs walls (7 dmg / tick)",
    beelzebub: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _669 = {
    name: "Scatter Bombs",
    text: "+5 bombs, bombs split into 4-5 small bombs after exploding",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _679 = {
    name: "Sticky Bombs",
    text: "+5 bombs, bombs stick to enemies, spawns 4 spiders if the bomb kills an enemy",
    spiderbaby: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _689 = {
    name: "Epiphora",
    text: "Faster tear rate when shooting in one direction, up to 2x tear rate after 10 seconds",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _699 = {
    name: "Continuum",
    text: "Tears wrap around the screen, spectral tears",
    shown: true,
    range: "3",
    height: "1.5",
    introduced_in: "Afterbirth"
  };
  var _708 = {
    name: "Mr. Dolly",
    text: "Spawn 3 red/soul/black hearts at random",
    shown: true,
    tears: "0.72",
    range: "1.5",
    height: "0.5",
    introduced_in: "Afterbirth"
  };
  var _7112 = {
    name: "Curse of the Tower",
    text: "Spawns 6 troll bombs when hit",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _7212 = {
    name: "Charged Baby",
    text: "Occasionally spawns a Little Battery, adds a charge, or petrifies all enemies",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _7312 = {
    name: "Dead Eye",
    text: "Dmg increases when you hit enemies (up to 2x), every miss has a chance to reset",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _749 = {
    name: "Holy Light",
    text: "Chance to shoot tears that spawn beams of light (3x dmg)",
    seraphim: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _759 = {
    name: "Host Hat",
    text: "Explosion immunity, chance to deflect enemy projectiles",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _769 = {
    name: "Restock",
    text: "Purchased items in shop are renewed but the more you buy them, the more the price increases",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _779 = {
    name: "Bursting Sack",
    text: "Immunity to contact damage from spiders",
    spiderbaby: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _789 = {
    name: "Number two",
    text: "Spawns a butt bomb after 3 seconds of uninterrupted firing",
    ohcrap: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _799 = {
    name: "Pupula Duplex",
    text: "Wide tears, spectral tears",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _808 = {
    name: "Pay To Play",
    text: "+5 coins, doors that take keys take coins instead",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _8112 = {
    name: "Eden's Blessing",
    text: "Extra random item at the start of the next run",
    shown: true,
    tears: "0.72",
    introduced_in: "Afterbirth"
  };
  var _8212 = {
    name: "Friendly Ball",
    text: "Captures an enemy",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _8312 = {
    name: "Tear Detonator",
    text: "Makes your on-screen tears split",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _849 = {
    name: "Lil Gurdy",
    text: "Familiar (charge to fire)",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _859 = {
    name: "Bumbo",
    text: "Familiar, eats coins to level up, can shoot and attack enemies",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _869 = {
    name: "D12",
    text: "Rerolls obstacles (rocks, etc.)",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _879 = {
    name: "Censer",
    text: "Aura slows enemies",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _889 = {
    name: "Key Bum",
    text: "Turns keys into chests",
    superbum: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _899 = {
    name: "Rune Bag",
    text: "Spawns a rune every few rooms cleared",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _908 = {
    name: "Seraphim",
    text: "Familiar (10 dmg, homing tears)",
    conjoined: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _9112 = {
    name: "Betrayal",
    text: "Charms all enemies when hit",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _9212 = {
    name: "Zodiac",
    text: "Random zodiac item each floor",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _939 = {
    name: "Serpent's Kiss",
    text: "Change to shoot a poison tears, poison touch, poisoned enemies from contact drop black hearts",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _949 = {
    name: "Marked",
    text: "Directed tears (also synergize with familiars)",
    shown: true,
    height: "0.3",
    range: "3",
    tears: "0.72",
    introduced_in: "Afterbirth"
  };
  var _959 = {
    name: "Tech X",
    text: "Charged laser ring tears",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _969 = {
    name: "Ventricle Razor",
    text: "Creates portals for faster backtracking",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _979 = {
    name: "Tractor Beam",
    text: "Tears stay directly ahead of the player",
    shown: true,
    height: "0.5",
    shot_speed: "0.16",
    range: "1.5",
    tears: "1",
    introduced_in: "Afterbirth"
  };
  var _989 = {
    name: "God's Flesh",
    text: "Chance to shoot shrinking tears, making them squishable",
    funguy: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _999 = {
    name: "Maw of the Void",
    text: "3 second charge for a black blood laser ring attack",
    shown: true,
    leviathan: true,
    introduced_in: "Afterbirth"
  };
  var _0010 = {
    name: "Spear of Destiny",
    text: "Stationary weapon (2x damage / tick)",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0113 = {
    name: "Explosivo",
    text: "Chance to shoot sticky tears that will eventually explode",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0213 = {
    name: "Chaos",
    text: "All item pools are combined, higher chance to spawn item from a big pool",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0313 = {
    name: "Spider Mod",
    spiderbaby: true,
    text: "Enemies have health bars, shows damage dealt, inflicts random status effects to enemies, spawns batteries and blue spiders every few rooms cleared",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0411 = {
    name: "Farting Baby",
    text: "Familiar that blocks shots, 10% chance to poison/knockback/charm per block",
    conjoined: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0511 = {
    name: "GB Bug",
    text: "Familiar that can be thrown to an enemy or a consumable to reroll it, once per room cleared",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0611 = {
    name: "D8",
    text: "Rerolls your stats",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _0711 = {
    name: "Purity",
    text: "Grants a stat up depending on the aura, red = dmg, blue = tears, orange = range, yellow = speed",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0811 = {
    name: "Athame",
    text: "Black blood laser ring when hit",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0911 = {
    name: "Empty Vessel",
    text: "Activate at one half red heart or less, gives flight, procs a shield when the seconds on the clock hits 00, 20 or 40 at least twice",
    shown: true,
    sin_hearts: "2",
    introduced_in: "Afterbirth"
  };
  var _1013 = {
    name: "Evil Eye",
    text: "Chance to shoot eye tears (that shoot tears as they travel)",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _1113 = {
    name: "Lusty Blood",
    text: "+0.5 dmg for the current room per enemy killed (max is 5 dmg)",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _1213 = {
    name: "Cambion Conception",
    text: "Chance to gain evil familiars when hit",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _1313 = {
    name: "Immaculate Conception",
    text: "Gain a holy familiar and soul heart after each 15 heart pickups",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _1413 = {
    name: "More Options",
    text: "Choice of 2 or 3 items in each Treasure Room",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _1513 = {
    name: "Crown of Light",
    text: "2x dmg when you have no empty red hearts",
    soul_hearts: "2",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _1613 = {
    name: "Deep Pockets",
    text: "Increase your money cap to 999, spawns 1-3 coins when no rewards on room clear",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _1711 = {
    name: "Succubus",
    text: "Familiar, aura damages enemies, 1.5x dmg when standing in aura",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _1811 = {
    name: "Fruit Cake",
    text: "Random tear effects that change constantly",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _1911 = {
    name: "Teleport 2.0",
    text: "Teleports to an unexplored room (including Devil Room or I AM ERROR Room)",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _2010 = {
    name: "Black Powder",
    text: "Walking in a circle makes a pentagram that does 10 dmg/tick",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _2113 = {
    name: "Kidney Bean",
    text: "Charms enemies",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _2213 = {
    name: "Glowing Hour Glass",
    text: "Rewinds the game state to the previous room",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _2313 = {
    name: "Circle of Protection",
    text: "White ring damages enemies and has a chance to reflect projectiles",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _2412 = {
    name: "Sack Head",
    text: "Pickups have a 33% chance to be replaced by a Sack, spawns a Sack on pickup",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _2511 = {
    name: "Night Light",
    text: "Light cone slows enemies and projectiles",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _2611 = {
    name: "Obsessed Fan",
    text: "Familiar, copies your movement, does contact damage",
    beelzebub: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _2711 = {
    name: "Mine Crafter",
    text: "Spawns a TNT barrel that can explode if you re-use it even if the active is not charged",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _2811 = {
    name: "PJs",
    soul_hearts: "4",
    text: "Full heal",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _2911 = {
    name: "Head of the Keeper",
    text: "Coin tears (chance to spawn coins upon hitting an enemy)",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _3010 = {
    name: "Papa Fly",
    text: "Familiar, copies your movement, shoots at enemies",
    beelzebub: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _3113 = {
    name: "Multidimensional Baby",
    text: "Familiar, tears that pass through it get 2x dmg",
    conjoined: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _3213 = {
    name: "Glitter Bombs",
    text: "+5 bombs, bombs have a chance to drop pickups after exploding",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _3313 = {
    name: "My Shadow",
    text: "Spawns a friendly Charger when hit",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _3412 = {
    name: "Jar of Flies",
    text: "Creates flies when you kill enemies (max 20)",
    beelzebub: true,
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _3510 = {
    name: "Lil Loki",
    text: "Familiar, shoots cross tears",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _3611 = {
    name: "Milk!",
    text: "Familiar, +1 tear rate when hit",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _3711 = {
    name: "D7",
    text: "Respawns the current room",
    space: true,
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _3810 = {
    name: "Binky",
    soul_hearts: "1",
    tears: "0.77",
    text: "",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _3910 = {
    name: "Mom's Box",
    text: "Spawns a random trinket, doubles trinket effects while held",
    shown: true,
    space: true,
    yesmother: true,
    luck: "1",
    introduced_in: "Afterbirth"
  };
  var _409 = {
    name: "Kidney Stone",
    text: "Grants extra charge attack every 25 seconds",
    shown: true,
    height: "2",
    introduced_in: "Afterbirth"
  };
  var _4113 = {
    name: "Mega Blast",
    text: "Huge blood laser for 15 seconds, lasts across rooms and floors",
    shown: true,
    space: true,
    introduced_in: "Afterbirth"
  };
  var _4213 = {
    name: "Dark Prince's Crown",
    text: "+1.5 range, +2 tears and 0.2 shot speed when at exactly 1 red heart, tears up can go beyond soft cap",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _4313 = {
    name: "Apple!",
    text: "Chance to shoot razor blade tears (4x dmg)",
    tears: "0.3",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _4410 = {
    name: "Lead Pencil",
    text: "Fires a Monstro's Lung shot every 15 tears",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _4510 = {
    name: "Dog Tooth",
    text: "Wolf howls when there is an adjacent Secret Room / Super Secret Room / Crawlspace",
    dmg: "0.3",
    speed: "0.1",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _4610 = {
    name: "Dead Tooth",
    text: "Poisonous aura",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _4710 = {
    name: "Linger Bean",
    text: "Spawns a poop cloud every 7.5 seconds (scales with dmg, 5 ticks / second)",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _4810 = {
    name: "Shard of Glass",
    text: "On hit: leaves red creep, spews blood and lose half a red heart until you pick a red heart or you run out of red hearts",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _4910 = {
    name: "Metal Plate",
    text: "Chance to deflect enemy projectiles",
    soul_hearts: "1",
    shown: true
  };
  var _509 = {
    name: "Eye of Greed",
    text: "Shoots an extra coin tear every 20 tears (has Midas Touch effect)",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _5113 = {
    name: "Tarot Cloth",
    text: "Doubles the effect of tarot cards, spawns a random card/rune on pickup",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _5213 = {
    name: "Varicose Veins",
    text: "Shoots 10 tears (dmg + 25) when hit",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _5313 = {
    name: "Compound Fracture",
    text: "Tears split into 2 bone shards, each does 1/2 dmg",
    range: "0.38",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _5410 = {
    name: "Polydactyly",
    text: "Can carry 2 cards/pills instead of 1, spawns 1 card/pill on pickup",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _5510 = {
    name: "Dad's Lost Coin",
    text: "Spawns a lucky penny on pickup",
    range: "0.38",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _5610 = {
    name: "Midnight Snack",
    health: "1",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _5710 = {
    name: "Cone Head",
    text: "Chance to not take damage when hit",
    soul_hearts: "1",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _5810 = {
    name: "Belly Button",
    text: "Can carry 2 trinkets instead of 1, spawns random trinket on pickup",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _5910 = {
    name: "Sinus Infection",
    text: "Chance to shoot booger tears (dmg over time for 60 seconds)",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _609 = {
    name: "Glaucoma",
    text: "Chance to shoot concussive tears",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _6113 = {
    name: "Parasitoid",
    text: "Chance to fire an egg tear (spawns creep + blue fly/spider)",
    beelzebub: true,
    spiderbaby: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _6213 = {
    name: "Eye of Belial",
    text: "Piercing, after a tear hits it gets 2x dmg + homing",
    range: "0.38",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _6313 = {
    name: "Sulfuric Acid",
    text: "Chance to fire a sulfuric tear (breaks rocks / open doors)",
    dmg: "0.3",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _6410 = {
    name: "Glyph of Balance",
    text: "Modifies drops from champion enemies and room clear",
    soul_hearts: "2",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _6510 = {
    name: "Analog Stick",
    text: "Allows shooting tears diagonally",
    tears: "0.35",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _6610 = {
    name: "Contagion",
    text: "The first enemy killed in a room will explode and poison nearby enemies",
    shown: true
  };
  var _6710 = {
    name: "Finger!",
    text: "Damages enemies in the direction it is pointed in",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _6810 = {
    name: "Shade",
    text: "Familiar, copies your movement, does contact damage",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _6910 = {
    name: "Depression",
    text: "Familiar, leaves blue creep, chance to spawn beam of light when touching enemies",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _709 = {
    name: "Hushy",
    text: "Familiar, moves when not shooting, deals contact dmg (2 dmg / tick)",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _7113 = {
    name: "Lil Monstro",
    text: "Familiar, shoots base dmg Monstro's Lung",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _7213 = {
    name: "King Baby",
    text: "Familiar, all other familiars follow it and aim enemies automatically",
    conjoined: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _7313 = {
    name: "Big Chubby",
    text: "Familiar (2.7 dmg / tick)",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _7410 = {
    name: "Broken Glass Cannon",
    text: "No effect. Become Glass Cannon when fully charged",
    shown: true,
    space: true,
    introduced_in: "Repentance"
  };
  var _7510 = {
    name: "Plan C",
    text: "Kills everything in the room, kills you after 3 seconds, single use",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _7610 = {
    name: "D1",
    text: "Duplicates a random pickup in the room",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _7710 = {
    name: "Void",
    text: "Consumes pedestal items in the room, passive items give random stat ups, active items adds the effect to Void",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _7810 = {
    name: "Pause",
    text: "Petrify all enemies in the room until you shoot or after 30 seconds",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _7910 = {
    name: "Smelter",
    text: "Consumes held trinkets to make their effects permanent",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _809 = {
    name: "Compost",
    text: "Converts pickups in the room to blue flies/spiders",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _8113 = {
    name: "Dataminer",
    text: "Temporary random stat changes + random tear effects, distorts graphics",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _8213 = {
    name: "Clicker",
    text: "Rerolls the current character, removes the last item that was picked up",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _8313 = {
    name: "Mama Mega!",
    text: "200 dmg to every room, opens all secret doors, single use",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _8410 = {
    name: "Wait What?",
    text: "Spawns a wave of rocks that hurts enemies (acts as an explosion)",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _8510 = {
    name: "Crooked Penny",
    text: "50/50 chance to either double all pickups / pedestal items or destroy them",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _8610 = {
    name: "Dull Razor",
    text: "Fake damaging you, triggering all the effects that should trigger on hit",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _8710 = {
    name: "Potato Peeler",
    text: "-1 red heart, +0.2 dmg, gain a Cube of Meat",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _8810 = {
    name: "Metronome",
    text: "Temporary random item effect",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _8910 = {
    name: "D infinity",
    text: "Allow player to choose a dice, number of charges scaling depending of the chosen dice",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _909 = {
    name: "Eden's Soul",
    text: "Spawns two item pedestals, starts with 0 charges, single use",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _9113 = {
    name: "Acid Baby",
    text: "Spawns a pill every 6-7 rooms cleared, using pills deal 10 dmg and poison to enemies",
    conjoined: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _9213 = {
    name: "YO LISTEN!",
    text: "Familiar, travels to Secret Rooms / Super Secret Rooms / tinted rocks / crawlspaces",
    beelzebub: true,
    luck: "1",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _9310 = {
    name: "Adrenaline",
    text: "dmg up for every empty red heart container, higher dmg ups the more empty red hearts you have",
    shown: true,
    spun: true,
    introduced_in: "Afterbirth+"
  };
  var _9410 = {
    name: "Jacob's Ladder",
    text: "Lightning tears (sparks in a random direction, each does 1/2 dmg), can chain through enemies",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _9510 = {
    name: "Ghost Pepper",
    text: "Chance to shoot a blue fire that scale with the player's damage",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _9610 = {
    name: "Euthanasia",
    text: "Chance to shoot needle tears (3x dmg, if enemy is killed, explodes into more needles)",
    shown: true,
    spun: true,
    introduced_in: "Afterbirth+"
  };
  var _9710 = {
    name: "Camo Undies",
    text: "Invisible to enemies in each room until you shoot",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _9810 = {
    name: "Duality",
    text: "Choice between Devil or Angel Rooms every time you earn a deal",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _9910 = {
    name: "Eucharist",
    text: "Angel Rooms appear whenever possible",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0011 = {
    name: "Sack of Sacks",
    text: "Spawns a sack every few rooms cleared",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0114 = {
    name: "Greed's Gullet",
    text: "Gives an extra heart container for every 25 coins held",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0214 = {
    name: "Large Zit",
    text: "Chance to shoot creep tears (2x dmg, makes a trail of white creep), shoots creep tear in random direction on hit",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0314 = {
    name: "Little Horn",
    text: "Chance to shoot void tears that invokes a Big Horn hand and squish the enemy",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0412 = {
    name: "Brown Nugget",
    text: "Spawns a fly turret (3.5 dmg / shot)",
    ohcrap: true,
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0512 = {
    name: "Poke Go",
    text: "Chance to spawn a random familiar each room",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0612 = {
    name: "BackStabber",
    text: "Shooting a non-bleeding enemy in the back does x2 dmg and adds bleed effect (kills after 50 seconds of slow damage)",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0712 = {
    name: "Sharp Straw",
    text: "Deals damage to all enemies in the room (1x dmg + 10% of enemy's max HP), enemies killed have a chance to drop a red heart",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0812 = {
    name: "Mom's Razor",
    text: "Orbital (non-blocking), deals 20% dmg / tick, adds bleed effect (kills after 50s of slow damage)",
    yesmother: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0912 = {
    name: "Bloodshot Eye",
    text: "Orbital, 2 dmg / tick, shoots every 2 seconds (3.5 dmg / tear), blocks enemy shots",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1014 = {
    name: "Delirious",
    text: "Spawns random charmed boss for current room",
    space: true,
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1114 = {
    name: "Angry Fly",
    text: "Familiar, orbits around enemies, 2 dmg / tick",
    beelzebub: true,
    shown: true,
    introduced_in: "Booster Pack #1"
  };
  var _1214 = {
    name: "Black Hole",
    text: "Spawns a black hole that sucks all enemies into it and deals damage for 6 seconds",
    space: true,
    shown: true,
    introduced_in: "Booster Pack #1"
  };
  var _1314 = {
    name: "Bozo",
    text: "Chance for all enemies to become charmed/feared, chance to spawn rainbow poop on hit",
    dmg: "0.1",
    soul_hearts: "1",
    shown: true,
    introduced_in: "Booster Pack #1"
  };
  var _1414 = {
    name: "Broken Modem",
    text: "Chance for all enemies and enemy projectiles to lag and double your drop (based on luck)",
    shown: true,
    introduced_in: "Booster Pack #1"
  };
  var _1514 = {
    name: "Mystery Gift",
    text: "Spawns a pedestal item, single use",
    space: true,
    shown: true,
    introduced_in: "Booster Pack #1"
  };
  var _1614 = {
    name: "Sprinkler",
    text: "Spawns a Sprinkler that shoots tears in a circular rotation",
    space: true,
    shown: true,
    introduced_in: "Booster Pack #1"
  };
  var _1712 = {
    name: "Fast Bombs",
    text: "+7 bombs, can rapidly place bombs",
    shown: true,
    introduced_in: "Booster Pack #1"
  };
  var _1812 = {
    name: "Buddy in a Box",
    text: "Familiar, random co-op baby (changes per floor)",
    conjoined: true,
    shown: true,
    introduced_in: "Booster Pack #1"
  };
  var _1912 = {
    name: "Lil Delirium",
    text: "Familiar, transforms into a random familiar every 10 seconds",
    shown: true,
    introduced_in: "Booster Pack #1"
  };
  var _2011 = {
    name: "Jumper Cables",
    text: "+1 charge per 15 enemies killed",
    shown: true,
    introduced_in: "Booster Pack #2"
  };
  var _2114 = {
    name: "Coupon",
    text: "Makes one random buyable item free",
    shown: true,
    space: true,
    introduced_in: "Booster Pack #2"
  };
  var _2214 = {
    name: "Telekinesis",
    text: "Repel enemies and reflects enemy tears",
    shown: true,
    space: true,
    introduced_in: "Booster Pack #2"
  };
  var _2314 = {
    name: "Moving Box",
    text: "Stores max 6 pickups / pedestals in the room, then spawns them when used again",
    shown: true,
    space: true,
    introduced_in: "Booster Pack #2"
  };
  var _2413 = {
    name: "Technology Zero",
    text: "Electric tears (tears are connected by electricity that deals 0.3x dmg / tick)",
    shown: true,
    introduced_in: "Booster Pack #2"
  };
  var _2512 = {
    name: "Leprosy",
    text: "Spawns temporary orbitals on hit (7 dmg / tick)",
    shown: true,
    introduced_in: "Booster Pack #2"
  };
  var _2612 = {
    name: "7 Seals",
    text: "Familiar, transforms into a random horseman every 10 seconds (all deal contact damage and spawn locusts)",
    shown: true,
    introduced_in: "Booster Pack #3"
  };
  var _2712 = {
    name: "Mr. Me!",
    text: "Summons a helper to interact with whatever you target",
    shown: true,
    space: true,
    introduced_in: "Booster Pack #3"
  };
  var _2812 = {
    name: "Angelic Prism",
    text: "Orbital, tears that pass through it split into 4",
    shown: true,
    introduced_in: "Booster Pack #3"
  };
  var _2912 = {
    name: "Pop!",
    text: "Eyeball tears (tears are not affected by range and can bounce off of each other)",
    shown: true,
    introduced_in: "Booster Pack #3"
  };
  var _3011 = {
    name: "Death's List",
    text: "Grants random rewards for killing enemies in order",
    shown: true,
    introduced_in: "Booster Pack #4"
  };
  var _3114 = {
    name: "Haemolacria",
    text: "Blood tears (arcing tears that explode into many smaller tears that deal 50-80% dmg)",
    tears: "0.22",
    tears_x: "0.264",
    dmg_x: "1.5",
    dmg: "1",
    range: "-1.3",
    shown: true,
    introduced_in: "Booster Pack #4"
  };
  var _3214 = {
    name: "Lachryphagy",
    text: "Hungry tears (tears that don't hit enemies combine and eventually split)",
    shown: true,
    introduced_in: "Booster Pack #4"
  };
  var _3314 = {
    name: "Trisagion",
    text: "Shoot short light lasers (piercing)",
    shown: true,
    introduced_in: "Booster Pack #4"
  };
  var _3413 = {
    name: "Schoolbag",
    text: "Can carry 2 active items instead of 1",
    shown: true,
    introduced_in: "Booster Pack #4"
  };
  var _3511 = {
    name: "Blanket",
    text: "1-hit shield when entering a Boss Room",
    soul_hearts: "1",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _3612 = {
    name: "Sacrificial Altar",
    text: "Sacrifice up to 2 familiars, spawns a passive Devil Room item for each one, single use",
    shown: true,
    space: true,
    introduced_in: "Booster Pack #5"
  };
  var _3712 = {
    name: "Lil Spewer",
    text: "Familiar, charged attack that spawns creep, changes form on pill use, spawns a random pill on pickup",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _3811 = {
    name: "Marbles",
    text: "Chance to smelt a trinket on hit, spawns 3 random trinkets on pickup",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _3911 = {
    name: "Mystery Egg",
    text: "Familiar, spawns a charmed enemy on hit",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _4010 = {
    name: "Flat Stone",
    text: "Bouncing tears (tears bounce on the ground, 0.25x splash dmg)",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _4114 = {
    name: "Marrow",
    bone_hearts: "1",
    text: "spawns 3 red hearts on pickup",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _4214 = {
    name: "Slipped Rib",
    text: "Orbital, reflects enemy projectiles, does no contact damage",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _4314 = {
    name: "Hallowed Ground",
    text: "Spawns a white poop on hit (makes an aura that halves tear delay + 1.25 dmg multiplier + chance to block damage)",
    ohcrap: true,
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _4411 = {
    name: "Pointy Rib",
    text: "Familiar, bobs back and forth (1x contact dmg)",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _4511 = {
    name: "Book of the Dead",
    text: "Converts killed enemies into temporary orbitals or charmed Bonies",
    shown: true,
    bookworm: true,
    space: true,
    introduced_in: "Booster Pack #5"
  };
  var _4611 = {
    name: "Dad's Ring",
    text: "Yellow ring that petrifies enemies on contact",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _4711 = {
    name: "Divorce Papers",
    bone_hearts: "1",
    text: "spawns Mysterious Paper on pickup",
    tears: "0.72",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _4811 = {
    name: "Jaw Bone",
    text: "Familiar, can grab pickups like a Boomerang",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _4911 = {
    name: "Brittle Bones",
    bone_hearts: "6",
    text: "Removes all red hearts, big bone splash and tears up when a bone heart is lost",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _5010 = {
    name: "Broken Shovel",
    text: "Used in the Booster Pack #5 quest",
    shown: true,
    space: true,
    introduced_in: "Booster Pack #5"
  };
  var _5114 = {
    name: "Broken Shovel",
    text: "Used in the Booster Pack #5 quest",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _5214 = {
    name: "Mom's Shovel",
    text: "Used in the Booster Pack #5 quest, spawns a trapdoor (10% chance for crawlspace)",
    yesmother: true,
    shown: true,
    space: true,
    introduced_in: "Booster Pack #5"
  };
  var _5314 = {
    name: "Mucormycosis",
    text: "Chance to shoot spore tears that stick on enemies and can split into small spore tears",
    funguy: true,
    shown: true,
    introduced_in: "Antibirth"
  };
  var _5411 = {
    name: "2Spooky",
    text: "Aura that fears enemies",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _5511 = {
    name: "Golden Razor",
    text: "+5 coins, spend 5 coins on use to gain temporary dmg up in the current room",
    shown: true,
    space: true,
    introduced_in: "Repentance"
  };
  var _5611 = {
    name: "Sulfur",
    text: "Gives temporary Brimstone",
    shown: true,
    space: true,
    leviathan: true,
    introduced_in: "Antibirth"
  };
  var _5711 = {
    name: "Fortune Cookie",
    text: "Spawns a soul heart / card / fortune teller",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _5811 = {
    name: "Eye Sore",
    text: "Extra tears are fired in random directions",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _5911 = {
    name: "120 Volt",
    text: "Auto fire lightning arcs at enemies in close proximity",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _6010 = {
    name: "It Hurts",
    text: "Ring of bloody tears + temporary tears up on hit",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _6114 = {
    name: "Almond Milk",
    tears_x: "4",
    text: "Tears gain random worm effects",
    dmg_x: "0.3",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _6214 = {
    name: "Rock Bottom",
    text: "Stats can't go down",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _6314 = {
    name: "Nancy Bombs",
    text: "+5 bombs, bombs explode with a random effect",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _6411 = {
    name: "A Bar of Soap",
    shot_speed: "0.2",
    shown: true,
    tears: "0.5",
    text: "",
    introduced_in: "Antibirth"
  };
  var _6511 = {
    name: "Blood Puppy",
    text: "Familiar that attack enemies and grows stronger, can attack the player and need to be killed to be a puppy again",
    shown: true,
    introduced_in: "Repentance"
  };
  var _6611 = {
    name: "Dream Catcher",
    shown: true,
    text: "Reveals next boss and treasure room items in level transitions + half soul heart every floor",
    introduced_in: "Repentance"
  };
  var _6711 = {
    name: "Paschal Candle",
    text: "+0.4 tears up for each room cleared (max 6), resets on hit",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _6811 = {
    name: "Divine Intervention",
    shown: true,
    seraphim: true,
    text: "A shield that reflects bullets, brimstone lasers and knock back enemies",
    introduced_in: "Repentance"
  };
  var _6911 = {
    name: "Blood Oath",
    text: "Familiar that trades extra red health for damage and speed at the beginning of a floor",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _7010 = {
    name: "Playdough Cookie",
    text: "Random status effect tears (normal/petrify/homing/poison/fear/freeze) + random colors to tears",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _7114 = {
    name: "Orphan Socks",
    text: "Immunity from spike and creep damage",
    soul_hearts: "2",
    speed: "0.3",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _7214 = {
    name: "Eye of the Occult",
    text: "tears can be controlled mid-flight",
    dmg: "1",
    range: "2",
    shot_speed: "-0.16",
    shown: true,
    leviathan: true,
    introduced_in: "Antibirth"
  };
  var _7314 = {
    name: "Immaculate Heart",
    text: "Additional set of orbiting spectral tears",
    health: "1",
    dmg_x: "1.2",
    seraphim: true,
    shown: true,
    introduced_in: "Antibirth"
  };
  var _7411 = {
    name: "Monstrance",
    text: "Grants aura that damages enemies",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _7511 = {
    name: "The Intruder",
    text: "Add 4 slowing tears, chance to spawn blue spiders and release Intruder familiar on hit",
    spiderbaby: true,
    shown: true,
    introduced_in: "Antibirth"
  };
  var _7611 = {
    name: "Dirty Mind",
    text: "Dips become friendly, spawns friendly Dips when destroying poop",
    ohcrap: true,
    shown: true,
    introduced_in: "Antibirth"
  };
  var _7711 = {
    name: "Damocles",
    text: "Double item pedestals, chance of permanent death after the first hit when activated",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _7811 = {
    name: "Free Lemonade",
    text: "Lemon Party effect",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _7911 = {
    name: "Spirit Sword",
    text: "Sword replaces tears",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _8010 = {
    name: "Red Key",
    text: "Creates additional red rooms",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _8114 = {
    name: "Psy Fly",
    text: "Orbital, reflects enemy projectiles as homing tears",
    beelzebub: true,
    shown: true,
    introduced_in: "Antibirth"
  };
  var _8214 = {
    name: "Wavy Cap",
    text: "Every time you use it : +0.75 tears, -0.03 speed, distorts graphics/sound for the current floor",
    funguy: true,
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _8314 = {
    name: "Rocket in a Jar",
    text: "+5 bombs, bombs become rockets when you shoot",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _8411 = {
    name: "Book of Virtues",
    text: "Spawn a wisp orbital that have the effect of the active item that is inside the book",
    bookworm: true,
    shown: true,
    introduced_in: "Antibirth"
  };
  var _8511 = {
    name: "Alabaster Box",
    text: "Converts soul/black hearts to Angel Room items + random number of soul hearts",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _8611 = {
    name: "The Stairway",
    text: "Start of each floor has ladder to a special Angel Shop",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _8811 = {
    name: "Sol",
    text: "Reveals location of the boss, Sun card effect + active item recharge + 2x dmg + +1 luck + removes curses upon killing the boss",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _8911 = {
    name: "Luna",
    text: "Extra secret and super secret rooms on each floor that contains a blue light beam that gives half a soul heart + tears up for current floor",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _9010 = {
    name: "Mercurius",
    text: "Non-special room doors stay open",
    speed: "0.4",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _9114 = {
    name: "Venus",
    text: "Close enemies get charmed",
    health: "1",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _9214 = {
    name: "Terra",
    text: "Rock tears (knockback, can destroy obstacles), random slight dmg up/down on some tears",
    dmg: "1",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _9311 = {
    name: "Mars",
    text: "Double tap to dash, invincible when dashing on enemies",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _9411 = {
    name: "Jupiter",
    text: "Build up gas by standing still, release lingering fart clouds and speed goes down when moving",
    speed: "0.2",
    shown: true,
    introduced_in: "Repentance"
  };
  var _9511 = {
    name: "Saturnus",
    text: "Grants orbiting tears aura refreshing per room, can transform enemy tears into friendly tears",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _9611 = {
    name: "Uranus",
    text: "Ice tears (enemies killed will become frozen and can be kicked)",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _9711 = {
    name: "Neptunus",
    shown: true,
    text: "Charge an attack that makes you shoot several tears with decreasing fire rate",
    introduced_in: "Repentance"
  };
  var _9811 = {
    name: "Pluto",
    text: "Size down, can pass between blocks",
    tears: "0.72",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _9911 = {
    name: "Voodoo Head",
    text: "Generates 2 Curse Rooms per floor",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _0012 = {
    name: "Eye Drops",
    text: "Tears up only on left eye",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _0115 = {
    name: "Act of Contrition",
    text: "+1 eternal heart, allows Angel Rooms even if a devil deal has been taken",
    tears: "0.72",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _0215 = {
    name: "Member Card",
    text: "Every shop has a trapdoor to a special shop",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _0315 = {
    name: "Battery Pack",
    text: "Recharges active item, spawns 3 random batteries on pickup",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _0413 = {
    name: "Mom's Bracelet",
    text: "Can throw obstacles",
    yesmother: true,
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _0513 = {
    name: "The Scooper",
    text: "Spawns a temporary familiar similar to The Peeper",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _0613 = {
    name: "Ocular Rift",
    text: "Chance to shoot rift tears (summons rifts that attract + deal contact dmg)",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _0713 = {
    name: "Boiled Baby",
    text: "Familiar, acts like a Boil",
    conjoined: true,
    shown: true,
    introduced_in: "Antibirth"
  };
  var _0813 = {
    name: "Freezer Baby",
    text: "Familiar that fires freezing tears",
    conjoined: true,
    shown: true,
    introduced_in: "Antibirth"
  };
  var _0913 = {
    name: "Eternal D6",
    text: "Like a D6, but has a chance to make the item disappear",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _1015 = {
    name: "Bird Cage",
    text: "Spawns bird familiar when hit (similar to Dead Bird) that stomps enemies",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1115 = {
    name: "Larynx",
    text: "Release a sonic waves (power depends on the number of charges) that damage enemies and destroys rocks",
    shown: true,
    space: true,
    introduced_in: "Repentance"
  };
  var _1215 = {
    name: "Lost Soul",
    text: "Familiar, 1 hit per floor, if it survives it grants a random reward",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1415 = {
    name: "Blood Bombs",
    text: "Bombs leave behind red creep, can plant bombs for 1/2 heart, heals 5 hearts",
    health: "1",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1515 = {
    name: "Lil' Dumpy",
    text: "Familiar, makes stun/poison farts on hit",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1615 = {
    name: "Bird's Eye",
    text: "Chance to shoot a big red fire",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1713 = {
    name: "Lodestone",
    text: "Chance to shoot magnetizing tears (attract enemies + tears + projectiles)",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1813 = {
    name: "Rotten Tomato",
    text: "Chance to shoot marked tears (other enemies will attack a marked enemy)",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1913 = {
    name: "Birthright",
    text: "Custom reward based on character",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _2115 = {
    name: "Red Stew",
    text: "Full heal, dmg up that wears off over time",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _2215 = {
    name: "Genesis",
    text: "Resets player to its initial state and teleport the player to a room where he can pick as many items as they had before",
    shown: true,
    space: true,
    introduced_in: "Repentance"
  };
  var _2315 = {
    name: "Sharp Key",
    text: "Consumes a key and throws it to deal damage / open doors, +5 keys on pickup. Killed enemies have a chance to spawn rewards from a chest",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _2414 = {
    name: "Booster Pack",
    text: "Spawns 5 random cards on pickup",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _2513 = {
    name: "Mega Mush",
    text: "Gigantify for a short duration (+damage, -tears, invulnerable, crush rocks/blocks/doors)",
    funguy: true,
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _2613 = {
    name: "Knife Piece 1",
    text: "Collect the pieces to get a knife familiar",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _2713 = {
    name: "Knife Piece 2",
    text: "Collect the pieces to get a knife familiar",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _2813 = {
    name: "Death Certificate",
    text: "Allows you to choose one item among all items in the game",
    shown: true,
    space: true,
    introduced_in: "Repentance"
  };
  var _2913 = {
    name: "Bot Fly",
    text: "Familiar, orbits and fires shielded tears",
    beelzebub: true,
    shown: true,
    introduced_in: "Antibirth"
  };
  var _3115 = {
    name: "Meat Cleaver",
    text: "Splits all enemies in the room into 2 smaller versions",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _3215 = {
    name: "Evil Charm",
    text: "Fear, burn, confusion, toxic gas cloud and Dogma's Godhead tears immunity",
    luck: "2",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _3315 = {
    name: "Dogma",
    text: "Grants fly + a holy mantle. Heal the player to 6 hearts if he has less than 6 hearts",
    speed: "0.1",
    dmg: "2",
    shown: true,
    introduced_in: "Repentance"
  };
  var _3414 = {
    name: "Purgatory",
    text: "A red crack spawns at a random position, standing on it will cause a soul to fly to the nearest enemy and hit it",
    shown: true,
    introduced_in: "Repentance"
  };
  var _3512 = {
    name: "Stitches",
    text: "Spawns a temporary familiar, can swap positions with the familiar to deal damage",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _3613 = {
    name: "R Key",
    text: "Restarts the game to the first floor but keeps all items",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _3713 = {
    name: "Knockout Drops",
    text: "Chance to shoot fist tears (knockback + stun), knocking enemies into walls or other enemies damage them",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _3812 = {
    name: "Eraser",
    text: "Throw on an enemy to permanently remove that enemy from the current run, recharge every floor",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _3912 = {
    name: "Yuck Heart",
    text: "+1 rotten heart on use",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _4011 = {
    name: "Urn of Souls",
    text: "A flamethrower weapon that collects one soul per enemy killed",
    shown: true,
    space: true,
    introduced_in: "Repentance"
  };
  var _4115 = {
    name: "Akeldama",
    text: "Spawns bloody tears behind the player",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _4215 = {
    name: "Magic Skin",
    text: "Converts 1 red heart / 2 soul hearts to a broken heart, spawns a pedestal item",
    shown: true,
    space: true,
    introduced_in: "Antibirth"
  };
  var _4315 = {
    name: "Revelation",
    text: "Grants flight and an additional angelic beam attack",
    soul_hearts: "2",
    seraphim: true,
    shown: true,
    introduced_in: "Antibirth"
  };
  var _4412 = {
    name: "Consolation Prize",
    text: "Stat up on the lowest one, +3 coins or +1 bomb or +1 key (depending on lowest)",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _4512 = {
    name: "Tinytoma",
    text: "Orbital, splits into blue spiders on hit",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _4612 = {
    name: "Brimstone bombs",
    text: "+5 bombs, bombs now do a Krampus cross effect on explosion",
    shown: true,
    introduced_in: "Repentance"
  };
  var _4712 = {
    name: "4.5 Volt",
    text: "Active items now only charge based on damage dealt",
    shown: true,
    introduced_in: "Repentance"
  };
  var _4912 = {
    name: "Fruity Plum",
    text: "Baby Plum familiar that propel itself diagonally by shooting tears",
    beelzebub: true,
    shown: true,
    introduced_in: "Repentance"
  };
  var _5011 = {
    name: "Plum Flute",
    shown: true,
    beelzebub: true,
    text: "Spawns Baby Plum",
    space: true,
    introduced_in: "Repentance"
  };
  var _5115 = {
    name: "Star of Bethlehem",
    shown: true,
    text: "A star that moves from starting room to boss room with a Hallowed Ground aura (tears/dmg up + chance to block damage)",
    introduced_in: "Repentance"
  };
  var _5215 = {
    name: "Cube Baby",
    shown: true,
    conjoined: true,
    text: "A frozen baby familiar that can be kicked",
    introduced_in: "Repentance"
  };
  var _5315 = {
    name: "Vade Retro",
    text: "Spawns a little red ghost for each enemy killed and explode when you use the active item again",
    shown: true,
    space: true,
    introduced_in: "Repentance"
  };
  var _5412 = {
    name: "False PHD",
    sin_hearts: "1",
    shown: true,
    text: "Good pills become bad or neutral pill. Stat down pill grants a dmg up, other bad pills gives a black heart",
    introduced_in: "Repentance"
  };
  var _5512 = {
    name: "Spin to Win",
    text: "A spinning familiar, holding use key gives +0.5 speed + orbitals spin faster and deal more dmg",
    shown: true,
    space: true,
    introduced_in: "Repentance"
  };
  var _5612 = {
    name: "Damocles",
    text: "Double item pedestals, chance of permanent death after the first hit when activated",
    shown: false,
    introduced_in: "Antibirth"
  };
  var _5712 = {
    name: "Vasculitis",
    shown: true,
    text: "Killed enemies shot blood tears in random directions",
    introduced_in: "Repentance"
  };
  var _5812 = {
    name: "Giant Cell",
    shown: true,
    text: "Spawn mini Isaacs that follow you and attack enemies when hit",
    introduced_in: "Repentance"
  };
  var _5912 = {
    name: "Tropicamide",
    shown: true,
    range: "1.5",
    text: "Tear size up",
    introduced_in: "Repentance"
  };
  var _6011 = {
    name: "Card Reading",
    shown: true,
    text: "Spawn 2 of 3 different portals in starting room (red goes to boss room, yellow to treasure room, blue to secret room)",
    introduced_in: "Repentance"
  };
  var _6115 = {
    name: "Quints",
    shown: true,
    conjoined: true,
    text: "Killed enemies drop a baby familiar that stays in place and shoot in the same direction as the player",
    introduced_in: "Repentance"
  };
  var _6315 = {
    name: "Tooth and Nail",
    shown: true,
    text: "Transforms the player into a spiked stone statue for 1 sec every 5 sec, invincibility + contact dmg on statue form",
    introduced_in: "Repentance"
  };
  var _6412 = {
    name: "Binge Eater",
    shown: true,
    health: "1",
    text: "For each item you'll see, a food item is proposed. Food items give 2 stat ups and a temporary dmg up",
    introduced_in: "Repentance"
  };
  var _6512 = {
    name: "Guppy's Eye",
    shown: true,
    guppy: true,
    text: "Shows the content of chests and fires",
    introduced_in: "Repentance"
  };
  var _6712 = {
    name: "Strawman",
    shown: true,
    text: "A Keeper familiar that acts as a second player and has its own HP and items",
    introduced_in: "Repentance"
  };
  var _6812 = {
    name: "Dad's Note",
    shown: true,
    text: "Sends you on the backwards path, no gameplay effect",
    introduced_in: "Repentance"
  };
  var _6912 = {
    name: "Sausage",
    text: "Full heal",
    health: "1",
    dmg: "0.5",
    range: "1.5",
    tears: "0.5",
    speed: "0.2",
    shot_speed: "0.16",
    luck: "1",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _7011 = {
    name: "Options?",
    shown: true,
    text: "Can choose between two room reward pickups",
    introduced_in: "Repentance"
  };
  var _7115 = {
    name: "Candy Heart",
    shown: true,
    text: "Minor random stat up for every red heart picked up",
    introduced_in: "Repentance"
  };
  var _7215 = {
    name: "A Pound of Flesh",
    shown: true,
    text: "Devil deals cost money, shop items cost hearts, shop pickups require to take damage",
    introduced_in: "Repentance"
  };
  var _7315 = {
    name: "Redemption",
    shown: true,
    text: "Dmg up + half soul heart at the start of next floor if you took nothing in the devil deal",
    introduced_in: "Repentance"
  };
  var _7412 = {
    name: "Spirit Shackles",
    shown: true,
    text: "On death, turn into Forgotten's Soul chained to a dead Blue Baby, revives if still alive after 10 sec",
    introduced_in: "Repentance"
  };
  var _7512 = {
    name: "Cracked Orb",
    shown: true,
    text: "On hit: reveal a random room, open adjacent locked/secret rooms, break tinted rocks or rocks that hides a ladder",
    introduced_in: "Repentance"
  };
  var _7612 = {
    name: "Empty Heart",
    shown: true,
    text: "Grants an empty heart container if you enter a new floor with 1 red heart or less",
    introduced_in: "Repentance"
  };
  var _7712 = {
    name: "Astral Projection",
    shown: true,
    text: "On hit: stop time and turn into the lost. Revert into original char on hit or room clear",
    introduced_in: "Repentance"
  };
  var _7812 = {
    name: "C Section",
    shown: true,
    text: "Shoot fetus tears",
    introduced_in: "Repentance"
  };
  var _7912 = {
    name: "Lil Abaddon",
    shown: true,
    conjoined: true,
    text: "Familiar that fires a Maw of the Void ring",
    introduced_in: "Repentance"
  };
  var _8011 = {
    name: "Montezuma's Revenge",
    shown: true,
    ohcrap: true,
    text: "Fires a short diarrhea Brimstone backwards",
    introduced_in: "Repentance"
  };
  var _8115 = {
    name: "Lil Portal",
    shown: true,
    text: "A familiar that spawns a portal to an unexplored room if it absorbed enough pickups",
    introduced_in: "Repentance"
  };
  var _8215 = {
    name: "Worm Friend",
    shown: true,
    text: "A tentacle that lurks underground and randomly grabs an enemy",
    introduced_in: "Repentance"
  };
  var _8315 = {
    name: "Bone Spurs",
    shown: true,
    text: "Killed enemies spawn bone chunks",
    introduced_in: "Repentance"
  };
  var _8412 = {
    name: "Hungry Soul",
    shown: true,
    text: "Killed enemies have a chance to spawn a homing soul that chases enemies and attack them",
    introduced_in: "Repentance"
  };
  var _8512 = {
    name: "Jar of Wisps",
    shown: true,
    text: "Spawns a random wisp + another random wisp for every past uses (up to 12)",
    space: true,
    introduced_in: "Repentance"
  };
  var _8612 = {
    name: "Soul Locket",
    shown: true,
    soul_hearts: "1",
    text: "Minor random stat up for every soul heart picked up",
    introduced_in: "Repentance"
  };
  var _8711 = {
    name: "Friend Finder",
    shown: true,
    text: "Spawns a random controllable friendly enemy",
    space: true,
    introduced_in: "Repentance"
  };
  var _8812 = {
    name: "Inner Child",
    shown: true,
    text: "+1 life. On revive, explode and turn into a tiny version of Isaac with higher speed",
    introduced_in: "Repentance"
  };
  var _8912 = {
    name: "Glitched Crown",
    shown: true,
    text: "Pedestals rapidly cycle between 5 random items",
    introduced_in: "Repentance"
  };
  var _9011 = {
    name: "Belly Jelly",
    shown: true,
    text: "Chance to reflect shots and negate contact damage, bouncing the enemies instead",
    introduced_in: "Repentance"
  };
  var _9115 = {
    name: "Sacred Orb",
    shown: true,
    seraphim: true,
    text: "Prevents quality 0 and 1 items from appearing. 33% chance for quality 2 items to be rerolled",
    introduced_in: "Repentance"
  };
  var _9215 = {
    name: "Sanguine Bond",
    shown: true,
    text: "Spikes in front of devil statue, taking damage on them can yield various rewards",
    introduced_in: "Repentance"
  };
  var _9312 = {
    name: "The Swarm",
    shown: true,
    beelzebub: true,
    text: "Grants a halo of fly orbitals, turn them into blue flies on hit, +1 orbital fly per room clear",
    introduced_in: "Repentance"
  };
  var _9412 = {
    name: "Heartbreak",
    shown: true,
    text: "Add 3 broken hearts",
    dmg: "0.75",
    introduced_in: "Repentance"
  };
  var _9512 = {
    name: "Bloody Gust",
    shown: true,
    text: "Tears and speed up on hit (resets every floor)",
    introduced_in: "Repentance"
  };
  var _9612 = {
    name: "Salvation",
    shown: true,
    seraphim: true,
    text: "Grants an aura that makes enemies exploding in a cross of lightbeams after few seconds in it, gets bigger on hit, shrinks upon entering new floor",
    introduced_in: "Repentance"
  };
  var _9712 = {
    name: "Vanishing Twin",
    shown: true,
    text: "Familiar that turns into a hostile copy of any boss encountered, boss rooms yield double rewards",
    introduced_in: "Repentance"
  };
  var _9812 = {
    name: "Twisted Pair",
    shown: true,
    conjoined: true,
    text: "Gives two small demons that copy the player's tears (37.5% of player's dmg for each demon)",
    introduced_in: "Repentance"
  };
  var _9912 = {
    name: "Azazel's Rage",
    shown: true,
    text: "Builds rage every time a room is cleared, fires a large Brimstone at full rage upon entering next room",
    introduced_in: "Repentance"
  };
  var _0013 = {
    name: "Echo Chamber",
    shown: true,
    text: "Every time a card/pill is used, it also trigger all previous pill/cards used",
    introduced_in: "Repentance"
  };
  var _0116 = {
    name: "Isaac's Tomb",
    shown: true,
    text: "Chest appears in the starting room of each floor, gives at random: 3 soul hearts, 3 trinkets, Old Chest item, Angel item",
    introduced_in: "Repentance"
  };
  var _0216 = {
    name: "Vengeful Spirit",
    shown: true,
    text: "Spawns an invincible red wisp every time the player takes damage, wisps disappear on next floor",
    introduced_in: "Repentance"
  };
  var _0316 = {
    name: "Esau Jr.",
    shown: true,
    text: "Toggle between current char and a mini Esau that starts with high damage and 3 black hearts and has its own items",
    space: true,
    introduced_in: "Repentance"
  };
  var _0414 = {
    name: "Berserk!",
    shown: true,
    text: "Temporary +3 dmg and melee attack. This item charge by damaging enemies",
    space: true,
    introduced_in: "Repentance"
  };
  var _0514 = {
    name: "Dark Arts",
    shown: true,
    text: "Turn into shadow form, phase through enemies to deal damage 2 sec after, more damage dodged = more dmg up",
    space: true,
    introduced_in: "Repentance"
  };
  var _0614 = {
    name: "Abyss",
    shown: true,
    text: "Destroys any item in the room and turn it into permanent red locusts that attack by dashing at enemies",
    space: true,
    introduced_in: "Repentance"
  };
  var _0714 = {
    name: "Supper",
    health: "1",
    shown: true,
    health_only: true,
    text: "",
    introduced_in: "Repentance"
  };
  var _0814 = {
    name: "Stapler",
    shown: true,
    text: "Tears only come out from the player's right eye",
    dmg: "1",
    introduced_in: "Repentance"
  };
  var _0914 = {
    name: "Suplex!",
    shown: true,
    text: "Dash into an enemy, grab it and slam it on the ground",
    space: true,
    introduced_in: "Repentance"
  };
  var _1016 = {
    name: "Bag of Crafting",
    shown: true,
    text: "Take pickups to transform them into items",
    space: true,
    introduced_in: "Repentance"
  };
  var _1116 = {
    name: "Flip",
    shown: true,
    text: "Switch between tainted Lazarus and dead Lazarus, they both have their own inventory and stats",
    space: true,
    introduced_in: "Repentance"
  };
  var _1216 = {
    name: "Lemegeton",
    shown: true,
    text: "Spawn an item wisp that grants the effect of a random passive item until it dies",
    space: true,
    bookworm: true,
    introduced_in: "Repentance"
  };
  var _1315 = {
    name: "Sumptorium",
    shown: true,
    text: "Convert back Lil Clots into hearts",
    space: true,
    introduced_in: "Repentance"
  };
  var _1416 = {
    name: "Recall",
    shown: true,
    text: "Sends back tainted Forgotten's body to the owner",
    space: true,
    introduced_in: "Repentance"
  };
  var _1516 = {
    name: "Hold",
    shown: true,
    text: "Allows you to stock a Tainted Blue Baby poop and throw it later",
    space: true,
    introduced_in: "Repentance"
  };
  var _1616 = {
    name: "Keeper's Sack",
    shown: true,
    text: "+1 key and +3 coins, gives a dmg/range/speed bonus that scales with the amount of money spent in shops",
    introduced_in: "Repentance"
  };
  var _1714 = {
    name: "Keeper's Kin",
    shown: true,
    spiderbaby: true,
    text: "Rocks drop 1-3 spiders when destroyed, rocks can spawn blue spider in room with enemies in it",
    introduced_in: "Repentance"
  };
  var _1914 = {
    name: "Keeper's Box",
    shown: true,
    text: "Spawns a random shop item",
    space: true,
    introduced_in: "Repentance"
  };
  var _2012 = {
    name: "Everything Jar",
    shown: true,
    text: "Can be used anytime, various rewards depending on charge level",
    space: true,
    introduced_in: "Repentance"
  };
  var _2116 = {
    name: "TMTRAINER",
    shown: true,
    text: "Causes all future items become glitched, giving fully randomized effects",
    introduced_in: "Repentance"
  };
  var _2216 = {
    name: "Anima Sola",
    shown: true,
    text: "Summons chains around nearest enemy and temporarily prevent it from moving",
    space: true,
    introduced_in: "Repentance"
  };
  var _2316 = {
    name: "Spindown Dice",
    shown: true,
    text: "Rerolls each item in the room into the item before it in numerical ID order",
    space: true,
    introduced_in: "Repentance"
  };
  var _2415 = {
    name: "Hypercoagulation",
    shown: true,
    text: "On hit, spawns half a red heart that quickly disappears. Spawned heart's velocity increase the more you take damage",
    introduced_in: "Repentance"
  };
  var _2514 = {
    name: "IBS",
    shown: true,
    text: "Causes you to throw a random type of poop at random intervals + chance to have Explosive Diarrhea when standing still",
    introduced_in: "Repentance"
  };
  var _2614 = {
    name: "Hemoptysis",
    shown: true,
    text: "Double tap to sneeze on enemies, dealing x1.5 dmg",
    introduced_in: "Repentance"
  };
  var _2714 = {
    name: "Ghost Bombs",
    shown: true,
    text: "+5 bombs, bombs spawn a friendly white soul which hunt down enemies",
    introduced_in: "Repentance"
  };
  var _2814 = {
    name: "Gello",
    shown: true,
    space: true,
    text: "A baby that come from your belly and deals x3 dmg when it hit enemies, can also shoot tears",
    introduced_in: "Repentance"
  };
  var _2914 = {
    name: "Decap Attack",
    shown: true,
    space: true,
    text: "Throw your head to deal 24 damage",
    introduced_in: "Repentance"
  };
  var _3012 = {
    name: "Glass Eye",
    shown: true,
    dmg: "0.75",
    luck: "1",
    introduced_in: "Repentance"
  };
  var _3116 = {
    name: "Stye",
    shown: true,
    text: "Damage up on the right eye",
    introduced_in: "Repentance"
  };
  var _3216 = {
    name: "Mom's Ring",
    shown: true,
    dmg: "1",
    yesmother: true,
    text: "Gives a random rune",
    introduced_in: "Repentance"
  };
  var _001 = {
    name: "Swallowed Penny",
    text: "Spawn 1-2 pennies on hit",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0022 = {
    name: "Petrified Poop",
    text: "Higher chance for rewards from poops",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0032 = {
    name: "AAA Battery",
    text: "Quicker charge",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0042 = {
    name: "Broken Remote",
    text: "Teleport on active item use",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0052 = {
    name: "Purple Heart",
    text: "Higher chance for champions",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0062 = {
    name: "Broken Magnet",
    text: "Pulls coins toward you",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0072 = {
    name: "Rosary Bead",
    text: "Increases Angel Room chance to 75%/25% (from 50%/50%)",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0082 = {
    name: "Cartridge",
    text: "Chance to get The Gamekid effect on hit",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0092 = {
    name: "Pulse Worm",
    text: "Pulsing tears (only cosmetic)",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0102 = {
    name: "Wiggle Worm",
    text: "Wave + spectral tears",
    tears: "0.4",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0117 = {
    name: "Ring Worm",
    text: "Ring + spectral tears",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0122 = {
    name: "Flat Worm",
    text: "Flat tears (only cosmetic)",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0132 = {
    name: "Store Credit",
    text: "First shop item you will take while holding the trinket will be free",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0142 = {
    name: "Callus",
    text: "Immunity from spike and creep damage",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0152 = {
    name: "Lucky Rock",
    text: "33% for rocks to drop coins when broken",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0162 = {
    name: "Mom's Toenail",
    text: "Mom stomps every 60 seconds (300 dmg)",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0172 = {
    name: "Black Lipstick",
    text: "Higher chance for black hearts",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0182 = {
    name: "Bible Tract",
    text: "Higher chance for eternal hearts",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0192 = {
    name: "Paper Clip",
    text: "Can open Golden Chests without using a key",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0202 = {
    name: "Monkey Paw",
    text: "Spawns a black heart when half a heart is remaining (3 times max)",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0217 = {
    name: "Mysterious Paper",
    text: "Copies effect of either A Missing Page, The Polaroid, The Negative, or Missing Poster",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0222 = {
    name: "Daemon's Tail",
    text: "Heart drops are rerolled into a black heart, 80% to replace a heart drop with a key",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0232 = {
    name: "Missing Poster",
    text: "+1 life (will respawn as The Lost)",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0242 = {
    name: "Butt Penny",
    text: "Farts upon picking up a coin",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0252 = {
    name: "Mysterious Candy",
    text: "Chance to randomly poop",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0262 = {
    name: "Hook Worm",
    text: "Hook + spectral tears",
    range: "1.5",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0272 = {
    name: "Whip Worm",
    text: "",
    shot_speed: "0.5",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0282 = {
    name: "Broken Ankh",
    text: "20% chance to respawn as Blue Baby on death",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0292 = {
    name: "Fish Head",
    text: "Spawns 1-2 blue flies on hit",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0302 = {
    name: "Pinky Eye",
    text: "Chance to shoot poison tears",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0317 = {
    name: "Push Pin",
    text: "Chance to shoot spectral + piercing tears",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0322 = {
    name: "Liberty Cap",
    text: "Gives a random mushroom effect each room",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0332 = {
    name: "Umbilical Cord",
    text: "Gives Little Steven if damaged to 1/2 hearts, high chance to proc a Gemini for the room when hit",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0342 = {
    name: "Child's Heart",
    text: "Higher chance to find red hearts",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0352 = {
    name: "Curved Horn",
    dmg: "2",
    text: "",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0362 = {
    name: "Rusted Key",
    text: "Higher chance to find keys and chests",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0372 = {
    name: "Goat Hoof",
    text: "",
    speed: "0.15",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0382 = {
    name: "Mom's Pearl",
    text: "Higher chance to find soul hearts",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0392 = {
    name: "Cancer",
    text: "",
    tears: "1",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0402 = {
    name: "Red Patch",
    text: "Chance to temporarily gain 1.8 dmg on hit",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _041 = {
    name: "Match Stick",
    text: "Higher chance to find bombs",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0422 = {
    name: "Lucky Toe",
    text: "",
    luck: "1",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0432 = {
    name: "Cursed Skull",
    text: "Teleported to a random room if damaged to 1/2 heart",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0442 = {
    name: "Safety Cap",
    text: "Higher chance to find pills",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0452 = {
    name: "Ace of Spades",
    text: "Higher chance to find cards",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0462 = {
    name: "Isaac's Fork",
    text: "Chance to heal for a 1/2 heart after clearing a room",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0482 = {
    name: "A Missing Page",
    text: "Chance to do Necronomicon effect (80 dmg) on hit",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0492 = {
    name: "Bloody Penny",
    text: "25% chance to spawn a 1/2 red heart upon picking up a coin",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _050 = {
    name: "Burnt Penny",
    text: "25% chance to spawn a bomb upon picking up a coin",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _051 = {
    name: "Flat Penny",
    text: "25% chance to spawns a key upon picking up a coin",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0522 = {
    name: "Counterfeit Penny",
    text: "50% chance to gain an extra cent upon picking up a coin",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0532 = {
    name: "Tick",
    text: "Automatically deals 15% damage to each boss, heals 1 red heart, cannot drop",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0542 = {
    name: "Isaac's Head",
    text: "Familiar (3.5 dmg / tear, piercing)",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0552 = {
    name: "Maggy's Faith",
    text: "Gives an eternal heart at the beginning of every floor",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0562 = {
    name: "Judas' Tongue",
    text: "Devil deal items that cost 2 hearts are reduced to 1 heart",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0572 = {
    name: "???'s Soul",
    text: "Familiar that moves like DVD logo, shoots in the same direction as the player",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0582 = {
    name: "Samson's Lock",
    text: "Chance to temporarily gain 0.5 dmg when killing an enemy",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0592 = {
    name: "Cain's Eye",
    text: "25% chance to gain The Compass effect at the beginning of every floor",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _060 = {
    name: "Eve's Bird Foot",
    text: "Chance to spawn a Dead Bird familiar when killing an enemy (2 dmg / tick)",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _061 = {
    name: "The Left Hand",
    text: "All chests become Red Chests",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0622 = {
    name: "Shiny Rock",
    text: "Tinted rocks and crawlspace rocks will flash white every 10 seconds",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0632 = {
    text: "Turns all troll bombs into bomb pickups",
    shown: true,
    name: "Safety Scissors",
    introduced_in: "Afterbirth"
  };
  var _0642 = {
    name: "Rainbow Worm",
    text: "Rainbow worm tears (a random worm effect every 5 seconds)",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0652 = {
    name: "Tape Worm",
    text: "Halves tear height",
    range: "3",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0662 = {
    name: "Lazy Worm",
    text: "",
    shot_speed: "-0.5",
    height: "2",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0672 = {
    name: "Cracked Dice",
    text: "Randomly D6, D20, D8, or D12 on hit",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0682 = {
    name: "Super Magnet",
    text: "Pickups and enemies move towards you",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0692 = {
    name: "Faded Polaroid",
    text: "Chance to gain camouflage for a few seconds (confuses all enemies)",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _070 = {
    name: "Louse",
    text: "Chance to spawn a blue spider when in a room with enemies",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _071 = {
    name: "Bob's Bladder",
    text: "Bombs make green creep",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0722 = {
    name: "Watch Battery",
    text: "Increased chance to find batteries, chance to add an extra charge after clearing a room",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0732 = {
    name: "Blasting Cap",
    text: "Exploding bombs have a chance to drop another bomb pickup",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0742 = {
    name: "Stud Finder",
    text: "Increased chance to find crawlspaces when breaking rocks",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0752 = {
    name: "Error",
    text: "Gives a random trinket effect per room",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0762 = {
    name: "Poker Chip",
    text: "Chests now have a 50/50 chance to give extra pickups or have nothing",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0772 = {
    name: "Blister",
    text: "Tears have extra knockback",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0782 = {
    name: "Second Hand",
    text: "Increases the time that status effects stay on enemies",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0792 = {
    name: "Endless Nameless",
    text: "Chance to drop an extra copy of a card/pill upon use",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _080 = {
    name: "Black Feather",
    text: '+0.5 dmg per "evil" item',
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _081 = {
    name: "Blind Rage",
    text: "Extra invulnerability frames on hit",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0822 = {
    name: "Golden Horse Shoe",
    text: "+15% chance to get a double Treasure Room",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0832 = {
    name: "Store Key",
    text: "Shops do not require keys",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0842 = {
    name: "Rib of Greed",
    text: "Greed and Super Greed can no longer appear",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0852 = {
    name: "Karma",
    text: "Chance to heal a red heart or spawn a Beggar when using a Donation Machine",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0862 = {
    name: "Lil Larva",
    text: "Gives a blue fly upon destroying a poop",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0872 = {
    name: "Mom's Locket",
    text: "Changes all 1/2 red hearts into full hearts, heals 1/2 heart when a key is used",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0882 = {
    name: "NO!",
    text: "Prevents active items from appearing",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0892 = {
    name: "Child Leash",
    text: "Familiars stay closer to you",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _090 = {
    name: "Brown Cap",
    text: "Poop explodes when destroyed",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _091 = {
    name: "Meconium",
    text: "Increased chance for Black Poops",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0922 = {
    name: "Cracked Crown",
    text: "Stat bonuses are increased by 20%",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0932 = {
    name: "Used Diaper",
    text: "Gives Skatole effect in certain rooms",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0942 = {
    name: "Fish Tail",
    text: "2x blue fly/spider generation",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0952 = {
    name: "Black Tooth",
    text: "Chance to shoot black tooth tears (2x dmg + poison)",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0962 = {
    name: "Ouroboros Worm",
    text: "Spiral tears",
    range: "1.5",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0972 = {
    name: "Tonsil",
    text: "Chance to spawn tonsil familiar on hit",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0982 = {
    name: "Nose Goblin",
    text: "Chance to shoot booger tears (dmg over time for 60 seconds)",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _0992 = {
    name: "Super Ball",
    text: "Chance to shoot bouncy tears (tears bounce off rocks/walls)",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1002 = {
    name: "Vibrant Bulb",
    text: "+0.25 speed, +0.75 range, +0.1 shot speed, +0.2 tears, +0.5 damage, +1 luck when active item is fully charged",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1017 = {
    name: "Dim Bulb",
    text: "+0.5 speed, +1.5 range, +0.3 shot speed, +0.5 tears, +1.5 damage, +2 luck when active item is completely uncharged",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1022 = {
    name: "Fragmented Card",
    text: "Generates 2 Secret Rooms per floor",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1032 = {
    name: "Equality!",
    text: "Half pickups turn into doubled pickups when same # of coins + bombs + keys",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1042 = {
    name: "Wish Bone",
    text: "Chance to spawn pedestal item on hit",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1052 = {
    name: "Bag Lunch",
    text: "Chance to spawn Lunch on hit",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1062 = {
    name: "Lost Cork",
    text: "Increases radius of friendly creep",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1072 = {
    name: "Crow Heart",
    text: "Red heart containers are depleted first",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1082 = {
    name: "Walnut",
    text: "Chance to break and drop random coin/heart/key/trinket on hit from explosion",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1092 = {
    name: "Duct Tape",
    text: "Orbitals and familiars stop moving",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1102 = {
    name: "Silver Dollar",
    text: "Shops will appear on the Womb",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1117 = {
    name: "Bloody Crown",
    text: "Treasure Rooms will appear on the Womb",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1122 = {
    name: "Pay To Win",
    text: "Restock Machines will always spawn in Treasure Rooms",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1132 = {
    name: "Locust of Wrath",
    text: "Spawns a Red (exploding) Locust upon entering a room",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1142 = {
    name: "Locust of Pestilence",
    text: "Spawns a Green (poison) Locust upon entering a room",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1152 = {
    name: "Locust of Famine",
    text: "Spawns a Yellow (slowing) Locust upon entering a room",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1162 = {
    name: "Locust of Death",
    text: "Spawns a Black (4x dmg) Locust upon entering a room",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1172 = {
    name: "Locust of Conquest",
    text: "Spawns 2-5 White Locusts upon entering a room",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1182 = {
    name: "Bat Wing",
    text: "Chance to gain flight when killing an enemy",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1192 = {
    name: "Stem Cell",
    text: "Heals for 1/2 heart when travelling to the next floor",
    shown: true,
    introduced_in: "Afterbirth+"
  };
  var _1202 = {
    name: "Hairpin",
    text: "Fully recharges active item at the start of each boss",
    shown: true,
    introduced_in: "Booster Pack #1"
  };
  var _1217 = {
    name: "Wooden Cross",
    text: "Gives 1-hit shield at the start of each floor",
    shown: true,
    introduced_in: "Booster Pack #1"
  };
  var _1222 = {
    name: "Butter!",
    text: "Using active items drops them on the ground, chance to drop passive items on hit",
    shown: true,
    introduced_in: "Booster Pack #1"
  };
  var _1232 = {
    name: "Filigree Feather",
    text: "Angels will drop Angel Room items instead of key pieces",
    shown: true,
    introduced_in: "Booster Pack #2"
  };
  var _1242 = {
    name: "Door Stop",
    text: "Doors that you go through stay open",
    shown: true,
    introduced_in: "Booster Pack #3"
  };
  var _1252 = {
    name: "Extension Cord",
    text: "Yellow laser chain flows through familiars",
    shown: true,
    introduced_in: "Booster Pack #4"
  };
  var _1262 = {
    name: "Rotten Penny",
    text: "+1 blue fly upon picking up a coin",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _1272 = {
    name: "Baby-Bender",
    text: "Familiars have homing shots",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _1282 = {
    name: "Finger Bone",
    text: "5% chance to gain a bone heart on hit",
    shown: true,
    introduced_in: "Booster Pack #5"
  };
  var _1292 = {
    name: "Jawbreaker",
    text: "Tears can become a tooth",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1302 = {
    name: "Chewed Pen",
    text: "Tears have a chance to slow enemies",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1316 = {
    name: "Blessed Penny",
    text: "Chance to spawn half a soul heart when picking up a coin",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1322 = {
    name: "Broken Syringe",
    text: "Gives you a random syringe effect every room",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1332 = {
    name: "Short Fuse",
    text: "All bombs have a shorter fuse time",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1342 = {
    name: "Gigante Bean",
    text: "Farts from isaac and familiars are larger",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1352 = {
    name: "A Lighter",
    text: "Chance for enemies to burn when entering a room",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1362 = {
    name: "Broken Padlock",
    text: "Explosions can open locked doors",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1372 = {
    name: "Myosotis",
    text: "Get max 4 pickups from the previous floor at the beginning of the new floor",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1382 = {
    name: "'M",
    text: "Reroll your active item upon use",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1392 = {
    name: "Teardrop Charm",
    text: "Tear-based effects have an extra chance of occurring",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1402 = {
    name: "Apple of Sodom",
    text: "Red hearts have a chance to burst into blue spiders when touched",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1417 = {
    name: "Forgotten Lullaby",
    text: "Increase tear rate of familiars",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1422 = {
    name: "Beth's Faith",
    text: "Spawn four wisps at the start of each floor",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1432 = {
    name: "Old Capacitor",
    text: "Your active item don't charge but you have a chance to spawn an extra battery drop on room clear",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1442 = {
    name: "Brain Worm",
    text: "Missed tears will redirect themselves toward enemies",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1452 = {
    name: "Perfection",
    text: "+10 luck but break when hit",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1462 = {
    name: "Devil's Crown",
    text: "Treasure rooms are replaced with Devil Deals",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1472 = {
    name: "Charged Penny",
    text: "Chance to replenish 1 bar of charge when picking up pennies",
    shown: true,
    introduced_in: "Antibirth"
  };
  var _1482 = {
    name: "Friendship Necklace",
    text: "Turns follower familiars into orbitals",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1492 = {
    name: "Panic Button",
    text: "Automatically uses active item when the player is about to be hit by a projectile or an enemy",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1502 = {
    name: "Blue Key",
    text: "Locked doors can be opened for free but you have to go through a Blue Womb room with enemies",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1517 = {
    name: "Flat File",
    text: "Removes all spikes (spiked rocks, spiked chests, curse room included)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1522 = {
    name: "Telescope Lens",
    text: "+9% chance of finding Planetarium + allows them to appear in chapter 4",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1532 = {
    name: "Mom's Lock",
    text: "Chance of triggering a Mom item effect every room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1542 = {
    name: "Dice Bag",
    text: "Chance to obtain a single use dice item in your card slot that only lasts for the current room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1552 = {
    name: "Holy Crown",
    text: "Treasure rooms and shops will appear in the Cathedral",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1562 = {
    name: "Mother's Kiss",
    text: "Gives one empty heart container",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1572 = {
    name: "Torn Card",
    text: "Chance to shoot Ipecac + My Reflection shots",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1582 = {
    name: "Torn Pocket",
    text: "Spawns 2 pickups you have on the ground when damaged",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1592 = {
    name: "Gilded Key",
    text: "All chests become locked chests containing mixed pickups (including cards/pills/runes/batteries)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1602 = {
    name: "Lucky Sack",
    text: "A sack spawns in every starting room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1617 = {
    name: "Wicked Crown",
    text: "Treasure rooms and shops will appear in Sheol",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1622 = {
    name: "Azazel's Stump",
    text: "Chance to become Azazel on room clear until the next room clear",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1632 = {
    name: "Dingle Berry",
    text: "Spawns a charmed Dip on room clear",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1642 = {
    name: "Ring Cap",
    text: "2 bombs spawn each time you drop 1 bomb",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1652 = {
    name: "Nuh uh!",
    text: "Prevents coins and keys from spawning after the Depths",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1662 = {
    name: "Modeling Clay",
    text: "Chance of giving you a random passive item each room until room clear",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1672 = {
    name: "Polished Bone",
    text: "Chance of spawning a charmed bony on room clear",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1682 = {
    name: "Hollow Heart",
    text: "Gain an empty bone heart at the start of each floor",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1692 = {
    name: "Kid's Drawing",
    text: "Counts as a Guppy item, does nothing else",
    shown: true,
    guppy: true,
    introduced_in: "Repentance"
  };
  var _1702 = {
    name: "Crystal Key",
    text: "33% chance of Red Key effect on room clear",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1715 = {
    name: "Keeper's Bargain",
    text: "50% chance each devil deal will cost coins",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1722 = {
    name: "Cursed Penny",
    text: "Teleports you every time you pick up a coin",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1732 = {
    name: "Your Soul",
    text: "First devil deal item you will take while holding the trinket will be free",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1742 = {
    name: "Number Magnet",
    text: "Devil rooms always have at least a black heart and 2 enemies inside",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1752 = {
    name: "Strange Key",
    text: "Removes the time limit for Blue Womb. If Pandora's box is used, this trinket is consumed and spawns 6 random items",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1762 = {
    name: "Lil Clot",
    text: "Spawns one of Alt Eve's babies which respawns in the next room if killed",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1772 = {
    name: "Temporary Tattoo",
    text: "Challenge rooms drop 2 extra chests on clear, boss challenge rooms require 2 full hearts or less to enter",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1782 = {
    name: "Swallowed M80",
    text: "50% chance to trigger Kamikaze effect on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1792 = {
    name: "RC Remote",
    text: "Familiars are now controlled like Jacob&Esau",
    shown: true,
    introduced_in: "Repentance"
  };
  var _180 = {
    name: "Found soul",
    text: "Spawns a controllable baby Lost at the start of each floor that acts like a co-op baby",
    shown: true,
    introduced_in: "Repentance"
  };
  var _181 = {
    name: "Expansion Pack",
    text: "Using an active item will also trigger the effect of a random 1-2 charge item",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1822 = {
    name: "Beth's Essence",
    text: "Enter an angel room = 5 wisps, donate to a beggar = 1 wisp",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1832 = {
    name: "The Twins",
    text: "Chance of doubling one of your familiars each room, get Brother Bobby or Sister Maggy if no familiars",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1842 = {
    name: "Adoption Papers",
    text: "Familiars now replace items in shops and are on sale",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1852 = {
    name: "Cricket Leg",
    text: "10% chance of spawning a random locust per enemy killed",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1862 = {
    name: "Apollyon's Best Friend",
    text: "Spawns one of Alt Apollyon's red locusts",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1872 = {
    name: "Broken Glasses",
    text: "33% chance of extra blind item option on main path, reveals blind item on alt path",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1882 = {
    name: "Ice Cube",
    text: "Chance of enemies being frozen when you enter the room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _1892 = {
    name: "Sigil of Baphomet",
    text: "Grants a 2 seconds shield every time you kill an enemy",
    shown: true,
    introduced_in: "Repentance"
  };
  var _000 = {
    name: "Mega Satan's Key",
    text: "Opens Mega Satan's Door",
    shown: true,
    introduced_in: "Rebirth"
  };
  var _0014 = {
    name: "Super Bum",
    text: "Collects coins, red hearts and keys and drops twice as many rewards as the regular bums",
    shown: true,
    introduced_in: "Afterbirth"
  };
  var _0023 = {
    name: "Knife",
    text: "Opens door to corpse",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2769 = {
    name: "(G) Swallowed Penny",
    text: "Spawn 2 pennies on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2770 = {
    name: "(G) Petrified Poop",
    text: "Higher chance for rewards from poops",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2771 = {
    name: "(G) AAA Battery",
    text: "Quicker charge",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2772 = {
    name: "(G) Broken Remote",
    text: "Teleport on active item use",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2773 = {
    name: "(G) Purple Heart",
    text: "Higher chance for champions",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2774 = {
    name: "(G) Broken Magnet",
    text: "Pulls coins toward you",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2775 = {
    name: "(G) Rosary Bead",
    text: "Increases Angel Room chance to 75%/25% (from 50%/50%)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2776 = {
    name: "(G) Cartridge",
    text: "Chance to get The Gamekid effect on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2777 = {
    name: "(G) Pulse Worm",
    text: "Pulsing tears (only cosmetic)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2778 = {
    name: "(G) Wiggle Worm",
    text: "Wave + spectral tears",
    tears: "0.4",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2779 = {
    name: "(G) Ring Worm",
    text: "Ring + spectral tears",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2780 = {
    name: "(G) Flat Worm",
    text: "Flat tears (only cosmetic)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2781 = {
    name: "(G) Store Credit",
    text: "First shop item you will take while holding the trinket will be free",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2782 = {
    name: "(G) Callus",
    text: "Immunity from spike and creep damage",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2783 = {
    name: "(G) Lucky Rock",
    text: "33% for rocks to drop coins when broken",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2784 = {
    name: "(G) Mom's Toenail",
    text: "Mom stomps every 60 seconds (300 dmg)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2785 = {
    name: "(G) Black Lipstick",
    text: "Higher chance for black hearts",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2786 = {
    name: "(G) Bible Tract",
    text: "Higher chance for eternal hearts",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2787 = {
    name: "(G) Paper Clip",
    text: "Can open Golden Chests without using a key",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2788 = {
    name: "(G) Monkey Paw",
    text: "Spawns 2 black hearts when half a heart is remaining (3 times max)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2789 = {
    name: "(G) Mysterious Paper",
    text: "Copies effect of either A Missing Page, The Polaroid, The Negative, or Missing Poster",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2790 = {
    name: "(G) Daemon's Tail",
    text: "Heart drops are rerolled into a black heart, 80% to replace a heart drop with a key",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2791 = {
    name: "(G) Missing Poster",
    text: "+1 life (will respawn as The Lost)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2792 = {
    name: "(G) Butt Penny",
    text: "Farts upon picking up a coin",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2793 = {
    name: "(G) Mysterious Candy",
    text: "Chance to randomly poop",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2794 = {
    name: "(G) Hook Worm",
    text: "Hook + spectral tears",
    range: "3",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2795 = {
    name: "(G) Whip Worm",
    text: "",
    shot_speed: "1",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2796 = {
    name: "(G) Broken Ankh",
    text: "20% chance to respawn as Blue Baby on death",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2797 = {
    name: "(G) Fish Head",
    text: "Spawns 2-4 blue flies on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2798 = {
    name: "(G) Pinky Eye",
    text: "Chance to shoot poison tears",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2799 = {
    name: "(G) Push Pin",
    text: "Chance to shoot spectral + piercing tears",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2800 = {
    name: "(G) Liberty Cap",
    text: "Gives a random mushroom effect each room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2801 = {
    name: "(G) Umbilical Cord",
    text: "Gives Little Steven if damaged to 1/2 hearts, high chance to proc a Gemini for the room when hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2802 = {
    name: "(G) Child's Heart",
    text: "Higher chance to find red hearts",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2803 = {
    name: "(G) Curved Horn",
    dmg: "4",
    text: "",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2804 = {
    name: "(G) Rusted Key",
    text: "Higher chance to find keys and chests",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2805 = {
    name: "(G) Goat Hoof",
    text: "",
    speed: "0.3",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2806 = {
    name: "(G) Mom's Pearl",
    text: "Higher chance to find soul hearts",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2807 = {
    name: "(G) Cancer",
    text: "",
    tears: "2",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2808 = {
    name: "(G) Red Patch",
    text: "Chance to temporarily gain 2.72 dmg on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2809 = {
    name: "(G) Match Stick",
    text: "Higher chance to find bombs",
    shown: true,
    introduced_in: "Repentance"
  };
  var _28102 = {
    name: "(G) Lucky Toe",
    text: "",
    luck: "2",
    shown: true,
    introduced_in: "Repentance"
  };
  var _28112 = {
    name: "(G) Cursed Skull",
    text: "Teleported to a random room if damaged to 1/2 heart",
    shown: true,
    introduced_in: "Repentance"
  };
  var _28122 = {
    name: "(G) Safety Cap",
    text: "Higher chance to find pills",
    shown: true,
    introduced_in: "Repentance"
  };
  var _28132 = {
    name: "(G) Ace of Spades",
    text: "Higher chance to find cards",
    shown: true,
    introduced_in: "Repentance"
  };
  var _28142 = {
    name: "(G) Isaac's Fork",
    text: "Chance to heal for a full heart after clearing a room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2816 = {
    name: "(G) A Missing Page",
    text: "Chance to do Necronomicon effect (120 dmg) on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2817 = {
    name: "(G) Bloody Penny",
    text: "25% chance to spawn a 1/2 red heart upon picking up a coin",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2818 = {
    name: "(G) Burnt Penny",
    text: "25% chance to spawn a bomb upon picking up a coin",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2819 = {
    name: "(G) Flat Penny",
    text: "25% chance to spawns a key upon picking up a coin",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2820 = {
    name: "(G) Counterfeit Penny",
    text: "50% chance to gain an extra cent upon picking up a coin",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2821 = {
    name: "(G) Tick",
    text: "Automatically deals 30% damage to each boss, heals 1 red heart, cannot drop",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2822 = {
    name: "(G) Isaac's Head",
    text: "Familiar (3.5 dmg / tear, piercing)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2823 = {
    name: "(G) Maggy's Faith",
    text: "Gives two eternal hearts at the beginning of every floor",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2824 = {
    name: "(G) Judas' Tongue",
    text: "Devil deal items that cost 2 hearts are reduced to 1 heart",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2825 = {
    name: "(G) ???'s Soul",
    text: "Familiar that moves like DVD logo, shoots in the same direction as the player",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2826 = {
    name: "(G) Samson's Lock",
    text: "Chance to temporarily gain 0.5 dmg when killing an enemy",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2827 = {
    name: "(G) Cain's Eye",
    text: "25% chance to gain The Compass effect at the beginning of every floor",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2828 = {
    name: "(G) Eve's Bird Foot",
    text: "Chance to spawn a Dead Bird familiar when killing an enemy (2 dmg / tick)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2829 = {
    name: "(G) The Left Hand",
    text: "All chests become Red Chests",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2830 = {
    name: "(G) Shiny Rock",
    text: "Tinted rocks and crawlspace rocks will flash white every 10 seconds",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2831 = {
    text: "(G) Turns all troll bombs into bomb pickups",
    shown: true,
    name: "Safety Scissors",
    introduced_in: "Repentance"
  };
  var _2832 = {
    name: "(G) Rainbow Worm",
    text: "Rainbow worm tears (a random worm effect every 5 seconds)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2833 = {
    name: "(G) Tape Worm",
    text: "Halves tear height",
    range: "6",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2834 = {
    name: "(G) Lazy Worm",
    text: "",
    shot_speed: "-1",
    height: "2",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2835 = {
    name: "(G) Cracked Dice",
    text: "Randomly D6, D20, D8, or D12 on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2836 = {
    name: "(G) Super Magnet",
    text: "Pickups and enemies move towards you",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2837 = {
    name: "(G) Faded Polaroid",
    text: "Chance to gain camouflage for a few seconds (confuses all enemies)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2838 = {
    name: "(G) Louse",
    text: "Chance to spawn 2 blue spiders when in a room with enemies",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2839 = {
    name: "(G) Bob's Bladder",
    text: "Bombs make green creep",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2840 = {
    name: "(G) Watch Battery",
    text: "Increased chance to find batteries, chance to add an extra charge after clearing a room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2841 = {
    name: "(G) Blasting Cap",
    text: "Exploding bombs have a chance to drop another bomb pickup",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2842 = {
    name: "(G) Stud Finder",
    text: "Increased chance to find crawlspaces when breaking rocks",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2843 = {
    name: "(G) Error",
    text: "Gives a random trinket effect per room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2844 = {
    name: "(G) Poker Chip",
    text: "Chests now have a 50/50 chance to give extra pickups or have nothing",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2845 = {
    name: "(G) Blister",
    text: "Tears have extra knockback",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2846 = {
    name: "(G) Second Hand",
    text: "Increases the time that status effects stay on enemies",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2847 = {
    name: "(G) Endless Nameless",
    text: "Chance to drop an extra copy of a card/pill upon use",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2848 = {
    name: "(G) Black Feather",
    text: '+1 dmg per "evil" item',
    shown: true,
    introduced_in: "Repentance"
  };
  var _2849 = {
    name: "(G) Blind Rage",
    text: "Extra invulnerability frames on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2850 = {
    name: "(G) Golden Horse Shoe",
    text: "+30% chance to get a double Treasure Room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2851 = {
    name: "(G) Store Key",
    text: "Shops do not require keys",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2852 = {
    name: "(G) Rib of Greed",
    text: "Greed and Super Greed can no longer appear",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2853 = {
    name: "(G) Karma",
    text: "Chance to heal a red heart or spawn a Beggar when using a Donation Machine",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2854 = {
    name: "(G) Lil Larva",
    text: "Gives 2 blue flies upon destroying a poop",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2855 = {
    name: "(G) Mom's Locket",
    text: "Changes all 1/2 red hearts into full hearts, heals 1/2 heart when a key is used",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2856 = {
    name: "(G) NO!",
    text: "Prevents active items and items with a quality 0 from appearing",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2857 = {
    name: "(G) Child Leash",
    text: "Familiars stay closer to you",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2858 = {
    name: "(G) Brown Cap",
    text: "Poop explodes when destroyed",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2859 = {
    name: "(G) Meconium",
    text: "Increased chance for Black Poops",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2860 = {
    name: "(G) Cracked Crown",
    text: "Stat bonuses are increased by 40%",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2861 = {
    name: "(G) Used Diaper",
    text: "Gives Skatole effect in certain rooms",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2862 = {
    name: "(G) Fish Tail",
    text: "2x blue fly/spider generation",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2863 = {
    name: "(G) Black Tooth",
    text: "Chance to shoot black tooth tears (2x dmg + poison)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2864 = {
    name: "(G) Ouroboros Worm",
    text: "Spiral tears",
    range: "3",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2865 = {
    name: "(G) Tonsil",
    text: "Chance to spawn tonsil familiar on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2866 = {
    name: "(G) Nose Goblin",
    text: "Chance to shoot booger tears (dmg over time for 60 seconds)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2867 = {
    name: "(G) Super Ball",
    text: "Chance to shoot bouncy tears (tears bounce off rocks/walls)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2868 = {
    name: "(G) Vibrant Bulb",
    text: "+0.25 speed, +0.75 range, +0.1 shot speed, +0.2 tears, +0.5 damage, +1 luck when active item is fully charged",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2869 = {
    name: "(G) Dim Bulb",
    text: "+0.5 speed, +1.5 range, +0.3 shot speed, +0.5 tears, +1.5 damage, +2 luck when active item is completely uncharged",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2870 = {
    name: "(G) Fragmented Card",
    text: "Generates 2 Secret Rooms per floor",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2871 = {
    name: "(G) Equality!",
    text: "Half pickups turn into doubled pickups when same # of coins + bombs + keys",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2872 = {
    name: "(G) Wish Bone",
    text: "Chance to spawn pedestal item on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2873 = {
    name: "(G) Bag Lunch",
    text: "Chance to spawn Lunch on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2874 = {
    name: "(G) Lost Cork",
    text: "Increases radius of friendly creep",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2875 = {
    name: "(G) Crow Heart",
    text: "Red heart containers are depleted first",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2876 = {
    name: "(G) Walnut",
    text: "Chance to break and drop random coin/heart/key/trinket on hit from explosion",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2877 = {
    name: "(G) Duct Tape",
    text: "Orbitals and familiars stop moving",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2878 = {
    name: "(G) Silver Dollar",
    text: "Shops will appear on the Womb",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2879 = {
    name: "(G) Bloody Crown",
    text: "Treasure Rooms will appear on the Womb",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2880 = {
    name: "(G) Pay To Win",
    text: "Restock Machines will always spawn in Treasure Rooms",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2881 = {
    name: "(G) Locust of Wrath",
    text: "Spawns a Red (exploding) Locust upon entering a room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2882 = {
    name: "(G) Locust of Pestilence",
    text: "Spawns a Green (poison) Locust upon entering a room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2883 = {
    name: "(G) Locust of Famine",
    text: "Spawns a Yellow (slowing) Locust upon entering a room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2884 = {
    name: "(G) Locust of Death",
    text: "Spawns a Black (4x dmg) Locust upon entering a room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2885 = {
    name: "(G) Locust of Conquest",
    text: "Spawns 1-4 White Locusts upon entering a room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2886 = {
    name: "(G) Bat Wing",
    text: "Chance to gain flight when killing an enemy",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2887 = {
    name: "(G) Stem Cell",
    text: "Heals for 1/2 heart when travelling to the next floor",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2888 = {
    name: "(G) Hairpin",
    text: "Fully recharges active item at the start of each boss",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2889 = {
    name: "(G) Wooden Cross",
    text: "Gives 1-hit shield at the start of each floor",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2890 = {
    name: "(G) Butter!",
    text: "Using active items drops them on the ground, chance to drop passive items on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2891 = {
    name: "(G) Filigree Feather",
    text: "Angels will drop Angel Room items instead of key pieces",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2892 = {
    name: "(G) Door Stop",
    text: "Doors that you go through stay open",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2893 = {
    name: "(G) Extension Cord",
    text: "Yellow laser chain flows through familiars",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2894 = {
    name: "(G) Rotten Penny",
    text: "+1 blue fly upon picking up a coin",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2895 = {
    name: "(G) Baby-Bender",
    text: "Familiars have homing shots",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2896 = {
    name: "(G) Finger Bone",
    text: "5% chance to gain a bone heart on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2897 = {
    name: "(G) Jawbreaker",
    text: "Tears can become a tooth",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2898 = {
    name: "(G) Chewed Pen",
    text: "Tears have a chance to slow enemies",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2899 = {
    name: "(G) Blessed Penny",
    text: "Chance to spawn half a soul heart when picking up a coin",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2900 = {
    name: "(G) Broken Syringe",
    text: "Gives you a random syringe effect every room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2901 = {
    name: "(G) Short Fuse",
    text: "All bombs have a shorter fuse time",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2902 = {
    name: "(G) Gigante Bean",
    text: "Farts from isaac and familiars are larger",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2903 = {
    name: "(G) A Lighter",
    text: "Chance for enemies to burn when entering a room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2904 = {
    name: "(G) Broken Padlock",
    text: "Explosions can open locked doors",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2905 = {
    name: "(G) Myosotis",
    text: "Get max 4 pickups from the previous floor at the beginning of the new floor",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2906 = {
    name: "(G) 'M",
    text: "Reroll your active item upon use",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2907 = {
    name: "(G) Teardrop Charm",
    text: "Tear-based effects have an extra chance of occurring",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2908 = {
    name: "(G) Apple of Sodom",
    text: "Red hearts have a chance to burst into blue spiders when touched",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2909 = {
    name: "(G) Forgotten Lullaby",
    text: "Increase tear rate of familiars",
    shown: true,
    introduced_in: "Repentance"
  };
  var _29102 = {
    name: "(G) Beth's Faith",
    text: "Spawn 8 wisps at the start of each floor",
    shown: true,
    introduced_in: "Repentance"
  };
  var _29112 = {
    name: "(G) Old Capacitor",
    text: "Your active item don't charge but you have a chance to spawn an extra battery drop on room clear",
    shown: true,
    introduced_in: "Repentance"
  };
  var _29122 = {
    name: "(G) Brain Worm",
    text: "Missed tears will redirect themselves toward enemies",
    shown: true,
    introduced_in: "Repentance"
  };
  var _29132 = {
    name: "(G) Perfection",
    text: "+20 luck but break when hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _29142 = {
    name: "(G) Devil's Crown",
    text: "Treasure rooms are replaced with Devil Deals",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2915 = {
    name: "(G) Charged Penny",
    text: "Chance to replenish 1 bar of charge when picking up pennies",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2916 = {
    name: "(G) Friendship Necklace",
    text: "Turns follower familiars into orbitals",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2917 = {
    name: "(G) Panic Button",
    text: "Automatically uses active item when the player is about to be hit by a projectile or an enemy",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2918 = {
    name: "(G) Blue Key",
    text: "Locked doors can be opened for free but you have to go through a Blue Womb room with enemies",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2919 = {
    name: "(G) Flat File",
    text: "Removes all spikes (spiked rocks, spiked chests, curse room included)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2920 = {
    name: "(G) Telescope Lens",
    text: "+9% chance of finding Planetarium + allows them to appear in chapter 4",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2921 = {
    name: "(G) Mom's Lock",
    text: "Chance of triggering a Mom item effect every room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2922 = {
    name: "(G) Dice Bag",
    text: "Chance to obtain a single use dice item in your card slot that only lasts for the current room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2923 = {
    name: "(G) Holy Crown",
    text: "Treasure rooms and shops will appear in the Cathedral",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2924 = {
    name: "(G) Mother's Kiss",
    text: "Gives one empty heart container",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2925 = {
    name: "(G) Torn Card",
    text: "Chance to shoot Ipecac + My Reflection shots",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2926 = {
    name: "(G) Torn Pocket",
    text: "Spawns 2 pickups you have on the ground when damaged",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2927 = {
    name: "(G) Gilded Key",
    text: "All chests become locked chests containing mixed pickups (including cards/pills/runes/batteries)",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2928 = {
    name: "(G) Lucky Sack",
    text: "2 sacks spawns in every starting room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2929 = {
    name: "(G) Wicked Crown",
    text: "Treasure rooms and shops will appear in Sheol",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2930 = {
    name: "(G) Azazel's Stump",
    text: "Chance to become Azazel on room clear until the next room clear",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2931 = {
    name: "(G) Dingle Berry",
    text: "Spawns two charmed Dips on room clear",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2932 = {
    name: "(G) Ring Cap",
    text: "2 bombs spawn each time you drop 1 bomb",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2933 = {
    name: "(G) Nuh uh!",
    text: "Prevents coins and keys from spawning after the Depths",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2934 = {
    name: "(G) Modeling Clay",
    text: "Chance of giving you a random passive item each room until room clear",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2935 = {
    name: "(G) Polished Bone",
    text: "Chance of spawning a charmed bony on room clear",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2936 = {
    name: "(G) Hollow Heart",
    text: "Gain 2 empty bone hearts at the start of each floor",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2937 = {
    name: "(G) Kid's Drawing",
    text: "Counts as two Guppy items, does nothing else",
    shown: true,
    guppy: true,
    introduced_in: "Repentance"
  };
  var _2938 = {
    name: "(G) Crystal Key",
    text: "33% chance of Red Key effect on room clear",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2939 = {
    name: "(G) Keeper's Bargain",
    text: "50% chance each devil deal will cost coins",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2940 = {
    name: "(G) Cursed Penny",
    text: "Teleports you every time you pick up a coin",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2941 = {
    name: "(G) Your Soul",
    text: "First devil deal item you will take while holding the trinket will be free",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2942 = {
    name: "(G) Number Magnet",
    text: "Devil rooms always have at least a black heart and 2 enemies inside",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2943 = {
    name: "(G) Strange Key",
    text: "Removes the time limit for Blue Womb. If Pandora's box is used, this trinket is consumed and spawns 6 random items",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2944 = {
    name: "(G) Lil Clot",
    text: "Spawns two of Alt Eve's babies which respawns in the next room if killed",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2945 = {
    name: "(G) Temporary Tattoo",
    text: "Challenge rooms drop 2 extra chests on clear, boss challenge rooms require 2 full hearts or less to enter",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2946 = {
    name: "(G) Swallowed M80",
    text: "50% chance to trigger Kamikaze effect on hit",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2947 = {
    name: "(G) RC Remote",
    text: "Familiars are now controlled like Jacob&Esau",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2948 = {
    name: "(G) Found soul",
    text: "Spawns a controllable baby Lost at the start of each floor that acts like a co-op baby",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2949 = {
    name: "(G) Expansion Pack",
    text: "Using an active item will also trigger the effect of a random 1-2 charge item",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2950 = {
    name: "(G) Beth's Essence",
    text: "Enter an angel room = 5 wisps, donate to a beggar = 1 wisp",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2951 = {
    name: "(G) The Twins",
    text: "Chance of doubling one of your familiars each room, get Brother Bobby or Sister Maggy if no familiars",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2952 = {
    name: "(G) Adoption Papers",
    text: "Familiars now replace items in shops and are on sale",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2953 = {
    name: "(G) Cricket Leg",
    text: "10% chance of spawning a random locust per enemy killed",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2954 = {
    name: "(G) Apollyon's Best Friend",
    text: "Spawns two of Alt Apollyon's red locusts",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2955 = {
    name: "(G) Broken Glasses",
    text: "33% chance of extra blind item option on main path, reveals blind item on alt path",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2956 = {
    name: "(G) Ice Cube",
    text: "Chance of enemies being frozen when you enter the room",
    shown: true,
    introduced_in: "Repentance"
  };
  var _2957 = {
    name: "(G) Sigil of Baphomet",
    text: "Grants a 2 seconds shield every time you kill an enemy",
    shown: true,
    introduced_in: "Repentance"
  };
  var items_default = {
    NEW,
    "-1": _130,
    "1": _131,
    "2": _138,
    "3": _139,
    "4": _140,
    "5": _141,
    "6": _148,
    "7": _149,
    "8": _150,
    "9": _151,
    "10": _020,
    "11": _158,
    "12": _228,
    "13": _329,
    "14": _421,
    "15": _521,
    "16": _627,
    "17": _727,
    "18": _827,
    "19": _918,
    "20": _021,
    "21": _159,
    "22": _229,
    "23": _330,
    "24": _427,
    "25": _527,
    "26": _628,
    "27": _728,
    "28": _828,
    "29": _919,
    "30": _028,
    "31": _160,
    "32": _230,
    "33": _331,
    "34": _428,
    "35": _528,
    "36": _629,
    "37": _729,
    "38": _829,
    "39": _920,
    "40": _029,
    "41": _161,
    "42": _231,
    "44": _429,
    "45": _529,
    "46": _630,
    "47": _730,
    "48": _830,
    "49": _921,
    "50": _030,
    "51": _168,
    "52": _238,
    "53": _338,
    "54": _430,
    "55": _530,
    "56": _631,
    "57": _731,
    "58": _831,
    "60": _031,
    "62": _239,
    "63": _339,
    "64": _431,
    "65": _531,
    "66": _637,
    "67": _737,
    "68": _837,
    "69": _927,
    "70": _038,
    "71": _169,
    "72": _240,
    "73": _340,
    "74": _437,
    "75": _537,
    "76": _638,
    "77": _738,
    "78": _838,
    "79": _928,
    "80": _039,
    "81": _170,
    "82": _241,
    "83": _341,
    "84": _438,
    "85": _538,
    "86": _639,
    "87": _739,
    "88": _839,
    "89": _929,
    "90": _040,
    "91": _171,
    "92": _248,
    "93": _348,
    "94": _439,
    "95": _539,
    "96": _640,
    "97": _740,
    "98": _840,
    "99": _930,
    "100": _007,
    "101": _0110,
    "102": _0210,
    "103": _0310,
    "104": _048,
    "105": _058,
    "106": _068,
    "107": _078,
    "108": _088,
    "109": _098,
    "110": _1010,
    "111": _1110,
    "112": _1210,
    "113": _1310,
    "114": _1410,
    "115": _1510,
    "116": _1610,
    "117": _178,
    "118": _188,
    "119": _198,
    "120": _207,
    "121": _2110,
    "122": _2210,
    "123": _2310,
    "124": _249,
    "125": _258,
    "126": _268,
    "127": _278,
    "128": _288,
    "129": _298,
    "130": _307,
    "131": _3110,
    "132": _3210,
    "133": _3310,
    "134": _349,
    "135": _358,
    "136": _368,
    "137": _378,
    "138": _387,
    "139": _397,
    "140": _406,
    "141": _4110,
    "142": _4210,
    "143": _4310,
    "144": _447,
    "145": _457,
    "146": _467,
    "147": _477,
    "148": _487,
    "149": _497,
    "150": _506,
    "151": _5110,
    "152": _5210,
    "153": _5310,
    "154": _547,
    "155": _557,
    "156": _567,
    "157": _577,
    "158": _587,
    "159": _597,
    "160": _606,
    "161": _6110,
    "162": _6210,
    "163": _6310,
    "164": _647,
    "165": _657,
    "166": _667,
    "167": _677,
    "168": _687,
    "169": _697,
    "170": _706,
    "171": _7110,
    "172": _7210,
    "173": _7310,
    "174": _747,
    "175": _757,
    "176": _767,
    "177": _777,
    "178": _787,
    "179": _797,
    "180": _806,
    "181": _8110,
    "182": _8210,
    "183": _8310,
    "184": _847,
    "185": _857,
    "186": _867,
    "187": _877,
    "188": _887,
    "189": _897,
    "190": _906,
    "191": _9110,
    "192": _9210,
    "193": _937,
    "194": _947,
    "195": _957,
    "196": _967,
    "197": _977,
    "198": _987,
    "199": _997,
    "200": _008,
    "201": _0111,
    "202": _0211,
    "203": _0311,
    "204": _049,
    "205": _059,
    "206": _069,
    "207": _079,
    "208": _089,
    "209": _099,
    "210": _1011,
    "211": _1111,
    "212": _1211,
    "213": _1311,
    "214": _1411,
    "215": _1511,
    "216": _1611,
    "217": _179,
    "218": _189,
    "219": _199,
    "220": _208,
    "221": _2111,
    "222": _2211,
    "223": _2311,
    "224": _2410,
    "225": _259,
    "226": _269,
    "227": _279,
    "228": _289,
    "229": _299,
    "230": _308,
    "231": _3111,
    "232": _3211,
    "233": _3311,
    "234": _3410,
    "236": _369,
    "237": _379,
    "238": _388,
    "239": _398,
    "240": _407,
    "241": _4111,
    "242": _4211,
    "243": _4311,
    "244": _448,
    "245": _458,
    "246": _468,
    "247": _478,
    "248": _488,
    "249": _498,
    "250": _507,
    "251": _5111,
    "252": _5211,
    "253": _5311,
    "254": _548,
    "255": _558,
    "256": _568,
    "257": _578,
    "258": _588,
    "259": _598,
    "260": _607,
    "261": _6111,
    "262": _6211,
    "263": _6311,
    "264": _648,
    "265": _658,
    "266": _668,
    "267": _678,
    "268": _688,
    "269": _698,
    "270": _707,
    "271": _7111,
    "272": _7211,
    "273": _7311,
    "274": _748,
    "275": _758,
    "276": _768,
    "277": _778,
    "278": _788,
    "279": _798,
    "280": _807,
    "281": _8111,
    "282": _8211,
    "283": _8311,
    "284": _848,
    "285": _858,
    "286": _868,
    "287": _878,
    "288": _888,
    "289": _898,
    "290": _907,
    "291": _9111,
    "292": _9211,
    "293": _938,
    "294": _948,
    "295": _958,
    "296": _968,
    "297": _978,
    "298": _988,
    "299": _998,
    "300": _009,
    "301": _0112,
    "302": _0212,
    "303": _0312,
    "304": _0410,
    "305": _0510,
    "306": _0610,
    "307": _0710,
    "308": _0810,
    "309": _0910,
    "310": _1012,
    "311": _1112,
    "312": _1212,
    "313": _1312,
    "314": _1412,
    "315": _1512,
    "316": _1612,
    "317": _1710,
    "318": _1810,
    "319": _1910,
    "320": _209,
    "321": _2112,
    "322": _2212,
    "323": _2312,
    "324": _2411,
    "325": _2510,
    "326": _2610,
    "327": _2710,
    "328": _2810,
    "329": _2910,
    "330": _309,
    "331": _3112,
    "332": _3212,
    "333": _3312,
    "334": _3411,
    "335": _359,
    "336": _3610,
    "337": _3710,
    "338": _389,
    "339": _399,
    "340": _408,
    "341": _4112,
    "342": _4212,
    "343": _4312,
    "344": _449,
    "345": _459,
    "346": _469,
    "347": _479,
    "348": _489,
    "349": _499,
    "350": _508,
    "351": _5112,
    "352": _5212,
    "353": _5312,
    "354": _549,
    "355": _559,
    "356": _569,
    "357": _579,
    "358": _589,
    "359": _599,
    "360": _608,
    "361": _6112,
    "362": _6212,
    "363": _6312,
    "364": _649,
    "365": _659,
    "366": _669,
    "367": _679,
    "368": _689,
    "369": _699,
    "370": _708,
    "371": _7112,
    "372": _7212,
    "373": _7312,
    "374": _749,
    "375": _759,
    "376": _769,
    "377": _779,
    "378": _789,
    "379": _799,
    "380": _808,
    "381": _8112,
    "382": _8212,
    "383": _8312,
    "384": _849,
    "385": _859,
    "386": _869,
    "387": _879,
    "388": _889,
    "389": _899,
    "390": _908,
    "391": _9112,
    "392": _9212,
    "393": _939,
    "394": _949,
    "395": _959,
    "396": _969,
    "397": _979,
    "398": _989,
    "399": _999,
    "400": _0010,
    "401": _0113,
    "402": _0213,
    "403": _0313,
    "404": _0411,
    "405": _0511,
    "406": _0611,
    "407": _0711,
    "408": _0811,
    "409": _0911,
    "410": _1013,
    "411": _1113,
    "412": _1213,
    "413": _1313,
    "414": _1413,
    "415": _1513,
    "416": _1613,
    "417": _1711,
    "418": _1811,
    "419": _1911,
    "420": _2010,
    "421": _2113,
    "422": _2213,
    "423": _2313,
    "424": _2412,
    "425": _2511,
    "426": _2611,
    "427": _2711,
    "428": _2811,
    "429": _2911,
    "430": _3010,
    "431": _3113,
    "432": _3213,
    "433": _3313,
    "434": _3412,
    "435": _3510,
    "436": _3611,
    "437": _3711,
    "438": _3810,
    "439": _3910,
    "440": _409,
    "441": _4113,
    "442": _4213,
    "443": _4313,
    "444": _4410,
    "445": _4510,
    "446": _4610,
    "447": _4710,
    "448": _4810,
    "449": _4910,
    "450": _509,
    "451": _5113,
    "452": _5213,
    "453": _5313,
    "454": _5410,
    "455": _5510,
    "456": _5610,
    "457": _5710,
    "458": _5810,
    "459": _5910,
    "460": _609,
    "461": _6113,
    "462": _6213,
    "463": _6313,
    "464": _6410,
    "465": _6510,
    "466": _6610,
    "467": _6710,
    "468": _6810,
    "469": _6910,
    "470": _709,
    "471": _7113,
    "472": _7213,
    "473": _7313,
    "474": _7410,
    "475": _7510,
    "476": _7610,
    "477": _7710,
    "478": _7810,
    "479": _7910,
    "480": _809,
    "481": _8113,
    "482": _8213,
    "483": _8313,
    "484": _8410,
    "485": _8510,
    "486": _8610,
    "487": _8710,
    "488": _8810,
    "489": _8910,
    "490": _909,
    "491": _9113,
    "492": _9213,
    "493": _9310,
    "494": _9410,
    "495": _9510,
    "496": _9610,
    "497": _9710,
    "498": _9810,
    "499": _9910,
    "500": _0011,
    "501": _0114,
    "502": _0214,
    "503": _0314,
    "504": _0412,
    "505": _0512,
    "506": _0612,
    "507": _0712,
    "508": _0812,
    "509": _0912,
    "510": _1014,
    "511": _1114,
    "512": _1214,
    "513": _1314,
    "514": _1414,
    "515": _1514,
    "516": _1614,
    "517": _1712,
    "518": _1812,
    "519": _1912,
    "520": _2011,
    "521": _2114,
    "522": _2214,
    "523": _2314,
    "524": _2413,
    "525": _2512,
    "526": _2612,
    "527": _2712,
    "528": _2812,
    "529": _2912,
    "530": _3011,
    "531": _3114,
    "532": _3214,
    "533": _3314,
    "534": _3413,
    "535": _3511,
    "536": _3612,
    "537": _3712,
    "538": _3811,
    "539": _3911,
    "540": _4010,
    "541": _4114,
    "542": _4214,
    "543": _4314,
    "544": _4411,
    "545": _4511,
    "546": _4611,
    "547": _4711,
    "548": _4811,
    "549": _4911,
    "550": _5010,
    "551": _5114,
    "552": _5214,
    "553": _5314,
    "554": _5411,
    "555": _5511,
    "556": _5611,
    "557": _5711,
    "558": _5811,
    "559": _5911,
    "560": _6010,
    "561": _6114,
    "562": _6214,
    "563": _6314,
    "564": _6411,
    "565": _6511,
    "566": _6611,
    "567": _6711,
    "568": _6811,
    "569": _6911,
    "570": _7010,
    "571": _7114,
    "572": _7214,
    "573": _7314,
    "574": _7411,
    "575": _7511,
    "576": _7611,
    "577": _7711,
    "578": _7811,
    "579": _7911,
    "580": _8010,
    "581": _8114,
    "582": _8214,
    "583": _8314,
    "584": _8411,
    "585": _8511,
    "586": _8611,
    "588": _8811,
    "589": _8911,
    "590": _9010,
    "591": _9114,
    "592": _9214,
    "593": _9311,
    "594": _9411,
    "595": _9511,
    "596": _9611,
    "597": _9711,
    "598": _9811,
    "599": _9911,
    "600": _0012,
    "601": _0115,
    "602": _0215,
    "603": _0315,
    "604": _0413,
    "605": _0513,
    "606": _0613,
    "607": _0713,
    "608": _0813,
    "609": _0913,
    "610": _1015,
    "611": _1115,
    "612": _1215,
    "614": _1415,
    "615": _1515,
    "616": _1615,
    "617": _1713,
    "618": _1813,
    "619": _1913,
    "621": _2115,
    "622": _2215,
    "623": _2315,
    "624": _2414,
    "625": _2513,
    "626": _2613,
    "627": _2713,
    "628": _2813,
    "629": _2913,
    "631": _3115,
    "632": _3215,
    "633": _3315,
    "634": _3414,
    "635": _3512,
    "636": _3613,
    "637": _3713,
    "638": _3812,
    "639": _3912,
    "640": _4011,
    "641": _4115,
    "642": _4215,
    "643": _4315,
    "644": _4412,
    "645": _4512,
    "646": _4612,
    "647": _4712,
    "649": _4912,
    "650": _5011,
    "651": _5115,
    "652": _5215,
    "653": _5315,
    "654": _5412,
    "655": _5512,
    "656": _5612,
    "657": _5712,
    "658": _5812,
    "659": _5912,
    "660": _6011,
    "661": _6115,
    "663": _6315,
    "664": _6412,
    "665": _6512,
    "667": _6712,
    "668": _6812,
    "669": _6912,
    "670": _7011,
    "671": _7115,
    "672": _7215,
    "673": _7315,
    "674": _7412,
    "675": _7512,
    "676": _7612,
    "677": _7712,
    "678": _7812,
    "679": _7912,
    "680": _8011,
    "681": _8115,
    "682": _8215,
    "683": _8315,
    "684": _8412,
    "685": _8512,
    "686": _8612,
    "687": _8711,
    "688": _8812,
    "689": _8912,
    "690": _9011,
    "691": _9115,
    "692": _9215,
    "693": _9312,
    "694": _9412,
    "695": _9512,
    "696": _9612,
    "697": _9712,
    "698": _9812,
    "699": _9912,
    "700": _0013,
    "701": _0116,
    "702": _0216,
    "703": _0316,
    "704": _0414,
    "705": _0514,
    "706": _0614,
    "707": _0714,
    "708": _0814,
    "709": _0914,
    "710": _1016,
    "711": _1116,
    "712": _1216,
    "713": _1315,
    "714": _1416,
    "715": _1516,
    "716": _1616,
    "717": _1714,
    "719": _1914,
    "720": _2012,
    "721": _2116,
    "722": _2216,
    "723": _2316,
    "724": _2415,
    "725": _2514,
    "726": _2614,
    "727": _2714,
    "728": _2814,
    "729": _2914,
    "730": _3012,
    "731": _3116,
    "732": _3216,
    "2001": _001,
    "2002": _0022,
    "2003": _0032,
    "2004": _0042,
    "2005": _0052,
    "2006": _0062,
    "2007": _0072,
    "2008": _0082,
    "2009": _0092,
    "2010": _0102,
    "2011": _0117,
    "2012": _0122,
    "2013": _0132,
    "2014": _0142,
    "2015": _0152,
    "2016": _0162,
    "2017": _0172,
    "2018": _0182,
    "2019": _0192,
    "2020": _0202,
    "2021": _0217,
    "2022": _0222,
    "2023": _0232,
    "2024": _0242,
    "2025": _0252,
    "2026": _0262,
    "2027": _0272,
    "2028": _0282,
    "2029": _0292,
    "2030": _0302,
    "2031": _0317,
    "2032": _0322,
    "2033": _0332,
    "2034": _0342,
    "2035": _0352,
    "2036": _0362,
    "2037": _0372,
    "2038": _0382,
    "2039": _0392,
    "2040": _0402,
    "2041": _041,
    "2042": _0422,
    "2043": _0432,
    "2044": _0442,
    "2045": _0452,
    "2046": _0462,
    "2048": _0482,
    "2049": _0492,
    "2050": _050,
    "2051": _051,
    "2052": _0522,
    "2053": _0532,
    "2054": _0542,
    "2055": _0552,
    "2056": _0562,
    "2057": _0572,
    "2058": _0582,
    "2059": _0592,
    "2060": _060,
    "2061": _061,
    "2062": _0622,
    "2063": _0632,
    "2064": _0642,
    "2065": _0652,
    "2066": _0662,
    "2067": _0672,
    "2068": _0682,
    "2069": _0692,
    "2070": _070,
    "2071": _071,
    "2072": _0722,
    "2073": _0732,
    "2074": _0742,
    "2075": _0752,
    "2076": _0762,
    "2077": _0772,
    "2078": _0782,
    "2079": _0792,
    "2080": _080,
    "2081": _081,
    "2082": _0822,
    "2083": _0832,
    "2084": _0842,
    "2085": _0852,
    "2086": _0862,
    "2087": _0872,
    "2088": _0882,
    "2089": _0892,
    "2090": _090,
    "2091": _091,
    "2092": _0922,
    "2093": _0932,
    "2094": _0942,
    "2095": _0952,
    "2096": _0962,
    "2097": _0972,
    "2098": _0982,
    "2099": _0992,
    "2100": _1002,
    "2101": _1017,
    "2102": _1022,
    "2103": _1032,
    "2104": _1042,
    "2105": _1052,
    "2106": _1062,
    "2107": _1072,
    "2108": _1082,
    "2109": _1092,
    "2110": _1102,
    "2111": _1117,
    "2112": _1122,
    "2113": _1132,
    "2114": _1142,
    "2115": _1152,
    "2116": _1162,
    "2117": _1172,
    "2118": _1182,
    "2119": _1192,
    "2120": _1202,
    "2121": _1217,
    "2122": _1222,
    "2123": _1232,
    "2124": _1242,
    "2125": _1252,
    "2126": _1262,
    "2127": _1272,
    "2128": _1282,
    "2129": _1292,
    "2130": _1302,
    "2131": _1316,
    "2132": _1322,
    "2133": _1332,
    "2134": _1342,
    "2135": _1352,
    "2136": _1362,
    "2137": _1372,
    "2138": _1382,
    "2139": _1392,
    "2140": _1402,
    "2141": _1417,
    "2142": _1422,
    "2143": _1432,
    "2144": _1442,
    "2145": _1452,
    "2146": _1462,
    "2147": _1472,
    "2148": _1482,
    "2149": _1492,
    "2150": _1502,
    "2151": _1517,
    "2152": _1522,
    "2153": _1532,
    "2154": _1542,
    "2155": _1552,
    "2156": _1562,
    "2157": _1572,
    "2158": _1582,
    "2159": _1592,
    "2160": _1602,
    "2161": _1617,
    "2162": _1622,
    "2163": _1632,
    "2164": _1642,
    "2165": _1652,
    "2166": _1662,
    "2167": _1672,
    "2168": _1682,
    "2169": _1692,
    "2170": _1702,
    "2171": _1715,
    "2172": _1722,
    "2173": _1732,
    "2174": _1742,
    "2175": _1752,
    "2176": _1762,
    "2177": _1772,
    "2178": _1782,
    "2179": _1792,
    "2180": _180,
    "2181": _181,
    "2182": _1822,
    "2183": _1832,
    "2184": _1842,
    "2185": _1852,
    "2186": _1862,
    "2187": _1872,
    "2188": _1882,
    "2189": _1892,
    "3000": _000,
    "3001": _0014,
    "3002": _0023,
    "32769": _2769,
    "32770": _2770,
    "32771": _2771,
    "32772": _2772,
    "32773": _2773,
    "32774": _2774,
    "32775": _2775,
    "32776": _2776,
    "32777": _2777,
    "32778": _2778,
    "32779": _2779,
    "32780": _2780,
    "32781": _2781,
    "32782": _2782,
    "32783": _2783,
    "32784": _2784,
    "32785": _2785,
    "32786": _2786,
    "32787": _2787,
    "32788": _2788,
    "32789": _2789,
    "32790": _2790,
    "32791": _2791,
    "32792": _2792,
    "32793": _2793,
    "32794": _2794,
    "32795": _2795,
    "32796": _2796,
    "32797": _2797,
    "32798": _2798,
    "32799": _2799,
    "32800": _2800,
    "32801": _2801,
    "32802": _2802,
    "32803": _2803,
    "32804": _2804,
    "32805": _2805,
    "32806": _2806,
    "32807": _2807,
    "32808": _2808,
    "32809": _2809,
    "32810": _28102,
    "32811": _28112,
    "32812": _28122,
    "32813": _28132,
    "32814": _28142,
    "32816": _2816,
    "32817": _2817,
    "32818": _2818,
    "32819": _2819,
    "32820": _2820,
    "32821": _2821,
    "32822": _2822,
    "32823": _2823,
    "32824": _2824,
    "32825": _2825,
    "32826": _2826,
    "32827": _2827,
    "32828": _2828,
    "32829": _2829,
    "32830": _2830,
    "32831": _2831,
    "32832": _2832,
    "32833": _2833,
    "32834": _2834,
    "32835": _2835,
    "32836": _2836,
    "32837": _2837,
    "32838": _2838,
    "32839": _2839,
    "32840": _2840,
    "32841": _2841,
    "32842": _2842,
    "32843": _2843,
    "32844": _2844,
    "32845": _2845,
    "32846": _2846,
    "32847": _2847,
    "32848": _2848,
    "32849": _2849,
    "32850": _2850,
    "32851": _2851,
    "32852": _2852,
    "32853": _2853,
    "32854": _2854,
    "32855": _2855,
    "32856": _2856,
    "32857": _2857,
    "32858": _2858,
    "32859": _2859,
    "32860": _2860,
    "32861": _2861,
    "32862": _2862,
    "32863": _2863,
    "32864": _2864,
    "32865": _2865,
    "32866": _2866,
    "32867": _2867,
    "32868": _2868,
    "32869": _2869,
    "32870": _2870,
    "32871": _2871,
    "32872": _2872,
    "32873": _2873,
    "32874": _2874,
    "32875": _2875,
    "32876": _2876,
    "32877": _2877,
    "32878": _2878,
    "32879": _2879,
    "32880": _2880,
    "32881": _2881,
    "32882": _2882,
    "32883": _2883,
    "32884": _2884,
    "32885": _2885,
    "32886": _2886,
    "32887": _2887,
    "32888": _2888,
    "32889": _2889,
    "32890": _2890,
    "32891": _2891,
    "32892": _2892,
    "32893": _2893,
    "32894": _2894,
    "32895": _2895,
    "32896": _2896,
    "32897": _2897,
    "32898": _2898,
    "32899": _2899,
    "32900": _2900,
    "32901": _2901,
    "32902": _2902,
    "32903": _2903,
    "32904": _2904,
    "32905": _2905,
    "32906": _2906,
    "32907": _2907,
    "32908": _2908,
    "32909": _2909,
    "32910": _29102,
    "32911": _29112,
    "32912": _29122,
    "32913": _29132,
    "32914": _29142,
    "32915": _2915,
    "32916": _2916,
    "32917": _2917,
    "32918": _2918,
    "32919": _2919,
    "32920": _2920,
    "32921": _2921,
    "32922": _2922,
    "32923": _2923,
    "32924": _2924,
    "32925": _2925,
    "32926": _2926,
    "32927": _2927,
    "32928": _2928,
    "32929": _2929,
    "32930": _2930,
    "32931": _2931,
    "32932": _2932,
    "32933": _2933,
    "32934": _2934,
    "32935": _2935,
    "32936": _2936,
    "32937": _2937,
    "32938": _2938,
    "32939": _2939,
    "32940": _2940,
    "32941": _2941,
    "32942": _2942,
    "32943": _2943,
    "32944": _2944,
    "32945": _2945,
    "32946": _2946,
    "32947": _2947,
    "32948": _2948,
    "32949": _2949,
    "32950": _2950,
    "32951": _2951,
    "32952": _2952,
    "32953": _2953,
    "32954": _2954,
    "32955": _2955,
    "32956": _2956,
    "32957": _2957
  };

  // src/itemPoolNameMap.ts
  var ITEM_POOL_NAME_MAP = new ReadonlyMap([
    ["treasure", "Treasure Room"],
    ["shop", "Shop"],
    ["boss", "Boss Room"],
    ["devil", "Devil Room"],
    ["angel", "Angel Room"],
    ["secret", "Secret Room"],
    ["library", "Library"],
    ["shellGame", "Shell Game"],
    ["goldenChest", "Golden Chest"],
    ["redChest", "Red Chest"],
    ["beggar", "Beggar"],
    ["demonBeggar", "Demon Beggar"],
    ["curse", "Curse Room"],
    ["keyMaster", "Key Master"],
    ["batteryBum", "Battery Bum"],
    ["momsChest", "Mom's Chest (In Home)"],
    ["greedTreasure", "Treasure Room (Greed Mode)"],
    ["greedBoss", "Boss Room (Greed Mode)"],
    ["greedShop", "Shop (Greed Mode)"],
    ["greedCurse", "Curse Room (Greed Mode)"],
    ["greedDevil", "Devil Room (Greed Mode)"],
    ["greedAngel", "Angel Room (Greed Mode)"],
    ["greedSecret", "Secret Room (Greed Mode)"],
    ["craneGame", "Crane Game"],
    ["ultraSecret", "Ultra Secret Room"],
    ["bombBum", "Bomb Bum"],
    ["planetarium", "Planetarium"],
    ["oldChest", "Old Chest"],
    ["babyShop", "Shop (with Adoption Papers)"],
    ["woodenChest", "Wooden Chest"],
    ["rottenBeggar", "Rotten Beggar"]
  ]);

  // src/utils.ts
  var DISPLAY_VISIBLE = "block";
  var DISPLAY_HIDDEN = "none";
  function getElement(id) {
    const element = document.querySelector(`#${id}`);
    if (element === null) {
      throw new Error(`Failed to find the element with ID: ${id}`);
    }
    if (!(element instanceof HTMLElement)) {
      throw new TypeError(`The "#${id}" element is not an HTMLElement.`);
    }
    return element;
  }
  function hide(element) {
    element.style.display = DISPLAY_HIDDEN;
  }
  function show(element) {
    element.style.display = DISPLAY_VISIBLE;
  }
  function toggle(element) {
    if (element.style.display === DISPLAY_HIDDEN) {
      show(element);
    } else {
      hide(element);
    }
  }

  // src/selectSaveFileSubroutines.ts
  var CHOOSE_SAVE_FILE_BUTTON_ID = "choose-save-file";
  var CHOOSE_SAVE_FILE_ERROR_ID = "choose-save-file-error";
  var CHOOSE_SAVE_FILE_ERROR_TEXT_ID = "choose-save-file-error-text";
  var CHOOSE_SAVE_FILE_COLUMN_ID = "choose-save-file-column";
  function getSelectSaveFileButton() {
    return getElement(CHOOSE_SAVE_FILE_BUTTON_ID);
  }
  function selectSaveFileError(error) {
    const errorElement = getElement(CHOOSE_SAVE_FILE_ERROR_ID);
    show(errorElement);
    const errorTextElement = getElement(CHOOSE_SAVE_FILE_ERROR_TEXT_ID);
    errorTextElement.innerHTML = `${error}`;
  }
  function hideSelectSaveFileArea() {
    const saveFileArea = getElement(CHOOSE_SAVE_FILE_COLUMN_ID);
    hide(saveFileArea);
  }

  // src/fillPage.ts
  var SAVE_FILE_STATS_ID = "save-file-stats";
  var WIKI_PREFIX = "https://bindingofisaacrebirth.fandom.com/wiki/";
  var HIDE_TEXT = "Hide";
  var SHOW_TEXT = "Show";
  function fillPage(isaacSaveFile) {
    fillAchievements(isaacSaveFile);
    fillCollectibles(isaacSaveFile);
    fillEasterEggs(isaacSaveFile);
    hideSelectSaveFileArea();
    const saveFileStats = getElement(SAVE_FILE_STATS_ID);
    show(saveFileStats);
  }
  function fillAchievements(isaacSaveFile) {
    const chunk = isaacSaveFile.chunks[1 /* ACHIEVEMENTS */ - 1];
    if (chunk === void 0) {
      throw new Error("Failed to get the achievement chunk.");
    }
    const achievementChunk = chunk.body;
    const ourAchievements = achievementChunk.achievements;
    const numAchievements = achievementChunk.count - 1;
    fillTable(
      "achievements",
      ourAchievements,
      numAchievements,
      fillAchievementsAddRow
    );
  }
  function fillAchievementsAddRow(i, tBody) {
    const rowData = [];
    const id = i.toString();
    rowData.push(id);
    const newAchievementKey = "NEW_ACHIEVEMENT";
    let key = id;
    if (achievements_exports[key] === void 0) {
      key = newAchievementKey;
    }
    const description = achievements_exports[key];
    const { name, link, inGameDescription, unlockDescription } = description;
    const linkedName = link === "" ? name : `<a href=${WIKI_PREFIX}${link}>${name}</a>`;
    rowData.push(linkedName);
    const image = key == newAchievementKey ? "" : `<img src="img/achievements/${id}.png" />`;
    rowData.push(image, inGameDescription, unlockDescription);
    addRow(tBody, rowData);
  }
  function fillCollectibles(isaacSaveFile) {
    const chunk = isaacSaveFile.chunks[4 /* COLLECTIBLES */ - 1];
    if (chunk === void 0) {
      throw new Error("Failed to get the collectibles chunk.");
    }
    const collectiblesChunk = chunk.body;
    const ourCollectibles = collectiblesChunk.seenById;
    const numCollectibles = getNumCollectiblesFromJSON();
    fillTable(
      "collectibles",
      ourCollectibles,
      numCollectibles,
      fillCollectiblesAddRow
    );
  }
  function getNumCollectiblesFromJSON() {
    let numCollectibles = 0;
    for (const key of Object.keys(items_exports)) {
      const collectibleType = parseIntSafe(key);
      if (collectibleType === void 0) {
        continue;
      }
      if (collectibleType > 0 && collectibleType < 1e3) {
        numCollectibles++;
      }
    }
    return numCollectibles;
  }
  function fillCollectiblesAddRow(i, tBody) {
    const collectibleDescription = getCollectibleDescription(i);
    if (collectibleDescription === void 0) {
      return;
    }
    const { name } = collectibleDescription;
    if (typeof name !== "string") {
      throw new TypeError(
        `Collectible ${i} did not have a name in the JSON description.`
      );
    }
    const rowData = [];
    const id = i.toString();
    rowData.push(id, name);
    const filename = id.padStart(3, "0");
    const image = `<img src="img/collectibles/collectibles_${filename}.png" />`;
    rowData.push(image);
    const pools = getPoolsForCollectible(i);
    const poolsText = getPoolsText(pools);
    rowData.push(poolsText);
    addRow(tBody, rowData);
  }
  function getCollectibleDescription(id) {
    const key = id;
    const itemDescription = items_exports[key];
    return itemDescription;
  }
  function getPoolsForCollectible(i) {
    const id = i.toString();
    const pools = [];
    for (const pool of ItemPools.Pool) {
      const poolNameEntry = ITEM_POOL_NAME_MAP.get(pool._Name);
      const poolName = poolNameEntry ?? "Unknown";
      for (const item of pool.Item) {
        if (item._Id === id) {
          pools.push(poolName);
          break;
        }
      }
    }
    return pools;
  }
  function getPoolsText(pools) {
    if (pools.length === 0) {
      return "n/a (not present in any pools)";
    }
    return pools.join(", ");
  }
  function fillEasterEggs(isaacSaveFile) {
    const chunk = isaacSaveFile.chunks[10 /* SPECIAL_SEED_COUNTERS */ - 1];
    if (chunk === void 0) {
      throw new Error("Failed to get the easter egg chunk.");
    }
    const easterEggChunk = chunk.body;
    const ourEasterEggs = easterEggChunk.countById;
    const numEasterEggs = getNumEasterEggsFromJSON();
    fillTable("easter-eggs", ourEasterEggs, numEasterEggs, fillEasterEggsAddRow);
  }
  function getNumEasterEggsFromJSON() {
    let numEasterEggs = 0;
    for (const key of Object.keys(easterEggs_exports)) {
      const collectibleType = parseIntSafe(key);
      if (Number.isNaN(collectibleType)) {
        continue;
      }
      numEasterEggs++;
    }
    return numEasterEggs;
  }
  function fillEasterEggsAddRow(i, tBody) {
    const easterEggDescription = getEasterEggDescription(i);
    if (easterEggDescription === void 0) {
      return;
    }
    const { seed, inGameDescription, effectsDescription } = easterEggDescription;
    const rowData = [];
    const id = i.toString();
    rowData.push(id, seed, inGameDescription, effectsDescription);
    addRow(tBody, rowData);
  }
  function getEasterEggDescription(id) {
    const key = id;
    const easterEggDescription = easterEggs_exports[key];
    return easterEggDescription;
  }
  function fillTable(prefix, things, numTotal, addRowFunc) {
    const tableElement = getElement(`${prefix}-table`);
    const tBodyElement = getElement(`${prefix}-table-tbody`);
    const completedElement = getElement(`${prefix}-completed`);
    const numGottenElement = getElement(`${prefix}-gotten`);
    const numTotalElement = getElement(`${prefix}-total`);
    const toggleElement = getElement(`${prefix}-toggle`);
    const sectionElement = getElement(`${prefix}-section`);
    let numGotten = 0;
    for (let i = 1; i < things.length; i++) {
      const gotten = things[i] !== 0;
      if (gotten) {
        if (prefix === "collectibles" && !isValidCollectibleID(i) || prefix === "easter-eggs" && !isValidEasterEgg(i)) {
          continue;
        }
        numGotten++;
      } else {
        addRowFunc(i, tBodyElement);
      }
    }
    numGottenElement.innerHTML = numGotten.toString();
    numTotalElement.innerHTML = numTotal.toString();
    if (numGotten === numTotal) {
      hide(tableElement);
    } else {
      hide(completedElement);
    }
    toggleElement.addEventListener("click", () => {
      toggle(sectionElement);
      swapLinkText(toggleElement);
    });
  }
  function addRow(tBody, rowData) {
    const row = tBody.insertRow();
    for (const data of rowData) {
      row.insertCell().innerHTML = data;
    }
  }
  function isValidCollectibleID(id) {
    return getCollectibleDescription(id) !== void 0;
  }
  function isValidEasterEgg(id) {
    return getEasterEggDescription(id) !== void 0;
  }
  function swapLinkText(element) {
    const newLinkText = element.innerHTML === HIDE_TEXT ? SHOW_TEXT : HIDE_TEXT;
    element.innerHTML = newLinkText;
  }

  // src/readFile.ts
  var HEADER_LENGTH = 16;
  var REBIRTH_RUN_HEADER = "ISAACNG_GSR0018";
  var AFTERBIRTH_RUN_HEADER = "ISAACNG_GSR0034";
  var AFTERBIRTH_PLUS_RUN_HEADER = "ISAACNG_GSR0065";
  var REPENTANCE_RUN_HEADER = "ISAACNG_GSR0142";
  var RUN_HEADERS = new ReadonlySet([
    REBIRTH_RUN_HEADER,
    AFTERBIRTH_RUN_HEADER,
    AFTERBIRTH_PLUS_RUN_HEADER,
    REPENTANCE_RUN_HEADER
  ]);
  var REBIRTH_PERSISTENT_HEADER = "ISAACNGSAVE06R";
  var AFTERBIRTH_PERSISTENT_HEADER = "ISAACNGSAVE08R";
  var AFTERBIRTH_PLUS_AND_REPENTANCE_PERSISTENT_HEADER = "ISAACNGSAVE09R";
  var NUM_AFTERBIRTH_PLUS_ACHIEVEMENTS = 404;
  function readFile(file) {
    const fileReader = new FileReader();
    fileReader.addEventListener("load", inputReaderLoad);
    fileReader.readAsArrayBuffer(file);
  }
  function inputReaderLoad() {
    try {
      const isaacSaveFile = parseSaveFile(this);
      fillPage(isaacSaveFile);
    } catch (error) {
      selectSaveFileError(error);
    }
  }
  function parseSaveFile(fileReader) {
    const arrayBuffer = fileReader.result;
    if (arrayBuffer === null || typeof arrayBuffer === "string") {
      throw new Error("The file array buffer was an unknown type.");
    }
    verifyHeader(arrayBuffer);
    const kaitaiStream = new KaitaiStream(arrayBuffer);
    const isaacSaveFile = new IsaacSaveFile(kaitaiStream);
    verifyNotAfterbirthPlus(isaacSaveFile);
    return isaacSaveFile;
  }
  function verifyHeader(arrayBuffer) {
    const headerBytes = arrayBuffer.slice(0, HEADER_LENGTH);
    const header = arrayBufferToString(headerBytes);
    if (RUN_HEADERS.has(header)) {
      throw new Error(
        'That is a file that stores the temporary game state for a specific run.<br />You need to instead select the "persistent" file that contains the data for the entire save file.'
      );
    }
    let headerGameType;
    if (header === REBIRTH_PERSISTENT_HEADER) {
      headerGameType = "Rebirth";
    } else if (header === AFTERBIRTH_PERSISTENT_HEADER) {
      headerGameType = "Afterbirth";
    }
    if (headerGameType !== void 0) {
      errorWrongGameType(headerGameType);
    }
    if (header !== AFTERBIRTH_PLUS_AND_REPENTANCE_PERSISTENT_HEADER) {
      console.error("Unknown header:");
      console.error(header);
      throw new Error(
        "That is not a valid save file for <i>The Binding of Isaac: Repentance</i>."
      );
    }
  }
  function arrayBufferToString(arrayBuffer) {
    const textDecoder = new TextDecoder("utf8");
    const string = textDecoder.decode(arrayBuffer).trim();
    return removeNullCharacters(string).trim();
  }
  function removeNullCharacters(string) {
    return string.replaceAll("\0", "");
  }
  function verifyNotAfterbirthPlus(isaacSaveFile) {
    const chunk = isaacSaveFile.chunks[1 /* ACHIEVEMENTS */ - 1];
    if (chunk === void 0) {
      throw new Error("Failed to get the achievements chunk.");
    }
    if (chunk.len === NUM_AFTERBIRTH_PLUS_ACHIEVEMENTS) {
      errorWrongGameType("Afterbirth+");
    }
  }
  function errorWrongGameType(gameType) {
    throw new Error(
      `That is a save file for <i>The Binding of Isaac: ${gameType}</i>.<br />This site only supports save files for <i>The Binding of Isaac: Repentance</i>.`
    );
  }

  // src/selectSaveFile.ts
  function selectSaveFileButtonInit() {
    const chooseSaveFileButton = getSelectSaveFileButton();
    chooseSaveFileButton.addEventListener("change", chooseSaveFileButtonUsed);
  }
  function chooseSaveFileButtonUsed(event) {
    if (event.target === null) {
      return;
    }
    const inputElement = event.target;
    const { files } = inputElement;
    if (files === null) {
      return;
    }
    const file = files[0];
    if (file === void 0) {
      return;
    }
    readFile(file);
  }

  // src/main.ts
  window.addEventListener("load", () => {
    selectSaveFileButtonInit();
  });
})();
