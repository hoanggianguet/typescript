import { useState } from "react";

const users = [
  {
    name: "Sarah",
    age: 20,
  },
  {
    name: "Alex",
    age: 21,
  },
  {
    name: "Michael",
    age: 21,
  },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(user);
  };

  return (
    <div>
      UserSearch
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
}; 

export default UserSearch;
