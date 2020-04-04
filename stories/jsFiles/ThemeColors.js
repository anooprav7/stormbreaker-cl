import React, { useState } from "react"
import { theme } from "../../src/theme"
import { defaultDecoratorArr, withTheme } from "../themeDecorator"
import styled from "@emotion/styled"

// export default {
//   title: "theme/Colors",
//   component: Switch,
//   decorators: defaultDecoratorArr,
// }

const copyToClipboard = (str) => {
  const el = document.createElement("textarea")
  el.value = str
  el.setAttribute("readonly", "")
  el.style.position = "absolute"
  el.style.left = "-9999px"
  document.body.appendChild(el)
  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)
}

const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.mono200};
  border-top: none;
  height: ${(props) => props.theme.sizeOfSpace(32)};
  width: ${(props) => props.theme.sizeOfSpace(32)};
  display: flex; /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  border-radius: 7px;
  margin: 5px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.22); */
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
    transform: ${(props) => (props.flat ? "" : "scale(1.05)")};
  }
`

const ColorBlock = styled.div`border: 1px solid ${(props) =>
  props.theme.colors.mono100}; background-color: ${(props) =>
  props.color}; height: ${(props) => props.theme.sizeOfSpace(21)}; /* width: ${(
  props
) =>
  props.theme.sizeOfSpace(
    17
  )}; */ width: 100%; border-radius: 7px 7px 0px 0px; /* border-radius: 50%; */`

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin-top: ${(props) => props.theme.sizeOfSpace(1)};
  color: ${(props) => props.theme.colors.mono700};
`
const SubTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes[2]};
  color: ${(props) => props.theme.colors.mono300};
`

const ThemeColorItem = (props) => {
  const [touch, onTouch] = useState(false)
  const { color, title, subTitle } = props
  return (
    <Wrapper
      onClick={() => {
        copyToClipboard(title)
        onTouch(true)
        setTimeout(() => {
          onTouch(false)
        }, 300)
      }}
      flat={touch}
    >
      <ColorBlock color={color} />
      <Title>{touch ? "Copied" : title}</Title>
      <SubTitle>{touch ? "" : subTitle}</SubTitle>
    </Wrapper>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const SectionTitle = styled.div`
  width: 100%;
  margin: 32px 4px 4px 4px;
  font-size: ${(props) => props.theme.fontSizes[7]};
`

const ColorList = Object.keys(theme.colors).map((item, idx) => {
  const color = theme.colors[item]
  let ColorItem = <ThemeColorItem color={color} title={item} subTitle={color} />
  if (idx === 2 || (idx > 2 && (idx - 2) % 11 === 0)) {
    let title = item.substring(0, item.length - 2)
    title = `${title.charAt(0).toUpperCase()}${title.slice(1)}`
    ColorItem = (
      <>
        <div style={{ width: "100%" }} />
        <SectionTitle>{title}</SectionTitle>
        {ColorItem}
      </>
    )
  }
  return ColorItem
})

export const ThemeColorsWrapper = () => {
  return (
    <Container>
      <SectionTitle>Base Colors</SectionTitle>
      {ColorList}
    </Container>
  )
}

export const ThemeColors = withTheme(ThemeColorsWrapper)
