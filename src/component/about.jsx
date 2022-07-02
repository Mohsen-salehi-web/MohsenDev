import React from "react";
import "./../css/App.css";
export default function Aboutme() {
  return (
    <section className="about container">
      <div className="text-left">
        <strong>درباره </strong>
        سلام من محسن صالحی هستم. من دانشجوی مهندسی کامپیوتر از دانشگاه خوارزمی
        کرج بودم و دیپلم ریاضی دارم. حدود دو ماه است که در کلاس های استاد پارسا
        قربانیان مجموعه پرنیان در رشته برنامه نویسی فرانت مشغول به تحصیل هستم.
        من در ایران و در شهر کرمانشاه متولد شدم و بیست سال سن دارم، ممنون که وقت
        گذاشتید و به سایت من سر زدید، امیدوارم خوشحال باشید. (محسن صالحی)
      </div>
      <div className="text-right">
        <div>
          <span>سن</span>
          <span>21</span>
        </div>
        <div>
          <span>محل سکونت</span>
          <span>تهران</span>
        </div>
        <div>
          <span>آدرس </span>
          <span>ونک</span>
        </div>
        <div>
          <span>ایمیل</span>
          <span>mohsensalehi2001@gmail.com</span>
        </div>
        <div>
          <span>وضعیت</span>
          <span>مشغول به کار </span>
        </div>
      </div>
      <button>
        <a href="#" download={true}>
          دانلود رزومه
        </a>
      </button>
    </section>
  );
}
