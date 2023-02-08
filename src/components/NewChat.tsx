import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        messages: [],
        userId: session?.user?.email!,
      }
    );
  };
  return (
    <div onClick={createNewChat} className="newChat">
      <PlusIcon className=" h-5 w-5  " />
      <p>New chat</p>
    </div>
  );
}

export default NewChat;
