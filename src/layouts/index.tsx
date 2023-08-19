import { Box, Container } from "@mui/material"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { Header } from "../components/Header"

const MotionBox = motion(Box)

export default function Layout({
  children,
  path,
}: {
  children: React.ReactNode
  path: string
}) {
  return (
    <Container
      maxWidth="sm"
      sx={{
        paddingLeft: 3,
        paddingRight: 3,
        paddingBottom: 2,
        minHeight: "100vh",
      }}
    >
      <Header />
      <AnimatePresence mode="wait">
        <MotionBox
          key={path}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </MotionBox>
      </AnimatePresence>
    </Container>
  )
}
