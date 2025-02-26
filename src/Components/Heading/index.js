import React from "react"; 

const sizes = { 
headingxs: "text-[24px] font-bold lg:text-[20px] md:text-[22px]", 
headings: "text-[60px] font-bold 1g:text-[51px] md:text-[52px] sm:text-[46px]", 
}; 

const Heading = ({ children, className = "", size = "headingxs", as, ...restProps }) => { 
    const Component = as || "h6"; 
return ( 
    <Component className={`text-white-a700 font-georgia ${className} ${sizes [size]}`} {...restProps}>
        {children}
    </Component>

); 
}; 
export { Heading };