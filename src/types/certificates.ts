export interface ResponseSuccess<T> {
    code:    string;
    data:    T[];
    message: string;
}

export interface Certificate {
    certificate: string;
    code:        string;
    dateOfIssue: string;
    fullName:    string;
    periods:     string;
    totalHours:  string;
}

export interface User {
    category: string;
    dni:      string;
    lastName: string;
    level:    string;
    name:     string;
}
