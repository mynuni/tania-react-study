export default function Age({age}) {
    const message = age < 20 ? "미성년자" : "성인";

    return (
        <div>{age}살 {message}입니다.</div>
    );

}
