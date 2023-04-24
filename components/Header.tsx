import styled from "styled-components";
import Link from "next/link";
import Text from "@/styles/Text.module.css";
import button from "@/styles/Button.module.css";
import Image from "next/image";

import iconUser from "../public/svg/profile-user.png";
import iconCart from "../public/svg/cart.svg";
import iconArrow from "../public/svg/arrow-down-sign-to-navigate.png";
import Banner from "./Banner";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <div>
          <HeaderTitle>happy kids</HeaderTitle>
        </div>
        <HeaderNav>
          <HeaderNavTitle>
            <HeaderNavItem>
              <Link href="/">Home</Link>
            </HeaderNavItem>
            <HeaderNavItem>
              <Link href="/product">Shop Collection</Link>
            </HeaderNavItem>
            <HeaderNavItem>
              <Link href="/about">Our Story</Link>
            </HeaderNavItem>
            <HeaderNavItem>
              <Link href="/contact">Contact</Link>
            </HeaderNavItem>
          </HeaderNavTitle>

          <HeaderNavIcon>
            <Image
              src={iconUser}
              alt="icon"
              width={24}
              height={24}
              style={{ marginLeft: "20px" }}
            />
            <Image
              src={iconArrow}
              alt="icon"
              width={12}
              height={12}
              style={{ marginLeft: "5px", marginTop: "5px" }}
            />
            <Image
              src={iconCart}
              alt="icon"
              width={24}
              height={24}
              style={{ marginLeft: "20px" }}
            />
            <Image
              src={iconArrow}
              alt="icon"
              width={12}
              height={12}
              style={{ marginLeft: "5px", marginTop: "5px" }}
            />
          </HeaderNavIcon>
        </HeaderNav>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.header`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-left: 16px;
  align-items: center;
  /* background-color: pink; */
  margin-top: 24px;
`;

const HeaderTitle = styled.h1`
  font-size: 100px;
  margin: 0;
  letter-spacing: 10px;
  font-weight: normal;
  margin-top: 24px;
`;

const HeaderNav = styled.ul`
  list-style: none;
  /* margin: 0; */
  padding: 0;
  display: flex;
  flex-direction: row;
  /* margin-top: 24px;
  margin-bottom: 24px; */
  margin-top: 24px;
  //background-color: #ec1212;
`;

const HeaderNavItem = styled.li`
  margin: 0px 50px;
  align-items: center;
`;

const HeaderNavTitle = styled.li`
  display: flex;
  margin: 24px;
`;

const HeaderNavIcon = styled.li`
  display: flex;
  margin: 24px;
  padding: 0 24px;
  //background-color: blue;
`;

export default Header;
