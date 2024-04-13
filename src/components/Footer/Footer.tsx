import "./_Footer.scss";

const date = new Date();

export default function Footer() {
    return (
        <div className="footer">
            <h1>Iven Schlenther</h1>
            <h2>Software Engineer • {date.getFullYear()}</h2>
        </div>
    );
}