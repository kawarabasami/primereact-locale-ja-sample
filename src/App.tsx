import React from 'react';
import './App.css';
import { Calendar } from 'primereact/calendar';
import { addLocale, locale } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";

import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons


function App() {
  addLocale('ja', {
    "accept": "はい",
    "reject": "いいえ",
    "choose": "選択",
    "upload": "アップロード",
    "cancel": "キャンセル",
    "dayNames": ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
    "dayNamesShort": ["日", "月", "火", "水", "木", "金", "土"],
    "dayNamesMin": ["日", "月", "火", "水", "木", "金", "土"],
    "monthNames": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    "monthNamesShort": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    "today": "今日",
    "clear": "クリア",
    "weekHeader": "週",
    "firstDayOfWeek": 0,
    "dateFormat": "yy/mm/dd",
    "weak": "弱い",
    "medium": "普通",
    "strong": "強い",
    "passwordPrompt": "パスワードを入力"
});

locale('ja');
  return (
    <div className="App">
      <Calendar inline showWeek></Calendar>

    </div>
  );
}

export default App;
