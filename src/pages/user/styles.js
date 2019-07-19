import styled from 'styled-components';

export const Info = styled.div`
  max-width: 700px;
  padding: 20px;
  margin: 20px auto;
  background: #ffffff;
  border: 1px solid #335d80;
  border-radius: 5px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .header h2 {
    color: #1a2f40;
  }

  .header a {
    height: 30px;
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
    padding: 0 5px;
    margin: 0;
    transition: all 0.2s;
  }
  .header a:hover {
    background: #1a2f40;
    color: #66baff;
  }

  .header .icon {
    margin-right: 5px;
  }

  p {
    display: flex;
    align-items: center;
    color: #335d80;
    font-size: 16px;
    line-height: 24px;
  }

  p .icon {
    font-size: 15px;
    margin-right: 5px;
  }

  p span {
    margin-left: 5px;
  }

  a {
    text-decoration: none;
    margin: 0 0 0 5px;
  }
`;
