
export function Elder(color){
    window.addEventListener("scroll", function(){
        const header = document.getElementById("header-principal");    
        header.classList.toggle("abajo", this.window.scrollY>0);
        header.style.transition = "all 0.3s ease-in-out";
        document.head.appendChild(styleElement);
    });
    
    const styles = `
        header.abajo{
            background-color: ${color};
        }
    `
    
    const styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    
}

