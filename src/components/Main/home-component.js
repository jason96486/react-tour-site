import React, { useState, useEffect } from "react";
import "./home-component.scss";
import Image1 from "../../assets/images/清水寺.jpg";
import Image2 from "../../assets/images/京都古城.jpg";
import Image3 from "../../assets/images/北海道雪景.jpg";
import Image4 from "../../assets/images/大阪街頭.jpg";
import Image5 from "../../assets/images/富士山.jpg";
import Image6 from "../../assets/images/富士山2.jpg";
import Image7 from "../../assets/images/日本壽司.jpg";
import Image8 from "../../assets/images/日本櫻花.jpg";

const HomeComponent = () => {
  const Images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % Images.length);
    }, 3000);

    return () => clearInterval(interval);
  });
  const replaceImg = {
    backgroundImage: `url(${Images[currentIndex]})`,
  };
  return (
    <main>
      <section className="background-img" style={replaceImg}>
        <div className="filter"></div>
        <h3>
          休閒空間，特殊假期。
          <br />
          安排一趟日本旅遊行程，放鬆身心。
        </h3>
      </section>

      <section className="info-circles">
        <h3>遊玩主題</h3>
        <div className="circles">
          <div className="circle">
            <img src={Image1} alt="清水寺" />
            <p>京都清水寺，千年古都</p>
          </div>
          <div className="circle">
            <img src={Image3} alt="北海道雪景" />
            <p>北海道雪景，美不勝收</p>
          </div>
          <div className="circle">
            <img src={Image6} alt="富士山2" />
            <p>富士山風景與溫泉</p>
          </div>
          <div className="circle">
            <img src={Image7} alt="日本壽司" />
            <p>日本道地壽司與美食</p>
          </div>
        </div>
      </section>

      <section className="empty-container">
        <h3>今天開始計畫行程，找到最合適的方案</h3>
      </section>

      <section className="google-map">
        <h3>日本地理位置</h3>
        <p>
          日本在地理上屬於東北亞，東鄰太平洋，西以日本海、朝鮮海峽、東海與歐亞大陸的西伯利亞、朝鮮半島、中國大陸鄰接，南以菲律賓海與台灣、馬里亞納群島鄰接，北以宗谷海峽、鄂霍次克海與庫頁島、千島群島鄰接。日本一年四季都是舒爽怡人的氣候，四季變化分明。
          南部暖和，越往北部越寒冷。
          特別是冬天吹西北季風，在日本海側會下很多雪。
          另一方面、在太平洋側會持續是被稱為「冬晴」的乾燥晴天
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13695570.034005076!2d126.54757346407047!3d33.06581103725837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2z5pel5pys!5e0!3m2!1szh-TW!2stw!4v1716947317736!5m2!1szh-TW!2stw"
          style={{ border: 0 }}
          allowfullscreen=""
          title="google map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};

export default HomeComponent;
