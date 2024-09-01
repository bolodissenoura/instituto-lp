import {
    DevicePhoneMobileIcon,
    AtSymbolIcon,
    MapPinIcon,
} from "@heroicons/react/24/solid";
  
import benefit from "../public/assets/Illustration1.svg";

const benefitTwo = {
    title: "CONTATO",
    desc: "Na Instituição Marques Moraes, estamos sempre à disposição para atender às suas dúvidas, ouvir seus comentários e auxiliar no que for necessário. Acreditamos na importância da comunicação aberta e estamos aqui para proporcionar o melhor suporte possível.",
    image: benefit,
    bullets: [
      {
        title: "Telefone",
        desc: "(12) 3962-3406",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Email",
        desc: "contatoiemarquesmoraes@yahoo.com.br",
        icon: <AtSymbolIcon />,
      },
      {
        title: "Localização",
        desc: "Rua Utah, 300, no Jardim Flórida, Jacareí",
        icon: <MapPinIcon />,
      },
    ],
  };
  
  export {benefitTwo};