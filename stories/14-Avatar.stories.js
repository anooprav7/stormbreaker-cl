import React, { useState } from "react"
import {Avatar} from '../src/components/Avatar'
import {Box} from '../src/layout/Box'
import { defaultDecoratorArr } from "./themeDecorator"

export default {
  title: "components/Avatar",
  component: Avatar,
  decorators: defaultDecoratorArr,
}

export const Showcase = () => {
  return <Avatar src="https://source.unsplash.com/random/200x200?face" />
}

export const Sizes = () => {
  return (
    <Box display="flex" alignItems="center">
      <Avatar size="small" bg="warning" borderRadius={4} src="https://source.unsplash.com/random/201x201?face" />
      <Box mr={4} />
      <Avatar size="medium" borderRadius={4} src="https://source.unsplash.com/random/201x201?face" />
      <Box mr={4} />
      <Avatar size="large" borderRadius={4} src="https://source.unsplash.com/random/201x201?face" />
    </Box>
  )
}


export const Rounded = () => {
  return (
    <Box display="flex" alignItems="center">
      <Avatar rounded size="small" src="https://source.unsplash.com/random/301x301?face" />
      <Box mr={4} />
      <Avatar rounded size="medium" src="https://source.unsplash.com/random/301x301?face" />
      <Box mr={4} />
      <Avatar rounded size="large" src="https://source.unsplash.com/random/301x301?face" />
    </Box>
  )
}

export const Shadow = () => {
  return (
    <Box display="flex" alignItems="center">
      <Avatar rounded boxShadow={1} size="small" src="https://source.unsplash.com/random/100xx100?face" />
      <Box mr={4} />
      <Avatar rounded boxShadow={2} size="medium" src="https://source.unsplash.com/random/100xx100?face" />
      <Box mr={4} />
      <Avatar rounded boxShadow={3} size="large" src="https://source.unsplash.com/random/100xx100?face" />
    </Box>
  )
}