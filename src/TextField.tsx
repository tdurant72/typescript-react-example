import React,{useRef} from "react";

interface Person{
    firstName:string;
    lastName:string;
}
interface Props {
    text:string;
    ok?:boolean;
    i?:number;
    person:Person;
    handleChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = () => {
    
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    
    return(
        <div ref={divRef}>
            <input ref={inputRef} />
        </div>
    )
};