export default function Footer() {
    return (
        <div className="flex flex-col items-center my-10">
            <p>
                Made with 💚 by Fabio Viscuso using Next.js. See the project code
                <a
                    className="inline-block font-bold main-text-gradient hover:scale-[1.1] hover:mx-2 transition-all"
                    href="https://github.com/FabioViscuso/FabioViscuso">
                    &nbsp;in this repo
                </a>
                !
            </p>
            <p className="mt-1">🚧 This is a WIP project in its first phases, stay tuned! 🚧</p>
        </div>
    )
}
