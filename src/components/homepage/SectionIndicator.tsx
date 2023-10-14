"use client"

export default function SectionIndicator () {
    return(
        <ul id="section-indicator" className=" hidden w-[1rem] fixed left-4 top-1/2 -translate-y-1/2 lg:flex flex-col items-center gap-10">
            <li className="bg-black rounded-full transition-all" data-indicator={'1'}></li>
            <li className="bg-black rounded-full transition-all" data-indicator={'2'}></li>
            <li className="bg-black rounded-full transition-all" data-indicator={'3'}></li>
            <li className="bg-black rounded-full transition-all" data-indicator={'4'}></li>
        </ul>
    )
}