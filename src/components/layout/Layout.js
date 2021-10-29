import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div style={{ display: "flex" }}>
      <MainNavigation/>
      <main className={classes.content}>{props.children}</main>
    </div>
  );
}

export default Layout;
