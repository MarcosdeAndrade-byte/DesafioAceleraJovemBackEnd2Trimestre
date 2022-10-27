interface IPlayersRepository {
    createTable(): Promise<void>;
}

export { IPlayersRepository };