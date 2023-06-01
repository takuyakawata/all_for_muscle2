// =====================================
// firebaseの設定
// ======================================
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

    const firebaseConfig = {
        apiKey: "AIzaSyDmQfVetVy7NcaNjmsZH1PEt-_JCANN0hU",
        authDomain: "chat-app-13-7d906.firebaseapp.com",
        databaseURL: "https://chat-app-13-7d906-default-rtdb.firebaseio.com",
        projectId: "chat-app-13-7d906",
        storageBucket: "chat-app-13-7d906.appspot.com",
        messagingSenderId: "786543280934",
        appId: "1:786543280934:web:6952d75556d5c175ef77e7"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // =========================
  // 送信ボタンに対する処理
  // =========================
  $("#goal_text_save_btn").on("click", function () {
      // 送信時に必要な処理
      const postData = {
      goal_text: $("#goal_text").val(),
      time: serverTimestamp(),
      };
    
    addDoc(collection(db, "muscle"), postData);
    $("#goal_text").val("");
    });

// =====================================
// データ取得処理
// ======================================
  onSnapshot(collection(db, "chat"), (querySnapshot) => {
    console.log(querySnapshot.docs);
    // 空の配列を準備．
    // querySnapshot.docs に対して繰り返し処理を用いて各要素に対して，
    // .id でドキュメント ID（名前）を取得する．
    // .data() でドキュメント中身（3 項目）を取得する．
    // 上記のデータのみを 1 で用意した配列に追加．
    const documents = [];
    querySnapshot.docs.forEach(function (doc) {
      const document = {
        id: doc.id,
        data: doc.data(),
      };
      documents.push(document);
    });

    console.log(documents);

    const htmlElements = [];
    documents.forEach(function (document) {
        htmlElements.push(`
      <li id="${document.id}">
        <p>${document.data.name} at ${convertTimestampToDatetime(document.data.time.seconds)}</p>
        <p>${document.data.text}</p>
      </li>
      `);
    });

    $("#output").html(htmlElements);

  });