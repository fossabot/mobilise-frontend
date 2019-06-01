import React from 'react';
import { Button, Badge } from 'react-bootstrap';

const RoleBadge = ({ name, number, handleSelect, selected }) => {
  const isSelected = selected === name;
  return (
    <Button
      variant={isSelected ? 'success btn-raised' : 'primary btn-raised'}
      type="button"
      style={{
        textTransform: 'none',
        fontSize: '1rem',
        padding: '0.3rem',
        marginLeft: '0.3125rem',
        backgroundColor: 'info'
      }}
      name={name}
      onClick={handleSelect}
    >
      {name}
      {number ? (
        <Badge variant="light" style={{ marginLeft: '0.3rem' }}>
          {number}
        </Badge>
      ) : (
        number
      )}
    </Button>
  );
};

export default RoleBadge;