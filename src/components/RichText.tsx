import { Button, SxProps, Typography, TypographyProps } from "@mui/material"
import { isNil } from "lodash"
import Markdown from "markdown-to-jsx"
import React, { useMemo } from "react"
import Link from "./Link"

export type RichTextProps = {
  text: string
  textProps?: TypographyProps
}

const RichText = ({ text, textProps }: RichTextProps) => {
  const textPropsProps = useMemo(() => {
    if (!isNil(textProps)) {
      return {
        ...textProps,
        sx: {
          hyphens: "auto",
          overflowWrap: "break-word",
          ...(textProps?.sx as SxProps),
        },
      }
    }

    return { sx: { hyphens: "auto", overflowWrap: "break-word" } }
  }, [textProps])

  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: Typography,
            props: {
              variant: "h1",
              ...textPropsProps,
            },
          },
          h2: {
            component: Typography,
            props: {
              variant: "h2",
              ...textPropsProps,
            },
          },
          h3: {
            component: Typography,
            props: {
              variant: "h3",
              ...textPropsProps,
            },
          },
          h4: {
            component: Typography,
            props: {
              variant: "h4",
              ...textProps,
            },
          },
          h5: {
            component: Typography,
            props: {
              variant: "h5",
              ...textProps,
            },
          },
          h6: {
            component: Typography,
            props: {
              variant: "h6",
              ...textProps,
            },
          },
          p: {
            component: Typography,
            props: {
              variant: "body1",
              ...textProps,
            },
          },
          span: {
            component: Typography,
            props: {
              variant: "body1",
              ...textProps,
            },
          },
          button: {
            component: Button,
          },
          a: {
            component: Link,
            props: {
              sx: { textDecoration: "underline" },
            },
          },
          img: {
            props: {
              style: { width: "100%" },
            },
          },
        },
      }}
    >
      {text}
    </Markdown>
  )
}

export default RichText
