import {
    DevicePhoneMobileIcon,
    AtSymbolIcon,
    MapPinIcon,
} from "@heroicons/react/24/solid";
  
import benefit from "../public/assets/Illustration1.svg";

const benefitTwo = {
    title: "Contato",
    desc: "Na Instituição Marques Moraes, estamos sempre à disposição para atender às suas dúvidas, ouvir seus comentários e auxiliar no que for necessário. Acreditamos na importância da comunicação aberta e estamos aqui para proporcionar o melhor suporte possível.",
    image: benefit,
    bullets: [
      {
        title: "Telefone Celular",
        desc: "55+ (12) 99999-9999",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Email",
        desc: "Email@Email.com.br",
        icon: <AtSymbolIcon />,
      },
      {
        title: "Localização",
        desc: "Rua Fulador cilano de beutrano",
        icon: <MapPinIcon />,
      },
    ],
  };
  
  export {benefitTwo };