// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import style from "./Sidebar.module.css";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoHome } from "react-icons/io5";

// const Sidebar = () => {
//   const [openChildren, setOpenChildren] = useState<{ [key: string]: boolean }>(
//     {}
//   );

//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   const route = [
//     {
//       Name: "Home",
//       Icon: <IoHome size={20} />,
//       path: null,
//       children: [
//         {
//           Name: "Home BBB",
//           Icon: <IoHome />,
//           path: "/home/bbb",
//         },
//         {
//           Name: "Home CCC",
//           Icon: <IoHome />,
//           path: "/home/ccc",
//         },
//         {
//           Name: "Home DDD",
//           Icon: <IoHome />,
//           path: "/home/ddd",
//         },
//       ],
//     },
//     {
//       Name: "Contact",
//       Icon: "",
//       path: null,
//       children: [
//         {
//           Name: "Home BBB",
//           Icon: <IoHome />,
//           path: "/home/bbb",
//         },
//         {
//           Name: "Home CCC",
//           Icon: <IoHome />,
//           path: "/home/ccc",
//         },
//         {
//           Name: "Home DDD",
//           Icon: <IoHome />,
//           path: "/home/ddd",
//         },
//       ],
//     },
//     {
//       Name: "Address",
//       Icon: "",
//       path: "/address",
//     },
//     {
//       Name: "Others",
//       Icon: "",
//       path: "/others",
//     },
//   ];

//   const toggleChild = (name: string) => {
//     setOpenChildren((prevState) => ({
//       ...prevState,
//       [name]: !prevState[name],
//     }));
//   };

//   return (
//     <nav>
//       <div className={style.sidebar}>
//         <ul className={style.parent}>
//           {route.map((item, index) => (
//             <li key={index}>
//               <main
//                 onClick={() => {
//                   if (item.path !== null) {
//                     navigate(item.path);
//                   } else {
//                     toggleChild(item.Name);
//                   }
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   {item.Icon && item.Icon}
//                   {item.Name}
//                 </div>
//                 {item.children && <IoIosArrowForward />}
//               </main>
//               <ul
//                 className={
//                   openChildren[item.Name] ? style.children2 : style.children
//                 }
//               >
//                 {item.children &&
//                   item.children.map((child, childIndex) => (
//                     <li key={childIndex}>
//                       <main onClick={() => navigate(child.path)}>
//                         <div
//                           style={{
//                             display: "flex",
//                             gap: "10px",
//                             alignItems: "center",
//                           }}
//                         >
//                           {child.Icon && child.Icon}
//                           {child.Name}
//                         </div>
//                       </main>
//                     </li>
//                   ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import style from "./Sidebar.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaRegAddressBook } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const Sidebar = () => {
  const [openChildren, setOpenChildren] = useState<{ [key: string]: boolean }>(
    {}
  );
  const location = useLocation(); // Get the current location
  const navigate = useNavigate();

  const route = [
    {
      Name: "Home",
      Icon: <IoHome />,
      path: null,
      children: [
        {
          Name: "Home BBB",
          // Icon: <IoHome />,
          path: "/dashboard/A",
        },
        {
          Name: "Home CCC",
          // Icon: <IoHome />,
          path: "/home/ccc",
        },
        {
          Name: "Home DDD",
          // Icon: <IoHome />,
          path: "/home/ddd",
        },
      ],
    },
    {
      Name: "Contact",
      Icon: <IoCall />,
      path: null,
      children: [
        {
          Name: "Home BBB",
          Icon: <IoHome />,
          path: "/home/bbb",
        },
        {
          Name: "Home CCC",
          Icon: <IoHome />,
          path: "/home/ccc",
        },
        {
          Name: "Home DDD",
          Icon: <IoHome />,
          path: "/home/ddd",
        },
      ],
    },
    {
      Name: "Address",
      Icon: <FaRegAddressBook />,
      path: "/dashboard/address",
    },
  ];
  const toggleChild = (name: string) => {
    setOpenChildren((prevState) => ({
      prevState: false,
      [name]: !prevState[name],
    }));
  };
  return (
    // <nav className={style.sidebar}>
    <>
      <div>
        <ul className={style.parent}>
          {route.map((item, index) => (
            <li
              key={index}
              className={`${
                location.pathname !== item.path ? "" : style.activeParent
              } 
                ${openChildren[item.Name] ? style.children2 : style.children}
                `}
            >
              <main
                onClick={() => {
                  if (item.path !== null) {
                    navigate(item.path);
                  } else {
                    toggleChild(item.Name);
                  }
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  {item.Icon && item.Icon}
                  {item.Name}
                </div>
                {item.children && (
                  <IoIosArrowForward
                    color="black"
                    style={{ transition: "0.3s ease" }}
                    className={openChildren[item.Name] ? style.rotateArrow : ""}
                  />
                )}
              </main>
              <ul className={style.nested}>
                {item.children?.map((child, childIndex) => (
                  <li
                    key={childIndex}
                    className={
                      location.pathname === child.path ? style.activeSub : ""
                    }
                  >
                    <main onClick={() => navigate(child.path)}>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        {child.Name}
                      </div>
                    </main>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
    // </nav>
  );
};

export default Sidebar;
