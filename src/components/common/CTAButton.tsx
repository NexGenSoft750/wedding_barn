import styles from "./CTAButton.module.scss";

type Props = {
    text?: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    disabled?: boolean;
};

const CTAButton: React.FC<Props> = ({ 
    text = "Book a Tour",
    href,
    onClick,
    variant = 'primary',
    size = 'medium',
    className = '',
    disabled = false
}) => {
    const buttonClasses = `${styles.ctaButton} ${styles[variant]} ${styles[size]} ${className}`;

    if (href) {
        return (
            <a 
                href={href}
                className={buttonClasses}
                aria-label={text}
            >
                {text}
            </a>
        );
    }

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            aria-label={text}
        >
            {text}
        </button>
    );
};

export default CTAButton;