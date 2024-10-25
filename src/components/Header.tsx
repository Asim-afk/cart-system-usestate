import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function Header({ cartCount }: { cartCount: number }) {
  return (
    <header className="header-container">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        to={"/"}
      >
        <h4>Home</h4>
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "" + "cart-icon"
        }
        to={"/cart"}
      >
        <FaShoppingCart size={30} />
        {cartCount > 0 && <span className="badge">{cartCount}</span>}
      </NavLink>
    </header>
  );
}

export default Header;
