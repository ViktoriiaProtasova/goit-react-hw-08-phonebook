const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRefreshing = state => state.auth.isRefreshing;
const getUsername = state => state.auth.user.name;
const getUseremail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getIsRefreshing,
  getUsername,
  getUseremail,
};
export default authSelectors;
