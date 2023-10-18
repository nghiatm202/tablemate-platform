import dynamic from "next/dynamic";

// export { default as LoginForOwner } from "./LoginForOwner";
// export { default as LoginForManagerOrStaff } from "./LoginForManagerOrStaff";

const LoginForOwner = dynamic(() => import("./LoginForOwner"));
const LoginForManagerOrStaff = dynamic(
  () => import("./LoginForManagerOrStaff")
);

export { LoginForOwner, LoginForManagerOrStaff };
