
/**
 * 点位数据库
 * type: 'place' (蓝色), 'note' (红色), 'explanation' (黄色)
 */
const myPoints = [
    { 
        coord: [1316, 1715], 
        type: 'explanation', 
        title: "兰州总督辖区地图草稿", 
        desc: "兰州总督辖区地图草稿：涵盖了广阔陕西省的一半，约为中国的二十分之一。此地往昔不识上帝，而今由传道部最贫穷、最无用的传教士，通过至圣福音之光将其照亮。以此献给：尊敬的Giuseppe Cerù神父，他是传道部全体传教士的总代理人及宗座监牧。", 
        latin: "A bozzo della mappa del viceregnato di Lancou, la metà della uast ma. Prouincia di Xen-sy, una uentesima parte di Cina, stata per l'adietro priua della cognizione di Dio, et hoggidì illuminata col lume del S[antissi]mo Vangelo per mezzo del più pouero, et più inutile missionario di Propaganda: Dedicato al Molto Reverendo Padre Giuseppe Cerù missionario e Procuratore Apostolico Generale di tutti li missionarij della Sacra Congregazione di Propaganda Fede." 
    },
    { 
        coord: [1002, 1507], 
        type: 'place', 
        title: "青海湖", 
        desc: "青海湖。盛产鱼类，宽300华里，长500华里。湖水是咸的，共有七条河流汇入其中。", 
        latin: "Kokonor mare, abondante di pesce. Largo 300 stady sinici e longo 500. L'aqua è salsa in esso mettono le sue aque sette fiumi." 
    },
    { 
        coord: [252, 1434], 
        type: 'explanation', 
        title: "比例尺", 
        desc: " 六整天的行程，六百华里的比例尺。", 
        latin: "Sei grandi giornate di camino cioè Scala di seicento Ly stadj Cinesi.陕西省分为两个巡抚辖区，一为西安府，另一为兰州府。其领土内有一级城市（府）16个，二级城市（州）21个，三级城市（县）96个。小型驻军点（堡/寨）无数，大型驻军点23个。北面与被称为喀尔喀的鞑靼人及沙漠荒原接壤；西面与和硕特（Hoshut）鞑靼人以及古称吐蕃（Thibet）的西番接壤。La Provincia di Xensy è diuisa in due Viceregnati di Siganfu l'uno, e Lancheu l'altro. le sue città di prim'ordine sono 16, del secondo 21, del terzo 96. li Presidij piccoli infiniti, e li grandi 23. da Settentrione confina con li Tartari chiamati Halkat e con il deserto arenoso. da occidente con li Tartari Hoshut, e con il sy-fan antico Thibet." 
    },
// --- TYPE: place (城镇、关口、行政地点) ---
    { 
        coord: [539, 1801], 
        type: 'place', 
        title: "边境关口", 
        desc: "通往哈密王国的关口，从此地出发约需15天行程", 
        latin: "Porta che va al Regno di Hamil da cui dista 15 giornate." 
    },
    { 
        coord: [523, 1692], 
        type: 'place', 
        title: "地点1", 
        desc: "嘉峪关", 
        latin: "Kiaiý Kuān" 
    },
    { 
        coord: [540, 1604], 
        type: 'place', 
        title: "地点2", 
        desc: "肃州府（今甘肃酒泉）", 
        latin: "Siuceu fú ； 拥有八千士兵的驻军点，兰州巡抚辖区统领全军的提督（Ty-tu）驻扎于此。此地风景优美，盛产大米和药材。在南边的近山中长满了大黄（Rhabarbaro），这种药材生长在潮湿阴凉之地。该教区的会长是滕腓力（Ten filipe），此处急需教堂和常驻传教士。Siuceu fú, Presidio di 8/m Soldati. Vi stà il Ty-tu Generalissimo di tutta la soldatesca del viceregnato di Lancheu; bel paese abondante di riso e di medicinali. N'ui monti australi uicini sono pieni di Rhabarbaro（大黄）che nasce in paesi humidi et umbrosi. Questa x[p]nità tiene p[er] hoéiciang Ten filipe; ui fà bisogno chiesa e miss.re." 
    },
    { 
        coord: [545, 1269], 
        type: 'place', 
        title: "地点3", 
        desc: "甘州卫（今张掖）", 
        latin: "Kanceu uéi；甘州拥有四千士兵的驻军点。此地与肃州（原文误记为Kanceu，应指肃州）一样几乎从不降雨，但盛产甜瓜、玫瑰和各类水果，土地极其肥沃。由于山间流下的泉水汇成充沛的水源，灌溉了整个地区；且天气越热，水量反而越大，于耕作极为有利。该教区的会长是总兵的管家，而这位总兵对基督徒十分友好。在该城有一种名为“皇极教”的教派。据称，其信徒在庙宇中除了一架十字架外不供奉任何东西；他们不崇拜偶像，也不与穆斯林交好。若我能重返该地，定当详加考证。我记得曾在库里奥（Curio）的作品或威尼斯人马可·波罗的书里读到过：四百多年前在陕西（广义的陕西，含甘肃）曾有许多基督徒。一名来自当地并邀请我前往的基督徒正为此奔走，以便我能决定明年是否成行。Kanceu, Presidio di 4/m Soldati; paese che mai ui piove, come a Kanceu, ma molto fertile di meloni di rose, frutta. La molta aqua che scorga da monti pieni di fontane uiue ad aqua tutto il paese; e quanto fà più caldo, l'aqua s'augmenta ad uantaggio. Questa x[p]nità tiene p[er] hoéiciang il magiordomo del Zung-ping amico de x[p]ni. In detta città ui è una Religione detta Hoâng Kÿ Kiáo, e dicono che li suoi Adoratori non tenghino nel loro tempio che una Croce; non adorando Idoli ne facendo amicizia có Maumettani. Se potrò tornare colà farò diligenza: parendomi d'hauer letto in Curio, o nel libro di Marco Polo Veneto, esserui 400 e più anni fà in Xensì molti x[p]ni; un x[p]no uenuto da colà ad inuitarmi farà trà tanto diligenza p[er] poter risoluermi d'andare colà l'anno uenturo." 
    },
    { 
        coord: [543, 950], 
        type: 'place', 
        title: "地点4", 
        desc: "永昌", 
        latin: "iùng ciang；拥有一千士兵的驻军点。会长是赵培利（Ciao Perito），他是一位可靠的老人，在抚院（fuziany，即巡抚衙门）担任管家。Iung-ciang, Presidio di 1/m Soldati; tiene p[er] hoéiciang Ciao Perito, buon uechio magiordomo del fuziany Gouernatore." 
    },
    { 
        coord: [480, 947], 
        type: 'place', 
        title: "地点5", 
        desc: "永宁堡?", 
        latin: "iun nin pù；拥有一千士兵的驻军点。当地官长是一位娶有两妻的慕道友，他协力建造了圣克勉小教堂，以纪念派我来中国的教宗克勉十一世（Clemente XI）。在大墙（长城）外十英里处，我曾在帐篷里向鞑靼人传教。永宁堡的会长蔡保罗（Ciái Paolo）已在当地为两人施洗，我希望明年若有路费和生活费，能去探望他们。Iun-nin-pú（永宁堡）, Presidio di 1/m Soldati. Il Gouernatore catecumeno, marito di due femine, hà cooperato per la chiesola di S. Clemente, in memoria di Clemente XI Sommo Pontefice, che mi hà inuiato alla Cina. À diecimiglia fuora della gran muraglia ui hò predicato à Tartari sotto padiglioni, et il Hoeiciang di Iun-nin-pú Ciái Paolo ui hà battezzato due persone, sperando l'anno uenturo andarli uedere, se hauerò denari da far il uiaggio e da uiuere." 
    },
    { 
        coord: [550, 874], 
        type: 'place', 
        title: "地点6", 
        desc: "凉州卫（今武威）", 
        latin: "Leang ceu uéi；凉州拥有六千士兵的驻军点，距离兰州西北七天路程。城内建有男堂，女堂尚未完工。去年，这处兴旺的教区遭到了严酷的迫害，但随着那名为敌的官长暴卒，加上我的旧识总兵（Zung-ping）和达官（Tas-quan）说了些好话，如今教区已重归和平。Leany-ceu, Presidio di 6/m Soldati à 7 giornate distante da Lancheu uerso sy-pe; ui sono chiesa p[er] li huomini e per le femine imperfetta. L'anno passato questa fiorita x[p]nità patì persecuzione fiera, ma sendo poi morto improuisamente il Gouernatore nemico, et alcune buone parole dette dal Zung-ping e Tas-quan miei conoscenti, oggi di stà in pace. " 
    },
    { 
        coord: [485, 883], 
        type: 'place', 
        title: "地点7", 
        desc: "水峡堡?", 
        latin: "zuí Kia pù；这是一个拥有许多基督徒的围堡村落，建有祈祷室。有两位会长，分别是于维道（Yui Vitale）和于克勉（Yui Clemente），两人皆是文人。Zui-kiá-pú, uillaggio di molti x[p]ni muragliato; ui è oratorio e due Hoeiciang Yui Vitale et Yui Clemente, ambi letterati." 
    },
    { 
        coord: [466, 709], 
        type: 'place', 
        title: "地点8", 
        desc: "镇番", 
        latin: "Zin fang；拥有一千士兵的驻军点。当地有李彼得（Ly Petolo）和李甘德（Ly Gantele）两兄弟担任会长。如果那里能有一座祈祷室，鉴于当地民众虽贫穷但温顺，必能建立起优秀的教团。Zinfang, Presidio di 1/m Soldati; tiene per hoéiciang due fratelli Ly Petolo et Ly Gantele. Se ui fosse oratorio si farebbe ottima x[p]nità, sendo gente docile se ben pouera." 
    },
    { 
        coord: [614, 966], 
        type: 'place', 
        title: "地点9", 
        desc: "清溪堡?", 
        latin: "cuing Kie pù；清溪堡?（Ciung-Kiè-pú） 百人规模的小驻军点。在慕道友秦先生家中设有祈祷室，他娶有两妻。会长是虔诚的秦彼得（Cin Petolo），他的母亲则是当地三百多名妇女的女会长（niu hoéiciang）。Ciung-Kiè-pú, Presidio di cento Soldati. Tiene oratorio in casa del letterato Cin Catecumeno, marito di due femine; Hoeiciang è il buon Cin Petolo, e sua madre niu hoéiciang di 300 e più femine." 
    },
    { 
        coord: [740, 1000], 
        type: 'place', 
        title: "地点10", 
        desc: "吐蕃（多巴）？", 
        latin: "Topá；多巴受命于一位隶属于大汗的鞑靼王公管辖。此地是各国商贾云集之地，包括鞑靼人、吐蕃人、喇嘛教地点徒、印度人、波斯人、土耳其人、亚美尼亚人、莫斯科人；这里通用15种不同的语言。在这座“巴别塔”中，有一座由亚美尼亚人应我要求准备的祈祷室（或小教堂）。我目前正栖身于此，等待前文简要提及的王太后返回；我希望能在下个月见到她。Presidio sogetto ad un Regolo Tartaro tributario del Han; Emporio de stranieri Tartari, Thibetesi, Lamazeni, Indiani, Persiani, Turchi, Armeni, Moscouiti, in cui si parlano 15 linguaggi diuersi. In questa Babilonia ui è oratorio o Chiesola preparata dagl'Armeni á mia instanza, nella quale mi trouo al presente, aspettando il ritorno della Regina che di sopra ho accennato brevemente; come spero nel venturo mese." 
    },
    { 
        coord: [669, 800], 
        type: 'place', 
        title: "地点11", 
        desc: "镇羌驿", 
        latin: "Zing Kiàng y；驿站及千人规模的驻军点。该教区的会长是当地二把手官员之子路彼得（Lu Petolo），其妻阿加莎（Ajata）担任女会长。一旦我之前的拨款到位，我希望能尽快在此建一座祈祷室。Zing Kiang y, luogo di Posta e Presid. di 1/m. Questa x[p]nità tiene per Hoeiciang il figlio del 2.o Gouernatore Lu Petolo, e sua moglie Ajata niu hoéiciang; quanto prima se mi uerranno li denari de miei decorsi spero farui un oratorio." 
    },
    { 
        coord: [751, 720], 
        type: 'place', 
        title: "地点12", 
        desc: "庄浪卫", 
        latin: "Cioung Lan uoei；大型驻军点。当地教友已准备好资金助我购置教堂。若计划不成，我将继续在会长张腓力（Ciang filipe）家中举行圣事（Kung-fu，此处指“功夫”即礼仪）。该城位于兰州西北两天繁重路程处。Cioang lan, Presidio grosso. Li x[p]ni hanno già preparato denari p[er] aiutarmi a comprar chiesa; e se non potrò, seguitarò á fare il Kung-fu in casa del Hoeiciang Ciang filipe. Questa città stà á due giornate grosse distante da Lancheu uerso sy-pe." 
    },
    { 
        coord: [653, 461], 
        type: 'place', 
        title: "地点13", 
        desc: "临远卫(?)", 
        latin: "Cin iuen uoei；拥有三千士兵的驻军点。因当地已遭受三年饥荒，我至今未能前往。尽管如此，我寄希望于在兰州受洗的王法比安（Vang Fabiano），他识文断字，待他回到家乡后，将会在那里开创教务Lin-iuen uoei, presidio di 3/m Soldati. P[er] hauer colà già tre anni di carestia non ui sono ancora potuto andare; con tutto ciò spero che il Vang Fabiano, battezzato in Lancheu, persona che sà leggere e scriuere, darà principio a quella x[p]nità quando si porterà colà sua patria.。" 
    },
    { 
        coord: [879, 625], 
        type: 'place', 
        title: "地点14", 
        desc: "兰州", 
        latin: "Lanceu；兰州是一座二级城市（州），拥有三万名士兵的驻军。此处是布政使（Pucinsu）、按察使（Sanciasu）、粮道（Leangtao）等官员的驻地。作为该巡抚辖区的首府，我在那里建有两座教堂：一座是献给圣若瑟的，供男性使用；另一座是献给圣母的，供女性使用，目前尚未完工。Lancheu è Presidio di 30 m. Soldati e città di 2.o ordine, in essa fà la sua residenza il Vice Re Pucinsu Sanciacu Leangtao & e per essere la metropoli del viceregnato ui hò due chiese una di S. Giuseppe p[er] li huomini e l'altra della B. V. per le femine ancora imperfetta." 
    },
    { 
        coord: [522, 215], 
        type: 'place', 
        title: "地点15", 
        desc: "宁夏卫", 
        latin: "Gning hia uoei；宁夏是一个拥有五千士兵的驻军点，设有一名总兵（Zung-ping）。它是陕西最好的地方，盛产大米、鱼类、小麦、水果和蔬菜。许多倾向于我教法律的文人访问了我，他们许诺如果我到那里购置教堂，他们所有人都会转依基督教。这片宜人地区的会长是监生卫波拿文都（uoei Bonauentura）。Gninghia Presidio di 5/m tiene un Zung-ping, et è il miglior paese di Xensi, abbonda di riso di pesce, di grano di frutta uerdura & sono stato uisitato da molti letterati inclinati a n[ost]ra legge, quali m'hanno promesso d'interti tutti far x[p]ni, se uado colà a comprar chiesa: il Hoéiciang di quella amena Regione è il kien seng uoei Bonauentura. Finisce. Venzula." 
    },
    { 
        coord: [809, 310], 
        type: 'place', 
        title: "地点16", 
        desc: "庆阳府", 
        latin: "Kin iang fu；庆阳府是一座一级城市。虽然那里的基督徒还不算多，但如果能有教堂和传教士，在会长房巴拿巴（Fang Barnabé）的热诚协助下，有望建立一个兴旺的教区。Kingiangfu città di prim'ordine se ben in essa non ui sono molti x[p]ni contutto ciò se ui fosse chiesa e miss.re si potrebbe sperare una fiorita x[p]nità mercé anche la feruorosa assistenza del Kang-Kuan Fang Barnabé Hoéiciang." 
    },
    { 
        coord: [918, 170], 
        type: 'place', 
        title: "地点17", 
        desc: "固原卫", 
        latin: " Kuiuen uoei；固原卫是一个拥有五千士兵的驻军点。在这座城市有一位提督（Ty-tu），统领整个西安巡抚辖区的军队。该地的会长是监生（Kien-seng）何安博（Hô Ambrosio），他是西安人，是在南京由尼古拉·利奥尼萨阁下（Monsig.r Leonissa Nicolay）受洗的，当时我的助教也在场，该地及其他教友区的开辟均归功于他。如果那里能有教堂和传教士，必将取得丰硕成果。Ku iuen uoei Presidio di 5/m Soldati in q[ue]sta città un Ty-tu Generalissimo che gouerna tutta la soldatesca del Vice Regnato di Siganfu: il Hoéiciang di quella x[p]nità è il Kien-seng Hô Ambrosio natiuo di Siganfu, battezzato dal P. R.mo Leonissa Monig.r Nicolay in Nanking al uedere mio catechista a cui si deue l'apertura di quella, ed altre x[p]nità. se colà ui fosse chiesa e miss.re si farebbe gran frutto." 
    },
    { 
        coord: [1021, 634], 
        type: 'place', 
        title: "地点18", 
        desc: "临洮府", 
        latin: "Lin tao fu；临洮府 位于兰州以南两天路程的一级城市。我拜访了当地的知府（Ty-fu），但他因傲慢而违反了比他官阶更高的官员们通行的礼仪，甚至没有向我回赠名帖，这让许多本有意皈依的信徒心生凉意。尽管如此，我仍留下冯保罗（Fung Paolo）担任会长，他是个正直的人。目前可以在慕道友张先生家中举行弥撒，张先生娶有两妻，是一位已故总兵（zung-ping）之子，他承诺资助在此购置一座教堂，我希望这能尽快实现。Lin-tao-fu, città di prim'ordine a due giornate da Lancheu uerso l'Austro. Visitai il Ty-fu Gouernatore, quale p[er] superbia contro il costume degl'altri mandarini più grandi di lui, ne meno mi rese il papel di uisita; che rafreddò alquanto molti ben intenzionati a farsi x[p]ni. Con tutto ciò, ui lasciai p[er] hoéiciang il Fung Paolo, buona persona; e si può celebrare la messa in casa del Signor Zang catecumeno, marito di due moglie e figlio d'un zung-ping morto, che promette aiutara per comprar colà una Chiesa come spero quanto prima." 
    },
    { 
        coord: [1058, 489], 
        type: 'place', 
        title: "地点19", 
        desc: "巩昌府", 
        latin: "Kungciang fu；巩昌府 这是一座位于兰州东南三天路程的一级城市，非常美丽。此地土地肥沃，人才辈出，但当地的大文人们颇为傲慢。尽管如此，经过长时间的宣教，我已在此建立了教团。当地的会长（Hoeiciang）是邓马特（Teng Matteo），他是一位乡约（hiang-yo）之子。Kungciangfu, bellissima città di prim'ordine a 3 giornate distante da Lancheu uerso il tung-nan; paese fertile di terreno e d'ingegni, ma alquanto superbi per li loro letteroni. Con tutto ciò, doppo un lungo predicare, ui hò piantato x[p]nità che tiene per Hoeiciang Teng Matteo, figlio d'un hiang-yo." 
    },
    { 
        coord: [1265, 522], 
        type: 'place', 
        title: "地点20", 
        desc: "岷州卫 (今甘肃岷县)", 
        latin: "min ceu uoei；岷州尚未宣讲过神圣福音，它距离凤翔府（那是隶属于西安传教士管辖的教友区）仅有四天路程。我将把把神圣法律带到那里的任务留给卡斯特罗卡拉（Castrocara）神父或其他同伴。Minceu non si è ancora predicato il s.to Vangelo, e distando solo 4 giornate da Fungziangfu x[p]nità sogette al miss[iona]rio di Siganfu. lasciarò al P. Castrocara o ad altri Compagni il portarui la s.ta legge." 
    },
    { 
        coord: [1395, 240], 
        type: 'place', 
        title: "地点21", 
        desc: "凤翔府 (今陕西凤翔)", 
        latin: "fungziangfu" 
    },
    { 
        coord: [820, 961], 
        type: 'place', 
        title: "地点22", 
        desc: "西宁卫", 
        latin: "Sining uoei；六千人规模的驻军点，中国的贸易重镇（Emporio）。此地有两座教堂：一座是献给天使之后圣母的，供男性使用；另一座供女性使用，目前两堂均牵涉诉讼。会长是秀才（Sieu zai）龙巴托罗缪（Lung Bartolomeo）。Sining, Presidio di 6/m, Emporio di Cina. Ha due chiese: una della Madonna degl'Angioli p[er] li huomini, et altra per le femine, ambidue in lite. Hoeiciang il sieu zai Lung Bartolomeo." 
    },
    { 
        coord: [861, 809], 
        type: 'place', 
        title: "地点23", 
        desc: "享堂口", 
        latin: "Ciàng Keu；距兰州三天路程，距河州两天，距西宁三天。是一个两千人规模的驻军点，会长为多默（Thomè）。Ciang-Keu, à tre giornate da Lancheu, a due da Hoceu, et á 3 distante da Sining; Presidio di 2/m, mà Thomè Hoéiciang." 
    },
    { 
        coord: [942, 758], 
        type: 'place', 
        title: "地点24", 
        desc: "河州卫（今甘肃临夏）", 
        latin: "Hô ceu uoei；河州 拥有三千士兵的驻军点，二级城市（州），位于兰州西南两天路程处。当地会长是补马特（Pu Matteo），他曾邀请我前往那里为数百人施洗。Ho-ceu, Presidio di 3/m Soldati e città di 2.do ord.e a 2 giornate da Lancheu uerso il sy-nan; tiene per Hoeiciang Pu Matteo che m'inuita portarmi colà a battezzare centinaia." 
    },
    { 
        coord: [787, 1037], 
        type: 'place', 
        title: "地点25", 
        desc: "青海堡？", 
        latin: "Cinhai pu；千人规模的驻军点，靠近受降城（Sopá）和对外的大关口。此处有一座规模可观的教堂，会长由文职商人郭甘德（Kuo Gantele）担任，他负责管理当地汉人及附近的吐蕃教友。此地气候凉爽，但生活成本昂贵。Cin hai pú, Presidio di 1/m Soldati uicino á Topá et alla gran Porta de stranieri. Tiene chiesa assai grande, e per Hoeiciang tanto de Cinesi quanto de Thibetesi uicini, tiene Kuo Gantele letterato mercante; il paese è fresco, ma il uiuere caro." 
    },
    { 
        coord: [758, 1099], 
        type: 'place', 
        title: "地点26", 
        desc: "外国人进入的“多巴”之门", 
        latin: "Porta di Topá p[er] la quale entrano li stranieri" 
    },
    { 
        coord: [889, 522], 
        type: 'place', 
        title: "地点27", 
        desc: "甘泉县（?）", 
        latin: " ganting hien" 
    },
    { 
        coord: [989, 374], 
        type: 'place', 
        title: "地点28", 
        desc: "秦州", 
        latin: "zininceu；秦州是一座二级城市，那里有基督徒和许多渴望行善的文人。此地地理位置优越，物产丰富。一位与教友有亲戚关系的河官（Ho-Kuan）愿意资助购置教堂，但他希望能有一名常驻传教士。该教团的会长是王奥古斯丁（Vang Agostino），他是一位身为生员（Sieuzai）的慕道友之子。Ziningceu città di 2.o ordine ui sono x[p]ni e molti letterati desiderosi di far del bene: hà bel sito, et in paese abondante: il Ho-Kuan Parente di x[p]ni desiderarebbe aiutare a comprar chiesa ma uorrebbe un miss.re di Residenza: Hoéiciang di quella x[p]nità è Vang Agostino, figlio d'un Sieuzai Catecumeno." 
    },
    { 
        coord: [1002, 301], 
        type: 'place', 
        title: "地点29", 
        desc: "隆德县", 
        latin: "luntehien；隆德县是一座三级城市，位于六盘山（Lupanxan）脚下，山上猛虎出没。除了几名基督徒外，当地知县（Cy-hien）的母亲也是教友，知县本人在听我强力布道16天后也渴望受洗。因此，这位地方官希望能有一座教堂和一名常驻传教士。当地的会长（Hoéiciang）名叫张保罗（Zang Paolo）。Lun te hien città di 3.o ordine stà a piè de monti Lupanxan detti pieni di Tigri oltre alcuni x[p]ni ui è la madre del Cy-hien x[p]na et esso pure che desidera battezzarsi hauendogli predicato fortemente per 16 giorni che però esso Gouernatore uorrebbe una Chiesa e un Missionario. il Hoéiciang si chiama Zang Paolo." 
    },
    { 
        coord: [1082, 200], 
        type: 'place', 
        title: "地点30", 
        desc: "平凉府（今甘肃平凉）", 
        latin: "Ping leang fu；平凉府位于兰州以东七天路程处，距离西安府八天路程。尽管在这座城市进行过宣教，但直到目前为止只有三四名基督徒；因为这处新教团的领袖因债入狱，而我仅在路过时照管过三次，由于缺乏举行仪式所需的自有产业或合适场所，尚不能将其视作一处正式的传教点。Pingleangfu stà a sette giornate da Lancheu distante uerso oriente et otto giornate da Siganfu: in essa città se bene s'è predicato non ui è fin hora che tre o quattro X[p]ni[stia]ni poiche il capo di questa novella x[p]nità essendo stato messo prigioni p[er] debiti, ne hauendo io potuto coltiuarla che 3 volte di passaggio, non può computarsi p[er] missione non essendoui cosa propria o approposito p[er] celebrare." 
    },
    { 
        coord: [586, 807], 
        type: 'place', 
        title: "地点31", 
        desc: "镇边？", 
        latin: "Zin-pieny；位于凉州以东一天路程的驿站。那里设有祈祷室，会长是文人底约翰（Ty-johan），他是12个儿子的父亲，这些儿子均已成婚且在营当兵。Logo di posta à una giornata da Leany-ceu uerso oriente; ui stà oratorio. Il Hoéiciang Ty-johan letterato, padre di 12 figli maschi tutti maritati e soldati." 
    },


    // --- TYPE: explanation (共 26 个) ---
    { 
        coord: [765, 1618], 
        type: 'explanation', 
        title: "路标1", 
        desc: "经由哈密、吐鲁番通往莫斯科等地的道路", 
        latin: "via p[er] Hamil Turfan, Moscovia etc" 
    },
    { 
        coord: [1270, 1264], 
        type: 'explanation', 
        title: "路标2", 
        desc: "黄河", 
        latin: "Fiume giallo Hoâng hô" 
    },
    { 
        coord: [1259, 1414], 
        type: 'explanation', 
        title: "路标3", 
        desc: "通往西藏拉萨、尼泊尔、孟加拉、莫卧儿帝国等地的道路", 
        latin: "via f[er] Lassa del Thibet, neibal, Bengala, mogol &c.鞑靼人和蔼可亲、诚实守信，是谎言的死敌、公正的朋友。他们为人克制，大多只娶一个妻子。在他们的国家里，没有妓女、小偷，也没有伶人或赌徒，极少有人酗酒。他们称呼中国人为“Kitai”（契丹），意为“欺骗者”；古时给予中国人的“Kataio”（契丹/中国）之名便源于此。如果圣部（传教部）决定在鞑靼地区开展传教事业，我不辞劳苦；我唯独需要同伴和资金。至于同伴，他们可以经由孟加拉和拉萨，或者按照我去年从莫斯科给罗马写的信中所述，经由莫斯科公国来到西宁或青海（Kokonor）；他们需在12月从多巴（Topá）出发。Sono li Tartari affabili, ueraci, nemici della bugia et amici della giustizia: continenti non hauendo per lo più che una sol moglie, ne loro paesi non ui regnano meretrici ladri ne comedianti ne giocatori di carte, e pochi dati all'ubriachezza; chiamano li Cinesi Kitai, che significa Ingannatore; e da qui ne uiene il nome di Kataio dato a Cinesi anticamente.se la S. Cong[regatio]ne far missione in Tartaria non ricuso laborem: mi sà solamente bisogno di Compagni e di denari: quanto a primi possono uenire a Sining o al mare Kokonor per uia di Bengála e di Lassa, o pure per moscouia come hò già scritto a Roma presso delli Moscoviti l'anno passato: partiti da Sopá in X[bre]." 
    },
    { 
        coord: [1412, 1162], 
        type: 'explanation', 
        title: "路标4", 
        desc: "西藏的一部分，被划分为许多个小首领（部落）管辖", 
        latin: "Parte del Thibet diuiso in molti Regoli" 
    },
    { 
        coord: [200, 1143], 
        type: 'explanation', 
        title: "路标5", 
        desc: "多沙的鞑靼地区", 
        latin: "Tartaria arenosa. " 
    },
    { 
        coord: [183, 569], 
        type: 'explanation', 
        title: "路标6", 
        desc: "沙质沙漠的一部分，拥有充足的牧场，可供马匹、山羊、绵羊、母牛和骆驼使用，这些是鞑靼人的财富。", 
        latin: "Parte del deserto arenoso con suficiente pascolo p[er] li cavalli capre pecore vacche cameli richezze de Tartari." 
    },
    { 
        coord: [603, 130], 
        type: 'explanation', 
        title: "路标7", 
        desc: "黄河", 
        latin: " F. Giallo" 
    },
    { 
        coord: [666, 1726], 
        type: 'explanation', 
        title: "物产1", 
        desc: " 此处有产大黄的山脉", 
        latin: "monti di Rhabarbaro" 
    },
    { 
        coord: [659, 1448], 
        type: 'explanation', 
        title: "物产2", 
        desc: "大黄", 
        latin: "Rhabarbaro" 
    },
    { 
        coord: [678, 1149], 
        type: 'explanation', 
        title: "物产3", 
        desc: "长有大黄的山脉", 
        latin: "monti con Rhabarbaro" 
    },
    { 
        coord: [692, 638], 
        type: 'explanation', 
        title: "物产4", 
        desc: "银矿", 
        latin: "miniere d'argento" 
    },
    { 
        coord: [599, 611], 
        type: 'explanation', 
        title: "物产5", 
        desc: "产麝香的动物；金矿。", 
        latin: "animali che danno il muschio；miniere d'oro" 
    },
    { 
        coord: [750, 605], 
        type: 'explanation', 
        title: "物产6", 
        desc: "遍布“石炭”（煤炭）的山脉", 
        latin: "M. pieni di carbone di pietra" 
    },
    { 
        coord: [662, 245], 
        type: 'explanation', 
        title: "物产7", 
        desc: "产麝香的动物", 
        latin: " animali che danno il muschio" 
    },
    { 
        coord: [621, 1288], 
        type: 'explanation', 
        title: "物产8", 
        desc: "大黄之乡，每“索马”价格为 3 雷亚尔", 
        latin: "paese di Rhabarbaro a 3 reali una Somma" 
    },
    { 
        coord: [883, 1045], 
        type: 'explanation', 
        title: "路标8", 
        desc: "一千人的喇嘛庙", 
        latin: "Tempio di 1/m Lama" 
    },
    { 
        coord: [911, 816], 
        type: 'explanation', 
        title: "路标9", 
        desc: "中国鞑靼人", 
        latin: "Tartari Cinesi" 
    },
    { 
        coord: [1002, 141], 
        type: 'explanation', 
        title: "路标10", 
        desc: "六盘山及其老虎", 
        latin: " Lupan M. con Tigri" 
    },
    { 
        coord: [1315, 403], 
        type: 'explanation', 
        title: "路标11", 
        desc: "西安府巡抚辖区与兰州（甘肃）辖区的分界线", 
        latin: "La diuisione del vice-Regnato di siganfu da quello di lanche" 
    },
    { 
        coord: [1109, 81], 
        type: 'explanation', 
        title: "路标12", 
        desc: "秦州?（今甘肃庆阳）", 
        latin: "Kin ceu" 
    },
    { 
        coord: [1160, 99], 
        type: 'explanation', 
        title: "路标13", 
        desc: "泾河，流向西安府", 
        latin: "F. Kin hô che uà á Sigan fu" 
    },
    { 
        coord: [1406, 391], 
        type: 'explanation', 
        title: "路标14", 
        desc: "流经西安府的渭河", 
        latin: "F.uoei che passa á siganfu" 
    },
    { 
        coord: [753, 1948], 
        type: 'explanation', 
        title: "方位标注1", 
        desc: "西", 
        latin: "occidente" 
    },
    { 
        coord: [1453, 1030], 
        type: 'explanation', 
        title: "方位坐标2", 
        desc: "南", 
        latin: "Austro" 
    },
    { 
        coord: [30, 1026], 
        type: 'explanation', 
        title: "方位坐标3", 
        desc: "北", 
        latin: "Settentrione" 
    },
    { 
        coord: [733, 56], 
        type: 'explanation', 
        title: "方位坐标4", 
        desc: "东", 
        latin: "Oriente" 
    },

    // --- TYPE: note (共 14 个) ---
    { 
        coord: [1024, 1835], 
        type: 'note', 
        title: "蒙古包1", 
        desc: "该王公是现任汗的兄弟； 也是1714年去世的那位国王的养子", 
        latin: "Regolo fratello del Han. uivente; e figlio adotiuo del Re morto nel 1714；去年冬天，这位62岁（和硕特鞑靼人）的大汗去世了。在他原有的两位妻子中，唯有一位留下了一名年仅22岁的独子，现已继承汗位；大汗另将青海湖的西部分给了一名养子治理，正如地图所示。几天前，前述大汗火化后的遗骨被送往蒙古王陵安葬。该陵墓位于其疆域的边界，座落在庄浪与西宁之间险峻的山峦之中。nel passato Inuerno morì il Gran Han d'anni 62, e di due moglie che haueua ha hauuto un sol figlio d'età d'anni 22, a cui è succeduto nel gouerno, lasciando ad un altro figlio adottiuo la parte occidentale del mare come mostra la Carta: giorni fà furono portate e sepellite l'ossa abbruciate del sudetto Han nel sepulcro de Re Tartari che stà situato nelli confini del suo Regno, tra Cioang lang, e Sining in mezzo a monti scoscesi. " 
    },
    { 
        coord: [230, 1827], 
        type: 'note', 
        title: "蒙古包2", 
        desc: "这一王公是大汗的侄子（或孙辈），拥有30000户领民。", 
        latin: "Regolo Nipote del gran Han. di 30/m famiglie；鞑靼人的饮食以经常食肉为主，他们喝肉汤以代替酒；尽管如此，他们也用奶（特别是马奶）酿造烈酒。他们拥有丰富的马匹，因此在鞑靼地区，谁拥有的牲畜多，谁就最富有，这些牲畜包括马、骆驼、山羊、绵羊、牛和水牛。他们的服饰与中国人不同：靴子是由产自莫斯科的红色保加利亚皮革制成的；帽子是中式形状的毛毡帽；缝制衣服的丝绸来自中国。普通人身穿绵羊、山羊等动物的皮毛。Il uitto de Tartari è mangiar carne continuamente, et in ueçe di uino ne beuono il brodo. Fanno con tutto ciò aqua uita con latte, particolarmenti di caualli, de quali n'hanno in abbondanza; di modo che ne paesi de Tartari quello è più ricco, che tiene molti bestiami che sono caualli, cameli, capre, pecore, uache e bufali. Il loro uestire è diuerso dal cinese: li stiuali sono di Bolgari rossi, che uengono dalla Moscouia; il capello è di feltro alla forma cinese; e la seta per far il uestito gli uiene da Cina. La gente ordinaria ueste le pillicce di pecore, capre, ecc." 
    },
    { 
        coord: [77, 1013], 
        type: 'note', 
        title: "蒙古包3", 
        desc: "管辖两万户鞑靼家庭的王公", 
        latin: "Regolo di Venti mila famiglie Tartare.他们的迷信表现为崇拜被称为“梵天”（Bramá）的印度神灵——他们称之为“博尔汗”（Borhan），并相信会转世为畜生。以至于我结识的一位王公竟毫不羞愧地告诉我，他死后最大的福分就是能转世为一匹骏马，为中国皇帝效劳。但在我向他宣讲神圣福音并纠正其错误观点后，他对我说道：“既然如此，你们为什么不来鞑靼宣扬这真正的法律呢？难道鞑靼人不也像中国人一样，都是上帝创造的吗？”在众人的围观下，这些话语让我因怜悯而流下了泪水。他曾劝我将我们神圣教义的精髓译成鞑靼文，我正等待时机，将那份基于圣经福音准备好的手稿寄送给他。Le loro superstitioni sono adorare il Fossellario Indiano detto Bramá（梵天）, da essi chiamato Borhan（佛陀/皇极教所指）, credendo la trasmigrazione in bruti animali. Di modo che uno de Regoli miei conoscenti non s'è uergognato di dirmi che la sua maggior fortuna dopo morte sarebbe poter trasmigrare in un bel cauallo per seruiçio dell'Imp.re della Cina. Ma hauendolo poi disingannato con predicargli il S.to Vangelo, mi disse: E perchè dunque non uenite in Tartaria a predicare questa uera Legge? 'E che non sono forse li Tartari come li Cinesi tutti da Dio creati?' Queste ed altre parole mi trasero le lagrime per compassione alla presenza di molti circostanti. Et hauendomi esortato a mettere in Tartaro l'essenzialità della nostra s.ta legge, e di spero opportuna occasione per inuiargli il manoscritto preparato sopra il s.to Vangelo." 
    },
    { 
        coord: [173, 164], 
        type: 'note', 
        title: "蒙古包4", 
        desc: "这一鞑靼王公娶了中国皇帝的女儿为妻，他管辖着四万户", 
        latin: "Regolo Tartaro che há p[er] moglie una figlia dell' Imp[erato]re di Cina che governa 40/m famiglie." 
    },
    { 
        coord: [961, 1336], 
        type: 'note', 
        title: "蒙古包5", 
        desc: "鞑靼大汗的帐篷", 
        latin: "Padiglioni del gran Han de Tartari;和硕特鞑靼人的大汗居住在被称为青海（Kokonor）的咸海沿岸。他在中国皇帝的保护之下，统治着其他165位大大小小的王公，其中一部分是鞑靼人，另一部分是吐蕃人；其中包括位于喇嘛教国家的拉萨王，那是方济各嘉布遣会（PP. Capuccini）神父们的传教区，多巴（Topá）山口向西南方行进，约需40天路程。Il Gran Han de Tartari Hoshut habita alle spiaggie del mare salso detto Kokono[r]. Hà sotto la protezione dell'Imp.re di Cina; tiene sotto di se altri 165 Regoli grandi, e piccoli parte Tartari, e parte Thibetesi fra quali il Ré di Lassa nel paese de Lamazeni missione de PP. Capuccini che distà 40 giornate dalla porta di Sopá verso lebeccio. " 
    },
    { 
        coord: [663, 1259], 
        type: 'note', 
        title: "蒙古包6", 
        desc: "友好的王公", 
        latin: "Regolo amico" 
    },
    { 
        coord: [671, 1061], 
        type: 'note', 
        title: "蒙古包7", 
        desc: "统治吐蕃的王公", 
        latin: "Regolo padrone di Topa conosce" 
    },
    { 
        coord: [724, 874], 
        type: 'note', 
        title: "蒙古包8", 
        desc: "鞑靼君王们的陵墓，皇家山脉", 
        latin: "Sepolcri de i Re Tartari Re monti;去年冬天，这位62岁的大汗（和硕特鞑靼人的大汗）去世了。在他原有的两位妻子中，唯有一位留下了一名年仅22岁的独子，现已继承汗位；大汗另将青海湖的西部分给了一名养子治理，正如地图所示。几天前，前述大汗火化后的遗骨被送往蒙古王陵安葬。该陵墓位于其疆域的边界，座落在庄浪与西宁之间险峻的山峦之中。继位者的母后亲自护送灵柩。我曾派遣一名亚美尼亚人和我的传道员前往，向她呈献一条手帕和一个装满欧洲烟草的烟盒。她随后派人转告我，在回程途中她希望与我见面，并听取神圣的教义。nel passato Inuerno morì il Gran Han d'anni 62, e di due moglie che haueua ha hauuto un sol figlio d'età d'anni 22, a cui è succeduto nel gouerno, lasciando ad un altro figlio adottiuo la parte occidentale del mare come mostra la Carta: giorni fà furono portate e sepellite l'ossa abbruciate del sudetto Han nel sepulcro de Re Tartari che stà situato nelli confini del suo Regno, tra Cioang lang, e Sining in mezzo a monti scoscesi. La Regina madre del successore accompagnò il feretro; et hauendogli inuiato un Armeno et un mio catechista a presentargli un fazzoletto et una Tabachiera piena di tabacco Europeo, mi fece dire che nel ritorno uoleua uedermi et udire la S. Legge." 
    },
    { 
        coord: [338, 1018], 
        type: 'note', 
        title: "蒙古包9", 
        desc: "在这些帐篷里，我曾受君主之命向他们布道。这些帐篷是圆形的，由灰色的毡毯制成。如今那里已有两名基督徒。", 
        latin: "á questi padiglioni ui hò predicato condotoui fuora dal Souer[an]o p[er] iunrinpù (?) amico sono rotondi di feltro cinericio hoggidì ui sono due Xpñi" 
    },
    { 
        coord: [1040, 1165], 
        type: 'note', 
        title: "蒙古包10", 
        desc: "想要成为基督徒的首领", 
        latin: "Regolo che uol farsi christiano；继位者的母后亲自护送（和硕特鞑靼人大汗）灵柩。我曾派遣一名亚美尼亚人和我的传道员前往，向她呈献一条手帕和一个装满欧洲烟草的烟盒。她随后派人转告我，在回程途中她希望与我见面，并听取神圣的教义；La Regina madre del successore accompagnò il feretro; et hauendogli inuiato un Armeno et un mio catechista a presentargli un fazzoletto et una Tabachiera piena di tabacco Europeo, mi fece dire che nel ritorno uoleua uedermi et udire la S. Legge." 
    },
    { 
        coord: [1144, 1061], 
        type: 'note', 
        title: "帐篷1", 
        desc: "藏人", 
        latin: "Thibeti；鞑靼人居住圆形的帐篷：平民的帐篷由灰色的毛毡制成；王公的帐篷硕大圆润、色彩斑斓，非常美观且舒适。吐蕃人的帐篷则是长方形的，形似中国人的房屋：王公的帐篷有颜色装饰；平民的帐篷则是黑色的，由山羊鬃毛和黑牛毛织成。Li Tartari hanno li padiglioni rotondi: quelli della plebe sono di feltro cinericio, e quelli de Principi sono grandi, rotondi, colorati e molto belli e comodi. Li Padiglioni de Thibetesi sono bislonghi come le case de Cinesi: quelli de Principi sono colorati, e quelli della plebe sono negri, fatti di crini di capra e pelo di uache negre." 
    },
    { 
        coord: [1400, 773], 
        type: 'note', 
        title: "帐篷2", 
        desc: "服从于大汗的西藏首领", 
        latin: "Regolo del Thibet sogetto al Han" 
    },
    { 
        coord: [1261, 880], 
        type: 'note', 
        title: "帐篷3", 
        desc: "服从于大汗（清朝皇帝）的西藏首领", 
        latin: "Regolo del Thibet sogetto al Han" 
    },
    { 
        coord: [1168, 1228], 
        type: 'note', 
        title: "帐篷4", 
        desc: "西藏帐篷", 
        latin: "Padiglioni Thibeti；这两个民族的语言完全不同，文字亦然。鞑靼人拥有22个字母，与所谓的满洲（manceu）东鞑靼人的文字几乎相似；吐蕃人拥有30个字母，与印度文字有某些相似之处。这两种书写方式都非常容易掌握，因为我在不到一个月的时间里就学会了鞑靼文，尽管在口语方面，由于缺乏财力支付老师的开销而一直没有老师教导，我仍只能自称是水平最低级的学生：目前我处境贫寒。Li Tartari hanno li padiglioni rotondi: quelli della plebe sono di feltro cinericio, e quelli de Principi sono grandi, rotondi, colorati e molto belli e comodi. Li Padiglioni de Thibetesi sono bislonghi come le case de Cinesi: quelli de Principi sono colorati, e quelli della plebe sono negri, fatti di crini di capra e pelo di uache negre." 
    },
    { 
        coord: [88,1682], 
        type: 'PS', 
        title: "图例说明", 
        desc: "+ 此符号表示该地有教堂或祈祷室。++ 双十字表示有两座教堂。 O 表示该传教点需要教堂和传教士。++++ 黑色小十字表示当地有信众前往最近的集会点，且传教士已在此取得传教成果；但由于缺乏体面的场所，目前无法举行弥撒。", 
        latin: "+ Questo segno denota esservi chiesa, o oratorio ；++ Due croci significano due chiese.  O denota che la missione vuol chiesa e missionario ；++++ le crocette piccole negre significano esservi qualche p.no [popolo] che concorre all'assemblea più vicina; e dove il miss.º [missionario] ha predicato con frutto; se bene non puote celebrare p [per] non esservi luogo decente. " 
    }, 
];