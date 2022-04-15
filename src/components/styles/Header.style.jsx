import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00000033;
  padding: 0 50px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 999;
  .header__left-side{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160px;
        button {
            display: none;
            width: 50px;
            color: #ffffff;
            font-size: 2rem;
        }
        a {
            color: #ffffff !important;
            text-decoration: none;
        }
    }
  }
  .active {
    color: #f1a111 !important;
  }
  .menu {
    display: flex;
    width: 300px;
    align-items: center;
    font-size: 1rem;
    list-style: none;
    margin: auto;
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        transition: 0.3s;
        a {
            text-decoration: none;
            :hover{
                color: #f1a111;
            }
        }
    }
  }
  .header__right-side {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      input,button{
        background-color: #ffffffaa;
        :focus{
            outline: none;
        }
      }
      input {
          border: none;
          border-radius: 30px 0 0 30px;
          padding: 5px 20px;
      }
      button {
          cursor: pointer;
          border: none;
          border-left: solid 1px #ffffff;
          color: #ffffff;
          border-radius: 0 30px 30px 0;
          padding: 5px 10px;
          font-size: 1em;
          :hover {
              color: #ffffff;
          }
      }
  }
`;