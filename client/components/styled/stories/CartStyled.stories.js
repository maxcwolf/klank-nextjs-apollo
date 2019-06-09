import React from "react"
import { storiesOf } from "@storybook/react"
import CartStyled from "../CartStyled"

storiesOf("CartStyled", module)
  .add("with text", () => <CartStyled>Cart</CartStyled>)
  .add("with emoji", () => (
    <CartStyled>
      <span role="img" aria-label="so cool">
        😎 👍
      </span>
    </CartStyled>
  ))
