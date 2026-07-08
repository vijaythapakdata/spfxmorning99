import { PrimaryButton } from '@fluentui/react';
import * as React from 'react';

const UseStateHook:React.FC<{}>=()=>{

    const [count,setCount]=React.useState<number>(0);

    return(
        <>
        <p>Count:{count}</p>
        <PrimaryButton
        text="Increment"
        onClick={()=>setCount(count+1)}
        />
        </>
    )
}
export default UseStateHook;