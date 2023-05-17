import './buttons.css'

export function NTIButton({ size, children, onClick}: { size?: "default" | "small" | "large", children: React.ReactNode, onClick: () => void}) {

    const getClassForSize = (size: "default" | "small" | "large") => {
        switch (size) {
            case "default":
                return "button-default"
            case "small":
                return "button-small"
            case "large":
                return "button-large"
            default: 
                return "default"
        }
    }

    return ( 
        <button className={`custom-button ${getClassForSize(size || 'default')}`} onClick={onClick}>
            {children}
        </button>
    )
}