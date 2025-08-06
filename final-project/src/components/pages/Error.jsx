import { Link } from "react-router-dom";

export default function Error() {
    return (
        <>
            <div style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}>
                <div className="text-center">
                    <img src="/assets/images/image_4.jpg" className="d-block mx-auto rounded-circle" style={{ width: "200px" }} />
                    <h1>OOPS!</h1>
                    <h2>Something changed </h2>
                    <h3>This page doesn't exist!!</h3>
                    <Link to="/">Back to HOME!!</Link>
                </div>
            </div>
        </>
    )
}