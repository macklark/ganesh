interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    size?: number;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, ...props }) => (
    <svg width={size} height={size} {...props}>
        <use href={`/sprite.svg#${name}`} />
    </svg>
);

export default Icon;
