import { LogoutLink } from "./LogoutLink";

export function Header() {
  let authLinks;
  if (localStorage.jwt === undefined) {
    authLinks = (
      <>
        <div>
          <a href="/signup">Signup</a>
        </div>
        <div>
          <a href="/">Login</a>
        </div>
      </>
    );
  } else {
    authLinks = (
      <a>
        <LogoutLink />
      </a>
    );
  }

  return (
    <header>
      <nav>
        {authLinks}
        {/* <a href="/signup">Signup</a> | <a href="/">Login</a> */}
      </nav>
    </header>
  );
}
