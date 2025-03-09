export default function Card({imgSrc, text}: { imgSrc: string, text: string }) {
    return (
        <>
            <img src={imgSrc} className="rounded-xl"/>
            <p className="text-disabled">{text}</p>
        </>
    );
}