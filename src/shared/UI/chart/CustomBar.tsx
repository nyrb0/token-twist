const CustomBar = ({ x, y, width, height, fill, index, dataKey, onHover, onLeave }: any) => {
    return (
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill={fill}
            rx={6}
            ry={6}
            onMouseEnter={onHover(index, dataKey)}
            onMouseLeave={onLeave}
            style={{ cursor: 'pointer' }}
        />
    );
};
export default CustomBar;
