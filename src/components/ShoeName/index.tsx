import React from 'react';

import { Container, Big, New, Small } from './styles';

interface Props {
    title: string;
    subtitle: string;
    isNew: boolean;
}

const ShoeName: React.FC<Props> = ({ isNew, subtitle, title }) => {
    return (
        <Container>
            <div>
                <Big className="big">{title}</Big>
                <New className="new" show={isNew}>new</New>
            </div>
            <Small className="small">{subtitle}</Small>
        </Container>
    );
}

export default ShoeName;