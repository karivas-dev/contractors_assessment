export default function InputText({label, value, onUpdate, type}: {
    label: string | null,
    value?: string | null,
    type: string,
    onUpdate: (value: string) => void
}) {
    return (
        <div className="relative">
            <input type={type} id={(label || '').replace(' ', '-').toLowerCase()}
                   className="block rounded-xl px-2.5 pb-2.5 pt-6 w-full text-sm text-gray-900 bg-white border border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-main peer"
                   placeholder=" " value={value || ''} onChange={(e) => onUpdate(e.target.value)}/>
            <label htmlFor="floating_filled"
                   className="absolute text-sm text-gray-500 peer-focus:font-medium duration-300 transform -translate-y-3 scale-80 top-4 z-10 origin-[0] start-2.5 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                {label}
            </label>
        </div>
    );
}