class Player {
    id: string;
    team_id: string | null;
    name: string;
    age: number;
    goals: number;
    position: string;

    constructor(id: string, team_id: string | null, name: string, age: string, position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward", goals: number) {
        id = id;
        team_id = team_id || null;
        name = name;
        age = age;
        position = position;
        goals = goals;
    }
}

export { Player };