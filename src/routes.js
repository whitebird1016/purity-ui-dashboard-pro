/*!

=========================================================
* Purity UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// import
// To be changed
// import Tables from "views/Dashboard/Tables.js";
import {
  CartIcon,
  DocumentIcon,
  HomeIcon,
  PersonIcon,
  StatsIcon,
} from "components/Icons/Icons";
import Calendar from "views/Applications/Calendar/index";
import DataTables from "views/Applications/DataTables/index";
import Kanban from "views/Applications/Kanban/index";
import Wizard from "views/Applications/Wizard/index";
import SignInBasic from "views/Authentication/SignIn/SignInBasic.js";
import SignInCover from "views/Authentication/SignIn/SignInCover.js";
import SignInIllustration from "views/Authentication/SignIn/SignInIllustration.js";
import SignUpBasic from "views/Authentication/SignUp/SignUpBasic.js";
import SignUpCover from "views/Authentication/SignUp/SignUpCover.js";
import SignUpIllustration from "views/Authentication/SignUp/SignUpIllustration.js";
import CRM from "views/Dashboard/CRM";
import Default from "views/Dashboard/Default";
import OrderDetails from "views/Ecommerce/Orders/OrderDetails/index";
import OrderList from "views/Ecommerce/Orders/OrderList/index";
import EditProduct from "views/Ecommerce/Products/EditProduct/index";
import NewProduct from "views/Ecommerce/Products/NewProduct/index";
import ProductPage from "views/Ecommerce/Products/ProductPage/index";
import Billing from "views/Pages/Account/Billing/index";
import Invoice from "views/Pages/Account/Invoice/index";
import Settings from "views/Pages/Account/Settings/index";
import Alerts from "views/Pages/Alerts/index";
import Charts from "views/Pages/Charts/index";
import Pricing from "views/Pages/Pricing/index";
import Overview from "views/Pages/Profile/Overview/index";
import Projects from "views/Pages/Profile/Projects/index";
import Teams from "views/Pages/Profile/Teams/index";
import General from "views/Pages/Projects/General/index";
import Timeline from "views/Pages/Projects/Timeline/index";
import RTLPage from "views/Pages/RTL/index";
import NewUser from "views/Pages/Users/NewUser/index";
import Reports from "views/Pages/Users/Reports/index";
import Widgets from "views/Pages/Widgets/index";

const dashRoutes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <HomeIcon color="inherit" />,
    authIcon: <HomeIcon color="inherit" />,
    collapse: true,
    items: [
      {
        name: "Default",
        path: "/dashboard/default",
        component: Default,
        layout: "/admin",
      },
      {
        name: "CRM",
        path: "/dashboard/crm",
        component: CRM,
        layout: "/admin",
      },
    ],
  },
  {
    name: "PAGES",
    category: "pages",
    items: [
      {
        name: "Pages",
        path: "/pages",
        collapse: true,
        icon: <DocumentIcon color="inherit" />,
        items: [
          {
            name: "Profile",
            path: "/profile",
            collapse: true,
            authIcon: <HomeIcon color="inherit" />,
            items: [
              {
                name: "Profile Overview",
                secondaryNavbar: true,
                path: "/pages/profile/overview",
                component: Overview,
                layout: "/admin",
              },
              {
                name: "Teams",
                secondaryNavbar: true,
                path: "/pages/profile/teams",
                component: Teams,
                layout: "/admin",
              },
              {
                name: "All Projects",
                secondaryNavbar: true,
                path: "/pages/profile/profile-projects",
                component: Projects,
                layout: "/admin",
              },
            ],
          },
          {
            name: "Users",
            path: "/users",
            collapse: true,
            authIcon: <PersonIcon color="inherit" />,
            items: [
              {
                name: "Reports",
                path: "/pages/users/reports",
                component: Reports,
                layout: "/admin",
              },
              {
                name: "New User",
                path: "/pages/users/new-user",
                component: NewUser,
                layout: "/admin",
              },
            ],
          },
          {
            name: "Account",
            path: "/account",
            collapse: true,
            authIcon: <PersonIcon color="inherit" />,
            items: [
              {
                name: "Settings",
                path: "/pages/account/settings",
                component: Settings,
                layout: "/admin",
              },
              {
                name: "Billing",
                component: Billing,
                path: "/pages/account/billing",
                layout: "/admin",
              },
              {
                name: "Invoice",
                component: Invoice,
                path: "/pages/account/invoice",
                layout: "/admin",
              },
            ],
          },
          {
            name: "Projects",
            path: "/projects",
            collapse: true,
            authIcon: <StatsIcon color="inherit" />,
            items: [
              {
                name: "General",
                path: "/pages/projects/general",
                component: General,
                layout: "/admin",
              },
              {
                name: "Timeline",
                path: "/pages/projects/timeline",
                component: Timeline,
                layout: "/admin",
              },
            ],
          },
          {
            name: "Pricing Page",
            component: Pricing,
            secondaryNavbar: true,
            path: "/pages/pricing-page",
            layout: "/auth",
          },
          {
            name: "RTL",
            component: RTLPage,
            path: "/pages/rtl-support-page",
            layout: "/rtl",
          },
          {
            name: "Widgets",
            component: Widgets,
            path: "/pages/widgets",
            layout: "/admin",
          },
          {
            name: "Charts",
            component: Charts,
            path: "/pages/charts",
            layout: "/admin",
          },
          {
            name: "Alerts",
            path: "/pages/alerts",
            component: Alerts,
            layout: "/admin",
          },
        ],
      },
      {
        name: "Applications",
        path: "/applications",
        icon: <StatsIcon color="inherit" />,
        collapse: true,

        items: [
          {
            name: "Kanban",
            component: Kanban,
            authIcon: <DocumentIcon color="inherit" />,
            path: "/applications/kanban",
            layout: "/admin",
          },
          {
            name: "Wizard",
            component: Wizard,
            authIcon: <CartIcon color="inherit" />,
            path: "/applications/wizard",
            layout: "/admin",
          },
          {
            name: "Data Tables",
            path: "/applications/data-tables",
            authIcon: <PersonIcon color="inherit" />,
            component: DataTables,
            layout: "/admin",
          },
          {
            name: "Calendar",
            component: Calendar,
            authIcon: <StatsIcon color="inherit" />,
            path: "/applications/calendar",
            layout: "/admin",
          },
        ],
      },
      {
        name: "Ecommerce",
        path: "/ecommerce",
        icon: <CartIcon color="inherit" />,
        collapse: true,

        items: [
          {
            name: "Products",
            path: "/products",
            collapse: true,
            authIcon: <DocumentIcon color="inherit" />,
            items: [
              {
                name: "New Product",
                component: NewProduct,
                secondaryNavbar: true,
                path: "/ecommerce/products/new-product",
                layout: "/admin",
              },
              {
                name: "Edit Product",
                component: EditProduct,
                path: "/ecommerce/products/edit-product",
                layout: "/admin",
              },
              {
                name: "Product Page",
                component: ProductPage,
                path: "/ecommerce/products/product-page",
                layout: "/admin",
              },
            ],
          },
          {
            name: "Orders",
            path: "/orders",
            collapse: true,
            authIcon: <StatsIcon color="inherit" />,
            items: [
              {
                name: "Order List",
                component: OrderList,
                path: "/ecommerce/orders/order-list",
                layout: "/admin",
              },
              {
                name: "Order Details",
                component: OrderDetails,
                path: "/ecommerce/orders/order-details",
                layout: "/admin",
              },
            ],
          },
        ],
      },
      {
        name: "Authentication",
        path: "/authentication",
        icon: <PersonIcon color="inherit" />,
        collapse: true,
        items: [
          {
            name: "Sign In",
            path: "/authentication/sign-in",
            collapse: true,
            authIcon: <DocumentIcon color="inherit" />,
            items: [
              {
                name: "Basic",
                secondaryNavbar: true,
                component: SignInBasic,
                path: "/authentication/sign-in/basic",
                layout: "/auth",
              },
              {
                name: "Cover",
                component: SignInCover,
                path: "/authentication/sign-in/cover",
                layout: "/auth",
              },
              {
                name: "Illustration",
                component: SignInIllustration,
                path: "/authentication/sign-in/illustration",
                layout: "/auth",
              },
            ],
          },
          {
            name: "Sign Up",
            path: "/authentication/sign-up",
            collapse: true,
            authIcon: <DocumentIcon color="inherit" />,
            items: [
              {
                name: "Basic",
                secondaryNavbar: true,
                component: SignUpBasic,
                path: "/authentication/sign-up/basic",
                layout: "/auth",
              },
              {
                name: "Cover",
                component: SignUpCover,
                path: "/authentication/sign-up/cover",
                layout: "/auth",
              },
              {
                name: "Illustration",
                component: SignUpIllustration,
                path: "/authentication/sign-up/illustration",
                layout: "/auth",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default dashRoutes;
