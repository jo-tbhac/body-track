import AntDesign from "@expo/vector-icons/AntDesign"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const UnorderedList: FC<Props> = ({ size, color }) => {
  return <AntDesign name="unordered-list" size={size} color={color} />
}
