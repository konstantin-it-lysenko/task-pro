import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  color: var(--text-color);
  font-size: 18px;
  font-weight: normal;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  border: 1px solid var(--input-color);
  opacity: 0.5;
  color: var(--text-color);
  font-size: 14px;
  border-radius: 8px;
  background-color: transparent;
  padding: 14px 18px;
  margin-bottom: 24px;
  outline: transparent;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);

  &: focus {
    opacity: 1;
  }
`;

export const Text = styled.p`
  color: var(--text-color);
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 14px;
`;

export const IconsUl = styled.ul`
  display: flex;
  margin-bottom: 24px;
  gap: 8px;
`;
export const IconLi = styled.li``;
export const IconLabel = styled.label``;
export const IconSVG = styled.svg`
  stroke: var(--icon-stroke-color);
  stroke-opacity: 0.5;
`;

export const InputRadio = styled.input`
  display: none;

  &:checked + svg use {
    stroke: var(--accent-color);
    stroke-opacity: 1;
  }
`;

export const BacksUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  gap: 4px;
`;
export const BackLi = styled.li``;
export const BackLabel = styled.label``;
export const BackSVG = styled.svg`
  stroke: --icon-stroke-color;
  stroke-opacity: 0.5;
`;

export const BackInputRadio = styled.input`
  display: none;

  &:checked + svg use {
    stroke: var(--accent-color);
    stroke-opacity: 1;
  }
`;

// button {
//     font-weight: 500;
//     border-radius: 8px;
//     padding: 10px;
//     background-color: #5255bc;
//     color: #fff;
//     margin-top: 40px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 8px;

//     span {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       border-radius: 6px;
//       padding: 7px;
//       background-color: #fff;
//     }

export const Button = styled.button`
  padding: 10px;
  font-weight: 500;
  border-radius: 8px;
  background-color: var(--accent-color);
`;
