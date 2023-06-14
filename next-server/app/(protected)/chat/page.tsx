import { Suspense } from "react";
import { Contacts } from "./Contacts";
import AddContact from "./AddContact";

export const metadata = {
  title: "Executable | Chats and Messages",
  description: "Page that shows all the chat messages",
};
export const revalidate = 0;

export default async function ChatPage() {
  return (
    <>
      <section>
        <h1 className="text-4xl font-secondary font-bold">Your Messages</h1>
        <div className="mt-4 text-gray-400 max-w-lg leading-normal">
          You can share your{" "}
          <span className="text-blue-500">Executable Id</span> to or from anyone
          to start messaging. Just ask your friend for their Executable Id and
          add them to your contacts list.
        </div>
      </section>
      <section className="grid grid-cols-3 mt-8 gap-4">
        <Suspense
          fallback={(() => {
            const loaders = [];
            for (let index = 0; index < 9; index++) {
              loaders.push(<div className="h-16 bg-gray-800 rounded-lg"></div>);
            }
            return loaders;
          })()}
        >
          {/* @ts-expect-error */}
          <Contacts />
        </Suspense>
      </section>
      <section className="mt-8">
        <AddContact />
      </section>
    </>
  );
}
