import { Layout } from "antd";
import styles from "./Header.module.scss";
import clsx from "clsx";

const { Header } = Layout;

function HeaderLayout() {
    return (
        <Header className={clsx("container", styles.header)}>
            <div className={styles.logo}>as</div>
        </Header>
    );
}
export default HeaderLayout;
