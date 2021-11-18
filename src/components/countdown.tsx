import { FunctionComponent } from "react";

interface CountdownProps {
    minutes: string | number;
    seconds: string | number;
}

const Countdown: FunctionComponent<CountdownProps> = ({ minutes, seconds }) => {
    return (
        <div className="countdown">
            <h2 className="minutes">{minutes}</h2>
            <h2 className="seconds">{seconds}</h2>
        </div>
    );
}

export default Countdown;