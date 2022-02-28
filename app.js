//配列の中にオブジェクトを入れて更に配列を作る
const quiz = [
    {
    question: '紅茶の銘柄でダージリンといえばどこの国のもの？',
    answres: [
        'スリランカ', //[0]
        '中国', //[1]
        'インドネシア', //[2]
        'インド' //[3]
    ],
    correct: 'インド'
}, {
    question: '日本の都道府県で温泉地の数が最も多いのは？',
    answres: [
        '兵庫県', //[0]
        '大分県', //[1]
        '北海道', //[2]
        '青森県' //[3]
    ],
    correct: '北海道'
}, {
    question: '童話 『ジャックと豆の木』 でジャックが豆との交換で手放した動物は？ ',
    answres: [
        'ブタ', //[0]
        'ウマ', //[1]
        'ウシ', //[2]
        'オオカミ' //[3]
    ],
    correct: 'ウシ'
}, {
    question: '次のうち、俳句の季語として認定されていないものはどれ？ ',
    answres: [
        'サザン', //[0]
        'チューブ', //[1]
        'ユーミン', //[2]
        '山下達郎' //[3]
    ],
    correct: 'チューブ'
}, {
    question: '母の日に贈る花で有名な「カーネーション」。さて、黄色のカーネーションの花言葉は次のうちどれ？ ',
    answres: [
        '嫉妬', //[0]
        '感謝', //[1]
        '家族愛', //[2]
        '軽蔑' //[3]
    ],
    correct: '軽蔑'
}, {
    question: '日常的に「マジ？」って言葉がよく使われますが、その「マジ」という言葉は、一体いつからあったでしょう？ ',
    answres: [
        '江戸時代', //[0]
        '明治時代', //[1]
        '昭和', //[2]
        '平成' //[3]
    ],
    correct: '江戸時代'
}, {
    question: '次のうち、実際に北海道に存在する川はどれ？ ',
    answres: [
        'イトオシイ川　', //[0]
        'クルオシイ川　', //[1]
        'ヤリキレナイ川　', //[2]
        'チョウシデナイ川' //[3]
    ],
    correct: 'ヤリキレナイ川'
}, {
    question: '天空の城ラピュタの敵役として登場するムスカ大佐。さて、彼の年齢はいくつでしょう？ ',
    answres: [
        '28歳', //[0]
        '32歳', //[1]
        '58歳', //[2]
        '62歳' //[3]
    ],
    correct: 'A.28歳。'
}, {
    question: 'では、サザエさんの、マスオさんの会社仲間のアナゴさんの年齢は？',
    answres: [
        '28歳', //[0]
        '32歳', //[1]
        '58歳', //[2]
        '62歳' //[3]
    ],
    correct: 'A.28歳'
},
];
const quizLenght = quiz.length;
let quizIndex =0;
let score = 0;
let content = 0;

const correct = 'ニンテンドーDS';
//document.getElementsByTagName('呼び出したいタグ名')
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

////クイズの問題文、選択肢を定義

const setupQuiz = () => {
    //document.getElementById('呼び出したいタグのid名')で対象タグを呼び出す
    //text.contentで対象のHTMLタグが持っているテキスト情報を取得する
    // = 定数名;で上で定数を内容を呼び出す
    //[]で順番を指定
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        //処理を書く
        $button[buttonIndex].textContent = quiz[quizIndex].answres[buttonIndex];
        buttonIndex++;
    }
};

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        swal ( "正解！！" ,  "次の問題も頑張りましょう😁" ,  "success" );
        score++;
    } else {
        swal ( "残念！！" ,  "次の問題も頑張りましょう😭" ,  "error" );
    }

    quizIndex++;
    if(quizIndex < quizLenght){
      //問題数がまだあれば以下を実行
      setupQuiz();
    } else {
　　　//問題数がもうなければ以下を実行
　　　swal ( "お疲れ様でした！！", "あなたの正解数は..." + score + "/" + quizLenght + "です" );
    }
};

////ボタンをクリックした際の正誤判定

//addEventListenerでcrickイベントを指定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    //処理を書く
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}


//リファクタリング...コードをまとめる
//リプレイス...コードを移す