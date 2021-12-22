import DashboardIcon from "../assets/DashboardIcon.svg";
import DashboardIconActive from "../assets/DashboardIconActive.svg";
import TransactionsIcon from "../assets/TransactionsIcon.svg";
import TransactionsIconActive from "../assets/TransactionsIconActive.svg";
import SecureIcon from "../assets/SecureIcon.svg";
import SecureIconActive from "../assets/SecureIconActive.svg";
import SettingsIcon from "../assets/SettingsIcon.svg";
import SettingsIconActive from "../assets/SettingsIconActive.svg";
import SignOutIcon from "../assets/SignOutIcon.svg";
import AccountsIcon from "../assets/AccountsIcon.svg";
import AccountsIconActive from "../assets/AccountsIconActive.svg";
import Dashboard from "../pages/Dashboard";
import Utilisateurs from "../pages/Utilisateurs";
import Operations from "../pages/opérations";
import portefeuille from "../pages/portefeuille";
import Settings from "../pages/opérations";
import mapActive from "../assets/street-map-svgrepo-active.svg";
import map from "../assets/street-map-svgrepo.svg";
import mathActive from "../assets/math-book-svgrepo-active.svg";
import math from "../assets/maths-svgrepo-com.svg";
import cardActive from "../assets/id-card-svgrepo-active.svg";
import card from "../assets/id-card-svgrepo-com.svg";
import chartActive from "../assets/pie-chart-svgrepo-active.svg";
import chart from "../assets/pie-chart-svgrepo.svg";
import userIcon from "../assets/user-icon.svg";
import docs from "../assets/google-docs.svg";
import docsActive from "../assets/google-docs-active.svg";
import Beneficiaires from "../pages/Beneficiaires";
import Transferts from "../pages/Transferts";
import Cartes from "../pages/Cartes";
import Documents from "../pages/Documents";
const routes = [
  {
    label: "Dashboard",
    path: "/",
    icon: DashboardIcon,
    activeIcon: DashboardIconActive,
    component: Dashboard,
  },
  {
    label: "Utilisateurs",
    path: "/Utilisateurs",
    icon: AccountsIcon,
    activeIcon: AccountsIconActive,
    component: Utilisateurs,
  },
  {
    label: "Gestion de portefeuille",
    path: "/portefeuille",
    icon: TransactionsIcon,
    activeIcon: TransactionsIconActive,
    component: portefeuille,
  },
  {
    label: "Gestion des documents ",
    path: "/utilisateurs",
    icon: docs,
    activeIcon: docsActive,
    component: Documents,
  },
  {
    label: "Gestion des opérations",
    path: "/opérations",
    icon: math,
    activeIcon: mathActive,
    component: Operations,
  },
  {
    label: "Gestion des bénéficiaires",
    path: "/Beneficiaires",
    icon: SecureIcon,
    activeIcon: SecureIconActive,
    component: Beneficiaires,
  },
  {
    label: "Gestion des transferts",
    path: "/Transferts",
    icon: map,
    activeIcon: mapActive,
    component: Transferts,
  },
  {
    label: "Gestion des cartes",
    path: "/Cartes",
    icon: SettingsIcon,
    activeIcon: SettingsIconActive,
    component: Cartes,
  },
  // {
  //   label: "",
  //   path: "/sign-out",
  //   icon: 'null',
  //   activeIcon: "",
  // },
];

export default routes;
