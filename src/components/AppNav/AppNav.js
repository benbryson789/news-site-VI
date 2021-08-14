import React, { useState } from 'react';
import { useHistory,withRouter } from 'react-router-dom';
const   AppNav = ({userState}) =>{
  const history = useHistory();
    return (
      <div>
           {userState.user === null &&
          <a href="/" onClick={(e) => {
              e.preventDefault();
              history.push("/login");
          }} >
          Login
      </a> 
          
        }
      {userState.user !== null &&
     <> <a href="/" onClick={(e) => {
        e.preventDefault();
        history.push("/add-article");
    }} >
    Ad An Article
</a> 
&nbsp;
      <a href="/" onClick={(e) => {
             e.preventDefault();
              history.push("/logout");
          }} >
          Logout 
      </a> </>
}
      <hr/>
    </div>
    )
        
};

export default (AppNav);


// Functional solution:
// function AppNav({ navItems, handleNavClick }) {
//   return (
//     <nav>
//       {navItems.map((navItem) =>
//         <a href="#" onClick={() => handleNavClick(navItem.value)} >
//           {navItem.label} |
//         </a>
//       )}
//     </nav>
//   );
// }
