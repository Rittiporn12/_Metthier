const UserData = [
    {
        token: "member",
        firstname: "Sompong",
        lastname: "Pichitchop",
        role: "Member",
        memberID: "12345678",
        phone: "081-234-5678",
        personalQR: "",
    },
    {
        token: "visitor",
        firstname: "Pichit",
        lastname: "Srijareon",
        role: "Visitor",
        memberID: null,
        phone: "081-234-5678",
        personalQR: null,
    }
    
]

export function checkToken(token) {
    const tokeninfo = UserData.find(
      (u) => u.token === token
    );
    return tokeninfo ? { 
        token: tokeninfo.token,
        role: tokeninfo.role,
        firstname: tokeninfo.firstname,
        lastname: tokeninfo.lastname,
        memberID: tokeninfo.memberID,
        phone: tokeninfo.phone,
        personalQR: tokeninfo.personalQR
    } : null;
  }