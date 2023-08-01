import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import CartIcon from "../../cart-icon/card-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { signOutUser } from "./../../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigaion = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigaion;
