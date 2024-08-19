import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Loader from "@/components/loader";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Chat() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <section className="flex flex-col w-[94vw] h-[70vh] mt-10 rounded-md bg-gray-100 shadow-[24px_24px_0px_#000000] justify-start items-center">
      <div className="w-[70vw] mt-10 flex justify-center">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
          />
          <Dialog>
            <DialogTrigger>
            <button className="mx-auto w-30 h-10 py-1 px-2.5 rounded-md border-2 border-[#323232] bg-[#fff] shadow-[4px_4px_0_#000000] text-lg font-semibold text-[#323232] cursor-pointer active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
          save
        </button>
            </DialogTrigger>
            <DialogContent className="shadow-[8px_8px_0_#000000]">
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
      </div>
      <div className="mt-48">
        {/* loader */}

        <Loader />

        {/* flashcard code */}
      </div>
    </section>
  );
}
