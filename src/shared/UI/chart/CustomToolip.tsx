const CustomTooltip = ({ hovered, data }: any) => {
    if (!hovered) return null;

    const item = data[hovered.index];
    const value = item[hovered.key];

    return (
        <div
            style={{
                position: 'fixed', // важно — фиксированное позиционирование к экрану
                left: hovered.x,
                top: hovered.y - 50, // поднимаем на 50px выше курсора
                transform: 'translateX(-50%)',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                padding: '6px 10px',
                borderRadius: 6,
                pointerEvents: 'none',
                zIndex: 10,
                whiteSpace: 'nowrap',
            }}
        >
            <p style={{ color: hovered.key === 'purple' ? 'var(--purple)' : 'var(--normal)' }}>
                {hovered.key === 'purple' ? `Огненная река` : `Алмазное ядро`}
            </p>
            <p>${value.toLocaleString()}</p>
        </div>
    );
};

export default CustomTooltip;
