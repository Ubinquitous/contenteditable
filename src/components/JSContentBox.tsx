import React from "react";
import { styled } from "styled-components";

const JSContentBox = () => {
  const ref = React.useRef<HTMLStyleElement>(null);
  const [content, setContent] = React.useState("");

  const handleChange = (e: React.KeyboardEvent<HTMLStyleElement>) => {
    e.preventDefault();
    const { textContent } = e.currentTarget;
    if (textContent) setContent(textContent);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLStyleElement>) => {
    // eslint-disable-next-line
    if (e.key === ";") eval(content);
  };

  const focusContentEditTextToEnd = (element: HTMLElement) => {
    if (element.innerText.length === 0) return element.focus();
    const selection = window.getSelection();
    const newRange = document.createRange();
    newRange.selectNodeContents(element);
    newRange.collapse(false);
    selection?.removeAllRanges();
    selection?.addRange(newRange);
  };

  React.useEffect(() => {
    if (ref.current) {
      ref.current.style.cssText = content;
      focusContentEditTextToEnd(ref.current);
    }
  }, [content]);

  return (
    <Container>
      <Title />
      <Box
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={handleChange}
        onKeyDown={handleKeyDown}
      >
        {content}
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Box = styled.style`
  display: block;
  width: 400px;
  height: 400px;
  padding: 20px;
  background-color: #f7df1c;
  border: 2px solid black;
`;

const Title = styled.span`
  font-size: 2rem;
  color: black;
  font-weight: 600;

  &:after {
    content: "JS 코드를 작성해보세요!";
  }
`;

export default JSContentBox;
