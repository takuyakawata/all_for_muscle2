

// 次のセットへのボタン
// ボタンを押して（次のセットのボタンを押して、ドロップダウンリストを追加させる
let k = 2;
$("#set1_add_btn").on("click", function () {
    $(".training").append(
        `<div class="training_menu"  id="training_menu${k}">

            <p id="training_menu${k}_set_count" value="1set">${k}セット目</p>

            <select class=training_menu_name  id="training_menu${k}_name">

            </select>

            <select class="training_menu_kg_count" id="training_menu${k}_kg_count">

            </select>

            <select class="training_menu_rep_count"   id="training_menu${k}_rep_count">

            </select>

    </div>`
    );
    

    trainingLog();// ドロップダウンリストの内容の編集
    
    $("#history_area").append(
        `<div class="history">
            <p id="text${k}_set1">${k}セット目</p>
            <p id="text${k}_set2"></p>
            <p id="text${k}_set3" ></p>
            <p id="text${k}_set4"></p>
        </div>`
    );
    
    k++;
});
// -------------------------------------------------------------
// セットの終了



// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝==============
// トレーニングメニューの追加のボタンの設定
// ==================================================================
let t = 2;
$("#training_menu_add_btn").on("click", function () {

    $(".record").append(
        `<section class="record" id="record${t}">
            <p>=======トレーニングメニュー  その${t}==========</p>
                <div class="training">
                    <div class=training_menu id="training_menu1">
                    <p id="training_menu${t}_set_count">１セット目</p>

                    <select class="training_menu_name" id="training_menu${t}_name">

                    </select>

                    <select class="training_menu_kg_count"  id="training_menu${t}_kg_count">

                    </select>

                    <select  class="training_menu_rep_count" id="training_menu${t}_rep_count">

                    </select>
 
                    </div>
                </div>

                 <div>
                  <button id="set${t}_add_btn">次のセットへ</button>
                  <button id="set${t}_finish_btn">セット終了</button>
                </div>
        </section>`
    );
    trainingLog();
    t++;
});


// -------------------------------------------------------------

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝==============
// トレーニングの履歴をつくる　ローカルストレージに保存したものをブラウザに表示させるのが基本の流れ
// ==================================================================
// -------------------------------------------------------------
//配列をlocalStorageで獲得
$("#set" + setNumber + "_finish_btn").on("click", function () {

    const name = $("#training_menu" + setNumber + "_name").val();
    const kg = $("#training_menu" + setNumber + "_kg_count").val();
    const rep = $("#training_menu" + setNumber + "_rep_count").val();

    const data = {
        name : name,
        kg : kg,
        rep : rep,
    };

  $("#text" + setNumber + "_set" + setNumber ).text("１セット目"+(data.name) + (data.kg)+(data.rep));

    const json1  = JSON.stringify(data);//JSONで互換性を設定

    console.log(json1);
    localStorage.setItem("set" + setNumber , json1);

});
// -------------------------------------------------------------
// localStorageに保存されたデータをテキストエリアに表示
// リロードされても上書きで書いていても保存されたところが表示されるので注意
if (localStorage.getItem("set" + setNumber)) {
    const json1 = localStorage.getItem("set" + setNumber);
    console.log(json1);

    const data = JSON.parse(json1);
    console.log(data);

    $("#text" + setNumber + "_set1" ).text((data.name) +"１セット目"+ (data.kg)+(data.rep));
};

// -------------------------------------------------------------

// const trainingMenus = ['胸筋', '背筋', '腹筋', '肩', '脚'];
//     for (let i = 0; i < trainingMenus.length; i++) {
//         $(".training_menu_name").append(`<option value="${trainingMenus[i]}">${trainingMenus[i]}</option>`);
//     };
//     //トレーニングのメニュー、回数、セット数（何セット目か）
//     for (let i = 1; i <= 100; i++) {
//         $(".training_menu_kg_count").append(`<option value="${i}kg">${i}kg</option>`);
//     };
//     for (let i = 1; i <= 20; i++) {
//         $(".training_menu_rep_count").append(`<option value="${i}rep">${i}rep</option>`);
//     };