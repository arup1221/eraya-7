"use client"
import { PinContainer } from "@/components/ui/3d-pin"

export default function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji ">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[10rem] h-[10rem] items-center">
          <h3 className="max-w-xs !pb-2 !m-0 pt-10 font-bold text-center  text-base text-slate-100 items-center">JS Framework</h3>
        </div>
      </PinContainer>
    </div>
  )
}


