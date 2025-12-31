export type OmikujiResult = {
    fortune: string;
    summary: string;
    details: {
        wish: string;
        love: string;
        study: string;
        business: string;
        health: string;
        travel: string;
        lost: string;
    };
    rate: number;
};

export const OMIKUJI_LIST: OmikujiResult[] = [
    {
        fortune: "大吉",
        summary: "春風のごとく運気開け、万事順調に進むでしょう。",
        details: {
            wish: "心に描いた願い、程なく叶うでしょう",
            love: "良縁に恵まれ、誠意が通じます",
            study: "努力が報われ、大きな成果あり",
            business: "新しい試みが成功を招く",
            health: "心身ともに健やか",
            travel: "吉、良い思い出となる",
            lost: "身近な場所にあり",
        },
        rate: 10,
    },
    {
        fortune: "中吉",
        summary: "穏やかな運気。焦らず進めば道は開けます。",
        details: {
            wish: "少し時間はかかるが叶うでしょう",
            love: "相手を思いやることで良縁に",
            study: "継続が力となる",
            business: "堅実に進めば利益あり",
            health: "概ね良好、油断は禁物",
            travel: "無理をしなければ吉",
            lost: "探せば見つかる",
        },
        rate: 15,
    },
    {
        fortune: "小吉",
        summary: "小さな幸せに気づくことで運が巡ります。",
        details: {
            wish: "欲張らなければ叶う",
            love: "慎重な行動が吉",
            study: "基礎を大切に",
            business: "現状維持が無難",
            health: "疲れを溜めぬこと",
            travel: "近場なら吉",
            lost: "時間が経ってから出る",
        },
        rate: 20,
    },
    {
        fortune: "吉",
        summary: "努力次第で運気は上向く兆し。",
        details: {
            wish: "努力が必要",
            love: "信頼を築くこと",
            study: "集中力が鍵",
            business: "人との縁を大切に",
            health: "生活習慣を整えよ",
            travel: "計画的に行えば吉",
            lost: "人に尋ねると良い",
        },
        rate: 25,
    },
    {
        fortune: "末吉",
        summary: "今は控えめに。後に運が巡ってくるでしょう。",
        details: {
            wish: "今は時期尚早",
            love: "焦らず待つべし",
            study: "復習を怠らぬこと",
            business: "無理な拡大は避けよ",
            health: "体調管理を万全に",
            travel: "延期が無難",
            lost: "しばらく出ない",
        },
        rate: 20,
    },
    {
        fortune: "凶",
        summary: "試練の時。慎み深く行動すれば災いは避けられます。",
        details: {
            wish: "叶い難し、時を待て",
            love: "誤解が生じやすい",
            study: "怠けると結果に出る",
            business: "大きな決断は控えよ",
            health: "無理は大敵",
            travel: "見合わせた方が良い",
            lost: "出にくい",
        },
        rate: 10,
    },
];
