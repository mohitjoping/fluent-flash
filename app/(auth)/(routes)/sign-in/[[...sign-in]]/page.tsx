import { SignIn } from '@clerk/nextjs'

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Page() {
    const words = [
        {
          text: "",
          className: "text-4xl text-white font-normal",
        },
      ];
      return (
        <div className='flex flex-col justify-center gap-4'>
            <SignIn />
        </div>
      
    );
}