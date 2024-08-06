import React, { useState } from "react";

// 함수 컴포넌트를 사용한 방법
function ConfirmButtonFunction(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <div>
            <h3>함수 컴포넌트 방법</h3>
            <button
                onClick={handleConfirm}
                disabled={isConfirmed}
            >
                {isConfirmed ? "확인됨" : "확인하기"}
            </button>
        </div>
    );
}
export default ConfirmButtonFunction;