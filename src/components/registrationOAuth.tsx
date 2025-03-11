import FacebookIcon from '../assets/icons/facebook-logo.svg';
import GoogleIcon from '../assets/icons/google-logo.svg';
import AppleIcon from '../assets/icons/apple-logo.svg';

export function RegistrationOAuth() {
    const oauths = [
        {
            className: 'bg-[#024c99] outline-[#024c99]',
            icon: FacebookIcon,
        },
        {
            className: 'bg-[#f4f5f7] outline-[#b4bac5]',
            icon: GoogleIcon,
        },
        {
            className: 'bg-[#1c1c1e] outline-[#1c1c1e]',
            icon: AppleIcon,
        }
    ];

    return (
        <div className="text-center text-[#888fa8] space-y-4 my-6">
            <p>
                Puedes registrarte con
            </p>
            <div className="flex justify-center gap-6">
                {oauths.map((item) => (
                    <div className={`rounded-full outline py-2 px-8 min-w-[152px] ${item.className}`} key={item.icon}>
                        <img src={item.icon} className="mx-auto"/>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center gap-4">
                <div className="flex-grow border-t border-gray-300 max-w-24"></div>
                <span>O completa la siguiente información</span>
                <div className="flex-grow border-t border-gray-300 max-w-24"></div>
            </div>
        </div>
    )
}