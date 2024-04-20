"use client";
import React from "react";
import emotionStyled from "@emotion/styled";

type Props = {
  text: string;
};

const StyledHeaderText = emotionStyled.span({
  color: "white",
  fontSize: "2rem",
  fontWeight: "bold",
  padding: "0.5rem",
  textShadow: "2px 2px 2px black",
});

const HeaderText = ({ text }: Props) => {
  return <StyledHeaderText>{text}</StyledHeaderText>;
};

export default HeaderText;
