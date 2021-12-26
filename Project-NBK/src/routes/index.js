import DashboardIcon from '../assets/DashboardIcon.svg';
import DashboardIconActive from '../assets/DashboardIconActive.svg';
import TransactionsIcon from '../assets/TransactionsIcon.svg';
import TransactionsIconActive from '../assets/TransactionsIconActive.svg';
import SecureIcon from '../assets/SecureIcon.svg';
import SecureIconActive from '../assets/SecureIconActive.svg';
import SettingsIcon from '../assets/SettingsIcon.svg';
import SettingsIconActive from '../assets/SettingsIconActive.svg';
import AccountsIcon from '../assets/AccountsIcon.svg';
import AccountsIconActive from '../assets/AccountsIconActive.svg';
import Dashboard from '../pages/Dashboard';
import Utilisateurs from '../pages/Utilisateurs';
import Operations from '../pages/opérations';
// import portefeuille from '../pages/portefeuille';
import mapActive from '../assets/street-map-svgrepo-active.svg';
import map from '../assets/street-map-svgrepo.svg';
import mathActive from '../assets/math-book-svgrepo-active.svg';
import math from '../assets/maths-svgrepo-com.svg';
import docs from '../assets/google-docs.svg';
import docsActive from '../assets/google-docs-active.svg';
import Beneficiaires from '../pages/Beneficiaires';
import Transferts from '../pages/Transferts';
import Cartes from '../pages/Cartes';
import Documents from '../pages/Documents';
import downArrow from '../assets/plus.svg';
import opr from '../assets/field-svgrepo-com.svg';
import Payins from '../pages/WallettPages/Payins';
import Payouts from '../pages/WallettPages/Payouts';
import PayinRefund from '../pages/WallettPages/PayinReund';
import Transaction from '../pages/WallettPages/Transaction';
import PayinReund from '../pages/WallettPages/PayinReund';
import portefeuille from '../pages/portefeuille';
import Minus from '../assets/minus.svg';
const routes = [
  {
    label: 'Tableau de bord',
    path: '/',
    icon: DashboardIcon,
    activeIcon: DashboardIconActive,
    component: Dashboard,
  },
  //   {
  //     label: 'Portefeuille',
  //     path: '/wallet',
  //     icon: DashboardIcon,
  //     activeIcon: DashboardIconActive,
  //     component: Wallet,
  //   },
  {
    label: 'Utilisateurs',
    path: '/Utilisateurs',
    icon: AccountsIcon,
    activeIcon: AccountsIconActive,
    component: Utilisateurs,
  },
  {
    label: 'Gestion de portefeuille',
    path: '/portefeuille',
    icon: TransactionsIcon,
    activeIcon: TransactionsIconActive,
    component: portefeuille,
  },
  {
    label: 'Gestion des documents ',
    path: '/utilisateurs',
    icon: docs,
    activeIcon: docsActive,
    component: Documents,
  },
  {
    label: 'Gestion des opérations',
    path: '/opérations',
    icon: math,
    activeIcon: mathActive,
    component: Operations,
  },
  {
    label: 'Gestion des bénéficiaires',
    path: '/Beneficiaires',
    icon: SecureIcon,
    activeIcon: SecureIconActive,
    component: Beneficiaires,
  },
  {
    label: 'Gestion des transferts',
    path: '/Transferts',
    icon: map,
    activeIcon: mapActive,
    component: Transferts,
  },
  {
    label: 'Gestion des cartes',
    path: '/Cartes',
    icon: SettingsIcon,
    activeIcon: SettingsIconActive,
    component: Cartes,
  },
  {
    label: "Se Déconnecter",
    path: "/login",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
    label: 'Operations',
    path: null,
    icon: SettingsIcon,
    activeIcon: opr,
    iconArrow: downArrow,
    // component: Cartes,
    collapse: true,
    itemList: [
      {
        label: 'Payins',
        path: '/Payins',
        icon: SettingsIcon,
        activeIcon: Minus,
        component: Payins,
      },
      {
        label: 'Payouts',
        path: '/payouts',
        icon: SettingsIcon,
        activeIcon: Minus,
        component: Payouts,
      },
      {
        label: 'PayinRefund',
        path: '/payinRefund',
        icon: SettingsIcon,
        activeIcon: Minus,
        component: PayinRefund,
      },
      {
        label: 'PayinReund',
        path: '/PayinReund',
        icon: SettingsIcon,
        activeIcon: Minus,
        component: PayinReund,
      },
      {
        label: 'Transaction',
        path: '/Transaction',
        icon: SettingsIcon,
        activeIcon: Minus,
        component: Transaction,
      },
    ],
  },
  // {
  //   label: "",
  //   path: "/sign-out",
  //   icon: 'null',
  //   activeIcon: "",
  // },
];

export default routes;
