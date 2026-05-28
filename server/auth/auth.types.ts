export interface RegisterDto {
    username: string;
    password: string;
    email: string;
}

export interface JwtPayload {
    puuid: string;
}