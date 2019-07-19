import styled from 'styled-components';

export const User = styled.div`
  max-width: 700px;
  margin: 20px auto;
  padding: 0 20px;

  article {
    background: #ffffff;
    border: 1px solid #335d80;
    border-radius: 5px;
    padding: 20px;
    margin: 0 0 20px 0;
  }

  article h2 {
    display: flex;
    justify-content: center;
    color: #1a2f40;
    margin-bottom: 20px;
  }

  article .data {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }

  article .data p {
    display: flex;
    align-items: center;
    color: #335d80;
    font-size: 16px;
    line-height: 24px;
  }

  article .data p .icon {
    font-size: 15px;
    margin: 0 5px 0 0;
  }

  article a {
    height: 42px;
    border: 2px solid #1a2f40;
    border-radius: 5px;
    background: none;
    color: #1a2f40;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 0 0;
    transition: all 0.2s;
  }
  article a:hover {
    background: #1a2f40;
    color: #66baff;
  }
`;
export const Button = styled.a`
  height: 42px;
  border: 2px solid #1a2f40;
  border-radius: 5px;
  background: none;
  color: #1a2f40;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 0;
  transition: all 0.2s;
`;
