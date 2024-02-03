import React from "react";
import FooterLink from "./FooterLink";

const listOfLinks: string[] = [
  "Товары и услуги",
  "О компании",
  "Доставка и оплата",
  "Отзывы",
  "Прайс-лист компании",
  "Контакты",
];

function FooterList() {
  const id = 1;
  return (
    <div>
      <h2>Покупателям:</h2>
      {listOfLinks.map((item) => (
        <FooterLink name={item} key={id} />
      ))}
    </div>
  );
}

export default FooterList;
