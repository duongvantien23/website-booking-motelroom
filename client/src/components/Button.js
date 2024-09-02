import React, {memo} from "react";

export const Button = ({ text, textColor, bgColor, IcAfter, onClick, fullWidth }) => {
    return (
        <button className={`${textColor} ${bgColor} ${fullWidth && "w-full"} px-4 py-2 rounded hover:underline flex items-center justify-center gap-1`}
        onClick = {onClick}>
            {text}
            {IcAfter && <IcAfter/>}
          
        </button>
    );
};
export default memo(Button);
