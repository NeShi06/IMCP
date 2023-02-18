import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Tabs from "../components/Tabs";
import SwiperHeader from "../components/Swipers/SwiperHeaders";
import { MainContext } from "../context/MainContext";
import Box from "../components/Box";
import image1 from "../assets/images/balances/balances_background.jpg";

function Balances() {
  const { timeStamps, functions } = useContext(MainContext);
  const { balanceTabs, capitalize } = functions;
  const [ntabs, setNtabs] = useState(balanceTabs);
  let path = String(useLocation().pathname).slice(1,9);

  return (
    <>
      <SwiperHeader>
        <SwiperSlide>
          <img src={image1} className="swiperHeader__img" />
        </SwiperSlide>

        <Box
          boxInputs={{
            classList: "boox__list fade pc",
            title: capitalize(path),
          }}
        />
        <Box
          boxInputs={{
            classList: "lista sp effect",
            title: capitalize(path),
          }}
        />
      </SwiperHeader>

      <h1 className="tabs__title">
        En esta sección, puede consultar nuestros balances actualizados.
      </h1>

      <hr />

      <Tabs
        tabsSettings={{
          category: ntabs,
          balance: true,
          points: timeStamps.monthString,
          url: ntabs,
        }}
      />
    </>
  );
}

export default Balances;
