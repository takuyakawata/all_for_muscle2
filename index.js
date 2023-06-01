


// ========================================
// カウンセリング トレーニングにめあて
// ========================================
// ボタンを押した時の値の獲得
// $("#goal_text_save_btn").on("click", function () {
//     const trainingGoal = $("#goal_text").val();

//     const json1 = JSON.stringify(trainingGoal);//JSONで互換性を設定
    

//      console.log(json1);
//     localStorage.setItem("goal", json1);

// });
// ----------------------------------------
// リロード後もlocalstorageから値を取得して表示する
// if (localStorage.getItem("goal")) {
//     const json1 = localStorage.getItem("goal");
//     console.log(json1);

//     const trainingGoal = JSON.parse(json1);
//     console.log(trainingGoal);

//     $("#goal_text").text(trainingGoal);
// };



// ========================================
// カウンセリング トレーニングに週何回ジムに行く？
// =========================================
// １から１０回を入力できるlistの作成
for (let i = 1; i <= 10; i++) {
    $("#count_week_gym_list").append(`<option value="${i}回"> ${i}回 </option>`);
};
// ------------------------------------------------------------
// 基本的に非表示
$("#count_week_gym_save_btn").hide();
    $("#count_week_gym_list").hide();
// 決定ボタンを押した時の値の獲得
$("#count_week_gym_save_btn").on("click", function () {
    const gymCount = $("#count_week_gym_list").val();

    const json2 = JSON.stringify(gymCount);//JSONで互換性を設定
    
     console.log(json2);
    localStorage.setItem("count", json2);
    
    $("#count_week_gym_text").text(gymCount);
    $(this).hide();
    $("#count_week_gym_list").hide();
    

});
// ---------------------------------------
// 変更ボタンを押した時の値の獲得
$("#count_week_gym_change_btn").on("click", function () {

    $("#count_week_gym_save_btn").show();
    $("#count_week_gym_list").show();

});

// ---------------------------------------
// リロード後もlocalstorageから値を取得して表示する
if (localStorage.getItem("count")) {
    const json2 = localStorage.getItem("count");
    console.log(json2);

    const gymCount = JSON.parse(json2);
    console.log(gymCount);

    $("#count_week_gym_text").text(gymCount);
    };

// =======================================
// カウンセリング 特にどこを鍛えたい？
// ======================================
// 決定ボタンを押した時の値の獲得
$("#training_main_menu_save_btn").on("click", function () {
    const mainMenu = $("#training_main_menu_text").val();

    const json3 = JSON.stringify(mainMenu);//JSONで互換性を設定
    
     console.log(json3);
    localStorage.setItem("mainMenu", json3);

});
// ------------------------------------------
// リロード後もlocalstorageから値を取得して表示する
if (localStorage.getItem("mainMenu")) {
    const json3 = localStorage.getItem("mainMenu");
    console.log(json3);

    const mainMenu = JSON.parse(json3);
    console.log(mainMenu);

    $("#training_main_menu_text").text(mainMenu);
    };


// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// トレーニングの記録
// ============================

// トレーニングの日付の入力＿＿＿＿○月△日×曜日
// const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
// const days = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日', '31日'];

// const dayOfWeeks = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'];

// const dayOfWeeksEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// ------------------------------------
// 入力画面の非表示（日付の入力ができたら表示されるように設定している）
$("#record1").hide();


// for (let i = 0; i < months.length; i++) {
//     $("#months").append(`<option value="${months[i]}">`)
// };
// for (let i = 0; i < days.length; i++) {
//     $("#days").append(`<option value="${days[i]}">`)
// };
// for (let i = 0; i < dayOfWeeks.length; i++) {
//     $("#day_of_weeks").append(`<option value="${dayOfWeeks[i]}">`)
// };

// ---------------------------------------
// トレーニングの日付の入力＿＿＿＿○月△日×曜日
$("#date_input_btn").on("click", function () {
  const monthsName  = $("#months").val();
  const dayName = $("#days").val();
  const dayOfWeekName = $("#day_of_weeks").val();

    const dateInput = {
        month: monthsName,
        day : dayName,
        day_of_week : dayOfWeekName,
    };
    console.log(dateInput);
//   localStorage.setItem("memo", text);
});

// --------------------------------------
// トレーニングのインターバル用のタイマー ストップウォッチ
let timerInterval; // タイマーのインターバルID
let startTime; // タイマーの開始時間
let elapsedTime = 0; // 経過時間

function formatTime(time) {
  // 時間を「時:分:秒」の形式に整形する
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

$("#timer_start_btn").on('click', function() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(function() {
    const currentTime = Date.now();
    elapsedTime = Math.floor((currentTime - startTime) / 1000);
    const formattedTime = formatTime(elapsedTime);

    $("#timer").text(formattedTime);
  }, 1000);
});

