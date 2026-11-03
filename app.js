const original=[
{k:'月寒',r:'つきさむ',c:'北海道・札幌市',d:'札幌市豊平区の地名で、地下鉄東豊線に「月寒中央駅」があります。アイヌ語の「チキサㇺ（崖の上の所）」などに由来するとされます。',w:['つきさむ','つきかん','げっかん']},
{k:'発寒',r:'はっさむ',c:'北海道・札幌市',d:'札幌市西区の地名で、JRと地下鉄に発寒駅・発寒南駅などがあります。「寒」の字から「はっかん」と読みたくなる代表格です。',w:['はっさむ','はつかん','ほっかむ']},
{k:'厚別',r:'あつべつ',c:'北海道・札幌市',d:'札幌市東部の区名・駅名です。アイヌ語の「アッペツ（闇の川）」などに由来するといわれ、「こうべつ」ではありません。',w:['あつべつ','こうべつ','あつわけ']},
{k:'美唄',r:'びばい',c:'北海道',d:'北海道空知地方の市です。かつて炭鉱都市として栄えました。「美しい唄」と書きますが、読みは「うつくしうた」ではありません。',w:['びばい','みばい','びうた']},
{k:'増毛',r:'ましけ',c:'北海道',d:'北海道留萌地方の町で、JR留萌本線の駅名でもあります。髪の悩みとは無関係に「ましけ」と読みます。',w:['ましけ','ぞうもう','ますけ']},
{k:'留萌',r:'るもい',c:'北海道',d:'北海道北部の市名です。アイヌ語の「ルルモッペ（潮の穏やかな海）」などに由来するとされます。「とめもえ」ではありません。',w:['るもい','りゅうもえ','とめもえ']},
{k:'雑色',r:'ぞうしき',c:'東京都',d:'大田区の地名で、京急本線の駅名でもあります。「ざっしょく」と読めそうで読めない、東京難読地名の名門です。',w:['ぞうしき','ざっしょく','ぞういろ']},
{k:'等々力',r:'とどろき',c:'東京都',d:'世田谷区の地名です。等々力渓谷や、かつての等々力陸上競技場で知られます。「とうとうりき」でも「とどろちから」でもありません。',w:['とどろき','とうとうりき','ひとしちから']},
{k:'洗足',r:'せんぞく',c:'東京都',d:'目黒区の地名で、東急目黒線の駅名です。伝承では日蓮聖人が池で足を洗ったことに由来するといわれます。',w:['せんぞく','せんそく','あらいあし']},
{k:'太子堂',r:'たいしどう',c:'東京都',d:'世田谷区の地名で、東急世田谷線の駅名でもあります。聖徳太子を祀る堂に由来します。「たいしどう」と濁るのがポイントです。',w:['たいしどう','たいしど','たいこどう']},
{k:'小豆沢',r:'あずさわ',c:'東京都',d:'板橋区の地名で、都営三田線「志村坂上駅」の周辺にも広がります。「あずきざわ」ではなく「あずさわ」です。',w:['あずさわ','しょうずさわ','あずきざわ']},
{k:'海鹿島',r:'あしかじま',c:'千葉県',d:'銚子市の地名で、銚子電気鉄道の駅名です。「かいろくとう」などと読むには情報が多すぎる、三文字の強敵です。',w:['あしかじま','かいろくとう','うみしかじま']},
{k:'鵯越',r:'ひよどりごえ',c:'兵庫県',d:'神戸市兵庫区の地名で、神戸電鉄の駅名です。「鵯」はヒヨドリという鳥。源平合戦の「鵯越の逆落とし」でも知られます。',w:['ひよどりごえ','ひよこす','ぶいえつ']},
{k:'売布',r:'めふ',c:'兵庫県',d:'宝塚市の地名で、阪急宝塚本線の駅名です。「布を売る」と書いて「めふ」。駅名標を見るまで勝てないタイプです。',w:['めふ','ばいふ','うりぬの']},
{k:'武庫之荘',r:'むこのそう',c:'兵庫県',d:'尼崎市の地名で、阪急神戸本線の駅名です。「之」を読まず「むこのそう」。「ぶこのそう」と読むと惜しいです。',w:['むこのそう','ぶこのしょう','たけくらのそう']},
{k:'岡場',r:'おかば',c:'兵庫県',d:'神戸市北区の地名で、神戸電鉄の駅名です。「おかば」と短く読みます。「おかじょう」「おかば」で揺れる二文字です。',w:['おかば','おかじょう','おかま']},
{k:'鈍川',r:'にぶかわ',c:'愛媛県',d:'今治市の地名で、鈍川温泉として知られます。「どんかわ」ではなく「にぶかわ」。鈍さと川が静かに濁ります。',w:['にぶかわ','どんかわ','にぶがわ']},
{k:'小月',r:'おづき',c:'山口県',d:'下関市の地名で、JR山陽本線の駅名です。「こづき」ではなく「おづき」。小さいのに「お」から始まるのが難所です。',w:['おづき','こづき','しょうげつ']},
{k:'射水',r:'いみず',c:'富山県',d:'富山県中部の市名で、新湊や内川の水辺の景観で知られます。「いみず」。読めても書けない旧国名「越中・越後」と一緒に覚えたい名前です。',w:['いみず','しゃすい','ながれみず']},
{k:'入間',r:'いるま',c:'埼玉県',d:'埼玉県南西部の市名で、狭山茶やジョンソンタウンなどで知られます。「にゅうま」ではなく「いるま」です。',w:['いるま','にゅうま','いりま']}
];
let questions=[],i=0,score=0,streak=0,best=0;const $=id=>document.getElementById(id);
function show(id){document.querySelectorAll('main section').forEach(s=>s.classList.remove('active'));$(id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
function begin(shuffle=false){questions=shuffle?[...original].sort(()=>Math.random()-.5):original;i=0;score=streak=best=0;$('streak').textContent=0;$('best').textContent=0;show('quiz');render();}
function render(){const q=questions[i];$('qnum').textContent=`第 ${i+1} 問 / 20`;$('category').textContent=q.c;$('progress').style.width=`${(i+1)/20*100}%`;$('kanji').textContent=q.k;$('explanation').classList.add('hidden');$('answers').innerHTML='';[...new Set(q.w)].sort(()=>Math.random()-.5).forEach(a=>{const b=document.createElement('button');b.className='answer';b.textContent=a;b.onclick=()=>answer(a,b);$('answers').appendChild(b)});}
function answer(a,b){const q=questions[i],ok=a===q.r;document.querySelectorAll('.answer').forEach(x=>{x.disabled=true;if(x.textContent===q.r)x.classList.add('correct');});if(!ok)b.classList.add('wrong');if(ok){score++;streak++;best=Math.max(best,streak);$('judge').textContent='正解！ あなたは日本人より読める';}else{streak=0;$('judge').textContent='残念。でも、安心してください';}$('streak').textContent=streak;$('best').textContent=best;$('reading').textContent=`${q.k} ― ${q.r}`;$('description').textContent=q.d;$('next').textContent=i===19?'最終戦績を見る':'次の漢字に敗北する';$('explanation').classList.remove('hidden');$('explanation').scrollIntoView({behavior:'smooth',block:'nearest'});}
$('next').onclick=()=>{i++;i<20?render():finish()};function finish(){show('end');$('score').textContent=score;$('finalBest').textContent=best;let r,t;if(score>=18){r='歩く国土地理協会';t='もう留学生ではなく、日本人に読みを聞かれる側です。駅で困っている人を見つけたら、そっと教えてあげてください。';}else if(score>=12){r='たぶん、日本で生まれた';t='日本人の平均を軽く超えました。ただし、この平均はこのサイトが今決めました。';}else if(score>=6){r='漢字の被害者';t='読める問題と、初見殺しをしっかり見分けられました。それだけで十分に賢いのです。';}else{r='ようこそ、日本人の側へ';t='日本人も読めない漢字に敗北したあなたは、今日から日本人です。在留資格は変わりません。';}$('rank').textContent=r;$('endtext').textContent=t;}
$('start').onclick=()=>begin();$('again').onclick=()=>begin();$('shuffle').onclick=()=>begin(true);
