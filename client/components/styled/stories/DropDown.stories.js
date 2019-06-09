import React from "react"
import { storiesOf } from "@storybook/react"
import { DropDown, DropDownItem, SearchStyled } from "../DropDown"

const items = ["Cheese", "Maple Syrup", "Butter"]

storiesOf("DropDown", module).add("with some text", () => (
  <DropDown>
    {items.map(item => (
      <DropDownItem key={item}>{item}</DropDownItem>
    ))}
  </DropDown>
))
