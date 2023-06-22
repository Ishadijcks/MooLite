export interface MooLiteSaveData {
    plugins: Record<
        string,
        {
            isEnabled: boolean;
            config: { key: string; value: any }[];
            data?: Record<string, any>;
        }
    >;
}
