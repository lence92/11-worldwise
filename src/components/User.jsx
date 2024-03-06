import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./User.module.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <Button type="primary" onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx` // done // correct
2) In the `Login.jsx` page, call `login()` from context // done
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app` // done
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js` // done
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
