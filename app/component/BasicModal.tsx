'use client';

import styled from 'styled-components';

type Props = {
  className?: string;
  children?: React.ReactNode;
};
export type modalStyleProps = {
  visible?: boolean;
  width?: string;
  height?: string;
  bgColor?: string;
};

export const ModalStyle = styled.div<modalStyleProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || '300px'};
  height: ${(props) => props.height || '200px'};
  z-index: 9999;

  position: absolute;

  background-color: ${(props) => props.bgColor || 'white'};
  border: 1px solid black;
  border-radius: 8px;
`;

export const Modal = (props: Props & modalStyleProps) => {
  return (
    <>
      <div className={props.className}>
        <ModalStyle
          visible={props.visible}
          bgColor={props.bgColor}
          width={props.width}
          height={props.height}
        >
          {props.children}
        </ModalStyle>
      </div>
    </>
  );
};
