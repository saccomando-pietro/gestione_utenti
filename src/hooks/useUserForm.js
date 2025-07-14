import { useState } from "react";
export const useUserForm = (user = {}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [dailyHours, setDailyHours] = useState("");

  return {
    firstName: {
      type: "text",
      name: "first_name",
      id: "firstName",
      placeholder: "Nome",
      value: firstName,
      onChange: (e) => setFirstName(e.target.value),
    },
    lastName: {
      type: "text",
      name: "last_name",
      id: "lastName",
      placeholder: "Cognome",
      value: lastName,
      onChange: (e) => setLastName(e.target.value),
    },
    username: {
      type: "text",
      name: "username",
      id: "username",
      placeholder: "Username",
      value: username,
      onChange: (e) => setUsername(e.target.value),
    },
    email: {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    profile: {
      type: "text",
      name: "profile",
      id: "profile",
      placeholder: "Profilo",
      value: profile,
      onChange: (e) => setProfile(e.target.value),
    },
    dailyHours: {
      type: "text",
      name: "daily_hours",
      id: "dailyHours",
      placeholder: "Orario giornaliero",
      value: dailyHours,
      onChange: (e) => setDailyHours(e.target.value),
    },

    setFirstName,
    setLastName,
    setUsername,
    setEmail,
    setProfile,
    setDailyHours
  }
};
