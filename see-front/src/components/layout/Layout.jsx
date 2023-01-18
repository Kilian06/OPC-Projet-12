import NavBarHor from "../navBarHor";
import NavBarVer from "../navBarVer";

function Layout(props) {
  return (
    <div>
      <NavBarHor />
      <NavBarVer />
      <div className="content">{props.children}</div>
    </div>
  );
}

export default Layout;
