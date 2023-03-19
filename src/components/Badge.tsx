
interface BadgeProps {
    color: string;
    info: number,
    label: "population" | "area",
}

export const Badge = ({ color, info, label }: BadgeProps) => {
    return (
        <span className={`badge fs-6 p-2 m-4 bg-${color}`}> {label}:{info}</span>
    )
}