$('#timer_stop_btn').on('click', function() {
  clearInterval(timerInterval);
});

$('#timer_reset_btn').on('click', function() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  $('#timer').text('00:00:00');
});
// ----------------------------------
// トレーニングのインターバル用のタイマー カウントダウン
// --------------------------------
  let endTime;
let intervalId;

for (let i = 0; i < 10; i++) {
    $("#countdown_time_list").append(`<option value="${i}">${i}分</option>`)
};

$('#countdown_time_list').on('input', function() {
    let myMinutes = $(this).val();
  });
  function check() {
    let countdown = endTime - new Date().getTime();
   
    if (countdown < 0) {
      clearInterval(intervalId);
      countdown = myMinutes * 60 *  1000;
    }
    const totalSeconds = Math.floor(countdown / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
      $("#countdown").text(`${minutes}:${seconds}`);
};


// タイマーに入れる時間を設定する
// その際dロップダウンリストから選択する


$("#countdown_start_btn").on("click", function () {
myMinutes = $("#countdown_time_list").val();
    // ①終了時刻を求める。
    endTime = new Date().getTime() + myMinutes * 60 *1000
;
    //ミリ秒だから１０００かける  ３を変えてタイマーを設定できるようにしたい！！

    // ②残り時間を求める
    intervalId = setInterval(check, 100);
    //100ミリ秒ごとにcheck関数の起動
})
$("#countdown_stop_btn").on("click", function () {
  clearInterval(endTime);
})

// ===================================
// トレーニングの記録メニュー回数重さ
// ===================================
// トレーニングの記録のドロップダウンリスト記録
// ドロップダウンリストの内容の編集
const trainingMenus = ['ベンチプレス', 'デットリフト', '腹筋', '肩', 'スクワット'];
function trainingLog() {
    for (let i = 0; i < trainingMenus.length; i++) {
        $(".training_menu_name").append(`<option value="${trainingMenus[i]}">${trainingMenus[i]}</option>`);
    };
    //トレーニングのメニュー、回数、セット数（何セット目か）
    for (let i = 1; i <= 10; i++) {
        $(".training_menu_set_count").append(`<option value="${i}セット目">${i}セット目</option>`);
    };


    $("#training_menu_set_count").change(function () {
        let x = $('option:selected').val();
    });


    for (let i = 5; i <= 150; i = i+5) {
        $(".training_menu_kg_count").append(`<option value="${i}kg">${i}kg</option>`);
    };
    for (let i = 1; i <= 20; i++) {
        $(".training_menu_rep_count").append(`<option value="${i}rep">${i}rep</option>`);
    };
};
trainingLog();// ドロップダウンリストの内容の編集
// --------------------------------------------------------------------
// 日付の入力とトレーニングの記録の有効化
$("#date_input_btn").on("click", function () {
    $('#input_date').text($("#date").val());
    $("#record1").show();
});

// -----------------------------------------------------------
// トレーニングの終了ボタンの設定
// トレーニング内容を記録する部分を非表示にする
$("#finish_btn").on("click", function () {
    $("#record1").hide();
});

// -----------------------------------------------------
// 記録するボタンの動き
let number = 1;
$("#log_btn").on("click", function () {

    let a = $()

    const name = $("#input_menu_name").val();
    const set = $("#input_menu_set_count").val();
    const kg = $("#input_menu_kg_count").val();
    const rep = $("#input_menu_rep_count").val();

    const data = {
        name: name,
        set: set,
        kg : kg,
        rep : rep,
    };

 for (let i = 1; i <= number; i++) {
        $("#input_text").append(`<p id="text${i}"></p>`);
    };
    

    $("#text" + number).text((data.name)+" " + (data.set)+" " + (data.kg)+" " + (data.rep));

    const json  = JSON.stringify(data);//JSONで互換性を設定

    console.log(json);
    localStorage.setItem("log"+number, json);

    number++;

 });
// // -------------------------------------------------------------
// localStorageに保存されたデータをテキストエリアに表示
// リロードされても上書きで書いていても保存されたところが表示されるので注意
if (localStorage.getItem("log" + number)) {
    for (let i = 0; i < number; i++){
    const json = localStorage.getItem("log" + number);
    console.log(json);

    const data = JSON.parse(json);
    console.log(data);

    
    $("#text" + number).text((data.name) + " " + (data.set) + " " + (data.kg) + " " + (data.rep));
    }
};
// ____________________________________________
// リストに入った内容を別のタグにすぐに反映させる
// $(document).ready(function() {
//   $('#input_menu_name').on('input', function() {
//     $('#output_menu_name').text($(this).val());
//   });
// });

console.log();
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝==============
// トレーニング日誌
// ローカルストレージに保存したものをブラウザに表示させるのが基本の流れ
// ==================================================================

// -----------------------------------------------
// 月曜日の日誌
// -----------------------------------------------
// 保存ボタンを押してテキストの保存
$("#training_diary_Monday_save_btn").on("click", function () {
    const diaryMonday = $("#training_diary_Monday").val();

    console.log(diaryMonday);

    const jsonMonday = JSON.stringify(diaryMonday);
    console.log(jsonMonday);

    localStorage.setItem("Monday", jsonMonday);
});

// -----------------------------------------------
// localStorageに保存されたデータを獲得して、日誌に表示
if (localStorage.getItem("Monday")) {
    console.log()

    const jsonMonday = localStorage.getItem("Monday");
    console.log(jsonMonday);

    const diaryMonday = JSON.parse(jsonMonday);
    console.log(diaryMonday);

    $("#training_diary_Monday").val(diaryMonday);
};
// --------------------------------------------
// 月曜日の日誌をクリア
$("#training_diary_Monday_clear_btn").on("click", function () {
    localStorage.removeItem("Monday");
    $("#training_diary_Monday").val("");
});
// -----------------------------------------------
// 火曜日の日誌
// -----------------------------------------------
// 保存ボタンを押してテキストの保存
$("#training_diary_Tuesday_save_btn").on("click", function () {
    const diaryTuesday = $("#training_diary_Tuesday").val();

    console.log(diaryTuesday);

    const jsonTuesday = JSON.stringify(diaryTuesday);
    console.log(jsonTuesday);

    localStorage.setItem("Tuesday", jsonTuesday);
});
// -----------------------------------------------
// 火曜日の日誌を取得して表示
if (localStorage.getItem("Tuesday")) {
    const jsonTuesday = localStorage.getItem("Tuesday");
    console.log(jsonTuesday);

    const diaryTuesday = JSON.parse(jsonTuesday);
    console.log(diaryTuesday);

    $("#training_diary_Tuesday").val(diaryTuesday);
}

// -----------------------------------------------
// 火曜日の日誌をクリア
$("#training_diary_Tuesday_clear_btn").on("click", function () {
    localStorage.removeItem("Tuesday");
    $("#training_diary_Tuesday").val("");
});

// -----------------------------------------------
// 水曜日の日誌
// -----------------------------------------------
// 保存ボタンを押してテキストの保存
$("#training_diary_Wednesday_save_btn").on("click", function () {
    const diaryWednesday = $("#training_diary_Wednesday").val();

    console.log(diaryWednesday);

    const jsonWednesday = JSON.stringify(diaryWednesday);
    console.log(jsonWednesday);

    localStorage.setItem("Wednesday", jsonWednesday);
});


// -----------------------------------------------
// 水曜日の日誌を取得して表示
if (localStorage.getItem("Wednesday")) {
    const jsonWednesday = localStorage.getItem("Wednesday");
    console.log(jsonWednesday);

    const diaryWednesday = JSON.parse(jsonWednesday);
    console.log(diaryWednesday);

    $("#training_diary_Wednesday").val(diaryWednesday);
}
// -----------------------------------------------
// 水曜日の日誌をクリア 
$("#training_diary_Wednesday_clear_btn").on("click", function () {
    localStorage.removeItem("Wednesday");
    $("#training_diary_Wednesday").val("");
});




// -----------------------------------------------
// 木曜日の日誌
// -----------------------------------------------
// 保存ボタンを押してテキストの保存
$("#training_diary_Thursday_save_btn").on("click", function () {
    const diaryThursday = $("#training_diary_Thursday").val();

    console.log(diaryThursday);

    const jsonThursday = JSON.stringify(diaryThursday);
    console.log(jsonThursday);

    localStorage.setItem("Thursday", jsonThursday);
});

// -----------------------------------------------
// 木曜日の日誌を取得して表示
if (localStorage.getItem("Thursday")) {
    const jsonThursday = localStorage.getItem("Thursday");
    console.log(jsonThursday);

    const diaryThursday = JSON.parse(jsonThursday);
    console.log(diaryThursday);

    $("#training_diary_Thursday").val(diaryThursday);
}

// -----------------------------------------------
// 木曜日の日誌をクリア
$("#training_diary_Thursday_clear_btn").on("click", function () {
    localStorage.removeItem("Thursday");
    $("#training_diary_Thursday").val("");
});


// -----------------------------------------------
// 金曜日の日誌
// -----------------------------------------------
// 保存ボタンを押してテキストの保存
$("#training_diary_Friday_save_btn").on("click", function () {
    const diaryFriday = $("#training_diary_Friday").val();

    console.log(diaryFriday);

    const jsonFriday = JSON.stringify(diaryFriday);
    console.log(jsonFriday);

    localStorage.setItem("Friday", jsonFriday);
});

// -----------------------------------------------
// 金曜日の日誌を取得して表示
if (localStorage.getItem("Friday")) {
    const jsonFriday = localStorage.getItem("Friday");
    console.log(jsonFriday);

    const diaryFriday = JSON.parse(jsonFriday);
    console.log(diaryFriday);

    $("#training_diary_Friday").val(diaryFriday);
}
// -----------------------------------------------
// 金曜日の日誌をクリア

$("#training_diary_Friday_clear_btn").on("click", function () {
    localStorage.removeItem("Friday");
    $("#training_diary_Friday").val("");
});


// -----------------------------------------------
// 土曜日の日誌
// -----------------------------------------------
// 保存ボタンを押してテキストの保存
$("#training_diary_Saturday_save_btn").on("click", function () {
    const diarySaturday = $("#training_diary_Saturday").val();

    console.log(diarySaturday);

    const jsonSaturday = JSON.stringify(diarySaturday);
    console.log(jsonSaturday);

    localStorage.setItem("Saturday", jsonSaturday);
});

// -----------------------------------------------
// 土曜日の日誌をクリア
$("#training_diary_Saturday_clear_btn").on("click", function () {
    localStorage.removeItem("Saturday");
    $("#training_diary_Saturday").val("");
});

// -----------------------------------------------
// 土曜日の日誌を取得して表示
if (localStorage.getItem("Saturday")) {
    const jsonSaturday = localStorage.getItem("Saturday");
    console.log(jsonSaturday);

    const diarySaturday = JSON.parse(jsonSaturday);
    console.log(diarySaturday);

    $("#training_diary_Saturday").val(diarySaturday);
}

// -----------------------------------------------
// 日曜日の日誌
// -----------------------------------------------
// 保存ボタンを押してテキストの保存
$("#training_diary_Sunday_save_btn").on("click", function () {
    const diarySunday = $("#training_diary_Sunday").val();

    console.log(diarySunday);

    const jsonSunday = JSON.stringify(diarySunday);
    console.log(jsonSunday);

    localStorage.setItem("Sunday", jsonSunday);
});

// -----------------------------------------------
// 日曜日の日誌を取得して表示
if (localStorage.getItem("Sunday")) {
    const jsonSunday = localStorage.getItem("Sunday");
    console.log(jsonSunday);

    const diarySunday = JSON.parse(jsonSunday);
    console.log(diarySunday);

    $("#training_diary_Sunday").val(diarySunday);
}

// -----------------------------------------------
// 日曜日の日誌をクリア
$("#training_diary_Sunday_clear_btn").on("click", function () {
    localStorage.removeItem("Sunday");
    $("#training_diary_Sunday").val("");
});



// ＝＝＝＝＝＝＝＝＝＝＝＝＝==============
// 全体のメニューをつくる　日誌のモーダルの動き
// ====================================
//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
  if(hashIDName){
    //タブ設定
    $('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
     var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 

      if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
        var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
        $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
        $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
        //表示させるエリア設定
        $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
        $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
      }
        
    });
  }
}
//タブをクリックしたら
$('.tab a').on('click', function() {
  var idName = $(this).attr('href'); //タブ内のリンク名を取得  
  GethashID (idName);//設定したタブの読み込みと
  return false;//aタグを無効にする
});

// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
  var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
    GethashID(hashName);//設定したタブの読み込み
});





// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝==============
// diaryの履歴をつくる　日誌のモーダルの動き
// =======================================
//任意のタブにURLからリンクするための設定
function GethashID1 (hashIDName1){
  if(hashIDName1){
    //タブ設定
    $('.tab1 li').find('a').each(function() { //タブ内のaタグ全てを取得
     var idName1 = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 

      if(idName1 == hashIDName1){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
        var parentElm1 = $(this).parent(); //タブ内のaタグの親要素（li）を取得
        $('.tab1 li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
        $(parentElm1).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
        //表示させるエリア設定
        $(".area1").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
        $(hashIDName1).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
      }
    });
  }
}
//タブをクリックしたら
$('.tab1 a').on('click', function() {
  var idName1 = $(this).attr('href'); //タブ内のリンク名を取得
  GethashID1 (idName1);//設定したタブの読み込みと
  return false;//aタグを無効にする
});

// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab1 li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area1:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
  var hashName1 = location.hash; //リンク元の指定されたURLのハッシュタグを取得
    GethashID1(hashName1);//設定したタブの読み込み
});
