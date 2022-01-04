import { Layout, Menu } from "antd";
import {
  UserOutlined,
  IdcardOutlined,
  WalletOutlined,
  ApartmentOutlined,
  CodeOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import { URL_NAVIGATION } from "../../constants/urlNavigation";
import { useState } from "react";
import me from "../../images/julien.jpeg";

import "./Sidebar.style.scss";

const { Sider } = Layout;
const { SubMenu } = Menu;
export default function Sidebar() {
  const [collapsed, onCollapse] = useState(true);

  const generateKey = (pre: string | number): string => {
    return `${pre}_${new Date().getUTCMilliseconds()}`;
  };

  return (
    <Sider
      className="Sidebar"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <a href="/">
        <img src={me} alt="f-julien" />
      </a>
      <Menu theme="dark" mode="inline">
        <SubMenu key={generateKey(1)} icon={<IdcardOutlined />} title="Parcour">
          <Menu.Item>
            <Link to={`/${URL_NAVIGATION.RESUME}`}>Résumé</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/${URL_NAVIGATION.FORMATION}`}>Formation</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/${URL_NAVIGATION.PROFESSIONAL}`}>Professionel</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/${URL_NAVIGATION.OTHER}`}>Autre</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key={generateKey(2)} icon={<CodeOutlined />} title="Code">
          <Menu.Item>
            <SubMenu
              key={generateKey("second")}
              icon={<ApartmentOutlined />}
              title="Design patterns"
            >
              <Menu.Item>
                <Link to={`/${URL_NAVIGATION.CREATION}`}>Creation</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={`/${URL_NAVIGATION.STRUCTURAL}`}>Structural</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={`/${URL_NAVIGATION.BEHAVIORAL}`}>Behavioral</Link>
              </Menu.Item>
            </SubMenu>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/${URL_NAVIGATION.BEHAVIORAL}`}>JavaScript</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/${URL_NAVIGATION.BEHAVIORAL}`}>JAVA</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key={generateKey("first")} icon={<WalletOutlined />}>
          Projets
        </Menu.Item>
        <Menu.Item key={generateKey("first")} icon={<UserOutlined />}>
          A propos
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
