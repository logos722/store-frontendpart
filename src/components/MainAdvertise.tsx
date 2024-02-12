import React from "react";
import home from "../img/6d422ffcf36921959807d04b5a565a97.webp";
import thumbUp from "../img/efyc5i9uv31bvtev65qqsp48f7w9oc9b.png";
import handShake from "../img/kpgp5rlwiwg9zjcq9tik0qkd4iatk59t.webp";
import car from "../img/ylhl352guitqdc9vrccvx9207u1n5lzi.png";

function MainAdvertise() {
  return (
    <div className="container">
      <div className="advertise">
        <div className="advertise__benefitsContainer">
          <div className="advertise__benefitsContainer__item">
            <img src={home} alt="" />
            <div className="advertise__benefitsContainer__item-title">
              Работаем более 15 лет
            </div>
          </div>
          <div className="advertise__benefitsContainer__item">
            <img src={thumbUp} alt="" />
            <div className="advertise__benefitsContainer__item-title">
              15000 наименований
            </div>
          </div>
          <div className="advertise__benefitsContainer__item">
            <img src={handShake} alt="" />
            <div className="advertise__benefitsContainer__item-title">
              Официальный дистрибьютор
            </div>
          </div>
          <div className="advertise__benefitsContainer__item">
            <img src={car} alt="" />
            <div className="advertise__benefitsContainer__item-title">
              Удобная и быстрая доставка
            </div>
          </div>
        </div>
        <div className="divider" />
        <div>
          <div>
            <img src="" alt="" />
            <div>Автоматический полив, ландшафтный полив </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>Капельный полив для овощей, ягод и цветов </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>Насосное оборудование </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>Фильтры для полива </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainAdvertise;
