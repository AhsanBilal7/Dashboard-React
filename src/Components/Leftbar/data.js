import AcUnitIcon from "@material-ui/icons/AcUnit";
import AddIcon from "@material-ui/icons/Add";
import HistorySharpIcon from "@material-ui/icons/HistorySharp";
import StyleSharpIcon from "@material-ui/icons/StyleSharp";
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
const greeting = [
  {
    message: "Hi I am Ahsan",
    email: "ahsanbilal@gmail.com",
  },
  {
    message: "Hi I am Bilal",
    email: "bilal.ahsan@gmail.com",
  },
];

const options = [
  {
    text: "Dashboard",
    iconSource: <AddIcon />,
  },
  {
    text: "Invoices",
    iconSource: <AcUnitIcon />,
  },
  {
    text: "Cards",
    iconSource: <StyleSharpIcon />,
  },
  {
    text: "History",
    iconSource: <HistorySharpIcon />,
  },
  {
    text: "Setting",
    iconSource: <SettingsSharpIcon />,
  },
];
export default greeting;
export { options };
