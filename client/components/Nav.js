import Link from "next/link"
import NavStyled from "./styled/NavStyled"

const Nav = () => (
  <div>
    <NavStyled data-test="nav">
      <Link href="/items">
        <a>Shop</a>
      </Link>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
      <Link href="/orders">
        <a>Orders</a>
      </Link>
      <Link href="/me">
        <a>Account</a>
      </Link>
    </NavStyled>
  </div>
)

export default Nav
