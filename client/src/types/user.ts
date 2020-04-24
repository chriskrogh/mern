import { ModelMetadata } from './model';

type UserData = {
    name: string,
    email: string
};

export type User = UserData & ModelMetadata;