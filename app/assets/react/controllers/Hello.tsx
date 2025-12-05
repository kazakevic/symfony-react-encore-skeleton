import React from 'react';

interface HelloProps {
    fullName: string;
}

export default function Hello(props: HelloProps) {
    return <div>Hello {props.fullName}</div>;
}

