import React, {useState} from "react";

function Clock(props) {

    const [nowDate, setNowDate] = useState(new Date().toLocaleTimeString());

    setInterval(() => {setNowDate(new Date().toLocaleTimeString())}, 1000);

    return (
        <div>
            <h1>안녕, 리엑트!</h1>
            {/* <h2>현재 시간: {new Date().toLocaleTimeString()}</h2> */}
            <h2>현재 시간: {nowDate}</h2>
        </div>
    );
}

export default Clock;