// import React, { useState } from "react";
// import { Menu } from "lucide-react";
// import { X } from "lucide-react";


// const Drawer = () => {

//   const [open, setOpen] = useState(false);
//   function handlClick() {
//     if (open) {
//       setOpen(false);
//     } else {
//       setOpen(true);
//     }
//   }
//   return (
//     <div className="drawer" onClick={handlClick}>
//       <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content">
//         {/* Page content here */}
//         <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
//           {!open && <Menu />}
//           {open && <X />}
//         </label>
//       </div>
//       <div className="drawer-side">
//         <label
//           htmlFor="my-drawer"
//           aria-label="close sidebar"
//           className="drawer-overlay"
//         ></label>
//         <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
//           {/* Sidebar content here */}
//           <li>
//             <a>Sidebar Item 1</a>
//           </li>
//           <li>
//             <a>Sidebar Item 2</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Drawer;
