import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  padding: 30px;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Label = styled.label`
  font-size: 25px;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  display: block;
  font-size: 20px;
`;

export const Btn = styled.button`
  padding: 7px;
  transition: color 150ms ease-in, background-color 150ms ease-in;
  &:hover,
  &:focus {
    color: white;
    background-color: #010101;
  }
`;
