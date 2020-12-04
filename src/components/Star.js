import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import { FaRegStar as Icon } from "react-icons/fa";
import useBoop from "../hooks/useBoop";
import useAngledBoop from "../hooks/useAngleBoop";

const CircleDemo = () => {
  const [c1s, c1t] = useAngledBoop(0);
  const [c2s, c2t] = useAngledBoop(1);
  const [c3s, c3t] = useAngledBoop(2);
  const [c4s, c4t] = useAngledBoop(3);
  const [c5s, c5t] = useAngledBoop(4);
  const [starStyles, starTrigger] = useBoop({
    scale: 1.1,
    rotation: 10,
    timing: 150,
    springConfig: {
      tension: 300,
      friction: 6,
    },
  });
  return (
    <Wrapper>
      <Button
        onMouseEnter={() => {
          c1t();
          c2t();
          c3t();
          c4t();
          c5t();
          starTrigger();
        }}
      >
        <IconWrapper style={starStyles}>
          <Icon size={48} />
        </IconWrapper>
      </Button>
      <Circle style={c1s} />
      <Circle style={c2s} />
      <Circle style={c3s} />
      <Circle style={c4s} />
      <Circle style={c5s} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: min-content;
`;
const Button = styled.button`
  border: none;
  margin: 0;
  width: auto;
  overflow: visible;
  background: white;
  position: relative;
  z-index: 3;
  padding: 8px;
  border-radius: 50%;
`;
const IconWrapper = styled(animated.span)`
  display: block;
  svg {
    display: block;
    stroke: var(--color-text) !important;
    fill: var(--color-background) !important;
  }
`;
const Circle = styled(animated.div)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 8px;
  height: 8px;
  margin: auto;
  border-radius: 50%;
  background: hsl(50deg, 100%, 48%);
`;
export default CircleDemo;
