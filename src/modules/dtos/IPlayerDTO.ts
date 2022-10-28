interface IPlayerDTO {
    id: string,
    team_id: string | null,
    name: string,
    age: number,
    position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward",
    goals: number,
}

export { IPlayerDTO }