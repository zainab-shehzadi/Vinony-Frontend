export type ModelTag = {
    id: string;
    label: string;
};

export type ModelCardData = {
    id: string;
    title: string;
    provider: string;
    credits: number;          
    creditsUnit: string; 
    description: string;
    tags: ModelTag[];
    ctaLabel?: string; // e.g. "Try Now"
    onTry?: (id: string) => void;
};
