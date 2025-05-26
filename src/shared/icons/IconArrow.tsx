const IconArrow = ({ isActive }: { isActive: boolean }) => {
    return (
        <>
            {isActive ? (
                <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7L7 6.11959e-07L0 7L14 7Z" fill="#4A4A4A" />
                </svg>
            ) : (
                <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L7 7L14 0H0Z" fill="#4A4A4A" />
                </svg>
            )}
        </>
    );
};

export default IconArrow;
