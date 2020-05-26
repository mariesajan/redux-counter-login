import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSignin } from "../actions";
import styled from "styled-components";

const StyledLoginButton = styled.button`
  margin: 10px;
  background: gray;
  border-radius: 5px;
`;

export default function Counter() {
  const isLoggedin = useSelector(state => state.isLoggedin);
  const dispatch = useDispatch();
  return (
    <StyledLoginButton onClick={() => dispatch(toggleSignin())}>
      {isLoggedin ? "Log out here" : "Login me here"}
    </StyledLoginButton>
  );
}
