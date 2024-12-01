const loginData = [
    {
        username: "Member",
        Password: "1234",
        token: "member"
    },
    {
        username: "Visitor",
        Password: "1234",
        token: "visitor"
    }
]

export function checkUsername(username, password) {
    const userInfo = loginData.find(
      (u) => u.username === username && u.Password === password
    );
    return userInfo ? { token: userInfo.token} : null;
  }