export default function InputRadio({children, value, id, name}: {
    children: React.ReactNode,
    value: string,
    id: string,
    name: string
}) {
    return (
        <>
            <label className="font-medium flex items-center">
                <input
                    type="radio" value={value} id={id} name={name}
                    className="relative size-6 appearance-none rounded-full border border-gray-300 bg-white before:absolute
                    before:inset-1.5 before:rounded-full before:bg-white not-checked:before:hidden checked:border-main-200
                    checked:bg-main mr-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-200
                    disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto
                    forced-colors:before:hidden"/>
                {children}
            </label>
        </>
    );
}