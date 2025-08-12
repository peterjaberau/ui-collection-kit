import { connect, mapReadPretty } from "@formily/react"
import { PasswordProps } from "antd/lib/input"
import React from "react"
import { PreviewText } from "../preview-text"
import { PasswordStrength } from "./PasswordStrength"
import { PasswordInput, PasswordStrengthMeter } from "@ui-kit/components"
import { Stack } from "@chakra-ui/react"


export const Password = connect((props: any) => {
  const { value, checkStrength, max = 5, ...others } = props
  return (
    <>
      <Stack>
        <PasswordInput
          {...others}
          value={value}
        />
        {
          checkStrength && (
            <PasswordStrength value={String(value)}>
              {(score) => {
                console.log("score", score)
                return (
                  <PasswordStrengthMeter
                    max={max || 5}
                    value={Math.min(Math.floor((score / 100) * max), max)}
                  />
                )
              }}
            </PasswordStrength>
          )
        }
      </Stack>
    </>
  )
}, mapReadPretty(PreviewText.Input))

export default Password
