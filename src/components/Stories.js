"use client";
import minifaker from "minifaker";
import "minifaker/locales/en"; // the first locale import is set as default
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);
  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: "en" }),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
    console.log(storyUsers);
  }, []);
  return (
    <div>
      <h1>Stories</h1>
      {storyUsers.length}
      {storyUsers &&
        storyUsers.map((storyUser) => {
          <div key={storyUser?.id}>
            <h1>{storyUsers?.username}</h1>
            <Image src={storyUser?.img} alt={storyUsers?.username} />
          </div>;
        })}
    </div>
  );
}
